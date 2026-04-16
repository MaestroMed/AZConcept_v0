"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { companyInfo } from "@/data/company";

export function CTASection() {
  return (
    <section className="relative py-[var(--section-padding)] overflow-hidden">
      {/* Halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(201,163,92,0.14) 0%, rgba(201,163,92,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Top rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

      <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-champagne/80">
            — Commencez ici —
          </span>

          <h2 className="mt-8 display text-ivory text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.03em]">
            Votre projet,<br />
            <span className="display-italic font-light text-champagne">
              notre atelier.
            </span>
          </h2>

          <p className="mt-10 max-w-2xl mx-auto text-[16px] sm:text-[17px] leading-[1.6] text-pearl/80">
            Un interlocuteur unique, du dessin à la pose. Devis gratuit sous
            <span className="text-ivory"> 48 h</span>. Plans DWG, études techniques,
            prototypes atelier — nous répondons à tous les cahiers des charges.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/devis"
              className="btn-editorial inline-flex items-center gap-3 h-14 px-8 rounded-full bg-ivory text-ink text-[14px] font-medium hover:bg-champagne-soft transition-colors"
            >
              Demander un devis
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 h-14 px-7 rounded-full border border-ivory/20 text-ivory/90 text-[14px] hover:border-champagne/60 hover:text-champagne transition-colors"
            >
              Nous contacter
            </Link>
          </div>

          {/* Inline phone */}
          <a
            href={companyInfo.phoneHref}
            className="mt-12 inline-flex items-center gap-3 text-pearl/70 hover:text-champagne transition-colors group"
          >
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-ivory/15 group-hover:border-champagne/60 transition-colors">
              <Phone size={13} />
            </span>
            <span className="font-mono text-[13px] tabular-nums tracking-[0.04em]">
              {companyInfo.phone}
            </span>
            <span className="eyebrow text-ash">Lun — Ven · 08:00–18:00</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
