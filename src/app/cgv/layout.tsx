import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "CGV d’AZ Concept : devis, commandes, paiement, livraison, garantie et droit applicable.",
};

export default function CGVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
