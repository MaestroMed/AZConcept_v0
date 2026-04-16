"use client";

import { useEffect } from "react";

/** Locks body scroll while `open` is true. Restores previous overflow on unmount. */
export function useBodyLock(open: boolean) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
}
