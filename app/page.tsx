import { signout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { Wallet } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
  // const images = [
  //   { img: "/home/carousel/img1.png", alt: "Carousel Image 1" },
  //   { img: "/home/carousel/img2.png", alt: "Carousel Image 2" },
  //   { img: "/home/carousel/img3.png", alt: "Carousel Image 3" },
  //   { img: "/home/carousel/img4.png", alt: "Carousel Image 4" },
  //   { img: "/home/carousel/img5.jpg", alt: "Carousel Image 5" },
  //   { img: "/home/carousel/img6.jpg", alt: "Carousel Image 6" },
  //   { img: "/home/carousel/img7.jpg", alt: "Carousel Image 7" },
  // ];
  const session = await auth();

  if (!session?.user) return redirect("/sign-in");

  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-around">
      <form className="mx-auto w-full max-w-md">
        <Button
          formAction={signout}
          variant={"outline"}
          className="hover:bg-custom-border/20 text-custom-text hover:text-custom-text h-14 w-full cursor-pointer rounded-2xl bg-transparent text-base leading-normal font-bold tracking-[-0.015rem] transition-colors"
        >
          <div className="flex items-center gap-4">
            <Wallet className="size-6" />
            <span>Continue with Wallet</span>
          </div>
        </Button>
      </form>
      <h1>{session.user.name}</h1>
      <p>{session.user.email}</p>
      <Image
        src={session.user.image!}
        alt={session.user.name!}
        width={100}
        height={100}
      />
    </div>
  );
}
