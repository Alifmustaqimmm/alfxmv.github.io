"use client";

import { motion } from "framer-motion";

const menus = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
      }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <nav
        className="
        flex
        items-center
        gap-8
        rounded-full
        border
        border-white/10
        bg-white/5
        px-8
        py-4
        backdrop-blur-xl
        shadow-[0_0_50px_rgba(59,130,246,0.08)]
      "
      >
        <h1
          className="
          bg-gradient-to-r
          from-blue-400
          via-cyan-300
          to-violet-400
          bg-clip-text
          text-xl
          font-bold
          tracking-widest
          text-transparent
        "
        >
          ALFXMV
        </h1>

        <div className="flex gap-6 text-sm text-zinc-400">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className="
                text-zinc-400
                transition-all
                duration-300
                hover:text-white
                hover:drop-shadow-[0_0_12px_rgba(59,130,246,.7)]
                "
            >
              {menu.name}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}