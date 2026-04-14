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
    tagline: "L'invisible",
    description:
      "Ultra-minimaliste, vue degagee maximale. Pour les architectes qui veulent que le garde-corps disparaisse. La securite sans compromis visuel.",
    features: [
      "Fixation invisible encastree",
      "Verre feuillete securit",
      "Norme NF P01-012",
      "Profils ultra-fins",
    ],
    accentColor: "#E8E8F0",
    modeles: [
      {
        id: "glass",
        slug: "glass",
        name: "AURA Glass",
        tagline: "Panneaux verre bord-a-bord, zero poteau visible",
        description:
          "Panneaux de verre feuillete bord-a-bord sans aucun poteau apparent. Fixation par sabots inox encastres au sol — le garde-corps le plus invisible du marche.",
        features: [
          "Verre feuillete 44.2 ou 55.2 clair/extra-clair",
          "Sabot inox encastre au sol",
          "Fixation invisible",
          "Hauteur standard 1000mm",
        ],
        specs: {
          Remplissage: "Verre feuillete 44.2 / 55.2",
          Fixation: "Sabot inox encastre",
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
          "Cables inox 316L horizontaux de 3mm de diametre, espaces de 50mm. Poteaux plats minimalistes de 40x10mm en fixation laterale.",
        features: [
          "Cables inox 316L diametre 3mm",
          "Espacement 50mm",
          "Poteaux plats 40x10mm",
          "Fixation laterale",
        ],
        specs: {
          Remplissage: "Cables inox 316L tendus",
          Poteaux: "40x10mm plat",
          Fixation: "Laterale",
          Espacement: "50mm entre cables",
        },
      },
      {
        id: "float",
        slug: "float",
        name: "AURA Float",
        tagline: "Main courante flottante — zero montant visible",
        description:
          "Une main courante qui semble flotter dans le vide, sans aucun support visible. Supports noyes dans le mur, resultat visuel magique. Unique sur le marche.",
        features: [
          "Supports muraux noyes",
          "Aucun montant visible",
          "Effet visuel flottant",
          "Exclusivite AZ Concept",
        ],
        specs: {
          Type: "Main courante seule",
          Support: "Noye dans le mur",
          "Diametre MC": "42.4mm ou 48.3mm",
          Finition: "Inox brosse ou thermolaque",
        },
      },
    ],
  },
  {
    id: "forge",
    slug: "forge",
    name: "FORGE",
    categoryId: "garde-corps",
    tagline: "L'expression brute",
    description:
      "L'acier assume, la matiere comme langage. Pour les clients qui veulent du caractere, pas de la neutralite. Lofts, restaurants, hotels boutique.",
    features: [
      "Acier brut ou corten",
      "Decoupe laser motifs",
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
          "Tole acier corten decoupee laser avec patine naturelle evolutive. Chaque piece est unique — la rouille est controllee et stabilisee. Collection Patina Adaptacolor.",
        features: [
          "Acier auto-patinable",
          "Patine naturelle evolutive",
          "Decoupe laser sur mesure",
          "Collection Patina Adaptacolor",
        ],
        specs: {
          Materiau: "Acier Corten (auto-patinable)",
          Epaisseur: "3 - 5mm",
          Finition: "Patine naturelle",
          Collection: "Patina Adaptacolor",
        },
      },
      {
        id: "noir",
        slug: "noir",
        name: "FORGE Noir",
        tagline: "Acier brut laque noir mat, soudures assumees",
        description:
          "L'essence meme de la metallerie brute. Barreaux en section carree 12x12mm, volontairement irreguliers. Soudures visibles et assumees, laque RAL 9005 mat profond.",
        features: [
          "Barreaux 12x12mm section carree",
          "Soudures visibles assumees",
          "RAL 9005 noir mat profond",
          "Caractere industriel authentique",
        ],
        specs: {
          Barreaux: "12x12mm section carree",
          Finition: "RAL 9005 mat profond",
          Style: "Soudures visibles",
          Fixation: "Platine ou laterale",
        },
      },
      {
        id: "motif",
        slug: "motif",
        name: "FORGE Motif",
        tagline: "Panneaux tole decoupe laser, 30+ motifs",
        description:
          "Bibliotheque de 30+ motifs — feuilles, ondes, hexagones, arabesques, Art Deco. Decoupe laser sur tole acier epaisse, thermolaque RAL au choix ou corten. L'art du metal.",
        features: [
          "30+ motifs catalogue",
          "Motif sur mesure possible",
          "Decoupe laser precision",
          "RAL au choix ou corten",
        ],
        specs: {
          Remplissage: "Tole decoupee laser",
          Catalogue: "30+ motifs",
          "Epaisseur tole": "3 - 6mm",
          Finition: "RAL au choix / Corten / Adaptacolor",
        },
      },
      {
        id: "mixte",
        slug: "mixte",
        name: "FORGE Mixte",
        tagline: "Acier + bois massif — chaleur et caractere",
        description:
          "L'alliance du metal et du bois. Barreaux acier thermolaque avec main courante en bois massif (chene, ipe). La chaleur du naturel sur la force de l'acier.",
        features: [
          "Acier + bois massif",
          "Chene ou Ipe",
          "Main courante bois huile",
          "Barreaux acier thermolaque",
        ],
        specs: {
          Structure: "Acier thermolaque",
          "Main courante": "Bois massif (chene/ipe)",
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
    tagline: "La securite sans compromis",
    description:
      "Garde-corps renforces pour ERP, collectivites, hopitaux, ecoles. Anti-escalade, anti-chute, PMR natif. La conformite normative PLUS le design.",
    features: [
      "Norme NF P01-012 renforcee",
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
        tagline: "Balcons collectifs et residences",
        description:
          "Garde-corps pour balcons collectifs avec norme NF P01-012 renforcee. Espacement inferieur a 11cm garanti, anti-escalade integre sans prise horizontale.",
        features: [
          "Espacement < 11cm garanti",
          "Anti-escalade (zero prise horizontale)",
          "Norme renforcee",
          "Volume et repetitivite",
        ],
        specs: {
          Norme: "NF P01-012 renforcee",
          Espacement: "< 11cm",
          "Anti-escalade": "Oui (pas de prise horizontale)",
          Cible: "Balcons collectifs, residences",
        },
      },
      {
        id: "pmr",
        slug: "pmr",
        name: "SECU+ PMR",
        tagline: "Double main courante integree des le design",
        description:
          "Main courante double hauteur (900mm + 700mm) integree dans le design — pas rapportee. Prolongement 30cm en haut et bas d'escalier, contraste visuel integre.",
        features: [
          "Double MC 900mm + 700mm",
          "Integree dans le design",
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
        id: "creche",
        slug: "creche",
        name: "SECU+ Creche",
        tagline: "Securite renforcee petite enfance",
        description:
          "Espacement inferieur a 6.5cm (norme renforcee enfants), remplissage plein en partie basse, anti-prehension. Zero risque pour les tout-petits.",
        features: [
          "Espacement < 6.5cm",
          "Remplissage plein partie basse",
          "Anti-prehension",
          "Norme enfants renforcee",
        ],
        specs: {
          Espacement: "< 6.5cm",
          "Partie basse": "Remplissage plein",
          "Anti-prehension": "Oui",
          Cible: "Creches, ecoles maternelles",
        },
      },
      {
        id: "hospitalier",
        slug: "hospitalier",
        name: "SECU+ Hospitalier",
        tagline: "Hopitaux et EHPAD — hygiene et ergonomie",
        description:
          "Main courante continue ergonomique, resistance aux produits d'entretien, finition anti-bacterienne thermolaquee. Concu pour le milieu medical.",
        features: [
          "MC continue ergonomique",
          "Resistance produits entretien",
          "Finition anti-bacterienne",
          "Milieu medical",
        ],
        specs: {
          "Main courante": "Continue ergonomique",
          Resistance: "Produits d'entretien hospitaliers",
          Finition: "Thermolaque anti-bacterien",
          Cible: "Hopitaux, EHPAD, cliniques",
        },
      },
    ],
  },
  {
    id: "atelier",
    slug: "atelier",
    name: "ATELIER",
    categoryId: "garde-corps",
    tagline: "Le style industriel revisite",
    description:
      "Style verriere d'atelier applique au garde-corps. Le best-seller. Renovation d'appartements, lofts, cuisines ouvertes, mezzanines — la tendance qui ne faiblit pas.",
    features: [
      "Style verriere d'atelier",
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
          "La verriere d'atelier classique transposee au garde-corps. Structure acier noir avec vitrage transparent entre montants fins. L'intemporel.",
        features: [
          "Montants acier noir fins",
          "Verre clair entre montants",
          "Style verriere classique",
          "Interieur & exterieur",
        ],
        specs: {
          Structure: "Acier laque noir",
          Vitrage: "Verre clair feuillete",
          Style: "Verriere classique",
          Montants: "Profils fins rectangulaires",
        },
      },
      {
        id: "fume",
        slug: "fume",
        name: "ATELIER Fume",
        tagline: "Vitrage fume pour plus d'intimite",
        description:
          "Meme structure que le Classic avec un vitrage fume gris ou bronze. Plus d'intimite, un jeu de transparence subtil.",
        features: [
          "Vitrage fume gris ou bronze",
          "Intimite renforcee",
          "Transparence subtile",
          "Structure acier noir",
        ],
        specs: {
          Structure: "Acier laque noir",
          Vitrage: "Verre fume gris ou bronze",
          Teinte: "Gris / Bronze",
          Opacite: "Semi-transparent",
        },
      },
      {
        id: "opaque",
        slug: "opaque",
        name: "ATELIER Opaque",
        tagline: "Montants acier + panneaux metal opaques",
        description:
          "Les panneaux vitres sont remplaces par de la tole pliee entre montants, creant un effet claustra opaque tout en gardant le rythme verriere.",
        features: [
          "Tole pliee opaque",
          "Effet claustra",
          "Rythme verriere conserve",
          "Occultation totale",
        ],
        specs: {
          Structure: "Acier laque noir",
          Remplissage: "Tole pliee opaque",
          Effet: "Claustra metallique",
          Opacite: "Totale",
        },
      },
      {
        id: "miroir",
        slug: "miroir",
        name: "ATELIER Miroir",
        tagline: "Vitrage miroir — interieur uniquement",
        description:
          "Version spectaculaire avec verre miroir feuillete. Agrandit visuellement les espaces, cree des jeux de reflets. Usage interieur uniquement.",
        features: [
          "Verre miroir feuillete",
          "Effet agrandissant",
          "Jeux de reflets",
          "Interieur uniquement",
        ],
        specs: {
          Structure: "Acier laque noir",
          Vitrage: "Verre miroir feuillete",
          Usage: "Interieur uniquement",
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
      "Portes d'entree et interieures en profiles Jansen haut de gamme. AZ Concept est partenaire Jansen — un positionnement premium rare en France.",
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
          "Porte vitree style verriere d'atelier en profiles Jansen ultra-fins. L'elegance industrielle au quotidien, pour separations interieures ou entrees.",
        features: [
          "Profiles Jansen fins",
          "Style verriere",
          "Interieure ou entree",
          "Acier noir mat",
        ],
        specs: {
          Profiles: "Jansen Economy 50/60",
          Type: "Interieure / Entree",
          Vitrage: "Clair ou securit",
          Finition: "RAL au choix",
        },
      },
      {
        id: "pivot",
        slug: "pivot",
        name: "JANSEN Pivot",
        tagline: "Porte pivot grand format jusqu'a 3m",
        description:
          "Porte pivot monumentale pouvant atteindre 3 metres de hauteur. L'entree qui fait forte impression. Mecanisme pivot cache dans le sol.",
        features: [
          "Jusqu'a 3m de haut",
          "Mecanisme pivot cache",
          "Effet monumental",
          "Entrees prestigieuses",
        ],
        specs: {
          "Hauteur max": "3000mm",
          Mecanisme: "Pivot au sol cache",
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
          "Porte-fenetre coulissante en profiles Jansen, grandes dimensions. Ouverture panoramique sur terrasse ou jardin, profiles fins pour maximum de lumiere.",
        features: [
          "Coulissante grande largeur",
          "Profiles fins Jansen",
          "Maximum de lumiere",
          "Ouverture panoramique",
        ],
        specs: {
          Type: "Coulissante",
          Profiles: "Jansen Janisol",
          "Largeur max": "6000mm",
          Isolation: "Thermique renforcee",
        },
      },
      {
        id: "blind",
        slug: "blind",
        name: "JANSEN Blind",
        tagline: "Porte pleine acier, design epure",
        description:
          "Porte pleine en acier thermolaque, design minimaliste sans fioritures. Pour espaces techniques nobles, caves a vin, ateliers d'artiste.",
        features: [
          "Pleine acier",
          "Design epure",
          "Thermolaque RAL",
          "Espaces techniques nobles",
        ],
        specs: {
          Type: "Pleine",
          Materiau: "Acier Jansen",
          Finition: "Thermolaque RAL",
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
      "La porte coupe-feu comme objet architectural. Le marche impose securite OU esthetique. FIREWALL offre les deux. La seule porte CF belle du marche.",
    features: [
      "EI30 a EI120",
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
        tagline: "Coupe-feu EI30 avec oculus elargi, aspect verriere",
        description:
          "Porte coupe-feu EI30 avec un oculus maximise au PV. Profile fin, aspect verriere — on oublie que c'est du coupe-feu.",
        features: [
          "Classement EI30",
          "Oculus elargi maximum PV",
          "Aspect verriere",
          "Profile fin",
        ],
        specs: {
          Classement: "EI30",
          Vitrage: "Coupe-feu, oculus elargi",
          Profile: "Fin, aspect verriere",
          Certification: "PV essai",
        },
      },
      {
        id: "60-design",
        slug: "60-design",
        name: "FIREWALL 60 Design",
        tagline: "EI60 thermolaque RAL, poignee design, ferme-porte invisible",
        description:
          "La porte coupe-feu EI60 reimaginee. Parement thermolaque 200+ teintes RAL, poignee design (pas la bequille standard grise), ferme-porte integre invisible.",
        features: [
          "Classement EI60",
          "200+ teintes RAL",
          "Poignee design",
          "Ferme-porte invisible",
        ],
        specs: {
          Classement: "EI60",
          Finition: "Thermolaque RAL (200+ teintes)",
          Poignee: "Design (pas standard)",
          "Ferme-porte": "Integre invisible",
        },
      },
      {
        id: "60-bois-metal",
        slug: "60-bois-metal",
        name: "FIREWALL 60 Bois-Metal",
        tagline: "Structure acier EI60, parement bois chene/noyer",
        description:
          "La revolution : une porte coupe-feu qui ressemble a une porte de salon. Structure acier certifiee EI60, face visible en bois massif. Unique sur le marche.",
        features: [
          "Structure acier EI60",
          "Parement bois massif",
          "Chene ou noyer",
          "Exclusivite AZ Concept",
        ],
        specs: {
          Classement: "EI60",
          Structure: "Acier certifie",
          Parement: "Bois massif (chene/noyer)",
          Innovation: "Exclusivite AZ Concept",
        },
      },
      {
        id: "120-industrial",
        slug: "120-industrial",
        name: "FIREWALL 120 Industrial",
        tagline: "EI120 grande dimension, finition metallisee Polaris",
        description:
          "Grande dimension jusqu'a 2.5m de large, thermolaque collection Polaris (finition metallisee). Pour halls industriels qui veulent etre beaux.",
        features: [
          "Classement EI120",
          "Jusqu'a 2.5m de large",
          "Collection Polaris",
          "Finition metallisee",
        ],
        specs: {
          Classement: "EI120",
          "Largeur max": "2500mm",
          Finition: "Collection Polaris (metallise)",
          Cible: "Halls industriels, grands volumes",
        },
      },
      {
        id: "das",
        slug: "das",
        name: "FIREWALL DAS",
        tagline: "Dispositif Actionne de Securite, design soigne",
        description:
          "Porte DAS avec ventouse, declencheur thermique, fermeture gravitaire. Securite incendie maximale avec un design qui ne fait pas compromis.",
        features: [
          "Ventouse electromagnetique",
          "Declencheur thermique",
          "Fermeture gravitaire",
          "Design soigne",
        ],
        specs: {
          Classement: "EI60 / EI120",
          DAS: "Ventouse + declencheur thermique",
          Fermeture: "Gravitaire",
          Cible: "ERP, bureaux, hotels",
        },
      },
      {
        id: "coulissante",
        slug: "coulissante",
        name: "FIREWALL Coulissante",
        tagline: "Coupe-feu coulissante, jusqu'a 5m de passage",
        description:
          "Porte coulissante coupe-feu pour grandes ouvertures industrielles. Jusqu'a 5 metres de passage libre. Solution ideale pour compartimentage grandes surfaces.",
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
      "Portes techniques a bon rapport qualite/prix pour les lots courants. Volume, fiabilite, marge. Le socle solide de chaque chantier.",
    features: [
      "Rapport qualite/prix",
      "Volume et repetitivite",
      "Toutes configurations",
      "Delais courts",
    ],
    accentColor: "#6B7280",
    modeles: [
      {
        id: "standard",
        slug: "standard",
        name: "TECH Standard",
        tagline: "Porte pleine 1 vantail",
        description:
          "Porte metallique pleine simple vantail. Caves, locaux techniques, chaufferies. Le standard fiable.",
        features: ["1 vantail", "Pleine", "Standard NF", "Economique"],
        specs: {
          Type: "Pleine 1 vantail",
          Usage: "Caves, locaux techniques",
          Norme: "NF",
          Finition: "Thermolaque RAL",
        },
      },
      {
        id: "double",
        slug: "double",
        name: "TECH Double",
        tagline: "Porte pleine 2 vantaux",
        description:
          "Porte metallique pleine double vantail pour passages larges. Parkings, acces livraison, locaux techniques grands.",
        features: ["2 vantaux", "Passage large", "Usage intensif", "Robuste"],
        specs: {
          Type: "Pleine 2 vantaux",
          Usage: "Parkings, livraison",
          "Passage min": "1400mm",
          Finition: "Thermolaque RAL",
        },
      },
      {
        id: "vitree",
        slug: "vitree",
        name: "TECH Vitree",
        tagline: "Porte avec oculus standard",
        description:
          "Porte metallique avec oculus vitree pour circulation ERP. Visibilite des deux cotes, securite au passage.",
        features: ["Oculus vitree", "Visibilite", "Circulation ERP", "Securite"],
        specs: {
          Type: "Avec oculus",
          Vitrage: "Securit ou arme",
          Usage: "Circulation ERP, hopitaux",
          Norme: "NF",
        },
      },
      {
        id: "issue",
        slug: "issue",
        name: "TECH Issue",
        tagline: "Porte avec barre antipanique",
        description:
          "Porte issue de secours avec barre antipanique certifiee. Conformite reglementaire ERP, securite incendie.",
        features: [
          "Barre antipanique",
          "Issue de secours",
          "Certifiee NF",
          "Conformite ERP",
        ],
        specs: {
          Type: "Issue de secours",
          Equipement: "Barre antipanique NF",
          Usage: "ERP, bureaux, commerces",
          Reglementation: "Conforme",
        },
      },
      {
        id: "acoustique",
        slug: "acoustique",
        name: "TECH Acoustique",
        tagline: "Isolation phonique renforcee",
        description:
          "Porte metallique avec isolation phonique renforcee. Salles de reunion, hotels, studios. Affaiblissement acoustique certifie.",
        features: [
          "Isolation phonique",
          "Affaiblissement certifie",
          "Hotels & bureaux",
          "Studios",
        ],
        specs: {
          Type: "Acoustique",
          Affaiblissement: "35 - 45 dB",
          Usage: "Reunion, hotels, studios",
          Certification: "Rapport d'essai acoustique",
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
      "Grilles de ventilation techniques haut de gamme. Performances superieures au standard. Acoustique, anti-pluie, anti-intrusion, coupe-feu.",
    features: [
      "Haute performance",
      "Acoustique integree",
      "Anti-pluie certifie",
      "Combo coupe-feu",
    ],
    accentColor: "#06B6D4",
    modeles: [
      {
        id: "acoustic",
        slug: "acoustic",
        name: "AIRFLOW Acoustic",
        tagline: "Traitement acoustique integre, -15 a -25dB",
        description:
          "Lames a profil aerodynamique avec absorbant phonique integre. Reduction du bruit de 15 a 25dB. Hotels, bureaux, hopitaux.",
        features: [
          "Reduction 15-25dB",
          "Profil aerodynamique",
          "Absorbant integre",
          "Hotels & bureaux",
        ],
        specs: {
          Performance: "-15 a -25dB",
          Lames: "Profil aerodynamique",
          Absorbant: "Integre",
          Cible: "Hotels, bureaux, hopitaux",
        },
      },
      {
        id: "rain",
        slug: "rain",
        name: "AIRFLOW Rain",
        tagline: "Anti-pluie haute performance, 0% jusqu'a 13m/s",
        description:
          "Lames pare-pluie profilees garantissant 0% de penetration d'eau jusqu'a 13m/s de vent. Pour facades exposees aux intemperies.",
        features: [
          "0% penetration eau",
          "Resist. vent 13m/s",
          "Lames pare-pluie",
          "Facades exposees",
        ],
        specs: {
          "Anti-pluie": "0% jusqu'a 13m/s",
          Lames: "Pare-pluie profilees",
          Test: "Norme EN 13030",
          Cible: "Facades exposees",
        },
      },
      {
        id: "secure",
        slug: "secure",
        name: "AIRFLOW Secure",
        tagline: "Anti-intrusion + anti-rongeurs",
        description:
          "Barreaux renforces avec maille anti-rongeurs integree. Protection physique pour sous-sols, parkings, locaux sensibles.",
        features: [
          "Barreaux renforces",
          "Maille anti-rongeurs",
          "Sous-sols & parkings",
          "Locaux sensibles",
        ],
        specs: {
          Protection: "Anti-intrusion + anti-rongeurs",
          Barreaux: "Renforces",
          Maille: "Integree",
          Cible: "Sous-sols, parkings, locaux sensibles",
        },
      },
      {
        id: "coupe-feu",
        slug: "coupe-feu",
        name: "AIRFLOW Coupe-feu",
        tagline: "Grille + clapet EI60 integre — un seul produit",
        description:
          "Integration d'un clapet coupe-feu EI60 directement dans le cadre de la grille. Un seul produit, une seule commande, une seule pose. Gain de temps chantier enorme.",
        features: [
          "Clapet EI60 integre",
          "Un seul produit",
          "Une seule pose",
          "Gain temps chantier",
        ],
        specs: {
          Classement: "EI60",
          Integration: "Clapet dans cadre grille",
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
      "Grilles decoratives decoupees laser. Le marche francais est quasi vide. AZ Concept prend ce marche avec 200+ couleurs RAL et des motifs sur mesure.",
    features: [
      "Decoupe laser",
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
          "Motifs geometriques contemporains : hexagones, triangles, chevrons, losanges, cercles concentriques. La precision laser au service de la geometrie.",
        features: [
          "Hexagones, triangles, chevrons",
          "Losanges, cercles",
          "Contemporain",
          "Precision laser",
        ],
        specs: {
          Motifs: "Geometriques contemporains",
          Decoupe: "Laser haute precision",
          Materiau: "Acier ou aluminium",
          Finition: "Thermolaque RAL 200+",
        },
      },
      {
        id: "nature",
        slug: "nature",
        name: "DECOR Nature",
        tagline: "Motifs organiques — feuilles, ondes, nervures",
        description:
          "Motifs inspires de la nature : feuilles, branches, ondes, gouttes, nervures vegetales. Le metal qui imite le vivant.",
        features: [
          "Feuilles & branches",
          "Ondes & gouttes",
          "Nervures vegetales",
          "Organique",
        ],
        specs: {
          Motifs: "Organiques naturels",
          Inspiration: "Vegetal & aquatique",
          Materiau: "Acier ou aluminium",
          Finition: "Thermolaque RAL 200+",
        },
      },
      {
        id: "art-deco",
        slug: "art-deco",
        name: "DECOR Art Deco",
        tagline: "Motifs patrimoine — eventails, arcs, symetrie",
        description:
          "Motifs inspires des annees 20-30 : eventails, arcs, motifs symetriques Art Deco. L'elegance du patrimoine architectural.",
        features: [
          "Eventails & arcs",
          "Symetrie Art Deco",
          "Annees 20-30",
          "Patrimoine architectural",
        ],
        specs: {
          Motifs: "Art Deco patrimoine",
          Epoque: "Annees 1920-1930",
          Materiau: "Acier ou aluminium",
          Finition: "Thermolaque RAL 200+ / Or / Laiton",
        },
      },
      {
        id: "orient",
        slug: "orient",
        name: "DECOR Orient",
        tagline: "Moucharabieh, zellige, entrelacs geometriques",
        description:
          "Motifs arabesques et geometrie islamique : moucharabieh, zellige, entrelacs. L'art oriental transpose dans le metal.",
        features: [
          "Moucharabieh",
          "Zellige",
          "Entrelacs geometriques",
          "Art oriental",
        ],
        specs: {
          Motifs: "Arabesques islamiques",
          Inspiration: "Moucharabieh, zellige",
          Materiau: "Acier ou aluminium",
          Finition: "Thermolaque RAL 200+",
        },
      },
      {
        id: "custom",
        slug: "custom",
        name: "DECOR Custom",
        tagline: "Votre motif sur mesure, realise en metal",
        description:
          "L'architecte fournit le motif (DXF/DWG), AZ Concept le fabrique. Logos, motifs exclusifs, creations originales — aucune limite.",
        features: [
          "Motif sur mesure",
          "A partir de DXF/DWG",
          "Logos & creations",
          "Aucune limite",
        ],
        specs: {
          Motifs: "Sur mesure (DXF/DWG)",
          Source: "Fourni par l'architecte",
          Materiau: "Acier ou aluminium",
          Finition: "Thermolaque RAL 200+",
        },
      },
      {
        id: "caillebotis",
        slug: "caillebotis",
        name: "DECOR Caillebotis",
        tagline: "Caillebotis design, pas du galva industriel",
        description:
          "Caillebotis en acier thermolaque — pas le caillebotis galvanise industriel classique. Du design applique a un produit utilitaire.",
        features: [
          "Caillebotis thermolaque",
          "Pas de galva industriel",
          "Design applique",
          "RAL au choix",
        ],
        specs: {
          Type: "Caillebotis design",
          Finition: "Thermolaque RAL (pas galva)",
          Materiau: "Acier",
          Differenciation: "Design vs industriel",
        },
      },
    ],
  },
  {
    id: "facade",
    slug: "facade",
    name: "FACADE",
    categoryId: "grilles",
    tagline: "Habillage architectural",
    description:
      "Grandes grilles et brise-soleil pour facades de batiments. Projets architecturaux d'envergure. Lames, tole perforee, claustra, ondulee.",
    features: [
      "Grande dimension",
      "Brise-soleil",
      "Habillage technique",
      "Projets d'envergure",
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
          Materiau: "Acier thermolaque",
          Usage: "Parking, local technique, brise-soleil",
          Dimension: "Sur mesure",
        },
      },
      {
        id: "perforee",
        slug: "perforee",
        name: "FACADE Perforee",
        tagline: "Tole perforee grand format",
        description:
          "Tole perforee grand format pour habillage facade, occultation, filtrage lumiere. Motifs de perforation au choix.",
        features: [
          "Grand format",
          "Habillage facade",
          "Filtrage lumiere",
          "Motifs au choix",
        ],
        specs: {
          Type: "Tole perforee",
          Format: "Grand format sur mesure",
          Perforation: "Ronde, carree, oblongue",
          Finition: "Thermolaque RAL",
        },
      },
      {
        id: "claustra",
        slug: "claustra",
        name: "FACADE Claustra",
        tagline: "Panneaux ajoures motifs architecturaux",
        description:
          "Panneaux ajoures avec motifs architecturaux. Brise-vue terrasse collective, separation exterieure. Decoupe laser sur mesure.",
        features: [
          "Panneaux ajoures",
          "Motifs architecturaux",
          "Brise-vue terrasse",
          "Decoupe laser",
        ],
        specs: {
          Type: "Claustra ajoure",
          Motifs: "Architecturaux sur mesure",
          Usage: "Terrasse, separation, brise-vue",
          Decoupe: "Laser",
        },
      },
      {
        id: "ondulee",
        slug: "ondulee",
        name: "FACADE Ondulee",
        tagline: "Lames ondulees, effet mouvement en facade",
        description:
          "Lames ondulees ou cintrees creant un effet de mouvement en facade. Jeu d'ombres et de lumieres au fil de la journee.",
        features: [
          "Lames ondulees/cintrees",
          "Effet mouvement",
          "Jeu d'ombres",
          "Dynamisme facade",
        ],
        specs: {
          Type: "Lames ondulees",
          Effet: "Mouvement et ombres",
          Cintrage: "Sur mesure",
          Finition: "Thermolaque RAL",
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
