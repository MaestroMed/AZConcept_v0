/**
 * Registry that maps gamme / modele slugs to the higgsfield-generated assets.
 *
 * Two modes per asset:
 *   - Remote (current): `path` is the Higgsfield CDN URL. Served through
 *     next/image remote optimization (see images.remotePatterns in
 *     next.config.ts). Zero repo weight, live immediately.
 *   - Local (recommended long-term): run `bash scripts/fetch-generated.sh`
 *     on a machine with open network, commit the files under
 *     /public/images/generated/, then replace `path` with the local path.
 *
 * `ready: false` entries are assets not yet generated — the daily Higgsfield
 * limit is 5 generations (grace period). Batch 1: 2026-07-22 (hero still,
 * hero video, aura, forge, secu-plus). Batch 2: 2026-07-25 (atelier,
 * jansen-design, firewall, technique, airflow). Remaining: decor, facade
 * + 6 ambiance. Prompts in src/data/generation-prompts.ts (see PROMPTS.md).
 * Re-run the generations, paste the CDN URLs here, flip ready:true.
 */

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3CMRVYJQZdncYM0yA1qLrI0bRyR";

interface GeneratedAsset {
  /** Local path under /public OR absolute CDN URL. */
  path: string;
  /** Whether the asset exists and should be used. */
  ready: boolean;
}

export const GENERATED = {
  hero: {
    still: {
      path: `${CDN}/hf_20260722_133713_37f2877c-538e-4892-908e-d8db7f78ef32.png`,
      ready: true,
    } as GeneratedAsset,
    video: {
      path: `${CDN}/hf_20260722_133708_69c6bc53-76b5-41e4-bef6-9498a1b9e4f1.mp4`,
      ready: true,
    } as GeneratedAsset,
  },
  gammeHero: {
    aura: {
      path: `${CDN}/hf_20260722_133752_05a1441a-d332-4718-a1b0-48257c7894a9.png`,
      ready: true,
    } as GeneratedAsset,
    forge: {
      path: `${CDN}/hf_20260722_133758_e7109442-ab53-49f5-bb71-1ff4b6184808.png`,
      ready: true,
    } as GeneratedAsset,
    "secu-plus": {
      path: `${CDN}/hf_20260722_133805_5cdd9094-e061-4706-905f-76001cfc5395.png`,
      ready: true,
    } as GeneratedAsset,
    atelier: {
      path: `${CDN}/hf_20260725_004937_cbac8e0e-4c18-40fa-9509-b3531bb3176a.png`,
      ready: true,
    } as GeneratedAsset,
    "jansen-design": {
      path: `${CDN}/hf_20260725_005122_5cde2c7f-7785-438f-ba57-b23ee13593b6.png`,
      ready: true,
    } as GeneratedAsset,
    firewall: {
      path: `${CDN}/hf_20260725_005235_22ad397d-185c-4773-9c27-8c2941938b97.png`,
      ready: true,
    } as GeneratedAsset,
    technique: {
      path: `${CDN}/hf_20260725_011215_a9313e7f-e58e-470a-b197-c4ca661994be.png`,
      ready: true,
    } as GeneratedAsset,
    airflow: {
      path: `${CDN}/hf_20260725_011231_72d4f14c-b0b6-4ded-9ba8-e43c05d9a9da.png`,
      ready: true,
    } as GeneratedAsset,
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
