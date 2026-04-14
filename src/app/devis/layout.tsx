import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis gratuit pour votre projet de metallerie ou thermolaquage. Reponse sous 48h, plans DWG acceptes. AZ Concept, Ile-de-France.",
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
