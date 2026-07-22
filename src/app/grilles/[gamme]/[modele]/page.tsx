import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import { getCategoryBySlug } from "@/data/categories";
import { getGammesByCategory, getGammeByCategoryAndSlug } from "@/data/gammes";
import { breadcrumbsJsonLd, modeleJsonLd } from "@/lib/seo";
import { ModeleContent } from "./ModeleContent";

const CATEGORY_SLUG = "grilles";

interface ModelePageProps {
  params: Promise<{ gamme: string; modele: string }>;
}

export async function generateStaticParams() {
  const gammes = getGammesByCategory(CATEGORY_SLUG);
  const params: { gamme: string; modele: string }[] = [];
  for (const gamme of gammes) {
    for (const modele of gamme.modeles) params.push({ gamme: gamme.slug, modele: modele.slug });
  }
  return params;
}

export async function generateMetadata({ params }: ModelePageProps): Promise<Metadata> {
  const { gamme: gammeSlug, modele: modeleSlug } = await params;
  const gamme = getGammeByCategoryAndSlug(CATEGORY_SLUG, gammeSlug);
  if (!gamme) return { title: "Modèle introuvable" };
  const modele = gamme.modeles.find((m) => m.slug === modeleSlug);
  if (!modele) return { title: "Modèle introuvable" };
  const category = getCategoryBySlug(CATEGORY_SLUG)!;
  const url = `/${CATEGORY_SLUG}/${gamme.slug}/${modele.slug}`;
  const ogImage = `/api/og?${new URLSearchParams({ title: modele.name, subtitle: modele.tagline, eyebrow: `${category.name} · ${gamme.name}` })}`;
  return {
    title: `${modele.name} — ${modele.tagline}`,
    description: modele.description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: `${modele.name} | AZ Concept`, description: modele.description, images: [{ url: ogImage, width: 1200, height: 630, alt: modele.name }] },
    twitter: { card: "summary_large_image", title: `${modele.name} — ${modele.tagline}`, description: modele.description, images: [ogImage] },
  };
}

export default async function ModelePage({ params }: ModelePageProps) {
  const { gamme: gammeSlug, modele: modeleSlug } = await params;
  const category = getCategoryBySlug(CATEGORY_SLUG)!;
  const gamme = getGammeByCategoryAndSlug(CATEGORY_SLUG, gammeSlug);
  if (!gamme) notFound();
  const modele = gamme.modeles.find((m) => m.slug === modeleSlug);
  if (!modele) notFound();

  const jsonLd = [
    modeleJsonLd(modele, gamme, category),
    breadcrumbsJsonLd([
      { name: "Accueil", href: "/" },
      { name: category.name, href: `/${CATEGORY_SLUG}` },
      { name: gamme.name, href: `/${CATEGORY_SLUG}/${gamme.slug}` },
      { name: modele.name, href: `/${CATEGORY_SLUG}/${gamme.slug}/${modele.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main id="contenu" className="flex-1">
        <ModeleContent category={category} gamme={gamme} modele={modele} categorySlug={CATEGORY_SLUG} />
      </main>
      <Footer />
    </>
  );
}
