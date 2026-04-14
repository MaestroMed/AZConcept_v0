"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { companyInfo } from "@/data/company";
import { stats } from "@/data/stats";
import { partners } from "@/data/partners";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    word: "FABRIQUER.",
    color: "#B8B8C8",
    description:
      "De la decoupe laser a la soudure certifiee, chaque piece nait dans notre atelier de 1 800m2. Nous maitrisons toute la chaine de production.",
  },
  {
    word: "PROTEGER.",
    color: "#2563EB",
    description:
      "Notre cabine de thermolaquage de 7 metres et 200+ teintes RAL garantissent une finition durable. La protection est notre signature.",
  },
  {
    word: "DURER.",
    color: "#8888A0",
    description:
      "Certifications coupe-feu, traitements anticorrosion, materiaux nobles — nos ouvrages sont concus pour traverser les decennies.",
  },
];

const teamMembers = [
  {
    role: "Direction",
    description: "Pilotage strategique, relations grands comptes",
  },
  {
    role: "Bureau d'etudes",
    description: "Conception, plans DWG, calculs de structure",
  },
  {
    role: "Atelier metallerie",
    description: "Decoupe, soudure, assemblage, finition",
  },
  {
    role: "Thermolaquage",
    description: "Preparation, poudrage, cuisson, controle",
  },
  {
    role: "Pose & chantier",
    description: "Installation sur site, coordination chantier",
  },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="A propos"
          subtitle="L'histoire d'AZ Concept"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "A propos" },
          ]}
        />

        {/* Company Story */}
        <section className="py-[var(--section-padding)] bg-surface relative">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">
                  Notre histoire
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                  Depuis {companyInfo.foundedYear}, la metallerie d&apos;exception
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Fonde en {companyInfo.foundedYear} a{" "}
                    {companyInfo.city.split(" ").slice(1).join(" ")},{" "}
                    {companyInfo.name} est ne d&apos;une conviction : la metallerie
                    architecturale merite le meme niveau d&apos;exigence que les
                    metiers d&apos;art.
                  </p>
                  <p>
                    De notre atelier de {companyInfo.workshopSize}m2, nous concevons,
                    fabriquons et posons des ouvrages metalliques sur mesure pour
                    l&apos;architecture et la construction. Garde-corps, portes,
                    grilles, facades — chaque projet est une creation unique.
                  </p>
                  <p>
                    Avec notre cabine de thermolaquage integree et plus de{" "}
                    {companyInfo.ralColors} teintes RAL, nous maitrisons la chaine
                    complete, du metal brut a la finition parfaite.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl bg-surface-card border border-border overflow-hidden aspect-[4/3] flex items-center justify-center"
              >
                <div className="text-center">
                  <span className="text-7xl sm:text-8xl font-black text-accent/10 tracking-tighter">
                    AZ
                  </span>
                  <p className="text-sm text-text-muted mt-2">
                    Atelier {companyInfo.workshopSize}m2 — {companyInfo.region}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy / Values */}
        <section className="py-[var(--section-padding)] bg-surface-elevated relative overflow-hidden">
          <div className="noise-overlay absolute inset-0" />
          <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <SectionHeader
              title="Notre Philosophie"
              subtitle="Trois piliers. Une obsession : l'excellence."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.word}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <h3
                    className="text-4xl sm:text-5xl font-black tracking-tight mb-6"
                    style={{ color: pillar.color }}
                  >
                    {pillar.word}
                  </h3>
                  <div
                    className="w-16 h-[2px] mb-6"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <p className="text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-[var(--section-padding)] bg-surface relative">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <SectionHeader
              title="En chiffres"
              subtitle="Des resultats qui parlent d'eux-memes."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-text-primary">
                    {stat.value.toLocaleString("fr-FR")}
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Teaser */}
        <section className="py-[var(--section-padding)] bg-surface-elevated relative overflow-hidden">
          <div className="noise-overlay absolute inset-0" />
          <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <SectionHeader
              title="L'equipe"
              subtitle="Des specialistes a chaque etape."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="p-5 rounded-2xl bg-surface-card border border-border text-center hover:border-border-light transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-accent">
                      {member.role.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">
                    {member.role}
                  </h3>
                  <p className="text-xs text-text-muted">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-surface border-y border-border overflow-hidden">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-xs uppercase tracking-[0.2em] text-text-muted mb-10"
          >
            Ils nous font confiance
          </motion.p>

          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center justify-center p-6 rounded-xl bg-surface-card border border-border"
                >
                  <span className="text-sm font-bold text-text-muted/50 tracking-wider uppercase text-center">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[var(--section-padding)] bg-surface-elevated relative overflow-hidden">
          <div className="noise-overlay absolute inset-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-[var(--container-padding)] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-6">
                Travaillons ensemble.
              </h2>
              <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
                Un projet de metallerie, une question technique, une demande de
                devis — notre equipe est a votre ecoute.
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
