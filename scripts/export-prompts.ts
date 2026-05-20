/**
 * Exports the higgsfield generation prompt catalog into a single
 * Markdown file that can be opened side-by-side with the higgsfield UI.
 *
 * Run with: npx tsx scripts/export-prompts.ts
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  STYLE_ANCHOR,
  NEGATIVE_ANCHOR,
  heroPrompts,
  gammePrompts,
  ambiancePrompts,
  modelePrompts,
  productMicroLoops,
  type GenPrompt,
} from "../src/data/generation-prompts";

function section(name: string, list: GenPrompt[]): string {
  let out = `\n\n## ${name}\n`;
  for (const p of list) {
    out += `\n### ${p.id} → \`public/images/generated/${p.out}\`\n`;
    out += `**Kind:** ${p.kind} · **Ratio:** ${p.ratio}${p.duration ? ` · **Duration:** ${p.duration}s` : ""}\n\n`;
    out += "```text\n";
    out += `${STYLE_ANCHOR}\n\n${p.prompt}\n\n— Negative —\n${NEGATIVE_ANCHOR}\n`;
    out += "```\n";
  }
  return out;
}

const md =
  `# AZ Concept — Higgsfield prompt catalog\n\n` +
  `Copy the block below the section header into higgsfield.ai.\n` +
  `Use **gpt Image v2** for image kinds, **seedance 2** for video kinds.\n` +
  `Save outputs to \`public/images/generated/\` with the indicated filename.\n` +
  `\n_Total prompts: ${heroPrompts.length + gammePrompts.length + ambiancePrompts.length + modelePrompts.length + productMicroLoops.length}_` +
  section("Hero (master assets)", heroPrompts) +
  section("Gammes (10)", gammePrompts) +
  section("Ambiance (atelier)", ambiancePrompts) +
  section("Modèles (selection)", modelePrompts) +
  section("Product micro-loops (video)", productMicroLoops);

const outPath = resolve(process.cwd(), "PROMPTS.md");
writeFileSync(outPath, md, "utf-8");
console.log(`✓ Wrote ${outPath}`);
