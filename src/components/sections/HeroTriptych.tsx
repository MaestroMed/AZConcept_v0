"use client";

import { useCallback, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { MeshGradient } from "@/components/hero/MeshGradient";

export function HeroTriptych() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(500px circle at ${mx}% ${my}%, rgba(255,255,255,0.035) 0%, transparent 70%)`;

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
      className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden"
    >
      {/* ═══ WEBGL MESH GRADIENT — Stripe-level organic animation ═══ */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          colors={[
            "#d8d0c4", // warm beige
            "#9898ae", // silver transition
            "#3a64c0", // AZ blue
            "#1e2e60", // deep navy
            "#181820", // charcoal
          ]}
          speed={0.6}
        />
      </div>

      {/* Mouse glow */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: glow }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Typography — 3 words across the gradient */}
      <div className="absolute inset-0 z-[4] flex items-center pointer-events-none">
        <div className="w-full flex justify-between px-[6vw] sm:px-[8vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold tracking-[-0.02em] text-[#2a2a30]">
              FABRIQUER.
            </h2>
            <p className="mt-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-[#5a5a64]">
              Metallerie sur mesure
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
            <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold tracking-[-0.02em] text-[#c0c0c8]">
              DURER.
            </h2>
            <p className="mt-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-white/25">
              Durabilite &amp; patrimoine
            </p>
          </motion.div>
        </div>
      </div>

      {/* Click zones */}
      <div className="absolute inset-0 z-[5] grid grid-cols-3">
        <Link href="/garde-corps" aria-label="Fabriquer" />
        <Link href="/portes" aria-label="Protéger" />
        <Link href="/grilles" aria-label="Durer" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[4] pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--surface) 100%)" }} />

      {/* Tagline */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[6] pointer-events-none"
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
