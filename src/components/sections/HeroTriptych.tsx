"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TriptychCard } from "@/components/hero/TriptychCard";

const cards = [
  {
    pillar: "fabriquer" as const,
    title: "FABRIQUER.",
    href: "/garde-corps",
  },
  {
    pillar: "proteger" as const,
    title: "PROT\u00c9GER.",
    href: "/portes",
  },
  {
    pillar: "durer" as const,
    title: "DURER.",
    href: "/grilles",
  },
];

export function HeroTriptych() {
  return (
    <section className="relative">
      {/* Full-viewport triptych — 3 panels edge to edge */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen min-h-[700px] max-h-[1200px]">
        {cards.map((card, i) => (
          <TriptychCard key={card.pillar} {...card} index={i} />
        ))}
      </div>

      {/* Scroll indicator — bottom right, very subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 right-8 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/25"
        >
          {/* 4-point star like in the DA */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8Z" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
