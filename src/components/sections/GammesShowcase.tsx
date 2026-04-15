"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getAllGammes } from "@/data/gammes";
import { categories } from "@/data/categories";

function getCategorySlug(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.slug ?? "";
}

export function GammesShowcase() {
  const gammes = getAllGammes();

  return (
    <section className="py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <SectionHeader
          title="10 Gammes. Une Vision."
          subtitle="Du minimalisme absolu a l'expression brute, chaque gamme repond a une vision architecturale precise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {gammes.map((gamme, i) => (
            <motion.div
              key={gamme.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/${getCategorySlug(gamme.categoryId)}/${gamme.slug}`}
                className="group block p-5 rounded-xl bg-surface-card/50 border border-border/50 hover:border-border-light hover:bg-surface-card transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: gamme.accentColor }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.12em] text-text-muted font-medium">
                    {categories.find((c) => c.id === gamme.categoryId)?.name}
                  </span>
                </div>

                <h3 className="text-[15px] font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">
                  {gamme.name}
                </h3>

                <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
                  {gamme.tagline}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-text-muted">
                    {gamme.modeles.length} modeles
                  </span>
                  <ArrowRight
                    size={13}
                    className="text-text-muted group-hover:text-text-secondary group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
