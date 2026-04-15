import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AZ Concept | Metallerie d'exception — Fabriquer. Proteger. Durer.",
    template: "%s | AZ Concept",
  },
  description:
    "AZ Concept reunit metallerie sur mesure, thermolaquage haute performance et design architectural. Garde-corps, portes, grilles & facades — 10 gammes, 200+ couleurs RAL, atelier 1800m2 en Ile-de-France.",
  keywords: [
    "metallerie", "garde-corps", "portes coupe-feu", "thermolaquage",
    "grilles ventilation", "sur mesure", "acier", "RAL", "Ile-de-France", "AZ Concept",
  ],
  authors: [{ name: "AZ Concept" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AZ Concept",
    title: "AZ Concept | Metallerie d'exception",
    description: "Fabriquer. Proteger. Durer. — 10 gammes de metallerie architecturale, thermolaquage 200+ RAL, atelier 1800m2.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AZ Concept",
  url: "https://azconcept.fr",
  logo: "https://azconcept.fr/images/branding/logo.png",
  description: "Metallerie d'exception — garde-corps, portes, grilles & facades. 10 gammes, 200+ couleurs RAL.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-text-primary font-sans">
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
