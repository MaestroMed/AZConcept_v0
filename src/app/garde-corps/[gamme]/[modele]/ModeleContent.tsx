"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SpecTable } from "@/components/shared/SpecTable";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { getGammeAssets, getModeleImage } from "@/data/assets";
import type { Category, Gamme, Modele } from "@/types";

interface ModeleContentProps {
  category: Category;
  gamme: Gamme;
  modele: Modele;
  categorySlug: string;
}

export function ModeleContent({ category, gamme, modele, categorySlug }: ModeleContentProps) {
  const assets = getGammeAssets(gamme.slug);
  const heroImage = getModeleImage(gamme.slug, modele.slug) ?? assets?.heroImage;

  // prev / next model in gamme
  const currentIdx = gamme.modeles.findIndex((m) => m.id === modele.id);
  const prev = currentIdx > 0 ? gamme.modeles[currentIdx - 1] : null;
  const next = currentIdx < gamme.modeles.length - 1 ? gamme.modeles[currentIdx + 1] : null;

  return (
    <>
      {/* Cinematic hero */}
      <section className="relative h-[82vh] min-h-[600px] max-h-[900px] overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage}
            alt={modele.name}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover [filter:saturate(0.92)_contrast(1.05)]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink" />
        <div
          className="absolute inset-0 opacity-75"
          style={{ background: `radial-gradient(80% 60% at 50% 110%, ${gamme.accentColor}33 0%, transparent 60%)` }}
        />

        {/* Breadcrumbs overlay */}
        <div className="absolute top-0 inset-x-0 pt-[calc(76px+2rem)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <nav className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em]">
              <Link href="/" className="text-platinum hover:text-champagne transition-colors">Accueil</Link>
              <ChevronRight size={10} className="text-ash" />
              <Link href={`/${categorySlug}`} className="text-platinum hover:text-champagne transition-colors">{category.name}</Link>
              <ChevronRight size={10} className="text-ash" />
              <Link href={`/${categorySlug}/${gamme.slug}`} className="text-platinum hover:text-champagne transition-colors">{gamme.name}</Link>
              <ChevronRight size={10} className="text-ash" />
              <span className="text-ivory">{modele.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero title */}
        <div className="absolute inset-x-0 bottom-0 pb-16 sm:pb-20">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="flex items-end justify-between gap-10 flex-wrap">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="h-[8px] w-[8px] rounded-full"
                    style={{ backgroundColor: gamme.accentColor, boxShadow: `0 0 18px ${gamme.accentColor}` }}
                  />
                  <span className="eyebrow text-ivory/70">
                    {gamme.name} · Modèle {String(currentIdx + 1).padStart(2, "0")} / {String(gamme.modeles.length).padStart(2, "0")}
                  </span>
                </div>
                <h1 className="display text-ivory text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
                  {modele.name}
                </h1>
                <p className="mt-5 display-italic font-light text-champagne text-[clamp(1.1rem,1.8vw,1.5rem)] max-w-2xl">
                  {modele.tagline}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-[10.5px] tabular-nums text-ivory/55 flex items-center gap-4"
              >
                <span>AZ / {gamme.name} / {modele.name}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Specs */}
      <section className="relative py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <Eyebrow index="01" label="Description" className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.025em] mb-10">
                Le dessin<br />
                <span className="display-italic font-light text-champagne">{modele.name}.</span>
              </h2>

              <p className="text-[16.5px] leading-[1.75] text-pearl/85 mb-14 max-w-prose">
                {modele.description}
              </p>

              <Eyebrow index="02" label="Caractéristiques" className="mb-6" />
              <ul className="space-y-4">
                {modele.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-4 pb-4 border-b border-ivory/6 last:border-none"
                  >
                    <span
                      className="mt-1 h-6 w-6 rounded-full shrink-0 inline-flex items-center justify-center"
                      style={{ backgroundColor: `${gamme.accentColor}18`, border: `1px solid ${gamme.accentColor}44` }}
                    >
                      <Check size={12} style={{ color: gamme.accentColor }} />
                    </span>
                    <span className="text-[15px] text-ivory/90 leading-[1.6]">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 lg:col-start-9"
            >
              {modele.specs && (
                <SpecTable
                  eyebrow="Fiche technique"
                  title={modele.name}
                  sticky
                  accent={gamme.accentColor}
                  rows={Object.entries(modele.specs).map(([k, v]) => ({ key: k, value: v }))}
                />
              )}

              {assets?.materials && (
                <div className="mt-6 rounded-[2px] border border-ivory/10 p-6 bg-ivory/[0.015]">
                  <p className="eyebrow text-champagne/85 mb-4">Matériaux</p>
                  <div className="flex flex-wrap gap-2">
                    {assets.materials.map((m) => (
                      <span
                        key={m}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-ivory/80 border border-ivory/12 rounded-full px-2.5 py-1"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Prev / Next navigator */}
      {(prev || next) && (
        <section className="relative border-t border-ivory/8">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-2 divide-x divide-ivory/8">
              {prev ? (
                <Link href={`/${categorySlug}/${gamme.slug}/${prev.slug}`} className="group py-12 pr-6 sm:pr-10 flex items-center gap-4">
                  <ArrowLeft size={18} className="text-ivory/40 group-hover:text-champagne group-hover:-translate-x-0.5 transition-all shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash block mb-1.5">Précédent</span>
                    <span className="display text-ivory text-[20px] sm:text-[24px] leading-tight">{prev.name}</span>
                    <span className="block font-mono text-[10.5px] text-platinum mt-1.5 line-clamp-1">{prev.tagline}</span>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/${categorySlug}/${gamme.slug}/${next.slug}`} className="group py-12 pl-6 sm:pl-10 flex items-center justify-end gap-4 text-right">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash block mb-1.5">Suivant</span>
                    <span className="display text-ivory text-[20px] sm:text-[24px] leading-tight">{next.name}</span>
                    <span className="block font-mono text-[10.5px] text-platinum mt-1.5 line-clamp-1">{next.tagline}</span>
                  </div>
                  <ArrowRight size={18} className="text-ivory/40 group-hover:text-champagne group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-[var(--section-padding)] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(50% 50% at 50% 50%, ${gamme.accentColor}14 0%, transparent 70%)` }}
        />
        <div className="relative max-w-3xl mx-auto px-[var(--container-padding)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-champagne/85">
              — Passer à l&apos;action —
            </span>
            <h2 className="mt-8 display text-ivory text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
              Intéressé par<br />
              <span className="display-italic font-light text-champagne">{modele.name} ?</span>
            </h2>
            <p className="mt-8 text-[15.5px] leading-[1.65] text-pearl/80 max-w-xl mx-auto">
              Demandez un devis personnalisé. Réponse sous 48 h avec une proposition
              technique et tarifaire adaptée à votre projet.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/devis" size="lg">Demander un devis</Button>
              <Button href={`/${categorySlug}/${gamme.slug}`} variant="outline" size="lg">
                Retour à {gamme.name}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
