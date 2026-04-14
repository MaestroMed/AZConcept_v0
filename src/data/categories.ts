import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "garde-corps",
    slug: "garde-corps",
    name: "Garde-Corps",
    triptychPillar: "fabriquer",
    description:
      "Du minimalisme absolu a l'expression brute, nos garde-corps allient securite, design et savoir-faire metallier. 4 gammes pour chaque vision architecturale.",
    color: "#B8B8C8",
    gammeIds: ["aura", "forge", "secu-plus", "atelier"],
  },
  {
    id: "portes",
    slug: "portes",
    name: "Portes",
    triptychPillar: "proteger",
    description:
      "Portes d'entree design, portes coupe-feu architecturales, portes techniques — chaque ouverture est une promesse de protection et d'elegance.",
    color: "#1E3A8A",
    gammeIds: ["jansen-design", "firewall", "technique"],
  },
  {
    id: "grilles",
    slug: "grilles",
    name: "Grilles & Facades",
    triptychPillar: "durer",
    description:
      "Ventilation premium, decorations laser, habillages architecturaux — des ouvrages concus pour traverser le temps avec style.",
    color: "#1a1a2e",
    gammeIds: ["airflow", "decor", "facade"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
