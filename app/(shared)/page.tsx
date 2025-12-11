import Hero from "@/components/Hero";
import LogOut from "@/components/LogOut";
import NftCard from "@/components/NftCard";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

type NftProduct = {
  name: string;
  creator: string;
  img: string;
};

const nftProducts: NftProduct[] = [
  {
    name: "Abstract Minds",
    creator: "Artistone",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6nbRLKHl7hrzcq8HZGlB8mF08FJQTPzLVjUplgnBKHm-JR9z9WX4k0SmgRpg9Fw1BSZMzyOzzHjqXTiVcpKn2_KTjDVkkWlCDIwlnhpvW1Bwgphr9esnaNcxbjWRc9BlIrd148oKiEhLZWaCRoz8EiD8f7U-cESsTv3SqnJw5mDiXcMjB0zUfs3h_S4udz-_hTIxVnNnHmahABiPjDO-kgX4AwFvLoVz4Brmx7SqacG0XJaKJgb0dKuynxJ3SFPfTjElY9HufC9Xq",
  },
  {
    name: "Pixel Punks",
    creator: "CryptoCrew",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHyU9FtBN_5mDyQb0QsCSQoURkAG8FvonHhh3k-5IUd-ZQcn-6G1m4IQSBXKPexcWvQ8gnmtH1xpd3E6yo3H_HURX9MQnzk-nm6ob5xugJGHka_fW7-ir0FQEbeLFpceyqmauvZjNV0PqYjTS_UUz3G9_fr5anr3OeZ8ijuRArEELu0a7rdyq9dxnIgGs5tr_q5CxaGhvWyif7E4eaHSzL03Qfpm732M_PzIWaf81dlcNHShe_MkoBwRJuyxC3blORL07Onj78qvG2",
  },
  {
    name: "FutureScapes",
    creator: "Visionary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZnedbIhs58I5AG659rytzUXJvS5NXNH93XndbGQ4yCE2P3UMuzNqvOywec7k7M0ZKHWvzVOH8wRKzHPOWwEaqJTaRppC4ymLsWZ4MjpZQFJ5j5zJmEZvnu-_GZTYFYWEXSzKvQxMup8Q-ya_iegpAOjCDjk31vHAzj40Uj97X3C3aouETjnjroXtt_Y1huLvUgzhTiiak85XSjSz21bX8ItFWwzRmRKirGS-QJFfLT8rwtpFmx7atad80gEFiVNPwV77yDrVSaFn",
  },
  {
    name: "Animata Character",
    creator: "3D Studio",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7ydNZU15SSSigfLUqn6UAK4MNAYhRQInxU7MNJWHUv2-drru55aPFA-x8qOwKuVdKJLv3ihJ0nqd-xTlKVePfqQ7OYAiBhcnF_nN0RPyUwIZerdY8XCY_XAzyuYiVzBLwbU1gYGJaLXERybmZXwaHOYQr4NvO-fDCZgOZWzDFVJbUNC9L0MiJaRPMVAC1r77SH8yy9S602G09E-0MYUi5iqkoFK4JpXcnt3Sapiltq2JaQTVxSev03-tsCwyahmNAT_nsGq0hRFe",
  },
  {
    name: "Digital Dreams",
    creator: "Painterly",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfuVRUgCIWtiaS9XK7Mk5qO1TVhyW_lAJCcumY28PLEogffdVTK36oFFY2UMHT_zvgHVphLqkC5VWkD1S5p1w3o-AOaocqbBct5H3zryx37aBKm0VEsdKiaiRPtLlFggAggujnD-HxmYZtjGeojsk4VFWolZi913YgeFFPGxIheKUbhtsaj4wVngzvZaXriwpgKEH71ocd_u5UP584aFD4t4ZWbppUSSIH81eNou0xTUQrdGCeRKUDdZ0R-9LUhAXXAizIRyNKY1hl",
  },
];

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
    <main className="flex w-full flex-col gap-10 px-4 sm:px-16 md:gap-16 md:px-30 lg:px-30">
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
