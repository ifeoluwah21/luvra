import type { FC, PropsWithChildren } from "react";

const CreateLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-[1600px] flex-1 px-4 py-5 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="flex w-full max-w-7xl flex-col p-4">
        <div className="mb-8 flex flex-col gap-3">
          <h1 className="text-4xl leading-normal font-black tracking-[-0.033rem] text-white">
            Create New NFT
          </h1>
          <p className="text-custom-text text-base leading-normal font-medium">
            Upload your digital asset and provide necessary details to mint it
            as an NFT.
          </p>
        </div>
        {children}
      </div>
    </main>
  );
};

export default CreateLayout;
