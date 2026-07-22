import { getAllGammes } from "@/data/gammes";
import { categories } from "@/data/categories";
import { companyInfo } from "@/data/company";

export const dynamic = "force-static";

const BASE = "https://azconcept.fr";

/**
 * llms.txt — curated plain-text site map for AI crawlers and assistants.
 * Spec: https://llmstxt.org
 */
export function GET() {
  const gammes = getAllGammes();

  const lines: string[] = [
    "# AZ Concept",
    "",
    "> Atelier de métallerie architecturale à Bruyères-sur-Oise (Île-de-France, France).",
    "> Garde-corps, portes, grilles & façades sur mesure pour les architectes.",
    "> Dix gammes produit, thermolaquage intégré 200+ teintes RAL, partenaire Jansen,",
    "> collections exclusives Adaptacolor (Patina, Polaris, Dichroïque).",
    `> Atelier ${companyInfo.workshopSize} m², fondé en ${companyInfo.foundedYear}, 3 000+ ouvrages livrés.`,
    "",
    "Devise : Fabriquer. Protéger. Durer.",
    `Contact : ${companyInfo.email} · +33 9 71 35 74 96 · ${companyInfo.address}, ${companyInfo.city}.`,
    "Devis gratuit sous 48 h ouvrées, plans DWG/PDF/SKP acceptés. Pose en Île-de-France, livraison France entière.",
    "",
    "## Pages principales",
    "",
    `- [Accueil](${BASE}/) : présentation de l'atelier et des trois piliers.`,
    `- [Thermolaquage](${BASE}/thermolaquage) : cabine 7 m, four XXL, process 6 étapes, 200+ RAL, collections Adaptacolor.`,
    `- [Réalisations](${BASE}/realisations) : portfolio d'ouvrages livrés, filtrable par catégorie et année.`,
    `- [À propos](${BASE}/a-propos) : histoire de l'atelier, chronologie 2018-2026, équipe, valeurs.`,
    `- [Demander un devis](${BASE}/devis) : formulaire d'étude gratuite, réponse sous 48 h.`,
    `- [Contact](${BASE}/contact) : coordonnées, horaires, visite d'atelier sur rendez-vous.`,
    "",
    "## Catégories de produits",
    "",
  ];

  for (const cat of categories) {
    lines.push(`### [${cat.name}](${BASE}/${cat.slug})`);
    lines.push("");
    lines.push(cat.description);
    lines.push("");
    for (const g of gammes.filter((g) => g.categoryId === cat.id)) {
      lines.push(`- [${g.name}](${BASE}/${cat.slug}/${g.slug}) — ${g.tagline}. ${g.description}`);
      for (const m of g.modeles) {
        lines.push(`  - [${m.name}](${BASE}/${cat.slug}/${g.slug}/${m.slug}) : ${m.tagline}.`);
      }
    }
    lines.push("");
  }

  lines.push("## Écosystème");
  lines.push("");
  lines.push(`- [AZ Construction](${companyInfo.sisterSites.construction}) : entreprise sœur, gros œuvre et construction.`);
  lines.push(`- [AZ Epoxy](${companyInfo.sisterSites.epoxy}) : entreprise sœur, revêtements de sols résine.`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
