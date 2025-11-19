"use client";

import { motion, AnimatePresence } from "motion/react";
import Nav from "./Nav";
import { introStore } from "@/store/introStore";

export default function NavWrapper() {
  const { slideUp } = introStore();

  return (
    <AnimatePresence>
      {slideUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="px-4 py-10 md:px-20 lg:px-30"
        >
          <Nav />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
