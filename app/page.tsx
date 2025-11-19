"use client";
import Intro from "@/components/Intro";
import { appStore } from "@/store/appStore";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const { slideUp } = appStore();

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
            This is the home page
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
