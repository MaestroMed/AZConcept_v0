"use client";

import { useCallback, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { MeshGradient } from "@/components/hero/MeshGradient";

/* ═══════════════════════════════════════════════
   ANIMATED ASSEMBLY — Complex multi-keyframe
   Each shape starts decomposed, floats in from
   different directions, assembles piece by piece.
   Then breathes forever.
   ═══════════════════════════════════════════════ */

function AssemblyIngots() {
  // Color adapted: dark strokes on light beige background
  const s = "rgba(60,55,50,0.12)";
  const sLight = "rgba(60,55,50,0.08)";

  // Each edge is a separate element that flies in from a different direction
  return (
    <svg viewBox="0 0 220 160" fill="none" className="w-[160px] sm:w-[200px] lg:w-[260px]">
      {/* === BOTTOM INGOT — 3 visible faces === */}
      {/* Front face — slides up from below */}
      <motion.path d="M15 95 L15 125 L135 125 L135 95Z" stroke={s} strokeWidth="0.6"
        initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 3, ease: [0.22, 1, 0.36, 1] }} />
      {/* Top face — drops from above */}
      <motion.path d="M15 95 L55 72 L175 72 L135 95Z" stroke={s} strokeWidth="0.6"
        initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 3, ease: [0.22, 1, 0.36, 1] }} />
      {/* Side face — slides from right */}
      <motion.path d="M135 95 L175 72 L175 102 L135 125Z" stroke={sLight} strokeWidth="0.6"
        initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 3, ease: [0.22, 1, 0.36, 1] }} />

      {/* === TOP INGOT — brighter, arrives later === */}
      {/* Front */}
      <motion.path d="M30 58 L30 84 L140 84 L140 58Z" stroke={s} strokeWidth="0.7"
        initial={{ y: 50, x: -30, opacity: 0 }} animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 3.5, ease: [0.22, 1, 0.36, 1] }} />
      {/* Top — the showcase face */}
      <motion.path d="M30 58 L65 38 L175 38 L140 58Z" stroke={s} strokeWidth="0.7"
        initial={{ y: -50, opacity: 0, scale: 0.8 }} animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, duration: 3.5, ease: [0.22, 1, 0.36, 1] }} />
      {/* Side */}
      <motion.path d="M140 58 L175 38 L175 64 L140 84Z" stroke={sLight} strokeWidth="0.6"
        initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.8, duration: 3, ease: [0.22, 1, 0.36, 1] }} />

      {/* === ACCENT LINES — appear last, very subtle === */}
      <motion.line x1="8" y1="55" x2="8" y2="128" stroke={sLight} strokeWidth="0.3" strokeDasharray="1.5 4"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 5, duration: 3 }} />
      <motion.line x1="180" y1="35" x2="180" y2="68" stroke={sLight} strokeWidth="0.3" strokeDasharray="1.5 4"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 5.3, duration: 3 }} />

      {/* === BREATHING — whole group pulses after assembly === */}
      <motion.rect x="0" y="0" width="220" height="160" fill="none"
        animate={{ y: [0, -3, 0], x: [0, 2, 0], rotate: [0, 0.3, 0] }}
        transition={{ delay: 7, duration: 16, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

function AssemblyLayers() {
  const s = "rgba(255,255,255,0.11)";
  const sLight = "rgba(255,255,255,0.07)";

  return (
    <svg viewBox="0 0 200 180" fill="none" className="w-[150px] sm:w-[190px] lg:w-[240px]">
      {/* === BOTTOM PLATE — arrives from bottom-left === */}
      <motion.g initial={{ x: -40, y: 50, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 3.5, ease: [0.22, 1, 0.36, 1] }}>
        <path d="M25 125 L100 152 L175 125 L100 98Z" stroke={sLight} strokeWidth="0.5" />
        {/* Thickness */}
        <path d="M25 125 L100 152 L100 157 L25 130Z" stroke={sLight} strokeWidth="0.3" />
        <path d="M100 152 L175 125 L175 130 L100 157Z" stroke={sLight} strokeWidth="0.3" />
      </motion.g>

      {/* === MIDDLE PLATE — arrives from right === */}
      <motion.g initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 3.5, ease: [0.22, 1, 0.36, 1] }}>
        <path d="M30 95 L100 120 L170 95 L100 70Z" stroke={s} strokeWidth="0.5" />
        <path d="M30 95 L100 120 L100 124 L30 99Z" stroke={sLight} strokeWidth="0.3" />
        <path d="M100 120 L170 95 L170 99 L100 124Z" stroke={sLight} strokeWidth="0.3" />
      </motion.g>

      {/* === TOP PLATE — drops from above, arrives last === */}
      <motion.g initial={{ y: -60, opacity: 0, scale: 0.85 }} animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 3.2, duration: 4, ease: [0.22, 1, 0.36, 1] }}>
        <path d="M35 65 L100 88 L165 65 L100 42Z" stroke={s} strokeWidth="0.6" />
        <path d="M35 65 L100 88 L100 92 L35 69Z" stroke={sLight} strokeWidth="0.3" />
        <path d="M100 88 L165 65 L165 69 L100 92Z" stroke={sLight} strokeWidth="0.3" />
        {/* Specular hint on top plate */}
        <motion.path d="M60 60 L100 73 L140 60 L100 48Z" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 6, duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      </motion.g>

      {/* Spacing lines */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5, duration: 2 }}>
        <line x1="180" y1="65" x2="180" y2="125" stroke={sLight} strokeWidth="0.3" strokeDasharray="1.5 4" />
        <line x1="178" y1="65" x2="182" y2="65" stroke={sLight} strokeWidth="0.3" />
        <line x1="178" y1="95" x2="182" y2="95" stroke={sLight} strokeWidth="0.3" />
        <line x1="178" y1="125" x2="182" y2="125" stroke={sLight} strokeWidth="0.3" />
      </motion.g>

      {/* Breathing */}
      <motion.rect x="0" y="0" width="200" height="180" fill="none"
        animate={{ y: [0, -3, 0], x: [0, -2, 0], rotate: [0, -0.2, 0] }}
        transition={{ delay: 7, duration: 18, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

function AssemblyMonolith() {
  const s = "rgba(200,200,210,0.08)";
  const sLight = "rgba(200,200,210,0.05)";

  return (
    <svg viewBox="0 0 150 200" fill="none" className="w-[110px] sm:w-[140px] lg:w-[175px]">
      {/* Front face — rises from ground */}
      <motion.path d="M25 35 L25 170 L85 170 L85 35Z" stroke={s} strokeWidth="0.6"
        initial={{ y: 80, scaleY: 0.3, opacity: 0 }} animate={{ y: 0, scaleY: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 4, ease: [0.22, 1, 0.36, 1] }} />
      {/* Top face — slides in from above */}
      <motion.path d="M25 35 L55 15 L115 15 L85 35Z" stroke={s} strokeWidth="0.6"
        initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 3.5, ease: [0.22, 1, 0.36, 1] }} />
      {/* Right face — slides from right */}
      <motion.path d="M85 35 L115 15 L115 150 L85 170Z" stroke={sLight} strokeWidth="0.5"
        initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.5, duration: 3.5, ease: [0.22, 1, 0.36, 1] }} />

      {/* Internal structure lines — like X-ray */}
      <motion.line x1="55" y1="35" x2="55" y2="170" stroke={sLight} strokeWidth="0.25" strokeDasharray="2 6"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 4.5, duration: 3 }} />
      <motion.line x1="25" y1="100" x2="85" y2="100" stroke={sLight} strokeWidth="0.25" strokeDasharray="2 6"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 4.8, duration: 3 }} />

      {/* Height dimension */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5, duration: 2 }}>
        <line x1="18" y1="33" x2="18" y2="173" stroke={sLight} strokeWidth="0.3" strokeDasharray="1.5 4" />
        <line x1="16" y1="35" x2="20" y2="35" stroke={sLight} strokeWidth="0.3" />
        <line x1="16" y1="170" x2="20" y2="170" stroke={sLight} strokeWidth="0.3" />
      </motion.g>

      {/* Edge glow pulse */}
      <motion.line x1="25" y1="35" x2="85" y2="35" stroke="rgba(200,200,220,0.06)" strokeWidth="0.8"
        animate={{ opacity: [0.02, 0.08, 0.02] }}
        transition={{ delay: 6, duration: 10, repeat: Infinity, ease: "easeInOut" }} />

      {/* Breathing */}
      <motion.rect x="0" y="0" width="150" height="200" fill="none"
        animate={{ y: [0, -2, 0], x: [0, 1.5, 0], rotate: [0, 0.15, 0] }}
        transition={{ delay: 7, duration: 20, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════ */

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
    <section ref={ref} onMouseMove={onMove}
      className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">

      <div className="absolute inset-0 z-0">
        <MeshGradient colors={["#d8d0c4", "#9898ae", "#3a64c0", "#1e2e60", "#181820"]} speed={0.6} />
      </div>

      <motion.div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: glow }} />

      <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px" }} />

      {/* ASSEMBLY WIREFRAMES */}
      <div className="absolute inset-0 z-[4] flex items-end pointer-events-none">
        <div className="w-full flex justify-between items-end px-[6vw] sm:px-[8vw] pb-[10vh] sm:pb-[13vh]">
          <AssemblyIngots />
          <AssemblyLayers />
          <AssemblyMonolith />
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

      <div className="absolute inset-0 z-[6] grid grid-cols-3">
        <Link href="/garde-corps" aria-label="Fabriquer" />
        <Link href="/portes" aria-label="Protéger" />
        <Link href="/grilles" aria-label="Durer" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 z-[7] pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--surface) 100%)" }} />

      <motion.div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[8] pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1.5 }}>
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/15">10 gammes &middot; 200+ RAL &middot; 3 000+ projets</p>
      </motion.div>
    </section>
  );
}
