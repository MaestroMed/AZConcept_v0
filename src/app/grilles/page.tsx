import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getCategoryBySlug } from "@/data/categories";
import { getGammesByCategory } from "@/data/gammes";
import { CategoryContent } from "./CategoryContent";

const category = getCategoryBySlug("grilles")!;
const gammes = getGammesByCategory("grilles");

export const metadata: Metadata = {
  title: "Grilles & Facades",
  description: category.description,
};

export default function GrillesPage() {
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
