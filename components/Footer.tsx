import React from "react";
import ExampleForm from "./ExampleForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <ExampleForm />
      <Card className="sm:grid-[auto] border-0 shadow-none sm:mx-auto sm:grid sm:w-17/20">
        <CardHeader className="sm:block sm:p-0">
          <CardTitle className="text-2xl">LUVRA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:grid sm:grid-cols-3 sm:pr-0">
          <ul className="space-y-3">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/marketplace"}>Marketplace</Link>
            </li>
            <li>
              <Link href={"/auctions"}>Auctions</Link>
            </li>
            <li>
              <Link href={"/drop"}>Drop</Link>
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <Link href={"#"}>Blogs</Link>
            </li>
            <li>
              <Link href={"#"}>Wallet</Link>
            </li>
            <li>
              <Link href={"#"}>Rates</Link>
            </li>
            <li>
              <Link href={"#"}>High bids</Link>
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <Link href={"#"} className="flex items-center gap-x-3">
                <Mail />
                <span> Luvra@gmail.com</span>
              </Link>
            </li>
            <li>
              <Link href={"#"} className="flex items-center gap-x-3">
                <MapPin /> <span>Lagos, Nigeria.</span>
              </Link>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="sm:col-[1/3] sm:justify-self-center">
          <p>
            LUVRA &copy; <span>{new Date().getFullYear()}</span>. All rights
            reserved.
          </p>
        </CardFooter>
      </Card>
    </footer>
  );
};

export default Footer;
