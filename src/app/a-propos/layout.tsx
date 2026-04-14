import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A propos",
  description:
    "Decouvrez l'histoire d'AZ Concept : metallerie d'exception depuis 2018. Atelier 1800m2, 10 gammes, 200+ couleurs RAL en Ile-de-France.",
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
