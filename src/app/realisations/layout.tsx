import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbsJsonLd, realisationsItemList } from "@/lib/seo";
import { realisations } from "@/data/realisations";

const ogImage = `/api/og?${new URLSearchParams({ title: "Réalisations", subtitle: "Nos ouvrages livrés.", eyebrow: "Portfolio" })}`;

export const metadata: Metadata = {
  title: "Réalisations — Portfolio AZ Concept",
  description:
    "Portfolio d’ouvrages livrés : garde-corps, portes monumentales, grilles et façades métalliques. 3 000+ projets en Île-de-France.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    type: "website",
    url: "/realisations",
    title: "Réalisations | AZ Concept",
    description: "3 000+ projets de métallerie architecturale livrés en Île-de-France.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Portfolio AZ Concept" }],
  },
  twitter: { card: "summary_large_image", title: "Réalisations | AZ Concept", description: "Portfolio de métallerie architecturale.", images: [ogImage] },
};

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          realisationsItemList(realisations),
          breadcrumbsJsonLd([
            { name: "Accueil", href: "/" },
            { name: "Réalisations", href: "/realisations" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
