"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { realisations } from "@/data/realisations";

const gammeGradients: Record<string, string> = {
  AURA: "from-blue-900/40 to-indigo-950/60",
  FORGE: "from-amber-900/40 to-stone-950/60",
  FIREWALL: "from-red-900/40 to-slate-950/60",
  DECOR: "from-emerald-900/40 to-teal-950/60",
  ATELIER: "from-zinc-800/40 to-neutral-950/60",
  "JANSEN DESIGN": "from-sky-900/40 to-slate-950/60",
  "SECU+": "from-violet-900/40 to-purple-950/60",
  AIRFLOW: "from-cyan-900/40 to-blue-950/60",
  TECHNIQUE: "from-gray-800/40 to-zinc-950/60",
  FACADE: "from-rose-900/40 to-pink-950/60",
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Realisations"
          subtitle="Nos projets temoignent de notre savoir-faire"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Realisations" },
          ]}
        />

        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                Portfolio
              </p>
              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
                {realisations.length} projet{realisations.length > 1 ? "s" : ""}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20 rounded-2xl overflow-hidden">
              {realisations.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group bg-surface hover:bg-surface-elevated transition-colors duration-500 overflow-hidden"
                >
                  {/* Project image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${gammeGradients[project.gamme] || "from-surface-hover to-surface-card"} flex items-center justify-center`}>
                        <span className="text-5xl sm:text-6xl font-black text-white/10 tracking-tighter select-none">
                          {project.gamme}
                        </span>
                      </div>
                    )}
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    {/* Gamme badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-white/80 bg-black/40 backdrop-blur-sm rounded-md">
                        {project.gamme}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
                        {project.category}
                      </span>
                      <span className="text-text-muted/40">&middot;</span>
                      <span className="text-[11px] text-text-muted">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-[14px] font-semibold text-text-primary mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[13px] text-text-muted leading-[1.7] mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-1 text-[13px] text-text-muted">
                      <MapPin size={12} />
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
