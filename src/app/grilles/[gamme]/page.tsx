import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getCategoryBySlug } from "@/data/categories";
import {
  getGammesByCategory,
  getGammeByCategoryAndSlug,
} from "@/data/gammes";
import { GammeContent } from "./GammeContent";

const CATEGORY_SLUG = "grilles";

interface GammePageProps {
  params: Promise<{ gamme: string }>;
}

export async function generateStaticParams() {
  const gammes = getGammesByCategory(CATEGORY_SLUG);
  return gammes.map((g) => ({ gamme: g.slug }));
}

export async function generateMetadata({
  params,
}: GammePageProps): Promise<Metadata> {
  const { gamme: gammeSlug } = await params;
  const gamme = getGammeByCategoryAndSlug(CATEGORY_SLUG, gammeSlug);

  if (!gamme) {
    return { title: "Gamme introuvable" };
  }

  return {
    title: `${gamme.name} — ${gamme.tagline}`,
    description: gamme.description,
  };
}

export default async function GammePage({ params }: GammePageProps) {
  const { gamme: gammeSlug } = await params;
  const category = getCategoryBySlug(CATEGORY_SLUG)!;
  const gamme = getGammeByCategoryAndSlug(CATEGORY_SLUG, gammeSlug);

  if (!gamme) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <GammeContent
          category={category}
          gamme={gamme}
          categorySlug={CATEGORY_SLUG}
        />
      </main>
      <Footer />
    </>
  );
}
