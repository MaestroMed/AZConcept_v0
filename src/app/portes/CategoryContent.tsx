"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import type { Category, Gamme } from "@/types";

interface CategoryContentProps {
  category: Category;
  gammes: Gamme[];
}

export function CategoryContent({ category, gammes }: CategoryContentProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      <PageHero
        variant="category"
        color="#3a64c0"
        title={category.name}
        subtitle={category.description}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: category.name },
        ]}
      />

      <section className="py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
              Nos gammes
            </p>
            <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
              {gammes.length} gamme{gammes.length > 1 ? "s" : ""} disponible{gammes.length > 1 ? "s" : ""}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/20 rounded-2xl overflow-hidden">
            {gammes.map((gamme, i) => (
              <motion.div
                key={gamme.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/portes/${gamme.slug}`}
                  className="group block bg-surface p-8 sm:p-10 hover:bg-surface-elevated transition-all duration-500 h-full"
                  onMouseEnter={() => setHoveredId(gamme.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    boxShadow: hoveredId === gamme.id
                      ? `0 0 0 1px ${gamme.accentColor}20`
                      : "none",
                  }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: gamme.accentColor }}
                      />
                      <h3 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] group-hover:text-accent transition-colors">
                        {gamme.name}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-text-muted/0 group-hover:text-accent group-hover:opacity-100 opacity-0 transition-all duration-500 mt-2 shrink-0"
                    />
                  </div>

                  <p className="text-[14px] text-accent font-medium mb-3">
                    {gamme.tagline}
                  </p>

                  <p className="text-[14px] text-text-secondary leading-[1.7] mb-6">
                    {gamme.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {gamme.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 text-[11px] rounded-md bg-surface-card text-text-muted"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="text-[13px] text-text-muted whitespace-nowrap ml-4">
                      {gamme.modeles.length} modele{gamme.modeles.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
