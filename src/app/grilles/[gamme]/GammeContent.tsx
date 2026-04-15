"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import type { Category, Gamme } from "@/types";

interface GammeContentProps {
  category: Category;
  gamme: Gamme;
  categorySlug: string;
}

export function GammeContent({
  category,
  gamme,
  categorySlug,
}: GammeContentProps) {
  return (
    <>
      <PageHero
        title={gamme.name}
        subtitle={gamme.tagline}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: category.name, href: `/${categorySlug}` },
          { label: gamme.name },
        ]}
      />

      {/* Gamme description & features */}
      <section className="py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                A propos
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-6">
                Gamme {gamme.name}
              </h2>
              <p className="text-[14px] text-text-secondary leading-[1.7]">
                {gamme.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-surface-card border border-border/30 p-8"
            >
              <h3 className="text-[14px] font-semibold text-text-primary mb-5">
                Points cles
              </h3>
              <ul className="space-y-3">
                {gamme.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                      style={{ backgroundColor: `${gamme.accentColor}20` }}
                    >
                      <Check
                        size={12}
                        style={{ color: gamme.accentColor }}
                      />
                    </span>
                    <span className="text-[14px] text-text-secondary leading-[1.7]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modeles grid */}
      <section className="py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
              Nos modeles
            </p>
            <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
              {gamme.modeles.length} modele{gamme.modeles.length > 1 ? "s" : ""}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20 rounded-2xl overflow-hidden">
            {gamme.modeles.map((modele, i) => (
              <motion.div
                key={modele.id}
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
                  href={`/${categorySlug}/${gamme.slug}/${modele.slug}`}
                  className="group block bg-surface p-8 hover:bg-surface-elevated transition-colors duration-500 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-[2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] group-hover:text-accent transition-colors">
                      {modele.name}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-text-muted/0 group-hover:text-accent group-hover:opacity-100 opacity-0 transition-all duration-500 mt-1 shrink-0"
                    />
                  </div>

                  <p className="text-[13px] text-accent font-medium mb-4">
                    {modele.tagline}
                  </p>

                  <ul className="space-y-2">
                    {modele.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[13px] text-text-muted"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: gamme.accentColor }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
