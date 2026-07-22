"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import type { Modele } from "@/types";

interface SpecComparisonProps {
  modeles: Modele[];
  gammeName: string;
  accentColor: string;
  categorySlug: string;
  gammeSlug: string;
}

/**
 * Side-by-side spec comparison of every modèle in a gamme.
 * Architects' shortcut: one table instead of N product pages.
 * First column sticky; horizontal scroll on narrow screens; print-friendly.
 */
export function SpecComparison({ modeles, gammeName, accentColor, categorySlug, gammeSlug }: SpecComparisonProps) {
  const withSpecs = modeles.filter((m) => m.specs && Object.keys(m.specs).length > 0);
  if (withSpecs.length < 2) return null;

  // Union of spec keys, in encounter order.
  const keys: string[] = [];
  for (const m of withSpecs) {
    for (const k of Object.keys(m.specs!)) {
      if (!keys.includes(k)) keys.push(k);
    }
  }

  return (
    <section className="relative py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-end justify-between mb-12 sm:mb-16 flex-wrap gap-6">
            <div>
              <Eyebrow index="04" label="Comparer" className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                Les modèles {gammeName},<br />
                <span className="display-italic font-light text-champagne">côte à côte.</span>
              </h2>
            </div>
            <span className="font-mono text-[10.5px] tabular-nums text-ash">
              {String(withSpecs.length).padStart(2, "0")} modèles · {String(keys.length).padStart(2, "0")} critères
            </span>
          </div>

          <div className="overflow-x-auto rounded-[2px] border border-ivory/10">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b" style={{ borderColor: `${accentColor}44` }}>
                  <th
                    scope="col"
                    className="sticky left-0 bg-obsidian z-10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ash font-medium w-44"
                  >
                    Critère
                  </th>
                  {withSpecs.map((m) => (
                    <th key={m.id} scope="col" className="px-5 py-4 align-bottom">
                      <Link
                        href={`/${categorySlug}/${gammeSlug}/${m.slug}`}
                        className="group inline-block"
                      >
                        <span className="block display text-ivory text-[17px] leading-tight tracking-[-0.015em] group-hover:text-champagne transition-colors">
                          {m.name}
                        </span>
                        <span className="block font-mono text-[9.5px] uppercase tracking-[0.12em] text-platinum mt-1.5 max-w-[180px] truncate">
                          {m.tagline}
                        </span>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {keys.map((key, i) => (
                  <tr
                    key={key}
                    className={`border-b border-ivory/6 last:border-none ${i % 2 === 1 ? "bg-ivory/[0.015]" : ""}`}
                  >
                    <th
                      scope="row"
                      className="sticky left-0 bg-obsidian z-10 px-5 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-platinum font-medium"
                    >
                      {key}
                    </th>
                    {withSpecs.map((m) => (
                      <td key={m.id} className="px-5 py-3.5 text-[13px] text-ivory/85 leading-snug">
                        {m.specs?.[key] ?? <span className="text-ash">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
            Toutes dimensions adaptables sur étude — les gammes sont des points de départ.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
