import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <div className="@container mt-10">
      <div className="flex flex-col items-center gap-6 py-10 @[480px]:gap-8 @[864px]:flex-row">
        <div className="flex flex-1 flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8">
          <div className="flex flex-col gap-4 text-left">
            {" "}
            <h1 className="text-4xl leading-tight font-black tracking-[-0.033rem] text-white @[480px]:text-5xl">
              Discover, Collect, and Sell Extraordinary NFTs
            </h1>
            <p className="text-custom-text text-base leading-normal font-normal @[480px]:text-lg @[480px]:leading-relaxed">
              The world&rsquo;s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs).
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-pry shadow-accent hover:bg-pry/90 h-10 max-w-[480px] min-w-[84px] rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors @[480px]:h-12 @[480px]:px-5 @[480px]:text-base">
              <span>Explore</span>
            </Button>
            <Button className="bg-dark-surface/80 shadow-accent hover:bg-dark-surface/20 border-border-light/20 h-10 max-w-[480px] min-w-[84px] rounded-full border px-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors @[480px]:h-12 @[480px]:px-5 @[480px]:text-base">
              <span>Create</span>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square w-full flex-1 overflow-hidden rounded-4xl shadow-xl @[480px]:min-w-[400px] @[864px]:w-full">
          <Image
            src={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuC6jJ-8VG1AbC1sxoZL_a2F4J7R2RE46dznF2845Gvnf8Pe-vP3JppqfE9StnJDoNlXjPcC8hpwZgqLXL3h0ar4Fa5VBU_6ghmW29OyG9fhTEkmqNhHxKzo8lYnizHdjSJy8DBYxtI0o94GaV1sZL2a9f3Qdp8pHF9jG-INKFCzz4baTUMDQ-j_dFkB7FpKQabYS00wSe3XeT27pNUvlQQCiY_WqPH1-mJed4LJ5gSsPJaez4SXXnOHXaKCOglRDr3_td0Ottmb-hCP"
            }
            alt="Hero Image"
            width={512}
            height={512}
            className="h-auto w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
