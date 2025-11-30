"use client";

import { useParams } from "next/navigation";

export default function MarketplaceDetails() {
  const { marketId } = useParams();

  return <div>{`Marketplace Details Page - Market ID: ${marketId}`}</div>;
}
