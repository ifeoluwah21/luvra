import { main } from "@/lib/lib";
import "../envConfig";
import { nftsTable } from "@/db/schema";
import db from "@/db";

async function seed() {
  const fetchNFTs = await main();
  if (!fetchNFTs) {
    return;
  }
  const filteredNfts = fetchNFTs.filter((nft) => nft !== undefined);
  const mappedNfts = filteredNfts.map((nft) => ({
    id: nft.id,
    contract_address: nft.contract_address,
    name: nft.name,
    symbol: nft.symbol,
    image: nft.image.small_2x,
    banner_img: nft.banner_image,
    description: nft.description,
    native_currency: nft.native_currency,
    native_currency_symbol: nft.native_currency_symbol,
    asset_platform_id: nft.asset_platform_id,
    price: nft.floor_price.usd,
  }));
  const nfts: (typeof nftsTable.$inferInsert)[] = mappedNfts;
  console.log("☘️ seeding the db");
  // await db.delete(nftsTable);
  // console.log('deleted nfts❌!');

  for (const nft in nfts) {
    try {
      await db.insert(nftsTable).values(nfts[nft]);
    } catch (err) {
      if (err instanceof Error) {
        // console.log(err.message);
      }
    }
  }
  console.log("☘️ seeded db!");
}

seed();

export default seed;
