"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight whichever section currently owns the upper half of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-[5px] left-0 right-0 z-50 px-4 sm:px-6 pt-4"
    >
      <div className="container-page rounded-neu-lg neu-raised px-4 sm:px-6">
        <div className="flex items-center justify-between h-[68px]">
          <a
            href="#home"
            className="w-11 h-11 rounded-2xl neu-inset grid place-items-center text-sm font-bold tracking-wider text-gradient"
          >
            EN
          </a>

          <div className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 min-h-[44px] inline-flex items-center rounded-xl text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "neu-inset text-accent"
                      : "text-ink-muted hover:text-accent"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden w-[52px] h-[52px] rounded-full neu-btn grid place-items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 grid grid-cols-2 gap-2.5">
                {navItems.map((item) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        // Let the menu finish closing before scrolling:
                        // React unmounting this link mid-scroll cancels it.
                        e.preventDefault();
                        const id = item.href.slice(1);
                        setIsMobileMenuOpen(false);
                        setTimeout(() => {
                          document
                            .getElementById(id)
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                          history.replaceState(null, "", item.href);
                        }, 380);
                      }}
                      className={`px-4 py-3 rounded-xl text-center text-[13px] font-medium ${
                        isActive ? "neu-inset text-accent" : "neu-raised-sm text-ink-muted"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
