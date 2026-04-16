import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { name: "Accueil", href: "/" },
  {
    name: "Garde-Corps",
    href: "/garde-corps",
    children: [
      { name: "AURA", href: "/garde-corps/aura" },
      { name: "FORGE", href: "/garde-corps/forge" },
      { name: "SECU+", href: "/garde-corps/secu-plus" },
      { name: "ATELIER", href: "/garde-corps/atelier" },
    ],
  },
  {
    name: "Portes",
    href: "/portes",
    children: [
      { name: "JANSEN DESIGN", href: "/portes/jansen-design" },
      { name: "FIREWALL", href: "/portes/firewall" },
      { name: "TECHNIQUE", href: "/portes/technique" },
    ],
  },
  {
    name: "Grilles & Façades",
    href: "/grilles",
    children: [
      { name: "AIRFLOW", href: "/grilles/airflow" },
      { name: "DÉCOR", href: "/grilles/decor" },
      { name: "FAÇADE", href: "/grilles/facade" },
    ],
  },
  { name: "Thermolaquage", href: "/thermolaquage" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];
