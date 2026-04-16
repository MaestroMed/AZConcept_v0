import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander un devis — Étude gratuite sous 48 h",
  description:
    "Demandez un devis gratuit pour votre projet de métallerie ou thermolaquage. Réponse sous 48 h, plans DWG acceptés. AZ Concept, Île-de-France.",
};

export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
