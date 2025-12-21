import React from "react";
import LuvraIcon from "./LuvraIcon";
import Nav from "./Nav";

const Header: React.FC = async () => {
  return (
    <header className="border-b-custom-border/20 bg-background-dark sticky top-0 z-10 flex w-full items-center justify-between border-b px-4 py-4 whitespace-nowrap backdrop-blur-sm sm:px-10 md:px-20 lg:gap-6 lg:px-30">
      <div className="flex items-center gap-4">
        <LuvraIcon />
        <h2 className="text-lg leading-tight font-bold tracking-[-0.015em] text-white">
          Luvra
        </h2>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
