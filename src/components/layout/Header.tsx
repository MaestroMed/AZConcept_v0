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
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = useCallback((name: string) => {
    setActiveDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <>
      {/* Header — hidden by default, slides in on scroll */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-2xl border-b border-border-subtle/50 shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tighter">
                <span className="text-accent">AZ</span>
                <span className="text-text-primary"> Concept</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && handleDropdownEnter(item.name)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-card transition-colors duration-200"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 py-2 bg-surface-elevated border border-border rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-card transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                href="/devis"
                className="hidden sm:inline-flex items-center px-4 py-2 text-[13px] font-semibold rounded-lg bg-accent text-white hover:bg-accent-hover transition-all duration-300 shadow-[0_0_20px_rgba(65,105,225,0.25)]"
              >
                Devis gratuit
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-surface-card transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
