import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbsJsonLd, faqJsonLd } from "@/lib/seo";

const ogImage = `/api/og?${new URLSearchParams({ title: "Demander un devis", subtitle: "Étude gratuite sous 48 h.", eyebrow: "Demande" })}`;

const faqs = [
  {
    q: "Combien de temps pour recevoir un devis ?",
    a: "48 h ouvrées pour les projets standards. 5 jours pour les ouvrages complexes qui nécessitent une étude de structure ou un prototype.",
  },
  {
    q: "Fabriquez-vous sur mesure ?",
    a: "Intégralement. Nos dix gammes sont des points de départ — toutes les dimensions, finitions et détails sont adaptés au projet.",
  },
  {
    q: "Quels plans acceptez-vous ?",
    a: "DWG, PDF, SKP, croquis scannés. Idéalement cotés. Si vous n’avez que des photos ou une intention, nous venons mesurer sur site.",
  },
  {
    q: "Quelle zone d’intervention ?",
    a: "Île-de-France en priorité, mais nous livrons toute la France métropolitaine pour les projets d’envergure. Nous ne posons qu’en IDF.",
  },
];

export const metadata: Metadata = {
  title: "Demander un devis — Étude gratuite sous 48 h",
  description:
    "Demandez un devis gratuit pour votre projet de métallerie ou thermolaquage. Réponse sous 48 h, plans DWG acceptés. AZ Concept, Île-de-France.",
  alternates: { canonical: "/devis" },
  openGraph: {
    type: "website",
    url: "/devis",
    title: "Demander un devis | AZ Concept",
    description: "Étude gratuite sous 48 h pour votre projet de métallerie architecturale.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Devis AZ Concept" }],
  },
  twitter: { card: "summary_large_image", title: "Demander un devis | AZ Concept", description: "Étude gratuite sous 48 h.", images: [ogImage] },
};

export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbsJsonLd([
            { name: "Accueil", href: "/" },
            { name: "Devis", href: "/devis" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
