import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroTriptych } from "@/components/sections/HeroTriptych";
import { GammesShowcase } from "@/components/sections/GammesShowcase";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { RealisationsPreview } from "@/components/sections/RealisationsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/seo";

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
      <main className="flex-1 relative z-10">
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
