import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

const layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-[1600px] flex-1 px-4 py-5 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="flex flex-wrap items-center gap-2 py-4">
        <Link
          className="text-custom-text text-base leading-normal font-medium transition-colors hover:text-white"
          href={"/"}
        >
          Home
        </Link>
        <span className="text-custom-text text-base leading-normal font-medium">
          /
        </span>
        <Link
          className="text-custom-text text-base leading-normal font-medium transition-colors hover:text-white"
          href={"/auctions"}
        >
          Collection
        </Link>
        <span className="text-custom-text text-base leading-normal font-medium">
          /
        </span>
        <Link
          className="text-base leading-normal font-medium text-white transition-colors"
          href={"/drops"}
        >
          Bored Ape Yatch Club
        </Link>
      </div>
      {children}
    </main>
  );
};

export default layout;
