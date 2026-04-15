"use client";

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TriptychCardProps {
  pillar: "fabriquer" | "proteger" | "durer";
  title: string;
  href: string;
  index: number;
}

const config = {
  fabriquer: {
    panelSrc: "/images/hero/panel-fabriquer.jpg",
    objSrc: "/images/hero/obj-ingots.png",
    textColor: "#2a2a2e",
    glowColor: "rgba(255,248,240,0.35)",
    sweepColor: "rgba(255,255,255,0.12)",
    objWidth: 180,
    objHeight: 130,
    objBottom: "14%",
    objLeft: "12%",
  },
  proteger: {
    panelSrc: "/images/hero/panel-proteger.jpg",
    objSrc: "/images/hero/obj-layers.png",
    textColor: "#ffffff",
    glowColor: "rgba(120,180,255,0.2)",
    sweepColor: "rgba(180,220,255,0.1)",
    objWidth: 190,
    objHeight: 140,
    objBottom: "14%",
    objLeft: "50%",
  },
  durer: {
    panelSrc: "/images/hero/panel-durer.jpg",
    objSrc: "/images/hero/obj-cube.png",
    textColor: "#e0e0e4",
    glowColor: "rgba(200,200,220,0.12)",
    sweepColor: "rgba(255,255,255,0.06)",
    objWidth: 150,
    objHeight: 170,
    objBottom: "12%",
    objLeft: "50%",
  },
};

export function TriptychCard({ pillar, title, href, index }: TriptychCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const c = config[pillar];

  // Mouse tracking for glow + parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBg = useMotionTemplate`radial-gradient(600px circle at ${glowX}% ${glowY}%, ${c.glowColor} 0%, transparent 70%)`;

  const spr = { damping: 40, stiffness: 120 };
  const objX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), spr);
  const objY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-5, 5]), spr);

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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); mouseX.set(0); mouseY.set(0); }}
      className="relative h-full cursor-pointer overflow-hidden group"
    >
      {/* ═══ PANEL BACKGROUND — DA image, perfect quality ═══ */}
      <Image
        src={c.panelSrc}
        alt=""
        fill
        className="object-cover"
        sizes="33vw"
        priority={index === 0}
        quality={90}
      />

      {/* ═══ LIVING LIGHT — animated glow orbs "breathing" ═══ */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{
          width: "130%", height: "50%", top: "10%", left: "-15%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${c.sweepColor} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-5%", "12%", "-8%", "6%", "-5%"],
          y: ["-3%", "8%", "12%", "3%", "-3%"],
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{
          width: "80%", height: "40%", right: "-10%", bottom: "15%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${c.sweepColor} 0%, transparent 65%)`,
          filter: "blur(50px)",
        }}
        animate={{
          x: ["5%", "-10%", "8%", "-5%", "5%"],
          opacity: [0.5, 1, 0.6, 0.8, 0.5],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ═══ MOUSE GLOW ═══ */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: glowBg }}
      />

      {/* ═══ LIGHT SWEEP — slow diagonal glint across the panel ═══ */}
      <motion.div
        className="absolute pointer-events-none z-[3]"
        style={{
          width: "30%", height: "200%", top: "-50%",
          background: `linear-gradient(105deg, transparent 40%, ${c.sweepColor} 48%, rgba(255,255,255,0.08) 50%, ${c.sweepColor} 52%, transparent 60%)`,
          filter: "blur(8px)",
        }}
        animate={{ left: ["-40%", "140%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 6 }}
      />

      {/* ═══ TITLE — web text with character animation ═══ */}
      <div className="absolute z-[5] px-8 sm:px-10 lg:px-12" style={{ top: "32%", transform: "translateY(-50%)" }}>
        <motion.h2
          className="text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] xl:text-[3rem] font-bold tracking-[-0.01em] leading-[1] select-none"
          style={{ color: c.textColor }}
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.3 + i * 0.025, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* ═══ 3D OBJECT — from DA, with parallax + float + hover glow ═══ */}
      <motion.div
        className="absolute z-[4]"
        style={{
          bottom: c.objBottom,
          left: pillar === "fabriquer" ? c.objLeft : undefined,
          right: undefined,
          x: pillar !== "fabriquer" ? "-50%" : undefined,
          width: c.objWidth,
          height: c.objHeight,
        }}
        animate={isHovered ? { scale: 1.05, y: -6 } : { scale: 1, y: [0, -4, 0] }}
        transition={
          isHovered
            ? { type: "spring", damping: 20, stiffness: 120 }
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <motion.div style={{ x: objX, y: objY }} className="w-full h-full relative">
          <Image
            src={c.objSrc}
            alt={title}
            fill
            className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            sizes="300px"
          />
          {/* Hover glow around object */}
          <motion.div
            className="absolute inset-[-20%] rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(ellipse, ${c.glowColor} 0%, transparent 60%)`,
              filter: "blur(20px)",
            }}
            animate={isHovered ? { opacity: 0.8, scale: 1.1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* ═══ PANEL DIVIDER ═══ */}
      {pillar !== "durer" && (
        <div className="absolute top-0 right-0 bottom-0 w-[1px] hidden md:block pointer-events-none z-[6]"
          style={{ background: "linear-gradient(180deg, transparent 5%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.08) 70%, transparent 95%)" }} />
      )}

      {/* Link overlay */}
      <Link href={href} className="absolute inset-0 z-[7]" aria-label={title} />
    </motion.div>
  );
}
