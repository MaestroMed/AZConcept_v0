import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { LegalContent } from "@/components/shared/LegalContent";
import { companyInfo } from "@/data/company";

const articles = [
  {
    title: "Objet",
    content: [
      `Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations commerciales entre ${companyInfo.legalName}, ci-après « le Prestataire », et ses clients, ci-après « le Client ».`,
      "Toute commande implique l'acceptation sans réserve par le Client des présentes CGV.",
    ],
  },
  {
    title: "Devis et commandes",
    content: [
      "Les devis établis par le Prestataire sont valables 30 jours à compter de leur date d'émission, sauf indication contraire.",
      "Toute commande ne devient définitive qu'après acceptation écrite du devis par le Client et versement de l'acompte prévu.",
    ],
  },
  {
    title: "Prix",
    content: [
      "Les prix sont exprimés en euros hors taxes (HT). La TVA applicable est celle en vigueur au jour de la facturation.",
      "Les prix peuvent être révisés en cas de variation significative du coût des matières premières, sous réserve d'en informer le Client dans un délai raisonnable.",
    ],
  },
  {
    title: "Conditions de paiement",
    content: [
      "Sauf conditions particulières, un acompte de 40 % est exigé à la commande. Le solde est payable à la livraison ou selon l'échéancier convenu.",
      "Tout retard de paiement entraînera des pénalités de retard calculées au taux légal en vigueur, ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement.",
    ],
  },
  {
    title: "Délais de livraison",
    content: [
      "Les délais de livraison sont donnés à titre indicatif. Un retard de livraison ne pourra donner lieu à aucune pénalité, indemnité, annulation de commande ou refus de réception.",
      "Le service express sous 48 h est disponible sous conditions et moyennant un supplément tarifaire.",
    ],
  },
  {
    title: "Réception et réclamations",
    content: [
      "Le Client doit vérifier l'état des marchandises à la livraison. Toute réclamation doit être formulée par écrit dans un délai de 7 jours suivant la réception.",
      "Passé ce délai, aucune réclamation ne sera recevable.",
    ],
  },
  {
    title: "Garantie",
    content: [
      "Les ouvrages métalliques bénéficient d'une garantie conforme aux dispositions légales en vigueur.",
      "La garantie couvre les défauts de fabrication et de thermolaquage dans des conditions normales d'utilisation. Elle ne couvre pas l'usure normale, les dommages causés par un usage inapproprié ou un défaut d'entretien.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "La responsabilité du Prestataire est limitée au montant de la commande concernée.",
      "Le Prestataire ne saurait être tenu responsable des dommages indirects, tels que perte de chiffre d'affaires, préjudice commercial ou perte de chance.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "Les plans, dessins et documents techniques remis au Client restent la propriété du Prestataire et ne peuvent être communiqués à des tiers sans autorisation écrite.",
    ],
  },
  {
    title: "Droit applicable et litiges",
    content: [
      "Les présentes CGV sont soumises au droit français.",
      "En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le tribunal compétent sera celui du siège social du Prestataire.",
    ],
  },
];

export default function CGVPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Légal"
          index="—"
          title="Conditions Générales"
          italicTail="de Vente."
          subtitle={`CGV applicables aux prestations d'${companyInfo.name}.`}
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "CGV" },
          ]}
        />
        <LegalContent sections={articles} />
      </main>
      <Footer />
    </>
  );
}
