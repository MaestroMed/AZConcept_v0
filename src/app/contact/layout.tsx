import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez AZ Concept pour vos projets de metallerie et thermolaquage. Telephone, email, formulaire de contact. Bruyeres-sur-Oise, Ile-de-France.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
