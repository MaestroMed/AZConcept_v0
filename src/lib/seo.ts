/**
 * JSON-LD builders for schema.org structured data.
 * Used by app/layout.tsx + per-page generateMetadata.
 */

import { companyInfo } from "@/data/company";
import type { Gamme, Modele, Category, Realisation } from "@/types";

export const SITE_URL = "https://azconcept.fr";

/** Organization — set in root layout. */
export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: companyInfo.name,
  legalName: companyInfo.legalName,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/images/branding/logo.png`, width: 512, height: 512 },
  image: `${SITE_URL}/images/branding/cover-brochure.png`,
  description:
    "Métallerie d'architecture — garde-corps, portes, grilles, façades. Dix gammes dessinées pour les architectes, thermolaquage 200+ RAL, atelier 1 800 m² en Île-de-France.",
  foundingDate: String(companyInfo.foundedYear),
  founder: { "@type": "Organization", name: companyInfo.legalName },
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
  address: {
    "@type": "PostalAddress",
    streetAddress: companyInfo.address,
    addressLocality: "Bruyères-sur-Oise",
    postalCode: "95820",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+33971357496",
      email: companyInfo.email,
      contactType: "customer service",
      availableLanguage: ["fr"],
      areaServed: "FR",
    },
  ],
  sameAs: [companyInfo.sisterSites.construction, companyInfo.sisterSites.epoxy],
  knowsAbout: [
    "Métallerie",
    "Thermolaquage",
    "Garde-corps",
    "Portes coupe-feu",
    "Façades architecturales",
    "Profilés Jansen",
  ],
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: companyInfo.name,
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/realisations?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

/** Local business — adds GeoCoordinates + opening hours. */
export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: companyInfo.name,
  image: `${SITE_URL}/images/branding/cover-brochure.png`,
  telephone: "+33971357496",
  email: companyInfo.email,
  url: SITE_URL,
  address: organization.address,
  geo: { "@type": "GeoCoordinates", latitude: 49.16, longitude: 2.32 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€€",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Île-de-France" },
    { "@type": "AdministrativeArea", name: "France" },
  ],
};

/** Per-category Product (the category as a product family). */
export function categoryJsonLd(category: Category, gammeCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "@id": `${SITE_URL}/${category.slug}#productgroup`,
    name: category.name,
    description: category.description,
    url: `${SITE_URL}/${category.slug}`,
    brand: { "@id": `${SITE_URL}/#organization` },
    productGroupID: category.slug,
    hasVariant: { "@type": "QuantitativeValue", value: gammeCount },
  };
}

/** Per-gamme Product. */
export function gammeJsonLd(gamme: Gamme, category: Category) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/${category.slug}/${gamme.slug}#product`,
    name: `${gamme.name} — ${category.name}`,
    description: gamme.description,
    url: `${SITE_URL}/${category.slug}/${gamme.slug}`,
    brand: { "@id": `${SITE_URL}/#organization` },
    category: category.name,
    image: `${SITE_URL}/api/og?title=${encodeURIComponent(gamme.name)}&subtitle=${encodeURIComponent(gamme.tagline)}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "12",
      bestRating: "5",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      offerCount: gamme.modeles.length,
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

/** Per-modele Product. */
export function modeleJsonLd(modele: Modele, gamme: Gamme, category: Category) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/${category.slug}/${gamme.slug}/${modele.slug}#product`,
    name: modele.name,
    description: modele.description,
    url: `${SITE_URL}/${category.slug}/${gamme.slug}/${modele.slug}`,
    brand: { "@id": `${SITE_URL}/#organization` },
    category: `${category.name} / ${gamme.name}`,
    additionalProperty: modele.specs
      ? Object.entries(modele.specs).map(([name, value]) => ({
          "@type": "PropertyValue",
          name,
          value,
        }))
      : undefined,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

export function breadcrumbsJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Service entity for /thermolaquage. */
export const thermolaquageService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/thermolaquage#service`,
  name: "Thermolaquage haute performance",
  serviceType: "Industrial coating",
  provider: { "@id": `${SITE_URL}/#organization` },
  description:
    "Service de thermolaquage avec cabine 7 m, four XXL, 200+ teintes RAL et collections exclusives Adaptacolor (Patina, Polaris, Dichroïque). Express 48 h.",
  areaServed: { "@type": "Country", name: "France" },
  audience: { "@type": "BusinessAudience", audienceType: "Architectes, promoteurs, métalliers" },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Collections Adaptacolor",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Collection Polaris (finitions métallisées)" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Collection Patina (patines oxydées)" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Collection Dichroïque (effets chromatiques)" } },
    ],
  },
};

/** ItemList for realisations portfolio. */
export function realisationsItemList(realisations: Realisation[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio AZ Concept",
    numberOfItems: realisations.length,
    itemListElement: realisations.slice(0, 15).map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: r.title,
        description: r.description,
        locationCreated: { "@type": "Place", name: r.location },
        dateCreated: String(r.year),
        image: r.imageUrl ? `${SITE_URL}${r.imageUrl}` : undefined,
      },
    })),
  };
}

/** Helper to inject one or more JSON-LD blobs in a Server Component. */
export function jsonLdScript(json: unknown | unknown[]) {
  const payload = Array.isArray(json) ? json : [json];
  return payload.map((j) => JSON.stringify(j)).join("\n");
}
