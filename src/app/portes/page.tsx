import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getCategoryBySlug } from "@/data/categories";
import { getGammesByCategory } from "@/data/gammes";
import { CategoryContent } from "./CategoryContent";

const category = getCategoryBySlug("portes")!;
const gammes = getGammesByCategory("portes");

export const metadata: Metadata = {
  title: "Portes",
  description: category.description,
};

export default function PortesPage() {
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
