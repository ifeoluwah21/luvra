"use cache";
import React from "react";
import { AuctionBidItem } from "./AuctionsPage";
import db from "@/db";
import { nftTable } from "@/db/schema";
import { cacheLife, cacheTag } from "next/cache";

const CachedAuctionsContent = async () => {
  cacheLife("max");
  cacheTag("nfts");
  const nfts = await db.query.nftTable.findMany({
    limit: 20,
    offset: 2,
  });

  return nfts.map((nft) => (
    <AuctionBidItem
      key={nft.id}
      imgAlt={nft.name}
      imgSrc={nft.image.src}
      itemName={nft.name}
      itemCreator="Jacob Banks"
      itemPrice={nft.price.native_currency}
      currency={nft.native_currency_symbol}
    />
  ));
};

export default CachedAuctionsContent;
