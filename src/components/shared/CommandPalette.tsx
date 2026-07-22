"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { getAllGammes } from "@/data/gammes";
import { categories } from "@/data/categories";
import { useBodyLock } from "@/lib/hooks/useBodyLock";

interface Entry {
  label: string;
  sub?: string;
  href: string;
  group: "Pages" | "Gammes" | "Modèles";
}

function buildIndex(): Entry[] {
  const pages: Entry[] = [
    { label: "Accueil", href: "/", group: "Pages" },
    { label: "Garde-Corps", sub: "4 gammes", href: "/garde-corps", group: "Pages" },
    { label: "Portes", sub: "3 gammes", href: "/portes", group: "Pages" },
    { label: "Grilles & Façades", sub: "3 gammes", href: "/grilles", group: "Pages" },
    { label: "Thermolaquage", sub: "200+ RAL · Adaptacolor", href: "/thermolaquage", group: "Pages" },
    { label: "Réalisations", sub: "Portfolio", href: "/realisations", group: "Pages" },
    { label: "À propos", sub: "L’atelier depuis 2018", href: "/a-propos", group: "Pages" },
    { label: "Contact", href: "/contact", group: "Pages" },
    { label: "Demander un devis", sub: "Réponse sous 48 h", href: "/devis", group: "Pages" },
  ];
  const gammes: Entry[] = [];
  const modeles: Entry[] = [];
  for (const g of getAllGammes()) {
    const cat = categories.find((c) => c.id === g.categoryId);
    if (!cat) continue;
    gammes.push({ label: g.name, sub: g.tagline, href: `/${cat.slug}/${g.slug}`, group: "Gammes" });
    for (const m of g.modeles) {
      modeles.push({
        label: m.name,
        sub: m.tagline,
        href: `/${cat.slug}/${g.slug}/${m.slug}`,
        group: "Modèles",
      });
    }
  }
  return [...pages, ...gammes, ...modeles];
}

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

const GROUPS: Entry["group"][] = ["Pages", "Gammes", "Modèles"];

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(() => buildIndex(), []);

  useBodyLock(true);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    const list = q
      ? index.filter((e) => normalize(`${e.label} ${e.sub ?? ""}`).includes(q))
      : index.filter((e) => e.group !== "Modèles");
    return list.slice(0, 12);
  }, [index, query]);

  // Grouped view with stable flat indices (results are already in group order).
  const grouped = useMemo(() => {
    let i = 0;
    return GROUPS.map((group) => ({
      group,
      items: results.filter((r) => r.group === group).map((entry) => ({ entry, idx: i++ })),
    })).filter((g) => g.items.length > 0);
  }, [results]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter" && results[active]) {
        onClose();
        router.push(results[active].href);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, results, active, router]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[85] bg-ink/80 backdrop-blur-md flex items-start justify-center pt-[14vh] px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
    >
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl overflow-hidden rounded-[4px] border border-ivory/12 bg-obsidian shadow-[0_32px_80px_-24px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 border-b border-ivory/8">
          <Search size={15} className="text-champagne shrink-0" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Chercher une gamme, un modèle, une page…"
            aria-label="Rechercher sur le site"
            className="w-full bg-transparent py-4 text-[15px] text-ivory placeholder:text-ash focus:outline-none"
          />
          <kbd className="hidden sm:inline font-mono text-[10px] text-ash border border-ivory/12 rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[46vh] overflow-y-auto py-2" role="listbox" aria-label="Résultats">
          {results.length === 0 && (
            <p className="px-5 py-8 text-center display-italic text-ivory/50 text-[17px]">
              Aucun résultat pour «&nbsp;{query}&nbsp;».
            </p>
          )}
          {grouped.map(({ group, items }) => (
            <div key={group} className="mb-1">
              <p className="px-5 pt-3 pb-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ash">
                {group}
              </p>
              {items.map(({ entry, idx }) => {
                const isActive = idx === active;
                return (
                  <button
                    key={entry.href}
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActive(idx)}
                    onClick={() => {
                      onClose();
                      router.push(entry.href);
                    }}
                    className={`w-full flex items-center justify-between gap-4 px-5 py-2.5 text-left transition-colors ${
                      isActive ? "bg-ivory/[0.05]" : ""
                    }`}
                  >
                    <span className="min-w-0">
                      <span className={`block text-[14px] leading-tight truncate ${isActive ? "text-champagne" : "text-ivory"}`}>
                        {entry.label}
                      </span>
                      {entry.sub && (
                        <span className="block text-[11.5px] text-platinum truncate mt-0.5">{entry.sub}</span>
                      )}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className={`shrink-0 transition-opacity ${isActive ? "opacity-100 text-champagne" : "opacity-0"}`}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-2.5 border-t border-ivory/8">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ash">
            ↑↓ naviguer · ⏎ ouvrir
          </span>
          <span className="font-mono text-[9.5px] tabular-nums text-ash">
            {results.length} résultat{results.length > 1 ? "s" : ""}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
