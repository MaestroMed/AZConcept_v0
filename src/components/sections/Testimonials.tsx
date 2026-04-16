"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Eyebrow } from "@/components/shared/Eyebrow";

export function Testimonials() {
  return (
    <section className="relative py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — title pinned */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <Eyebrow index="Chapitre IV" label="Voix" className="mb-6" />
            <h2 className="display text-ivory text-[clamp(2.4rem,5vw,4rem)] leading-[0.98] tracking-[-0.028em]">
              Ce qu&apos;ils<br />
              <span className="display-italic font-light text-champagne">en disent.</span>
            </h2>
            <p className="mt-8 text-[15px] leading-[1.65] text-pearl/75 max-w-sm">
              Architectes, promoteurs, maîtres d&apos;œuvre. Les partenaires
              qui dessinent avec nous et prescrivent nos gammes depuis 2018.
            </p>
          </motion.div>

          {/* Right — quotes */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Vertical rule */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-ivory/12 to-transparent" />

              <ul className="space-y-14 pl-8 sm:pl-10">
                {testimonials.map((t, i) => (
                  <motion.li
                    key={t.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* Dot on rule */}
                    <span className="absolute -left-[calc(2rem+3px)] sm:-left-[calc(2.5rem+3px)] top-[10px] h-[6px] w-[6px] rounded-full bg-champagne" />

                    <span className="font-mono text-[10.5px] tabular-nums text-ash block mb-3">
                      {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                    </span>

                    <blockquote className="display text-[clamp(1.25rem,2.3vw,1.7rem)] font-light leading-[1.35] tracking-[-0.012em] text-ivory/95">
                      <span className="display-italic text-champagne">“</span>
                      {t.quote}
                      <span className="display-italic text-champagne">”</span>
                    </blockquote>

                    <div className="mt-5 flex items-baseline gap-3">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ivory">
                        {t.author}
                      </p>
                      <span className="h-px w-6 bg-ivory/20" />
                      <p className="text-[12.5px] text-pearl/70">
                        {t.role}
                        {t.company && <span className="text-ash"> · {t.company}</span>}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
