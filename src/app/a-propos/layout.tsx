import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbsJsonLd } from "@/lib/seo";

const ogImage = `/api/og?${new URLSearchParams({ title: "L’atelier,", subtitle: "depuis 2018.", eyebrow: "Maison" })}`;

export const metadata: Metadata = {
  title: "À propos — Atelier depuis 2018",
  description:
    "AZ Concept, métallerie architecturale à Bruyères-sur-Oise. Atelier 1 800 m², dix gammes, 200+ teintes RAL, partenaire Jansen. Fondée en 2018.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    type: "website",
    url: "/a-propos",
    title: "À propos | AZ Concept",
    description: "Atelier de métallerie architecturale en Île-de-France, fondé en 2018.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "À propos AZ Concept" }],
  },
  twitter: { card: "summary_large_image", title: "À propos | AZ Concept", description: "Atelier de métallerie architecturale en Île-de-France.", images: [ogImage] },
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ])}
      />
      {children}
    </>
  );
}
