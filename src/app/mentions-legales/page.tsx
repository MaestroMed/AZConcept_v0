// TODO MAESTROMED — remplir les champs siret / rcs / capitalSocial /
// directeurPublication dans src/data/company.ts avant la mise en production.
// Ces champs sont obligatoires (art. 6 III LCEN + R.123-237 CCom) et le site
// ne peut être exposé publiquement sans ces informations.

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { LegalContent } from "@/components/shared/LegalContent";
import { companyInfo } from "@/data/company";

const todo = "À compléter";

const sections = [
  {
    title: "Éditeur du site",
    content: [
      `Raison sociale : ${companyInfo.legalName}`,
      `Adresse : ${companyInfo.address}, ${companyInfo.city}`,
      `SIRET : ${companyInfo.siret || todo}`,
      `RCS : ${companyInfo.rcs || todo}`,
      `Capital social : ${companyInfo.capitalSocial || todo}`,
      `Téléphone : ${companyInfo.phone}`,
      `Email : ${companyInfo.email}`,
      `Directeur de la publication : ${companyInfo.directeurPublication || todo}`,
    ],
  },
  {
    title: "Hébergement",
    content: [
      "Hébergeur : Vercel Inc.",
      "Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
      "Site : https://vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      `L\u2019ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de ${companyInfo.legalName} ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.`,
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.",
    ],
  },
  {
    title: "Limitation de responsabilité",
    content: [
      `${companyInfo.legalName} s\u2019efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.`,
      "Les informations présentes sur le site sont données à titre indicatif et sont susceptibles d\u2019évoluer. Elles ne sont en aucun cas contractuelles.",
    ],
  },
  {
    title: "Liens hypertextes",
    content: [
      "Le site peut contenir des liens vers d\u2019autres sites. AZ Concept n\u2019exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
    ],
  },
  {
    title: "Droit applicable",
    content: [
      "Le présent site et ses conditions d\u2019utilisation sont régis par le droit français. En cas de litige, les tribunaux français seront compétents.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Légal"
          index="—"
          title="Mentions"
          italicTail="légales."
          subtitle={`Informations légales relatives au site ${companyInfo.name}.`}
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales" },
          ]}
        />
        <LegalContent sections={sections} />
      </main>
      <Footer />
    </>
  );
}
