export interface Modele {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specs?: Record<string, string>;
  icon?: string;
}

export interface Gamme {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  tagline: string;
  description: string;
  features: string[];
  accentColor: string;
  modeles: Modele[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  triptychPillar: "fabriquer" | "proteger" | "durer";
  description: string;
  color: string;
  gammeIds: string[];
}

export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Partner {
  name: string;
  logo?: string;
}

export interface Realisation {
  id: string;
  title: string;
  category: string;
  gamme: string;
  description: string;
  location: string;
  year: number;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}
