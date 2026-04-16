import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { LegalContent } from "@/components/shared/LegalContent";
import { companyInfo } from "@/data/company";

const sections = [
  {
    title: "Responsable du traitement",
    content: [
      `Le responsable du traitement des données personnelles est ${companyInfo.legalName}, situé au ${companyInfo.address}, ${companyInfo.city}.`,
      `Contact : ${companyInfo.email}`,
    ],
  },
  {
    title: "Données collectées",
    content: [
      "Nous collectons les données personnelles que vous nous fournissez volontairement via nos formulaires de contact et de demande de devis : nom et prénom, adresse email, numéro de téléphone, nom de société (le cas échéant), description de votre projet.",
      "Ces données sont nécessaires au traitement de votre demande et à la relation commerciale.",
    ],
  },
  {
    title: "Finalités du traitement",
    content: [
      "Vos données personnelles sont collectées pour répondre à vos demandes de contact et de devis, assurer le suivi commercial de votre projet, vous adresser des informations relatives à nos prestations et respecter nos obligations légales et réglementaires.",
    ],
  },
  {
    title: "Base légale",
    content: [
      "Le traitement de vos données repose sur votre consentement lors de l'envoi d'un formulaire, l'exécution d'un contrat ou de mesures précontractuelles, et notre intérêt légitime à gérer notre activité commerciale.",
    ],
  },
  {
    title: "Durée de conservation",
    content: [
      "Demandes de contact : 3 ans à compter du dernier contact.",
      "Données clients : durée de la relation contractuelle + 5 ans (obligations légales).",
      "Cookies : 13 mois maximum.",
    ],
  },
  {
    title: "Destinataires des données",
    content: [
      "Vos données personnelles ne sont communiquées à aucun tiers, sauf obligation légale.",
      "Elles sont accessibles uniquement aux équipes internes habilitées d'AZ Concept.",
    ],
  },
  {
    title: "Vos droits",
    content: [
      "Conformément au RGPD, vous disposez d'un droit d'accès à vos données, de rectification, à l'effacement, à la limitation du traitement, à la portabilité et d'opposition.",
      `Pour exercer vos droits, contactez-nous à : ${companyInfo.email}`,
      "Vous pouvez également adresser une réclamation à la CNIL (www.cnil.fr).",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Ce site utilise des cookies strictement nécessaires à son fonctionnement.",
      "Des cookies analytiques peuvent être utilisés pour mesurer l'audience du site. Vous pouvez les refuser via le bandeau de consentement.",
    ],
  },
  {
    title: "Sécurité",
    content: [
      "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisé.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Légal"
          index="—"
          title="Politique"
          italicTail="de confidentialité."
          subtitle="Protection de vos données personnelles — RGPD."
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Confidentialité" },
          ]}
        />
        <LegalContent sections={sections} />
      </main>
      <Footer />
    </>
  );
}
