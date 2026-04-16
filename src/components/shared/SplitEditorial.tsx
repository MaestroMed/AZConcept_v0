"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitEditorialProps {
  image: string;
  alt: string;
  eyebrow?: string;
  index?: string;
  title: string;
  italicTail?: string;
  paragraphs: string[];
  reversed?: boolean;
  caption?: { gamme?: string; location?: string; year?: string | number };
  aspectClassName?: string;
  children?: React.ReactNode;
}

/**
 * 6/6 editorial split. Alternates left/right via `reversed`.
 * Image has a decorative frame + technical caption strip.
 */
export function SplitEditorial({
  image,
  alt,
  eyebrow,
  index,
  title,
  italicTail,
  paragraphs,
  reversed = false,
  caption,
  aspectClassName = "aspect-[4/5]",
  children,
}: SplitEditorialProps) {
  return (
    <section className="relative py-[var(--section-padding)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center", reversed && "lg:[direction:rtl]")}>
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={cn("lg:col-span-6 [direction:ltr] relative", reversed && "lg:col-start-7")}
          >
            <div className={cn("relative w-full overflow-hidden rounded-[2px] border border-ivory/10", aspectClassName)}>
              <Image
                src={image}
                alt={alt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover [filter:saturate(0.94)_contrast(1.03)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
            {caption && (
              <figcaption className="mt-4 flex items-center justify-between font-mono text-[10.5px] tabular-nums text-ivory/50">
                <span className="uppercase tracking-[0.14em]">
                  {caption.gamme}
                </span>
                <span className="h-px flex-1 mx-4 bg-ivory/10" />
                <span>
                  {caption.location}
                  {caption.year ? ` · ${caption.year}` : ""}
                </span>
              </figcaption>
            )}
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={cn("lg:col-span-5 [direction:ltr]", reversed ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8")}
          >
            {(eyebrow || index) && (
              <div className="flex items-center gap-3 mb-5">
                {index && <span className="font-mono text-[11px] tabular-nums text-champagne">{index}</span>}
                {index && <span aria-hidden className="w-6 h-px bg-ivory/15" />}
                {eyebrow && <span className="eyebrow text-platinum">{eyebrow}</span>}
              </div>
            )}
            <h2 className="display text-ivory text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[-0.025em]">
              {title}
              {italicTail && (
                <>
                  <br />
                  <span className="display-italic font-light text-champagne">{italicTail}</span>
                </>
              )}
            </h2>
            <div className="mt-8 space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[15.5px] leading-[1.7] text-pearl/85">
                  {p}
                </p>
              ))}
            </div>
            {children && <div className="mt-8">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
