"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-surface/80 backdrop-blur-2xl border-b border-border/15 shadow-[0_1px_20px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      )}>
        {/* Ondulation wave — bottom edge */}
        {scrolled && (
          <svg className="absolute -bottom-[2px] left-0 right-0 h-[3px] w-full" preserveAspectRatio="none">
            <motion.path
              d="M0,1.5 Q250,0 500,1.5 Q750,3 1000,1.5 Q1250,0 1500,1.5"
              stroke="url(#hw)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke"
              animate={{ d: [
                "M0,1.5 Q250,0 500,1.5 Q750,3 1000,1.5 Q1250,0 1500,1.5",
                "M0,1.5 Q250,3 500,1.5 Q750,0 1000,1.5 Q1250,3 1500,1.5",
                "M0,1.5 Q250,0 500,1.5 Q750,3 1000,1.5 Q1250,0 1500,1.5",
              ] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="hw" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#d8d0c4" stopOpacity="0.12" />
                <stop offset="40%" stopColor="#3a64c0" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#181820" stopOpacity="0.08" />
              </linearGradient>
            </defs>
          </svg>
        )}

        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-lg font-bold tracking-tight">
                <span className="text-accent">AZ</span>
                <span className={cn("transition-colors duration-300", scrolled ? "text-text-primary" : "text-white/80")}> Concept</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <div key={item.name} className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <Link href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-200",
                      scrolled
                        ? "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
                        : "text-white/50 hover:text-white/80 hover:bg-white/[0.06]"
                    )}>
                    {item.name}
                    {item.children && <ChevronDown size={12} className={cn("transition-transform duration-200", activeDropdown === item.name && "rotate-180")} />}
                  </Link>
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 py-1.5 bg-surface-elevated/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                        {item.children.map((child) => (
                          <Link key={child.name} href={child.href}
                            className="block px-3.5 py-2 text-[13px] text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-colors">
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/devis"
                className="hidden sm:inline-flex items-center px-4 py-1.5 text-[13px] font-medium rounded-lg bg-accent/90 text-white hover:bg-accent transition-colors">
                Devis gratuit
              </Link>
              <button onClick={() => setIsMobileOpen(true)}
                className={cn("lg:hidden p-2 rounded-lg transition-colors", scrolled ? "text-text-primary" : "text-white/70")} aria-label="Menu">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
