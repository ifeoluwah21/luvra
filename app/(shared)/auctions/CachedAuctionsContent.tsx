"use cache";
import React from "react";
import { AuctionBidItem } from "./AuctionsPage";
import db from "@/db";
import { nftsTable } from "@/db/schema";

const CachedAuctionsContent = async () => {
  const nfts = await db.select().from(nftsTable);

  return nfts
    .slice(0, 20)
    .map((nft) => (
      <AuctionBidItem
        key={nft.id}
        imgAlt={nft.name}
        imgSrc={nft.image}
        itemName={nft.name}
        itemCreator="Jacob Banks"
        itemPrice={nft.price}
      />
    ));
};

export default CachedAuctionsContent;
