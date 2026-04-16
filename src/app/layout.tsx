import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { InitLoader } from "@/components/shared/InitLoader";
import { ChapterIndicator } from "@/components/shared/ChapterIndicator";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azconcept.fr"),
  title: {
    default: "AZ Concept — Metallerie d'architecture. Fabriquer. Proteger. Durer.",
    template: "%s · AZ Concept",
  },
  description:
    "Atelier de metallerie architecturale en Ile-de-France. Garde-corps, portes monumentales, grilles et facades. Thermolaquage 200+ RAL, partenaire Jansen, 10 gammes dessinees pour les architectes.",
  keywords: [
    "metallerie architecturale", "garde-corps sur mesure", "porte Jansen",
    "thermolaquage RAL", "grille ventilation decor", "facade metallique",
    "architecte Ile-de-France", "acier corten", "verriere atelier", "AZ Concept",
  ],
  authors: [{ name: "AZ Concept" }],
  creator: "AZ Concept",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AZ Concept",
    title: "AZ Concept — Metallerie d'architecture",
    description:
      "Fabriquer. Proteger. Durer. Dix gammes d'ouvrages metalliques pour les architectes, thermolaquage haute performance, atelier 1 800 m² en Ile-de-France.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AZ Concept — Metallerie d'architecture",
    description:
      "Dix gammes d'ouvrages metalliques, thermolaquage 200+ RAL, partenaire Jansen. Atelier en Ile-de-France.",
  },
  formatDetection: { email: false, address: false, telephone: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AZ Concept",
  url: "https://azconcept.fr",
  logo: "https://azconcept.fr/images/branding/logo.png",
  description:
    "Metallerie d'architecture — garde-corps, portes, grilles et facades. Dix gammes, 200+ RAL, partenaire Jansen.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Chemin du Bac des Aubins",
    addressLocality: "Bruyeres-sur-Oise",
    postalCode: "95820",
    addressCountry: "FR",
  },
  telephone: "+33971357496",
  email: "contact@azconcept.fr",
  sameAs: ["https://azconstruction.fr", "https://azepoxy.fr"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-ivory font-sans selection:bg-champagne selection:text-ink">
        <AmbientBackground />
        <InitLoader />
        <ChapterIndicator />
        {children}
      </body>
    </html>
  );
}
