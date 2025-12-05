import db from "@/db";
import { AuctionBidItem } from "./AuctionsPage";
import { nftsTable } from "@/db/schema";
import { cacheLife, cacheTag } from "next/cache";

async function Bids() {
  "use cache";
  cacheTag("nft");
  cacheLife("hours");
  const nfts = await db.select().from(nftsTable);
  if (nfts.length === 0) return;
  return (
    <AuctionBidItem
      imgAlt={nfts[0].name}
      imgSrc={nfts[0].image}
      itemName={nfts[0].name}
      itemCreator="Jacob Banks"
      itemPrice={nfts[0].price}
    />
  );
}

export default Bids;
