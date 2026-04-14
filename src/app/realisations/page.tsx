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

        <section className="py-[var(--section-padding)] bg-surface relative">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {realisations.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="group relative rounded-2xl bg-surface-card border border-border hover:border-border-light overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
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
                      <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-white/80 bg-black/40 backdrop-blur-sm rounded-md">
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

                    <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-text-muted">
                      <MapPin size={12} />
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
