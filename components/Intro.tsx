"use client";

import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { appStore } from "@/store/appStore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Intro() {
  const { slideUp, setSlideUp } = appStore();
  const [hydrated, setHydrated] = useState(false);

  // Wait for Zustand to rehydrate
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Don’t render anything until hydration completes
  if (!hydrated) return null;

  if (slideUp) return null;

  return (
    <AnimatePresence>
      {!slideUp && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center overflow-hidden"
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
            className="relative z-10 mt-20 font-serif text-6xl font-light tracking-[0.2em] text-white uppercase drop-shadow-lg sm:text-8xl md:text-9xl"
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
              className="mt-10 h-12 cursor-pointer rounded-none bg-white font-serif text-lg font-medium text-black drop-shadow-lg hover:bg-gray-200 sm:h-14 sm:w-[150px] sm:text-xl md:h-14 md:w-[180px] md:text-2xl"
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
