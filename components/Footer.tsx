import React from "react";
import LuvraIcon from "./LuvraIcon";
import Link from "next/link";
import XIcon from "./XIcon";
import DiscordIcon from "./DiscordIcon";

const Footer = () => {
  return (
    <footer className="border-custom-border/20 mt-10 w-full border-t px-4 py-8 sm:px-10 md:px-20 lg:px-30">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <LuvraIcon />
            <h2 className="text-lg leading-tight font-bold tracking-[-0.015rem] text-white">
              Luvra
            </h2>
          </div>
          <p className="text-sm">
            Join our community to stay up to date with latest drops and news.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white">Marketplace</h3>
          <ul className="flex flex-col gap-3">
            <li className="text-custom-text hover:text-pry w-max text-sm transition-colors">
              <Link href={"/"}>Discover</Link>
            </li>
            <li className="text-custom-text hover:text-pry w-max text-sm transition-colors">
              <Link href={"/auctions"}>Auctions</Link>
            </li>
            <li className="text-custom-text hover:text-pry w-max text-sm transition-colors">
              <Link href={"/create"}>Create</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white">Company</h3>
          <ul className="flex flex-col gap-3">
            <li className="text-custom-text hover:text-pry w-max text-sm transition-colors">
              <Link href={"#"}>About Us</Link>
            </li>
            <li className="text-custom-text hover:text-pry w-max text-sm transition-colors">
              <Link href={"#"}>Help Center</Link>
            </li>
            <li className="text-custom-text hover:text-pry w-max text-sm transition-colors">
              <Link href={"#"}>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white">Join our community</h3>
          <div className="flex gap-4">
            <Link
              className="fill-custom-text hover:fill-pry transition-colors"
              href={"#"}
            >
              <XIcon />
            </Link>
            <Link
              className="fill-custom-text hover:fill-pry transition-colors"
              href={"#"}
            >
              <DiscordIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
