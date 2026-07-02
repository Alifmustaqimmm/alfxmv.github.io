"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    number: 3,
    suffix: "+",
    label: "Years Experience",
  },
  {
    number: 10,
    suffix: "+",
    label: "Projects",
  },
  {
    number: 15,
    suffix: "+",
    label: "Certificates",
  },
];

export default function Stats() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="text-5xl font-bold text-blue-400">
            <CountUp
              end={item.number}
              duration={2}
            />
            {item.suffix}
          </h3>

          <p className="mt-3 text-zinc-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}