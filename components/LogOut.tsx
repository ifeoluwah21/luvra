import React from "react";
import { Button } from "./ui/button";
import { signout } from "@/actions/auth";
import { Wallet } from "lucide-react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

const LogOut = async () => {
  const session = await auth();
  if (!session?.user) return redirect("/sign-in");
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <form className="mx-auto w-full max-w-md">
        <Button
          formAction={signout}
          variant={"outline"}
          className="hover:bg-custom-border/20 text-custom-text hover:text-custom-text h-14 w-full cursor-pointer rounded-2xl bg-transparent text-base leading-normal font-bold tracking-[-0.015rem] transition-colors"
        >
          <div className="flex items-center gap-4">
            <Wallet className="size-6" />
            <span>Logout</span>
          </div>
        </Button>
      </form>
      <h1>{session.user.name}</h1>
      <p>{session.user.email}</p>
      <Image
        src={session.user.image || ""}
        alt={session.user.name!}
        width={100}
        height={100}
      />
    </div>
  );
};

export default LogOut;
