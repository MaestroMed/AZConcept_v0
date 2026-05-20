import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import { getCategoryBySlug } from "@/data/categories";
import { getGammesByCategory } from "@/data/gammes";
import { breadcrumbsJsonLd, categoryJsonLd } from "@/lib/seo";
import { CategoryContent } from "./CategoryContent";

const category = getCategoryBySlug("grilles")!;
const gammes = getGammesByCategory("grilles");
const ogImage = `/api/og?${new URLSearchParams({ title: "Grilles & Façades", subtitle: "La peau du bâtiment.", eyebrow: `Catégorie · ${gammes.length} gammes` })}`;

export const metadata: Metadata = {
  title: "Grilles & Façades — AIRFLOW, DÉCOR, FACADE",
  description: category.description,
  alternates: { canonical: "/grilles" },
  openGraph: {
    type: "website",
    url: "/grilles",
    title: "Grilles & Façades | AZ Concept",
    description: category.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Grilles & Façades AZ Concept" }],
  },
  twitter: { card: "summary_large_image", title: "Grilles & Façades | AZ Concept", description: category.description, images: [ogImage] },
};

export default function GrillesPage() {
  return (
    <>
      <JsonLd
        data={[
          categoryJsonLd(category, gammes.length),
          breadcrumbsJsonLd([
            { name: "Accueil", href: "/" },
            { name: category.name, href: "/grilles" },
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
