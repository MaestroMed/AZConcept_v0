"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";

export function HeroTriptych() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(255,255,255,0.04) 0%, transparent 70%)`;

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
      className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden hero-gradient"
    >
      {/* ═══ BREATHING LAYERS — superposed gradient orbs ═══ */}

      {/* Layer 1 — large slow orb, warm */}
      <div className="hero-breath-1" />
      {/* Layer 2 — medium orb, cool shift */}
      <div className="hero-breath-2" />
      {/* Layer 3 — subtle deep pulse */}
      <div className="hero-breath-3" />

      {/* ═══ METALLIC LIGHT LINE — slow diagonal sweep ═══ */}
      <div className="hero-lightline" />

      {/* ═══ GRAIN TEXTURE ═══ */}
      <div className="hero-grain" />

      {/* ═══ MOUSE GLOW ═══ */}
      <motion.div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{ background: glow }}
      />

      {/* ═══ TEXT — 3 words positioned across the gradient ═══ */}
      <div className="absolute inset-0 z-[6] flex items-center pointer-events-none">
        <div className="w-full flex justify-between px-[6vw] sm:px-[8vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold tracking-[-0.02em] text-[#2a2a30]">
              FABRIQUER.
            </h2>
            <p className="mt-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-[#6a6a72] opacity-60">
              M&eacute;tallerie sur mesure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold tracking-[-0.02em] text-white">
              PROT&Eacute;GER.
            </h2>
            <p className="mt-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-white/40">
              Thermolaquage &amp; protection
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold tracking-[-0.02em] text-[#c8c8cc]">
              DURER.
            </h2>
            <p className="mt-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-white/25">
              Durabilit&eacute; &amp; patrimoine
            </p>
          </motion.div>
        </div>
      </div>

      {/* ═══ CLICK ZONES ═══ */}
      <div className="absolute inset-0 z-[7] grid grid-cols-3">
        <Link href="/garde-corps" aria-label="Fabriquer" />
        <Link href="/portes" aria-label="Protéger" />
        <Link href="/grilles" aria-label="Durer" />
      </div>

      {/* ═══ BOTTOM TAGLINE ═══ */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[8] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/15">
          10 gammes &middot; 200+ RAL &middot; 3 000+ projets
        </p>
      </motion.div>
    </section>
  );
}
