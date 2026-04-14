"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { Category, Gamme } from "@/types";

interface GammeContentProps {
  category: Category;
  gamme: Gamme;
  categorySlug: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

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
        accentColor={gamme.accentColor}
      />

      {/* Gamme description & features */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                A propos de la gamme {gamme.name}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {gamme.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-surface-card border border-border p-8"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-5">
                Points cles
              </h3>
              <ul className="space-y-3">
                {gamme.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                      style={{ backgroundColor: `${gamme.accentColor}20` }}
                    >
                      <Check
                        size={12}
                        style={{ color: gamme.accentColor }}
                      />
                    </span>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modeles grid */}
      <section className="py-20 sm:py-28 bg-surface-elevated">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <SectionHeader
            title="Nos modeles"
            subtitle={`${gamme.modeles.length} modele${gamme.modeles.length > 1 ? "s" : ""} dans la gamme ${gamme.name}`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gamme.modeles.map((modele, i) => (
              <motion.div
                key={modele.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
              >
                <Link
                  href={`/${categorySlug}/${gamme.slug}/${modele.slug}`}
                  className="group block rounded-2xl bg-surface-card border border-border p-8 h-full transition-all duration-300 hover:border-border-light hover:shadow-[0_0_40px_rgba(65,105,225,0.08)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {modele.name}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-1 shrink-0"
                    />
                  </div>

                  <p className="text-sm text-accent font-medium mb-3">
                    {modele.tagline}
                  </p>

                  <ul className="space-y-2">
                    {modele.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-text-secondary"
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
