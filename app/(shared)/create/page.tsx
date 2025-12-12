import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";
import type { FC } from "react";

const CreatePage: FC = () => {
  return (
    <section className="grid grid-cols-1 gap-12 py-4 lg:grid-cols-2">
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg leading-normal font-bold tracking-[-0.033rem] text-white">
            1. Upload File
          </h3>
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="nft_file">
              NFT File
            </label>
            <input
              className="min-h-[295px] rounded-[0.75rem] border-2 border-dashed border-white/30 px-6 py-14"
              type="file"
              name="nft_file"
              id="nft_file"
              accept="image/*, video/*"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-lg leading-normal font-bold tracking-[-0.033rem] text-white">
            2. Add Details
          </h3>
          <div className="flex w-full flex-col gap-2">
            <label
              className="text-custom-text text-base leading-normal font-medium"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="bg-background-dark focus:ring-pry h-14 w-full resize-none overflow-hidden rounded-[0.75rem] border border-[#a0a0a0]/30 p-[15px] text-base leading-normal font-normal text-white transition-all placeholder:text-white/60 focus:ring-2 focus:outline-0"
              type="text"
              name="title"
              id="title"
              placeholder="e.g. 'Cybernetic Sunrise'"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              className="text-custom-text text-base leading-normal font-medium"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="bg-background-dark focus:ring-pry min-h-36 w-full flex-1 resize-none overflow-hidden rounded-[0.75rem] border border-[#a0a0a0]/30 p-[15px] text-base leading-normal font-normal text-white transition-all placeholder:text-white/60 focus:ring-2 focus:outline-0"
              name="description"
              id="description"
              placeholder="Provide a detailed description of your item."
            ></textarea>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              className="text-custom-text text-base leading-normal font-medium"
              htmlFor="price"
            >
              Price
            </label>
            <div className="flex h-14 w-full items-center">
              <input
                type="number"
                name="price"
                id="price"
                placeholder="0.00"
                min={0}
                className="bg-background-dark focus:ring-pry h-full w-full resize-none overflow-hidden rounded-l-[0.75rem] border border-[#a0a0a0]/30 p-[15px] text-base leading-normal font-normal text-white transition-all placeholder:text-white/60 focus:ring-2 focus:outline-0"
              />
              <span className="flex h-full items-center justify-center rounded-r-[0.75rem] border border-white/30 bg-white/5 px-4 font-medium">
                ETH
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-t-white/20 pt-4">
          <h3 className="text-lg leading-normal font-bold tracking-[-0.033rem] text-white">
            3. Mint
          </h3>
          <Button className="bg-pry hover:bg-pry/90 mx-auto flex h-12 w-full max-w-[480px] min-w-[84px] items-center justify-center overflow-hidden rounded-full px-6 text-base leading-normal font-bold tracking-[0.015rem] text-white transition-colors">
            <span>Create NFT</span>
          </Button>
          <p className="text-custom-text text-center text-sm">
            A network fee will be required to mint your NFT.
          </p>
        </div>
      </form>
      <article className="sticky top-28 flex h-fit flex-col gap-4">
        <h3 className="text-lg leading-normal font-bold tracking-[-0.033rem] text-white">
          Live Preview
        </h3>
        <div className="shadow-card mx-auto w-full max-w-sm rounded-2xl bg-black/30 p-4 lg:mx-0">
          <div className="flex flex-col gap-4 rounded-[0.75rem]">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex aspect-square w-full items-center justify-center bg-white/10">
                <Image className="size-12" aria-hidden={true} />
              </div>
            </div>
            <div className="flex flex-col gap-2 px-2 pb-2">
              <div className="flex items-start justify-between">
                <p className="text-lg font-bold text-white">Your Title Here</p>
                <div className="flex shrink-0 flex-col items-end">
                  <p className="text-custom-text text-xs">Price</p>
                  <p className="font-bold text-white">-.-- ETH</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-slate-700"></div>
                <p className="text-custom-text text-sm">@YourUsername</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CreatePage;
