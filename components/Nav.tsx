"use client";
import { Search, ShoppingCart, Bell, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function Nav() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <div className="hidden items-center justify-between sm:flex">
        <h2>LUVRA</h2>

        <div className="flex gap-10">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/marketplace"}>
            <p>Marketplace</p>
          </Link>
          <Link href={"/auctions"}>
            <p>Auctions</p>
          </Link>
          <Link href={"/drop"}>
            <p>Drop</p>
          </Link>
        </div>

        <div className="flex gap-6">
          <Search className="h-5 w-5" />
          <ShoppingCart className="h-5 w-5" />
          <Bell className="h-5 w-5" />
        </div>
      </div>
      {/* Mobile Nav */}
      <>
        <div className="flex items-center justify-between sm:hidden">
          <Menu
            aria-label="Open navigation menu"
            className="cursor-pointer"
            onClick={() => setIsSideBarOpen(true)}
          />
          <h2>LUVRA</h2>
          <div className="flex gap-6">
            <Search className="h-5 w-5" />
            <ShoppingCart className="h-5 w-5" />
          </div>
        </div>
        {/* Side bar */}
        <AnimatePresence>
          {isSideBarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-background fixed top-0 left-0 z-50 block h-full w-full p-10 sm:hidden"
            >
              <div className="items-center flex justify-between">
                <h2>LUVRA</h2>
                <X
                  aria-label="Close navigation menu"
                  className="cursor-pointer"
                  onClick={() => setIsSideBarOpen(false)}
                />
              </div>

              <div className="mt-8 flex flex-col gap-12">
                <Link href={"/"} onClick={() => setIsSideBarOpen(false)}>
                  <p>Home</p>
                </Link>
                <Link
                  href={"/marketplace"}
                  onClick={() => setIsSideBarOpen(false)}
                >
                  <p>Marketplace</p>
                </Link>
                <Link
                  href={"/auctions"}
                  onClick={() => setIsSideBarOpen(false)}
                >
                  <p>Auctions</p>
                </Link>
                <Link href={"/drop"} onClick={() => setIsSideBarOpen(false)}>
                  <p>Drop</p>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </>
  );
}
