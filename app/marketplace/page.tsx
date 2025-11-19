"use client";

import { motion, AnimatePresence } from "motion/react";
import { appStore } from "@/store/appStore";

export default function Marketplace() {
  const { slideUp } = appStore();

  return (
    <AnimatePresence>
      {slideUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          This is the market place page
        </motion.div>
      )}
    </AnimatePresence>
  );
}
