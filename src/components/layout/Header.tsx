"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: isVisible ? 0 : -80 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
      >
        {/* Mesh gradient bar — subtle, animated */}
        <div className="absolute inset-0 header-mesh" />

        {/* Backdrop blur */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-surface/60" />

        {/* Ondulation shape — bottom edge */}
        <svg className="absolute bottom-0 left-0 right-0 h-[3px] w-full" preserveAspectRatio="none">
          <motion.path
            d="M0,1.5 Q250,0 500,1.5 Q750,3 1000,1.5 Q1250,0 1500,1.5"
            stroke="url(#header-wave-grad)"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
            animate={{
              d: [
                "M0,1.5 Q250,0 500,1.5 Q750,3 1000,1.5 Q1250,0 1500,1.5",
                "M0,1.5 Q250,3 500,1.5 Q750,0 1000,1.5 Q1250,3 1500,1.5",
                "M0,1.5 Q250,0 500,1.5 Q750,3 1000,1.5 Q1250,0 1500,1.5",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="header-wave-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d8d0c4" stopOpacity="0.15" />
              <stop offset="40%" stopColor="#3a64c0" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#181820" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <span className="text-lg font-bold tracking-tight">
                <span className="text-accent">AZ</span>
                <span className="text-text-primary"> Concept</span>
              </span>
            </Link>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-colors duration-200"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown size={12} className={cn("transition-transform duration-200", activeDropdown === item.name && "rotate-180")} />
                    )}
                  </Link>
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 py-1.5 bg-surface-elevated/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                      >
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

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link href="/devis"
                className="hidden sm:inline-flex items-center px-4 py-1.5 text-[13px] font-medium rounded-lg bg-accent/90 text-white hover:bg-accent transition-colors">
                Devis gratuit
              </Link>
              <button onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-white/[0.04] transition-colors" aria-label="Menu">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
