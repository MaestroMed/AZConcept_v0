"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: "default" | "category" | "accent";
  color?: string;
  eyebrow?: string;
  index?: string;
  italicTail?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  color = "#c9a35c",
  eyebrow = "Collection",
  index,
  italicTail,
}: PageHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background — warm halo keyed on color */}
      <div
        className="absolute inset-x-0 top-0 h-[70vh] pointer-events-none opacity-[0.35]"
        style={{
          background: `radial-gradient(60% 80% at 50% 0%, ${color}30 0%, transparent 70%)`,
        }}
      />

      {/* Hairline top */}
      <div
        className="absolute top-[68px] left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}66, transparent)` }}
      />

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between"
        >
          <span className="eyebrow text-platinum">
            {index && (
              <>
                <span className="text-champagne">{index}</span>
                <span className="text-ash"> · </span>
              </>
            )}
            {eyebrow}
          </span>
          <span className="eyebrow text-ash">
            AZ / Concept — 2026
          </span>
        </motion.div>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent" />

        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-1.5 mt-8 font-mono text-[11px] tracking-[0.06em]"
          >
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={10} className="text-ash" />}
                {item.href ? (
                  <Link href={item.href} className="text-platinum hover:text-champagne transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-ivory">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h1 className="display text-ivory text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
            {title}
            {italicTail && (
              <>
                <br />
                <span className="display-italic font-light text-champagne">{italicTail}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="mt-8 max-w-2xl text-[16px] sm:text-[17px] leading-[1.6] text-pearl/85">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
