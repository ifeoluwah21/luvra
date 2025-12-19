"use cache";
import db from "@/db";
import { nfts } from "@/db/schema/nfts";
import React from "react";
import NftCard from "./NftCard";

const Trending: React.FC = async () => {
  const items = await db.select().from(nfts);
  return (
    <>
      {items.map(({ title, url, creator, id }, i) => (
        <NftCard key={`${id}-${i}`} name={title} img={url} creator={creator} />
      ))}
      {items.map(({ title, url, creator, id }, i) => (
        <NftCard key={`${id}-${i}`} name={title} img={url} creator={creator} />
      ))}
      {items.map(({ title, url, creator, id }, i) => (
        <NftCard key={`${id}-${i}`} name={title} img={url} creator={creator} />
      ))}
    </>
  );
};

export default Trending;
