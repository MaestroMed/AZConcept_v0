"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    word: "FABRIQUER.",
    color: "#B8B8C8",
    description: "Chaque ouvrage nait dans notre atelier de 1 800m\u00B2. Decoupe laser, soudure, pliage CNC — du metal brut a la piece finie.",
    details: ["Decoupe laser haute precision", "Soudure TIG / MIG certifiee", "Pliage CNC sur mesure", "Atelier 1 800m\u00B2 en IDF"],
  },
  {
    word: "PROT\u00c9GER.",
    color: "#4169E1",
    description: "Cabine thermolaquage 7m, four XXL. 200+ teintes RAL, collections Adaptacolor exclusives.",
    details: ["Cabine thermolaquage 7m", "Four XXL haute capacite", "200+ teintes RAL", "Collections Patina, Polaris, Dichroic"],
  },
  {
    word: "DURER.",
    color: "#8888A0",
    description: "Certifications coupe-feu, traitements anticorrosion, materiaux nobles — la durabilite dans notre ADN.",
    details: ["Certifications EI30 a EI120", "Traitements anticorrosion", "Garantie longue duree", "Partenariat Jansen acier premium"],
  },
];

export function PhilosophySection() {
  return (
    <section className="py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">Notre philosophie</p>
          <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
            Trois piliers.<br />
            <span className="text-text-secondary">Une obsession.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/20 rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface p-8 sm:p-10"
            >
              <h3 className="text-[1.6rem] sm:text-[2rem] font-bold tracking-[-0.02em] mb-5"
                style={{ color: pillar.color }}>
                {pillar.word}
              </h3>

              <div className="w-10 h-px mb-5" style={{ backgroundColor: pillar.color, opacity: 0.3 }} />

              <p className="text-[14px] text-text-secondary leading-[1.7] mb-6">
                {pillar.description}
              </p>

              <ul className="space-y-2.5">
                {pillar.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-[13px] text-text-muted">
                    <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: pillar.color, opacity: 0.5 }} />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
