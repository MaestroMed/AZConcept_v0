"use client";

import { useCountUp } from "@/lib/hooks/useCountUp";
import { stats } from "@/data/stats";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
        {count.toLocaleString("fr-FR")}
        <span className="text-text-muted">{suffix}</span>
      </div>
      <p className="mt-1.5 text-[13px] text-text-secondary">{label}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
