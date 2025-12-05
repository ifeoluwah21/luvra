import CachedCarousel from "./CachedCarousel";
import CachedAuctionsContent from "./CachedAuctionsContent";
import { Suspense } from "react";

const AuctionsPage: React.FC = () => {
  return (
    <div>
      <div className="sr-only">
        <span>Home/</span>
        <span>Auctions</span>
      </div>
      <h1 className="text-xl font-medium">
        Here is an overview of products actively on auction, explore!!
      </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <CachedCarousel />
      </Suspense>
      <section className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 2xl:grid-cols-3 2xl:gap-16">
        <h2 className="col-span-full text-xl font-medium lg:font-bold">
          Top bids from popular creators{" "}
        </h2>
        <Suspense fallback={<p>Loading...</p>}>
          <CachedAuctionsContent />
        </Suspense>
      </section>
    </div>
  );
};

export default AuctionsPage;
