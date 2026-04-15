"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getAllGammes } from "@/data/gammes";
import { categories } from "@/data/categories";

function getCategorySlug(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.slug ?? "";
}

export function GammesShowcase() {
  const gammes = getAllGammes();

  return (
    <section className="py-[var(--section-padding)] bg-surface-elevated/40">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">Nos gammes</p>
          <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
            10 Gammes.<br />
            <span className="text-text-secondary">Une Vision.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {gammes.map((gamme, i) => (
            <motion.div
              key={gamme.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.6 }}
            >
              <Link
                href={`/${getCategorySlug(gamme.categoryId)}/${gamme.slug}`}
                className="group card-glow block p-6 bg-surface hover:bg-surface-elevated transition-colors duration-500 h-full relative"
              >
                {/* Accent dot */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: gamme.accentColor }} />
                  <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
                    {categories.find((c) => c.id === gamme.categoryId)?.name}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-[15px] font-semibold text-text-primary mb-1.5 group-hover:text-white transition-colors duration-300">
                  {gamme.name}
                </h3>
                <p className="text-[13px] text-text-secondary leading-relaxed mb-6">
                  {gamme.tagline}
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-text-muted">{gamme.modeles.length} modeles</span>
                  <ArrowUpRight size={14}
                    className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
