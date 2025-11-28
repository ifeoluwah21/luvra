"use client";

import { motion, AnimatePresence } from "motion/react";

import { introStore } from "@/store/introStore";
import DropsPage from "./DropsPage";

export default function Drop() {
  const { slideUp } = introStore();

  return (
    <AnimatePresence>
      {slideUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <DropsPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
