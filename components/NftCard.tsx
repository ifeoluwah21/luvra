import Image from "next/image";
import React from "react";
import Link from "next/link";

type NftCardProps = {
  img: string;
  name: string;
  creator: string;
  id: string;
};

const NftCard: React.FC<NftCardProps> = ({ name, img, creator, id }) => {
  return (
    <article className="bg-dark-surface-200 flex h-full min-w-60 flex-col gap-4 overflow-hidden rounded-2xl">
      <div>
        <Image
          src={img}
          alt={name}
          width={512}
          height={512}
          loading="eager"
          className="aspect-square object-cover"
        />
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
        <Link
          href={`/drops/${id}`}
          className="bg-dark-surface border-border-light/30 flex h-10 items-center justify-center rounded-full border p-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors hover:bg-white/10"
        >
          View Collection
        </Link>
      </div>
    </article>
  );
};

export default NftCard;
