"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

type DropItemDetailCardProps = {
  src: string;
  alt: string;
  name: string;
  description: string;
  ath_date: string;
  native_currency: string;
};

const DescParser = dynamic(() => import("./DescParser"), {
  ssr: false,
  loading: () => <span>Loading</span>,
});

const DropItemDetailCard: React.FC<DropItemDetailCardProps> = ({
  src,
  alt,
  name,
  description,
  native_currency,
}) => {
  return (
    <article className="space-y-4 lg:flex lg:gap-12 lg:space-y-0">
      <div className="relative lg:basis-3/5">
        <Image
          src={src}
          alt={alt}
          width={640}
          height={427}
          className="h-full w-full rounded-sm object-cover"
        />
        <span className="absolute top-4 right-1/20 rounded-[5px] bg-[#4693ED] px-6 py-1 text-white uppercase lg:hidden">
          Upcoming
        </span>
        <div className="absolute bottom-4 left-1/2 w-9/10 -translate-x-1/2 space-y-2 rounded-sm border border-[#006ca2] bg-orange-950/15 px-6 py-2 text-[#006ca2] backdrop-blur-[2px]">
          <p>Time remaining</p>
          <p className="text-xl">06 hrs : 45 mins : 22 s</p>
        </div>
      </div>
      <div className="space-y-4 lg:flex lg:basis-2/5 lg:flex-col lg:justify-start">
        <span className="hidden w-max rounded-[5px] bg-[#4693ED] px-6 py-1 text-white uppercase lg:block">
          Upcoming
        </span>
        <span className="block">November 21 at 11 am WAT</span>
        <h3 className="text-2xl font-medium">{name}</h3>
        <p className="text-[#616161]">
          <DescParser description={description} />
        </p>
        <p className="text-xl font-medium">
          Chain:{" "}
          <span className="text-[#006CA2]">
            {native_currency.toLocaleUpperCase()}
          </span>
        </p>
        <span className="mt-auto block border-b border-b-[#006CA2] pb-1 text-[#006CA2] lg:w-max">
          Get notified
        </span>
      </div>
    </article>
  );
};

export default DropItemDetailCard;
