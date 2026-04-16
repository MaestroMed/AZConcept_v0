"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getAllGammes } from "@/data/gammes";
import { categories } from "@/data/categories";
import { Eyebrow } from "@/components/shared/Eyebrow";

function getCategorySlug(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.slug ?? "";
}

function getCategoryName(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.name ?? "";
}

export function GammesShowcase() {
  const gammes = getAllGammes();
  const total = String(gammes.length).padStart(2, "0");

  return (
    <section className="relative py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow index="Chapitre II" label="Collections" className="mb-6" />
            <h2 className="display text-ivory text-[clamp(2.4rem,5vw,4rem)] leading-[0.98] tracking-[-0.028em]">
              {total} gammes.<br />
              <span className="display-italic font-light text-platinum">Une bibliothèque.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-[15px] leading-[1.65] text-pearl/80"
          >
            Du minimalisme absolu à l&apos;expression brute, chaque gamme
            est un vocabulaire propre, pensé pour un projet, une
            typologie, un tempérament architectural.
          </motion.p>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 border-t border-l border-ivory/8">
          {gammes.map((gamme, i) => {
            const index = String(i + 1).padStart(2, "0");
            const href = `/${getCategorySlug(gamme.categoryId)}/${gamme.slug}`;
            return (
              <motion.div
                key={gamme.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.04, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="border-r border-b border-ivory/8"
              >
                <Link
                  href={href}
                  className="group relative block h-full p-8 sm:p-10 lg:p-12 overflow-hidden transition-colors duration-500 hover:bg-ivory/[0.02]"
                >
                  {/* Accent line (top) */}
                  <div
                    className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ backgroundColor: gamme.accentColor }}
                  />

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10.5px] tabular-nums text-ash">
                      {index} / {total}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-ivory/25 group-hover:text-champagne group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>

                  <div className="mt-12 sm:mt-16">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span
                        className="h-[6px] w-[6px] rounded-full"
                        style={{ backgroundColor: gamme.accentColor }}
                      />
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-platinum">
                        {getCategoryName(gamme.categoryId)}
                      </span>
                    </div>

                    <h3 className="display text-ivory text-[clamp(1.6rem,3vw,2.2rem)] leading-[1] tracking-[-0.02em]">
                      {gamme.name}
                    </h3>
                    <p className="mt-2 display-italic font-light text-pearl text-[15px] sm:text-[16px] leading-snug">
                      {gamme.tagline}
                    </p>

                    <p className="mt-6 text-[13.5px] leading-[1.65] text-pearl/60 line-clamp-3">
                      {gamme.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-between pt-4 border-t border-ivory/6">
                    <span className="font-mono text-[10.5px] text-ash">
                      {gamme.modeles.length} modèles
                    </span>
                    <span className="font-mono text-[10.5px] text-champagne/70 group-hover:text-champagne transition-colors">
                      Découvrir →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
