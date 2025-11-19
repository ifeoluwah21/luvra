"use client";

import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { appStore } from "@/store/appStore";
import Image from "next/image";

export default function Intro() {
  const { slideUp, setSlideUp } = appStore();

  return (
    <AnimatePresence>
      {!slideUp && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
        >
          {/* Background image */}
          <Image
            src="/celine-druguet-ttzoSPBYdrI-unsplash.webp"
            alt="Luvra Background"
            fill
            priority
            className="object-cover"
          />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-6xl sm:text-8xl md:text-9xl font-serif tracking-[0.2em] uppercase text-white drop-shadow-lg font-light mt-20"
          >
            L U V R A
          </motion.h1>
          {/* Button */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative z-10"
          >
            <Button
              className=" cursor-pointer mt-10 bg-white text-black hover:bg-gray-200  sm:w-[150px] md:w-[180px] h-12 sm:h-14 md:h-14 text-lg sm:text-xl md:text-2xl font-medium rounded-none font-serif drop-shadow-lg"
              onClick={() => setSlideUp(true)}
            >
              Explore
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
