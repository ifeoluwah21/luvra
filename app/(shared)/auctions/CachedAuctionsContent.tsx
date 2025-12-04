"use cache";
import React from "react";
import { AuctionBidItem } from "./AuctionsPage";
import db from "@/db";
import { nftTable } from "@/db/schema";
import { cacheLife, cacheTag } from "next/cache";

const CachedAuctionsContent = async () => {
  cacheLife("max");
  cacheTag("nfts");
  const nfts = await db.select().from(nftTable);

  return nfts
    .slice(0, 20)
    .map((nft) => (
      <AuctionBidItem
        key={nft.id}
        imgAlt={nft.name}
        imgSrc={nft.image.src}
        itemName={nft.name}
        itemCreator="Jacob Banks"
        itemPrice={nft.price.native_currency}
      />
    ));
};

export default CachedAuctionsContent;
