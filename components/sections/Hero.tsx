"use client";

import { TypeAnimation } from "react-type-animation";
import HeroSocials from "../ui/HeroSocials";
import ScrollIndicator from "../ui/ScrollIndicator";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="absolute right-16 top-52 h-24 w-24 rounded-full border border-cyan-500/30 backdrop-blur-xl" />

<div className="absolute bottom-32 left-16 h-16 w-16 rounded-full border border-violet-500/30 backdrop-blur-xl" />
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
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Alif Mustaqim
          </span>
        </motion.h1>

        {/* Subtitle */}
        <TypeAnimation
  sequence={[
    "Assistant Project Manager",
    2000,
    "Full Stack Developer",
    2000,
    "Laravel Developer",
    2000,
    "Next.js Developer",
    2000,
  ]}
  wrapper="span"
  speed={40}
  repeat={Infinity}
  className="mt-6 block text-2xl font-semibold text-blue-400"
/>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <button className="
            group
            rounded-xl
            bg-linear-to-r
            from-blue-600
            to-cyan-500
            px-8
            py-4
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(59,130,246,.5)]
            ">
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
      <HeroSocials />
        <ScrollIndicator />
    </section>
  );
}