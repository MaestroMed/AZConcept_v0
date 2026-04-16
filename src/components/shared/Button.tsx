"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn-editorial inline-flex items-center justify-center gap-2.5 font-medium tracking-[0.01em] " +
    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] " +
    "cursor-pointer whitespace-nowrap select-none",
  {
    variants: {
      variant: {
        // Warm ivory-on-ink, champagne inset ring — the lead CTA.
        primary:
          "bg-ivory text-ink hover:bg-champagne-soft " +
          "shadow-[0_1px_0_0_rgba(241,237,228,0.35)_inset,0_16px_40px_-16px_rgba(201,163,92,0.4)]",
        // Champagne fill — secondary lead
        champagne:
          "bg-champagne text-ink hover:bg-champagne-soft " +
          "shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_14px_40px_-12px_rgba(201,163,92,0.5)]",
        // Bordered, ghostly — for second CTA / forms
        outline:
          "bg-transparent text-ivory border border-ivory/18 hover:border-champagne/70 hover:text-champagne",
        // Alias kept for compatibility with inner pages
        secondary:
          "bg-transparent text-ivory border border-ivory/18 hover:border-champagne/70 hover:text-champagne",
        // Minimal — text only with arrow, editorial link
        ghost:
          "text-ivory/80 hover:text-ivory",
        // Inverted — ink on ivory (for light sections)
        inverse:
          "bg-ink text-ivory hover:bg-graphite",
      },
      size: {
        sm: "h-9 px-4 text-[12px] rounded-full",
        md: "h-11 px-6 text-[13px] rounded-full",
        lg: "h-14 px-8 text-[14px] rounded-full",
        xl: "h-16 px-10 text-[15px] rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant,
  size,
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    if (external) {
      return (
        <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
