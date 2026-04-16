"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/data/company";

const productLinks = [
  { name: "AURA", href: "/garde-corps/aura" },
  { name: "FORGE", href: "/garde-corps/forge" },
  { name: "SECU+", href: "/garde-corps/secu-plus" },
  { name: "ATELIER", href: "/garde-corps/atelier" },
  { name: "JANSEN DESIGN", href: "/portes/jansen-design" },
  { name: "FIREWALL", href: "/portes/firewall" },
  { name: "TECHNIQUE", href: "/portes/technique" },
  { name: "AIRFLOW", href: "/grilles/airflow" },
  { name: "DÉCOR", href: "/grilles/decor" },
  { name: "FAÇADE", href: "/grilles/facade" },
];

const infoLinks = [
  { name: "Réalisations", href: "/realisations" },
  { name: "Thermolaquage", href: "/thermolaquage" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
  { name: "Devis gratuit", href: "/devis" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ivory/8 overflow-hidden">
      {/* Champagne hairline at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        {/* Massive wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="pt-20 pb-14 border-b border-ivory/8"
        >
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <span className="display text-ivory leading-[0.88] tracking-[-0.04em] text-[clamp(4rem,14vw,13rem)] font-light">
              AZ<span className="display-italic text-champagne">concept</span>
              <span className="text-champagne">.</span>
            </span>
            <span className="font-mono text-[11px] tabular-nums text-ash self-end sm:mb-8">
              MMXXVI · NO 01
            </span>
          </div>
          <p className="mt-6 display-italic font-light text-pearl/80 text-[clamp(1.2rem,2.2vw,1.8rem)] tracking-[-0.01em]">
            Fabriquer. Protéger. Durer.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 py-16">
          {/* Maison */}
          <div className="lg:col-span-4 space-y-5">
            <p className="eyebrow text-platinum">La Maison</p>
            <p className="text-[14px] text-pearl/80 leading-[1.7] max-w-sm">
              Atelier de métallerie architecturale. Dix gammes dessinées
              pour les architectes, thermolaquage haute performance,
              partenariat Jansen.
            </p>
            <div className="space-y-2.5 pt-4">
              <a href={companyInfo.phoneHref} className="flex items-center gap-3 text-[13px] text-pearl hover:text-champagne transition-colors">
                <Phone size={13} />
                <span className="font-mono tabular-nums">{companyInfo.phone}</span>
              </a>
              <a href={companyInfo.emailHref} className="flex items-center gap-3 text-[13px] text-pearl hover:text-champagne transition-colors">
                <Mail size={13} />
                <span className="font-mono">{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-[13px] text-pearl/70">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <span>
                  {companyInfo.address}<br />
                  {companyInfo.city}
                </span>
              </div>
            </div>
          </div>

          {/* Gammes */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-platinum mb-5">Gammes · 10</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {productLinks.map((link, i) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-2 text-[13px] text-pearl/75 hover:text-ivory transition-colors"
                  >
                    <span className="font-mono text-[9.5px] tabular-nums text-ash w-4 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="link-underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Maison & Écosystème */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <p className="eyebrow text-platinum mb-5">Informations</p>
              <ul className="space-y-2.5">
                {infoLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-pearl/75 hover:text-ivory link-underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-platinum mb-5">Écosystème AZ</p>
              <div className="space-y-2">
                <a
                  href={companyInfo.sisterSites.construction}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-pearl/75 hover:text-champagne transition-colors"
                >
                  AZ Construction <ArrowUpRight size={12} />
                </a>
                <a
                  href={companyInfo.sisterSites.epoxy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-pearl/75 hover:text-champagne transition-colors"
                >
                  AZ Epoxy <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-7 border-t border-ivory/8">
          <div className="flex items-center gap-3">
            <span className="h-[6px] w-[6px] rounded-full bg-champagne" />
            <p className="font-mono text-[10.5px] tabular-nums text-ash">
              © {new Date().getFullYear()} · AZ Concept · Tous droits réservés
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ash hover:text-pearl transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgv" className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ash hover:text-pearl transition-colors">
              CGV
            </Link>
            <Link href="/confidentialite" className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ash hover:text-pearl transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
