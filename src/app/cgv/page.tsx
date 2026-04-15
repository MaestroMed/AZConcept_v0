"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { companyInfo } from "@/data/company";

const articles = [
  {
    title: "Article 1 — Objet",
    content: [
      `Les presentes Conditions Generales de Vente (CGV) regissent l'ensemble des relations commerciales entre ${companyInfo.legalName}, ci-apres "le Prestataire", et ses clients, ci-apres "le Client".`,
      "Toute commande implique l'acceptation sans reserve par le Client des presentes CGV.",
    ],
  },
  {
    title: "Article 2 — Devis et commandes",
    content: [
      "Les devis etablis par le Prestataire sont valables 30 jours a compter de leur date d'emission, sauf indication contraire.",
      "Toute commande ne devient definitive qu'apres acceptation ecrite du devis par le Client et versement de l'acompte prevu.",
    ],
  },
  {
    title: "Article 3 — Prix",
    content: [
      "Les prix sont exprimes en euros hors taxes (HT). La TVA applicable est celle en vigueur au jour de la facturation.",
      "Les prix peuvent etre revises en cas de variation significative du cout des matieres premieres, sous reserve d'en informer le Client dans un delai raisonnable.",
    ],
  },
  {
    title: "Article 4 — Conditions de paiement",
    content: [
      "Sauf conditions particulieres, un acompte de 40% est exige a la commande. Le solde est payable a la livraison ou selon l'echeancier convenu.",
      "Tout retard de paiement entrainera des penalites de retard calculees au taux legal en vigueur, ainsi qu'une indemnite forfaitaire de 40 euros pour frais de recouvrement.",
    ],
  },
  {
    title: "Article 5 — Delais de livraison",
    content: [
      "Les delais de livraison sont donnes a titre indicatif. Un retard de livraison ne pourra donner lieu a aucune penalite, indemnite, annulation de commande ou refus de reception.",
      "Le service express sous 48h est disponible sous conditions et moyennant un supplement tarifaire.",
    ],
  },
  {
    title: "Article 6 — Reception et reclamations",
    content: [
      "Le Client doit verifier l'etat des marchandises a la livraison. Toute reclamation doit etre formulee par ecrit dans un delai de 7 jours suivant la reception.",
      "Passe ce delai, aucune reclamation ne sera recevable.",
    ],
  },
  {
    title: "Article 7 — Garantie",
    content: [
      "Les ouvrages metalliques beneficient d'une garantie conforme aux dispositions legales en vigueur.",
      "La garantie couvre les defauts de fabrication et de thermolaquage dans des conditions normales d'utilisation. Elle ne couvre pas l'usure normale, les dommages causes par un usage inapproprie ou un defaut d'entretien.",
    ],
  },
  {
    title: "Article 8 — Responsabilite",
    content: [
      "La responsabilite du Prestataire est limitee au montant de la commande concernee.",
      "Le Prestataire ne saurait etre tenu responsable des dommages indirects, tels que perte de chiffre d'affaires, prejudice commercial ou perte de chance.",
    ],
  },
  {
    title: "Article 9 — Propriete intellectuelle",
    content: [
      "Les plans, dessins et documents techniques remis au Client restent la propriete du Prestataire et ne peuvent etre communiques a des tiers sans autorisation ecrite.",
    ],
  },
  {
    title: "Article 10 — Droit applicable et litiges",
    content: [
      "Les presentes CGV sont soumises au droit francais.",
      "En cas de litige, les parties s'efforceront de trouver une solution amiable. A defaut, le tribunal competent sera celui du siege social du Prestataire.",
    ],
  },
];

export default function CGVPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Conditions Generales de Vente"
          subtitle="CGV applicables aux prestations d'AZ Concept"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "CGV" },
          ]}
        />

        <section className="py-[var(--section-padding)]">
          <div className="max-w-3xl mx-auto px-[var(--container-padding)]">
            <div className="space-y-10">
              {articles.map((article, i) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h2 className="text-[2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-4">
                    {article.title}
                  </h2>
                  <div className="space-y-3">
                    {article.content.map((paragraph, j) => (
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
