"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-hover shadow-[0_0_20px_rgba(65,105,225,0.3)] hover:shadow-[0_0_30px_rgba(65,105,225,0.5)]",
        secondary:
          "bg-surface-card text-text-primary border border-border hover:border-border-light hover:bg-surface-hover",
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-surface-card",
        outline:
          "border border-border text-text-primary hover:border-accent hover:text-accent",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg",
        md: "h-11 px-6 text-sm rounded-xl",
        lg: "h-13 px-8 text-base rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
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
