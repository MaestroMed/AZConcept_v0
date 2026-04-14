"use client";

import { motion } from "framer-motion";
import { partners } from "@/data/partners";

export function LogoMarquee() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-16 bg-surface border-y border-border overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs uppercase tracking-[0.2em] text-text-muted mb-10"
      >
        Ils nous font confiance
      </motion.p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        {/* Marquee */}
        <div
          className="flex items-center gap-16 whitespace-nowrap"
          style={{
            animation: "marquee 35s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((partner, i) => (
            <span
              key={`${partner.name}-${i}`}
              className="text-xl sm:text-2xl font-bold text-text-muted/30 tracking-wider uppercase select-none"
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
