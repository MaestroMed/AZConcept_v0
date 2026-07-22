import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import { getCategoryBySlug } from "@/data/categories";
import { getGammesByCategory } from "@/data/gammes";
import { breadcrumbsJsonLd, categoryJsonLd } from "@/lib/seo";
import { CategoryContent } from "./CategoryContent";

const category = getCategoryBySlug("portes")!;
const gammes = getGammesByCategory("portes");
const ogImage = `/api/og?${new URLSearchParams({ title: "Portes", subtitle: "L’ouverture comme signature.", eyebrow: `Catégorie · ${gammes.length} gammes` })}`;

export const metadata: Metadata = {
  title: "Portes — JANSEN DESIGN, FIREWALL, TECHNIQUE",
  description: category.description,
  alternates: { canonical: "/portes" },
  openGraph: {
    type: "website",
    url: "/portes",
    title: "Portes | AZ Concept",
    description: category.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Portes AZ Concept" }],
  },
  twitter: { card: "summary_large_image", title: "Portes | AZ Concept", description: category.description, images: [ogImage] },
};

export default function PortesPage() {
  return (
    <>
      <JsonLd
        data={[
          categoryJsonLd(category, gammes.length),
          breadcrumbsJsonLd([
            { name: "Accueil", href: "/" },
            { name: category.name, href: "/portes" },
          ]),
        ]}
      />
      <Header />
      <main id="contenu" className="flex-1">
        <CategoryContent category={category} gammes={gammes} />
      </main>
      <Footer />
    </>
  );
}
