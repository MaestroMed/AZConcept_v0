import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermolaquage — 200+ RAL, cabine 7 m, Adaptacolor",
  description:
    "Service thermolaquage haute performance : cabine 7 m, four XXL, 200+ teintes RAL, collections exclusives Adaptacolor (Patina, Polaris, Dichroïque). Express 48 h.",
};

export default function ThermolaquageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
