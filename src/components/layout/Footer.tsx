"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/data/company";

const productLinks = [
  { name: "AURA", href: "/garde-corps/aura" },
  { name: "FORGE", href: "/garde-corps/forge" },
  { name: "SECU+", href: "/garde-corps/secu-plus" },
  { name: "ATELIER", href: "/garde-corps/atelier" },
  { name: "FIREWALL", href: "/portes/firewall" },
  { name: "JANSEN DESIGN", href: "/portes/jansen-design" },
  { name: "DECOR", href: "/grilles/decor" },
  { name: "FACADE", href: "/grilles/facade" },
];

const infoLinks = [
  { name: "Realisations", href: "/realisations" },
  { name: "Thermolaquage", href: "/thermolaquage" },
  { name: "A propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
  { name: "Devis gratuit", href: "/devis" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/20">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-lg font-bold tracking-tight">
                <span className="text-accent">AZ</span>
                <span className="text-text-primary"> Concept</span>
              </span>
            </Link>
            <p className="text-[13px] text-text-secondary leading-relaxed">
              Metallerie d&apos;exception. Garde-corps, portes, grilles &amp; facades — 10 gammes, 200+ couleurs RAL.
            </p>
            <div className="space-y-2.5 pt-2">
              <a href={companyInfo.phoneHref} className="flex items-center gap-2.5 text-[13px] text-text-muted hover:text-text-primary transition-colors">
                <Phone size={13} />{companyInfo.phone}
              </a>
              <a href={companyInfo.emailHref} className="flex items-center gap-2.5 text-[13px] text-text-muted hover:text-text-primary transition-colors">
                <Mail size={13} />{companyInfo.email}
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-text-muted">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <span>{companyInfo.address}, {companyInfo.city}</span>
              </div>
            </div>
          </div>

          {/* Gammes */}
          <div>
            <p className="text-[11px] font-medium text-text-muted uppercase tracking-[0.15em] mb-5">Gammes</p>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-text-muted hover:text-text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-[11px] font-medium text-text-muted uppercase tracking-[0.15em] mb-5">Informations</p>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-text-muted hover:text-text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <p className="text-[11px] font-medium text-text-muted uppercase tracking-[0.15em] mb-5">Ecosysteme</p>
            <div className="space-y-3 mb-6">
              <a href={companyInfo.sisterSites.construction} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text-primary transition-colors">
                AZ Construction <ArrowUpRight size={12} />
              </a>
              <a href={companyInfo.sisterSites.epoxy} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text-primary transition-colors">
                AZ Epoxy <ArrowUpRight size={12} />
              </a>
            </div>
            <div className="p-4 rounded-lg border border-border/20">
              <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Tagline</p>
              <p className="text-[13px] font-medium text-text-primary tracking-wide">FABRIQUER. PROT&Eacute;GER. DURER.</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 border-t border-border/15">
          <p className="text-[11px] text-text-muted/60">&copy; {new Date().getFullYear()} AZ Concept. Tous droits reserves.</p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="text-[11px] text-text-muted/40 hover:text-text-muted transition-colors">Mentions legales</Link>
            <Link href="/cgv" className="text-[11px] text-text-muted/40 hover:text-text-muted transition-colors">CGV</Link>
            <Link href="/confidentialite" className="text-[11px] text-text-muted/40 hover:text-text-muted transition-colors">Confidentialite</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
