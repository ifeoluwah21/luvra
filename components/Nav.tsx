"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Nav: React.FC<{ userAvatar?: string; userName?: string }> = ({
  userAvatar,
  userName,
}) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <>
      {/* Nav bar for Desktop screens */}
      <nav className="hidden w-full items-center justify-center gap-4 lg:flex">
        <ul className="bg-dark-surface-200 border-custom-border/20 flex items-center gap-8 rounded-full border px-8 py-2 text-sm backdrop-blur-sm">
          <li className="leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"/"}>Discover</Link>
          </li>
          <li className="leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"/auctions"}>Auctions</Link>
          </li>
          <li className="leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"#"}>Drops</Link>
          </li>
          <li className="leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"#"}>Profile</Link>
          </li>
          <li className="leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"#"}>Create</Link>
          </li>
        </ul>
      </nav>
      {/* Navigation for Mobile screen */}
      <nav
        className={`bg-background-dark fixed top-0 right-0 bottom-0 left-0 flex h-dvh w-full ${isNavOpen ? "translate-x-0" : "-translate-x-full"} flex-col items-center gap-10 px-4 py-6 transition-transform sm:px-10 lg:hidden`}
      >
        <div className="flex w-full items-center justify-between">
          <Button
            type="button"
            onClick={() => {
              setIsNavOpen(false);
              document.body.classList.remove("modal-open");
            }}
            variant={"ghost"}
            className="hover:bg-dark-surface-200/30 hover:text-custom-border transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="size-8" />
          </Button>
          <div className="relative h-16 w-16 overflow-clip rounded-full bg-white">
            <Image
              alt={userName || ""}
              src={userAvatar || ""}
              width={96}
              height={96}
            />
          </div>
        </div>
        <ul className="flex w-full flex-col items-center gap-6">
          <li className="text-xl leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"/"} className="px-4 py-2">
              Discover
            </Link>
          </li>
          <li className="text-xl leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"/auctions"} className="px-4 py-2">
              Auctions
            </Link>
          </li>
          <li className="text-xl leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"#"} className="px-4 py-2">
              Drops
            </Link>
          </li>
          <li className="text-xl leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"#"} className="px-4 py-2">
              Profile
            </Link>
          </li>
          <li className="text-xl leading-normal font-semibold transition-colors hover:text-white">
            <Link href={"#"} className="px-4 py-2">
              Create
            </Link>
          </li>
        </ul>
        <div className="my-auto flex w-full items-center justify-center gap-12">
          <Button className="hover:bg-dark-surface/90 bg-dark-surface-200 h-10 max-w-[480px] min-w-[84px] rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors">
            Sign In
          </Button>
          <Button className="hover:bg-pry/90 bg-pry h-10 max-w-[480px] min-w-[84px] rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors">
            Sign Up
          </Button>
        </div>
      </nav>
      {/* Desktop screen*/}
      <div className="hidden items-center gap-3 lg:flex">
        <Button className="hover:bg-dark-surface-200 h-10 max-w-[480px] min-w-[84px] rounded-full bg-transparent px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors">
          Sign In
        </Button>
        <Button className="hover:bg-pry/90 bg-pry h-10 max-w-[480px] min-w-[84px] rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors">
          Sign Up
        </Button>
      </div>
      {/* Open navigation for mobile screen */}
      <Button
        type="button"
        variant={"ghost"}
        className="hover:bg-dark-surface-200/30 hover:text-custom-border transition-colors lg:hidden"
        aria-label="Open navigation menu"
        onClick={() => {
          setIsNavOpen(true);
          document.body.classList.add("modal-open");
        }}
      >
        <Menu className="size-6" />
      </Button>
    </>
  );
};

export default Nav;
