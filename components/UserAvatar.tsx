"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { signout } from "@/actions/auth";
import { useSession } from "next-auth/react";

const UserAvatar = () => {
  const { status, data } = useSession();
  if (status !== "authenticated") {
    return (
      <>
        <Link
          href={"/sign-in"}
          className="hover:bg-dark-surface-200 flex h-10 max-w-[480px] min-w-[84px] items-center rounded-full bg-transparent px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors"
        >
          Sign In
        </Link>
        <Link
          href={"/sign-up"}
          className="hover:bg-pry/90 bg-pry flex h-10 max-w-[480px] min-w-[84px] items-center rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors"
        >
          Sign Up
        </Link>
      </>
    );
  }
  return (
    <>
      <form>
        <Button
          formAction={signout}
          className="hover:bg-dark-surface-200 h-10 max-w-[480px] min-w-[84px] rounded-full bg-transparent px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors"
        >
          Log out
        </Button>
      </form>
      <div className="relative aspect-square h-10 w-10 overflow-clip rounded-full bg-white">
        <Image
          alt={data.user.name || ""}
          src={data.user.image || "/placeholder.png"}
          width={96}
          height={96}
        />
      </div>
    </>
  );
};

export default UserAvatar;
