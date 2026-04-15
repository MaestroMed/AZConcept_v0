"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, light = false, centered = true, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-14", centered && "text-center", className)}
    >
      <h2 className={cn(
        "text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold tracking-[-0.02em] leading-[1.1]",
        light ? "text-surface" : "text-text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-3 text-[15px] max-w-xl leading-relaxed",
          centered && "mx-auto",
          light ? "text-surface/60" : "text-text-secondary"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
