"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { companyInfo } from "@/data/company";

const sections = [
  {
    title: "1. Editeur du site",
    content: [
      `Raison sociale : ${companyInfo.legalName}`,
      `Adresse : ${companyInfo.address}, ${companyInfo.city}`,
      "SIRET : [SIRET a completer]",
      "RCS : [RCS a completer]",
      "Capital social : [A completer]",
      `Telephone : ${companyInfo.phone}`,
      `Email : ${companyInfo.email}`,
      "Directeur de la publication : [Nom du dirigeant]",
    ],
  },
  {
    title: "2. Hebergement",
    content: [
      "Hebergeur : [Nom de l'hebergeur]",
      "Adresse : [Adresse de l'hebergeur]",
      "Telephone : [Telephone de l'hebergeur]",
    ],
  },
  {
    title: "3. Propriete intellectuelle",
    content: [
      `L'ensemble du contenu de ce site (textes, images, videos, logos, icones, sons, logiciels, etc.) est la propriete exclusive de ${companyInfo.legalName} ou de ses partenaires et est protege par les lois francaises et internationales relatives a la propriete intellectuelle.`,
      "Toute reproduction, representation, modification, publication ou adaptation de tout ou partie des elements du site est interdite sans autorisation ecrite prealable.",
    ],
  },
  {
    title: "4. Limitation de responsabilite",
    content: [
      `${companyInfo.legalName} s'efforce de fournir sur le site des informations aussi precises que possible. Toutefois, il ne pourra etre tenu responsable des omissions, des inexactitudes et des carences dans la mise a jour.`,
      "Les informations presentes sur le site sont donnees a titre indicatif et sont susceptibles d'evoluer. Elles ne sont en aucun cas contractuelles.",
    ],
  },
  {
    title: "5. Liens hypertextes",
    content: [
      "Le site peut contenir des liens vers d'autres sites. AZ Concept n'exerce aucun controle sur ces sites et decline toute responsabilite quant a leur contenu.",
    ],
  },
  {
    title: "6. Droit applicable",
    content: [
      "Le present site et ses conditions d'utilisation sont regis par le droit francais. En cas de litige, les tribunaux francais seront competents.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Mentions legales"
          subtitle={`Informations legales du site ${companyInfo.name}`}
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Mentions legales" },
          ]}
        />

        <section className="py-[var(--section-padding)]">
          <div className="max-w-3xl mx-auto px-[var(--container-padding)]">
            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h2 className="text-[15px] font-medium text-text-primary mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-[14px] text-text-secondary leading-[1.7]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 pt-8 border-t border-border/30 text-[13px] text-text-muted"
            >
              Derniere mise a jour : Avril 2026
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
