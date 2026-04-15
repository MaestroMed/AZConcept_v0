"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { companyInfo } from "@/data/company";

const sections = [
  {
    title: "1. Responsable du traitement",
    content: [
      `Le responsable du traitement des donnees personnelles est ${companyInfo.legalName}, situe au ${companyInfo.address}, ${companyInfo.city}.`,
      `Contact : ${companyInfo.email}`,
    ],
  },
  {
    title: "2. Donnees collectees",
    content: [
      "Nous collectons les donnees personnelles que vous nous fournissez volontairement via nos formulaires de contact et de demande de devis :",
      "— Nom et prenom\n— Adresse email\n— Numero de telephone\n— Nom de societe (le cas echeant)\n— Description de votre projet",
      "Ces donnees sont necessaires au traitement de votre demande et a la relation commerciale.",
    ],
  },
  {
    title: "3. Finalites du traitement",
    content: [
      "Vos donnees personnelles sont collectees pour les finalites suivantes :",
      "— Repondre a vos demandes de contact et de devis\n— Assurer le suivi commercial de votre projet\n— Vous adresser des informations relatives a nos prestations\n— Respecter nos obligations legales et reglementaires",
    ],
  },
  {
    title: "4. Base legale",
    content: [
      "Le traitement de vos donnees repose sur :",
      "— Votre consentement lors de l'envoi d'un formulaire\n— L'execution d'un contrat ou de mesures precontractuelles\n— Notre interet legitime a gerer notre activite commerciale",
    ],
  },
  {
    title: "5. Duree de conservation",
    content: [
      "Vos donnees sont conservees pendant la duree necessaire aux finalites pour lesquelles elles ont ete collectees :",
      "— Demandes de contact : 3 ans a compter du dernier contact\n— Donnees clients : duree de la relation contractuelle + 5 ans (obligations legales)\n— Cookies : 13 mois maximum",
    ],
  },
  {
    title: "6. Destinataires des donnees",
    content: [
      "Vos donnees personnelles ne sont communiquees a aucun tiers, sauf obligation legale.",
      "Elles sont accessibles uniquement aux equipes internes habilitees d'AZ Concept.",
    ],
  },
  {
    title: "7. Vos droits",
    content: [
      "Conformement au RGPD, vous disposez des droits suivants :",
      "— Droit d'acces a vos donnees\n— Droit de rectification\n— Droit a l'effacement\n— Droit a la limitation du traitement\n— Droit a la portabilite\n— Droit d'opposition",
      `Pour exercer vos droits, contactez-nous a : ${companyInfo.email}`,
      "Vous pouvez egalement adresser une reclamation a la CNIL (www.cnil.fr).",
    ],
  },
  {
    title: "8. Cookies",
    content: [
      "Ce site utilise des cookies strictement necessaires a son fonctionnement.",
      "Des cookies analytiques peuvent etre utilises pour mesurer l'audience du site. Vous pouvez les refuser via le bandeau de consentement.",
    ],
  },
  {
    title: "9. Securite",
    content: [
      "Nous mettons en oeuvre des mesures techniques et organisationnelles appropriees pour proteger vos donnees personnelles contre tout acces, modification, divulgation ou destruction non autorise.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Politique de confidentialite"
          subtitle="Protection de vos donnees personnelles"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Confidentialite" },
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
                        className="text-[14px] text-text-secondary leading-[1.7] whitespace-pre-line"
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
