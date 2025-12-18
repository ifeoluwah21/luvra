"use client";
import { ActionResponse, createNft } from "@/actions/create";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useActionState, useEffect, useState, type FC } from "react";

const initialActionState: ActionResponse = {
  success: false,
  message: "",
};

const CreatePage: FC = () => {
  const [nftFile, setNftFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [url, setUrl] = useState("");
  const [state, action, isPending] = useActionState<ActionResponse, FormData>(
    async (state, formdata) => {
      try {
        const result = await createNft(formdata);
        return result;
      } catch (err) {
        return {
          success: false,
          message: (err as Error).message || "An error occurred",
        };
      }
    },
    initialActionState,
  );
  useEffect(() => {
    // console.log("Cleaned the Blob file from memory");
    return () => {
      console.log("Cleaned the Blob file from memory");
      URL.revokeObjectURL(url);
    };
  }, [url]);
  return (
    <section className="grid grid-cols-1 gap-12 py-4 lg:grid-cols-2">
      <form action={action} className="flex flex-col gap-8">
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
              onChange={(e) => {
                const file = e.currentTarget.files?.[0] as File;
                setNftFile(file);
                if (file) {
                  setUrl(URL.createObjectURL(file));
                }
              }}
              required
            />
            {state.errors?.nft_file && (
              <p className="text-xs font-medium text-red-500">
                {state.errors.nft_file[0]}
              </p>
            )}
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
              required
              className="bg-background-dark focus:ring-pry h-14 w-full resize-none overflow-hidden rounded-[0.75rem] border border-[#a0a0a0]/30 p-[15px] text-base leading-normal font-normal text-white transition-all placeholder:text-white/60 focus:ring-2 focus:outline-0"
              type="text"
              name="title"
              id="title"
              placeholder="e.g. 'Cybernetic Sunrise'"
              onChange={(e) => {
                const title = e.currentTarget.value;
                setTitle(title);
              }}
            />
            {state.errors?.title && (
              <p className="text-xs font-medium text-red-500">
                {state.errors.title[0]}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              className="text-custom-text text-base leading-normal font-medium"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              required
              className="bg-background-dark focus:ring-pry min-h-36 w-full flex-1 resize-none overflow-hidden rounded-[0.75rem] border border-[#a0a0a0]/30 p-[15px] text-base leading-normal font-normal text-white transition-all placeholder:text-white/60 focus:ring-2 focus:outline-0"
              name="description"
              id="description"
              placeholder="Provide a detailed description of your item."
            ></textarea>
            {state.errors?.description && (
              <p className="text-xs font-medium text-red-500">
                {state.errors.description[0]}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              className="text-custom-text text-base leading-normal font-medium"
              htmlFor="category"
            >
              Category
            </label>
            <select
              required
              className="bg-background-dark focus:ring-pry h-12 w-full flex-1 resize-none overflow-hidden rounded-[0.75rem] border border-[#a0a0a0]/30 p-[15px] text-base leading-normal font-normal text-white transition-all placeholder:text-white/60 focus:ring-2 focus:outline-0"
              name="category"
              id="category"
              defaultValue={""}
            >
              <option value={""} disabled></option>
              <option value="art">Art</option>
              <option value="gaming">Gaming</option>
              <option value="music">Music</option>
              <option value="photography">Photography</option>
              <option value="membership">Membership</option>
            </select>
            {state.errors?.category && (
              <p className="text-xs font-medium text-red-500">
                {state.errors.category[0]}
              </p>
            )}
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
                required
                type="number"
                name="price"
                id="price"
                placeholder="0.00"
                min={0}
                max={10000}
                step={0.01}
                onChange={(e) => {
                  const price = e.currentTarget.value;
                  setPrice(+price);
                }}
                className="bg-background-dark focus:ring-pry h-full w-full resize-none overflow-hidden rounded-l-[0.75rem] border border-[#a0a0a0]/30 p-[15px] text-base leading-normal font-normal text-white transition-all placeholder:text-white/60 focus:ring-2 focus:outline-0"
              />
              <span className="flex h-full items-center justify-center rounded-r-[0.75rem] border border-white/30 bg-white/5 px-4 font-medium">
                ETH
              </span>
            </div>
            {state.errors?.price && (
              <p className="text-xs font-medium text-red-500">
                {state.errors.price[0]}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-t-white/20 pt-4">
          <h3 className="text-lg leading-normal font-bold tracking-[-0.033rem] text-white">
            3. Mint
          </h3>
          <Button
            type="submit"
            disabled={isPending}
            className="bg-pry disabled:bg-pry/50 hover:bg-pry/90 mx-auto flex h-12 w-full max-w-[480px] min-w-[84px] items-center justify-center overflow-hidden rounded-full px-6 text-base leading-normal font-bold tracking-[0.015rem] text-white transition-colors"
          >
            {isPending ? <span>Creating NFT...</span> : <span>Create NFT</span>}
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
              {!nftFile && (
                <div className="flex aspect-square w-full items-center justify-center bg-white/10">
                  <ImageIcon className="size-12" aria-hidden={true} />
                </div>
              )}
              {url && (
                <Image
                  src={url}
                  width={512}
                  height={512}
                  alt={
                    title
                      ? `Preview of NFT image : ${title}`
                      : `Preview of uploaded NFT image`
                  }
                  className="aspect-square object-contain"
                />
              )}
            </div>
            <div className="flex flex-col gap-2 px-2 pb-2">
              <div className="flex items-start justify-between">
                <p className="text-lg font-bold text-white">
                  {title === "" ? "Your Title Here" : title}
                </p>
                <div className="flex shrink-0 flex-col items-end">
                  <p className="text-custom-text text-xs">Price</p>
                  <p className="font-bold text-white">
                    {price === 0 ? "-.-- " : price} ETH
                  </p>
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
