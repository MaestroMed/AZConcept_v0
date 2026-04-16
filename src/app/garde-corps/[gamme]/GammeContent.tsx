"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SplitEditorial } from "@/components/shared/SplitEditorial";
import { ImageStrip } from "@/components/shared/ImageStrip";
import { RelatedRealisations } from "@/components/shared/RelatedRealisations";
import { getGammeAssets, getModeleImage } from "@/data/assets";
import type { Category, Gamme } from "@/types";

interface GammeContentProps {
  category: Category;
  gamme: Gamme;
  categorySlug: string;
}

export function GammeContent({ category, gamme, categorySlug }: GammeContentProps) {
  const assets = getGammeAssets(gamme.slug);
  const total = String(gamme.modeles.length).padStart(2, "0");

  return (
    <>
      <PageHero
        color={gamme.accentColor}
        eyebrow={`Gamme · ${category.name}`}
        index={gamme.name}
        title={gamme.name + "."}
        italicTail={gamme.tagline}
        subtitle={gamme.description}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: category.name, href: `/${categorySlug}` },
          { label: gamme.name },
        ]}
      />

      {/* Story split */}
      {assets && (
        <SplitEditorial
          image={assets.heroImage}
          alt={`${gamme.name} — vue d'ensemble`}
          eyebrow="Propos"
          index="01"
          title="Le parti pris"
          italicTail={`de ${gamme.name}.`}
          paragraphs={assets.story}
          caption={{ gamme: gamme.name, location: "Atelier AZ", year: "2026" }}
        />
      )}

      {/* Ambiance strip */}
      {assets && (
        <ImageStrip
          images={[assets.heroImage, ...assets.ambianceImages]}
          eyebrow="Ambiance"
          title={`— ${gamme.name.toLowerCase()}.`}
        />
      )}

      {/* Features + Materials */}
      <section className="relative py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Eyebrow index="02" label="Caractéristiques" className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.025em]">
                Ce qui compte<br />
                <span className="display-italic font-light text-champagne">
                  dans {gamme.name}.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ivory/8 border border-ivory/8">
                {gamme.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-ink p-6 sm:p-7 flex items-start gap-4"
                  >
                    <span
                      className="mt-2 h-[8px] w-[8px] rounded-full shrink-0"
                      style={{ backgroundColor: gamme.accentColor, boxShadow: `0 0 14px ${gamme.accentColor}66` }}
                    />
                    <div>
                      <span className="font-mono text-[10px] tabular-nums text-ash block mb-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14.5px] text-ivory/90 leading-[1.55]">{f}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {assets && (
                <div className="mt-10">
                  <Eyebrow label="Matériaux &amp; finitions" className="mb-5" />
                  <div className="flex flex-wrap gap-2.5">
                    {assets.materials.map((m) => (
                      <span
                        key={m}
                        className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ivory/80 border border-ivory/15 rounded-full px-3.5 py-1.5 hover:border-champagne/60 hover:text-champagne transition-colors"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modeles */}
      <section className="relative py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex items-end justify-between mb-14 sm:mb-20 flex-wrap gap-6">
            <div>
              <Eyebrow index="03" label={`Modèles · ${total}`} className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                Déclinaisons<br />
                <span className="display-italic font-light text-platinum">de la gamme.</span>
              </h2>
            </div>
            <span className="font-mono text-[10.5px] tabular-nums text-ash">
              01 → {total}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {gamme.modeles.map((modele, i) => {
              const img = getModeleImage(gamme.slug, modele.slug);
              return (
                <motion.article
                  key={modele.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/${categorySlug}/${gamme.slug}/${modele.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-ivory/10">
                      {img ? (
                        <Image
                          src={img}
                          alt={modele.name}
                          fill
                          quality={85}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-obsidian" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                      <div className="absolute top-0 inset-x-0 p-5 flex items-center justify-between">
                        <span className="font-mono text-[10.5px] tabular-nums text-ivory/70 bg-ink/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                          {String(i + 1).padStart(2, "0")} / {total}
                        </span>
                        <span
                          className="h-[8px] w-[8px] rounded-full"
                          style={{ backgroundColor: gamme.accentColor }}
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <h3 className="display text-ivory text-[clamp(1.6rem,2.6vw,2rem)] leading-[0.95] tracking-[-0.015em]">
                          {modele.name}
                        </h3>
                        <p className="mt-1.5 display-italic font-light text-pearl/85 text-[14px]">
                          {modele.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-4">
                      <ul className="flex-1 grid grid-cols-1 gap-1">
                        {modele.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-baseline gap-2 text-[12.5px] text-pearl/70">
                            <span
                              className="h-[4px] w-[4px] rounded-full shrink-0 translate-y-[5px]"
                              style={{ backgroundColor: gamme.accentColor, opacity: 0.7 }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span
                        aria-hidden
                        className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-ivory/15 text-ivory/80 group-hover:border-champagne group-hover:text-champagne transition-colors"
                      >
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related realisations */}
      <RelatedRealisations gammeName={gamme.name} />
    </>
  );
}
