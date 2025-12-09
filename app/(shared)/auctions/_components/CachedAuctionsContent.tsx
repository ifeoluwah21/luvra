"use cache";
import React from "react";
import AuctionBidItem from "./AuctionBidItem";
import db from "@/db";
import { cacheLife, cacheTag } from "next/cache";

const CachedAuctionsContent = async () => {
  cacheLife("max");
  cacheTag("nfts");
  const nfts = await db.query.nftTable.findMany({
    limit: 4,
    offset: 2,
  });

  return nfts.map((nft) => (
    <AuctionBidItem
      key={nft.id}
      imgAlt={nft.name}
      imgSrc={nft.image.src}
      itemName={nft.name}
      itemCreator={nft.native_currency}
      itemPrice={nft.price.native_currency}
      currency={nft.native_currency_symbol}
    />
  ));
};

export default CachedAuctionsContent;
