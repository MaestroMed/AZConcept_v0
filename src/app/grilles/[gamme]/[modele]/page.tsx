import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getCategoryBySlug } from "@/data/categories";
import {
  getGammesByCategory,
  getGammeByCategoryAndSlug,
} from "@/data/gammes";
import { ModeleContent } from "./ModeleContent";

const CATEGORY_SLUG = "grilles";

interface ModelePageProps {
  params: Promise<{ gamme: string; modele: string }>;
}

export async function generateStaticParams() {
  const gammes = getGammesByCategory(CATEGORY_SLUG);
  const params: { gamme: string; modele: string }[] = [];

  for (const gamme of gammes) {
    for (const modele of gamme.modeles) {
      params.push({ gamme: gamme.slug, modele: modele.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: ModelePageProps): Promise<Metadata> {
  const { gamme: gammeSlug, modele: modeleSlug } = await params;
  const gamme = getGammeByCategoryAndSlug(CATEGORY_SLUG, gammeSlug);

  if (!gamme) {
    return { title: "Modele introuvable" };
  }

  const modele = gamme.modeles.find((m) => m.slug === modeleSlug);

  if (!modele) {
    return { title: "Modele introuvable" };
  }

  return {
    title: `${modele.name} — ${modele.tagline}`,
    description: modele.description,
  };
}

export default async function ModelePage({ params }: ModelePageProps) {
  const { gamme: gammeSlug, modele: modeleSlug } = await params;
  const category = getCategoryBySlug(CATEGORY_SLUG)!;
  const gamme = getGammeByCategoryAndSlug(CATEGORY_SLUG, gammeSlug);

  if (!gamme) {
    notFound();
  }

  const modele = gamme.modeles.find((m) => m.slug === modeleSlug);

  if (!modele) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <ModeleContent
          category={category}
          gamme={gamme}
          modele={modele}
          categorySlug={CATEGORY_SLUG}
        />
      </main>
      <Footer />
    </>
  );
}
