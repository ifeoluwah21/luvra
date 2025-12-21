"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

type ProductCardProps = {
  url: string;
  name: string;
  creator: string;
  id: string;
};
const ProductCard: FC<ProductCardProps> = ({ url, name, creator, id }) => {
  const router = useRouter();
  return (
    <article
      onClick={() => {
        router.push(`/drops/${id}`);
      }}
      className="bg-dark-surface-200 flex h-full min-w-60 flex-col gap-4 overflow-hidden rounded-2xl shadow-2xl transition-transform hover:-translate-y-0.5"
    >
      <figure>
        <Image
          src={url}
          alt={name}
          width={512}
          height={512}
          className="aspect-square w-full object-cover"
        />
      </figure>
      <div className="flex flex-1 flex-col justify-between p-4 pt-0">
        <h3 className="text-base leading-normal font-bold text-white">
          {name}
        </h3>
        <p className="text-custom-text text-sm leading-normal font-normal">
          by {creator}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
