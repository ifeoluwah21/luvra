"use client";
import Intro from "@/components/Intro";
import { appStore } from "@/store/appStore";
import { motion } from "motion/react";

export default function Home() {
  const { slideUp } = appStore();
  return (
    <>
      <Intro />
      {slideUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          eveniet corporis, veniam corrupti sequi, ea autem libero officiis vero
          fuga, dignissimos mollitia alias! Quos sit at sint debitis corrupti
          quasi.8
        </motion.div>
      )}
    </>
  );
}
