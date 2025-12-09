// import "../../envConfig.ts";
import "dotenv/config";
import { type DB } from "../index.ts";
import { type NftSchema, nftTable } from "../schema/nft.ts";

const APIKey = process.env.CG_APIKEY!;
const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": APIKey },
  body: undefined,
};

export interface NFTDetails {
  id: string;
  name: string;
  description?: string;
  symbol: string;
  asset_platform_id: string;
  native_currency: string;
  native_currency_symbol: string;
  ath_date: { usd: string; native_currency: string };
  total_supply: number;
  contract_address?: string;
  floor_price: {
    native_currency: number;
    usd: number;
  };
  image: { small: string; small_2x: string };
  banner_image: string;
  links?: {
    homepage: string;
    twitter: string;
    discord: string;
  };
}

export interface NFT {
  id: string;
  contract_address: string;
  name: string;
  symbol: string;
  asset_platform_id: string;
}

export async function getNfts(page: number = 1) {
  console.log("☘️ starting to fetch NFTs...");
  const url = `https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=20&page=${page}`;

  const response = await fetch(url, options);
  if (!response.ok) {
    return;
  }
  const data = (await response.json()) as NFT[];
  console.log("✅ fetched NFTs...");
  // console.log(data);
  return data;
}

export async function getNftDetails(id: string) {
  console.log(`☘️ starting to fetch ${id} NFT details...`);
  const url = `https://api.coingecko.com/api/v3/nfts/${id}`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) return;
    const data = (await response.json()) as NFTDetails;
    // console.log(data);
    console.log(`✅ fetched ${id} details...`);
    return data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    console.log(`fetching ${id} details failed ❌`);
  }
}

export async function seed(db: DB) {
  const nftsList = await getNfts(7);
  if (!nftsList || nftsList.length === 0) return;
  const nftsDetailList = await Promise.all(
    nftsList.map((nft) => getNftDetails(nft.id)),
  );

  const filteredData = nftsDetailList.filter((x) => x !== undefined);
  const mappedData: NftSchema[] = filteredData.map((x) => ({
    id: x.id,
    name: x.name,
    description: x.description || "",
    symbol: x.symbol,
    asset_platform_id: x.asset_platform_id,
    native_currency: x.native_currency,
    native_currency_symbol: x.native_currency_symbol,
    total_supply: x.total_supply,
    ath_date: x.ath_date.usd,
    contract_address: x.contract_address || "",
    price: x.floor_price,
    image: { src: x.image.small_2x, banner_src: x.banner_image },
    links: x.links,
  }));
  console.log("☘️ seeding data to the database");

  await db.insert(nftTable).values(mappedData).onConflictDoNothing();
}
