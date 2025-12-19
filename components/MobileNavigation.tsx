"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import NavLink from "./NavLink";

const MobileNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const { status, data } = useSession();

  return (
    <>
      <nav
        aria-label="mobile menu"
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
          {status === "authenticated" && (
            <div className="relative h-16 w-16 overflow-clip rounded-full bg-white">
              <Image
                alt={data.user.name || ""}
                src={data.user.image || "/placeholder.png"}
                width={96}
                height={96}
              />
            </div>
          )}
        </div>
        <ul className="flex w-full flex-col items-center gap-6">
          <li>
            <NavLink
              onClick={() => {
                setIsNavOpen(false);
                document.body.classList.remove("modal-open");
              }}
              href={"/"}
              className={`px-4 py-2 text-xl leading-normal font-semibold transition-colors hover:text-white`}
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setIsNavOpen(false);
                document.body.classList.remove("modal-open");
              }}
              href={"/auctions"}
              className={`px-4 py-2 text-xl leading-normal font-semibold transition-colors hover:text-white`}
            >
              Auctions
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setIsNavOpen(false);
                document.body.classList.remove("modal-open");
              }}
              href={"/drops"}
              className={`px-4 py-2 text-xl leading-normal font-semibold transition-colors hover:text-white`}
            >
              Drops
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setIsNavOpen(false);
                document.body.classList.remove("modal-open");
              }}
              href={"#"}
              className={`px-4 py-2 text-xl leading-normal font-semibold transition-colors hover:text-white`}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setIsNavOpen(false);
                document.body.classList.remove("modal-open");
              }}
              href={"/create"}
              className={`px-4 py-2 text-xl leading-normal font-semibold transition-colors hover:text-white`}
            >
              Create
            </NavLink>
          </li>
        </ul>
        <div className="my-auto flex w-full items-center justify-center gap-12">
          {status !== "authenticated" && (
            <>
              <Link
                href={"/sign-in"}
                className="hover:bg-dark-surface/90 bg-dark-surface-200 h-10 max-w-[480px] min-w-[84px] rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href={"/sign-up"}
                className="hover:bg-pry/90 bg-pry h-10 max-w-[480px] min-w-[84px] rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
          {status === "authenticated" && (
            <Button
              type="button"
              onClick={() => {
                signOut({ redirectTo: "/sign-in", redirect: true });
                // redirect("/sign-in");
              }}
              className="hover:bg-dark-surface-200 h-10 max-w-[480px] min-w-[84px] rounded-full bg-transparent px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors"
            >
              Log out
            </Button>
          )}
        </div>
      </nav>
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

export default MobileNavigation;
