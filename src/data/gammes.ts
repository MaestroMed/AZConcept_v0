import type { Gamme } from "@/types";

export const gammes: Gamme[] = [
  // ============================================================
  // GARDE-CORPS
  // ============================================================
  {
    id: "aura",
    slug: "aura",
    name: "AURA",
    categoryId: "garde-corps",
    tagline: "L’invisible",
    description:
      "Ultra-minimaliste, vue dégagée maximale. Pour les architectes qui veulent que le garde-corps disparaisse. La sécurité sans compromis visuel.",
    features: [
      "Fixation invisible encastrée",
      "Verre feuilleté sécurit",
      "Norme NF P01-012",
      "Profils ultra-fins",
    ],
    accentColor: "#E8E8F0",
    modeles: [
      {
        id: "glass",
        slug: "glass",
        name: "AURA Glass",
        tagline: "Panneaux verre bord-à-bord, zéro poteau visible",
        description:
          "Panneaux de verre feuilleté bord-à-bord sans aucun poteau apparent. Fixation par sabots inox encastrés au sol — le garde-corps le plus invisible du marche.",
        features: [
          "Verre feuilleté 44.2 ou 55.2 clair/extra-clair",
          "Sabot inox encastré au sol",
          "Fixation invisible",
          "Hauteur standard 1000mm",
        ],
        specs: {
          Remplissage: "Verre feuilleté 44.2 / 55.2",
          Fixation: "Sabot inox encastré",
          Hauteur: "900 - 1100 mm",
          Norme: "NF P01-012",
        },
      },
      {
        id: "wire",
        slug: "wire",
        name: "AURA Wire",
        tagline: "Cables inox horizontaux ultra-fins",
        description:
          "Cables inox 316L horizontaux de 3mm de diamètre, espacés de 50mm. Poteaux plats minimalistes de 40x10mm en fixation latérale.",
        features: [
          "Cables inox 316L diamètre 3mm",
          "Espacement 50mm",
          "Poteaux plats 40x10mm",
          "Fixation latérale",
        ],
        specs: {
          Remplissage: "Cables inox 316L tendus",
          Poteaux: "40x10mm plat",
          Fixation: "Latérale",
          Espacement: "50mm entre cables",
        },
      },
      {
        id: "float",
        slug: "float",
        name: "AURA Float",
        tagline: "Main courante flottante — zéro montant visible",
        description:
          "Une main courante qui semble flotter dans le vide, sans aucun support visible. Supports noyés dans le mur, résultat visuel magique. Unique sur le marche.",
        features: [
          "Supports muraux noyés",
          "Aucun montant visible",
          "Effet visuel flottant",
          "Exclusivité AZ Concept",
        ],
        specs: {
          Type: "Main courante seule",
          Support: "Noyé dans le mur",
          "Diamètre MC": "42.4mm ou 48.3mm",
          Finition: "Inox brossé ou thermolaqué",
        },
      },
    ],
  },
  {
    id: "forge",
    slug: "forge",
    name: "FORGE",
    categoryId: "garde-corps",
    tagline: "L’expression brute",
    description:
      "L’acier assume, la matière comme langage. Pour les clients qui veulent du caractère, pas de la neutralité. Lofts, restaurants, hôtels boutique.",
    features: [
      "Acier brut ou corten",
      "Découpe laser motifs",
      "30+ motifs catalogue",
      "Collections Adaptacolor",
    ],
    accentColor: "#C87533",
    modeles: [
      {
        id: "corten",
        slug: "corten",
        name: "FORGE Corten",
        tagline: "Acier auto-patinable, effet rouille naturelle",
        description:
          "Tôle acier corten découpée laser avec patine naturelle évolutive. Chaque pièce est unique — la rouille est contrôlée et stabilisée. Collection Patina Adaptacolor.",
        features: [
          "Acier auto-patinable",
          "Patine naturelle évolutive",
          "Découpe laser sur mesure",
          "Collection Patina Adaptacolor",
        ],
        specs: {
          Matériau: "Acier Corten (auto-patinable)",
          Épaisseur: "3 - 5mm",
          Finition: "Patine naturelle",
          Collection: "Patina Adaptacolor",
        },
      },
      {
        id: "noir",
        slug: "noir",
        name: "FORGE Noir",
        tagline: "Acier brut laque noir mat, soudures assumées",
        description:
          "L’essence même de la métallerie brute. Barreaux en section carrée 12x12mm, volontairement irréguliers. Soudures visibles et assumées, laque RAL 9005 mat profond.",
        features: [
          "Barreaux 12x12mm section carrée",
          "Soudures visibles assumées",
          "RAL 9005 noir mat profond",
          "Caractère industriel authentique",
        ],
        specs: {
          Barreaux: "12x12mm section carrée",
          Finition: "RAL 9005 mat profond",
          Style: "Soudures visibles",
          Fixation: "Platine ou latérale",
        },
      },
      {
        id: "motif",
        slug: "motif",
        name: "FORGE Motif",
        tagline: "Panneaux tôle découpe laser, 30+ motifs",
        description:
          "Bibliothèque de 30+ motifs — feuilles, ondes, hexagones, arabesques, Art Deco. Découpe laser sur tôle acier épaisse, thermolaqué RAL au choix ou corten. L’art du métal.",
        features: [
          "30+ motifs catalogue",
          "Motif sur mesure possible",
          "Découpe laser précision",
          "RAL au choix ou corten",
        ],
        specs: {
          Remplissage: "Tôle découpée laser",
          Catalogue: "30+ motifs",
          "Épaisseur tôle": "3 - 6mm",
          Finition: "RAL au choix / Corten / Adaptacolor",
        },
      },
      {
        id: "mixte",
        slug: "mixte",
        name: "FORGE Mixte",
        tagline: "Acier + bois massif — chaleur et caractère",
        description:
          "L’alliance du métal et du bois. Barreaux acier thermolaqué avec main courante en bois massif (chêne, ipé). La chaleur du naturel sur la force de l’acier.",
        features: [
          "Acier + bois massif",
          "Chêne ou Ipé",
          "Main courante bois huile",
          "Barreaux acier thermolaqué",
        ],
        specs: {
          Structure: "Acier thermolaqué",
          "Main courante": "Bois massif (chêne/ipé)",
          "Finition bois": "Huile ou verni",
          "Finition acier": "RAL au choix",
        },
      },
    ],
  },
  {
    id: "secu-plus",
    slug: "secu-plus",
    name: "SECU+",
    categoryId: "garde-corps",
    tagline: "La sécurité sans compromis",
    description:
      "Garde-corps renforcés pour ERP, collectivités, hôpitaux, écoles. Anti-escalade, anti-chute, PMR natif. La conformité normative PLUS le design.",
    features: [
      "Norme NF P01-012 renforcée",
      "Anti-escalade",
      "PMR natif",
      "Solutions enfants",
    ],
    accentColor: "#22C55E",
    modeles: [
      {
        id: "collectif",
        slug: "collectif",
        name: "SECU+ Collectif",
        tagline: "Balcons collectifs et résidences",
        description:
          "Garde-corps pour balcons collectifs avec norme NF P01-012 renforcée. Espacement inférieur à 11cm garanti, anti-escalade intégré sans prise horizontale.",
        features: [
          "Espacement < 11cm garanti",
          "Anti-escalade (zéro prise horizontale)",
          "Norme renforcée",
          "Volume et répétitivité",
        ],
        specs: {
          Norme: "NF P01-012 renforcée",
          Espacement: "< 11cm",
          "Anti-escalade": "Oui (pas de prise horizontale)",
          Cible: "Balcons collectifs, résidences",
        },
      },
      {
        id: "pmr",
        slug: "pmr",
        name: "SECU+ PMR",
        tagline: "Double main courante intégrée des le design",
        description:
          "Main courante double hauteur (900mm + 700mm) intégrée dans le design — pas rapportee. Prolongement 30cm en haut et bas d’escalier, contraste visuel intégré.",
        features: [
          "Double MC 900mm + 700mm",
          "Intégrée dans le design",
          "Prolongement 30cm",
          "Contraste visuel natif",
        ],
        specs: {
          "MC haute": "900mm",
          "MC basse": "700mm",
          Prolongement: "30cm haut et bas",
          Accessibilite: "PMR natif, pas rapporte",
        },
      },
      {
        id: "crèche",
        slug: "crèche",
        name: "SECU+ Crèche",
        tagline: "Sécurité renforcée petite enfance",
        description:
          "Espacement inférieur à 6.5cm (norme renforcée enfants), remplissage plein en partie basse, anti-préhension. Zéro risque pour les tout-petits.",
        features: [
          "Espacement < 6.5cm",
          "Remplissage plein partie basse",
          "Anti-préhension",
          "Norme enfants renforcée",
        ],
        specs: {
          Espacement: "< 6.5cm",
          "Partie basse": "Remplissage plein",
          "Anti-préhension": "Oui",
          Cible: "Crèches, écoles maternelles",
        },
      },
      {
        id: "hospitalier",
        slug: "hospitalier",
        name: "SECU+ Hospitalier",
        tagline: "Hôpitaux et EHPAD — hygiene et ergonomie",
        description:
          "Main courante continue ergonomique, résistance aux produits d’entretien, finition anti-bactérienne thermolaquée. Conçu pour le milieu medical.",
        features: [
          "MC continue ergonomique",
          "Résistance produits entretien",
          "Finition anti-bactérienne",
          "Milieu medical",
        ],
        specs: {
          "Main courante": "Continue ergonomique",
          Résistance: "Produits d’entretien hospitaliers",
          Finition: "Thermolaqué anti-bacterien",
          Cible: "Hôpitaux, EHPAD, cliniques",
        },
      },
    ],
  },
  {
    id: "atelier",
    slug: "atelier",
    name: "ATELIER",
    categoryId: "garde-corps",
    tagline: "Le style industriel revisité",
    description:
      "Style verrière d’atelier applique au garde-corps. Le best-seller. Renovation d’appartements, lofts, cuisines ouvertes, mezzanines — la tendance qui ne faiblit pas.",
    features: [
      "Style verrière d’atelier",
      "Acier noir + verre",
      "4 variantes",
      "Best-seller renovation",
    ],
    accentColor: "#3B82F6",
    modeles: [
      {
        id: "classic",
        slug: "classic",
        name: "ATELIER Classic",
        tagline: "Acier noir + vitrage transparent",
        description:
          "La verrière d’atelier classique transposee au garde-corps. Structure acier noir avec vitrage transparent entre montants fins. L’intemporel.",
        features: [
          "Montants acier noir fins",
          "Verre clair entre montants",
          "Style verrière classique",
          "Intérieur & extérieur",
        ],
        specs: {
          Structure: "Acier laque noir",
          Vitrage: "Verre clair feuilleté",
          Style: "Verrière classique",
          Montants: "Profils fins rectangulaires",
        },
      },
      {
        id: "fumé",
        slug: "fumé",
        name: "ATELIER Fumé",
        tagline: "Vitrage fumé pour plus d’intimite",
        description:
          "Même structure que le Classic avec un vitrage fumé gris ou bronze. Plus d’intimite, un jeu de transparence subtil.",
        features: [
          "Vitrage fumé gris ou bronze",
          "Intimite renforcée",
          "Transparence subtile",
          "Structure acier noir",
        ],
        specs: {
          Structure: "Acier laque noir",
          Vitrage: "Verre fumé gris ou bronze",
          Teinte: "Gris / Bronze",
          Opacite: "Semi-transparent",
        },
      },
      {
        id: "opaque",
        slug: "opaque",
        name: "ATELIER Opaque",
        tagline: "Montants acier + panneaux métal opaques",
        description:
          "Les panneaux vitres sont remplacés par de la tôle pliée entre montants, creant un effet claustra opaque tout en gardant le rythme verrière.",
        features: [
          "Tôle pliée opaque",
          "Effet claustra",
          "Rythme verrière conserve",
          "Occultation totale",
        ],
        specs: {
          Structure: "Acier laque noir",
          Remplissage: "Tôle pliée opaque",
          Effet: "Claustra métallique",
          Opacite: "Totale",
        },
      },
      {
        id: "miroir",
        slug: "miroir",
        name: "ATELIER Miroir",
        tagline: "Vitrage miroir — intérieur uniquement",
        description:
          "Version spectaculaire avec verre miroir feuilleté. Agrandit visuellement les espacés, créé des jeux de reflets. Usage intérieur uniquement.",
        features: [
          "Verre miroir feuilleté",
          "Effet agrandissant",
          "Jeux de reflets",
          "Intérieur uniquement",
        ],
        specs: {
          Structure: "Acier laque noir",
          Vitrage: "Verre miroir feuilleté",
          Usage: "Intérieur uniquement",
          Effet: "Agrandissement visuel",
        },
      },
    ],
  },

  // ============================================================
  // PORTES
  // ============================================================
  {
    id: "jansen-design",
    slug: "jansen-design",
    name: "JANSEN DESIGN",
    categoryId: "portes",
    tagline: "La porte comme signature",
    description:
      "Portes d’entrée et intérieures en profiles Jansen haut de gamme. AZ Concept est partenaire Jansen — un positionnement premium rare en France.",
    features: [
      "Profiles Jansen acier",
      "Haut de gamme",
      "Formats monumentaux",
      "Partenariat exclusif",
    ],
    accentColor: "#D4AF37",
    modeles: [
      {
        id: "atelier",
        slug: "atelier",
        name: "JANSEN Atelier",
        tagline: "Porte vitree style atelier, profiles fins acier noir",
        description:
          "Porte vitree style verrière d’atelier en profiles Jansen ultra-fins. L’élégance industrielle au quotidien, pour séparations intérieures ou entrées.",
        features: [
          "Profiles Jansen fins",
          "Style verrière",
          "Intérieure ou entrée",
          "Acier noir mat",
        ],
        specs: {
          Profiles: "Jansen Economy 50/60",
          Type: "Intérieure / Entrée",
          Vitrage: "Clair ou sécurit",
          Finition: "RAL au choix",
        },
      },
      {
        id: "pivot",
        slug: "pivot",
        name: "JANSEN Pivot",
        tagline: "Porte pivot grand format jusqu’à 3m",
        description:
          "Porte pivot monumentale pouvant atteindre 3 metres de hauteur. L’entrée qui fait forte impression. Mécanisme pivot cache dans le sol.",
        features: [
          "Jusqu'a 3m de haut",
          "Mécanisme pivot cache",
          "Effet monumental",
          "Entrées prestigieuses",
        ],
        specs: {
          "Hauteur max": "3000mm",
          Mécanisme: "Pivot au sol cache",
          Profiles: "Jansen Janisol",
          Finition: "RAL au choix",
        },
      },
      {
        id: "panoramic",
        slug: "panoramic",
        name: "JANSEN Panoramic",
        tagline: "Baie coulissante grande largeur",
        description:
          "Porte-fenêtre coulissante en profiles Jansen, grandes dimensions. Ouverture panoramique sur terrasse ou jardin, profiles fins pour maximum de lumière.",
        features: [
          "Coulissante grande largeur",
          "Profiles fins Jansen",
          "Maximum de lumière",
          "Ouverture panoramique",
        ],
        specs: {
          Type: "Coulissante",
          Profiles: "Jansen Janisol",
          "Largeur max": "6000mm",
          Isolation: "Thermique renforcée",
        },
      },
      {
        id: "blind",
        slug: "blind",
        name: "JANSEN Blind",
        tagline: "Porte pleine acier, design épuré",
        description:
          "Porte pleine en acier thermolaqué, design minimaliste sans fioritures. Pour espacés techniques nobles, caves a vin, ateliers d’artiste.",
        features: [
          "Pleine acier",
          "Design épuré",
          "Thermolaqué RAL",
          "Espacés techniques nobles",
        ],
        specs: {
          Type: "Pleine",
          Matériau: "Acier Jansen",
          Finition: "Thermolaqué RAL",
          Usage: "Technique / Cave / Atelier",
        },
      },
    ],
  },
  {
    id: "firewall",
    slug: "firewall",
    name: "FIREWALL",
    categoryId: "portes",
    tagline: "Coupe-feu qui ne ressemble pas a du coupe-feu",
    description:
      "La porte coupe-feu comme objet architectural. Le marche impose sécurité OU esthetique. FIREWALL offre les deux. La seule porte CF belle du marche.",
    features: [
      "EI30 à EI120",
      "Design architectural",
      "Parement bois possible",
      "Ferme-porte invisible",
    ],
    accentColor: "#EF4444",
    modeles: [
      {
        id: "30-vitre",
        slug: "30-vitre",
        name: "FIREWALL 30 Vitre",
        tagline: "Coupe-feu EI30 avec oculus élargi, aspect verrière",
        description:
          "Porte coupe-feu EI30 avec un oculus maximisé au PV. Profile fin, aspect verrière — on oublie que c’est du coupe-feu.",
        features: [
          "Classement EI30",
          "Oculus élargi maximum PV",
          "Aspect verrière",
          "Profile fin",
        ],
        specs: {
          Classement: "EI30",
          Vitrage: "Coupe-feu, oculus élargi",
          Profile: "Fin, aspect verrière",
          Certification: "PV essai",
        },
      },
      {
        id: "60-design",
        slug: "60-design",
        name: "FIREWALL 60 Design",
        tagline: "EI60 thermolaqué RAL, poignée design, ferme-porte invisible",
        description:
          "La porte coupe-feu EI60 réimaginée. Parement thermolaqué 200+ teintes RAL, poignée design (pas la béquille standard grise), ferme-porte intégré invisible.",
        features: [
          "Classement EI60",
          "200+ teintes RAL",
          "Poignée design",
          "Ferme-porte invisible",
        ],
        specs: {
          Classement: "EI60",
          Finition: "Thermolaqué RAL (200+ teintes)",
          Poignée: "Design (pas standard)",
          "Ferme-porte": "Intégré invisible",
        },
      },
      {
        id: "60-bois-métal",
        slug: "60-bois-métal",
        name: "FIREWALL 60 Bois-Métal",
        tagline: "Structure acier EI60, parement bois chêne/noyer",
        description:
          "La révolution : une porte coupe-feu qui ressemble à une porte de salon. Structure acier certifiée EI60, face visible en bois massif. Unique sur le marche.",
        features: [
          "Structure acier EI60",
          "Parement bois massif",
          "Chêne ou noyer",
          "Exclusivité AZ Concept",
        ],
        specs: {
          Classement: "EI60",
          Structure: "Acier certifié",
          Parement: "Bois massif (chêne/noyer)",
          Innovation: "Exclusivité AZ Concept",
        },
      },
      {
        id: "120-industrial",
        slug: "120-industrial",
        name: "FIREWALL 120 Industrial",
        tagline: "EI120 grande dimension, finition métallisée Polaris",
        description:
          "Grande dimension jusqu’à 2.5m de large, thermolaqué collection Polaris (finition métallisée). Pour halls industriels qui veulent etre beaux.",
        features: [
          "Classement EI120",
          "Jusqu'a 2.5m de large",
          "Collection Polaris",
          "Finition métallisée",
        ],
        specs: {
          Classement: "EI120",
          "Largeur max": "2500mm",
          Finition: "Collection Polaris (métallisé)",
          Cible: "Halls industriels, grands volumes",
        },
      },
      {
        id: "das",
        slug: "das",
        name: "FIREWALL DAS",
        tagline: "Dispositif Actionne de Sécurité, design soigne",
        description:
          "Porte DAS avec ventouse, déclencheur thermique, fermeture gravitaire. Sécurité incendie maximale avec un design qui ne fait pas compromis.",
        features: [
          "Ventouse électromagnétique",
          "Déclencheur thermique",
          "Fermeture gravitaire",
          "Design soigne",
        ],
        specs: {
          Classement: "EI60 / EI120",
          DAS: "Ventouse + déclencheur thermique",
          Fermeture: "Gravitaire",
          Cible: "ERP, bureaux, hôtels",
        },
      },
      {
        id: "coulissante",
        slug: "coulissante",
        name: "FIREWALL Coulissante",
        tagline: "Coupe-feu coulissante, jusqu’à 5m de passage",
        description:
          "Porte coulissante coupe-feu pour grandes ouvertures industrielles. Jusqu'a 5 metres de passage libre. Solution idéale pour compartimentage grandes surfaces.",
        features: [
          "Coulissante coupe-feu",
          "Jusqu'a 5m de passage",
          "Grandes ouvertures",
          "Compartimentage",
        ],
        specs: {
          Classement: "EI60 / EI120",
          Type: "Coulissante",
          "Passage max": "5000mm",
          Cible: "Industrie, logistique, grandes surfaces",
        },
      },
    ],
  },
  {
    id: "technique",
    slug: "technique",
    name: "TECHNIQUE",
    categoryId: "portes",
    tagline: "Le standard optimise",
    description:
      "Portes techniques à bon rapport qualité/prix pour les lots courants. Volume, fiabilité, marge. Le socle solide de chaque chantier.",
    features: [
      "Rapport qualité/prix",
      "Volume et répétitivité",
      "Toutes configurations",
      "Délais courts",
    ],
    accentColor: "#6B7280",
    modeles: [
      {
        id: "standard",
        slug: "standard",
        name: "TECH Standard",
        tagline: "Porte pleine 1 vantail",
        description:
          "Porte métallique pleine simple vantail. Caves, locaux techniques, chaufferies. Le standard fiable.",
        features: ["1 vantail", "Pleine", "Standard NF", "Économique"],
        specs: {
          Type: "Pleine 1 vantail",
          Usage: "Caves, locaux techniques",
          Norme: "NF",
          Finition: "Thermolaqué RAL",
        },
      },
      {
        id: "double",
        slug: "double",
        name: "TECH Double",
        tagline: "Porte pleine 2 vantaux",
        description:
          "Porte métallique pleine double vantail pour passages larges. Parkings, accès livraison, locaux techniques grands.",
        features: ["2 vantaux", "Passage large", "Usage intensif", "Robuste"],
        specs: {
          Type: "Pleine 2 vantaux",
          Usage: "Parkings, livraison",
          "Passage min": "1400mm",
          Finition: "Thermolaqué RAL",
        },
      },
      {
        id: "vitree",
        slug: "vitree",
        name: "TECH Vitree",
        tagline: "Porte avec oculus standard",
        description:
          "Porte métallique avec oculus vitree pour circulation ERP. Visibilite des deux côtés, sécurité au passage.",
        features: ["Oculus vitree", "Visibilite", "Circulation ERP", "Sécurité"],
        specs: {
          Type: "Avec oculus",
          Vitrage: "Sécurit ou armé",
          Usage: "Circulation ERP, hôpitaux",
          Norme: "NF",
        },
      },
      {
        id: "issue",
        slug: "issue",
        name: "TECH Issue",
        tagline: "Porte avec barre antipanique",
        description:
          "Porte issue de secours avec barre antipanique certifiée. Conformité réglementaire ERP, sécurité incendie.",
        features: [
          "Barre antipanique",
          "Issue de secours",
          "Certifiée NF",
          "Conformité ERP",
        ],
        specs: {
          Type: "Issue de secours",
          Équipement: "Barre antipanique NF",
          Usage: "ERP, bureaux, commerces",
          Réglementation: "Conforme",
        },
      },
      {
        id: "acoustique",
        slug: "acoustique",
        name: "TECH Acoustique",
        tagline: "Isolation phonique renforcée",
        description:
          "Porte métallique avec isolation phonique renforcée. Salles de réunion, hôtels, studios. Affaiblissement acoustique certifié.",
        features: [
          "Isolation phonique",
          "Affaiblissement certifié",
          "Hôtels & bureaux",
          "Studios",
        ],
        specs: {
          Type: "Acoustique",
          Affaiblissement: "35 - 45 dB",
          Usage: "Réunion, hôtels, studios",
          Certification: "Rapport d’essai acoustique",
        },
      },
    ],
  },

  // ============================================================
  // GRILLES & FACADES
  // ============================================================
  {
    id: "airflow",
    slug: "airflow",
    name: "AIRFLOW",
    categoryId: "grilles",
    tagline: "La grille fonctionnelle premium",
    description:
      "Grilles de ventilation techniques haut de gamme. Performances supérieures au standard. Acoustique, anti-pluie, anti-intrusion, coupe-feu.",
    features: [
      "Haute performance",
      "Acoustique intégrée",
      "Anti-pluie certifié",
      "Combo coupe-feu",
    ],
    accentColor: "#06B6D4",
    modeles: [
      {
        id: "acoustic",
        slug: "acoustic",
        name: "AIRFLOW Acoustic",
        tagline: "Traitement acoustique intégré, -15 a -25dB",
        description:
          "Lames a profil aérodynamique avec absorbant phonique intégré. Reduction du bruit de 15 à 25dB. Hôtels, bureaux, hôpitaux.",
        features: [
          "Reduction 15-25dB",
          "Profil aérodynamique",
          "Absorbant intégré",
          "Hôtels & bureaux",
        ],
        specs: {
          Performance: "-15 a -25dB",
          Lames: "Profil aérodynamique",
          Absorbant: "Intégré",
          Cible: "Hôtels, bureaux, hôpitaux",
        },
      },
      {
        id: "rain",
        slug: "rain",
        name: "AIRFLOW Rain",
        tagline: "Anti-pluie haute performance, 0% jusqu’à 13m/s",
        description:
          "Lames pare-pluie profilees garantissant 0% de penetration d’eau jusqu’à 13m/s de vent. Pour façades exposees aux intemperies.",
        features: [
          "0% penetration eau",
          "Resist. vent 13m/s",
          "Lames pare-pluie",
          "Façades exposees",
        ],
        specs: {
          "Anti-pluie": "0% jusqu’à 13m/s",
          Lames: "Pare-pluie profilees",
          Test: "Norme EN 13030",
          Cible: "Façades exposees",
        },
      },
      {
        id: "secure",
        slug: "secure",
        name: "AIRFLOW Secure",
        tagline: "Anti-intrusion + anti-rongeurs",
        description:
          "Barreaux renforcés avec maille anti-rongeurs intégrée. Protection physique pour sous-sols, parkings, locaux sensibles.",
        features: [
          "Barreaux renforcés",
          "Maille anti-rongeurs",
          "Sous-sols & parkings",
          "Locaux sensibles",
        ],
        specs: {
          Protection: "Anti-intrusion + anti-rongeurs",
          Barreaux: "Renforcés",
          Maille: "Intégrée",
          Cible: "Sous-sols, parkings, locaux sensibles",
        },
      },
      {
        id: "coupe-feu",
        slug: "coupe-feu",
        name: "AIRFLOW Coupe-feu",
        tagline: "Grille + clapet EI60 intégré — un seul produit",
        description:
          "Intégration d’un clapet coupe-feu EI60 directement dans le cadre de la grille. Un seul produit, une seule commande, une seule pose. Gain de temps chantier enorme.",
        features: [
          "Clapet EI60 intégré",
          "Un seul produit",
          "Une seule pose",
          "Gain temps chantier",
        ],
        specs: {
          Classement: "EI60",
          Intégration: "Clapet dans cadre grille",
          Avantage: "1 produit au lieu de 2",
          Certification: "PV essai",
        },
      },
    ],
  },
  {
    id: "decor",
    slug: "decor",
    name: "DECOR",
    categoryId: "grilles",
    tagline: "La grille comme objet design",
    description:
      "Grilles décoratives découpées laser. Le marche français est quasi vide. AZ Concept prend ce marche avec 200+ couleurs RAL et des motifs sur mesure.",
    features: [
      "Découpe laser",
      "Motifs sur catalogue",
      "Motif sur mesure",
      "Marche vierge France",
    ],
    accentColor: "#A855F7",
    modeles: [
      {
        id: "geo",
        slug: "geo",
        name: "DECOR Geo",
        tagline: "Motifs geometriques — hexagones, chevrons, losanges",
        description:
          "Motifs geometriques contemporains : hexagones, triangles, chevrons, losanges, cercles concentriques. La précision laser au service de la geometrie.",
        features: [
          "Hexagones, triangles, chevrons",
          "Losanges, cercles",
          "Contemporain",
          "Précision laser",
        ],
        specs: {
          Motifs: "Geometriques contemporains",
          Découpe: "Laser haute précision",
          Matériau: "Acier ou aluminium",
          Finition: "Thermolaqué RAL 200+",
        },
      },
      {
        id: "nature",
        slug: "nature",
        name: "DECOR Nature",
        tagline: "Motifs organiques — feuilles, ondes, nervures",
        description:
          "Motifs inspires de la nature : feuilles, branches, ondes, gouttes, nervures vegetales. Le métal qui imite le vivant.",
        features: [
          "Feuilles & branches",
          "Ondes & gouttes",
          "Nervures vegetales",
          "Organique",
        ],
        specs: {
          Motifs: "Organiques naturels",
          Inspiration: "Vegetal & aquatique",
          Matériau: "Acier ou aluminium",
          Finition: "Thermolaqué RAL 200+",
        },
      },
      {
        id: "art-deco",
        slug: "art-deco",
        name: "DECOR Art Deco",
        tagline: "Motifs patrimoine — eventails, arcs, symetrie",
        description:
          "Motifs inspires des années 20-30 : eventails, arcs, motifs symetriques Art Deco. L’élégance du patrimoine architectural.",
        features: [
          "Eventails & arcs",
          "Symetrie Art Deco",
          "Années 20-30",
          "Patrimoine architectural",
        ],
        specs: {
          Motifs: "Art Deco patrimoine",
          Epoque: "Années 1920-1930",
          Matériau: "Acier ou aluminium",
          Finition: "Thermolaqué RAL 200+ / Or / Laiton",
        },
      },
      {
        id: "orient",
        slug: "orient",
        name: "DECOR Orient",
        tagline: "Moucharabieh, zellige, entrelacs geometriques",
        description:
          "Motifs arabesques et geometrie islamique : moucharabieh, zellige, entrelacs. L’art oriental transpose dans le métal.",
        features: [
          "Moucharabieh",
          "Zellige",
          "Entrelacs geometriques",
          "Art oriental",
        ],
        specs: {
          Motifs: "Arabesques islamiques",
          Inspiration: "Moucharabieh, zellige",
          Matériau: "Acier ou aluminium",
          Finition: "Thermolaqué RAL 200+",
        },
      },
      {
        id: "custom",
        slug: "custom",
        name: "DECOR Custom",
        tagline: "Votre motif sur mesure, réalisé en métal",
        description:
          "L’architecte fournit le motif (DXF/DWG), AZ Concept le fabriqué. Logos, motifs exclusifs, créations originales — aucune limite.",
        features: [
          "Motif sur mesure",
          "A partir de DXF/DWG",
          "Logos & créations",
          "Aucune limite",
        ],
        specs: {
          Motifs: "Sur mesure (DXF/DWG)",
          Source: "Fourni par l’architecte",
          Matériau: "Acier ou aluminium",
          Finition: "Thermolaqué RAL 200+",
        },
      },
      {
        id: "caillebotis",
        slug: "caillebotis",
        name: "DECOR Caillebotis",
        tagline: "Caillebotis design, pas du galva industriel",
        description:
          "Caillebotis en acier thermolaqué — pas le caillebotis galvanise industriel classique. Du design applique à un produit utilitaire.",
        features: [
          "Caillebotis thermolaqué",
          "Pas de galva industriel",
          "Design applique",
          "RAL au choix",
        ],
        specs: {
          Type: "Caillebotis design",
          Finition: "Thermolaqué RAL (pas galva)",
          Matériau: "Acier",
          Differenciation: "Design vs industriel",
        },
      },
    ],
  },
  {
    id: "façade",
    slug: "façade",
    name: "FACADE",
    categoryId: "grilles",
    tagline: "Habillage architectural",
    description:
      "Grandes grilles et brise-soleil pour façades de bâtiments. Projets architecturaux d’envergure. Lames, tôle perforee, claustra, ondulee.",
    features: [
      "Grande dimension",
      "Brise-soleil",
      "Habillage technique",
      "Projets d’envergure",
    ],
    accentColor: "#F59E0B",
    modeles: [
      {
        id: "lames",
        slug: "lames",
        name: "FACADE Lames",
        tagline: "Lames horizontales ou verticales en acier",
        description:
          "Lames en acier horizontales ou verticales pour ventilation parking, habillage local technique, brise-soleil. Grande modularite.",
        features: [
          "Horizontales ou verticales",
          "Ventilation parking",
          "Brise-soleil",
          "Grande modularite",
        ],
        specs: {
          Orientation: "Horizontale ou verticale",
          Matériau: "Acier thermolaqué",
          Usage: "Parking, local technique, brise-soleil",
          Dimension: "Sur mesure",
        },
      },
      {
        id: "perforee",
        slug: "perforee",
        name: "FACADE Perforee",
        tagline: "Tôle perforee grand format",
        description:
          "Tôle perforee grand format pour habillage façade, occultation, filtrage lumière. Motifs de perforation au choix.",
        features: [
          "Grand format",
          "Habillage façade",
          "Filtrage lumière",
          "Motifs au choix",
        ],
        specs: {
          Type: "Tôle perforee",
          Format: "Grand format sur mesure",
          Perforation: "Ronde, carrée, oblongue",
          Finition: "Thermolaqué RAL",
        },
      },
      {
        id: "claustra",
        slug: "claustra",
        name: "FACADE Claustra",
        tagline: "Panneaux ajoures motifs architecturaux",
        description:
          "Panneaux ajoures avec motifs architecturaux. Brise-vue terrasse collective, séparation extérieure. Découpe laser sur mesure.",
        features: [
          "Panneaux ajoures",
          "Motifs architecturaux",
          "Brise-vue terrasse",
          "Découpe laser",
        ],
        specs: {
          Type: "Claustra ajoure",
          Motifs: "Architecturaux sur mesure",
          Usage: "Terrasse, séparation, brise-vue",
          Découpe: "Laser",
        },
      },
      {
        id: "ondulee",
        slug: "ondulee",
        name: "FACADE Ondulee",
        tagline: "Lames ondulees, effet mouvement en façade",
        description:
          "Lames ondulees ou cintrees creant un effet de mouvement en façade. Jeu d’ombres et de lumières au fil de la journee.",
        features: [
          "Lames ondulees/cintrees",
          "Effet mouvement",
          "Jeu d’ombres",
          "Dynamisme façade",
        ],
        specs: {
          Type: "Lames ondulees",
          Effet: "Mouvement et ombres",
          Cintrage: "Sur mesure",
          Finition: "Thermolaqué RAL",
        },
      },
    ],
  },
];

// === Helper Functions ===

export function getAllGammes(): Gamme[] {
  return gammes;
}

export function getGammesByCategory(categoryId: string): Gamme[] {
  return gammes.filter((g) => g.categoryId === categoryId);
}

export function getGammeBySlug(slug: string): Gamme | undefined {
  return gammes.find((g) => g.slug === slug);
}

export function getGammeByCategoryAndSlug(
  categorySlug: string,
  gammeSlug: string
): Gamme | undefined {
  return gammes.find(
    (g) => g.categoryId === categorySlug && g.slug === gammeSlug
  );
}

export function getModeleBySlug(
  gammeSlug: string,
  modeleSlug: string
) {
  const gamme = getGammeBySlug(gammeSlug);
  if (!gamme) return undefined;
  return gamme.modeles.find((m) => m.slug === modeleSlug);
}
