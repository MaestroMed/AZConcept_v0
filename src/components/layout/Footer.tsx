"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/data/company";

const productLinks = [
  { name: "AURA", href: "/garde-corps/aura" },
  { name: "FORGE", href: "/garde-corps/forge" },
  { name: "SECU+", href: "/garde-corps/secu-plus" },
  { name: "ATELIER", href: "/garde-corps/atelier" },
  { name: "FIREWALL", href: "/portes/firewall" },
  { name: "JANSEN DESIGN", href: "/portes/jansen-design" },
  { name: "DECOR", href: "/grilles/decor" },
  { name: "AIRFLOW", href: "/grilles/airflow" },
];

const infoLinks = [
  { name: "Realisations", href: "/realisations" },
  { name: "Thermolaquage", href: "/thermolaquage" },
  { name: "A propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
  { name: "Devis gratuit", href: "/devis" },
  { name: "FAQ", href: "/faq" },
];

const legalLinks = [
  { name: "Mentions legales", href: "/mentions-legales" },
  { name: "CGV", href: "/cgv" },
  { name: "Confidentialite", href: "/confidentialite" },
];

export function Footer() {
  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-accent">AZ</span>
                <span className="text-text-primary"> Concept</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Metallerie d&apos;exception. Garde-corps, portes, grilles
              &amp; facades — 10 gammes, 200+ couleurs RAL.
            </p>
            <div className="space-y-3">
              <a
                href={companyInfo.phoneHref}
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Phone size={16} />
                {companyInfo.phone}
              </a>
              <a
                href={companyInfo.emailHref}
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Mail size={16} />
                {companyInfo.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  {companyInfo.address}
                  <br />
                  {companyInfo.city}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <Clock size={16} />
                {companyInfo.hours}
              </div>
            </div>
          </div>

          {/* Gammes */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-6">
              Nos Gammes
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-6">
              Informations
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-6">
              Ecosysteme AZ
            </h3>
            <div className="space-y-4">
              <a
                href={companyInfo.sisterSites.construction}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                AZ Construction
                <ArrowUpRight size={14} />
              </a>
              <a
                href={companyInfo.sisterSites.epoxy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                AZ Epoxy
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mt-8 p-4 bg-surface-card rounded-xl border border-border">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                Tagline
              </p>
              <p className="text-sm font-semibold text-text-primary tracking-wide">
                FABRIQUER. PROTEGER. DURER.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-border">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} AZ Concept. Tous droits reserves.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
