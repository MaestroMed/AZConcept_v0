import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite d'AZ Concept. Protection des donnees personnelles, cookies, droits RGPD.",
};

export default function ConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
