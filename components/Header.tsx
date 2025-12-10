import React from "react";
import LuvraIcon from "./LuvraIcon";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-4 py-4 whitespace-nowrap sm:px-6 md:px-10">
      <div className="flex items-center gap-4">
        <LuvraIcon />
        <h2 className="text-lg leading-tight font-bold tracking-[-0.015em] text-white">
          Luvra
        </h2>
      </div>
      {/* <nav></nav> */}
      <Button
        type="button"
        variant={"ghost"}
        className="lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="size-6" />
      </Button>
    </header>
  );
};

export default Header;
