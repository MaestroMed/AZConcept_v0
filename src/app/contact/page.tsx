"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
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

export default function ContactPage() {
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

        <section className="py-[var(--section-padding)] bg-surface relative">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info - Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-2">
                    Coordonnees
                  </h2>
                  <p className="text-text-secondary text-sm">
                    N&apos;hesitez pas a nous contacter par telephone, email ou en
                    remplissant le formulaire ci-contre.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    const content = (
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <Icon size={18} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                            {detail.label}
                          </p>
                          <p className="text-sm text-text-primary whitespace-pre-line">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    );

                    if (detail.href) {
                      return (
                        <a
                          key={detail.label}
                          href={detail.href}
                          className="block hover:opacity-80 transition-opacity"
                        >
                          {content}
                        </a>
                      );
                    }
                    return <div key={detail.label}>{content}</div>;
                  })}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="rounded-2xl bg-surface-card border border-border overflow-hidden aspect-[4/3] flex items-center justify-center"
                >
                  <div className="text-center">
                    <MapPin size={32} className="text-text-muted/30 mx-auto mb-2" />
                    <p className="text-sm text-text-muted">{companyInfo.address}</p>
                    <p className="text-xs text-text-muted">{companyInfo.city}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form - Right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-3"
              >
                <form
                  className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h3 className="text-xl font-bold text-text-primary mb-6">
                    Envoyez-nous un message
                  </h3>

                  <div className="space-y-5">
                    {/* Nom */}
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        placeholder="Jean Dupont"
                        className="w-full h-11 px-4 rounded-xl bg-surface-elevated border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="jean@exemple.fr"
                        className="w-full h-11 px-4 rounded-xl bg-surface-elevated border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors"
                      />
                    </div>

                    {/* Telephone */}
                    <div>
                      <label
                        htmlFor="telephone"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Telephone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder="06 12 34 56 78"
                        className="w-full h-11 px-4 rounded-xl bg-surface-elevated border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors"
                      />
                    </div>

                    {/* Sujet */}
                    <div>
                      <label
                        htmlFor="sujet"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Sujet *
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        required
                        className="w-full h-11 px-4 rounded-xl bg-surface-elevated border border-border text-text-primary text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="text-text-muted">
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
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Decrivez votre projet ou votre demande..."
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full sm:w-auto">
                      Envoyer le message
                      <Send size={16} />
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
