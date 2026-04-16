"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Ruler, Zap, Sparkles, Layers, ShieldCheck, ArrowRight, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/shared/Button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { useBodyLock } from "@/lib/hooks/useBodyLock";

const collections = [
  {
    name: "Polaris",
    description: "Finitions métalliques",
    accent: "#c7c3b9",
    images: [
      "/images/collections/polaris/1011.jpg",
      "/images/collections/polaris/1012.jpg",
      "/images/collections/polaris/1021.jpg",
      "/images/collections/polaris/1022.jpg",
      "/images/collections/polaris/1031.jpg",
      "/images/collections/polaris/1041.jpg",
      "/images/collections/polaris/1061.jpg",
      "/images/collections/polaris/1071.jpg",
    ],
  },
  {
    name: "Patina",
    description: "Patines oxydées",
    accent: "#c57c45",
    images: [
      "/images/collections/patina/295.jpg",
      "/images/collections/patina/296.jpg",
      "/images/collections/patina/307.jpg",
      "/images/collections/patina/319.jpg",
      "/images/collections/patina/331.jpg",
      "/images/collections/patina/343.jpg",
      "/images/collections/patina/344.jpg",
      "/images/collections/patina/355.jpg",
    ],
  },
  {
    name: "Dichroïque",
    description: "Effets chromatiques",
    accent: "#6b8aa8",
    images: [
      "/images/collections/dichroic/140101.jpg",
      "/images/collections/dichroic/140102.jpg",
      "/images/collections/dichroic/140103.jpg",
      "/images/collections/dichroic/140104.jpg",
      "/images/collections/dichroic/140201.jpg",
      "/images/collections/dichroic/140202.jpg",
      "/images/collections/dichroic/140203.jpg",
      "/images/collections/dichroic/140204.jpg",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Réception", description: "Inspection visuelle et dimensionnelle. Vérification de la compatibilité avec le process." , image: "/images/ambiance/atelier-metal.jpg" },
  { step: "02", title: "Sablage / Grenaillage", description: "Préparation de surface par projection d'abrasif. Élimination rouille, calamine, anciennes peintures." , image: "/images/ambiance/metal-texture.jpg" },
  { step: "03", title: "Accrochage", description: "Mise en place sur les balancelles. Optimisation du positionnement pour couverture uniforme." , image: "/images/ambiance/steel-structure.jpg" },
  { step: "04", title: "Poudrage électrostatique", description: "Application poudre par pistolet électrostatique. Épaisseur contrôlée 60-80 microns." , image: "/images/ambiance/industrial-workshop.jpg" },
  { step: "05", title: "Cuisson 180-200°C", description: "Polymérisation en four ventilé. Durée et température ajustées au type de poudre." , image: "/images/ambiance/welding-sparks.jpg" },
  { step: "06", title: "Contrôle qualité", description: "Vérification épaisseur, adhérence, aspect. Chaque pièce est inspectée avant expédition." , image: "/images/ambiance/building-facade.jpg" },
];

const advantages = [
  { icon: Palette,     title: "200+ RAL",           body: "Toutes les teintes du nuancier RAL classique disponibles, plus les collections spéciales sur demande." },
  { icon: Ruler,       title: "Cabine 7 m",         body: "Cabine surdimensionnée pour les pièces de grande longueur : garde-corps, portails, structures." },
  { icon: Zap,         title: "Express 48 h",       body: "Service express pour les chantiers urgents. Thermolaquage et expédition sous 48 heures ouvrées." },
  { icon: Sparkles,    title: "Adaptacolor",        body: "Finitions exclusives Patina, Polaris et Dichroïque pour des rendus uniques et haut de gamme." },
  { icon: Layers,      title: "60-80 microns",      body: "Épaisseur de couche optimale, contrôlée par appareil de mesure. Protection durable garantie." },
  { icon: ShieldCheck, title: "Qualicoat & AAMA",   body: "Garantie anticorrosion et tenue des teintes. Conformité aux normes Qualicoat et AAMA." },
];

const ralColors = [
  { hex: "#9C1A1A", code: "RAL 3003" },
  { hex: "#252525", code: "RAL 9005" },
  { hex: "#F5F1E8", code: "RAL 9001" },
  { hex: "#2B2F35", code: "RAL 7016" },
  { hex: "#8C6B2E", code: "RAL 1036" },
  { hex: "#2E4A35", code: "RAL 6009" },
  { hex: "#1E2B40", code: "RAL 5011" },
  { hex: "#8A8880", code: "RAL 7035" },
  { hex: "#B85B3D", code: "RAL 8004" },
  { hex: "#C9A35C", code: "AZ Signature" },
  { hex: "#E8E3D6", code: "RAL 9010" },
  { hex: "#3E3E48", code: "RAL 7043" },
];

export default function ThermolaquagePage() {
  const [zoomImg, setZoomImg] = useState<{ src: string; name: string } | null>(null);

  useBodyLock(!!zoomImg);

  useEffect(() => {
    if (!zoomImg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomImg(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomImg]);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Cinematic hero */}
        <section className="relative h-[75vh] min-h-[560px] max-h-[880px] overflow-hidden">
          <Image
            src="/images/ambiance/welding-sparks.jpg"
            alt="Atelier thermolaquage AZ Concept"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover [filter:saturate(0.95)_contrast(1.08)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink" />
          <div className="absolute inset-0 opacity-70"
            style={{ background: "radial-gradient(80% 60% at 50% 110%, rgba(201,163,92,0.22) 0%, transparent 60%)" }}
          />

          <div className="absolute top-0 inset-x-0 pt-[calc(76px+2rem)]">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
              <nav aria-label="Fil d&rsquo;Ariane" className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em]">
                <Link href="/" className="text-platinum hover:text-champagne transition-colors">Accueil</Link>
                <span className="text-ash">›</span>
                <span className="text-ivory">Thermolaquage</span>
              </nav>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 pb-16">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="eyebrow text-champagne/85">Service · Finition</span>
                <h1 className="mt-6 display text-ivory text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em]">
                  Thermolaquage,<br />
                  <span className="display-italic font-light text-champagne">la peau qui dure.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-[16px] sm:text-[17px] leading-[1.6] text-pearl/85">
                  Cabine 7 m, four XXL, 200+ teintes RAL, collections exclusives Adaptacolor.
                  La protection et la couleur traitées avec la même exigence que la structure.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process — horizontal scroll-snap with photo per step */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] mb-14 sm:mb-20">
            <Eyebrow index="Chapitre I" label="Process" className="mb-6" />
            <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
              Six étapes,<br />
              <span className="display-italic font-light text-platinum">une finition.</span>
            </h2>
          </div>

          <div className="snap-row gap-5 sm:gap-7 px-[var(--container-padding)] pb-4">
            {processSteps.map((s, i) => (
              <motion.article
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-[80vw] sm:w-[48vw] lg:w-[32vw]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ivory/8">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    quality={80}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 48vw, 32vw"
                    className="object-cover [filter:saturate(0.85)_contrast(1.1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-ink/20" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <span className="font-mono text-[11px] tabular-nums text-champagne self-start bg-ink/40 backdrop-blur-sm rounded-full px-3 py-1 border border-ivory/10">
                      {s.step} / 06
                    </span>
                    <div>
                      <h3 className="display text-ivory text-[clamp(1.4rem,2.4vw,1.9rem)] tracking-[-0.015em] leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[13.5px] leading-[1.6] text-pearl/80">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-14 sm:mb-20">
              <Eyebrow index="Chapitre II" label="Les garanties" className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                Six engagements<br />
                <span className="display-italic font-light text-champagne">de finition.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/8 border border-ivory/8">
              {advantages.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-ink p-8 sm:p-10"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-champagne/30 bg-champagne/5">
                        <Icon size={18} className="text-champagne" />
                      </span>
                      <span className="font-mono text-[10px] tabular-nums text-ash">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="display text-ivory text-[clamp(1.4rem,2.2vw,1.8rem)] leading-tight tracking-[-0.015em]">
                      {a.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-[1.65] text-pearl/75">{a.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Collections — snap carousels */}
        {collections.map((coll, collIdx) => (
          <section key={coll.name} className="relative py-[clamp(5rem,10vw,10rem)] border-t border-ivory/8">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] mb-12">
              <div className="flex items-end justify-between flex-wrap gap-6">
                <div>
                  <Eyebrow index={`Collection ${String(collIdx + 1).padStart(2, "0")}`} label="Adaptacolor" className="mb-5" />
                  <h2 className="display text-ivory text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.025em]">
                    {coll.name}.<br />
                    <span className="display-italic font-light" style={{ color: coll.accent }}>
                      {coll.description}.
                    </span>
                  </h2>
                </div>
                <span className="font-mono text-[10.5px] tabular-nums text-ash">
                  {String(coll.images.length).padStart(2, "0")} finitions
                </span>
              </div>
            </div>

            <div className="snap-row gap-4 sm:gap-5 px-[var(--container-padding)] pb-4">
              {coll.images.map((src, i) => (
                <motion.button
                  key={src}
                  onClick={() => setZoomImg({ src, name: `${coll.name} · ${String(i + 1).padStart(2, "0")}` })}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative w-[60vw] sm:w-[32vw] lg:w-[22vw] aspect-square overflow-hidden rounded-[2px] border border-ivory/8"
                >
                  <Image
                    src={src}
                    alt={`${coll.name} ${i + 1}`}
                    fill
                    quality={80}
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 32vw, 22vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 p-4 flex items-end justify-between">
                    <span className="font-mono text-[10px] tabular-nums text-ivory/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ivory/75">
                      {coll.name}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        ))}

        {/* RAL palette */}
        <section className="relative py-[var(--section-padding)] border-t border-ivory/8">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <Eyebrow index="Chapitre III" label="Nuancier" className="mb-6" />
                <h2 className="display text-ivory text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.025em]">
                  200+ RAL,<br />
                  <span className="display-italic font-light text-champagne">sur demande.</span>
                </h2>
                <p className="mt-8 text-[15.5px] leading-[1.7] text-pearl/80 max-w-sm">
                  Du blanc pur RAL 9010 au noir profond RAL 9005, en passant par
                  les gris anthracite, bleus acier, et toute teinte sur mesure.
                </p>
                <Button href="/devis" variant="outline" size="lg" className="mt-10">
                  Demander une teinte
                  <ArrowRight size={14} />
                </Button>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-px bg-ivory/8 border border-ivory/8">
                  {ralColors.map((c, i) => (
                    <motion.div
                      key={c.code + i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: i * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-ink p-5 group"
                    >
                      <div
                        className="aspect-square rounded-[2px] mb-3 border border-ivory/5"
                        style={{ backgroundColor: c.hex }}
                      />
                      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-platinum group-hover:text-ivory transition-colors">
                        {c.code}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-[var(--section-padding)] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(201,163,92,0.12) 0%, transparent 70%)" }} />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

          <div className="relative max-w-3xl mx-auto px-[var(--container-padding)] text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-champagne/85">
                — Votre finition —
              </span>
              <h2 className="mt-8 display text-ivory text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
                Une teinte<br />
                <span className="display-italic font-light text-champagne">en tête ?</span>
              </h2>
              <p className="mt-8 text-[16px] leading-[1.65] text-pearl/80 max-w-xl mx-auto">
                Envoyez-nous la référence RAL ou la collection Adaptacolor.
                Nous répondons sous 48 h avec un devis de thermolaquage.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/devis" size="lg">
                  Demander un devis
                  <ArrowRight size={14} />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Poser une question
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Zoom modal */}
      <AnimatePresence>
        {zoomImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/90 backdrop-blur-md flex items-center justify-center p-6 sm:p-12"
            onClick={() => setZoomImg(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl aspect-square rounded-[2px] overflow-hidden border border-ivory/15"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={zoomImg.src} alt={zoomImg.name} fill quality={95} sizes="800px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/85 to-transparent flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ivory">{zoomImg.name}</span>
                <button
                  onClick={() => setZoomImg(null)}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-ivory/20 text-ivory/90 hover:border-champagne hover:text-champagne transition-colors"
                  aria-label="Fermer"
                >
                  <X size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
