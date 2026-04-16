"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { realisations } from "@/data/realisations";
import { Eyebrow } from "@/components/shared/Eyebrow";

interface Props {
  gammeName: string;
  limit?: number;
}

/** Shows realisations tagged with a given gamme. */
export function RelatedRealisations({ gammeName, limit = 3 }: Props) {
  const matches = realisations
    .filter((r) => r.gamme.toLowerCase() === gammeName.toLowerCase())
    .slice(0, limit);

  if (matches.length === 0) return null;

  return (
    <section className="relative py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="flex items-end justify-between mb-14 sm:mb-20 gap-10 flex-wrap">
          <div>
            <Eyebrow index="Chapitre V" label={`Ouvrages · ${gammeName}`} className="mb-5" />
            <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
              Dans les projets<br />
              <span className="display-italic font-light text-champagne">de nos partenaires.</span>
            </h2>
          </div>
          <Link
            href="/realisations"
            className="link-underline inline-flex items-center gap-2 text-[13px] tracking-[0.02em] text-ivory/80 hover:text-ivory"
          >
            Voir toutes les réalisations <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {matches.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/realisations" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ivory/8">
                  {r.imageUrl ? (
                    <Image
                      src={r.imageUrl}
                      alt={r.title}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-obsidian flex items-center justify-center">
                      <span className="display text-ivory/25 text-4xl tracking-tight">{r.gamme}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tabular-nums text-ivory/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/75 bg-ink/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                        {r.gamme}
                      </span>
                    </div>
                    <div>
                      <p className="display text-ivory text-[20px] sm:text-[22px] leading-tight tracking-[-0.015em]">
                        {r.title}
                      </p>
                      <p className="font-mono text-[10.5px] text-ivory/55 mt-1.5">
                        {r.location} · {r.year}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
