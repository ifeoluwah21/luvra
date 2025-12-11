import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
const Layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  return (
    <div className="flex min-h-dvh w-full grow flex-col items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
