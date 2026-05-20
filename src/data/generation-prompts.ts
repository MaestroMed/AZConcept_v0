/**
 * Higgsfield generation prompt catalog.
 *
 * Usage: copy each prompt into higgsfield.ai
 *   - "image" prompts → gpt Image v2 model
 *   - "video" prompts → seedance 2 model
 *
 * Save outputs to public/images/generated/ following the suggested filename.
 * The site auto-picks up generated assets via src/data/assets.ts (next iteration:
 * src/data/assets.ts to be updated to prefer /images/generated/* when present).
 *
 * Common style anchors (paste at the START of every prompt):
 *   "Editorial luxury photography, French architectural metalwork by AZ Concept,
 *    Bruyères-sur-Oise atelier. Warm ink palette, deep obsidian background,
 *    champagne metallic accents, ivory off-white highlights. Cinematic
 *    lighting, anamorphic flare, 35mm film grain, Hasselblad H6D, shallow
 *    depth of field. Fraunces-era editorial mood — Architectural Digest,
 *    Dezeen, Wallpaper magazine style."
 *
 * Common negative anchors:
 *   "no people faces close-up, no logos, no text, no watermark, no oversaturated
 *    colors, no plastic, no cheap finish, no harsh shadows, no cluttered scene."
 *
 * Output specs:
 *   - hero stills:        2400×3000px (4:5)
 *   - landscape stills:   2400×1500px (8:5)
 *   - square stills:      2000×2000px (1:1)
 *   - hero videos:        1920×1080px, 6–8s, 30fps, MP4 H.264, no audio
 *   - product micro-loop: 1080×1350px (4:5), 3–4s, 30fps, MP4 H.264, no audio
 */

export const STYLE_ANCHOR = `Editorial luxury architectural photography, French metalwork atelier AZ Concept (Bruyères-sur-Oise). Warm ink palette: deep obsidian #0a0a0d background, champagne metallic #c9a35c accents, ivory off-white #f1ede4 highlights, cool steel #6b8aa8 shadows. Cinematic lighting, anamorphic flare, 35mm film grain, Hasselblad H6D-style. Architectural Digest / Dezeen / Wallpaper magazine mood.`;

export const NEGATIVE_ANCHOR = `no human faces, no logos, no text overlay, no watermark, no oversaturated colors, no plastic, no cheap finish, no harsh stage shadows, no cluttered prop staging.`;

export interface GenPrompt {
  /** Slug used to compose the saved filename in /public/images/generated/. */
  id: string;
  /** Filename to save the output under (relative to public/images/generated/). */
  out: string;
  /** "image" → gpt Image v2 ; "video" → seedance 2. */
  kind: "image" | "video";
  /** Target ratio for the operator UI. */
  ratio: string;
  /** Suggested duration in seconds (video only). */
  duration?: number;
  /** Free-form prompt body. STYLE_ANCHOR is prepended automatically by the helper. */
  prompt: string;
}

export const heroPrompts: GenPrompt[] = [
  {
    id: "hero-master-video",
    out: "hero/master.mp4",
    kind: "video",
    ratio: "16:9",
    duration: 8,
    prompt:
      "Slow-pan camera moves laterally across a finished metallerie workshop interior at dusk. Foreground: a black steel staircase with thin verticals, machined edges, micro-bevels catching golden champagne light. Mid-ground: a glass garde-corps panel reflecting the warm ambient mesh. Background: tall pivot door (Jansen-style steel profile) silhouetted against a sunset-orange skylight wash. Camera glides at hip height, dolly motion, very slight handheld breathing. Particles of dust floating in light beams. No people. Architectural metal as protagonist. Closing frame: wide ambient shot with deep negative space on the right (intended for headline overlay).",
  },
  {
    id: "hero-master-still",
    out: "hero/master.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "Vertical hero still: a single monolithic metal staircase rising in a top-lit atelier. Steel treads in matte black, soldered joints visible as a design feature, champagne-toned brass handrail catching a single strong key light. Background: blurred warehouse depth with metal stock racks. Foreground: a champagne dust column. Composition: rule of thirds, vertical drama, anamorphic flare bottom-right.",
  },
];

export const gammePrompts: GenPrompt[] = [
  /* ---------- GARDE-CORPS ---------- */
  {
    id: "aura-hero",
    out: "gammes/aura-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "Floor-to-ceiling glass garde-corps (AURA Glass), invisible fixings, ultra-thin stainless steel sabots embedded at floor. Setting: minimalist penthouse terrace overlooking Paris, sunset. Almost zero metal visible — the garde-corps disappears, only a horizontal shimmer reveals the edge of the glass. Architect target imagery, Snøhetta / Studio David Thulstrup mood.",
  },
  {
    id: "aura-detail",
    out: "gammes/aura-detail.jpg",
    kind: "image",
    ratio: "1:1",
    prompt:
      "Macro close-up of a polished stainless steel sabot fitting (encastré) embedded in pale stone floor, gripping a 22mm laminated safety glass panel. Studio lighting, ivory background, dust speck floating. Tilt-shift compression. Industrial design catalog feel.",
  },
  {
    id: "forge-hero",
    out: "gammes/forge-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "A monumental black steel garde-corps (FORGE Noir) along a polished concrete mezzanine, 12x12mm vertical bars at irregular cadence, raw welded joints proudly visible, RAL 9005 deep matte black. Behind: cathedral-height loft with skylight wash. Furniture: leather Florence Knoll sofa, brass floor lamp. Industrial luxury mood.",
  },
  {
    id: "forge-corten-detail",
    out: "gammes/forge-corten-detail.jpg",
    kind: "image",
    ratio: "1:1",
    prompt:
      "Macro detail of laser-cut corten steel panel with organic leaf motif perforation, natural patina with rust orange / umber tones, raked light revealing micro-pitting and the metal's evolved surface. Architectural Patina collection swatch close-up.",
  },
  {
    id: "secu-plus-hero",
    out: "gammes/secu-plus-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "Modern collective housing balcony with perforated steel garde-corps (SECU+ Collectif), anti-climb design, thermolaqué deep anthracite RAL 7016. View through panel reveals city skyline. Sunlight casting graphic shadow patterns through perforations onto interior tile. Daylight, calm.",
  },
  {
    id: "atelier-hero",
    out: "gammes/atelier-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "ATELIER Classic verrière-style garde-corps along open-plan loft mezzanine: black steel grid with clear glazing, viewed from below at a Haussmann staircase. Warm parquet, original moulures visible. Mood: Studio KO meets Joseph Dirand. Architects: Pierre Yovanovitch / Studioilse reference.",
  },

  /* ---------- PORTES ---------- */
  {
    id: "jansen-design-hero",
    out: "gammes/jansen-design-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "Monumental Jansen-style pivot door, 3 meters tall, ultra-thin steel profile (40mm), full-height clear safety glass, brass hardware. Setting: minimalist gallery entrance, white-rendered walls, oak floor, single oversized brass pendant. Camera at low angle to emphasize verticality.",
  },
  {
    id: "firewall-hero",
    out: "gammes/firewall-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "FIREWALL 60 Bois-Metal fire-rated door (EI60), exterior shows premium oak wood paneling with chamfered edges, only a small hinge visible. Surroundings: contemporary office hallway, raw concrete + curated art photography. The viewer can not tell it's a fire-rated door — that's the point.",
  },
  {
    id: "technique-hero",
    out: "gammes/technique-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "TECH Acoustique soundproof technical door in deep anthracite thermolaque finish, double hinge, mid-century cylindrical brass handle. Setting: hotel basement corridor with warm sconce lighting, polished concrete floor.",
  },

  /* ---------- GRILLES & FAÇADES ---------- */
  {
    id: "airflow-hero",
    out: "gammes/airflow-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "AIRFLOW Acoustic ventilation grille integrated into a contemporary office facade, horizontal aerodynamic louvers with acoustic absorbent core invisible behind. Setting: dusk, exterior view of an HQ building, glass curtain wall plus stone cladding. The grille reads as a clean horizontal band.",
  },
  {
    id: "decor-hero",
    out: "gammes/decor-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "DECOR laser-cut decorative facade panel with abstract organic motif, in thermolaqué bronze finish (custom RAL 1036). Setting: boutique hotel entrance courtyard. Late golden hour, light filtering through the panel onto courtyard floor casting biomorphic shadows.",
  },
  {
    id: "facade-hero",
    out: "gammes/facade-hero.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "FACADE wood + metal architectural cladding system on a contemporary apartment building, vertical oak slats over a black steel substructure with hidden integrated garde-corps. Setting: morning daylight, foliage in foreground. Photographic style: Iwan Baan reference.",
  },
];

export const ambiancePrompts: GenPrompt[] = [
  {
    id: "atelier-workshop",
    out: "ambiance/workshop.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "Wide interior of a 1 800 m² metallerie workshop. Polished concrete floor, gantry crane overhead, laser cutting station in mid-ground, stock racks of steel sheets and rolled profiles along left wall, sparks coming from a TIG welding station deep right. Late afternoon sun cutting through high industrial windows. No human faces, only gloved hands at distance.",
  },
  {
    id: "atelier-welding",
    out: "ambiance/welding.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "Macro close-up of TIG welding in progress: blue arc light reflecting off ivory protective gear, tiny sparks frozen mid-air, dark metal substrate in shallow depth of field. Mood: dangerous beauty, precision under fire.",
  },
  {
    id: "atelier-laser",
    out: "ambiance/laser-cutting.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "Industrial laser cutter head moving across a 3mm steel plate, throwing a green-orange glow, smoke curling up softly. Composition: dramatic top-down framing. Calm, controlled, surgical.",
  },
  {
    id: "atelier-pliage",
    out: "ambiance/pliage-cnc.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "CNC press brake mid-bend on a 4mm steel sheet, hydraulic arm descending, raked side light, anonymous gloved hand stabilizing edge. Atmosphere: precision, weight, controlled force.",
  },
  {
    id: "atelier-thermolaquage",
    out: "ambiance/thermolaquage-cabin.jpg",
    kind: "image",
    ratio: "4:5",
    prompt:
      "Inside a 7-meter thermolaquage cabin: electrostatic powder coating in progress on a long steel garde-corps, fine champagne-gold powder cloud, dramatic raked lighting. Cabin walls in clean stainless steel. No operators visible, only the workpiece.",
  },
  {
    id: "atelier-storage",
    out: "ambiance/stock-racks.jpg",
    kind: "image",
    ratio: "8:5",
    prompt:
      "Long landscape shot of vertical stock racks holding rolled steel profiles, tubes, sheets — color-coded by material grade. Quiet warehouse light, dust motes in the air. The geometry of stored material reads like sculpture.",
  },
];

export const modelePrompts: GenPrompt[] = [
  // Sample subset — extend to all 44 modèles as needed.
  {
    id: "aura-glass-hero",
    out: "modeles/aura-glass.jpg",
    kind: "image",
    ratio: "16:10",
    prompt:
      "AURA Glass garde-corps panel, edge-to-edge laminated glass with no visible posts, viewed obliquely along a terrace edge with city below. Late afternoon sun catching the laminated edge as a champagne glow line.",
  },
  {
    id: "forge-noir-hero",
    out: "modeles/forge-noir.jpg",
    kind: "image",
    ratio: "16:10",
    prompt:
      "FORGE Noir garde-corps detail: 12x12mm vertical bars with raw visible welds, RAL 9005 deep matte black, mounted along a polished concrete mezzanine. Hand of architect (gloved, anonymous) brushing fingers along the top rail.",
  },
  {
    id: "jansen-pivot-hero",
    out: "modeles/jansen-pivot.jpg",
    kind: "image",
    ratio: "16:10",
    prompt:
      "JANSEN Pivot door at 3-meter height, swinging open at 45° angle, captured mid-motion with slight blur on the door edge. Brass handle. Architect entrance feel. Reference: Tom Kundig hardware design.",
  },
  {
    id: "decor-laser-hero",
    out: "modeles/decor-laser.jpg",
    kind: "image",
    ratio: "16:10",
    prompt:
      "DECOR laser-cut panel close-up — Art Deco geometric motif perforation in brass-toned thermolaqué finish. Light passing through reveals intricate shadow play on a smooth wall behind. Tactile, premium.",
  },
];

export const productMicroLoops: GenPrompt[] = [
  {
    id: "spec-detail-loop",
    out: "video/spec-rotate.mp4",
    kind: "video",
    ratio: "4:5",
    duration: 4,
    prompt:
      "Slow 30° rotation around a polished AURA Glass sabot fixing, top-down to oblique. Studio lighting on ivory backdrop. Loop seamlessly. Industrial design catalog feel.",
  },
  {
    id: "thermolaquage-loop",
    out: "video/thermolaquage-cabin.mp4",
    kind: "video",
    ratio: "16:9",
    duration: 6,
    prompt:
      "Tracking shot inside the 7m thermolaquage cabin: powder cloud drifting past camera, raking light, glimpse of a long steel garde-corps being coated. End on a wide shot of the cabin's polished interior. No audio.",
  },
];

export const ALL_PROMPTS: GenPrompt[] = [
  ...heroPrompts,
  ...gammePrompts,
  ...ambiancePrompts,
  ...modelePrompts,
  ...productMicroLoops,
];
