"use client";

import { motion } from "framer-motion";
import { partners } from "@/data/partners";

export function LogoMarquee() {
  const doubled = [...partners, ...partners, ...partners];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
      className="relative py-14 border-y border-ivory/8 overflow-hidden"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] mb-8">
        <div className="flex items-baseline justify-between">
          <span className="eyebrow text-platinum">Architectes · Promoteurs · Majors</span>
          <span className="font-mono text-[10.5px] tabular-nums text-ash">
            depuis 2018
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-ink to-transparent z-10" />

        <div
          className="flex items-center gap-16 sm:gap-24 whitespace-nowrap will-change-transform"
          style={{ animation: "marquee 55s linear infinite", width: "max-content" }}
        >
          {doubled.map((p, i) => (
            <div key={`${p.name}-${i}`} className="flex items-center gap-4 shrink-0">
              <span className="h-[6px] w-[6px] rounded-full bg-champagne/40" />
              <span className="display font-light text-[1.4rem] sm:text-[1.8rem] tracking-[-0.02em] text-ivory/30 hover:text-ivory/70 transition-colors">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
