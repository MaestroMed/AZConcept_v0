"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ═══════════════════════════════════════════════
   CSS 3D FORMS — Pure divs, zero external deps
   ═══════════════════════════════════════════════ */

function CSSIngots() {
  return (
    <div className="ingots-scene">
      <div className="ingots-group">
        {/* Bottom ingot — dark fonte */}
        <div className="ingot ingot-bottom">
          <div className="face front" /><div className="face back" />
          <div className="face top" /><div className="face bottom-face" />
          <div className="face left" /><div className="face right" />
        </div>
        {/* Top ingot — bright aluminum */}
        <div className="ingot ingot-top">
          <div className="face front bright" /><div className="face back bright" />
          <div className="face top bright" /><div className="face bottom-face bright" />
          <div className="face left bright" /><div className="face right bright" />
        </div>
      </div>
    </div>
  );
}

function CSSLayers() {
  return (
    <div className="layers-scene">
      <div className="layers-group">
        <div className="glass-plate plate-1" />
        <div className="glass-plate plate-2" />
        <div className="glass-plate plate-3" />
      </div>
    </div>
  );
}

function CSSMonolith() {
  return (
    <div className="monolith-scene">
      <div className="monolith-group">
        <div className="monolith-box">
          <div className="face front dark" /><div className="face back dark" />
          <div className="face top dark" /><div className="face bottom-face dark" />
          <div className="face left dark" /><div className="face right dark" />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PANEL COMPONENT
   ═══════════════════════════════════════════════ */

const panels = [
  {
    id: "fabriquer",
    title: "FABRIQUER.",
    href: "/garde-corps",
    textColor: "#2a2a30",
    gradient: "panel-fabriquer",
    Form: CSSIngots,
  },
  {
    id: "proteger",
    title: "PROT\u00c9GER.",
    href: "/portes",
    textColor: "#ffffff",
    gradient: "panel-proteger",
    Form: CSSLayers,
  },
  {
    id: "durer",
    title: "DURER.",
    href: "/grilles",
    textColor: "#d4d4d8",
    gradient: "panel-durer",
    Form: CSSMonolith,
  },
];

function Panel({
  panel,
  index,
}: {
  panel: (typeof panels)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`panel-cell ${panel.gradient} relative h-full overflow-hidden group`}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Living gradient glow on mouse */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.06) 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Title */}
      <div className="absolute z-[2] px-7 sm:px-9 lg:px-11" style={{ top: "35%", transform: "translateY(-50%)" }}>
        <h2
          className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.4rem] xl:text-[2.8rem] font-semibold tracking-[0.01em] leading-[1]"
          style={{ color: panel.textColor }}
        >
          {panel.title}
        </h2>
      </div>

      {/* 3D Form */}
      <div className="absolute bottom-[12%] sm:bottom-[14%] left-1/2 -translate-x-1/2 z-[2]">
        <panel.Form />
      </div>

      {/* Panel divider */}
      {index < 2 && (
        <div className="absolute top-0 right-0 bottom-0 w-px hidden md:block z-[3] pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 10%, rgba(0,0,0,0.06) 50%, transparent 90%)" }} />
      )}

      <Link href={panel.href} className="absolute inset-0 z-[4]" aria-label={panel.title} />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */

export function HeroTriptych() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen min-h-[600px] max-h-[1200px]">
        {panels.map((panel, i) => (
          <Panel key={panel.id} panel={panel} index={i} />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0.5 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
