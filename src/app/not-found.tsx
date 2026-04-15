"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/shared/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[60vh] relative overflow-hidden">
        {/* Subtle mesh gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, rgba(65,105,225,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(65,105,225,0.03) 0%, transparent 50%)",
          }}
        />

        <div className="relative text-center px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Large 404 in very muted text */}
            <p className="text-[8rem] sm:text-[12rem] font-black text-text-muted/10 tracking-tighter leading-none mb-0 select-none">
              404
            </p>
            <h1 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-4 -mt-6">
              Page introuvable
            </h1>
            <p className="text-[14px] text-text-secondary leading-[1.7] max-w-md mx-auto mb-8">
              La page que vous recherchez n&apos;existe pas ou a ete deplacee.
              Revenez a l&apos;accueil pour continuer votre navigation.
            </p>

            <Button href="/" size="lg">
              <ArrowLeft size={18} />
              Retour a l&apos;accueil
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
