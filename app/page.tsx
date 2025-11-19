"use client";
import Intro from "@/components/Intro";
import { introStore } from "@/store/introStore";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const { slideUp } = introStore();

  return (
    <>
      <Intro />
      <AnimatePresence>
        {slideUp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mt-12 flex flex-col gap-8 px-4 text-center md:px-8">
              <h1 className="mx-auto text-4xl font-semibold sm:text-5xl sm:leading-18 md:max-w-5xl md:text-6xl md:leading-20">
                Photography is poetry & beautiful untold stories
              </h1>
              <p className="mx-auto max-w-2xl sm:max-w-md">
                Flip through more than 10,000 vintage shots, old photographs,
                historic images and captures seamlessly in one place. Register
                to get top access.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
