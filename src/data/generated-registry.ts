/**
 * Registry that maps gamme / modele slugs to the higgsfield-generated assets
 * the team intends to drop into /public/images/generated/.
 *
 * When the corresponding file lands in /public/images/generated/, the
 * `prefer()` helper below routes the site to it. Until then we fall back
 * to the existing /public/images/realisations|ambiance|gammes/* assets.
 *
 * Important: Next.js Image needs paths to exist at build time. We cannot
 * detect file presence in the bundle, so we hard-code the *intended* paths
 * here and the team flips the boolean once the file is uploaded.
 *
 * Workflow:
 *   1. Generate the asset on higgsfield (use PROMPTS.md).
 *   2. Save it under /public/images/generated/<path-from-this-registry>.
 *   3. Set the corresponding flag to `true` below — the site swaps in
 *      the new asset on next deploy.
 */

interface GeneratedAsset {
  /** Path under /public — must match what's stored on disk. */
  path: string;
  /** Whether the asset exists on disk and should be used. */
  ready: boolean;
}

export const GENERATED = {
  hero: {
    still: { path: "/images/generated/hero/master.jpg", ready: false } as GeneratedAsset,
    video: { path: "/images/generated/hero/master.mp4", ready: false } as GeneratedAsset,
  },
  gammeHero: {
    aura: { path: "/images/generated/gammes/aura-hero.jpg", ready: false } as GeneratedAsset,
    forge: { path: "/images/generated/gammes/forge-hero.jpg", ready: false } as GeneratedAsset,
    "secu-plus": { path: "/images/generated/gammes/secu-plus-hero.jpg", ready: false } as GeneratedAsset,
    atelier: { path: "/images/generated/gammes/atelier-hero.jpg", ready: false } as GeneratedAsset,
    "jansen-design": { path: "/images/generated/gammes/jansen-design-hero.jpg", ready: false } as GeneratedAsset,
    firewall: { path: "/images/generated/gammes/firewall-hero.jpg", ready: false } as GeneratedAsset,
    technique: { path: "/images/generated/gammes/technique-hero.jpg", ready: false } as GeneratedAsset,
    airflow: { path: "/images/generated/gammes/airflow-hero.jpg", ready: false } as GeneratedAsset,
    decor: { path: "/images/generated/gammes/decor-hero.jpg", ready: false } as GeneratedAsset,
    facade: { path: "/images/generated/gammes/facade-hero.jpg", ready: false } as GeneratedAsset,
  },
  ambiance: {
    workshop: { path: "/images/generated/ambiance/workshop.jpg", ready: false } as GeneratedAsset,
    welding: { path: "/images/generated/ambiance/welding.jpg", ready: false } as GeneratedAsset,
    "laser-cutting": { path: "/images/generated/ambiance/laser-cutting.jpg", ready: false } as GeneratedAsset,
    "pliage-cnc": { path: "/images/generated/ambiance/pliage-cnc.jpg", ready: false } as GeneratedAsset,
    "thermolaquage-cabin": { path: "/images/generated/ambiance/thermolaquage-cabin.jpg", ready: false } as GeneratedAsset,
    "stock-racks": { path: "/images/generated/ambiance/stock-racks.jpg", ready: false } as GeneratedAsset,
  },
} as const;

/** Return the generated path if ready, otherwise the fallback. */
export function prefer(generated: GeneratedAsset, fallback: string): string {
  return generated.ready ? generated.path : fallback;
}
