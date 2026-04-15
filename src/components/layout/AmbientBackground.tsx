"use client";

/**
 * AmbientBackground — Subtle living atmosphere behind all pages.
 *
 * Three animated gradient orbs that slowly drift and breathe,
 * creating an organic, premium feel across the entire site.
 * Very low opacity — just enough to make flat surfaces feel alive.
 */
export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Warm beige orb — top left drift */}
      <div className="ambient-orb ambient-orb-1" />
      {/* Blue accent orb — center drift */}
      <div className="ambient-orb ambient-orb-2" />
      {/* Cool dark orb — bottom right drift */}
      <div className="ambient-orb ambient-orb-3" />
    </div>
  );
}
