"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
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
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                  Notre histoire
                </p>
                <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-6">
                  Depuis {companyInfo.foundedYear}, la metallerie d&apos;exception
                </h2>
                <div className="space-y-4 text-[14px] text-text-secondary leading-[1.7]">
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl bg-surface-card border border-border/30 overflow-hidden aspect-[4/3] flex items-center justify-center"
              >
                <div className="text-center">
                  <span className="text-7xl sm:text-8xl font-black text-accent/10 tracking-tighter">
                    AZ
                  </span>
                  <p className="text-[13px] text-text-muted mt-2">
                    Atelier {companyInfo.workshopSize}m2 — {companyInfo.region}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy / Values */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-16">
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                Philosophie
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
                Trois piliers. Une obsession : l&apos;excellence.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.word}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.8,
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
                  <p className="text-[14px] text-text-secondary leading-[1.7]">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                En chiffres
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
                Des resultats qui parlent d&apos;eux-memes
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border/20 rounded-2xl overflow-hidden">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center bg-surface p-6"
                >
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-text-primary">
                    {stat.value.toLocaleString("fr-FR")}
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-[13px] text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Teaser */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                L&apos;equipe
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
                Des specialistes a chaque etape
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border/20 rounded-2xl overflow-hidden">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="p-5 bg-surface hover:bg-surface-elevated transition-colors duration-500 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-accent">
                      {member.role.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-[13px] font-semibold text-text-primary mb-1">
                    {member.role}
                  </h3>
                  <p className="text-[13px] text-text-muted">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 border-y border-border/30 overflow-hidden">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-[11px] uppercase tracking-[0.2em] text-text-muted mb-10"
          >
            Ils nous font confiance
          </motion.p>

          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border/20 rounded-2xl overflow-hidden">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center p-6 bg-surface"
                >
                  <span className="text-[13px] font-bold text-text-muted/50 tracking-wider uppercase text-center">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                Collaborer
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-4">
                Travaillons ensemble.
              </h2>
              <p className="text-[14px] text-text-secondary leading-[1.7] mb-10 max-w-xl mx-auto">
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
