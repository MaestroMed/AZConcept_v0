"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { ImageStrip } from "@/components/shared/ImageStrip";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { companyInfo } from "@/data/company";
import { stats } from "@/data/stats";

const timeline = [
  { year: "2018", title: "Fondation", note: "Création d'AZ Concept à Bruyères-sur-Oise. Atelier initial 400 m²." },
  { year: "2020", title: "Thermolaquage intégré", note: "Installation de la cabine 7 m et du four XXL. Production verticalisée." },
  { year: "2022", title: "Partenariat Jansen", note: "Intégration du réseau restreint des métalliers premium Jansen." },
  { year: "2024", title: "Extension 1 800 m²", note: "Triplement de la surface atelier, pôle bureau d'études, pôle prototypage." },
  { year: "2026", title: "Collection éditoriale", note: "Dix gammes architecturales dessinées pour les architectes." },
];

const values = [
  { idx: "01", title: "Le dessin avant tout", body: "Chaque projet commence sur un plan. Nous refusons les ouvrages imposés qui n'ont pas été pensés." },
  { idx: "02", title: "Intégralement sous le même toit", body: "Bureau d'études, découpe, soudure, thermolaquage, pose — un seul interlocuteur, zéro sous-traitance sensible." },
  { idx: "03", title: "Le normatif comme point de départ", body: "NF, EI, ERP, PMR — la conformité ne se rajoute pas après, elle informe le dessin dès la première esquisse." },
  { idx: "04", title: "Des matériaux qui durent", body: "Acier premium Jansen, inox 316L, corten, verre feuilleté — les choix que l'architecte ferait pour sa propre maison." },
];

const team = [
  { letter: "D", role: "Direction",         body: "Pilotage stratégique, relations grands comptes, validation technique finale." },
  { letter: "É", role: "Bureau d'études",   body: "Conception, plans DWG, calculs de structure, dialogue architecte." },
  { letter: "A", role: "Atelier",           body: "Découpe laser, soudure TIG/MIG certifiée, pliage CNC, assemblage." },
  { letter: "T", role: "Thermolaquage",     body: "Préparation, poudrage, cuisson, contrôle qualité finitions." },
  { letter: "P", role: "Pose & chantier",   body: "Installation sur site, coordination, réception d'ouvrage." },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Maison"
          index="—"
          title="L'atelier,"
          italicTail="depuis 2018."
          subtitle={`Fondée à ${companyInfo.city.split(" ").slice(1).join(" ")}, AZ Concept est née d\u2019une conviction : la métallerie architecturale mérite le même niveau d\u2019exigence que les métiers d\u2019art. ${companyInfo.workshopSize} m² d\u2019atelier, dix gammes, trois mille ouvrages livrés.`}
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "À propos" },
          ]}
        />

        {/* Manifesto split with founder feel */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5"
              >
                <Eyebrow index="Chapitre I" label="Manifeste" className="mb-6" />
                <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                  Nous livrons<br />
                  <span className="display-italic font-light text-champagne">des ouvrages.</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 lg:col-start-7 space-y-6"
              >
                <p className="text-[17px] sm:text-[18px] leading-[1.7] text-pearl/85">
                  Nous ne livrons pas un produit. Nous livrons un ouvrage &mdash; dessiné
                  avec l&rsquo;architecte, fabriqué à la main, protégé pour un siècle.
                  Cette exigence informe chaque soudure, chaque laque, chaque pose.
                </p>
                <p className="text-[16px] leading-[1.7] text-pearl/70">
                  Intégralement sous le même toit : dessin, découpe laser, soudure,
                  thermolaquage 200+ RAL, collections exclusives Adaptacolor, pose
                  sur chantier. Un seul interlocuteur, du devis à la réception.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Atelier mosaic */}
        <ImageStrip
          layout="mosaic"
          eyebrow="L'atelier · Bruyères-sur-Oise"
          title="— 1 800 m²."
          images={[
            "/images/ambiance/industrial-workshop.jpg",
            "/images/ambiance/welding-sparks.jpg",
            "/images/ambiance/atelier-metal.jpg",
            "/images/ambiance/metal-texture.jpg",
            "/images/ambiance/steel-structure.jpg",
            "/images/ambiance/architecture-moderne.jpg",
          ]}
          captions={[
            "Poste découpe laser",
            "Soudure TIG certifiée",
            "Pôle métallerie lourde",
            "Acier brut pré-laquage",
            "Prototypage sur site",
            "Bureau d'études",
          ]}
        />

        {/* Timeline */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-16 sm:mb-24">
              <Eyebrow index="Chapitre II" label="Chronologie" className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                Huit années,<br />
                <span className="display-italic font-light text-platinum">cinq jalons.</span>
              </h2>
            </div>

            <div className="relative">
              <div aria-hidden className="absolute left-6 sm:left-10 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-ivory/15 to-transparent" />
              <ol className="space-y-12">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-16 sm:pl-24"
                  >
                    <span
                      aria-hidden
                      className="absolute left-[18px] sm:left-[34px] top-[11px] h-[12px] w-[12px] rounded-full"
                      style={{ background: "var(--champagne)", boxShadow: "0 0 18px rgba(201,163,92,0.6)" }}
                    />
                    <div className="flex items-baseline gap-6 flex-wrap">
                      <span className="display text-champagne text-[clamp(1.8rem,3vw,2.6rem)] font-light tabular-nums tracking-[-0.02em]">
                        {t.year}
                      </span>
                      <h3 className="display text-ivory text-[clamp(1.5rem,2.4vw,2rem)] font-light leading-tight">
                        {t.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.65] text-pearl/75">
                      {t.note}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="relative py-[clamp(5rem,10vw,10rem)]">
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{ background: "radial-gradient(40% 60% at 50% 50%, rgba(201,163,92,0.08) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <p className="display text-ivory text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.1] tracking-[-0.02em]">
                <span className="display-italic text-champagne">«</span> Un garde-corps qu&rsquo;on
                ne voit pas, une porte qui ne grince pas, une façade qui tient vingt
                ans &mdash; c&rsquo;est <span className="display-italic text-champagne">ça</span>,
                faire de la métallerie.
                <span className="display-italic text-champagne"> »</span>
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-champagne/40" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-pearl">
                  La Direction
                </span>
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6">
              <div>
                <Eyebrow index="Chapitre III" label="Valeurs" className="mb-6" />
                <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                  Quatre engagements.<br />
                  <span className="display-italic font-light text-platinum">Un cahier des charges.</span>
                </h2>
              </div>
              <span className="font-mono text-[10.5px] tabular-nums text-ash">01 → 04</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ivory/8 border border-ivory/8">
              {values.map((v, i) => (
                <motion.div
                  key={v.idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-ink p-8 sm:p-10"
                >
                  <span className="font-mono text-[11px] tabular-nums text-champagne">{v.idx}</span>
                  <h3 className="mt-6 display text-ivory text-[clamp(1.5rem,2.4vw,2rem)] leading-tight tracking-[-0.02em]">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-pearl/75">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-[clamp(3rem,6vw,6rem)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="rounded-[2px] border border-ivory/8 bg-gradient-to-br from-ivory/[0.015] to-transparent overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="p-7 sm:p-8 border-l border-ivory/8 first:border-none"
                  >
                    <span className="font-mono text-[10px] tabular-nums text-ash">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-6 display font-light text-ivory text-[clamp(2rem,4.4vw,3rem)] tabular-nums tracking-[-0.025em] leading-[1]">
                      {stat.value.toLocaleString("fr-FR")}
                      <span className="display-italic text-champagne ml-0.5">{stat.suffix}</span>
                    </div>
                    <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-platinum">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-16 sm:mb-24">
              <Eyebrow index="Chapitre IV" label="L'équipe" className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                Cinq métiers.<br />
                <span className="display-italic font-light text-platinum">Un seul toit.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ivory/8 border border-ivory/8">
              {team.map((m, i) => (
                <motion.div
                  key={m.role}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-ink p-8"
                >
                  <div className="h-14 w-14 rounded-full border border-champagne/30 bg-champagne/5 inline-flex items-center justify-center display-italic text-champagne text-[22px]">
                    {m.letter}
                  </div>
                  <h3 className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory">
                    {m.role}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.6] text-pearl/70">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners marquee */}
        <LogoMarquee />

        {/* CTA */}
        <section className="relative py-[var(--section-padding)] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(201,163,92,0.12) 0%, transparent 70%)" }} />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

          <div className="relative max-w-3xl mx-auto px-[var(--container-padding)] text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-champagne/85">— Collaborer —</span>
              <h2 className="mt-8 display text-ivory text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
                Travaillons<br />
                <span className="display-italic font-light text-champagne">ensemble.</span>
              </h2>
              <p className="mt-8 text-[16px] leading-[1.65] text-pearl/80 max-w-xl mx-auto">
                Un projet de métallerie architecturale, une question technique,
                une demande de devis — notre équipe est à votre écoute.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/devis" size="lg">
                  Demander un devis
                  <ArrowRight size={16} />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
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
