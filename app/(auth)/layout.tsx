import React from "react";
import { Toaster } from "react-hot-toast";

const authLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full flex-1">
      <Toaster position="top-right" />
      <section className="flex w-full items-center justify-center px-4 py-5">
        {children}
      </section>
    </main>
  );
};

export default authLayout;
