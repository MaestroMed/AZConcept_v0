"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const panels = [
  { title: "FABRIQUER.", href: "/garde-corps", x: "16.6%" },
  { title: "PROT\u00c9GER.", href: "/portes", x: "50%" },
  { title: "DURER.", href: "/grilles", x: "83.3%" },
];

export function HeroTriptych() {
  const [revealed, setRevealed] = useState(false);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Cinematic reveal after mount
  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
    // Determine which panel is hovered
    const relX = (e.clientX - r.left) / r.width;
    setHoveredPanel(relX < 0.333 ? 0 : relX < 0.666 ? 1 : 2);
  }, []);

  return (
    <section className="relative bg-black overflow-hidden">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredPanel(null)}
        className="relative h-screen min-h-[600px] max-h-[1200px]"
      >
        {/* ═══ FULL TRIPTYCH IMAGE — single image, no crops ═══ */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: revealed ? 1 : 1.15, opacity: revealed ? 1 : 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero/triptych.jpg"
            alt="AZ Concept — Fabriquer. Protéger. Durer."
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized
          />

          {/* Ken Burns — ultra slow zoom */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-[-5%]">
              <Image
                src="/images/hero/triptych.jpg"
                alt=""
                fill
                className="object-cover opacity-0"
                sizes="100vw"
                unoptimized
                aria-hidden
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ═══ SPOTLIGHT — follows mouse, illuminates the hovered panel ═══ */}
        <motion.div
          className="absolute inset-0 z-[2] pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.08) 0%, transparent 70%)`,
            opacity: hoveredPanel !== null ? 1 : 0,
          }}
        />

        {/* ═══ LIGHT SWEEP — cinematic diagonal glint ═══ */}
        <motion.div
          className="absolute z-[3] pointer-events-none"
          style={{
            width: "15%",
            height: "300%",
            top: "-100%",
            background: "linear-gradient(105deg, transparent 44%, rgba(255,255,255,0.04) 49%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.04) 51%, transparent 56%)",
            filter: "blur(3px)",
          }}
          animate={{ left: ["-20%", "120%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 12 }}
        />

        {/* ═══ PANEL HOVER ZONES — invisible interactive areas ═══ */}
        <div className="absolute inset-0 z-[5] grid grid-cols-3">
          {panels.map((panel, i) => (
            <Link
              key={panel.title}
              href={panel.href}
              className="relative group"
              aria-label={panel.title}
            >
              {/* Hover brightening effect */}
              <div
                className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-700"
              />

              {/* Panel divider line */}
              {i < 2 && (
                <div
                  className="absolute top-0 right-0 bottom-0 w-px hidden md:block"
                  style={{
                    background: "linear-gradient(180deg, transparent 10%, rgba(255,255,255,0.04) 50%, transparent 90%)",
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* ═══ BOTTOM GRADIENT — fade to site background ═══ */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-[4] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, var(--surface) 100%)",
          }}
        />

        {/* ═══ 4-POINT STAR — bottom right, from the DA ═══ */}
        <motion.div
          className="absolute bottom-6 right-8 z-[6] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 0.3 : 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.svg
            width="18" height="18" viewBox="0 0 20 20" fill="white"
            animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8Z" />
          </motion.svg>
        </motion.div>

        {/* ═══ SCROLL INDICATOR ═══ */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[6] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 0.25 : 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-0.5 h-1.5 rounded-full bg-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
