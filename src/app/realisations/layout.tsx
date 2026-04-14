import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realisations",
  description:
    "Decouvrez nos realisations en metallerie architecturale : garde-corps, portes, grilles et facades. Projets en Ile-de-France et region parisienne.",
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
