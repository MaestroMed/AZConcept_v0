"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem { label: string; href?: string; }

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  accentColor?: string;
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Subtle gradient top */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(65,105,225,0.03) 0%, transparent 60%)" }} />

      <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-[12px] mb-8"
          >
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={11} className="text-text-muted/40" />}
                {item.href ? (
                  <Link href={item.href} className="text-text-muted hover:text-text-primary transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-text-muted/60">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-[15px] text-text-secondary max-w-xl leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
