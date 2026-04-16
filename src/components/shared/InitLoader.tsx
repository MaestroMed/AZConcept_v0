"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Reads sessionStorage / reduced-motion as external stores to avoid setState-in-effect. */
function useShouldPlay(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => {
      try {
        if (sessionStorage.getItem("az-loader-played") === "1") return false;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
        return true;
      } catch {
        return false;
      }
    },
    () => false // server: never render loader during SSR
  );
}

/** First-visit editorial loader: plays once per session, ~850ms, champagne line. */
export function InitLoader() {
  const shouldPlay = useShouldPlay();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!shouldPlay) return;
    try { sessionStorage.setItem("az-loader-played", "1"); } catch {}
    const t = window.setTimeout(() => setDone(true), 850);
    return () => window.clearTimeout(t);
  }, [shouldPlay]);

  const visible = shouldPlay && !done;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] bg-ink flex items-center justify-center"
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <span className="display text-ivory text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em]">
              AZ<span className="display-italic text-champagne">concept</span>
              <span className="text-champagne">.</span>
            </span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="block h-px w-40 bg-champagne origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
