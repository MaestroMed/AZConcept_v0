"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";

export function CTASection() {
  return (
    <section className="py-[var(--section-padding)] bg-surface-elevated relative overflow-hidden">
      <div className="noise-overlay absolute inset-0" />

      {/* Gradient accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-[var(--container-padding)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Votre projet commence ici.
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
            Devis gratuit sous 48h. Plans DWG acceptes. Toutes les teintes RAL
            disponibles. Un interlocuteur unique du devis a la pose.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/devis" size="lg">
              Demander un devis
              <ArrowRight size={18} />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Nous contacter
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
