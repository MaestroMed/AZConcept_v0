import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AZ Concept — Métallerie d’architecture",
    short_name: "AZ Concept",
    description:
      "Atelier de métallerie architecturale en Île-de-France. Garde-corps, portes, grilles & façades.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0d",
    theme_color: "#0a0a0d",
    lang: "fr",
    icons: [
      {
        src: "/images/branding/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
