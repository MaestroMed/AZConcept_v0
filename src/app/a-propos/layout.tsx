import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Atelier depuis 2018",
  description:
    "AZ Concept, métallerie architecturale à Bruyères-sur-Oise. Atelier 1 800 m², dix gammes, 200+ teintes RAL, partenaire Jansen. Fondée en 2018.",
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return children;
}
