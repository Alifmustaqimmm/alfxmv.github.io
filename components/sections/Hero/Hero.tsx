"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";

import HeroSocials from "../../ui/HeroSocials";
import ScrollIndicator from "../../ui/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[92vh] items-center justify-center overflow-hidden px-6">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Floating Shapes */}
      <div className="absolute right-24 top-36 h-28 w-28 rounded-full border border-cyan-500/20" />

      <div className="absolute bottom-28 left-20 h-20 w-20 rounded-full border border-violet-500/20" />

      <div className="mx-auto max-w-4xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Work
        </motion.div>

        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .15 }}
          className="text-lg text-zinc-400"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25 }}
          className="mt-3 text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
        >
          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Alif Mustaqim
          </span>
        </motion.h1>

        {/* Animated Job */}
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
          wrapper="div"
          speed={45}
          repeat={Infinity}
          className="mt-8 text-xl md:text-3xl font-semibold text-blue-400"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .45 }}
          className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-8 text-zinc-400"
        >
          Building modern web applications, digital products,
          and construction technology with clean architecture,
          performance, and beautiful user experiences.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .65 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <button
            className="
            group
            flex
            items-center
            gap-2
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
            hover:shadow-[0_0_40px_rgba(59,130,246,.45)]
            "
          >
            View Projects

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-8
            py-4
            font-semibold
            backdrop-blur-xl
            transition
            hover:border-blue-500
            hover:bg-blue-500/10
            "
          >
            <Download size={18} />
            Download CV
          </button>
        </motion.div>

        {/* Social */}
        <div className="mt-10">
          <HeroSocials />
        </div>

      </div>

      <ScrollIndicator />

    </section>
  );
}