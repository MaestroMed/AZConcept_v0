import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations — Portfolio AZ Concept",
  description:
    "Portfolio d’ouvrages livrés : garde-corps, portes monumentales, grilles et façades métalliques. 3 000+ projets en Île-de-France.",
};

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
