"use cache";
import db from "@/db";
import { nfts } from "@/db/schema/nfts";
import React from "react";
import NftCard from "./NftCard";
import { cacheLife, cacheTag } from "next/cache";

const Trending: React.FC = async () => {
  cacheLife("days");
  cacheTag("nfts");
  const items = await db.select().from(nfts);
  return (
    <>
      {items.map(({ title, url, creator, id }, i) => (
        <NftCard
          key={`${id}-${i}`}
          id={id}
          name={title}
          img={url}
          creator={creator}
        />
      ))}
      {items.map(({ title, url, creator, id }, i) => (
        <NftCard
          key={`${id}-${i}`}
          id={id}
          name={title}
          img={url}
          creator={creator}
        />
      ))}
      {items.map(({ title, url, creator, id }, i) => (
        <NftCard
          key={`${id}-${i}`}
          id={id}
          name={title}
          img={url}
          creator={creator}
        />
      ))}
    </>
  );
};

export default Trending;
