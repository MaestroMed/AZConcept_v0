"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { realisations } from "@/data/realisations";

export function RealisationsPreview() {
  const featured = realisations.slice(0, 4);

  return (
    <section className="py-[var(--section-padding)] bg-surface relative">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <SectionHeader
          title="Realisations"
          subtitle="Quelques projets qui illustrent notre savoir-faire."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              className="group relative rounded-2xl bg-surface-card border border-border hover:border-border-light overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Real image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-hover to-surface-card flex items-center justify-center">
                    <span className="text-4xl font-black text-border tracking-tighter">
                      {project.gamme}
                    </span>
                  </div>
                )}
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                {/* Gamme badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-[10px] uppercase tracking-widest text-white/80 font-medium">
                    {project.gamme}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-medium">
                    {project.category}
                  </span>
                  <span className="text-text-muted">&middot;</span>
                  <span className="text-[10px] text-text-muted">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-white transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <div className="flex items-center gap-1 text-xs text-text-muted">
                  <MapPin size={12} />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Voir toutes nos realisations
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
