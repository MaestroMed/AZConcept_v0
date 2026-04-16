"use client";

/**
 * AmbientBackground — editorial field behind the entire site.
 * Very quiet: warm ink base with a soft champagne halo and a deeper
 * steel vignette. No WebGL, no animation, no CPU cost.
 */
export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Deep ink base */}
      <div className="absolute inset-0 bg-ink" />

      {/* Warm champagne halo (top) */}
      <div
        className="absolute -top-[30vh] left-1/2 -translate-x-1/2 w-[120vw] h-[90vh] opacity-[0.22]"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 50%, rgba(201,163,92,0.35) 0%, rgba(201,163,92,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Cold steel pool (bottom-left) */}
      <div
        className="absolute -bottom-[25vh] -left-[20vw] w-[80vw] h-[70vh] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 50%, rgba(107,138,168,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Vignette edge */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 40%, rgba(10,10,13,0.75) 100%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 240 240%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
          backgroundSize: "240px 240px",
        }}
      />
    </div>
  );
}
