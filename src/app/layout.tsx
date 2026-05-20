import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { InitLoader } from "@/components/shared/InitLoader";
import { ChapterIndicator } from "@/components/shared/ChapterIndicator";
import { JsonLd } from "@/components/shared/JsonLd";
import { organization, website, localBusiness, SITE_URL } from "@/lib/seo";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0d" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0d" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AZ Concept — Métallerie d’architecture. Fabriquer. Protéger. Durer.",
    template: "%s · AZ Concept",
  },
  description:
    "Atelier de métallerie architecturale en Île-de-France. Garde-corps, portes monumentales, grilles & façades. Thermolaquage 200+ RAL, partenaire Jansen — dix gammes dessinées pour les architectes.",
  applicationName: "AZ Concept",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "métallerie architecturale",
    "garde-corps sur mesure",
    "porte Jansen",
    "porte coupe-feu",
    "thermolaquage RAL",
    "thermolaquage Île-de-France",
    "grille ventilation décor",
    "façade métallique",
    "architecte Île-de-France",
    "acier corten",
    "verrière atelier",
    "Adaptacolor Patina Polaris Dichroïque",
    "AZ Concept",
  ],
  authors: [{ name: "AZ Concept" }],
  creator: "AZ Concept",
  publisher: "AZ Concept",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "AZ Concept",
    title: "AZ Concept — Métallerie d’architecture",
    description:
      "Fabriquer. Protéger. Durer. Dix gammes d’ouvrages métalliques pour les architectes, thermolaquage haute performance, atelier 1 800 m² en Île-de-France.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "AZ Concept — Métallerie d’architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AZ Concept — Métallerie d’architecture",
    description: "Dix gammes d’ouvrages métalliques, thermolaquage 200+ RAL, partenaire Jansen. Île-de-France.",
    images: ["/api/og"],
  },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Architecture",
  icons: {
    icon: "/favicon.ico",
  },
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
        <JsonLd data={[organization, website, localBusiness]} />
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
