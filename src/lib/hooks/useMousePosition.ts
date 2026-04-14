"use client";

import { useCallback, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  isInside: boolean;
}

export function useMousePosition() {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isInside: false,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const normalizedX = (x / rect.width) * 2 - 1;
      const normalizedY = (y / rect.height) * 2 - 1;

      setPosition({ x, y, normalizedX, normalizedY, isInside: true });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setPosition((prev) => ({ ...prev, isInside: false }));
  }, []);

  return { ref, position, handleMouseMove, handleMouseLeave };
}
