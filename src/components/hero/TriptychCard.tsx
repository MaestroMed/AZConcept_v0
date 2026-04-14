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
    // Beige chaud lumineux avec nuances — digital 3.0
    bgFrom: "#e8e2d8",
    bgMid: "#ddd6ca",
    bgTo: "#cec6b8",
    textColor: "#2a2a2e",
    glowColor: "rgba(255,245,230,0.3)",
    // Reflets animés
    shimmer1: "rgba(255,255,255,0.08)",
    shimmer2: "rgba(255,248,235,0.06)",
  },
  proteger: {
    // Bleu AZ Construction digital — pas un bleu fade
    bgFrom: "#3a6fd8",
    bgMid: "#2e5ab8",
    bgTo: "#1e3a8a",
    textColor: "#ffffff",
    glowColor: "rgba(100,180,255,0.15)",
    shimmer1: "rgba(120,200,255,0.1)",
    shimmer2: "rgba(80,160,255,0.07)",
  },
  durer: {
    // Charcoal noble — pas noir mort, avec nuances chaudes
    bgFrom: "#3a3a40",
    bgMid: "#2e2e36",
    bgTo: "#1e1e24",
    textColor: "#e0e0e4",
    glowColor: "rgba(200,200,220,0.08)",
    shimmer1: "rgba(255,255,255,0.04)",
    shimmer2: "rgba(200,200,220,0.03)",
  },
};

export function TriptychCard({ pillar, title, href, index }: TriptychCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const c = config[pillar];

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBg = useMotionTemplate`radial-gradient(500px circle at ${glowX}% ${glowY}%, ${c.glowColor} 0%, transparent 70%)`;

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
      style={{
        background: `linear-gradient(175deg, ${c.bgFrom} 0%, ${c.bgMid} 45%, ${c.bgTo} 100%)`,
      }}
    >
      {/* ═══ PAPER TEXTURE ═══ */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='6' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)'/%3E%3C/svg%3E")`, backgroundSize: "280px 280px" }} />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-soft-light pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='u'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='4' seed='11' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23u)'/%3E%3C/svg%3E")`, backgroundSize: "180px 180px" }} />

      {/* ═══ LIVING LIGHT — reflets dynamiques "respiration" ═══ */}
      {/* Grand orbe lumineux qui se déplace lentement */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "120%",
          height: "60%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${c.shimmer1} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-10%", "15%", "-5%", "10%", "-10%"],
          y: ["-5%", "10%", "15%", "5%", "-5%"],
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Second orbe — plus petit, rythme différent */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "80%",
          height: "40%",
          right: "-20%",
          bottom: "10%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${c.shimmer2} 0%, transparent 65%)`,
          filter: "blur(50px)",
        }}
        animate={{
          x: ["5%", "-15%", "10%", "-8%", "5%"],
          y: ["5%", "-10%", "8%", "-5%", "5%"],
          opacity: [0.6, 1, 0.7, 0.9, 0.6],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Troisième orbe — accent lumineux subtil */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "50%",
          height: "50%",
          left: "20%",
          top: "30%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${c.shimmer1} 0%, transparent 60%)`,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [0.8, 1.2, 0.9, 1.1, 0.8],
          opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 40%, rgba(0,0,0,0.04) 100%)" }} />

      {/* Mouse glow */}
      <motion.div className="absolute inset-0 pointer-events-none z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: glowBg }} />

      {/* Panel divider */}
      {pillar !== "durer" && (
        <div className="absolute top-0 right-0 bottom-0 w-[2px] hidden md:block pointer-events-none"
          style={{ background: `linear-gradient(180deg, transparent 5%, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.06) 70%, transparent 95%)` }} />
      )}

      {/* ═══ CONTENT ═══ */}
      <Link href={href} className="relative z-10 flex flex-col h-full px-8 sm:px-10 lg:px-12 group">
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
