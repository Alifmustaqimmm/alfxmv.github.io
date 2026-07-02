"use client";

import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-10
      backdrop-blur-xl
      "
    >
      <h3 className="text-2xl font-bold">
        Who am I?
      </h3>

      <p className="mt-6 leading-8 text-zinc-400">
        I&apos;m Alif Mustaqim, an Assistant Project Manager and Full Stack
        Developer who enjoys building modern web applications, construction
        technology, and digital products with a strong focus on performance,
        clean architecture, and user experience.
      </p>
    </motion.div>
  );
}