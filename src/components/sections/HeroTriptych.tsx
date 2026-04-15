"use client";

import { useCallback, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { MeshGradient } from "@/components/hero/MeshGradient";

/* ═══════════════════════════════════════════════
   BLUEPRINT WIREFRAMES — SVG technical drawings
   Ghostly, minimal, floating over the gradient
   ═══════════════════════════════════════════════ */

function BlueprintIngot() {
  return (
    <motion.svg
      viewBox="0 0 200 140" fill="none" stroke="currentColor"
      className="w-[140px] sm:w-[180px] lg:w-[220px] text-white/[0.07]"
      animate={{ y: [0, -6, 0], rotate: [0, 0.3, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Bottom ingot */}
      <path d="M20 90 L20 110 L120 110 L120 90Z" strokeWidth="0.6" />
      <path d="M20 90 L55 70 L155 70 L120 90Z" strokeWidth="0.6" />
      <path d="M120 90 L155 70 L155 90 L120 110Z" strokeWidth="0.6" />
      {/* Top ingot — offset */}
      <path d="M35 60 L35 78 L125 78 L125 60Z" strokeWidth="0.6" />
      <path d="M35 60 L65 42 L155 42 L125 60Z" strokeWidth="0.6" />
      <path d="M125 60 L155 42 L155 60 L125 78Z" strokeWidth="0.6" />
      {/* Dimension lines */}
      <line x1="15" y1="85" x2="15" y2="115" strokeWidth="0.3" strokeDasharray="2 3" />
      <line x1="160" y1="38" x2="160" y2="65" strokeWidth="0.3" strokeDasharray="2 3" />
    </motion.svg>
  );
}

function BlueprintLayers() {
  return (
    <motion.svg
      viewBox="0 0 180 160" fill="none" stroke="currentColor"
      className="w-[130px] sm:w-[160px] lg:w-[200px] text-white/[0.09]"
      animate={{ y: [0, -5, 0], rotate: [0, -0.2, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* 3 diamond plates — top view */}
      <path d="M30 110 L90 130 L150 110 L90 90Z" strokeWidth="0.6" />
      <path d="M35 85 L90 103 L145 85 L90 67Z" strokeWidth="0.6" />
      <path d="M40 60 L90 76 L140 60 L90 44Z" strokeWidth="0.6" />
      {/* Spacing indicators */}
      <line x1="155" y1="60" x2="155" y2="110" strokeWidth="0.3" strokeDasharray="2 3" />
      <line x1="153" y1="60" x2="157" y2="60" strokeWidth="0.3" />
      <line x1="153" y1="85" x2="157" y2="85" strokeWidth="0.3" />
      <line x1="153" y1="110" x2="157" y2="110" strokeWidth="0.3" />
    </motion.svg>
  );
}

function BlueprintMonolith() {
  return (
    <motion.svg
      viewBox="0 0 140 180" fill="none" stroke="currentColor"
      className="w-[100px] sm:w-[130px] lg:w-[160px] text-white/[0.06]"
      animate={{ y: [0, -4, 0], rotate: [0, 0.15, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Monolith — tall rect in isometric */}
      <path d="M30 40 L30 155 L80 155 L80 40Z" strokeWidth="0.6" />
      <path d="M30 40 L55 22 L105 22 L80 40Z" strokeWidth="0.6" />
      <path d="M80 40 L105 22 L105 137 L80 155Z" strokeWidth="0.6" />
      {/* Height dimension */}
      <line x1="25" y1="38" x2="25" y2="158" strokeWidth="0.3" strokeDasharray="2 3" />
      <line x1="23" y1="40" x2="27" y2="40" strokeWidth="0.3" />
      <line x1="23" y1="155" x2="27" y2="155" strokeWidth="0.3" />
    </motion.svg>
  );
}

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
      {/* WebGL Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          colors={["#d8d0c4", "#9898ae", "#3a64c0", "#1e2e60", "#181820"]}
          speed={0.6}
        />
      </div>

      {/* Mouse glow */}
      <motion.div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: glow }} />

      {/* Grain */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px" }}
      />

      {/* ═══ BLUEPRINT WIREFRAMES — floating ghost drawings ═══ */}
      <div className="absolute inset-0 z-[4] flex items-end pointer-events-none">
        <div className="w-full flex justify-between items-end px-[6vw] sm:px-[8vw] pb-[14vh] sm:pb-[16vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          >
            <BlueprintIngot />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 2 }}
          >
            <BlueprintLayers />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 2 }}
          >
            <BlueprintMonolith />
          </motion.div>
        </div>
      </div>

      {/* Typography */}
      <div className="absolute inset-0 z-[5] flex items-center pointer-events-none">
        <div className="w-full flex justify-between px-[6vw] sm:px-[8vw]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold tracking-[-0.02em] text-[#2a2a30]">FABRIQUER.</h2>
            <p className="mt-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-[#5a5a64]">Metallerie sur mesure</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold tracking-[-0.02em] text-white">PROT&Eacute;GER.</h2>
            <p className="mt-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-white/40">Thermolaquage &amp; protection</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold tracking-[-0.02em] text-[#c0c0c8]">DURER.</h2>
            <p className="mt-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-white/25">Durabilite &amp; patrimoine</p>
          </motion.div>
        </div>
      </div>

      {/* Click zones */}
      <div className="absolute inset-0 z-[6] grid grid-cols-3">
        <Link href="/garde-corps" aria-label="Fabriquer" />
        <Link href="/portes" aria-label="Protéger" />
        <Link href="/grilles" aria-label="Durer" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[7] pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--surface) 100%)" }} />

      <motion.div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[8] pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1.5 }}>
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/15">10 gammes &middot; 200+ RAL &middot; 3 000+ projets</p>
      </motion.div>
    </section>
  );
}
