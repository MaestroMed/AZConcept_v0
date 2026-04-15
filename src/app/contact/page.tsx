"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { companyInfo } from "@/data/company";

const contactDetails = [
  {
    icon: Phone,
    label: "Telephone",
    value: companyInfo.phone,
    href: companyInfo.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.email,
    href: companyInfo.emailHref,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${companyInfo.address}\n${companyInfo.city}`,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: companyInfo.hours,
    href: undefined,
  },
];

const subjectOptions = [
  "Demande d'information",
  "Demande de devis",
  "Suivi de commande",
  "Service apres-vente",
  "Partenariat",
  "Autre",
];

const inputClasses =
  "w-full px-4 py-3 text-[14px] bg-surface-card border border-border/30 rounded-xl text-text-primary placeholder:text-text-muted/50 focus:border-accent/50 focus:outline-none transition-colors";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError("Une erreur est survenue. Veuillez reessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Contact"
          subtitle="Un projet ? Parlons-en."
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Contact" },
          ]}
        />

        <section className="py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info - Left */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
                    Coordonnees
                  </p>
                  <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1] mb-2">
                    Nous joindre
                  </h2>
                  <p className="text-[14px] text-text-secondary leading-[1.7]">
                    N&apos;hesitez pas a nous contacter par telephone, email ou en
                    remplissant le formulaire ci-contre.
                  </p>
                </div>

                <div className="space-y-2">
                  {contactDetails.map((detail, i) => {
                    const Icon = detail.icon;
                    const inner = (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start gap-4 group p-3 rounded-xl hover:bg-surface-elevated transition-colors duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <Icon size={18} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-1">
                            {detail.label}
                          </p>
                          <p className="text-[14px] text-text-primary whitespace-pre-line">
                            {detail.value}
                          </p>
                        </div>
                      </motion.div>
                    );

                    if (detail.href) {
                      return (
                        <a
                          key={detail.label}
                          href={detail.href}
                          className="block"
                        >
                          {inner}
                        </a>
                      );
                    }
                    return <div key={detail.label}>{inner}</div>;
                  })}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl bg-surface-card border border-border/30 overflow-hidden aspect-[4/3] flex items-center justify-center"
                >
                  <div className="text-center">
                    <MapPin size={32} className="text-text-muted/30 mx-auto mb-2" />
                    <p className="text-[14px] text-text-secondary leading-[1.7]">{companyInfo.address}</p>
                    <p className="text-[14px] text-text-secondary leading-[1.7]">{companyInfo.city}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form - Right with radial gradient */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-3"
              >
                {success ? (
                  <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border/30 flex flex-col items-center justify-center text-center min-h-[400px]">
                    <CheckCircle2 size={48} className="text-green-500 mb-4" />
                    <h3 className="text-[18px] font-bold text-text-primary mb-2">
                      Message envoye !
                    </h3>
                    <p className="text-[14px] text-text-secondary leading-[1.7] mb-6">
                      Nous vous repondrons dans les meilleurs delais.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="text-[14px] text-accent hover:text-text-primary transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form
                    className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border/30"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, rgba(65,105,225,0.03) 0%, transparent 50%), var(--surface-card)",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <h3 className="text-[14px] font-bold text-text-primary mb-6">
                      Envoyez-nous un message
                    </h3>

                    {error && (
                      <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[14px] text-red-400">
                        {error}
                      </div>
                    )}

                    <div className="space-y-5">
                      {/* Nom */}
                      <div>
                        <label
                          htmlFor="nom"
                          className="block text-[13px] font-medium text-text-muted mb-2"
                        >
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          required
                          placeholder="Jean Dupont"
                          className={inputClasses}
                        />
                      </div>

                      {/* Email */}
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

                      {/* Telephone */}
                      <div>
                        <label
                          htmlFor="telephone"
                          className="block text-[13px] font-medium text-text-muted mb-2"
                        >
                          Telephone
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          placeholder="06 12 34 56 78"
                          className={inputClasses}
                        />
                      </div>

                      {/* Sujet */}
                      <div>
                        <label
                          htmlFor="sujet"
                          className="block text-[13px] font-medium text-text-muted mb-2"
                        >
                          Sujet *
                        </label>
                        <select
                          id="sujet"
                          name="sujet"
                          required
                          className={`${inputClasses} appearance-none cursor-pointer`}
                        >
                          <option value="">
                            Selectionnez un sujet
                          </option>
                          {subjectOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[13px] font-medium text-text-muted mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Decrivez votre projet ou votre demande..."
                          className={`${inputClasses} resize-none`}
                        />
                      </div>

                      {/* Submit */}
                      <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <Send size={16} />
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
      </main>
      <Footer />
    </>
  );
}
