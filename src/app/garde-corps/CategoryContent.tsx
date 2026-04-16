"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { ImageStrip } from "@/components/shared/ImageStrip";
import { getCategoryAssets, getGammeAssets } from "@/data/assets";
import type { Category, Gamme } from "@/types";

interface CategoryContentProps {
  category: Category;
  gammes: Gamme[];
}

export function CategoryContent({ category, gammes }: CategoryContentProps) {
  const assets = getCategoryAssets(category.slug);

  return (
    <>
      <PageHero
        color={category.color || "#c9a35c"}
        eyebrow={`Catégorie · ${gammes.length} gammes`}
        index="—"
        title={category.name + "."}
        italicTail={assets?.italicLead}
        subtitle={category.description}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: category.name },
        ]}
      />

      {/* Ambiance strip */}
      {assets && (
        <ImageStrip
          images={assets.ambianceStrip}
          eyebrow="Ambiance"
          title={`— ${category.name.toLowerCase()}.`}
        />
      )}

      {/* Manifesto */}
      {assets && (
        <section className="relative py-[clamp(5rem,10vw,10rem)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <Eyebrow index="Manifeste" label="Propos" className="mb-6" />
                <h2 className="display text-ivory text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[-0.025em]">
                  Un vocabulaire<br />
                  <span className="display-italic font-light text-champagne">par tempérament.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-pearl/85">
                  {assets.manifesto}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gammes — editorial grid with images */}
      <section className="relative py-[var(--section-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex items-end justify-between mb-14 sm:mb-20 flex-wrap gap-6">
            <div>
              <Eyebrow index="Gammes" label={`${gammes.length} disponibles`} className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                Les familles<br />
                <span className="display-italic font-light text-platinum">de la collection.</span>
              </h2>
            </div>
            <span className="font-mono text-[10.5px] tabular-nums text-ash">
              01 → {String(gammes.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {gammes.map((gamme, i) => {
              const ga = getGammeAssets(gamme.slug);
              const image = ga?.heroImage;
              return (
                <motion.article
                  key={gamme.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/${category.slug}/${gamme.slug}`}
                    className="group block relative"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ivory/10">
                      {image ? (
                        <Image
                          src={image}
                          alt={gamme.name}
                          fill
                          quality={85}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover [filter:saturate(0.92)_contrast(1.05)] transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-obsidian" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/40" />

                      {/* Top chrome */}
                      <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between">
                        <span className="font-mono text-[10.5px] tabular-nums text-ivory/70 bg-ink/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                          {String(i + 1).padStart(2, "0")} / {String(gammes.length).padStart(2, "0")}
                        </span>
                        <span
                          className="h-[8px] w-[8px] rounded-full"
                          style={{ backgroundColor: gamme.accentColor, boxShadow: `0 0 18px ${gamme.accentColor}66` }}
                        />
                      </div>

                      {/* Body */}
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <h3 className="display text-ivory text-[clamp(2.2rem,4vw,3rem)] leading-[0.95] tracking-[-0.02em]">
                          {gamme.name}
                        </h3>
                        <p className="mt-2 display-italic font-light text-pearl text-[16px] sm:text-[18px]">
                          {gamme.tagline}
                        </p>

                        <div className="mt-5 flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {gamme.features.slice(0, 3).map((f) => (
                              <span
                                key={f}
                                className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ivory/55 border border-ivory/12 rounded-full px-2.5 py-0.5"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                          <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-ivory/25 text-ivory/90 group-hover:border-champagne group-hover:text-champagne transition-colors">
                            <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Footer caption */}
                    <div className="mt-4 flex items-center justify-between font-mono text-[10.5px] tabular-nums text-ivory/50">
                      <span className="uppercase tracking-[0.14em] text-platinum">
                        {gamme.modeles.length} modèle{gamme.modeles.length > 1 ? "s" : ""}
                      </span>
                      <span className="h-px flex-1 mx-4 bg-ivory/10" />
                      <span>Explorer →</span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
