"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-[var(--section-padding)] relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(65,105,225,0.04) 0%, transparent 70%)" }} />

      <div className="relative max-w-2xl mx-auto px-[var(--container-padding)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">Votre projet</p>
          <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-4">
            Commencez ici.
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-10">
            Devis gratuit sous 48h. Plans DWG acceptes.<br className="hidden sm:block" />
            Un interlocuteur unique du devis a la pose.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/devis"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium rounded-xl bg-accent text-white hover:bg-accent-hover transition-colors">
              Demander un devis <ArrowRight size={16} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center px-6 py-3 text-[14px] font-medium rounded-xl text-text-secondary hover:text-text-primary border border-border/40 hover:border-border transition-all">
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
