"use client";

import { motion } from "framer-motion";
import { partners } from "@/data/partners";

export function LogoMarquee() {
  const doubled = [...partners, ...partners];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 border-y border-border/15 overflow-hidden"
    >
      <p className="text-center text-[10px] uppercase tracking-[0.25em] text-text-muted/60 mb-8">
        Ils nous font confiance
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex items-center gap-20 whitespace-nowrap"
          style={{ animation: "marquee 40s linear infinite", width: "max-content" }}>
          {doubled.map((partner, i) => (
            <span key={`${partner.name}-${i}`}
              className="text-lg sm:text-xl font-medium text-text-muted/20 tracking-wider uppercase select-none">
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
