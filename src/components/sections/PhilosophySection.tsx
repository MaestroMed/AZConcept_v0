"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";

const pillars = [
  {
    index: "01",
    word: "Fabriquer.",
    italic: "Le geste.",
    description:
      "Chaque ouvrage naît dans notre atelier de 1 800 m². Découpe laser, soudure TIG/MIG certifiée, pliage CNC — du métal brut à la pièce finie, sans sous-traitance.",
    details: [
      { k: "Atelier", v: "1 800 m² · Île-de-France" },
      { k: "Découpe", v: "Laser haute précision" },
      { k: "Soudure", v: "TIG / MIG certifiée" },
      { k: "Pliage", v: "CNC sur mesure" },
    ],
  },
  {
    index: "02",
    word: "Protéger.",
    italic: "La matière.",
    description:
      "Cabine thermolaquage 7 m, four XXL. 200+ teintes RAL et collections exclusives Adaptacolor — Patina, Polaris, Dichroïque. La finition comme promesse de longévité.",
    details: [
      { k: "Cabine", v: "Thermolaquage 7 m" },
      { k: "Four", v: "XXL haute capacité" },
      { k: "Palette", v: "200+ teintes RAL" },
      { k: "Collections", v: "Patina · Polaris · Dichroïque" },
    ],
  },
  {
    index: "03",
    word: "Durer.",
    italic: "Le temps.",
    description:
      "Certifications coupe-feu EI 30 à EI 120, traitements anti-corrosion, matériaux nobles. Le partenariat Jansen nous donne accès à l’acier premium architectural.",
    details: [
      { k: "Coupe-feu", v: "EI 30 → EI 120" },
      { k: "Anticorrosion", v: "Traitements complets" },
      { k: "Partenaire", v: "Jansen · Acier premium" },
      { k: "Garantie", v: "Longue durée" },
    ],
  },
];

export function PhilosophySection() {
  return (
    <section className="relative py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Chapter header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Eyebrow index="Chapitre I" label="Philosophie" className="mb-6" />
            <h2 className="display text-ivory text-[clamp(2.4rem,5vw,4rem)] leading-[0.98] tracking-[-0.028em]">
              Trois verbes.<br />
              <span className="display-italic font-light text-platinum">Une discipline.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 lg:mt-6"
          >
            <p className="text-[17px] leading-[1.65] text-pearl/85">
              Nous ne livrons pas un produit. Nous livrons un ouvrage —
              dessiné avec les architectes, fabriqué à la main, protégé
              pour un siècle. Cette trilogie guide chaque décision,
              chaque soudure, chaque laque.
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="space-y-px">
          {pillars.map((p, i) => (
            <motion.article
              key={p.word}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-ivory/8 last:border-b"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 sm:py-14">
                {/* Index */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-[11px] tabular-nums text-champagne">
                    {p.index} / 03
                  </span>
                </div>
                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="display text-ivory text-[clamp(2rem,4.5vw,3.2rem)] leading-[1] tracking-[-0.02em]">
                    {p.word}
                  </h3>
                  <p className="mt-2 display-italic font-light text-champagne text-[clamp(1.3rem,2.2vw,1.8rem)] tracking-[-0.01em]">
                    {p.italic}
                  </p>
                </div>
                {/* Body */}
                <div className="lg:col-span-4">
                  <p className="text-[15px] leading-[1.65] text-pearl/80">
                    {p.description}
                  </p>
                </div>
                {/* Specs */}
                <div className="lg:col-span-3">
                  <dl className="space-y-3">
                    {p.details.map((d) => (
                      <div key={d.k} className="flex items-baseline justify-between gap-4 border-b border-ivory/6 pb-2">
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ash">
                          {d.k}
                        </dt>
                        <dd className="text-[12.5px] text-pearl text-right leading-tight">
                          {d.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
