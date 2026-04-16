"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

interface SectionHeaderProps {
  index?: string;          // "02 / 07"
  eyebrow?: string;        // "Philosophie"
  title: string;           // "Trois piliers."
  italicTail?: string;     // "Une obsession." — shown below in italic serif
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  cta?: React.ReactNode;
}

/**
 * Editorial section header — eyebrow + serif headline with optional
 * italic tail (like a book chapter title) and an optional secondary line.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  italicTail,
  subtitle,
  align = "left",
  className,
  cta,
}: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col gap-6 mb-14 sm:mb-18",
        align === "center" && "items-center text-center",
        cta && "sm:flex-row sm:items-end sm:justify-between sm:gap-12",
        className
      )}
    >
      <div className={cn(align === "center" && "mx-auto")}>
        {(eyebrow || index) && (
          <Eyebrow index={index} label={eyebrow ?? ""} className="mb-5" />
        )}

        <h2
          className={cn(
            "display text-ivory",
            "text-[clamp(2rem,5.5vw,4.2rem)]",
            "leading-[0.98] tracking-[-0.025em]"
          )}
        >
          {title}
          {italicTail && (
            <>
              <br />
              <span className="display-italic font-light text-platinum">
                {italicTail}
              </span>
            </>
          )}
        </h2>

        {subtitle && (
          <p
            className={cn(
              "mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-pearl/80 max-w-[46ch]",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {cta && <div className="shrink-0">{cta}</div>}
    </motion.header>
  );
}
