"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type AuctionBidItemProps = {
  imgSrc: string;
  imgAlt: string;
  itemName: string;
  itemCreator: string;
  itemPrice: number;
  currency: string;
};

const AuctionBidItem: React.FC<AuctionBidItemProps> = ({
  imgAlt,
  imgSrc,
  itemCreator,
  itemName,
  itemPrice,
  currency,
}) => {
  const [fav, setFav] = useState<boolean>(false);
  return (
    <article className="space-y-8">
      <Card className="gap-y-2 py-1.5">
        <CardHeader className="gap-0">
          <Button
            variant={"outline"}
            size={"icon"}
            className="ml-auto rounded-full"
          >
            <Heart
              className={`h-5 w-5 ${fav ? "fill-red-400" : "fill-gray-100"}`}
            />
          </Button>
        </CardHeader>
        <CardContent className="relative aspect-[1.5] lg:px-0">
          <Image
            alt={imgAlt}
            src={imgSrc}
            width={750}
            height={422}
            className="h-full w-full rounded-xl object-cover lg:rounded-none"
          />
        </CardContent>
        <CardFooter className="justify-between text-xl font-medium lg:font-bold">
          <h3>{itemName}</h3>
          <p className="lg:hidden">
            {itemPrice} {currency}
          </p>
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
        <Button className="w-[150px] rounded-none text-base">Place bid</Button>
      </div>
    </article>
  );
};
export default AuctionBidItem;
