"use client";

import { useEffect } from "react";
import { statusStyles } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/data/contact";

export default function PortfolioDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const badge = statusStyles[project.status] || statusStyles["Simulasi"];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-xs sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white text-[#231F20] shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-[#231F20]/10 bg-white/95 px-6 py-5 backdrop-blur-md sm:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-wider"
                style={{
                  backgroundColor: badge.bg,
                  color: badge.text,
                  borderColor: badge.border,
                }}
              >
                <span>Status: {project.status}</span>
              </span>
              <span className="rounded-full bg-[#F7F7F0] px-3 py-1 text-xs font-bold text-[#231F20]/75">
                {project.clientType}
              </span>
            </div>

            <h3
              id="portfolio-modal-title"
              className="font-display mt-2.5 text-3xl font-black uppercase text-[#231F20] sm:text-4xl"
            >
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-[#231F20]/70">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail proyek"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#231F20]/15 bg-[#F7F7F0] text-[#231F20] transition-colors hover:bg-[#D30B40] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D30B40]"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-8 p-6 sm:p-8">
          {/* 1 & 2: Project Info & Status Disclaimer */}
          <div className="rounded-2xl border border-[#231F20]/12 bg-[#F7F7F0] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#D30B40]">
              Informasi &amp; Status Proyek ({project.status})
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#231F20]">
              {project.summary}
            </p>
            <p className="mt-2 text-xs font-semibold text-[#231F20]/70">
              Keterangan Status: {badge.description}
            </p>
          </div>

          {/* 3 & 4: Challenge & Creative Solution */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#231F20]/12 bg-white p-5">
              <span className="inline-block rounded-md bg-[#D30B40]/10 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#D30B40]">
                Tantangan Awal
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[#231F20]/85">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-2xl border border-[#231F20]/12 bg-white p-5">
              <span className="inline-block rounded-md bg-[#66CC69]/20 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#231F20]">
                Solusi Kreatif
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[#231F20]/85">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 5: Services Used */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#231F20]/65">
              Layanan yang Digunakan
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.servicesUsed.map((srv) => (
                <span
                  key={srv}
                  className="rounded-full bg-[#231F20] px-4 py-1.5 text-xs font-bold text-[#E5E56E]"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* 6: Measurable Outcomes */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#231F20]/65">
              Hasil Terukur &amp; Ringkasan Capaian
            </h4>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#231F20] p-4 text-white"
                >
                  <p className="font-display text-2xl font-black text-[#E5E56E]">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs font-bold text-white">{m.label}</p>
                  <p className="mt-1 text-[11px] leading-snug text-white/70">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 7: Visual Gallery */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#231F20]/65">
                Galeri Visual ({project.status})
              </h4>
              <span className="rounded-full border border-[#231F20]/15 px-3 py-0.5 text-[11px] font-bold text-[#231F20]">
                Label Status: {project.status}
              </span>
            </div>

            {/* Fresh Bite Gallery Panels */}
            {project.galleryPanels && (
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.galleryPanels.map((panel) => (
                  <div
                    key={panel.id}
                    className="rounded-2xl border border-[#231F20]/12 bg-[#F7F7F0] p-4"
                  >
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase"
                      style={{
                        backgroundColor: panel.accent,
                        color:
                          panel.accent === "#D30B40" ||
                          panel.accent === "#4486C1"
                            ? "#FFFFFF"
                            : "#231F20",
                      }}
                    >
                      {panel.badge}
                    </span>
                    <h5 className="mt-2.5 text-base font-extrabold text-[#231F20]">
                      {panel.title}
                    </h5>
                    <p className="mt-1 text-xs leading-relaxed text-[#231F20]/75">
                      {panel.subtitle}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {panel.highlights.map((hl) => (
                        <li
                          key={hl}
                          className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-[#231F20]"
                        >
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Kalola 5-Frame Promotional Series + App UI Mockup */}
            {project.frames && (
              <div className="mt-3 space-y-5">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.frames.map((frame) => (
                    <div
                      key={frame.frame}
                      className="flex flex-col justify-between rounded-2xl border border-[#231F20]/15 bg-[#F7F7F0] p-4"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display text-base font-black text-[#231F20]">
                            {frame.frame}
                          </span>
                          <span className="rounded-full bg-[#E5E56E] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-[#231F20]">
                            Konsep &bull; {frame.role}
                          </span>
                        </div>
                        <p className="mt-2.5 text-sm font-extrabold text-[#231F20]">
                          {frame.headline}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#231F20]/75">
                          {frame.caption}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-12 rounded-full"
                        style={{ backgroundColor: frame.accent }}
                      />
                    </div>
                  ))}
                </div>

                {project.appMockupPreview && (
                  <div className="rounded-2xl bg-[#231F20] p-5 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-[#E5E56E] px-3 py-0.5 text-[10px] font-extrabold uppercase text-[#231F20]">
                        {project.appMockupPreview.badge}
                      </span>
                      <span className="text-xs font-bold text-white/75">
                        {project.appMockupPreview.appName}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {project.appMockupPreview.modules.map((mod) => (
                        <div
                          key={mod.label}
                          className="rounded-xl border border-white/12 bg-white/8 p-3.5"
                        >
                          <p className="text-[11px] font-bold text-[#E5E56E]">
                            {mod.label}
                          </p>
                          <p className="mt-1 text-sm font-extrabold text-white">
                            {mod.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 7 Digital & Education Simulation Artifacts */}
            {project.simulationItems && (
              <div className="mt-3 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {project.simulationItems.map((sim) => (
                  <div
                    key={sim.id}
                    className="rounded-2xl border border-[#4486C1]/25 bg-[#F7F7F0] p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#4486C1] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-white">
                        Simulasi {sim.number}
                      </span>
                      <span className="text-[11px] font-bold text-[#231F20]/65">
                        {sim.service}
                      </span>
                    </div>
                    <h5 className="mt-2.5 text-sm font-extrabold text-[#231F20]">
                      {sim.title}
                    </h5>
                    <p className="mt-1 text-xs leading-relaxed text-[#231F20]/75">
                      {sim.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {sim.elements.map((el) => (
                        <span
                          key={el}
                          className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#231F20]"
                        >
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 8: Dokumentasi Sebelum dan Sesudah */}
          <div className="rounded-2xl border border-[#231F20]/15 bg-white p-5">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#231F20]/65">
              Dokumentasi Sebelum dan Sesudah
            </h4>
            <p className="mt-2 rounded-xl bg-[#E5E56E]/35 px-3.5 py-2.5 text-xs font-semibold leading-relaxed text-[#231F20]">
              {project.beforeAfter.note}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#231F20]/10 bg-[#F7F7F0] p-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#231F20]/65">
                  Kondisi Awal (Sebelum)
                </span>
                <p className="mt-1.5 text-xs leading-relaxed text-[#231F20]/85">
                  {project.beforeAfter.beforeSummary}
                </p>
              </div>
              <div className="rounded-xl border border-[#66CC69]/40 bg-[#66CC69]/12 p-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#231F20]">
                  Kondisi Hasil (Sesudah)
                </span>
                <p className="mt-1.5 text-xs leading-relaxed text-[#231F20]">
                  {project.beforeAfter.afterSummary}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Bottom CTA */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-[#231F20]/10 pt-5 sm:flex-row">
            <p className="text-xs font-semibold text-[#231F20]/70">
              Tertarik menerapkan pendekatan serupa untuk usaha Anda?
            </p>
            <a
              href={getWhatsAppUrl(
                `Halo PT Ruang Gemilang Kreatif, saya ingin berdiskusi setelah melihat portofolio "${project.title}" (${project.status}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D30B40] px-6 py-3 text-sm font-bold text-white hover:bg-[#b50936] sm:w-auto"
            >
              <span>Diskusi Proyek Serupa via WhatsApp</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
