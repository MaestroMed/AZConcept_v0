"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getAllGammes } from "@/data/gammes";
import { categories } from "@/data/categories";

function getCategorySlug(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.slug ?? "";
}

export function GammesShowcase() {
  const gammes = getAllGammes();

  return (
    <section className="py-[var(--section-padding)] bg-surface-elevated relative overflow-hidden">
      <div className="noise-overlay absolute inset-0" />

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <SectionHeader
          title="10 Gammes. Une Vision."
          subtitle="Du minimalisme absolu a l'expression brute, chaque gamme repond a une vision architecturale precise."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {gammes.map((gamme) => (
            <motion.div
              key={gamme.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Link
                href={`/${getCategorySlug(gamme.categoryId)}/${gamme.slug}`}
                className="group relative block p-6 rounded-2xl bg-surface-card border border-border hover:border-border-light transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden h-full"
              >
                {/* Accent line top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: gamme.accentColor }}
                />

                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: gamme.accentColor }}
                  />
                  <span className="text-[10px] uppercase tracking-widest text-text-muted">
                    {categories.find((c) => c.id === gamme.categoryId)?.name}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-white transition-colors">
                  {gamme.name}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-text-secondary mb-4">
                  {gamme.tagline}
                </p>

                {/* Model count */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">
                    {gamme.modeles.length} modeles
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
