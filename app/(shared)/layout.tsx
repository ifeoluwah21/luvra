import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Toaster } from "react-hot-toast";
const Layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  return (
    <div className="flex min-h-dvh w-full grow flex-col items-center">
      <Toaster position="top-right" />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
