"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Ruler,
  Zap,
  Sparkles,
  Layers,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";

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

        {/* Process Section */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20 rounded-2xl overflow-hidden">
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
                  className="relative p-6 bg-surface hover:bg-surface-elevated transition-colors duration-500 group"
                >
                  <span className="text-5xl font-black text-accent/10 absolute top-4 right-4">
                    {step.step}
                  </span>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-accent" />
                      </div>
                      <h3 className="text-[14px] font-bold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-text-muted leading-[1.7]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
                    <p className="text-[13px] text-text-muted leading-[1.7]">
                      {adv.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RAL Teaser Section */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-surface-card border border-border/30 p-8 sm:p-12 overflow-hidden"
            >
              {/* Decorative color swatches */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none">
                <div className="grid grid-cols-4 gap-1">
                  {[
                    "#C0392B", "#2980B9", "#27AE60", "#F39C12",
                    "#8E44AD", "#E74C3C", "#3498DB", "#2ECC71",
                    "#E67E22", "#9B59B6", "#1ABC9C", "#F1C40F",
                    "#34495E", "#95A5A6", "#D35400", "#16A085",
                  ].map((color, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 rounded-md"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10 max-w-2xl">
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
            </motion.div>
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
