"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Fixed-left champagne pastille showing a roman numeral as the user scrolls,
 * based on how far down the page they are. Only appears past 15% scroll.
 * Hidden on mobile (< 1024px) to preserve space.
 */
const ROMAN = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];

export function ChapterIndicator() {
  const [chapter, setChapter] = useState<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (max <= 0) return setChapter(null);
      const p = h.scrollTop / max;
      if (p < 0.12) return setChapter(null);
      const idx = Math.min(ROMAN.length - 1, Math.floor(p * ROMAN.length));
      setChapter(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block pointer-events-none">
      <AnimatePresence mode="wait">
        {chapter !== null && (
          <motion.div
            key={chapter}
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-champagne [writing-mode:vertical-rl] rotate-180">
              Chapitre
            </span>
            <span className="display font-light text-champagne text-[26px] tabular-nums">
              {ROMAN[chapter]}
            </span>
            <span className="h-10 w-px bg-gradient-to-b from-champagne/70 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
