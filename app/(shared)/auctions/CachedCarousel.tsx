"use cache";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { AuctionCarouselItem } from "./AuctionsPage";
import db from "@/db";
import { nftsTable } from "@/db/schema";
import { cacheLife } from "next/cache";

const CachedCarousel = async () => {
  cacheLife("hours");
  const nfts = await db.select().from(nftsTable);
  const slicedNfts = nfts.slice(0, 20);
  return (
    <Carousel className="my-10">
      <CarouselContent>
        {slicedNfts.map((nft) => (
          <CarouselItem key={nft.id} className="basis-auto">
            <AuctionCarouselItem
              src={nft.image}
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
