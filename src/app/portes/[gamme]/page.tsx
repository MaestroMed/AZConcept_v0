import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import { getCategoryBySlug } from "@/data/categories";
import { getGammesByCategory, getGammeByCategoryAndSlug } from "@/data/gammes";
import { breadcrumbsJsonLd, gammeJsonLd } from "@/lib/seo";
import { GammeContent } from "./GammeContent";

const CATEGORY_SLUG = "portes";

interface GammePageProps {
  params: Promise<{ gamme: string }>;
}

export async function generateStaticParams() {
  const gammes = getGammesByCategory(CATEGORY_SLUG);
  return gammes.map((g) => ({ gamme: g.slug }));
}

export async function generateMetadata({ params }: GammePageProps): Promise<Metadata> {
  const { gamme: gammeSlug } = await params;
  const gamme = getGammeByCategoryAndSlug(CATEGORY_SLUG, gammeSlug);
  const category = getCategoryBySlug(CATEGORY_SLUG)!;
  if (!gamme) return { title: "Gamme introuvable" };
  const url = `/${CATEGORY_SLUG}/${gamme.slug}`;
  const ogImage = `/api/og?${new URLSearchParams({ title: gamme.name, subtitle: gamme.tagline, eyebrow: `Gamme · ${category.name}` })}`;
  return {
    title: `${gamme.name} — ${gamme.tagline}`,
    description: gamme.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${gamme.name} — ${category.name} | AZ Concept`,
      description: gamme.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: gamme.name }],
    },
    twitter: { card: "summary_large_image", title: `${gamme.name} — ${gamme.tagline}`, description: gamme.description, images: [ogImage] },
  };
}

export default async function GammePage({ params }: GammePageProps) {
  const { gamme: gammeSlug } = await params;
  const category = getCategoryBySlug(CATEGORY_SLUG)!;
  const gamme = getGammeByCategoryAndSlug(CATEGORY_SLUG, gammeSlug);
  if (!gamme) notFound();

  const jsonLd = [
    gammeJsonLd(gamme, category),
    breadcrumbsJsonLd([
      { name: "Accueil", href: "/" },
      { name: category.name, href: `/${CATEGORY_SLUG}` },
      { name: gamme.name, href: `/${CATEGORY_SLUG}/${gamme.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <GammeContent category={category} gamme={gamme} categorySlug={CATEGORY_SLUG} />
      </main>
      <Footer />
    </>
  );
}
