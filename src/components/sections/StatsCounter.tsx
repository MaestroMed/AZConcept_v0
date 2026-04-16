"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { stats } from "@/data/stats";

function Stat({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative group py-8 px-6 sm:px-8 border-l border-ivory/8 first:border-none"
    >
      <span className="absolute top-4 left-6 sm:left-8 font-mono text-[10px] tabular-nums text-ash">
        {index}
      </span>
      <div className="mt-8 display font-light text-ivory text-[clamp(2.2rem,5vw,3.6rem)] tabular-nums tracking-[-0.025em] leading-[1]">
        {count.toLocaleString("fr-FR")}
        <span className="display-italic text-champagne font-light ml-0.5">{suffix}</span>
      </div>
      <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-platinum">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <section className="relative">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="rounded-[2px] border border-ivory/8 bg-gradient-to-br from-ivory/[0.015] to-transparent overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, i) => (
              <Stat key={stat.label} {...stat} index={String(i + 1).padStart(2, "0")} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
