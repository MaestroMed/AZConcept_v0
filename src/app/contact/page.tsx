"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { companyInfo } from "@/data/company";

const subjectOptions = [
  "Demande d'information",
  "Demande de devis",
  "Suivi de commande",
  "Service après-vente",
  "Partenariat",
  "Autre",
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

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
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
          eyebrow="Parler"
          index="—"
          title="Contact,"
          italicTail="un interlocuteur unique."
          subtitle="Pour un projet, une question technique, une visite atelier — écrivez-nous, téléphonez-nous, ou passez nous voir à Bruyères-sur-Oise."
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Contact" },
          ]}
        />

        {/* Main split: atelier image + form */}
        <section className="relative py-[var(--section-padding)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* LEFT — atelier image + coords overlay */}
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ivory/10">
                  <Image
                    src="/images/ambiance/industrial-workshop.jpg"
                    alt="Atelier AZ Concept"
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover [filter:saturate(0.9)_contrast(1.05)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/20" />

                  <div className="absolute inset-x-0 top-0 p-6 flex items-start justify-between">
                    <span className="eyebrow text-ivory/70">Atelier · Île-de-France</span>
                    <span className="font-mono text-[10.5px] tabular-nums text-ivory/60">
                      49.2°N 2.3°E
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="eyebrow text-champagne/85 mb-5">Coordonnées</p>
                    <ul className="space-y-5">
                      <li>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash block mb-1">
                          Téléphone
                        </span>
                        <a href={companyInfo.phoneHref} className="display text-ivory text-[clamp(1.4rem,2.4vw,2rem)] font-light tracking-[-0.01em] hover:text-champagne transition-colors block tabular-nums">
                          {companyInfo.phone}
                        </a>
                      </li>
                      <li>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash block mb-1">
                          Email
                        </span>
                        <a href={companyInfo.emailHref} className="font-mono text-[13px] text-ivory hover:text-champagne transition-colors break-all">
                          {companyInfo.email}
                        </a>
                      </li>
                      <li>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash block mb-1">
                          Adresse
                        </span>
                        <p className="text-[13.5px] text-ivory/85 leading-[1.6]">
                          {companyInfo.address}<br />
                          {companyInfo.city}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Micro info */}
                <div className="mt-6 grid grid-cols-2 gap-px bg-ivory/8 border border-ivory/8">
                  <div className="bg-ink p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Clock size={13} className="text-champagne" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-platinum">Horaires</span>
                    </div>
                    <p className="text-[13px] text-ivory/85 leading-[1.5]">
                      Lun — Ven<br />
                      08:00 — 18:00
                    </p>
                  </div>
                  <div className="bg-ink p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <MapPin size={13} className="text-champagne" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-platinum">Visite atelier</span>
                    </div>
                    <p className="text-[13px] text-ivory/85 leading-[1.5]">
                      Sur rendez-vous<br />
                      uniquement
                    </p>
                  </div>
                </div>
              </motion.aside>

              {/* RIGHT — form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 lg:col-start-7"
              >
                <Eyebrow index="Formulaire" label="Écrire" className="mb-6" />
                <h2 className="display text-ivory text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.025em] mb-10">
                  Parlez-nous<br />
                  <span className="display-italic font-light text-champagne">de votre projet.</span>
                </h2>

                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-[2px] border border-champagne/30 bg-champagne/5 p-10 text-center"
                  >
                    <CheckCircle2 size={42} className="text-champagne mx-auto mb-5" />
                    <h3 className="display text-ivory text-[26px] leading-tight mb-3">Message envoyé.</h3>
                    <p className="text-[14.5px] text-pearl/80 leading-[1.65] mb-6">
                      Nous vous répondrons sous 48 h. Un accusé de réception vient d&rsquo;arriver dans votre boîte.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="link-underline text-[13px] text-ivory hover:text-champagne transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative space-y-7" noValidate>
                    <div role="alert" aria-live="polite" aria-atomic="true">
                      {error && (
                        <div className="p-3 rounded-[2px] bg-red-500/10 border border-red-500/30 text-[13px] text-red-300">
                          {error}
                        </div>
                      )}
                    </div>

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                      <Field label="Nom complet" name="nom" required autoComplete="name" />
                      <Field label="Société" name="societe" autoComplete="organization" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                      <Field label="Email" name="email" type="email" required autoComplete="email" />
                      <Field label="Téléphone" name="telephone" type="tel" autoComplete="tel" />
                    </div>
                    <Field label="Sujet" name="sujet" required options={subjectOptions} />
                    <Field label="Votre message" name="message" textarea required />

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash max-w-xs">
                        Réponse sous 48 h ouvrées — AZ Concept.
                      </p>
                      <Button type="submit" disabled={loading} size="lg">
                        {loading ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            Envoi…
                          </>
                        ) : (
                          <>
                            Envoyer
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

        {/* Large phone CTA */}
        <section className="relative py-[var(--section-padding)] border-t border-ivory/8 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(201,163,92,0.1) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-champagne/85">— Direct —</span>
            <h2 className="mt-8 display text-ivory text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
              Vous préférez<br />
              <span className="display-italic font-light text-champagne">nous appeler ?</span>
            </h2>
            <a
              href={companyInfo.phoneHref}
              className="group mt-10 inline-flex items-center gap-5 text-ivory hover:text-champagne transition-colors"
            >
              <span className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-ivory/25 group-hover:border-champagne/60 transition-colors">
                <Phone size={16} />
              </span>
              <span className="display text-[clamp(2rem,4vw,3.2rem)] font-light tabular-nums tracking-[-0.02em]">
                {companyInfo.phone}
              </span>
            </a>
            <p className="mt-6 eyebrow text-ash">Lun — Ven · 08:00 — 18:00</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
