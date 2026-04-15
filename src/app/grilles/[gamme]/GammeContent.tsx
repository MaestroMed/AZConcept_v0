"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
        variant="accent"
        color={gamme.accentColor}
        title={gamme.name}
        subtitle={gamme.tagline}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: category.name, href: `/${categorySlug}` },
          { label: gamme.name },
        ]}
      />

      {/* About section */}
      <section className="py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
              A propos
            </p>
            <h2
              className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ color: gamme.accentColor }}
            >
              Gamme {gamme.name}
            </h2>
            <p className="text-[14px] text-text-secondary leading-[1.7] max-w-2xl mb-8">
              {gamme.description}
            </p>

            {/* Key features as pills with accent border */}
            <div className="flex flex-wrap gap-2">
              {gamme.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-[13px] rounded-full border"
                  style={{
                    borderColor: `${gamme.accentColor}33`,
                    color: gamme.accentColor,
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Models grid — 2 columns on desktop */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border/20 rounded-2xl overflow-hidden">
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
                  className="group block bg-surface p-8 sm:p-10 hover:bg-surface-elevated hover:scale-[1.01] transition-all duration-500 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: gamme.accentColor }}
                      />
                      <h3 className="text-[2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] group-hover:text-accent transition-colors">
                        {modele.name}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-text-muted/0 group-hover:text-accent group-hover:opacity-100 opacity-0 transition-all duration-500 mt-1 shrink-0"
                    />
                  </div>

                  <p className="text-[14px] text-accent font-medium mb-4">
                    {modele.tagline}
                  </p>

                  <ul className="space-y-2">
                    {modele.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[14px] text-text-secondary leading-[1.7]"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
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
