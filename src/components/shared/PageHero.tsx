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
  accentColor?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  accentColor,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface-elevated overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--surface-elevated)_70%)]" />

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-sm mb-8"
          >
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight size={14} className="text-text-muted" />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-text-muted">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-primary"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg sm:text-xl text-text-secondary max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Accent line */}
        {accentColor && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 w-20 h-[3px] origin-left"
            style={{ backgroundColor: accentColor }}
          />
        )}
      </div>
    </section>
  );
}
