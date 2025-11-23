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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

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
          <h1 className="text-xl font-medium">
            Here is a overview of products actively on auction, explore!!
          </h1>
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
                  src="/item-3.jpg"
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
                  src="/item-3.jpg"
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
                  src="/item-3.jpg"
                  alt="auction-item"
                  time={new Date()}
                />
              </CarouselItem>
              <CarouselItem className="basis-auto">
                <AuctionCarouselItem
                  src="/item-3.jpg"
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
          <section className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 2xl:grid-cols-3 2xl:gap-16">
            <h2 className="col-span-full text-xl font-medium lg:font-bold">
              Top bids from popular creators{" "}
            </h2>
            <AuctionBidItem
              imgAlt="Out of the box"
              imgSrc="/item.jpg"
              itemName="Out of the box"
              itemCreator="Jacob Banks"
              itemPrice={0.57}
            />
            <AuctionBidItem
              imgAlt="Out of the box"
              imgSrc="/item-2.jpg"
              itemName="Out of the box"
              itemCreator="Jacob Banks"
              itemPrice={0.57}
            />
            <AuctionBidItem
              imgAlt="Out of the box"
              imgSrc="/item.jpg"
              itemName="Out of the box"
              itemCreator="Jacob Banks"
              itemPrice={0.57}
            />
            <AuctionBidItem
              imgAlt="Out of the box"
              imgSrc="/item-2.jpg"
              itemName="Out of the box"
              itemCreator="Jacob Banks"
              itemPrice={0.57}
            />
            <AuctionBidItem
              imgAlt="Out of the box"
              imgSrc="/item.jpg"
              itemName="Out of the box"
              itemCreator="Jacob Banks"
              itemPrice={0.57}
            />
            <AuctionBidItem
              imgAlt="Out of the box"
              imgSrc="/item-2.jpg"
              itemName="Out of the box"
              itemCreator="Jacob Banks"
              itemPrice={0.57}
            />
            <AuctionBidItem
              imgAlt="Out of the box"
              imgSrc="/item.jpg"
              itemName="Out of the box"
              itemCreator="Jacob Banks"
              itemPrice={0.57}
            />
            <AuctionBidItem
              imgAlt="Out of the box"
              imgSrc="/item-2.jpg"
              itemName="Out of the box"
              itemCreator="Jacob Banks"
              itemPrice={0.57}
            />
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const AuctionBidItem: React.FC<{
  imgSrc: string;
  imgAlt: string;
  itemName: string;
  itemCreator: string;
  itemPrice: number;
}> = ({ imgAlt, imgSrc, itemCreator, itemName, itemPrice }) => {
  return (
    <article className="space-y-8">
      <Card className="gap-y-2 py-1.5">
        <CardHeader className="gap-0">
          <Button
            variant={"outline"}
            size={"icon"}
            className="ml-auto rounded-full"
          >
            <Heart className="h-5 w-5 fill-red-400" />
          </Button>
        </CardHeader>
        <CardContent className="relative aspect-[1.5] lg:px-0">
          <Image
            // src={"/item.jpg"}
            alt={imgAlt}
            src={imgSrc}
            width={750}
            height={422}
            className="h-full w-full rounded-xl object-cover lg:rounded-none"
          />
        </CardContent>
        <CardFooter className="justify-between text-xl font-medium lg:font-bold">
          <h3>{itemName}</h3>
          <p className="lg:hidden">{itemPrice} ETH</p>
        </CardFooter>
      </Card>
      <div className="space-y-4 px-6 text-[#616161] lg:font-medium">
        <p>
          <span>Creator:</span>
          <span className="ml-8 font-semibold text-[#006CA2] lg:font-bold lg:text-black">
            {" "}
            {itemCreator}
          </span>
        </p>
        <p>
          <span>Date:</span>
          <span className="ml-8 lg:font-bold">12/08/22</span>
        </p>
        <p className="hidden lg:block">
          <span>Highest bid:</span>
          <span className="ml-2 lg:font-bold">{itemPrice} ETH</span>
        </p>
      </div>
      <div className="flex items-center justify-between rounded-sm bg-[#F6F4F4] px-6 py-3">
        <div className="space-y-2 font-bold">
          <p className="text-[#616161]">Current bid</p>
          <p>0.987 ETH</p>
        </div>
        <Button className="w- w-[150px] rounded-none text-base">
          Place bid
        </Button>
      </div>
    </article>
  );
};

const AuctionCarouselItem: React.FC<{
  src: string;
  alt: string;
  time: Date;
}> = ({ src, alt, time }) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <Card className="relative h-[186px] w-[228px] overflow-clip p-0 md:h-[261px] md:w-[320px] 2xl:h-[396px] 2xl:w-[485px]">
      <CardContent className="relative px-0">
        <Image
          src={src}
          alt={alt}
          width={640}
          height={960}
          className="h-[186px] w-[228px] object-cover md:h-[261px] md:w-[320px] 2xl:h-[396px] 2xl:w-[485px]"
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
