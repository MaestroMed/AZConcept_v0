"use client";

import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Magnetic hover wrapper — the element leans toward the cursor.
 * Desktop + hover-capable only; disabled on prefers-reduced-motion
 * (both handled inside useMagnetic).
 */
export function Magnetic({ children, strength = 0.22, className }: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>(strength);
  return (
    <div
      ref={ref}
      className={cn("inline-block will-change-transform transition-transform duration-200 ease-out", className)}
    >
      {children}
    </div>
  );
}
