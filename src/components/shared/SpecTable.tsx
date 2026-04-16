"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpecTableProps {
  title?: string;
  eyebrow?: string;
  rows: Array<{ key: string; value: string }>;
  sticky?: boolean;
  className?: string;
  accent?: string;
}

/** Editorial spec table: mono key / ivory value / champagne hairlines. */
export function SpecTable({ title = "Fiche technique", eyebrow, rows, sticky, className, accent }: SpecTableProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2px] border border-ivory/10 bg-gradient-to-br from-ivory/[0.02] to-transparent p-7 sm:p-8",
        sticky && "lg:sticky lg:top-28",
        className
      )}
    >
      <div className="flex items-baseline justify-between mb-6">
        <div>
          {eyebrow && <p className="eyebrow text-champagne/85 mb-2">{eyebrow}</p>}
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ivory">{title}</h3>
        </div>
        <span className="font-mono text-[10px] tabular-nums text-ash">
          {String(rows.length).padStart(2, "0")}
        </span>
      </div>

      <div aria-hidden className="h-px w-full mb-4" style={{ background: accent ? `${accent}44` : "rgba(201,163,92,0.25)" }} />

      <dl className="space-y-0">
        {rows.map(({ key, value }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-baseline justify-between gap-4 py-3 border-b border-ivory/8 last:border-none"
          >
            <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ash group-hover:text-champagne transition-colors">
              {key}
            </dt>
            <dd className="text-[13px] text-ivory/90 text-right leading-tight">{value}</dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}
