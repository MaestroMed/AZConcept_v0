import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroTriptych } from "@/components/sections/HeroTriptych";
import { GammesShowcase } from "@/components/sections/GammesShowcase";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { RealisationsPreview } from "@/components/sections/RealisationsPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroTriptych />
        <GammesShowcase />
        <StatsCounter />
        <PhilosophySection />
        <LogoMarquee />
        <RealisationsPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
