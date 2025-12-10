import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type NftCardProps = {
  img: string;
  name: string;
  creator: string;
};

const NftCard: React.FC<NftCardProps> = ({ name, img, creator }) => {
  return (
    <article className="bg-dark-surface-200 flex h-full min-w-60 flex-col gap-4 overflow-hidden rounded-2xl">
      <div>
        <Image src={img} alt={name} width={512} height={512} loading="eager" />
      </div>
      <div className="flex flex-col justify-between gap-4 p-4 pt-0">
        <div>
          <h3 className="text-base leading-normal font-bold text-white">
            {name}
          </h3>
          <p className="text-custom-text text-sm leading-normal font-normal">
            by {creator}
          </p>
        </div>
        <Button className="bg-dark-surface border-border-light/30 flex h-10 items-center justify-center rounded-full border p-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors hover:bg-white/10">
          <span>View Collection</span>
        </Button>
      </div>
    </article>
  );
};

export default NftCard;
