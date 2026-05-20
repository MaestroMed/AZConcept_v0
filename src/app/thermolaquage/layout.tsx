import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbsJsonLd, thermolaquageService } from "@/lib/seo";

const ogImage = `/api/og?${new URLSearchParams({ title: "Thermolaquage", subtitle: "La peau qui dure.", eyebrow: "Service · Finition" })}`;

export const metadata: Metadata = {
  title: "Thermolaquage — 200+ RAL, cabine 7 m, Adaptacolor",
  description:
    "Service thermolaquage haute performance : cabine 7 m, four XXL, 200+ teintes RAL, collections exclusives Adaptacolor (Patina, Polaris, Dichroïque). Express 48 h.",
  alternates: { canonical: "/thermolaquage" },
  openGraph: {
    type: "website",
    url: "/thermolaquage",
    title: "Thermolaquage | AZ Concept",
    description:
      "Cabine 7 m, four XXL, 200+ teintes RAL, collections Adaptacolor. Service express 48 h, garantie Qualicoat.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Thermolaquage AZ Concept" }],
  },
  twitter: { card: "summary_large_image", title: "Thermolaquage | AZ Concept", description: "200+ RAL, cabine 7 m, Adaptacolor. Express 48 h.", images: [ogImage] },
};

export default function ThermolaquageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          thermolaquageService,
          breadcrumbsJsonLd([
            { name: "Accueil", href: "/" },
            { name: "Thermolaquage", href: "/thermolaquage" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
