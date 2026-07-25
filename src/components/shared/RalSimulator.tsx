"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { devisHrefForTeinte } from "@/lib/devis";

interface Teinte {
  hex: string;
  code: string;
  name: string;
  /** Darker shade for depth on the preview. */
  shade: string;
}

const TEINTES: Teinte[] = [
  { hex: "#252525", shade: "#161616", code: "RAL 9005", name: "Noir foncé" },
  { hex: "#2B2F35", shade: "#1c1f24", code: "RAL 7016", name: "Gris anthracite" },
  { hex: "#3E3E48", shade: "#2b2b33", code: "RAL 7043", name: "Gris signalisation B" },
  { hex: "#8A8880", shade: "#6b6963", code: "RAL 7035", name: "Gris clair" },
  { hex: "#9C1A1A", shade: "#701212", code: "RAL 3003", name: "Rouge rubis" },
  { hex: "#B85B3D", shade: "#8f452e", code: "RAL 8004", name: "Brun cuivré" },
  { hex: "#8C6B2E", shade: "#6a5022", code: "RAL 1036", name: "Or perlé" },
  { hex: "#C9A35C", shade: "#a58244", code: "AZ Signature", name: "Champagne AZ" },
  { hex: "#2E4A35", shade: "#203527", code: "RAL 6009", name: "Vert sapin" },
  { hex: "#1E2B40", shade: "#141d2c", code: "RAL 5011", name: "Bleu acier" },
  { hex: "#E8E3D6", shade: "#c9c4b6", code: "RAL 9010", name: "Blanc pur" },
  { hex: "#F5F1E8", shade: "#d9d4c8", code: "RAL 9001", name: "Blanc crème" },
];

/**
 * Interactive RAL simulator — pick a teinte, see it applied live on a
 * garde-corps elevation (inline SVG), request it via prefilled /devis.
 */
export function RalSimulator() {
  const [selected, setSelected] = useState<Teinte>(TEINTES[7]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Preview panel */}
      <motion.figure
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2px] border border-ivory/10 overflow-hidden"
      >
        <div
          className="relative aspect-[4/3] transition-colors duration-500"
          style={{ background: "linear-gradient(180deg, #d8d2c4 0%, #c4beb0 70%, #a8a294 100%)" }}
          aria-label={`Aperçu d'un garde-corps thermolaqué en ${selected.code} ${selected.name}`}
          role="img"
        >
          {/* Garde-corps elevation — colors follow the selected teinte */}
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
            {/* Floor line & slab */}
            <rect x="0" y="252" width="400" height="48" fill="#8f8a7c" />
            <rect x="0" y="248" width="400" height="6" fill="#7c7769" />
            {/* Handrail */}
            <rect x="24" y="92" width="352" height="11" rx="2" fill={selected.hex} style={{ transition: "fill .45s" }} />
            <rect x="24" y="100" width="352" height="3" fill={selected.shade} style={{ transition: "fill .45s" }} />
            {/* Posts */}
            {[36, 118, 200, 282, 364].map((x) => (
              <rect key={x} x={x - 4} y="96" width="8" height="156" fill={selected.hex} style={{ transition: "fill .45s" }} />
            ))}
            {/* Balusters */}
            {Array.from({ length: 22 }, (_, i) => 44 + i * 15).map((x) => (
              <rect key={x} x={x} y="108" width="3.5" height="142" fill={selected.shade} style={{ transition: "fill .45s" }} />
            ))}
            {/* Bottom rail */}
            <rect x="24" y="238" width="352" height="7" fill={selected.hex} style={{ transition: "fill .45s" }} />
            {/* Cast shadow */}
            <rect x="24" y="252" width="352" height="8" fill="#000" opacity="0.12" />
          </svg>
        </div>

        <figcaption className="flex items-center justify-between gap-4 px-5 py-4 bg-obsidian border-t border-ivory/8">
          <div className="flex items-center gap-3 min-w-0">
            <span
              aria-hidden
              className="h-7 w-7 rounded-full border border-ivory/15 shrink-0 transition-colors duration-500"
              style={{ backgroundColor: selected.hex }}
            />
            <div className="min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ivory truncate">
                {selected.code}
              </p>
              <p className="text-[11.5px] text-platinum truncate">{selected.name}</p>
            </div>
          </div>
          <Link
            href={devisHrefForTeinte(`${selected.code} (${selected.name})`)}
            className="shrink-0 inline-flex items-center gap-2 h-9 px-4 rounded-full bg-ivory text-ink text-[11.5px] font-medium hover:bg-champagne-soft transition-colors"
          >
            Demander cette teinte
            <ArrowRight size={12} aria-hidden />
          </Link>
        </figcaption>
      </motion.figure>

      {/* Swatch grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        role="radiogroup"
        aria-label="Choisir une teinte RAL"
        className="grid grid-cols-3 sm:grid-cols-4 gap-px bg-ivory/8 border border-ivory/8"
      >
        {TEINTES.map((t) => {
          const isActive = t.code === selected.code;
          return (
            <button
              key={t.code}
              role="radio"
              aria-checked={isActive}
              onClick={() => setSelected(t)}
              className={`bg-ink p-4 text-left transition-colors group ${isActive ? "bg-ivory/[0.04]" : "hover:bg-ivory/[0.02]"}`}
            >
              <span
                aria-hidden
                className={`block aspect-square rounded-[2px] mb-3 border transition-all ${
                  isActive ? "border-champagne shadow-[0_0_0_1px_var(--champagne)]" : "border-ivory/5"
                }`}
                style={{ backgroundColor: t.hex }}
              />
              <span
                className={`block font-mono text-[9.5px] uppercase tracking-[0.08em] transition-colors ${
                  isActive ? "text-champagne" : "text-platinum group-hover:text-ivory"
                }`}
              >
                {t.code}
              </span>
              <span className="block text-[10.5px] text-ash truncate">{t.name}</span>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
