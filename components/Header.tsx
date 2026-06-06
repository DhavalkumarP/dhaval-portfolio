"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const top =
        element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 px-4 md:px-6 py-4 md:py-5 flex justify-between items-center pointer-events-none transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-light/5"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="pointer-events-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2.5 text-light"
          >
            <span className="w-8 h-8 md:w-9 md:h-9 bg-accent rounded-full flex items-center justify-center text-background font-black text-sm md:text-base">
              D
            </span>
            Dhaval<span className="text-accent">.</span>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="pointer-events-auto hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-light/50 hover:text-light transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-6 py-2.5 bg-accent text-background rounded-xl font-bold text-sm hover:bg-accent-hover transition-all"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pointer-events-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 bg-light/5 backdrop-blur-md rounded-xl border border-light/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-light">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-light">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-background/90 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-surface border-l border-light/5 shadow-2xl transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-1 p-6 pt-24">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-lg font-medium text-light/60 hover:text-light transition-colors py-3 border-b border-light/5"
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-lg font-medium text-light/60 hover:text-light transition-colors py-3 border-b border-light/5"
            >
              Résumé
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-4 w-full px-6 py-4 bg-accent text-background rounded-xl font-bold text-base transition-all"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
