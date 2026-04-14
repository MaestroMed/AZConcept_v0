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
        accentColor={gamme.accentColor}
      />

      {/* Description & Features */}
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
                Description
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {modele.description}
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Caracteristiques
              </h3>
              <ul className="space-y-3">
                {modele.features.map((feature) => (
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

            {/* Technical specs */}
            {modele.specs && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl bg-surface-card border border-border overflow-hidden"
              >
                <div
                  className="px-8 py-5 border-b border-border"
                  style={{ backgroundColor: `${gamme.accentColor}08` }}
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    Fiche technique
                  </h3>
                </div>
                <div className="divide-y divide-border">
                  {Object.entries(modele.specs).map(
                    ([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        className="flex items-start justify-between gap-4 px-8 py-4"
                      >
                        <span className="text-text-muted text-sm font-medium whitespace-nowrap">
                          {key}
                        </span>
                        <span className="text-text-primary text-sm text-right">
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
      <section className="py-20 sm:py-28 bg-surface-elevated">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Interesse par le {modele.name} ?
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
              Demandez un devis personnalise. Notre equipe vous repond sous 48h
              avec une proposition technique et tarifaire adaptee a votre
              projet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
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
