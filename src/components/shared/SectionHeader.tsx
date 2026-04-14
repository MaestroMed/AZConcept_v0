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

export function SectionHeader({
  title,
  subtitle,
  light = false,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-surface" : "text-text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg sm:text-xl max-w-2xl",
            centered && "mx-auto",
            light ? "text-surface/70" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
