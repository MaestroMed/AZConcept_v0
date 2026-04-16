"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageStripProps {
  images: string[];
  captions?: string[];
  eyebrow?: string;
  title?: string;
  layout?: "strip" | "mosaic";
  className?: string;
}

/**
 * Full-bleed horizontal image band (strip) or asymmetric mosaic (mosaic).
 * Strip scroll-snaps on mobile and becomes a flex row on desktop.
 */
export function ImageStrip({ images, captions, eyebrow, title, layout = "strip", className }: ImageStripProps) {
  return (
    <section className={cn("relative py-[clamp(4rem,8vw,8rem)]", className)}>
      {(eyebrow || title) && (
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] mb-10 sm:mb-14">
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            {eyebrow && <span className="eyebrow text-platinum">{eyebrow}</span>}
            {title && (
              <h2 className="display-italic font-light text-ivory/80 text-[clamp(1.2rem,2vw,1.8rem)]">
                {title}
              </h2>
            )}
            <span className="font-mono text-[10.5px] tabular-nums text-ash">
              {String(images.length).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      )}

      {layout === "strip" ? (
        <div className="snap-row gap-4 sm:gap-6 px-[var(--container-padding)]">
          {images.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[82vw] sm:w-[48vw] lg:w-[32vw] aspect-[4/5] overflow-hidden rounded-[2px] border border-ivory/8"
            >
              <Image
                src={src}
                alt={captions?.[i] ?? ""}
                fill
                quality={85}
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 32vw"
                className="object-cover [filter:saturate(0.94)_contrast(1.03)] transition-transform duration-[1200ms] hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tabular-nums text-ivory/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {captions?.[i] && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/75">
                    {captions[i]}
                  </span>
                )}
              </div>
            </motion.figure>
          ))}
        </div>
      ) : (
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-12 gap-3 sm:gap-5">
            {images.slice(0, 6).map((src, i) => {
              // Asymmetric mosaic pattern
              const span = [
                "col-span-7 aspect-[5/4]",
                "col-span-5 aspect-[5/4]",
                "col-span-4 aspect-square",
                "col-span-4 aspect-square",
                "col-span-4 aspect-square",
                "col-span-12 sm:col-span-6 aspect-[16/10]",
              ][i] ?? "col-span-6 aspect-square";
              return (
                <motion.figure
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={cn("relative overflow-hidden rounded-[2px] border border-ivory/8", span)}
                >
                  <Image
                    src={src}
                    alt={captions?.[i] ?? ""}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                </motion.figure>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
