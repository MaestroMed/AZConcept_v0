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
    textColor: "#2a2a2e",
    glow: "rgba(255,250,240,0.25)",
    sweep: "rgba(255,255,255,0.07)",
  },
  proteger: {
    src: "/images/hero/panel-proteger.jpg",
    textColor: "#ffffff",
    glow: "rgba(140,190,255,0.15)",
    sweep: "rgba(200,230,255,0.06)",
  },
  durer: {
    src: "/images/hero/panel-durer.jpg",
    textColor: "#d8d8dc",
    glow: "rgba(200,200,210,0.08)",
    sweep: "rgba(255,255,255,0.04)",
  },
};

export function TriptychCard({ pillar, title, href, index }: TriptychCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const p = panels[pillar];

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(500px circle at ${mx}% ${my}%, ${p.glow} 0%, transparent 70%)`;

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full overflow-hidden group"
    >
      {/* Background — DA panel image, perfect quality, objects included */}
      <Image
        src={p.src}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
      />

      {/* Mouse-following glow */}
      <motion.div
        className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: glow }}
      />

      {/* Slow diagonal light sweep */}
      <motion.div
        className="absolute z-[2] pointer-events-none"
        style={{
          width: "25%",
          height: "250%",
          top: "-75%",
          background: `linear-gradient(105deg, transparent 42%, ${p.sweep} 49%, rgba(255,255,255,0.04) 50%, ${p.sweep} 51%, transparent 58%)`,
          filter: "blur(6px)",
        }}
        animate={{ left: ["-30%", "130%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 8 }}
      />

      {/* Title — web text positioned to match DA layout */}
      <div className="absolute z-[3] px-6 sm:px-8 lg:px-10" style={{ top: "34%", transform: "translateY(-50%)" }}>
        <motion.h2
          className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2.4rem] xl:text-[2.8rem] font-bold tracking-[-0.01em] leading-[1] select-none"
          style={{ color: p.textColor }}
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.25 + i * 0.02, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Divider between panels */}
      {pillar !== "durer" && (
        <div className="absolute top-0 right-0 bottom-0 w-px hidden md:block z-[4] pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 5%, rgba(0,0,0,0.08) 50%, transparent 95%)" }} />
      )}

      {/* Clickable link */}
      <Link href={href} className="absolute inset-0 z-[5]" aria-label={title} />
    </motion.div>
  );
}
