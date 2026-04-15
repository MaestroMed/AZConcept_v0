"use client";

import { useCallback, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { MeshGradient } from "@/components/hero/MeshGradient";

/* ═══════════════════════════════════════════════
   ANIMATED BLUEPRINT WIREFRAMES
   Lines draw themselves in, then float and breathe.
   Carried by air current — slow drift.
   ═══════════════════════════════════════════════ */

// Shared: slow drift animation like carried by wind
const drift = (dur: number, dx: number, dy: number) => ({
  animate: {
    x: [0, dx, -dx * 0.5, dx * 0.3, 0],
    y: [0, dy, -dy * 0.7, dy * 0.4, 0],
    rotate: [0, 0.8, -0.4, 0.3, 0],
    scale: [1, 1.02, 0.99, 1.01, 1],
  },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const },
});

function BlueprintIngot() {
  const d = drift(18, 8, -5);
  return (
    <motion.svg viewBox="0 0 200 140" fill="none" className="w-[140px] sm:w-[180px] lg:w-[220px]" {...d}>
      {/* Bottom ingot — draws in */}
      <motion.path d="M20 90 L20 115 L130 115 L130 90Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.08 }}
        transition={{ delay: 1.5, duration: 2.5, ease: "easeInOut" }} />
      <motion.path d="M20 90 L55 68 L165 68 L130 90Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.08 }}
        transition={{ delay: 1.8, duration: 2.5, ease: "easeInOut" }} />
      <motion.path d="M130 90 L165 68 L165 93 L130 115Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.06 }}
        transition={{ delay: 2.0, duration: 2.5, ease: "easeInOut" }} />
      {/* Top ingot — offset, brighter */}
      <motion.path d="M35 58 L35 80 L135 80 L135 58Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.1 }}
        transition={{ delay: 2.3, duration: 2.5, ease: "easeInOut" }} />
      <motion.path d="M35 58 L65 38 L165 38 L135 58Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.12 }}
        transition={{ delay: 2.5, duration: 2.5, ease: "easeInOut" }} />
      <motion.path d="M135 58 L165 38 L165 58 L135 80Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.08 }}
        transition={{ delay: 2.7, duration: 2.5, ease: "easeInOut" }} />
      {/* Dimension lines */}
      <motion.line x1="12" y1="55" x2="12" y2="118" stroke="white" strokeWidth="0.3" strokeDasharray="2 4"
        initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} transition={{ delay: 3.5, duration: 1.5 }} />
    </motion.svg>
  );
}

function BlueprintLayers() {
  const d = drift(22, -6, -4);
  return (
    <motion.svg viewBox="0 0 180 160" fill="none" className="w-[130px] sm:w-[170px] lg:w-[210px]" {...d}>
      {/* 3 diamond plates — staggered draw-in */}
      <motion.path d="M25 115 L90 138 L155 115 L90 92Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.06 }}
        transition={{ delay: 1.8, duration: 2.5, ease: "easeInOut" }} />
      <motion.path d="M30 88 L90 108 L150 88 L90 68Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.08 }}
        transition={{ delay: 2.2, duration: 2.5, ease: "easeInOut" }} />
      <motion.path d="M35 60 L90 78 L145 60 L90 42Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.11 }}
        transition={{ delay: 2.6, duration: 2.5, ease: "easeInOut" }} />
      {/* Spacing indicators */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ delay: 3.8, duration: 1.5 }}>
        <line x1="160" y1="60" x2="160" y2="115" stroke="white" strokeWidth="0.3" strokeDasharray="2 4" />
        <line x1="158" y1="60" x2="162" y2="60" stroke="white" strokeWidth="0.3" />
        <line x1="158" y1="88" x2="162" y2="88" stroke="white" strokeWidth="0.3" />
        <line x1="158" y1="115" x2="162" y2="115" stroke="white" strokeWidth="0.3" />
      </motion.g>
    </motion.svg>
  );
}

function BlueprintMonolith() {
  const d = drift(20, 5, -3);
  return (
    <motion.svg viewBox="0 0 140 190" fill="none" className="w-[95px] sm:w-[125px] lg:w-[155px]" {...d}>
      {/* Tall monolith */}
      <motion.path d="M30 35 L30 165 L85 165 L85 35Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.06 }}
        transition={{ delay: 2.0, duration: 3, ease: "easeInOut" }} />
      <motion.path d="M30 35 L58 15 L113 15 L85 35Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.07 }}
        transition={{ delay: 2.4, duration: 3, ease: "easeInOut" }} />
      <motion.path d="M85 35 L113 15 L113 145 L85 165Z" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.05 }}
        transition={{ delay: 2.8, duration: 3, ease: "easeInOut" }} />
      {/* Height dimension */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ delay: 4, duration: 1.5 }}>
        <line x1="23" y1="33" x2="23" y2="168" stroke="white" strokeWidth="0.3" strokeDasharray="2 4" />
        <line x1="21" y1="35" x2="25" y2="35" stroke="white" strokeWidth="0.3" />
        <line x1="21" y1="165" x2="25" y2="165" stroke="white" strokeWidth="0.3" />
      </motion.g>
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
    <section ref={ref} onMouseMove={onMove}
      className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">

      {/* WebGL Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <MeshGradient colors={["#d8d0c4", "#9898ae", "#3a64c0", "#1e2e60", "#181820"]} speed={0.6} />
      </div>

      {/* Mouse glow */}
      <motion.div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: glow }} />

      {/* Grain */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px" }} />

      {/* ═══ LIGHT REFLECTION WAVE — halo sweeping left to right ═══ */}
      <motion.div
        className="absolute z-[4] pointer-events-none"
        style={{
          width: "35%", height: "120%", top: "-10%",
          background: "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(255,255,255,0.045) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{ left: ["-40%", "140%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
      />

      {/* ═══ BLUEPRINT WIREFRAMES — draw-in + drift ═══ */}
      <div className="absolute inset-0 z-[5] flex items-end pointer-events-none">
        <div className="w-full flex justify-between items-end px-[6vw] sm:px-[8vw] pb-[12vh] sm:pb-[14vh]">
          <BlueprintIngot />
          <BlueprintLayers />
          <BlueprintMonolith />
        </div>
      </div>

      {/* Typography */}
      <div className="absolute inset-0 z-[6] flex items-center pointer-events-none">
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
      <div className="absolute inset-0 z-[7] grid grid-cols-3">
        <Link href="/garde-corps" aria-label="Fabriquer" />
        <Link href="/portes" aria-label="Protéger" />
        <Link href="/grilles" aria-label="Durer" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[8] pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--surface) 100%)" }} />

      <motion.div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[9] pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1.5 }}>
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/15">10 gammes &middot; 200+ RAL &middot; 3 000+ projets</p>
      </motion.div>
    </section>
  );
}
