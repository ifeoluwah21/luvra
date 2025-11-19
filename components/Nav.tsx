"use client";
import { Search, ShoppingCart, Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Auctions", path: "/auctions" },
    { name: "Drop", path: "/drop" },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <div className="hidden items-center justify-between sm:flex">
        <h2>LUVRA</h2>

        <div className="flex gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={
                pathname === link.path
                  ? "border-b-3 border-black"
                  : "border-b-3 border-transparent hover:border-gray-400"
              }
            >
              <p>{link.name}</p>
            </Link>
          ))}
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
              <div className="itens-center flex justify-between">
                <h2>LUVRA</h2>
                <X
                  className="cursor-pointer"
                  onClick={() => setIsSideBarOpen(false)}
                />
              </div>

              <div className="mt-8 flex flex-col gap-12">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsSideBarOpen(false)}
                  >
                    <p>{link.name}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </>
  );
}
