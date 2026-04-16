import { cn } from "@/lib/utils";

interface EyebrowProps {
  index?: string;
  label: string;
  className?: string;
  tone?: "default" | "champagne" | "ivory";
}

/**
 * Editorial eyebrow: "01 / Index · LABEL" — mono, spaced.
 * Used as a quiet overline above section titles.
 */
export function Eyebrow({ index, label, className, tone = "default" }: EyebrowProps) {
  const color =
    tone === "champagne" ? "text-champagne"
    : tone === "ivory" ? "text-ivory/80"
    : "text-platinum";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {index && (
        <span className="font-mono text-[10.5px] tabular-nums text-ash tracking-[0.08em]">
          {index}
        </span>
      )}
      {index && <span aria-hidden className="w-6 h-px bg-ivory/15" />}
      <span className={cn("eyebrow", color)}>{label}</span>
    </div>
  );
}
