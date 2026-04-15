"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { realisations } from "@/data/realisations";

export function RealisationsPreview() {
  const featured = realisations.slice(0, 4);

  return (
    <section className="py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">Realisations</p>
            <h2 className="text-[2rem] sm:text-[2.6rem] font-bold tracking-[-0.02em] text-text-primary">
              Projets recents.
            </h2>
          </div>
          <Link href="/realisations"
            className="hidden sm:flex items-center gap-2 text-[13px] text-text-secondary hover:text-text-primary transition-colors">
            Tout voir <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group rounded-xl overflow-hidden bg-surface-card border border-border/30 hover:border-border/60 transition-all duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  {project.imageUrl ? (
                    <Image src={project.imageUrl} alt={project.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  ) : (
                    <div className="absolute inset-0 bg-surface-elevated flex items-center justify-center">
                      <span className="text-3xl font-bold text-border">{project.gamme}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70 bg-black/30 backdrop-blur-sm rounded">
                      {project.gamme}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-accent">{project.category}</span>
                    <span className="text-text-muted/40">&middot;</span>
                    <span className="text-[10px] text-text-muted">{project.year}</span>
                  </div>
                  <h3 className="text-[14px] font-medium text-text-primary mb-1.5 group-hover:text-white transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-text-muted">
                    <MapPin size={11} />
                    {project.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
