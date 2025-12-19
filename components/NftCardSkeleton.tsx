import React from "react";

const NftCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <article className="bg-dark-surface-200 flex h-full w-60 flex-col gap-4 overflow-hidden rounded-2xl">
        <div className="aspect-square w-full bg-gray-300 dark:bg-gray-600"></div>
        <div className="flex flex-col justify-between gap-4 p-4 pt-0">
          <div className="h-12 w-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="border-border-light/30 flex h-10 items-center justify-center rounded-full border bg-gray-300 p-4 text-sm leading-normal font-bold tracking-[0.015rem] transition-colors hover:bg-white/10 dark:bg-gray-600"></div>
        </div>
      </article>
    </div>
  );
};

export default NftCardSkeleton;
