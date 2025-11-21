"use client";

import { motion, AnimatePresence } from "motion/react";
import { introStore } from "@/store/introStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function AuctionsPage() {
  const { slideUp } = introStore();

  return (
    <AnimatePresence>
      {slideUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="sr-only">
            <span>Home/</span>
            <span>Auctions</span>
          </div>
          <h1>Here is a overview of products actively on auction, explore!!</h1>
          <Carousel className="my-10">
            <CarouselContent>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/auction.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const AuctionCarouselItem: React.FC<{
  src: string;
  alt: string;
  time: Date;
}> = ({ src, alt, time }) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <Card className="relative h-[186px] w-[228px] overflow-clip p-0">
      <CardContent className="relative px-0">
        <Image
          src={src}
          alt={alt}
          width={228}
          height={186}
          className="h-[186px] object-cover"
        />
      </CardContent>

      <CardFooter className="absolute bottom-0 left-1/2 mb-2 w-max -translate-x-1/2 rounded-sm border-[0.5px] border-white bg-white/15 p-2 text-white backdrop-blur-[3px]">
        <p>
          {" "}
          <span>{hours}</span>hrs: <span>{minutes}</span>mins :
          <span>{seconds}</span>s
        </p>
      </CardFooter>
    </Card>
  );
};
