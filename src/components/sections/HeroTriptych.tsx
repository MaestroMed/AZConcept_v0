"use client";

import { useCallback, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { MeshGradient } from "@/components/hero/MeshGradient";

/*
 * Hero — Editorial Atelier
 * ----------------------------------------------------
 * Structure: left column = oversized serif headline
 * ("Metallerie / d'architecture.") with editorial
 * metadata stacked below. Right column = layered
 * featured image + quiet technical index (01/03).
 * Bottom row = triptych of "Fabriquer. Proteger. Durer."
 * as clickable verbs linking to each category.
 */

const VERBS = [
  {
    word: "Fabriquer.",
    italic: "Métallerie",
    detail: "sur mesure",
    href: "/garde-corps",
    index: "01",
  },
  {
    word: "Protéger.",
    italic: "Thermolaquage",
    detail: "& certifications",
    href: "/portes",
    index: "02",
  },
  {
    word: "Durer.",
    italic: "Patrimoine",
    detail: "architectural",
    href: "/grilles",
    index: "03",
  },
];

export function HeroTriptych() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const halo = useMotionTemplate`radial-gradient(480px circle at ${mx}% ${my}%, rgba(241,237,228,0.05) 0%, transparent 70%)`;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-screen overflow-hidden isolate"
    >
      {/* Mesh field — deep ink → steel → champagne */}
      <motion.div
        style={{ y: meshY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0">
          <MeshGradient
            colors={["#08080b", "#12131a", "#1f2b40", "#5c6d85", "#c9a35c"]}
            speed={0.55}
          />
        </div>
        {/* Darken + warm wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-ink/50 to-ink/75" />
        <div className="absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(120% 80% at 50% 110%, rgba(10,10,13,0.95), transparent 60%)" }}
        />
      </motion.div>

      {/* Mouse halo */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: halo }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 240 240\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/></filter><rect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/></svg>")',
          backgroundSize: "240px 240px",
        }}
      />

      {/* Top rail — date, locale, index */}
      <div className="relative z-20 pt-[calc(68px+2rem)] px-[var(--container-padding)] max-w-[var(--container-max)] mx-auto">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-ivory/55">AZ / Concept — Atelier Nº 01</span>
          <span className="eyebrow text-ivory/45 hidden sm:inline">
            Bruyères-sur-Oise · Île-de-France
          </span>
          <span className="eyebrow text-ivory/55 font-mono tabular-nums">
            MMXXVI
          </span>
        </div>
        <div className="mt-5 h-px bg-gradient-to-r from-transparent via-ivory/15 to-transparent" />
      </div>

      {/* MAIN SPLIT */}
      <div className="relative z-20 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] pt-[6vh] sm:pt-[8vh] pb-[22vh] sm:pb-[18vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — headline */}
          <motion.div style={{ y: headlineY }} className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow text-champagne/80">Édition 2026 · Collection</p>
            </motion.div>

            <h1 className="mt-6 display text-ivory text-[clamp(3.2rem,9.5vw,8.5rem)] leading-[0.92] tracking-[-0.032em]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Métallerie
                </motion.span>
              </span>
              <span className="block overflow-hidden -mt-[0.08em]">
                <motion.span
                  initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block display-italic font-light text-champagne"
                >
                  d’architecture.
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-[36rem]"
            >
              <p className="text-[17px] sm:text-[18px] leading-[1.55] text-pearl/85">
                Dix gammes dessinées pour les architectes. Acier, verre, bois, thermolaquage
                200+ RAL. Un atelier de <span className="text-ivory">1 800&nbsp;m²</span> en
                Île-de-France — partenaire <span className="text-champagne">Jansen</span>,
                collections exclusives <span className="italic">Patina · Polaris · Dichroic</span>.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/devis"
                className="btn-editorial inline-flex items-center gap-3 h-14 px-7 rounded-full bg-ivory text-ink text-[13.5px] font-medium hover:bg-champagne-soft transition-colors"
              >
                Ouvrir un projet
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/realisations"
                className="link-underline text-[13px] tracking-[0.02em] text-ivory/80 hover:text-ivory flex items-center gap-2"
              >
                Voir les réalisations
                <span className="font-mono text-[10px] tabular-nums text-champagne">150+</span>
              </Link>
            </motion.div>

            {/* Key-value strip */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              className="mt-14 grid grid-cols-3 gap-x-6 gap-y-3 max-w-md"
            >
              {[
                { k: "Gammes", v: "10" },
                { k: "Teintes RAL", v: "200+" },
                { k: "Projets livrés", v: "3 000+" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="eyebrow text-ash">{s.k}</dt>
                  <dd className="mt-1 display font-light text-ivory text-[clamp(1.4rem,2.2vw,2rem)] tabular-nums tracking-[-0.02em]">
                    {s.v}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* RIGHT — image frame */}
          <motion.aside
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:mt-6 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] border border-ivory/8">
              <Image
                src="/images/realisations/escalier-metallique-noir.jpg"
                alt="Escalier métallique contemporain — réalisation AZ Concept"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover [filter:saturate(0.92)_contrast(1.04)]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/5 to-ink/70" />
              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <p className="eyebrow text-ivory/55">Sélection · 01</p>
                  <p className="mt-1.5 display-italic text-ivory text-[18px] leading-tight">
                    Escalier monolithique
                  </p>
                  <p className="font-mono text-[10.5px] text-ivory/50 mt-1">
                    FORGE Noir · Paris XI · 2025
                  </p>
                </div>
                <Link
                  href="/realisations"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-ivory/25 text-ivory/90 hover:border-champagne hover:text-champagne transition-colors"
                  aria-label="Voir la réalisation"
                >
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Technical corner — dimension marks */}
            <div className="mt-4 flex items-center justify-between font-mono text-[10.5px] text-ivory/45 tabular-nums">
              <span>H. 3 820 mm</span>
              <span className="h-px flex-1 mx-4 bg-ivory/12" />
              <span>L. 1 240 mm</span>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Bottom triptych — Fabriquer / Protéger / Durer */}
      <div className="relative z-20 border-t border-ivory/8">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid grid-cols-3">
            {VERBS.map((v, i) => (
              <motion.div
                key={v.word}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`relative ${i !== 0 ? "border-l border-ivory/8" : ""}`}
              >
                <Link
                  href={v.href}
                  className="group block px-5 sm:px-8 py-8 sm:py-10 transition-colors hover:bg-ivory/[0.02]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tabular-nums text-ash">{v.index} / 03</span>
                    <ArrowRight size={14} className="text-ivory/35 group-hover:text-champagne group-hover:translate-x-0.5 -translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="mt-6 display text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.02em] leading-[0.95]">
                    <span className="text-ivory">{v.word}</span>
                  </h3>
                  <p className="mt-3 font-serif italic text-[14px] text-pearl/70">
                    <span className="text-champagne">{v.italic}</span> {v.detail}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="eyebrow text-[9.5px] text-ivory/40">Scroll</span>
        <ArrowDown size={12} className="text-ivory/50 animate-bounce" />
      </motion.div>

      {/* Bottom fade → surface */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[15] pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--ink) 100%)" }}
      />
    </section>
  );
}
