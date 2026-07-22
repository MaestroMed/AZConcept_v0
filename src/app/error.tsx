"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-ink text-ivory px-6">
      <div className="text-center max-w-xl">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-champagne/85">
          — Erreur —
        </span>
        <h1 className="mt-8 display text-ivory text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
          Un incident<br />
          <span className="display-italic font-light text-champagne">d&rsquo;atelier.</span>
        </h1>
        <p className="mt-8 text-[15.5px] leading-[1.65] text-pearl/80">
          Quelque chose s&rsquo;est mal passé de notre côté. Réessayez, ou
          revenez à l&rsquo;accueil — l&rsquo;équipe est prévenue.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="btn-editorial inline-flex items-center gap-2.5 h-12 px-7 rounded-full bg-ivory text-ink text-[13.5px] font-medium hover:bg-champagne-soft transition-colors"
          >
            <RotateCcw size={14} />
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 h-12 px-6 rounded-full border border-ivory/20 text-ivory/90 text-[13.5px] hover:border-champagne/60 hover:text-champagne transition-colors"
          >
            <ArrowLeft size={14} />
            Retour à l&rsquo;accueil
          </Link>
        </div>
        {error.digest && (
          <p className="mt-12 font-mono text-[10.5px] tabular-nums text-ash">
            Réf. {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}
