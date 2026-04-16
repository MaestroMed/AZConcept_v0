"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { realisations } from "@/data/realisations";

const categories = ["Toutes", "Garde-Corps", "Portes", "Grilles"];
const years = ["Toutes années", "2025", "2024"];

// Masonry aspect ratios per card index — gives the mosaic feel
const ASPECTS = ["aspect-[4/5]", "aspect-[1/1]", "aspect-[4/5]", "aspect-[3/4]", "aspect-[1/1]"];

export default function RealisationsPage() {
  const [activeCat, setActiveCat] = useState<string>("Toutes");
  const [activeYear, setActiveYear] = useState<string>("Toutes années");

  const filtered = useMemo(() => {
    return realisations.filter((r) => {
      const catOk = activeCat === "Toutes" || r.category.toLowerCase().includes(activeCat.toLowerCase());
      const yearOk = activeYear === "Toutes années" || String(r.year) === activeYear;
      return catOk && yearOk;
    });
  }, [activeCat, activeYear]);

  const total = String(realisations.length).padStart(2, "0");
  const shown = String(filtered.length).padStart(2, "0");

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Portfolio"
          index="—"
          title="Réalisations,"
          italicTail="nos ouvrages livrés."
          subtitle={`Une sélection de ${realisations.length} ouvrages — garde-corps, portes, grilles, façades. Île-de-France principalement, avec quelques programmes nationaux.`}
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Réalisations" },
          ]}
        />

        {/* Filters */}
        <section className="relative py-[clamp(3rem,6vw,5rem)] border-b border-ivory/8">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-3 flex-wrap">
                <Eyebrow label="Catégorie" className="mr-1" />
                {categories.map((c) => {
                  const active = c === activeCat;
                  return (
                    <button
                      key={c}
                      onClick={() => setActiveCat(c)}
                      className={`font-mono text-[10.5px] uppercase tracking-[0.16em] px-4 py-2 rounded-full border transition-all ${
                        active
                          ? "bg-champagne text-ink border-champagne"
                          : "border-ivory/15 text-ivory/70 hover:text-ivory hover:border-ivory/30"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <Eyebrow label="Année" className="mr-1" />
                {years.map((y) => {
                  const active = y === activeYear;
                  return (
                    <button
                      key={y}
                      onClick={() => setActiveYear(y)}
                      className={`font-mono text-[10.5px] uppercase tracking-[0.16em] px-4 py-2 rounded-full border transition-all ${
                        active
                          ? "bg-champagne text-ink border-champagne"
                          : "border-ivory/15 text-ivory/70 hover:text-ivory hover:border-ivory/30"
                      }`}
                    >
                      {y}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 font-mono text-[10.5px] tabular-nums text-ash">
              <span className="text-champagne">{shown}</span>
              <span className="h-px w-10 bg-ivory/15" />
              <span>de {total} ouvrages</span>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="display-italic text-ivory/50 text-2xl">Aucune réalisation ne correspond à ce filtre.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
                <AnimatePresence initial={false}>
                  {filtered.map((p, i) => {
                    const aspect = ASPECTS[i % ASPECTS.length];
                    return (
                      <motion.article
                        key={p.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="group relative"
                      >
                        <div className={`relative ${aspect} overflow-hidden rounded-[2px] border border-ivory/8`}>
                          {p.imageUrl ? (
                            <Image
                              src={p.imageUrl}
                              alt={p.title}
                              fill
                              quality={85}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-obsidian flex items-center justify-center">
                              <span className="display text-ivory/20 text-4xl">{p.gamme}</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />

                          <div className="absolute top-0 inset-x-0 p-5 flex items-center justify-between">
                            <span className="font-mono text-[10px] tabular-nums text-ivory/70 bg-ink/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                              {String(i + 1).padStart(2, "0")} / {shown}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/75 bg-ink/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                              {p.gamme}
                            </span>
                          </div>

                          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                            <span className="eyebrow text-champagne/85 block mb-2">{p.category}</span>
                            <h3 className="display text-ivory text-[clamp(1.3rem,2.2vw,1.6rem)] leading-tight tracking-[-0.015em]">
                              {p.title}
                            </h3>
                            <div className="mt-3 flex items-center gap-3 font-mono text-[10.5px] text-ivory/60">
                              <MapPin size={11} />
                              <span>{p.location}</span>
                              <span className="h-px flex-1 bg-ivory/10" />
                              <span className="tabular-nums">{p.year}</span>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
