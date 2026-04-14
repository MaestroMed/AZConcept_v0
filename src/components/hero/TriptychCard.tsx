"use client";

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import { SteelIngot } from "./SteelIngot";
import { CoatingLayers } from "./CoatingLayers";
import { DarkCube } from "./DarkCube";

interface TriptychCardProps {
  pillar: "fabriquer" | "proteger" | "durer";
  title: string;
  href: string;
  index: number;
}

const config = {
  fabriquer: {
    bgFrom: "#d6d4d0",
    bgTo: "#b8b4ae",
    textColor: "#333338",
    glowColor: "rgba(255,255,255,0.2)",
  },
  proteger: {
    bgFrom: "#5a78b0",
    bgTo: "#384e80",
    textColor: "#ffffff",
    glowColor: "rgba(160,200,255,0.12)",
  },
  durer: {
    bgFrom: "#363638",
    bgTo: "#1c1c20",
    textColor: "#c8c8cc",
    glowColor: "rgba(180,180,200,0.08)",
  },
};

export function TriptychCard({ pillar, title, href, index }: TriptychCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const c = config[pillar];

  // Mouse glow
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBg = useMotionTemplate`radial-gradient(500px circle at ${glowX}% ${glowY}%, ${c.glowColor} 0%, transparent 70%)`;

  // Mouse parallax for the 3D object
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spr = { damping: 40, stiffness: 150 };
  const px = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), spr);
  const py = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), spr);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const r = cardRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width - 0.5);
      mouseY.set((e.clientY - r.top) / r.height - 0.5);
      glowX.set(((e.clientX - r.left) / r.width) * 100);
      glowY.set(((e.clientY - r.top) / r.height) * 100);
    },
    [mouseX, mouseY, glowX, glowY]
  );

  const handleClick = useCallback(() => {
    if (isClicked) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2500);
  }, [isClicked]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); mouseX.set(0); mouseY.set(0); }}
      onClick={handleClick}
      className="relative h-full cursor-pointer overflow-hidden"
      style={{ background: `linear-gradient(175deg, ${c.bgFrom} 0%, ${c.bgTo} 100%)` }}
    >
      {/* ═══ PAPER TEXTURE — heavy grain like the DA ═══ */}
      <div className="absolute inset-0 opacity-[0.09] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='6' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)'/%3E%3C/svg%3E")`, backgroundSize: "280px 280px" }} />
      <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='u'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='4' seed='11' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23u)'/%3E%3C/svg%3E")`, backgroundSize: "180px 180px" }} />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='v'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.12' numOctaves='2' seed='7' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23v)'/%3E%3C/svg%3E")`, backgroundSize: "500px 500px", mixBlendMode: "multiply" }} />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(0,0,0,0.06) 100%)" }} />

      {/* Mouse glow */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: glowBg }} />

      {/* Panel divider — right edge shadow (except last panel) */}
      {pillar !== "durer" && (
        <div className="absolute top-0 right-0 bottom-0 w-[2px] hidden md:block pointer-events-none"
          style={{ background: `linear-gradient(180deg, transparent 5%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.1) 70%, transparent 95%)` }} />
      )}

      {/* ═══ CONTENT — just the title + the 3D object ═══ */}
      <Link href={href} className="relative z-10 flex flex-col h-full px-8 sm:px-10 lg:px-12 group">

        {/* Title — vertically centered in the upper half, matching DA */}
        <div className="flex-1 flex items-center pt-[10vh]">
          <motion.h2
            className="text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] xl:text-[3rem] font-bold tracking-[-0.01em] leading-[1] select-none"
            style={{ color: c.textColor }}
          >
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.3 + i * 0.025, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* 3D Object — bottom area with parallax */}
        <div className="flex items-end justify-center pb-[10vh] sm:pb-[12vh]">
          <motion.div style={{ x: px, y: py }}>
            {pillar === "fabriquer" && <SteelIngot isHovered={isHovered} isClicked={isClicked} />}
            {pillar === "proteger" && <CoatingLayers isHovered={isHovered} isClicked={isClicked} />}
            {pillar === "durer" && <DarkCube isHovered={isHovered} isClicked={isClicked} />}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
