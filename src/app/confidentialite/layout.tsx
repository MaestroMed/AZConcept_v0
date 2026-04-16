import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — RGPD",
  description:
    "Politique de confidentialité d’AZ Concept. Protection des données personnelles, cookies, droits RGPD.",
};

export default function ConfidentialiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
