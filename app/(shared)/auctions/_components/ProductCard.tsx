import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";

type ProductCardProps = {
  productImg: string;
  productName: string;
  productCreator: string;
  productPrice: number;
};

const ProductCard: FC<ProductCardProps> = ({
  productImg,
  productName,
  productCreator,
  productPrice,
}) => {
  return (
    <article className="bg-dark-surface-200 flex flex-col gap-4 overflow-hidden rounded-2xl">
      <div className="relative w-full overflow-hidden">
        <Image
          src={productImg}
          alt={productName}
          width={512}
          height={512}
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-col">
          <h3 className="text-base leading-normal font-bold text-white">
            {productName} #12
          </h3>
          <p className="text-custom-text text-sm leading-normal font-normal">
            by {productCreator}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <p className="text-custom-text">Current price</p>
          <p className="font-bold text-white">{productPrice} ETH</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <p className="text-custom-text">Auction ends in</p>
          <p className="font-bold text-white">12h 30m</p>
        </div>
        <Button className="bg-pry shadow-accent hover:bg-pry/90 flex h-10 w-full min-w-[84px] items-center justify-center rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors">
          <span>Place Bid</span>
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
