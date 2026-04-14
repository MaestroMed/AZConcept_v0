"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { stats } from "@/data/stats";

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-primary">
        {count.toLocaleString("fr-FR")}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-[var(--section-padding)] bg-surface relative">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
