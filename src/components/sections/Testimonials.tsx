"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
            Temoignages
          </p>
          <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold tracking-[-0.02em] text-text-primary leading-[1.1]">
            Ce qu&apos;ils disent.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass rounded-2xl p-6 relative"
            >
              {/* Decorative quote mark */}
              <span className="text-[3rem] text-text-muted/10 leading-none absolute top-4 left-5 select-none">
                &ldquo;
              </span>

              <div className="pt-8">
                <p className="italic text-[14px] text-text-secondary leading-[1.7] mb-6">
                  {testimonial.quote}
                </p>

                <div>
                  <p className="text-[14px] font-medium text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-[13px] text-text-muted">
                    {testimonial.role}
                    {testimonial.company && ` — ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
