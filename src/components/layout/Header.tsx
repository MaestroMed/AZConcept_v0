"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (name: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveDropdown(null), 140);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "glass-strong" : "bg-transparent"
        )}
      >
        {/* Scroll progress (champagne hairline) */}
        <motion.div
          aria-hidden
          style={{ scaleX: progress, transformOrigin: "0% 50%" }}
          className="absolute top-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-champagne to-transparent opacity-70"
        />

        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex items-center justify-between h-[76px]">
            {/* Wordmark */}
            <Link href="/" className="group flex items-center gap-3">
              <span className="inline-flex items-center gap-[2px] leading-none">
                <span className="display text-[22px] sm:text-[24px] font-light tracking-[-0.04em] text-ivory">
                  AZ
                </span>
                <span className="display-italic text-[22px] sm:text-[24px] font-light tracking-[-0.04em] text-champagne">
                  concept
                </span>
              </span>
              <span
                aria-hidden
                className="hidden sm:block h-4 w-px bg-ivory/15 group-hover:bg-champagne/60 transition-colors"
              />
              <span className="hidden sm:inline eyebrow text-[9.5px] text-platinum">
                Metallerie d&apos;architecture
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-2"
              onMouseLeave={scheduleClose}
            >
              {navigation.map((item) => {
                const hasChildren = !!item.children?.length;
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasChildren && openDropdown(item.name)}
                    onFocus={() => hasChildren && openDropdown(item.name)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative inline-flex items-center gap-1 px-3.5 py-2",
                        "font-mono text-[11px] uppercase tracking-[0.16em]",
                        "transition-colors duration-300",
                        activeDropdown === item.name || isActive(item.href)
                          ? "text-ivory"
                          : "text-ivory/60 hover:text-ivory"
                      )}
                    >
                      {item.name}
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="header-active-dot"
                          aria-hidden
                          className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[5px] w-[5px] rounded-full bg-champagne"
                          style={{ boxShadow: "0 0 10px rgba(201,163,92,0.8)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {hasChildren && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-2xl glass-strong"
                        >
                          <div className="p-2">
                            <div className="flex items-center justify-between px-3 py-2">
                              <span className="eyebrow text-[9.5px] text-platinum">
                                Gamme · {item.name}
                              </span>
                              <span className="font-mono text-[10px] tabular-nums text-ash">
                                0{item.children?.length}
                              </span>
                            </div>
                            <div className="rule-strong my-1" />
                            {item.children?.map((child, i) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-ivory/[0.035] transition-colors"
                              >
                                <span className="display text-[18px] text-ivory/85 group-hover:text-ivory transition-colors">
                                  {child.name}
                                </span>
                                <span className="font-mono text-[10px] tabular-nums text-ash group-hover:text-champagne transition-colors">
                                  0{i + 1}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex eyebrow text-[10.5px] text-ivory/60 hover:text-ivory transition-colors link-underline"
              >
                +33 9 71 35 74 96
              </Link>
              <Link
                href="/devis"
                className={cn(
                  "hidden sm:inline-flex btn-editorial items-center gap-2 h-10 px-5 rounded-full",
                  "text-[12px] font-medium tracking-[0.01em]",
                  "bg-ivory text-ink hover:bg-champagne-soft transition-colors"
                )}
              >
                Demander un devis
                <span aria-hidden className="w-1 h-1 rounded-full bg-champagne" />
              </Link>
              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 h-10 px-3 rounded-full border border-ivory/15 text-ivory/80 hover:text-ivory hover:border-ivory/30 transition-colors"
                aria-label="Menu"
              >
                <Menu size={15} />
                <span className="eyebrow text-[10px] text-ivory/60">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
