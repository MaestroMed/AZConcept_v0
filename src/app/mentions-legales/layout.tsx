import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site AZ Concept — éditeur, hébergement, propriété intellectuelle, droit applicable.",
};

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
