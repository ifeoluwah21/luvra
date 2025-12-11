import Hero from "@/components/Hero";
import LogOut from "@/components/LogOut";
import NftCard from "@/components/NftCard";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { nftProducts } from "@/lib/product";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
  // const images = [
  //   { img: "/home/carousel/img1.png", alt: "Carousel Image 1" },
  //   { img: "/home/carousel/img2.png", alt: "Carousel Image 2" },
  //   { img: "/home/carousel/img3.png", alt: "Carousel Image 3" },
  //   { img: "/home/carousel/img4.png", alt: "Carousel Image 4" },
  //   { img: "/home/carousel/img5.jpg", alt: "Carousel Image 5" },
  //   { img: "/home/carousel/img6.jpg", alt: "Carousel Image 6" },
  //   { img: "/home/carousel/img7.jpg", alt: "Carousel Image 7" },
  // ];
  const session = await auth();

  if (!session?.user) return redirect("/sign-in");

  return (
    <main className="flex w-full flex-col gap-10 px-4 sm:px-10 md:gap-16 md:px-20 lg:px-30">
      <Hero />
      <section>
        <h2 className="pt-5 pb-3 text-[22px] leading-normal font-bold tracking-[-0.015rem] text-white">
          Trending Collections
        </h2>
        <div className="flex gap-6 overflow-x-auto py-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {nftProducts.map(({ name, img, creator }, i) => (
            <NftCard
              key={`${name}-1-${i}`}
              name={name}
              img={img}
              creator={creator}
            />
          ))}
          {nftProducts.map(({ name, img, creator }, i) => (
            <NftCard
              key={`${name}-2-${i}`}
              name={name}
              img={img}
              creator={creator}
            />
          ))}
          {nftProducts.map(({ name, img, creator }, i) => (
            <NftCard
              key={`${name}-3-${i}`}
              name={name}
              img={img}
              creator={creator}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015rem] text-white">
          Browse by Category
        </h2>
        <div className="flex flex-wrap items-center gap-3 py-4">
          <Button className="bg-pry hover:bg-pry/90 shadow-accent flex h-10 min-w-[84px] items-center justify-center rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors">
            <span>All</span>
          </Button>
          <Button className="bg-dark-surface-200 border-custom-border/20 shadow-accent text-custom-text flex h-10 min-w-[84px] items-center justify-center rounded-full border px-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors hover:bg-white/10 hover:text-white">
            <span>Art</span>
          </Button>
          <Button className="bg-dark-surface-200 border-custom-border/20 shadow-accent text-custom-text flex h-10 min-w-[84px] items-center justify-center rounded-full border px-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors hover:bg-white/10 hover:text-white">
            <span>Gaming</span>
          </Button>
          <Button className="bg-dark-surface-200 border-custom-border/20 shadow-accent text-custom-text flex h-10 min-w-[84px] items-center justify-center rounded-full border px-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors hover:bg-white/10 hover:text-white">
            <span>Membership</span>
          </Button>
          <Button className="bg-dark-surface-200 border-custom-border/20 shadow-accent text-custom-text flex h-10 min-w-[84px] items-center justify-center rounded-full border px-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors hover:bg-white/10 hover:text-white">
            <span>Photography</span>
          </Button>
          <Button className="bg-dark-surface-200 border-custom-border/20 shadow-accent text-custom-text flex h-10 min-w-[84px] items-center justify-center rounded-full border px-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors hover:bg-white/10 hover:text-white">
            <span>Music</span>
          </Button>
        </div>
      </section>
      <LogOut />
    </main>
  );
}
