"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, SplitText);
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline();
      tl.current.from([titleRef.current, descRef.current], {
        autoAlpha: 0,
        duration: 0.05,
      });
      SplitText.create(titleRef.current, {
        type: "words, chars",
        autoSplit: true,
        onSplit(splitText) {
          tl.current?.from(splitText.words, {
            yPercent: 20,
            stagger: 0.05,
            autoAlpha: 0,
            duration: 0.2,
          });
        },
      });
      SplitText.create(descRef.current, {
        type: "lines",
        autoSplit: true,
        onSplit(splitText) {
          tl.current?.from(splitText.lines, {
            xPercent: 20,
            stagger: 0.05,
            autoAlpha: 0,
            duration: 0.2,
          });
        },
      });
      tl.current
        .from(linkRef.current, {
          autoAlpha: 0,
          xPercent: -50,
          scale: 0.6,
        })
        .from(btnRef.current, { autoAlpha: 0, xPercent: 50, scale: 0.6 }, "<")
        .from(imgRef.current, {
          autoAlpha: 0,
          scale: 0.8,
          duration: 0.3,
        });
    },
    { scope: heroRef, dependencies: [] },
  );

  return (
    <div className="@container mt-10 overflow-hidden">
      <div
        ref={heroRef}
        className="flex flex-col items-center gap-6 py-10 @[480px]:gap-8 @[864px]:flex-row"
      >
        <div className="flex flex-1 flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8">
          <div className="flex flex-col gap-4 text-left">
            <h1
              ref={titleRef}
              className="invisible text-4xl leading-tight font-black tracking-[-0.033rem] text-white @[480px]:text-5xl"
            >
              Discover, Collect, and Sell Extraordinary NFTs
            </h1>
            <p
              ref={descRef}
              className="text-custom-text invisible text-base leading-normal font-normal @[480px]:text-lg @[480px]:leading-relaxed"
            >
              The world&rsquo;s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs).
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              data-btn
              ref={linkRef}
              className="bg-pry shadow-accent hover:bg-pry/90 invisible flex h-10 max-w-[480px] min-w-[84px] items-center justify-center rounded-full px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors will-change-transform @[480px]:h-12 @[480px]:px-5 @[480px]:text-base"
              href={"/auctions"}
            >
              Explore
            </Link>
            <Link
              data-btn
              ref={btnRef}
              className="bg-dark-surface/80 shadow-accent hover:bg-dark-surface/20 border-border-light/20 invisible flex h-10 max-w-[480px] min-w-[84px] items-center justify-center rounded-full border px-4 text-sm leading-normal font-bold tracking-[0.015rem] text-white transition-colors @[480px]:h-12 @[480px]:px-5 @[480px]:text-base"
              href={"/create"}
            >
              Create
            </Link>
          </div>
        </div>
        <div className="relative aspect-square w-full flex-1 overflow-hidden rounded-4xl shadow-xl @[480px]:min-w-[400px] @[864px]:w-full">
          <Image
            src={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuC6jJ-8VG1AbC1sxoZL_a2F4J7R2RE46dznF2845Gvnf8Pe-vP3JppqfE9StnJDoNlXjPcC8hpwZgqLXL3h0ar4Fa5VBU_6ghmW29OyG9fhTEkmqNhHxKzo8lYnizHdjSJy8DBYxtI0o94GaV1sZL2a9f3Qdp8pHF9jG-INKFCzz4baTUMDQ-j_dFkB7FpKQabYS00wSe3XeT27pNUvlQQCiY_WqPH1-mJed4LJ5gSsPJaez4SXXnOHXaKCOglRDr3_td0Ottmb-hCP"
            }
            alt="Hero Image"
            width={512}
            height={512}
            ref={imgRef}
            className="invisible h-auto w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
