import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import { getCategoryBySlug } from "@/data/categories";
import { getGammesByCategory } from "@/data/gammes";
import { breadcrumbsJsonLd, categoryJsonLd } from "@/lib/seo";
import { CategoryContent } from "./CategoryContent";

const category = getCategoryBySlug("garde-corps")!;
const gammes = getGammesByCategory("garde-corps");
const ogImage = `/api/og?${new URLSearchParams({ title: "Garde-Corps", subtitle: "Sécurité et transparence.", eyebrow: `Catégorie · ${gammes.length} gammes` })}`;

export const metadata: Metadata = {
  title: "Garde-Corps — AURA, FORGE, SECU+, ATELIER",
  description: category.description,
  alternates: { canonical: "/garde-corps" },
  openGraph: {
    type: "website",
    url: "/garde-corps",
    title: "Garde-Corps | AZ Concept",
    description: category.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Garde-Corps AZ Concept" }],
  },
  twitter: { card: "summary_large_image", title: "Garde-Corps | AZ Concept", description: category.description, images: [ogImage] },
};

export default function GardeCorpsPage() {
  return (
    <>
      <JsonLd
        data={[
          categoryJsonLd(category, gammes.length),
          breadcrumbsJsonLd([
            { name: "Accueil", href: "/" },
            { name: category.name, href: "/garde-corps" },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <CategoryContent category={category} gammes={gammes} />
      </main>
      <Footer />
    </>
  );
}
