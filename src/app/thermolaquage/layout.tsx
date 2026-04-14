import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermolaquage",
  description:
    "Thermolaquage haute performance : cabine 7m, 200+ couleurs RAL, finitions Adaptacolor, service express 48h. AZ Concept, Ile-de-France.",
};

export default function ThermolaquageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
