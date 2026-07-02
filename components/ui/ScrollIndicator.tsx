"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      text-zinc-500
      "
    >
      ↓

      <p className="mt-2 text-xs tracking-widest">
        SCROLL
      </p>
    </motion.div>
  );
}