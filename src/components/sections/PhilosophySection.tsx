"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";

const pillars = [
  {
    word: "FABRIQUER.",
    color: "#B8B8C8",
    description:
      "Chaque ouvrage nait dans notre atelier de 1 800m2. Decoupe laser, soudure, pliage CNC — du metal brut a la piece finie, nous maitrisons toute la chaine.",
    details: [
      "Decoupe laser haute precision",
      "Soudure TIG / MIG certifiee",
      "Pliage CNC sur mesure",
      "Atelier 1 800m2 en IDF",
    ],
    image: "/images/ambiance/welding-sparks.jpg",
  },
  {
    word: "PROTEGER.",
    color: "#2563EB",
    description:
      "Notre cabine de thermolaquage de 7 metres et notre four XXL garantissent une finition impeccable. 200+ teintes RAL, collections Adaptacolor exclusives.",
    details: [
      "Cabine thermolaquage 7m",
      "Four XXL haute capacite",
      "200+ teintes RAL",
      "Collections Patina, Polaris, Dichroic",
    ],
    image: "/images/ambiance/industrial-workshop.jpg",
  },
  {
    word: "DURER.",
    color: "#8888A0",
    description:
      "Nos ouvrages sont concus pour traverser les decennies. Certifications coupe-feu, traitements anticorrosion, materiaux nobles — la durabilite est dans notre ADN.",
    details: [
      "Certifications EI30 a EI120",
      "Traitements anticorrosion",
      "Garantie longue duree",
      "Partenariat Jansen acier premium",
    ],
    image: "/images/ambiance/architecture-moderne.jpg",
  },
];

export function PhilosophySection() {
  return (
    <section className="py-[var(--section-padding)] bg-surface-elevated relative overflow-hidden">
      <div className="noise-overlay absolute inset-0" />

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <SectionHeader
          title="Notre Philosophie"
          subtitle="Trois piliers. Une obsession : l'excellence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-border-light transition-all duration-500"
            >
              {/* Background image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.word}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-surface-card" />
                {/* Word overlay */}
                <div className="absolute inset-0 flex items-end p-6">
                  <h3
                    className="text-3xl sm:text-4xl font-black tracking-tight"
                    style={{ color: pillar.color }}
                  >
                    {pillar.word}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-surface-card">
                {/* Line separator */}
                <div
                  className="w-12 h-[2px] mb-5"
                  style={{ backgroundColor: pillar.color }}
                />

                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <ul className="space-y-2">
                  {pillar.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-xs text-text-muted"
                    >
                      <div
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: pillar.color }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
