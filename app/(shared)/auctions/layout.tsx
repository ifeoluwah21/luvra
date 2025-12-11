import React, { FC, PropsWithChildren } from "react";

const AuctionsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10 px-4 md:gap-16">
      <div className="px-4">
        <h1 className="text-4xl leading-tight font-black tracking-[-0.033rem] text-white">
          Live Auctions
        </h1>
        <p className="text-custom-text mt-2 text-xl">
          Discover and bid on exclusive NFTs from top creators.
        </p>
      </div>
      {children}
    </main>
  );
};

export default AuctionsLayout;
