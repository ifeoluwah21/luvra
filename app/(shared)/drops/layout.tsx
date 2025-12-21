import type { FC, PropsWithChildren } from "react";

const DropsLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-[1600px] flex-1 px-4 py-5 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      {children}
    </main>
  );
};

export default DropsLayout;
