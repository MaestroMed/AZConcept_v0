"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[80vh] relative overflow-hidden pt-24">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-90"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 30%, rgba(201,163,92,0.10) 0%, transparent 70%), radial-gradient(40% 30% at 80% 80%, rgba(107,138,168,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-[var(--container-padding)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-champagne/85">
              — Erreur 404 —
            </span>

            <h1 className="mt-8 display text-ivory text-[clamp(3.5rem,12vw,9rem)] leading-[0.92] tracking-[-0.035em]">
              Page<br />
              <span className="display-italic font-light text-champagne">introuvable.</span>
            </h1>

            <span aria-hidden className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-champagne to-transparent" />

            <p className="mt-10 text-[16px] sm:text-[17px] leading-[1.65] text-pearl/80 max-w-xl">
              La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
              Revenez à l&rsquo;accueil ou explorez nos collections.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <Button href="/" size="lg">
                <ArrowLeft size={15} />
                Retour à l&rsquo;accueil
              </Button>
              <Button href="/realisations" variant="outline" size="lg">
                Voir les réalisations
              </Button>
            </div>

            <p className="mt-16 font-mono text-[10.5px] tabular-nums text-ash">
              AZ / Concept · 404 / NOT_FOUND
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
