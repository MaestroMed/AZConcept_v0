"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { MiniMeshGradient } from "@/components/hero/MiniMeshGradient";

interface BreadcrumbItem { label: string; href?: string; }

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: "default" | "category" | "accent";
  color?: string;
}

export function PageHero({ title, subtitle, breadcrumbs, variant = "default", color }: PageHeroProps) {
  // Pick gradient color based on variant
  const gradientColor = color || (variant === "category" ? "#3a64c0" : "#3a64c0");

  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-18 overflow-hidden">
      {/* Living mesh gradient background — unique per page */}
      <div className="absolute inset-0 z-0">
        <MiniMeshGradient color={gradientColor} opacity={0.4} />
      </div>

      {/* Fade to surface at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--surface) 100%)" }} />

      {/* Accent bar — top colored line */}
      {variant === "accent" && color && (
        <div className="absolute top-0 left-0 right-0 h-[2px] z-[2]"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      )}

      <div className="relative z-[3] max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {breadcrumbs && (
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-[12px] mb-6">
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={11} className="text-text-muted/40" />}
                {item.href
                  ? <Link href={item.href} className="text-text-muted hover:text-text-primary transition-colors">{item.label}</Link>
                  : <span className="text-text-muted/60">{item.label}</span>}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
            {title}
          </h1>
          {subtitle && <p className="mt-3 text-[15px] text-text-secondary max-w-xl leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
