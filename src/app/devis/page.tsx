"use client";

import { motion } from "framer-motion";
import { Send, Paperclip, Clock, FileText } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";

const projectTypes = [
  "Garde-corps — AURA",
  "Garde-corps — FORGE",
  "Garde-corps — SECU+",
  "Garde-corps — ATELIER",
  "Porte — JANSEN DESIGN",
  "Porte — FIREWALL",
  "Porte — TECHNIQUE",
  "Grille — AIRFLOW",
  "Grille — DECOR",
  "Facade — FACADE",
  "Thermolaquage seul",
  "Autre / Multi-gammes",
];

const assurances = [
  {
    icon: Clock,
    title: "Reponse sous 48h",
    description: "Devis detaille envoye par email sous 48h ouvrees.",
  },
  {
    icon: FileText,
    title: "Plans DWG acceptes",
    description: "Envoyez vos plans AutoCAD, nous etudions chaque detail.",
  },
  {
    icon: Paperclip,
    title: "Devis gratuit",
    description: "Etude de projet et devis sans engagement de votre part.",
  },
];

const inputClasses =
  "w-full px-4 py-3 text-[14px] bg-surface-card border border-border/30 rounded-xl text-text-primary placeholder:text-text-muted/50 focus:border-accent/50 focus:outline-none transition-colors";

export default function DevisPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Demander un devis"
          subtitle="Reponse sous 48h. Plans DWG acceptes."
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Devis" },
          ]}
        />

        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            {/* Assurances row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/20 rounded-2xl overflow-hidden mb-12">
              {assurances.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3 p-4 bg-surface"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-text-muted mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <form
                className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-surface-card border border-border/30"
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className="text-[14px] font-bold text-text-primary mb-2">
                  Formulaire de devis
                </h3>
                <p className="text-[13px] text-text-muted mb-8">
                  Remplissez les champs ci-dessous et nous vous recontactons sous
                  48h.
                </p>

                <div className="space-y-5">
                  {/* Row: Nom + Prenom */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-[13px] font-medium text-text-muted mb-2"
                      >
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        placeholder="Dupont"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="prenom"
                        className="block text-[13px] font-medium text-text-muted mb-2"
                      >
                        Prenom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        placeholder="Jean"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Row: Email + Telephone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-medium text-text-muted mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="jean@exemple.fr"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telephone"
                        className="block text-[13px] font-medium text-text-muted mb-2"
                      >
                        Telephone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        placeholder="06 12 34 56 78"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Societe */}
                  <div>
                    <label
                      htmlFor="societe"
                      className="block text-[13px] font-medium text-text-muted mb-2"
                    >
                      Societe{" "}
                      <span className="text-text-muted/50 font-normal">
                        (optionnel)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="societe"
                      name="societe"
                      placeholder="Nom de votre entreprise"
                      className={inputClasses}
                    />
                  </div>

                  {/* Type de projet */}
                  <div>
                    <label
                      htmlFor="type-projet"
                      className="block text-[13px] font-medium text-text-muted mb-2"
                    >
                      Type de projet *
                    </label>
                    <select
                      id="type-projet"
                      name="type-projet"
                      required
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="">Selectionnez une gamme</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Description du projet */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-[13px] font-medium text-text-muted mb-2"
                    >
                      Description du projet *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      placeholder="Decrivez votre projet : dimensions, materiaux souhaites, contraintes techniques, delais..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {/* Fichiers joints mention */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border/30">
                    <Paperclip
                      size={18}
                      className="text-text-muted shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-[14px] text-text-secondary">
                        Fichiers joints
                      </p>
                      <p className="text-[13px] text-text-muted mt-1">
                        Plans DWG, PDF, images — envoyez vos fichiers a{" "}
                        <a
                          href="mailto:contact@azconcept.fr"
                          className="text-accent hover:text-text-primary transition-colors"
                        >
                          contact@azconcept.fr
                        </a>{" "}
                        en referencant votre demande.
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button type="submit" className="w-full sm:w-auto">
                    Envoyer la demande de devis
                    <Send size={16} />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
