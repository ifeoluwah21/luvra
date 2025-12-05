"use cache";
import React from "react";
import db from "@/db";
import { cacheLife, cacheTag } from "next/cache";
import DropItemDetailCard from "./DropItemDetailCard";

const CachedDropItemSection = async () => {
  cacheLife("max");
  cacheTag("nft");
  const nfts = await db.query.nftTable.findMany({
    limit: 8,
  });
  return nfts.map((nft) => (
    <DropItemDetailCard
      key={nft.id}
      src={nft.image.src}
      alt={nft.name}
      name={nft.name}
      description={nft.description}
      ath_date={nft.ath_date}
      native_currency={nft.native_currency}
    />
  ));
};

export default CachedDropItemSection;
