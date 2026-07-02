"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-5xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Available for Work
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 text-6xl font-black leading-tight md:text-8xl"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Alif Mustaqim
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Assistant Project Manager & Software Engineer passionate about
          building digital products, construction technology, and modern user
          experiences.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <button className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500">
            View Projects
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <button className="group flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-white/5 px-8 py-4 font-semibold backdrop-blur hover:border-blue-500">
            <Download size={18} />
            Download CV
          </button>
        </motion.div>

      </div>
    </section>
  );
}