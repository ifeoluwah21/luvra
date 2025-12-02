import "../envConfig";

export interface NFT {
  id: string;
  contract_address: string;
  name: string;
  symbol: string;
  asset_platform_id: string;
}

export interface NFTDetails {
  id: string;
  contract_address: string;
  asset_platform_id: string;
  name: string;
  symbol: string;
  image: { small: string; small_2x: string };
  banner_image: string;
  description: string;
  native_currency: string;
  native_currency_symbol: string;
  floor_price: {
    native_currency: number;
    usd: number;
  };
  links: {
    homepage: string;
    twitter: string;
  };
}
const APIKey = process.env.CG_APIKEY!;
const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": APIKey },
  body: undefined,
};

export async function getNFTs(page: number = 1) {
  console.log("☘️ starting to fetch NFTs...");
  const url = `https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=8&page=${page}`;

  try {
    const response = await fetch(url, options);
    const data = (await response.json()) as NFT[];
    console.log("✅ fetched NFTs...");
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getNFTDetails(id: string) {
  console.log(`☘️ starting to fetch ${id} NFT details...`);
  const url = `https://api.coingecko.com/api/v3/nfts/${id}`;

  try {
    const response = await fetch(url, options);
    const data = (await response.json()) as NFTDetails;
    // console.log(data);
    console.log(`✅ fetched ${id} details...`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function main() {
  const NFTsList = await getNFTs();
  if (!NFTsList?.length) {
    return;
  }
  console.log("🚀 starting main()");
  const NFTDetailsList = await Promise.all(
    NFTsList.map((nft) => getNFTDetails(nft.id)),
  );
  console.log("✅ NFTs details fetched");

  // NFTDetailsList.forEach((details) => console.log(details));

  return NFTDetailsList;
}
