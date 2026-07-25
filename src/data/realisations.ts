import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "terrasse-panoramique-paris-16",
    title: "Terrasse panoramique",
    category: "Garde-Corps",
    gamme: "AURA",
    description:
      "Garde-corps verre feuilleté bord-à-bord, fixation invisible, vue dégagée à 180 degrés sur Paris.",
    location: "Paris 16e",
    year: 2025,
    imageUrl: "/images/realisations/garde-corps-vitre-terrasse.jpg",
    story: [
      "Un toit-terrasse au dernier étage d'un immeuble des années 30, avec une vue à 180° sur les toits de Paris. Le cahier des charges de l'architecte tenait en une phrase : « je ne veux pas voir le garde-corps ».",
      "Réponse AURA Glass : panneaux de verre feuilleté bord-à-bord sans aucun poteau, sabots inox encastrés dans la dalle après reprise d'étanchéité. Depuis le salon, seule une fine ligne de lumière révèle la présence du verre.",
    ],
    materiaux: ["Verre feuilleté 55.2 extra-clair", "Sabots inox 316L encastrés", "Joints EPDM"],
  },
  {
    id: "hotel-boutique-marais",
    title: "Hôtel boutique — Lobby & escaliers",
    category: "Garde-Corps",
    gamme: "FORGE",
    description:
      "Garde-corps acier avec motifs découpe laser. 45 mètres linéaires sur 3 niveaux.",
    location: "Le Marais, Paris",
    year: 2025,
    imageUrl: "/images/realisations/escalier-metallique-noir.jpg",
    story: [
      "Un hôtel particulier du Marais converti en hôtel boutique de 24 chambres. La maîtrise d'œuvre voulait un escalier qui raconte l'artisanat — pas un produit de catalogue.",
      "45 mètres linéaires de garde-corps FORGE sur trois niveaux : motif feuillage découpé laser dans la tôle 5 mm, soudures apparentes assumées, laque RAL 9005 mat profond. Le motif a été dessiné avec l'architecte d'intérieur en trois allers-retours d'atelier.",
    ],
    materiaux: ["Tôle acier 5 mm découpe laser", "RAL 9005 mat profond", "Main courante laiton brossé"],
  },
  {
    id: "residence-moderne-facade",
    title: "Résidence moderne — Façades bois & métal",
    category: "Grilles",
    gamme: "FACADE",
    description:
      "Habillage façade bois-métal sur immeuble collectif. Bardage lames bois + garde-corps métalliques intégrés.",
    location: "Île-de-France",
    year: 2025,
    imageUrl: "/images/realisations/facade-bois-metal-immeuble.jpg",
    story: [
      "Un programme neuf de 40 logements dont le permis imposait une façade « chaleureuse et pérenne ». L'architecte avait dessiné une trame bois-métal que le façadier ne savait pas industrialiser.",
      "Notre bureau d'études a repris la trame : ossature acier thermolaquée porteuse, lames bois en vêture, garde-corps intégrés dans le même calepinage. Un seul lot, une seule pose, zéro conflit d'interface.",
    ],
    materiaux: ["Ossature acier thermolaqué", "Lames mélèze traité", "Garde-corps intégrés RAL 7016"],
  },
  {
    id: "residence-standing-enghien",
    title: "Résidence de standing — Grilles décoratives",
    category: "Grilles",
    gamme: "DECOR",
    description:
      "Panneaux décoratifs en acier découpé laser, motifs géométriques contemporains. Thermolaqué RAL 7016.",
    location: "Enghien-les-Bains",
    year: 2024,
    imageUrl: "/images/realisations/grilles-decoratives-facade.jpg",
    story: [
      "Une résidence de standing face au lac d'Enghien : les ventilations de parking donnaient directement sur l'entrée principale. Le syndic voulait les faire disparaître, l'architecte voulait en faire un motif.",
      "Panneaux DECOR en tôle découpée laser, motif géométrique dessiné sur mesure pour respecter les sections de passage d'air réglementaires. Thermolaquage RAL 7016 assorti aux menuiseries.",
    ],
    materiaux: ["Tôle acier 4 mm", "Découpe laser sur mesure", "RAL 7016 texturé"],
  },
  {
    id: "immeuble-haussmannien-paris",
    title: "Immeuble haussmannien — Garde-corps classiques",
    category: "Garde-Corps",
    gamme: "FORGE",
    description:
      "Restauration et pose de garde-corps en fer forgé sur immeuble de caractère. Respect du style architectural.",
    location: "Paris",
    year: 2024,
    imageUrl: "/images/realisations/garde-corps-classique-immeuble.jpg",
    story: [
      "Un ravalement lourd sur un immeuble haussmannien : un tiers des garde-corps d'origine irrécupérables, l'ABF exigeant une reproduction à l'identique des profils du XIXe.",
      "Relevé pièce par pièce, re-dessin des volutes au bureau d'études, forge et assemblage en atelier. Les nouveaux éléments sont indiscernables des anciens — c'était le critère de réception.",
    ],
    materiaux: ["Fer forgé plein", "Peinture ferronnerie noir profond", "Scellements chimiques"],
  },
  {
    id: "collectif-neuf-garde-corps",
    title: "Collectif neuf — Garde-corps perforés",
    category: "Garde-Corps",
    gamme: "SECU+",
    description:
      "Garde-corps en tôle perforée sur balcons collectifs. Design contemporain, conformité ERP.",
    location: "Île-de-France",
    year: 2025,
    imageUrl: "/images/realisations/garde-corps-perfore-moderne.jpg",
    story: [
      "120 balcons sur un programme collectif neuf, avec l'exigence classique du logement : la norme NF P01-012 partout, un budget serré, et un rendu qui ne fasse pas « logement standard ».",
      "SECU+ Collectif en tôle perforée : le taux de perforation crée un moiré qui anime la façade selon l'heure, tout en garantissant l'anti-escalade sans prise horizontale. Volume industrialisé, pose au rythme du gros œuvre.",
    ],
    materiaux: ["Tôle perforée 3 mm", "RAL 9007 aluminium gris", "Fixations en nez de dalle"],
  },
  {
    id: "ecole-securite-cloture",
    title: "École — Clôture sécurité colorée",
    category: "Garde-Corps",
    gamme: "SECU+",
    description:
      "Clôture anti-intrusion thermolaquée multicolore pour espace petite enfance. Conformité crèche.",
    location: "Val-d'Oise",
    year: 2025,
    imageUrl: "/images/realisations/cloture-coloree-securite.jpg",
    story: [
      "Un groupe scolaire avec section petite enfance : espacement inférieur à 6,5 cm, anti-pincement, aucun élément escaladable — et une demande de la mairie : « de la couleur, pas une prison ».",
      "Clôture SECU+ Crèche thermolaquée en camaïeu de quatre teintes RAL choisies avec l'équipe pédagogique. La sécurité normative est invisible, la couleur est ce qu'on retient.",
    ],
    materiaux: ["Barreaudage carré 25 mm", "4 teintes RAL", "Portillon anti-panique"],
  },
  {
    id: "facade-bardage-bois",
    title: "Résidence — Bardage bois & balcons",
    category: "Grilles",
    gamme: "FACADE",
    description:
      "Bardage bois naturel avec structure métallique sur immeuble neuf. Intégration garde-corps.",
    location: "Île-de-France",
    year: 2025,
    imageUrl: "/images/realisations/facade-bardage-bois.jpg",
    story: [
      "Un immeuble neuf en lisière boisée : l'architecte voulait que la façade vieillisse comme les arbres autour, avec des balcons filants sans rupture visuelle.",
      "Système FACADE : ossature acier galvanisé thermolaqué, vêture bois laissé naturel, garde-corps des balcons pris dans la même trame verticale. Le calepinage absorbe les tolérances du gros œuvre.",
    ],
    materiaux: ["Ossature acier galvanisé", "Bardage bois naturel", "Garde-corps trame intégrée"],
  },
  {
    id: "garde-corps-barreaux-residence",
    title: "Résidence — Garde-corps à barreaux",
    category: "Garde-Corps",
    gamme: "FORGE",
    description:
      "Garde-corps à barreaux verticaux en acier thermolaqué. Lignes épurées, finition soignée.",
    location: "Île-de-France",
    year: 2024,
    imageUrl: "/images/realisations/garde-corps-barreaux.jpg",
    story: [
      "Une résidence des années 80 en réhabilitation : garde-corps d'origine corrodés, copropriété divisée entre « refaire pareil » et « moderniser ».",
      "FORGE Noir a réconcilié tout le monde : barreaudage vertical simple, sections carrées franches, thermolaquage RAL 9005 mat. Un dessin assez sobre pour être intemporel, assez précis pour être neuf.",
    ],
    materiaux: ["Barreaux carrés 12 mm", "RAL 9005 mat", "Platines laquées assorties"],
  },
  {
    id: "projet-construction-5",
    title: "Programme neuf — Balcons filants",
    category: "Garde-Corps",
    gamme: "SECU+",
    description:
      "Garde-corps en tôle perforée sur balcons filants. Logement collectif, conformité NF P01-012.",
    location: "Île-de-France",
    year: 2025,
    imageUrl: "/images/realisations/projet-construction-5.jpg",
    story: [
      "Des balcons filants de 18 mètres sans joint apparent : le défi n'était pas la norme, mais la planéité — la moindre variation d'alignement se lit sur toute la longueur.",
      "Panneaux SECU+ contrôlés au laser en atelier, réglage tridimensionnel à la pose sur inserts noyés. L'œil ne trouve pas de défaut : c'est le compliment le plus difficile à obtenir.",
    ],
    materiaux: ["Tôle perforée", "Inserts de dalle réglables", "RAL sur mesure"],
  },
  {
    id: "projet-construction-6",
    title: "Immeuble collectif — Clôtures métalliques",
    category: "Grilles",
    gamme: "DECOR",
    description:
      "Clôtures et panneaux décoratifs en acier découpé laser pour parties communes d'un programme neuf.",
    location: "Val-de-Marne",
    year: 2025,
    imageUrl: "/images/realisations/projet-construction-6.jpg",
    story: [
      "Les parties communes d'un programme neuf : locaux vélos, cours anglaises, séparatifs de jardins. Des ouvrages habituellement traités au rabais, que le promoteur voulait au niveau du hall.",
      "Une famille de panneaux DECOR au même motif, décliné en trois densités de perforation selon l'intimité recherchée. La cohérence d'ensemble donne au programme une signature.",
    ],
    materiaux: ["Tôle découpe laser", "3 densités de motif", "Thermolaquage 2 teintes"],
  },
  {
    id: "projet-construction-7",
    title: "Résidence BBC — Garde-corps vitré",
    category: "Garde-Corps",
    gamme: "AURA",
    description:
      "Garde-corps verre feuilleté sur structure aluminium. Transparence maximale, norme BBC.",
    location: "Hauts-de-Seine",
    year: 2024,
    imageUrl: "/images/realisations/projet-construction-7.jpg",
    story: [
      "Une résidence BBC dont les balcons participent au bilan thermique : le garde-corps ne devait créer aucun pont thermique tout en maximisant l'apport lumineux des séjours.",
      "AURA sur profils aluminium à rupture de pont thermique, verre feuilleté clair toute hauteur. Les appartements gagnent en lumière ce que la façade gagne en légèreté.",
    ],
    materiaux: ["Verre feuilleté 44.2", "Profils alu à rupture", "Fixation en tableau"],
  },
  {
    id: "projet-construction-8",
    title: "Programme R+5 — Habillage façades",
    category: "Grilles",
    gamme: "FACADE",
    description:
      "Habillage de façades métalliques sur immeuble de logements. Panneaux cassettes aluminium thermolaqué.",
    location: "Seine-Saint-Denis",
    year: 2025,
    imageUrl: "/images/realisations/projet-construction-8.jpg",
    story: [
      "Un R+5 en entrée de ville : la façade est le premier geste que l'on voit en arrivant. Le maître d'œuvre cherchait une vêture précise, jointoyée fin, qui tienne dans le temps sans entretien.",
      "Cassettes aluminium pliées en atelier, thermolaquage classe façade avec garantie de tenue de teinte. Calepinage au millimètre validé sur prototype avant lancement de série.",
    ],
    materiaux: ["Cassettes aluminium pliées", "Thermolaquage classe façade", "Ossature réglable"],
  },
  {
    id: "projet-construction-9",
    title: "Résidence seniors — Garde-corps sécurisés",
    category: "Garde-Corps",
    gamme: "SECU+",
    description:
      "Garde-corps conformes accessibilité PMR. Hauteur renforcée, remplissage tôle pleine en partie basse.",
    location: "Essonne",
    year: 2024,
    imageUrl: "/images/realisations/projet-construction-9.jpg",
    story: [
      "Une résidence services seniors : PMR partout, mains courantes continues, aucun risque de chute d'objet depuis les loggias — et l'exigence de l'exploitant : que rien ne ressemble à de l'équipement médical.",
      "SECU+ Hospitalier adapté : partie basse pleine laquée ton pierre, barreaudage fin en partie haute, double main courante intégrée au dessin. La sécurité se fond dans l'architecture.",
    ],
    materiaux: ["Tôle pleine partie basse", "Double main courante", "Finition anti-bactérienne"],
  },
  {
    id: "projet-construction-10",
    title: "Écoquartier — Grilles ventilation décoratives",
    category: "Grilles",
    gamme: "AIRFLOW",
    description:
      "Grilles de ventilation intégrées en façade. Design contemporain, performance aéraulique optimisée.",
    location: "Île-de-France",
    year: 2025,
    imageUrl: "/images/realisations/projet-construction-10.jpg",
    story: [
      "Un écoquartier avec ventilation double flux : des dizaines de prises et rejets d'air en façade, que le BET voulait performants et que l'architecte refusait de voir.",
      "Grilles AIRFLOW dimensionnées avec le BET dès l'esquisse : lames aérodynamiques alignées sur les joints de façade. La ventilation est là, personne ne la remarque — mission accomplie.",
    ],
    materiaux: ["Lames aluminium aérodynamiques", "Grillage anti-volatile", "RAL façade assorti"],
  },
];

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return realisations.find((r) => r.id === slug);
}

/** Related projects: same gamme first, then same category, excluding self. */
export function getRelatedRealisations(current: Realisation, limit = 3): Realisation[] {
  const sameGamme = realisations.filter((r) => r.id !== current.id && r.gamme === current.gamme);
  const sameCategory = realisations.filter(
    (r) => r.id !== current.id && r.gamme !== current.gamme && r.category === current.category
  );
  return [...sameGamme, ...sameCategory].slice(0, limit);
}

export function getAdjacentRealisations(current: Realisation): {
  prev: Realisation | null;
  next: Realisation | null;
} {
  const idx = realisations.findIndex((r) => r.id === current.id);
  return {
    prev: idx > 0 ? realisations[idx - 1] : null,
    next: idx >= 0 && idx < realisations.length - 1 ? realisations[idx + 1] : null,
  };
}
