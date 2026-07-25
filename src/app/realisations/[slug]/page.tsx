import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  realisations,
  getRealisationBySlug,
  getRelatedRealisations,
  getAdjacentRealisations,
} from "@/data/realisations";
import { gammes } from "@/data/gammes";
import { categories } from "@/data/categories";
import { breadcrumbsJsonLd, SITE_URL } from "@/lib/seo";
import { devisHrefForGammeName } from "@/lib/devis";

/*
 * Project case-study page — 100% Server Component, zero framer-motion.
 * Entrance reveals use the native CSS scroll-driven .scroll-rise utility
 * (Chromium 115+; graceful static fallback elsewhere).
 */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const r = getRealisationBySlug(slug);
  if (!r) return { title: "Projet introuvable" };
  const url = `/realisations/${r.id}`;
  const ogImage = r.imageUrl ? `${SITE_URL}${r.imageUrl}` : `${SITE_URL}/api/og`;
  return {
    title: `${r.title} — ${r.location} ${r.year}`,
    description: r.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${r.title} | Réalisations AZ Concept`,
      description: r.description,
      images: [{ url: ogImage, width: 1200, height: 900, alt: r.title }],
    },
    twitter: { card: "summary_large_image", title: r.title, description: r.description, images: [ogImage] },
  };
}

/** Resolve the gamme entity from its display name, for cross-linking. */
function findGamme(gammeName: string) {
  const g = gammes.find((g) => g.name === gammeName || g.name === gammeName.toUpperCase());
  if (!g) return null;
  const cat = categories.find((c) => c.id === g.categoryId);
  return g && cat ? { gamme: g, category: cat } : null;
}

export default async function RealisationPage({ params }: PageProps) {
  const { slug } = await params;
  const r = getRealisationBySlug(slug);
  if (!r) notFound();

  const related = getRelatedRealisations(r);
  const { prev, next } = getAdjacentRealisations(r);
  const gammeLink = findGamme(r.gamme);
  const index = realisations.findIndex((x) => x.id === r.id) + 1;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/realisations/${r.id}#work`,
      name: r.title,
      description: r.description,
      creator: { "@id": `${SITE_URL}/#organization` },
      locationCreated: { "@type": "Place", name: r.location },
      dateCreated: String(r.year),
      image: r.imageUrl ? `${SITE_URL}${r.imageUrl}` : undefined,
      keywords: [r.category, r.gamme, "métallerie architecturale"].join(", "),
    },
    breadcrumbsJsonLd([
      { name: "Accueil", href: "/" },
      { name: "Réalisations", href: "/realisations" },
      { name: r.title, href: `/realisations/${r.id}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main id="contenu" className="flex-1">
        {/* Cinematic hero */}
        <section className="relative h-[72vh] min-h-[540px] max-h-[860px] overflow-hidden">
          {r.imageUrl && (
            <Image
              src={r.imageUrl}
              alt={r.title}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover [filter:saturate(0.94)_contrast(1.04)]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink" />

          <div className="absolute top-0 inset-x-0 pt-[calc(76px+2rem)]">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
              <nav aria-label="Fil d’Ariane" className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em]">
                <Link href="/" className="text-platinum hover:text-champagne transition-colors">Accueil</Link>
                <ChevronRight size={10} className="text-ash" aria-hidden />
                <Link href="/realisations" className="text-platinum hover:text-champagne transition-colors">Réalisations</Link>
                <ChevronRight size={10} className="text-ash" aria-hidden />
                <span className="text-ivory">{r.title}</span>
              </nav>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 pb-14 sm:pb-16">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
              <div className="flex items-end justify-between gap-8 flex-wrap">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="eyebrow text-champagne/85">
                      Projet {String(index).padStart(2, "0")} / {String(realisations.length).padStart(2, "0")}
                    </span>
                    <span aria-hidden className="h-px w-8 bg-ivory/20" />
                    <span className="eyebrow text-ivory/60">{r.category}</span>
                  </div>
                  <h1 className="display text-ivory text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
                    {r.title}
                  </h1>
                  <p className="mt-4 font-mono text-[11.5px] text-ivory/60 tabular-nums">
                    {r.location} · {r.year}
                    {gammeLink && (
                      <>
                        {" · "}
                        <Link
                          href={`/${gammeLink.category.slug}/${gammeLink.gamme.slug}`}
                          className="text-champagne hover:underline"
                        >
                          Gamme {gammeLink.gamme.name}
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story + fiche */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7 scroll-rise">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[11px] tabular-nums text-champagne">01</span>
                  <span aria-hidden className="w-6 h-px bg-ivory/15" />
                  <span className="eyebrow text-platinum">Le projet</span>
                </div>
                <h2 className="display text-ivory text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.02] tracking-[-0.022em] mb-10">
                  Contexte,<br />
                  <span className="display-italic font-light text-champagne">réponse d’atelier.</span>
                </h2>
                <div className="space-y-6 max-w-prose">
                  {(r.story ?? [r.description]).map((p, i) => (
                    <p key={i} className="text-[16px] leading-[1.75] text-pearl/85">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-4 lg:col-start-9 scroll-rise">
                <div className="rounded-[2px] border border-ivory/10 bg-gradient-to-br from-ivory/[0.02] to-transparent p-7 lg:sticky lg:top-28">
                  <p className="eyebrow text-champagne/85 mb-6">Fiche projet</p>
                  <dl className="space-y-0">
                    {[
                      { k: "Catégorie", v: r.category },
                      { k: "Gamme", v: r.gamme },
                      { k: "Localisation", v: r.location },
                      { k: "Année", v: String(r.year) },
                    ].map(({ k, v }) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-4 py-3 border-b border-ivory/8 last:border-none"
                      >
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ash">{k}</dt>
                        <dd className="text-[13px] text-ivory/90 text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  {r.materiaux && r.materiaux.length > 0 && (
                    <div className="mt-7">
                      <p className="eyebrow text-champagne/85 mb-4">Matériaux &amp; finitions</p>
                      <div className="flex flex-wrap gap-2">
                        {r.materiaux.map((m) => (
                          <span
                            key={m}
                            className="font-mono text-[10px] uppercase tracking-[0.12em] text-ivory/80 border border-ivory/12 rounded-full px-2.5 py-1"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href={devisHrefForGammeName(r.gamme)}
                    className="btn-editorial mt-8 w-full inline-flex items-center justify-center gap-2.5 h-12 rounded-full bg-ivory text-ink text-[13px] font-medium hover:bg-champagne-soft transition-colors"
                  >
                    Un projet similaire ?
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related projects */}
        {related.length > 0 && (
          <section className="relative py-[var(--section-padding)] border-t border-ivory/8">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
              <div className="flex items-end justify-between mb-14 flex-wrap gap-6 scroll-rise">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[11px] tabular-nums text-champagne">02</span>
                    <span aria-hidden className="w-6 h-px bg-ivory/15" />
                    <span className="eyebrow text-platinum">Ouvrages proches</span>
                  </div>
                  <h2 className="display text-ivory text-[clamp(1.8rem,3.8vw,3rem)] leading-[1] tracking-[-0.022em]">
                    Dans le même<br />
                    <span className="display-italic font-light text-platinum">registre.</span>
                  </h2>
                </div>
                <Link
                  href="/realisations"
                  className="link-underline inline-flex items-center gap-2 text-[13px] tracking-[0.02em] text-ivory/80 hover:text-ivory"
                >
                  Tout le portfolio <ArrowUpRight size={13} aria-hidden />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {related.map((p, i) => (
                  <article key={p.id} className="scroll-rise">
                    <Link href={`/realisations/${p.id}`} className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ivory/8">
                        {p.imageUrl && (
                          <Image
                            src={p.imageUrl}
                            alt={p.title}
                            fill
                            quality={80}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] tabular-nums text-ivory/70">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/75 bg-ink/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                              {p.gamme}
                            </span>
                          </div>
                          <div>
                            <p className="display text-ivory text-[20px] leading-tight tracking-[-0.015em] group-hover:text-champagne transition-colors">
                              {p.title}
                            </p>
                            <p className="font-mono text-[10.5px] text-ivory/55 mt-1.5">
                              {p.location} · {p.year}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Prev / next project */}
        {(prev || next) && (
          <section className="relative border-t border-ivory/8">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
              <div className={`grid ${prev && next ? "grid-cols-2 divide-x divide-ivory/8" : "grid-cols-1"}`}>
                {prev && (
                  <Link
                    href={`/realisations/${prev.id}`}
                    aria-label={`Projet précédent : ${prev.title}`}
                    className="group py-12 pr-6 sm:pr-10 flex items-center gap-4"
                  >
                    <ArrowLeft size={18} className="text-ivory/40 group-hover:text-champagne group-hover:-translate-x-0.5 transition-all shrink-0" aria-hidden />
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash block mb-1.5">Projet précédent</span>
                      <span className="display text-ivory text-[18px] sm:text-[22px] leading-tight">{prev.title}</span>
                    </div>
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/realisations/${next.id}`}
                    aria-label={`Projet suivant : ${next.title}`}
                    className={`group py-12 flex items-center gap-4 ${prev ? "pl-6 sm:pl-10 justify-end text-right" : "justify-center text-center"}`}
                  >
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash block mb-1.5">Projet suivant</span>
                      <span className="display text-ivory text-[18px] sm:text-[22px] leading-tight">{next.title}</span>
                    </div>
                    <ArrowRight size={18} className="text-ivory/40 group-hover:text-champagne group-hover:translate-x-0.5 transition-all shrink-0" aria-hidden />
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
