"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { realisations } from "@/data/realisations";
import { Eyebrow } from "@/components/shared/Eyebrow";

/*
 * Realisations — Éditorial asymétrique.
 * One hero tile + three smaller tiles on the right.
 * Gallery-book feeling, numbered, with technical caption.
 */

export function RealisationsPreview() {
  const [hero, ...rest] = realisations.slice(0, 5);
  const side = rest.slice(0, 4);
  const total = String(realisations.length).padStart(2, "0");

  return (
    <section className="relative py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow index="Chapitre III" label="Portfolio" className="mb-6" />
            <h2 className="display text-ivory text-[clamp(2.4rem,5vw,4rem)] leading-[0.98] tracking-[-0.028em]">
              Ouvrages.<br />
              <span className="display-italic font-light text-platinum">Sélection récente.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end gap-8"
          >
            <div>
              <p className="eyebrow text-ash">Livrés</p>
              <p className="display text-ivory text-[clamp(1.8rem,3vw,2.6rem)] tabular-nums tracking-[-0.02em] mt-1">
                3&nbsp;000+
              </p>
            </div>
            <Link
              href="/realisations"
              className="link-underline inline-flex items-center gap-2 text-[13px] tracking-[0.02em] text-ivory/80 hover:text-ivory"
            >
              Tout voir <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Hero tile */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 group relative"
          >
            <Link href="/realisations" className="block">
              <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-[2px] border border-ivory/8">
                <Image
                  src={hero.imageUrl!}
                  alt={hero.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  quality={90}
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 top-0 p-6 flex items-start justify-between">
                  <span className="font-mono text-[10.5px] tabular-nums text-ivory/70">
                    01 / {total}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/70 bg-ink/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                    {hero.gamme}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="eyebrow text-champagne/80">{hero.category}</p>
                    <h3 className="mt-3 display text-ivory text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-[-0.02em]">
                      {hero.title}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] text-ivory/55">
                      {hero.location} · {hero.year}
                    </p>
                  </div>
                  <span className="h-11 w-11 shrink-0 inline-flex items-center justify-center rounded-full border border-ivory/25 text-ivory group-hover:border-champagne group-hover:text-champagne transition-colors">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Side column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-4">
            {side.map((r, i) => {
              const n = String(i + 2).padStart(2, "0");
              return (
                <motion.article
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.08 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <Link href="/realisations" className="flex items-stretch gap-4 p-3 rounded-[4px] border border-ivory/6 hover:border-ivory/14 transition-colors">
                    <div className="relative aspect-[4/5] w-[36%] shrink-0 overflow-hidden rounded-[2px]">
                      <Image
                        src={r.imageUrl!}
                        alt={r.title}
                        fill
                        sizes="160px"
                        quality={75}
                        className="object-cover transition-transform duration-[1000ms] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-ink/15" />
                    </div>
                    <div className="flex-1 min-w-0 py-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-mono text-[10px] tabular-nums text-ash">
                          {n} / {total}
                        </span>
                        <ArrowUpRight size={13} className="text-ivory/30 group-hover:text-champagne transition-colors" />
                      </div>
                      <div>
                        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-champagne/75">
                          {r.gamme}
                        </p>
                        <h4 className="mt-2 display text-[16px] sm:text-[18px] leading-tight tracking-[-0.015em] text-ivory line-clamp-2">
                          {r.title}
                        </h4>
                        <p className="mt-1.5 font-mono text-[10px] text-ivory/45">
                          {r.location} · {r.year}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
