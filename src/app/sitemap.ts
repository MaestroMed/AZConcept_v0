import type { MetadataRoute } from "next";
import { getAllGammes } from "@/data/gammes";
import { categories } from "@/data/categories";

const BASE = "https://azconcept.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const gammes = getAllGammes();
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/thermolaquage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/realisations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/devis`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/cgv`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/${cat.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const gammePages: MetadataRoute.Sitemap = gammes.map((g) => ({
    url: `${BASE}/${g.categoryId}/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const modelePages: MetadataRoute.Sitemap = gammes.flatMap((g) =>
    g.modeles.map((m) => ({
      url: `${BASE}/${g.categoryId}/${g.slug}/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  );

  return [...staticPages, ...categoryPages, ...gammePages, ...modelePages];
}
