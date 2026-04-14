import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Generales de Vente",
  description:
    "Conditions Generales de Vente (CGV) d'AZ Concept. Devis, commandes, paiement, livraison et garantie.",
};

export default function CGVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
