"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { stats } from "@/data/stats";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center py-8">
      <div className="text-[2.4rem] sm:text-[3rem] font-semibold tracking-tight text-text-primary tabular-nums">
        {count.toLocaleString("fr-FR")}
        <span className="text-text-muted font-normal">{suffix}</span>
      </div>
      <p className="mt-1 text-[12px] text-text-secondary tracking-wide">{label}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-light rounded-2xl mx-[var(--container-padding)] my-4"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-border/20">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
