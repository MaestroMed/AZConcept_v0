"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { Eyebrow } from "@/components/shared/Eyebrow";

const projectTypes = [
  "Garde-corps — AURA",
  "Garde-corps — FORGE",
  "Garde-corps — SECU+",
  "Garde-corps — ATELIER",
  "Porte — JANSEN DESIGN",
  "Porte — FIREWALL",
  "Porte — TECHNIQUE",
  "Grille — AIRFLOW",
  "Grille — DÉCOR",
  "Façade — FACADE",
  "Thermolaquage seul",
  "Autre / Multi-gammes",
];

const steps = [
  {
    idx: "01",
    title: "Décrivez",
    body: "Un formulaire structuré : typologie, dimensions, finition, délais. Plans DWG, PDF, croquis — nous acceptons tout.",
  },
  {
    idx: "02",
    title: "Réponse sous 48 h",
    body: "Étude de faisabilité, variantes techniques, proposition tarifaire. Un interlocuteur unique vous suit.",
  },
  {
    idx: "03",
    title: "RDV atelier ou chantier",
    body: "Validation du dessin, mesures sur site si besoin, planning de fabrication et pose.",
  },
];

const faq = [
  {
    q: "Combien de temps pour recevoir un devis ?",
    a: "48 h ouvrées pour les projets standards. 5 jours pour les ouvrages complexes qui nécessitent une étude de structure ou un prototype.",
  },
  {
    q: "Fabriquez-vous sur mesure ?",
    a: "Intégralement. Nos dix gammes sont des points de départ — toutes les dimensions, finitions et détails sont adaptés au projet.",
  },
  {
    q: "Quels plans accepter-vous ?",
    a: "DWG, PDF, SKP, croquis scannés. Idéalement cotés. Si vous n'avez que des photos ou une intention, nous venons mesurer sur site.",
  },
  {
    q: "Quelle zone d'intervention ?",
    a: "Île-de-France en priorité, mais nous livrons toute la France métropolitaine pour les projets d'envergure. Nous ne posons qu'en IDF.",
  },
];

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  options,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  options?: string[];
  autoComplete?: string;
}) {
  const base =
    "w-full bg-transparent px-0 py-3.5 text-[15px] text-ivory placeholder:text-ash border-b border-ivory/15 " +
    "focus:border-champagne focus:outline-none transition-colors " +
    "focus-visible:shadow-[0_2px_0_0_var(--champagne)] focus-visible:[outline:none]";
  return (
    <div className="group">
      <label htmlFor={name} className="block font-mono text-[10.5px] uppercase tracking-[0.16em] text-platinum mb-2">
        {label} {required && <span className="text-champagne" aria-hidden>·</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          autoComplete={autoComplete}
          className={`${base} resize-none`}
          placeholder="—"
        />
      ) : options ? (
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          autoComplete={autoComplete}
          className={`${base} appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            —
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-obsidian">
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          autoComplete={autoComplete}
          placeholder="—"
          className={base}
        />
      )}
    </div>
  );
}

export default function DevisPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSuccess(true);
      form.reset();
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Demande"
          index="—"
          title="Devis,"
          italicTail="étude gratuite."
          subtitle="Un projet de métallerie architecturale à chiffrer ? Décrivez-nous le cahier des charges — nous répondons sous 48 h avec une proposition technique et tarifaire."
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Devis" },
          ]}
        />

        {/* Process 3 steps */}
        <section className="relative py-[clamp(5rem,10vw,10rem)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="mb-14 sm:mb-20">
              <Eyebrow index="Chapitre I" label="Comment ça marche" className="mb-6" />
              <h2 className="display text-ivory text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] tracking-[-0.025em]">
                Trois étapes,<br />
                <span className="display-italic font-light text-platinum">une promesse.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ivory/8 border border-ivory/8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-ink p-8 sm:p-10 lg:p-12"
                >
                  <span className="font-mono text-[11px] tabular-nums text-champagne">{s.idx}</span>
                  <h3 className="mt-6 display text-ivory text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-[1.65] text-pearl/80">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
              >
                <Eyebrow index="Chapitre II" label="Le formulaire" className="mb-6" />
                <h2 className="display text-ivory text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.025em]">
                  Donnez-nous<br />
                  <span className="display-italic font-light text-champagne">le cahier.</span>
                </h2>
                <p className="mt-8 text-[15px] leading-[1.65] text-pearl/75">
                  Plus vous nous en dites, plus notre proposition sera précise.
                  Vous ne savez pas tout ? Ce n&rsquo;est pas grave : on se parle ensuite.
                </p>
                <ul className="mt-10 space-y-3">
                  {["Cahier des charges technique", "Visite atelier & prototypage", "Accompagnement jusqu'à la pose"].map((i, n) => (
                    <li key={i} className="flex items-baseline gap-3 text-[13px] text-pearl/70">
                      <span className="font-mono text-[10px] tabular-nums text-champagne">
                        {String(n + 1).padStart(2, "0")}
                      </span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 lg:col-start-6"
              >
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-[2px] border border-champagne/30 bg-champagne/5 p-10 text-center"
                  >
                    <CheckCircle2 size={42} className="text-champagne mx-auto mb-5" />
                    <h3 className="display text-ivory text-[28px] leading-tight mb-3">Demande enregistrée.</h3>
                    <p className="text-[14.5px] text-pearl/80 leading-[1.65] mb-6 max-w-md mx-auto">
                      Notre bureau d&rsquo;études revient vers vous sous 48 h avec une étude
                      technique et une proposition tarifaire.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="link-underline text-[13px] text-ivory hover:text-champagne transition-colors"
                    >
                      Nouvelle demande
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative space-y-12" noValidate>
                    {/* Honeypot anti-spam (invisible, tabIndex=-1) */}
                    <input
                      type="text"
                      name="hp_website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-0 w-0"
                      defaultValue=""
                    />

                    <div role="alert" aria-live="polite" aria-atomic="true">
                      {error && (
                        <div className="p-3 rounded-[2px] bg-red-500/10 border border-red-500/30 text-[13px] text-red-300">
                          {error}
                        </div>
                      )}
                    </div>

                    {/* Identité */}
                    <fieldset className="space-y-7">
                      <legend className="eyebrow text-champagne/85 mb-3">— Identité</legend>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                        <Field label="Nom complet" name="nom" required autoComplete="name" />
                        <Field label="Société" name="societe" autoComplete="organization" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                        <Field label="Email" name="email" type="email" required autoComplete="email" />
                        <Field label="Téléphone" name="telephone" type="tel" autoComplete="tel" />
                      </div>
                    </fieldset>

                    {/* Projet */}
                    <fieldset className="space-y-7">
                      <legend className="eyebrow text-champagne/85 mb-3">— Projet</legend>
                      <Field label="Type d'ouvrage" name="typeProjet" required options={projectTypes} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                        <Field label="Localisation" name="localisation" />
                        <Field label="Délai souhaité" name="delai" />
                      </div>
                      <Field label="Dimensions / quantités" name="dimensions" />
                    </fieldset>

                    {/* Description */}
                    <fieldset className="space-y-7">
                      <legend className="eyebrow text-champagne/85 mb-3">— Description</legend>
                      <Field label="Votre cahier des charges" name="message" textarea required />
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                        Les plans & documents peuvent être envoyés par email à{" "}
                        <a href="mailto:contact@azconcept.fr" className="text-champagne hover:underline">
                          contact@azconcept.fr
                        </a>{" "}
                        en référence à votre demande.
                      </p>
                    </fieldset>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                        Réponse sous 48 h · Étude gratuite.
                      </p>
                      <Button type="submit" disabled={loading} size="lg">
                        {loading ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            Envoi…
                          </>
                        ) : (
                          <>
                            Envoyer la demande
                            <Send size={14} />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-[var(--section-padding)] border-t border-ivory/8">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Eyebrow index="Chapitre III" label="Questions fréquentes" className="mb-6" />
                <h2 className="display text-ivory text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.025em]">
                  Avant<br />
                  <span className="display-italic font-light text-platinum">de demander.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ul className="divide-y divide-ivory/8 border-y border-ivory/8">
                  {faq.map((item, i) => {
                    const open = openFaq === i;
                    return (
                      <li key={item.q}>
                        <button
                          onClick={() => setOpenFaq(open ? null : i)}
                          className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                          aria-expanded={open}
                        >
                          <span className="flex items-baseline gap-5">
                            <span className="font-mono text-[10px] tabular-nums text-champagne/80">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="display text-ivory text-[clamp(1.1rem,2vw,1.5rem)] tracking-[-0.015em] leading-tight group-hover:text-champagne transition-colors">
                              {item.q}
                            </span>
                          </span>
                          <span
                            aria-hidden
                            className={`mt-2 h-[1.5px] w-5 shrink-0 bg-ivory/70 transition-transform ${open ? "rotate-90" : ""}`}
                          />
                        </button>
                        {open && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-12 pb-7 text-[14.5px] leading-[1.7] text-pearl/80 max-w-2xl"
                          >
                            {item.a}
                          </motion.p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
