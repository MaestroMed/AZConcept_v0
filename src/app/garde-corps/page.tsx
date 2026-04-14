import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getCategoryBySlug } from "@/data/categories";
import { getGammesByCategory } from "@/data/gammes";
import { CategoryContent } from "./CategoryContent";

const category = getCategoryBySlug("garde-corps")!;
const gammes = getGammesByCategory("garde-corps");

export const metadata: Metadata = {
  title: "Garde-Corps",
  description: category.description,
};

export default function GardeCorpsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CategoryContent category={category} gammes={gammes} />
      </main>
      <Footer />
    </>
  );
}
