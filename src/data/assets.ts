/**
 * Asset & editorial copy manifest — keyed by category/gamme/modele slug.
 * Kept separate from gammes.ts to avoid touching 1000+ line product file.
 */

export const categoryAssets: Record<
  string,
  {
    heroImage: string;
    ambianceStrip: string[];
    manifesto: string;
    italicLead: string;
  }
> = {
  "garde-corps": {
    heroImage: "/images/realisations/escalier-metallique-noir.jpg",
    ambianceStrip: [
      "/images/realisations/garde-corps-vitre-terrasse.jpg",
      "/images/realisations/garde-corps-barreaux.jpg",
      "/images/realisations/garde-corps-perfore-moderne.jpg",
      "/images/ambiance/metal-texture.jpg",
    ],
    italicLead: "Sécurité et transparence.",
    manifesto:
      "Le garde-corps est la ligne qui dit le soin qu'on a mis dans le détail. Quatre gammes pour quatre tempéraments — de l'effacement absolu à l'expression brute, du minimalisme vitré à l'acier corten patinable. Chaque pièce est pensée pour se fondre, ou s'affirmer, selon le parti pris de l'architecte.",
  },
  portes: {
    heroImage: "/images/realisations/facade-bois-metal-immeuble.jpg",
    ambianceStrip: [
      "/images/ambiance/building-facade.jpg",
      "/images/gammes/porte-design.jpg",
      "/images/ambiance/steel-structure.jpg",
      "/images/ambiance/industrial-workshop.jpg",
    ],
    italicLead: "L'ouverture comme signature.",
    manifesto:
      "Une porte raconte toujours deux choses : ce qu'elle protège, et comment elle accueille. Nous travaillons les profilés Jansen premium, les portes coupe-feu certifiées EI 30 à EI 120, et les portes techniques pour que chaque ouverture soit un geste architectural — pas un élément fonctionnel.",
  },
  grilles: {
    heroImage: "/images/realisations/grilles-decoratives-facade.jpg",
    ambianceStrip: [
      "/images/gammes/grille-architecture.jpg",
      "/images/realisations/facade-bardage-bois.jpg",
      "/images/ambiance/architecture-moderne.jpg",
      "/images/realisations/projet-construction-10.jpg",
    ],
    italicLead: "La peau du bâtiment.",
    manifesto:
      "Ventilation, habillage, décor — les grilles et façades architecturales sont la dernière couche, celle qu'on voit de loin et qu'on touche au quotidien. Nous les traitons avec la même exigence que les pièces nobles : décou­pe laser, thermolaquage, collections Adaptacolor pour un rendu qui traverse le temps.",
  },
};

export const gammeAssets: Record<
  string,
  {
    heroImage: string;
    ambianceImages: string[];
    story: string[];
    materials: string[];
    modeleImages?: Record<string, string>;
  }
> = {
  aura: {
    heroImage: "/images/realisations/garde-corps-vitre-terrasse.jpg",
    ambianceImages: [
      "/images/gammes/garde-corps-verre.jpg",
      "/images/ambiance/architecture-moderne.jpg",
      "/images/realisations/projet-construction-7.jpg",
    ],
    story: [
      "AURA est la gamme du presque-rien. Fixations invisibles, profils ultra-fins, verre feuilleté bord-à-bord : elle disparaît pour laisser la vue faire son travail.",
      "On la spécifie sur les toits-terrasses parisiens, les pentes d'Enghien, les suites d'hôtels qui ouvrent sur les jardins. Là où le garde-corps doit être là, obligatoirement — mais ne doit pas se voir.",
    ],
    materials: ["Verre feuilleté 44.2 / 55.2", "Inox 316L poli miroir", "Sabots encastrés", "Câbles inox tendus"],
  },
  forge: {
    heroImage: "/images/realisations/escalier-metallique-noir.jpg",
    ambianceImages: [
      "/images/realisations/garde-corps-barreaux.jpg",
      "/images/ambiance/metal-texture.jpg",
      "/images/realisations/garde-corps-classique-immeuble.jpg",
    ],
    story: [
      "FORGE, c'est l'acier qui s'assume. Soudures visibles, sections carrées, corten qui vieillit à la vue de tous. Pour les projets qui ne veulent pas de la neutralité.",
      "Les motifs découpés au laser — feuilles, hexagones, arabesques, 30+ au catalogue — permettent de signer un ouvrage. Hôtels boutique, lofts, ateliers d'artistes : la matière parle fort.",
    ],
    materials: ["Acier corten 3-5 mm", "Tôle laser 3-6 mm", "Thermolaquage RAL ou Patina", "Bois massif (chêne, ipé)"],
  },
  "secu-plus": {
    heroImage: "/images/realisations/garde-corps-perfore-moderne.jpg",
    ambianceImages: [
      "/images/realisations/cloture-coloree-securite.jpg",
      "/images/realisations/projet-construction-5.jpg",
      "/images/realisations/projet-construction-9.jpg",
    ],
    story: [
      "SECU+ est la gamme qui règle tout ce que la norme impose et que personne ne veut voir. Espacement < 11 cm pour les balcons collectifs, < 6.5 cm pour les crèches, anti-escalade natif, PMR intégré dans le dessin.",
      "Nous traitons les ERP, hôpitaux, résidences senior, écoles. La conformité n'est pas un compromis : c'est le point de départ du dessin.",
    ],
    materials: ["Tôle perforée acier", "Double main courante 900+700", "Finitions anti-bactériennes", "RAL sur mesure"],
  },
  atelier: {
    heroImage: "/images/realisations/garde-corps-classique-immeuble.jpg",
    ambianceImages: [
      "/images/ambiance/architecture-moderne.jpg",
      "/images/realisations/garde-corps-barreaux.jpg",
      "/images/realisations/escalier-metallique-noir.jpg",
    ],
    story: [
      "ATELIER, c'est la verrière d'atelier transposée au garde-corps. Montants fins acier noir, vitrage clair, fumé, opaque ou miroir selon le besoin d'intimité.",
      "C'est notre best-seller en rénovation : appartements haussmanniens, lofts, mezzanines, cuisines ouvertes. La tendance qui ne faiblit pas parce qu'elle s'appuie sur 120 ans d'architecture industrielle.",
    ],
    materials: ["Profils acier noir", "Verre clair / fumé / miroir", "Tôle pliée opaque", "Laque RAL 9005 mat"],
  },
  "jansen-design": {
    heroImage: "/images/ambiance/building-facade.jpg",
    ambianceImages: [
      "/images/gammes/porte-design.jpg",
      "/images/ambiance/steel-structure.jpg",
      "/images/ambiance/architecture-moderne.jpg",
    ],
    story: [
      "JANSEN DESIGN est notre partenariat avec le fabricant suisse Jansen, référence absolue en profilés acier architecturaux. Un accès rare en France, réservé à quelques métalliers.",
      "Portes pivot jusqu'à 3 m, baies coulissantes grande largeur, profils ultra-fins pour maximiser la lumière. Chaque porte est un objet d'architecture, pas un élément de quincaillerie.",
    ],
    materials: ["Profilés Jansen Economy / Janisol", "Vitrage feuilleté clair", "Pivots invisibles", "Thermolaquage intégral"],
  },
  firewall: {
    heroImage: "/images/ambiance/industrial-workshop.jpg",
    ambianceImages: [
      "/images/ambiance/steel-structure.jpg",
      "/images/ambiance/welding-sparks.jpg",
      "/images/realisations/projet-construction-8.jpg",
    ],
    story: [
      "FIREWALL, ce sont les portes coupe-feu qui ne ressemblent pas à des portes coupe-feu. Certifiées EI 30 à EI 120, conformité ERP, et dessin qui s'accorde avec le reste du projet.",
      "Finitions thermolaquées, inserts vitrage feu, contrôles d'accès intégrés. Les architectes qui s'occupent de bureaux, d'écoles, d'ERP nous commandent pour arrêter d'avoir honte de leurs portes techniques.",
    ],
    materials: ["Acier EI 30 / 60 / 90 / 120", "Vitrage anti-feu", "Ferme-porte hydraulique", "Contrôle d'accès intégré"],
  },
  technique: {
    heroImage: "/images/ambiance/atelier-metal.jpg",
    ambianceImages: [
      "/images/ambiance/welding-sparks.jpg",
      "/images/ambiance/steel-structure.jpg",
      "/images/ambiance/metal-texture.jpg",
    ],
    story: [
      "TECHNIQUE regroupe les portes que personne ne voit : locaux techniques, archives, communs, issues de secours. Mais que tout le monde ouvre et ferme plusieurs fois par jour.",
      "Nous les fabriquons robustes, silencieuses, durables — parce qu'une porte qui grince ou qui coince finit par définir l'image d'un bâtiment.",
    ],
    materials: ["Acier thermolaqué", "Charnières invisibles", "Serrures multi-points", "Joints acoustiques"],
  },
  airflow: {
    heroImage: "/images/gammes/grille-architecture.jpg",
    ambianceImages: [
      "/images/realisations/projet-construction-10.jpg",
      "/images/ambiance/architecture-moderne.jpg",
      "/images/realisations/facade-bardage-bois.jpg",
    ],
    story: [
      "AIRFLOW est la gamme ventilation haute performance. Acoustiques, anti-pluie, anti-intrusion — conçues pour disparaître dans les façades tout en garantissant les débits réglementaires.",
      "Nous travaillons avec les BETs thermiques dès l'esquisse pour que les grilles ne soient pas un compromis de dernière minute.",
    ],
    materials: ["Lames aluminium", "Traitement acoustique", "Grillage anti-volatile", "Thermolaquage RAL"],
  },
  decor: {
    heroImage: "/images/realisations/grilles-decoratives-facade.jpg",
    ambianceImages: [
      "/images/realisations/projet-construction-6.jpg",
      "/images/ambiance/architecture-moderne.jpg",
      "/images/gammes/grille-architecture.jpg",
    ],
    story: [
      "DECOR, c'est la grille devenue objet d'architecture. Panneaux en tôle découpée laser, motifs géométriques contemporains, ombres portées calculées.",
      "On la spécifie sur les parties communes, les clôtures de standing, les brise-vues de terrasse. La ventilation devient prétexte, le décor devient propos.",
    ],
    materials: ["Tôle acier 3-6 mm", "Découpe laser sur mesure", "Thermolaquage Adaptacolor", "Collections Patina"],
  },
  facade: {
    heroImage: "/images/realisations/facade-bois-metal-immeuble.jpg",
    ambianceImages: [
      "/images/realisations/facade-bardage-bois.jpg",
      "/images/realisations/projet-construction-8.jpg",
      "/images/ambiance/building-facade.jpg",
    ],
    story: [
      "FACADE regroupe les habillages architecturaux — bardages métalliques, cassettes aluminium, panneaux composites avec structure acier intégrée.",
      "Nous co-dessinons avec les architectes-façadiers pour livrer une peau qui respecte le RT2020, les DTU, et le dessin d'origine sans compromis.",
    ],
    materials: ["Cassettes aluminium", "Bardage acier thermolaqué", "Structure acier porteuse", "Collections Adaptacolor"],
  },
};

export function getCategoryAssets(slug: string) {
  return categoryAssets[slug];
}

export function getGammeAssets(slug: string) {
  return gammeAssets[slug];
}

export function getModeleImage(gammeSlug: string, modeleSlug: string): string | undefined {
  const g = gammeAssets[gammeSlug];
  if (!g) return undefined;
  if (g.modeleImages && g.modeleImages[modeleSlug]) return g.modeleImages[modeleSlug];
  // Fallback: rotate through ambiance images by hash
  const all = [g.heroImage, ...g.ambianceImages];
  const hash = modeleSlug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return all[hash % all.length];
}
