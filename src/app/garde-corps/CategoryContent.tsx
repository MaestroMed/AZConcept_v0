"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import type { Category, Gamme } from "@/types";

interface CategoryContentProps {
  category: Category;
  gammes: Gamme[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function CategoryContent({ category, gammes }: CategoryContentProps) {
  return (
    <>
      <PageHero
        title={category.name}
        subtitle={category.description}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: category.name },
        ]}
        accentColor={category.color}
      />

      <section className="py-20 sm:py-28 bg-surface">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {gammes.map((gamme, i) => (
              <motion.div
                key={gamme.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
              >
                <Link
                  href={`/garde-corps/${gamme.slug}`}
                  className="group block rounded-2xl bg-surface-card border border-border p-8 sm:p-10 transition-all duration-300 hover:border-border-light hover:shadow-[0_0_40px_rgba(65,105,225,0.08)]"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: gamme.accentColor }}
                      />
                      <h3 className="text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {gamme.name}
                      </h3>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-2"
                    />
                  </div>

                  <p className="text-lg text-accent font-medium mb-3">
                    {gamme.tagline}
                  </p>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {gamme.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {gamme.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1 rounded-full bg-surface-elevated text-text-muted border border-border"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-text-muted whitespace-nowrap ml-4">
                      {gamme.modeles.length} modele{gamme.modeles.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
