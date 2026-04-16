import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "garde-corps",
    slug: "garde-corps",
    name: "Garde-Corps",
    triptychPillar: "fabriquer",
    description:
      "Du minimalisme absolu à l\u2019expression brute, nos garde-corps allient sécurité, design et savoir-faire métallier. Quatre gammes pour chaque vision architecturale.",
    color: "#B8B8C8",
    gammeIds: ["aura", "forge", "secu-plus", "atelier"],
  },
  {
    id: "portes",
    slug: "portes",
    name: "Portes",
    triptychPillar: "proteger",
    description:
      "Portes d\u2019entrée design, portes coupe-feu architecturales, portes techniques — chaque ouverture est une promesse de protection et d\u2019élégance.",
    color: "#1E3A8A",
    gammeIds: ["jansen-design", "firewall", "technique"],
  },
  {
    id: "grilles",
    slug: "grilles",
    name: "Grilles & Façades",
    triptychPillar: "durer",
    description:
      "Ventilation premium, décorations laser, habillages architecturaux — des ouvrages conçus pour traverser le temps avec style.",
    color: "#1a1a2e",
    gammeIds: ["airflow", "decor", "facade"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
