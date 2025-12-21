import React from "react";
import ProductCard from "./ProductCard";
import { NftSelectSchema } from "@/db/schema/nfts";

const ProductsContainer: React.FC<{ nfts: NftSelectSchema[] }> = ({ nfts }) => {
  return (
    <section className="@container flex-1">
      <div className="grid grid-cols-1 gap-8 @[480px]:grid-cols-2 @[768px]:grid-cols-3">
        {nfts.map(({ url, title, creator, price, id }) => (
          <ProductCard
            key={id}
            productImg={url}
            productName={title}
            productCreator={creator}
            productPrice={price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsContainer;
