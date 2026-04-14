"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone } from "lucide-react";
import { navigation } from "@/data/navigation";
import { companyInfo } from "@/data/company";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedItem(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-surface-elevated border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="text-xl font-black tracking-tighter">
                <span className="text-accent">AZ</span>
                <span className="text-text-primary"> Concept</span>
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-card transition-colors"
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === item.name ? null : item.name
                          )
                        }
                        className="flex items-center justify-between w-full px-6 py-3.5 text-base font-medium text-text-primary hover:bg-surface-card transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            expandedItem === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={onClose}
                                className="block pl-10 pr-6 py-2.5 text-sm text-text-secondary hover:text-accent border-l-2 border-border ml-6 transition-colors"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block px-6 py-3.5 text-base font-medium text-text-primary hover:bg-surface-card transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-border space-y-3">
              <Link
                href="/devis"
                onClick={onClose}
                className="flex items-center justify-center w-full h-12 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors shadow-[0_0_20px_rgba(65,105,225,0.3)]"
              >
                Devis gratuit
              </Link>
              <a
                href={companyInfo.phoneHref}
                className="flex items-center justify-center gap-2 w-full h-12 text-text-secondary hover:text-text-primary border border-border rounded-xl transition-colors"
              >
                <Phone size={16} />
                {companyInfo.phone}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
