import { Button } from "@/components/ui/button";
import { nftProducts } from "@/lib/product";
import React from "react";
import ProductCard from "./_component/ProductCard";

const page = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:flex-row">
      <aside className="w-full md:w-64 lg:w-72">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="search"
              placeholder="Search items..."
              id="search"
              className="border-custom-border bg-dark-surface-200 focus:border-pry focus:ring-pry placeholder:text-custom-text/60 h-12 w-full rounded-full border px-5 py-2 text-base font-normal text-white focus:ring-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-4">
            {" "}
            <h2 className="text-lg font-bold text-white">Filter</h2>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="category"
                className="text-custom-text text-sm font-medium"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border-custom-border bg-dark-surface-200 focus:border-pry focus:ring-pry h-12 rounded-2xl border px-4 py-2 text-base font-normal text-white focus:ring-2 focus:outline-0"
              >
                <option value="all">All</option>
                <option value="art">Art</option>
                <option value="gaming">Gaming</option>
              </select>
            </div>
          </div>
          <Button
            className="bg-pry shadow-accent hover:bg-pry/90 h-12 w-full rounded-full px-5 text-base leading-normal font-bold tracking-[0.03rem] text-white transition-colors"
            type="submit"
          >
            <span>Apply Filters</span>
          </Button>
        </form>
      </aside>
      <section className="@container flex-1">
        <div className="grid grid-cols-1 gap-8 @[480px]:grid-cols-2 @[768px]:grid-cols-3">
          {nftProducts.map(({ img, name, creator }) => (
            <ProductCard
              key={img}
              productImg={img}
              productName={name}
              productCreator={creator}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
