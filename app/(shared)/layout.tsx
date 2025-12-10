import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
const AuctionsLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-dvh w-full grow flex-col items-center px-4 py-5 sm:px-10 md:px-20 lg:px-40">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AuctionsLayout;
