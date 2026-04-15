"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Palette,
  Ruler,
  Zap,
  Sparkles,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";

const collections = [
  {
    name: "Polaris",
    description: "Finitions metalliques",
    images: [
      "/images/collections/polaris/1011.jpg",
      "/images/collections/polaris/1012.jpg",
      "/images/collections/polaris/1021.jpg",
      "/images/collections/polaris/1022.jpg",
      "/images/collections/polaris/1031.jpg",
      "/images/collections/polaris/1041.jpg",
      "/images/collections/polaris/1061.jpg",
      "/images/collections/polaris/1071.jpg",
    ],
  },
  {
    name: "Patina",
    description: "Patines oxydees",
    images: [
      "/images/collections/patina/295.jpg",
      "/images/collections/patina/296.jpg",
      "/images/collections/patina/307.jpg",
      "/images/collections/patina/319.jpg",
      "/images/collections/patina/331.jpg",
      "/images/collections/patina/343.jpg",
      "/images/collections/patina/344.jpg",
      "/images/collections/patina/355.jpg",
    ],
  },
  {
    name: "Dichroic",
    description: "Effets chromatiques",
    images: [
      "/images/collections/dichroic/140101.jpg",
      "/images/collections/dichroic/140102.jpg",
      "/images/collections/dichroic/140103.jpg",
      "/images/collections/dichroic/140104.jpg",
      "/images/collections/dichroic/140201.jpg",
      "/images/collections/dichroic/140202.jpg",
      "/images/collections/dichroic/140203.jpg",
      "/images/collections/dichroic/140204.jpg",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Reception",
    description:
      "Inspection visuelle et dimensionnelle des pieces. Verification de la compatibilite avec le process de thermolaquage.",
  },
  {
    step: "02",
    title: "Sablage / Grenaillage",
    description:
      "Preparation de surface par projection d'abrasif. Elimination de la rouille, calamine et anciennes peintures.",
  },
  {
    step: "03",
    title: "Accrochage",
    description:
      "Mise en place des pieces sur les balancelles de la chaine. Optimisation du positionnement pour une couverture uniforme.",
  },
  {
    step: "04",
    title: "Poudrage electrostatique",
    description:
      "Application de la poudre par pistolet electrostatique. Epaisseur controlee entre 60 et 80 microns.",
  },
  {
    step: "05",
    title: "Cuisson 180-200\u00B0C",
    description:
      "Polymerisation en four ventile. Duree et temperature ajustees selon le type de poudre et l'epaisseur des pieces.",
  },
  {
    step: "06",
    title: "Controle qualite",
    description:
      "Verification de l'epaisseur, de l'adherence et de l'aspect. Chaque piece est inspectee avant expedition.",
  },
];

const advantages = [
  {
    icon: Palette,
    title: "200+ RAL",
    description:
      "Toutes les teintes du nuancier RAL classique disponibles, plus les collections speciales sur demande.",
  },
  {
    icon: Ruler,
    title: "Cabine 7m",
    description:
      "Notre cabine surdimensionnee accueille les pieces de grande longueur : garde-corps, portails, structures.",
  },
  {
    icon: Zap,
    title: "Express 48h",
    description:
      "Service express pour les chantiers urgents. Thermolaquage et expedition sous 48 heures ouvrees.",
  },
  {
    icon: Sparkles,
    title: "Collections Adaptacolor",
    description:
      "Finitions exclusives Patina, Polaris et Dichroic pour des rendus uniques et haut de gamme.",
  },
  {
    icon: Layers,
    title: "60-80 microns",
    description:
      "Epaisseur de couche optimale, controlee par appareil de mesure. Garantie d'une protection durable.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie",
    description:
      "Garantie anticorrosion et tenue des teintes. Conformite aux normes Qualicoat et AAMA.",
  },
];

const ralColors = [
  "#C0392B", "#2980B9", "#27AE60", "#F39C12",
  "#8E44AD", "#E74C3C", "#3498DB", "#2ECC71",
  "#E67E22", "#9B59B6", "#1ABC9C", "#F1C40F",
  "#34495E", "#95A5A6", "#D35400", "#16A085",
];

export default function ThermolaquagePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Thermolaquage"
          subtitle="200+ couleurs RAL, cabine 7m, finitions premium"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Thermolaquage" },
          ]}
        />

        {/* Process Section — Vertical timeline */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                Notre process
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
                6 etapes pour une finition irreprochable
              </h2>
            </div>

            <div className="relative max-w-2xl">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border/20" />

              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex items-start gap-6 pl-0"
                  >
                    {/* Numbered circle */}
                    <div className="relative z-10 w-8 h-8 rounded-full border border-border/30 bg-surface flex items-center justify-center shrink-0">
                      <span className="text-[12px] font-bold text-text-primary">
                        {step.step}
                      </span>
                    </div>

                    {/* Step content */}
                    <div className="pb-2">
                      <h3 className="text-[15px] font-medium text-text-primary mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-text-secondary leading-[1.7]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                Nos avantages
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
                Pourquoi choisir le thermolaquage AZ Concept
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20 rounded-2xl overflow-hidden">
              {advantages.map((adv, i) => {
                const Icon = adv.icon;
                return (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="p-6 bg-surface hover:bg-surface-elevated transition-colors duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="text-[14px] font-bold text-text-primary mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-[14px] text-text-secondary leading-[1.7]">
                      {adv.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RAL Section — color circles that stagger in */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-surface-card border border-border/30 p-8 sm:p-12 overflow-hidden"
            >
              <div className="relative z-10 max-w-2xl mb-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                  Palette
                </p>
                <h3 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-4">
                  200+ couleurs RAL disponibles
                </h3>
                <p className="text-[14px] text-text-secondary leading-[1.7] mb-6">
                  Du blanc pur RAL 9010 au noir profond RAL 9005, en passant par
                  les gris anthracite, bleus acier et teintes sur mesure.
                  Collections speciales Adaptacolor : Patina, Polaris, Dichroic.
                </p>
                <Button href="/contact" variant="secondary">
                  Demander le nuancier complet
                  <ArrowRight size={16} />
                </Button>
              </div>

              {/* Color circles grid */}
              <div className="grid grid-cols-8 sm:grid-cols-16 gap-3">
                {ralColors.map((color, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.03,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Adaptacolor Collections */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-14"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                Nos partenaires
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
                Collections Adaptacolor
              </h2>
            </motion.div>

            <div className="space-y-12">
              {collections.map((collection, ci) => (
                <motion.div
                  key={collection.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: ci * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3 className="text-[15px] font-medium text-text-primary mb-1">
                    {collection.name}
                  </h3>
                  <p className="text-[14px] text-text-secondary mb-4">
                    {collection.description}
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {collection.images.map((src, idx) => (
                      <motion.div
                        key={src}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.04,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-xl overflow-hidden aspect-square relative"
                      >
                        <Image
                          src={src}
                          alt={`${collection.name} ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 25vw, 200px"
                          unoptimized
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                Passer a l&apos;action
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-4">
                Un projet de thermolaquage ?
              </h2>
              <p className="text-[14px] text-text-secondary leading-[1.7] mb-10 max-w-xl mx-auto">
                Devis gratuit sous 48h. Petites et grandes series. Sous-traitance
                acceptee.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/devis" size="lg">
                  Demander un devis
                  <ArrowRight size={18} />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Nous contacter
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
