import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbsJsonLd } from "@/lib/seo";

const ogImage = `/api/og?${new URLSearchParams({ title: "Contact,", subtitle: "un interlocuteur unique.", eyebrow: "Parler" })}`;

export const metadata: Metadata = {
  title: "Contact — AZ Concept Île-de-France",
  description:
    "Contactez AZ Concept pour vos projets de métallerie et thermolaquage. Atelier à Bruyères-sur-Oise — téléphone, email et formulaire.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact | AZ Concept",
    description: "Téléphone, email, atelier visitable sur rendez-vous.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Contact AZ Concept" }],
  },
  twitter: { card: "summary_large_image", title: "Contact | AZ Concept", description: "Téléphone, email, atelier visitable sur rendez-vous.", images: [ogImage] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Accueil", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
