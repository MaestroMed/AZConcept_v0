"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "span";
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

/** Signature editorial reveal: soft rise + micro-blur lift. */
export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word stagger reveal for big editorial headings. */
export function WordReveal({
  text,
  className,
  delay = 0,
  italicIndexes = [],
}: {
  text: string;
  className?: string;
  delay?: number;
  italicIndexes?: number[];
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-baseline pr-[0.25em]">
          <motion.span
            className={`inline-block ${italicIndexes.includes(i) ? "italic" : ""}`}
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
