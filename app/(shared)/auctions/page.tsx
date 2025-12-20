import { type FC } from "react";
import AuctionsForm from "./_components/AuctionsForm";
import db from "@/db";
import { nfts } from "@/db/schema/nfts";

const AuctionsPage: FC = async () => {
  const nftProducts = await db.select().from(nfts);
  return (
    <div className="flex flex-col gap-8 px-4 md:flex-row">
      <AuctionsForm nftProducts={nftProducts} />
    </div>
  );
};

export default AuctionsPage;
