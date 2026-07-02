"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.5 }}
          viewport={{ once:true }}
          className="text-5xl font-bold"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ delay:.2 }}
          viewport={{ once:true }}
          className="mt-8 max-w-3xl leading-8 text-zinc-400"
        >
          I&apos;man Assistant Project Manager and Full Stack Developer
          passionate about building digital experiences, modern web
          applications, and construction technology.
        </motion.p>

      </div>
    </section>
  );
}