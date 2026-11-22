"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandPattern";
import { getWhatsAppUrl } from "@/data/contact";

const NAV_ITEMS = [
  { id: "tentang", label: "Tentang", href: "#tentang" },
  { id: "layanan", label: "Layanan", href: "#layanan" },
  { id: "alur-kerja", label: "Alur Kerja", href: "#alur-kerja" },
  { id: "portofolio", label: "Portofolio", href: "#portofolio" },
  { id: "tim", label: "Tim", href: "#tim" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [...NAV_ITEMS.map((item) => item.id), "kontak"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#231F20]/95 shadow-lg shadow-black/20 backdrop-blur-md border-b border-white/10"
          : "bg-[#231F20] border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Company Logo & Companion Legal Name */}
        <a
          href="#beranda"
          aria-label="Kembali ke beranda PT Ruang Gemilang Kreatif"
          className="group flex items-center gap-2 rounded-lg py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5E56E]"
        >
          <BrandLogo
            variant="white"
            type="full"
            showLegalName
            legalNameClassName="text-white group-hover:text-[#E5E56E] transition-colors"
            imageClassName="h-9 sm:h-10 w-auto"
            priority
          />
        </a>

        {/* Right: Desktop Navigation + WhatsApp CTA */}
        <nav
          aria-label="Navigasi utama"
          className="hidden lg:flex items-center gap-1.5"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5E56E] ${
                  isActive
                    ? "bg-white/12 text-[#E5E56E]"
                    : "text-white/85 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-[#D30B40]"
                  />
                )}
              </a>
            );
          })}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#D30B40] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#D30B40]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b50936] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5E56E]"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>Konsultasi Gratis</span>
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#D30B40] px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-[#b50936] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5E56E]"
          >
            <span>Konsultasi</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-panel"
            aria-label={
              mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5E56E]"
          >
            {mobileOpen ? (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel (thumb-friendly) */}
      {mobileOpen && (
        <div
          id="mobile-navigation-panel"
          className="border-t border-white/10 bg-[#231F20] px-4 pb-6 pt-4 lg:hidden"
        >
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E5E56E]">
            PT Ruang Gemilang Kreatif
          </p>
          <nav aria-label="Navigasi seluler" className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleMobileLinkClick}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-[#E5E56E] text-[#231F20]"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-[#D30B40]" : "bg-white/30"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-3 border-t border-white/10">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileLinkClick}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D30B40] px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-[#D30B40]/20 hover:bg-[#b50936]"
            >
              <span>Konsultasi Gratis via WhatsApp</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
