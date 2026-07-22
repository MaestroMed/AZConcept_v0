"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Palette UI (and its search index) loads only on first open — zero cost on initial page load.
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });

/** Opens the palette from anywhere: window.dispatchEvent(new Event("az:palette")) */
export function CommandPaletteProvider() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("az:palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("az:palette", onOpen);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && <CommandPalette onClose={() => setOpen(false)} />}
    </AnimatePresence>
  );
}
