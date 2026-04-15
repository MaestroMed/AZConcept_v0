"use client";

import { TriptychCard } from "@/components/hero/TriptychCard";

const cards = [
  { pillar: "fabriquer" as const, title: "FABRIQUER.", href: "/garde-corps" },
  { pillar: "proteger" as const, title: "PROT\u00c9GER.", href: "/portes" },
  { pillar: "durer" as const, title: "DURER.", href: "/grilles" },
];

export function HeroTriptych() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen min-h-[600px] max-h-[1200px]">
        {cards.map((card, i) => (
          <TriptychCard key={card.pillar} {...card} index={i} />
        ))}
      </div>
    </section>
  );
}
