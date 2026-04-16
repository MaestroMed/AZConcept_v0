import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — AZ Concept Île-de-France",
  description:
    "Contactez AZ Concept pour vos projets de métallerie et thermolaquage. Atelier à Bruyères-sur-Oise — téléphone, email et formulaire.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
