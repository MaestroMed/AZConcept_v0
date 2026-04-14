import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  description:
    "Mentions legales du site AZ Concept. Informations sur l'editeur, l'hebergement et la propriete intellectuelle.",
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
