import { Button } from "@/components/ui/button";
import db from "@/db";
import { nfts } from "@/db/schema/nfts";
import { eq } from "drizzle-orm";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type HistoryType = {
  event: "bid" | "transfer" | "list";
  price: number;
  from: string;
  to: string;
  date: string;
};

const bidHistory: HistoryType[] = [
  {
    event: "bid",
    price: 25,
    from: "PixelPioneer",
    to: "QuantumLeaper",
    date: "1 hour ago",
  },
  {
    event: "bid",
    price: 28.9,
    from: "ArtCollector_7",
    to: "QuantumLeaper",
    date: "5 hour ago",
  },
  {
    event: "list",
    price: 15,
    from: "QuantumLeaper",
    to: "-",
    date: "1 day ago",
  },
  {
    event: "transfer",
    price: 20,
    from: "YugaLabs",
    to: "QuantumLeaper",
    date: "1 month ago",
  },
];

type DropsPageProps = {
  params: Promise<{ id: string }>;
};
const DropsPage: FC<DropsPageProps> = async ({ params }) => {
  const { id } = await params;
  const nft = await db.select().from(nfts).where(eq(nfts.id, id));
  return (
    <>
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
        <span className="text-base leading-normal font-medium text-white transition-colors">
          {nft[0].title}
        </span>
      </div>
      <section>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="shadow-card relative flex overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src={nft[0].url}
              alt={nft[0].title}
              height={512}
              width={512}
              className="aspect-auto min-h-[400px] flex-1 object-cover object-center"
            />
          </div>
          <div className="col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl leading-tight font-bold tracking-tight text-white md:text-4xl">
                {nft[0].title}
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-custom-text">
                  Owned by{" "}
                  <span className="text-pry font-semibold hover:underline">
                    {nft[0].creator}
                  </span>
                </p>
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant={"ghost"}
                    className="border-custom-border/20 bg-dark-surface-200 hover:text-custom-border flex h-12 items-center gap-2 rounded-full border px-4 py-2.5 transition-colors hover:bg-white/5"
                  >
                    <Heart className="size-5" />
                    <span className="text-sm leading-normal font-medium text-white">
                      2.1k
                    </span>
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="border-custom-border/20 bg-dark-surface-200 hover:text-custom-border flex h-12 w-12 items-center justify-center rounded-full border transition-colors hover:bg-white/5"
                  >
                    <Share2 className="size-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl border border-[#e5e7eb] bg-white/5 p-6">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className="text-custom-text text-sm font-medium">
                    Current price
                  </p>
                  <p className="text-3xl font-bold text-white">
                    {nft[0].price} ETH
                  </p>
                  <p className="text-custom-text text-base font-medium">
                    $98,123.45 USD
                  </p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-custom-text text-sm font-medium">
                    Auction ends in
                  </p>
                  <p className="text-xl font-bold text-white">12h 45m 32s</p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <Button className="bg-pry hover:bg-pry/90 h-12 min-w-[84px] flex-1 rounded-full px-4 text-base leading-normal font-bold tracking-[0.015rem] text-white transition-colors">
                  <span>Buy Now</span>
                </Button>
                <Button className="h-12 min-w-[84px] flex-1 rounded-full bg-white/10 px-4 text-base leading-normal font-bold tracking-[0.015rem] text-white transition-colors hover:bg-white/20">
                  <span>Place a bid</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white">Description</h3>
              <p className="text-custom-border leading-relaxed">
                Created by{" "}
                <span className="text-pry font-semibold hover:underline">
                  {nft[0].creator}
                </span>
                . {nft[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="border-b border-b-[#e5e7eb]/20">
            <nav>
              <ul className="flex items-center gap-6">
                <li className="text-pry border-b-pry border-b-2 px-1 py-4 text-base font-medium whitespace-nowrap">
                  Bidding History
                </li>
                <li className="text-custom-text border-b-2 border-b-transparent px-1 py-4 text-base font-medium whitespace-nowrap hover:border-b-white/30 hover:text-white">
                  Price History
                </li>
              </ul>
            </nav>
          </div>
          <div className="my-6 overflow-auto rounded-2xl border border-[#e5e7eb] [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="min-w-full divide-y divide-[#e5e7eb] border-inherit">
              <thead className="bg-white/5">
                <tr>
                  <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-6">
                    Event
                  </th>
                  <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-6">
                    Price
                  </th>
                  <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-6">
                    From
                  </th>
                  <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-6">
                    To
                  </th>
                  <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-6">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-background-dark divide-y divide-[#e5e7eb]">
                {bidHistory.map(({ from, to, event, price, date }, i) => (
                  <tr key={`${event}-${i}`}>
                    <td className="py-3.5 pr-3 pl-4 text-left text-sm font-medium whitespace-nowrap text-white capitalize sm:pl-6">
                      {event}
                    </td>
                    <td className="py-3.5 pr-3 pl-4 text-left text-sm font-medium whitespace-nowrap text-white sm:pl-6">
                      {price} ETH
                    </td>
                    <td className="text-pry py-3.5 pr-3 pl-4 text-left text-sm font-medium whitespace-nowrap sm:pl-6">
                      {from || "-"}
                    </td>
                    <td className="text-pry py-3.5 pr-3 pl-4 text-left text-sm font-medium whitespace-nowrap sm:pl-6">
                      {to || "-"}
                    </td>
                    <td className="text-custom-text py-3.5 pr-3 pl-4 text-left text-sm font-medium whitespace-nowrap sm:pl-6">
                      {date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default DropsPage;
