"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/navigation";
import { companyInfo } from "@/data/company";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && <MenuContent onClose={onClose} />}
    </AnimatePresence>
  );
}

function MenuContent({ onClose }: { onClose: () => void }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 280 }}
        className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md flex flex-col bg-obsidian border-l border-ivory/8"
      >
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-ivory/8">
          <span className="inline-flex items-center gap-[2px] leading-none">
            <span className="display text-[22px] font-light tracking-[-0.04em] text-ivory">AZ</span>
            <span className="display-italic text-[22px] font-light tracking-[-0.04em] text-champagne">concept</span>
          </span>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 h-9 px-3 rounded-full border border-ivory/15 text-ivory/80 hover:text-ivory hover:border-champagne/60 transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={14} />
            <span className="eyebrow text-[10px] text-ivory/60">Fermer</span>
          </button>
        </div>

        <div className="flex items-center justify-between px-6 py-5">
          <span className="eyebrow text-platinum">
            Index — {String(navigation.length).padStart(2, "0")}
          </span>
          <span className="font-mono text-[10px] tabular-nums text-ash">
            01 / {String(navigation.length).padStart(2, "0")}
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto px-2">
          {navigation.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-ivory/6 last:border-none"
            >
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedItem(expandedItem === item.name ? null : item.name)
                    }
                    className="flex items-center justify-between w-full px-4 py-5 group"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tabular-nums text-ash group-hover:text-champagne transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-[26px] font-light tracking-[-0.02em] text-ivory/90 group-hover:text-ivory transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-platinum transition-transform duration-300 ${
                        expandedItem === item.name ? "rotate-180 text-champagne" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedItem === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-12 pr-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={onClose}
                              className="flex items-center justify-between py-2 text-[14px] text-pearl hover:text-champagne transition-colors"
                            >
                              <span className="font-mono tracking-[0.1em]">{child.name}</span>
                              <ArrowUpRight size={14} />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-baseline gap-4 px-4 py-5 group"
                >
                  <span className="font-mono text-[10px] tabular-nums text-ash group-hover:text-champagne transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[26px] font-light tracking-[-0.02em] text-ivory/90 group-hover:text-ivory transition-colors">
                    {item.name}
                  </span>
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-ivory/8 space-y-3">
          <Link
            href="/devis"
            onClick={onClose}
            className="btn-editorial flex items-center justify-center w-full h-12 rounded-full bg-ivory text-ink font-medium text-[13px] hover:bg-champagne-soft transition-colors"
          >
            Demander un devis
          </Link>
          <a
            href={companyInfo.phoneHref}
            className="flex items-center justify-center gap-2 w-full h-11 rounded-full border border-ivory/15 text-ivory/80 hover:text-champagne hover:border-champagne/60 transition-colors text-[13px]"
          >
            <Phone size={13} />
            {companyInfo.phone}
          </a>
          <p className="pt-2 text-[11px] text-ash text-center">
            {companyInfo.city} · Atelier 1 800 m²
          </p>
        </div>
      </motion.aside>
    </>
  );
}
