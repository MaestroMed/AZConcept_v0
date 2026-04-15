"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import type { Category, Gamme, Modele } from "@/types";

interface ModeleContentProps {
  category: Category;
  gamme: Gamme;
  modele: Modele;
  categorySlug: string;
}

export function ModeleContent({
  category,
  gamme,
  modele,
  categorySlug,
}: ModeleContentProps) {
  return (
    <>
      <PageHero
        title={modele.name}
        subtitle={modele.tagline}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: category.name, href: `/${categorySlug}` },
          { label: gamme.name, href: `/${categorySlug}/${gamme.slug}` },
          { label: modele.name },
        ]}
      />

      {/* Description & Features */}
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
                Description
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-6">
                {modele.name}
              </h2>
              <p className="text-[14px] text-text-secondary leading-[1.7] mb-8">
                {modele.description}
              </p>

              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                Caracteristiques
              </p>
              <ul className="space-y-3">
                {modele.features.map((feature) => (
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

            {/* Technical specs */}
            {modele.specs && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.08,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl overflow-hidden bg-border/20"
              >
                <div className="bg-surface-card px-8 py-5">
                  <h3 className="text-[14px] font-semibold text-text-primary">
                    Fiche technique
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-px">
                  {Object.entries(modele.specs).map(
                    ([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start justify-between gap-4 px-8 py-4 bg-surface"
                      >
                        <span className="text-[13px] text-text-muted font-medium whitespace-nowrap">
                          {key}
                        </span>
                        <span className="text-[14px] text-text-primary text-right">
                          {value}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
              Passer a l&apos;action
            </p>
            <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-4">
              Interesse par le {modele.name} ?
            </h2>
            <p className="text-[14px] text-text-secondary leading-[1.7] max-w-xl mx-auto mb-8">
              Demandez un devis personnalise. Notre equipe vous repond sous 48h
              avec une proposition technique et tarifaire adaptee a votre
              projet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/devis" size="lg">
                Demander un devis
              </Button>
              <Button
                href={`/${categorySlug}/${gamme.slug}`}
                variant="secondary"
                size="lg"
              >
                Voir la gamme {gamme.name}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
