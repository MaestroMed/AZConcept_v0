"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TriptychCardProps {
  pillar: "fabriquer" | "proteger" | "durer";
  title: string;
  href: string;
  index: number;
}

const panels = {
  fabriquer: {
    src: "/images/hero/panel-fabriquer.jpg",
    textColor: "#2e2e32",
    glow: "rgba(255,250,240,0.22)",
    sweep: "rgba(255,255,255,0.06)",
  },
  proteger: {
    src: "/images/hero/panel-proteger.jpg",
    textColor: "#ffffff",
    glow: "rgba(140,190,255,0.14)",
    sweep: "rgba(200,230,255,0.05)",
  },
  durer: {
    src: "/images/hero/panel-durer.jpg",
    textColor: "#d0d0d4",
    glow: "rgba(180,180,200,0.08)",
    sweep: "rgba(255,255,255,0.03)",
  },
};

export function TriptychCard({ pillar, title, href, index }: TriptychCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const p = panels[pillar];

  // Mouse glow
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(450px circle at ${mx}% ${my}%, ${p.glow} 0%, transparent 70%)`;

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }, [mx, my]);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full overflow-hidden group"
    >
      {/* ── DA panel background — unoptimized for max quality ── */}
      <Image
        src={p.src}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
        quality={100}
      />

      {/* ── Mouse glow ── */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: glow }}
      />

      {/* ── Light sweep — slow, elegant, diagonal ── */}
      <motion.div
        className="absolute z-[2] pointer-events-none"
        style={{
          width: "20%",
          height: "300%",
          top: "-100%",
          background: `linear-gradient(105deg, transparent 44%, ${p.sweep} 49%, rgba(255,255,255,0.03) 50%, ${p.sweep} 51%, transparent 56%)`,
          filter: "blur(4px)",
        }}
        animate={{ left: ["-25%", "125%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 10 }}
      />

      {/* ── Title — character reveal, NO initial opacity:0 on container ── */}
      <div
        className="absolute z-[3] px-6 sm:px-8 lg:px-10"
        style={{ top: "34%", transform: "translateY(-50%)" }}
      >
        <h2
          className="text-[1.4rem] sm:text-[1.7rem] lg:text-[2.2rem] xl:text-[2.6rem] font-semibold tracking-[0.01em] leading-[1] select-none"
          style={{
            color: p.textColor,
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          }}
        >
          {title}
        </h2>
      </div>

      {/* ── Panel divider ── */}
      {pillar !== "durer" && (
        <div
          className="absolute top-0 right-0 bottom-0 w-px hidden md:block z-[4] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 8%, rgba(0,0,0,0.06) 50%, transparent 92%)",
          }}
        />
      )}

      {/* ── Link ── */}
      <Link href={href} className="absolute inset-0 z-[5]" aria-label={title} />
    </div>
  );
}
