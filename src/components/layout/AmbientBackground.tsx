"use client";

import { MiniMeshGradient } from "@/components/hero/MiniMeshGradient";

/**
 * AmbientBackground — WebGL mesh gradient covering the ENTIRE site.
 * Fixed behind all content. The whole site breathes.
 */
export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <MiniMeshGradient color="#2a4a90" opacity={0.35} />
    </div>
  );
}
