"use client";

import { motion } from "framer-motion";

interface Section {
  title: string;
  content: string[];
}

interface LegalContentProps {
  sections: Section[];
  lastUpdate?: string;
}

/** Shared editorial layout for static legal pages. */
export function LegalContent({ sections, lastUpdate = "Avril 2026" }: LegalContentProps) {
  return (
    <section className="relative py-[var(--section-padding)]">
      <div className="max-w-3xl mx-auto px-[var(--container-padding)]">
        <ol className="space-y-14 sm:space-y-20">
          {sections.map((section, i) => {
            const idx = String(i + 1).padStart(2, "0");
            return (
              <motion.li
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-12 gap-6"
              >
                <div className="col-span-12 sm:col-span-2">
                  <span className="font-mono text-[10.5px] tabular-nums text-champagne">
                    {idx} / {String(sections.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-10">
                  <h2 className="display text-ivory text-[clamp(1.4rem,2.6vw,2rem)] leading-tight tracking-[-0.018em] mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4 max-w-prose">
                    {section.content.map((p, j) => (
                      <p key={j} className="text-[14.5px] text-pearl/80 leading-[1.7]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <div className="mt-20 pt-8 border-t border-ivory/8 flex items-baseline justify-between">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ash">
            Dernière mise à jour
          </p>
          <p className="font-mono text-[11px] text-pearl tabular-nums">{lastUpdate}</p>
        </div>
      </div>
    </section>
  );
}
