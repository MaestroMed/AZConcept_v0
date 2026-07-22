import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroTriptych } from "@/components/sections/HeroTriptych";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/seo";

/*
 * Below-fold sections are code-split: their JS chunks load (and hydrate)
 * separately from the hero, cutting the critical bundle of the homepage.
 * SSR stays on for every one of them — SEO unaffected.
 */
const LogoMarquee = dynamic(() =>
  import("@/components/sections/LogoMarquee").then((m) => m.LogoMarquee)
);
const PhilosophySection = dynamic(() =>
  import("@/components/sections/PhilosophySection").then((m) => m.PhilosophySection)
);
const StatsCounter = dynamic(() =>
  import("@/components/sections/StatsCounter").then((m) => m.StatsCounter)
);
const GammesShowcase = dynamic(() =>
  import("@/components/sections/GammesShowcase").then((m) => m.GammesShowcase)
);
const RealisationsPreview = dynamic(() =>
  import("@/components/sections/RealisationsPreview").then((m) => m.RealisationsPreview)
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => m.Testimonials)
);
const CTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((m) => m.CTASection)
);

const homepageWebpage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "AZ Concept — Métallerie d’architecture",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  description:
    "Atelier de métallerie architecturale en Île-de-France. Garde-corps, portes, grilles, façades. Thermolaquage 200+ RAL, partenaire Jansen.",
  inLanguage: "fr-FR",
  primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/api/og` },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".display", "[data-speakable]"],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homepageWebpage} />
      <Header />
      <main id="contenu" className="flex-1 relative z-10">
        <HeroTriptych />
        <LogoMarquee />
        <PhilosophySection />
        <StatsCounter />
        <GammesShowcase />
        <RealisationsPreview />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
