"use cache";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import AuctionCarouselItem from "./AuctionCarouselItem";
import db from "@/db";
import { nftTable } from "@/db/schema";
import { cacheLife, cacheTag } from "next/cache";

const CachedCarousel = async () => {
  cacheLife("hours");
  cacheTag("nfts");
  const nfts = await db.query.nftTable.findMany({
    orderBy: (nfts, { asc }) => [asc(nfts.total_supply)],
    limit: 4,
  });

  return (
    <Carousel className="my-10">
      <CarouselContent>
        {nfts.map((nft) => (
          <CarouselItem key={nft.id} className="basis-auto">
            <AuctionCarouselItem
              src={nft.image.src}
              alt={nft.name}
              time={new Date()}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        size={"icon-lg"}
        className="left-1 border-none bg-white/15 shadow-[4.68px_4.68px_7.02px_0_rgba(0,0,0,0.15)] backdrop-blur-sm"
      />
      <CarouselNext
        size={"icon-lg"}
        className="right-1 border-none bg-white/15 shadow-[4.68px_4.68px_7.02px_0_rgba(0,0,0,0.15)] backdrop-blur-sm"
      />
    </Carousel>
  );
};

export default CachedCarousel;
