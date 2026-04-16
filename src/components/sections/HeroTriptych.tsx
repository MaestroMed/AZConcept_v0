"use client";

import { useCallback, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { MeshGradient } from "@/components/hero/MeshGradient";

/*
 * Hero — Editorial Atelier (v2)
 * - No overflow-hidden word-masks (items can't disappear if anim stalls).
 * - Mobile: verbs stack column instead of cramped 3 cols.
 * - Respects prefers-reduced-motion (kills parallax, keeps fade-in).
 */

const VERBS = [
  { word: "Fabriquer.", italic: "Métallerie", detail: "sur mesure",         href: "/garde-corps", index: "01" },
  { word: "Protéger.",  italic: "Thermolaquage", detail: "& certifications", href: "/portes",      index: "02" },
  { word: "Durer.",     italic: "Patrimoine",   detail: "architectural",    href: "/grilles",     index: "03" },
];

export function HeroTriptych() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const halo = useMotionTemplate`radial-gradient(520px circle at ${mx}% ${my}%, rgba(241,237,228,0.06) 0%, transparent 70%)`;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const meshY     = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 80]);
  const headlineY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -32]);
  const imageY    = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -18]);

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
      className="relative min-h-screen min-h-[100svh] [overflow-x:clip]"
    >
      {/* Mesh field */}
      <motion.div style={{ y: meshY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <MeshGradient
            colors={["#08080b", "#12131a", "#1f2b40", "#5c6d85", "#c9a35c"]}
            speed={0.5}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-ink/45 to-ink/75" />
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: "radial-gradient(120% 80% at 50% 115%, rgba(10,10,13,0.98), transparent 60%)" }}
        />
      </motion.div>

      {/* Mouse halo */}
      <motion.div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: halo }} />

      {/* Grain */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 240 240\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/></filter><rect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/></svg>")',
          backgroundSize: "240px 240px",
        }}
      />

      {/* Top rail */}
      <div className="relative z-20 pt-[calc(76px+5vh)] px-[var(--container-padding)] max-w-[var(--container-max)] mx-auto">
        <div className="flex items-center justify-between gap-4">
          <span className="eyebrow text-ivory/55">AZ / Concept — Atelier Nº 01</span>
          <span className="eyebrow text-ivory/45 hidden sm:inline">
            Bruyères-sur-Oise · Île-de-France
          </span>
          <span className="eyebrow text-ivory/55 font-mono tabular-nums">MMXXVI</span>
        </div>
        <div className="mt-5 h-px bg-gradient-to-r from-transparent via-ivory/15 to-transparent" />
      </div>

      {/* MAIN SPLIT */}
      <div className="relative z-20 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] pt-[7vh] sm:pt-[10vh] pb-[22vh] sm:pb-[18vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT — headline */}
          <motion.div style={{ y: headlineY }} className="lg:col-span-7 relative">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-champagne/85"
            >
              Édition 2026 · Collection
            </motion.p>

            <h1 className="mt-7 display text-ivory text-[clamp(3.4rem,10vw,9rem)] leading-[0.92] tracking-[-0.032em]">
              <motion.span
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Métallerie
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block -mt-[0.08em] display-italic font-light text-champagne"
              >
                d&rsquo;architecture.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 max-w-[40rem] text-[17px] sm:text-[18.5px] leading-[1.6] text-pearl/85"
            >
              Dix gammes dessinées pour les architectes. Acier, verre, bois,
              thermolaquage 200+ RAL. Un atelier de{" "}
              <span className="text-ivory">1 800&nbsp;m²</span> en Île-de-France —
              partenaire <span className="text-champagne">Jansen</span>,
              collections exclusives{" "}
              <span className="italic">Patina · Polaris · Dichroic</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <Link
                href="/devis"
                className="btn-editorial inline-flex items-center gap-3 h-14 px-8 rounded-full bg-ivory text-ink text-[13.5px] font-medium hover:bg-champagne-soft transition-colors"
              >
                Ouvrir un projet
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/realisations"
                className="link-underline text-[13px] tracking-[0.02em] text-ivory/85 hover:text-ivory flex items-center gap-2"
              >
                Voir les réalisations
                <span className="font-mono text-[10px] tabular-nums text-champagne">150+</span>
              </Link>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.15 }}
              className="mt-16 grid grid-cols-3 gap-x-8 gap-y-3 max-w-lg"
            >
              {[
                { k: "Gammes",         v: "10" },
                { k: "Teintes RAL",    v: "200+" },
                { k: "Projets livrés", v: "3 000+" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="eyebrow text-ash">{s.k}</dt>
                  <dd className="mt-2 display font-light text-ivory text-[clamp(1.5rem,2.4vw,2.2rem)] tabular-nums tracking-[-0.02em]">
                    {s.v}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* RIGHT — image frame (layered) */}
          <motion.aside
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:mt-10 relative"
          >
            {/* Decorative secondary plate behind */}
            <div
              aria-hidden
              className="hidden md:block absolute -top-8 -left-6 w-[55%] aspect-[3/4] overflow-hidden rounded-[2px] border border-champagne/20 opacity-70"
            >
              <Image
                src="/images/ambiance/metal-texture.jpg"
                alt=""
                fill
                quality={75}
                sizes="30vw"
                className="object-cover mix-blend-luminosity [filter:saturate(0.6)_contrast(1.1)_brightness(0.7)]"
              />
              <div className="absolute inset-0 bg-ink/50" />
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] border border-ivory/10">
              <Image
                src="/images/realisations/facade-bois-metal-immeuble.jpg"
                alt="Façade bois & métal — réalisation AZ Concept"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover [filter:saturate(0.92)_contrast(1.05)]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/5 to-ink/80" />

              <div className="absolute top-0 inset-x-0 p-5 flex items-start justify-between">
                <span className="font-mono text-[10.5px] tabular-nums text-ivory/70 bg-ink/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                  Sélection · 01
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/75 bg-ink/35 backdrop-blur-sm px-2.5 py-1 rounded-full border border-ivory/10">
                  FACADE
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="display-italic text-ivory text-[20px] leading-tight">
                    Façade bois &amp; métal
                  </p>
                  <p className="font-mono text-[10.5px] text-ivory/55 mt-1.5">
                    Programme neuf · Île-de-France · 2025
                  </p>
                </div>
                <Link
                  href="/realisations"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-ivory/25 text-ivory/90 hover:border-champagne hover:text-champagne transition-colors"
                  aria-label="Voir la réalisation"
                >
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[10.5px] text-ivory/45 tabular-nums">
              <span>H. 3 820 mm</span>
              <span className="h-px flex-1 mx-4 bg-ivory/12" />
              <span>L. 1 240 mm</span>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Verbs — stacked on mobile, row on sm+ */}
      <div className="relative z-20 border-t border-ivory/8">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {VERBS.map((v, i) => (
              <motion.div
                key={v.word}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative ${i !== 0 ? "sm:border-l border-ivory/8 border-t sm:border-t-0" : ""}`}
              >
                <Link
                  href={v.href}
                  className="group block px-6 sm:px-8 lg:px-10 py-10 sm:py-12 transition-colors hover:bg-ivory/[0.02]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tabular-nums text-ash">
                      {v.index} / 03
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-ivory/35 group-hover:text-champagne group-hover:translate-x-0.5 -translate-x-0.5 transition-all"
                    />
                  </div>
                  <h3 className="mt-8 display text-[clamp(2rem,4.5vw,3.2rem)] tracking-[-0.02em] leading-[0.95]">
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
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="eyebrow text-[9.5px] text-ivory/45">Scroll</span>
        <ArrowDown size={12} className="text-ivory/55 animate-bounce" />
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[15] pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--ink) 100%)" }}
      />
    </section>
  );
}
