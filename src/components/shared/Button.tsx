"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white hover:bg-accent-hover",
        secondary: "text-text-secondary hover:text-text-primary border border-border/40 hover:border-border",
        ghost: "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]",
      },
      size: {
        sm: "h-9 px-4 text-[13px] rounded-lg",
        md: "h-11 px-5 text-[14px] rounded-xl",
        lg: "h-12 px-6 text-[14px] rounded-xl",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({ className, variant, size, href, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
