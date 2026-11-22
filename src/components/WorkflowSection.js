"use client";

import { useState } from "react";
import { workflowStages } from "@/data/workflow";
import { HouseFlowerWatermark } from "./BrandPattern";

function StageIcon({ step }) {
  switch (step) {
    case "01":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "02":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      );
    case "03":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "04":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      );
    case "05":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6" />
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
      );
    case "06":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      );
    default:
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
  }
}

export default function WorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = workflowStages[activeIndex];

  return (
    <section
      id="alur-kerja"
      className="relative scroll-mt-20 overflow-hidden bg-[#231F20] py-16 text-white sm:py-24"
    >
      <HouseFlowerWatermark
        className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 text-[#E5E56E]"
        opacity={0.04}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#E5E56E]">
              Alur Kerja Kolaborasi
            </span>
            <h2 className="font-display mt-4 text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl">
              Tujuh Tahapan Kerja Sama yang{" "}
              <span className="text-[#E5E56E]">Terarah</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75">
            Klik atau arahkan kursor pada tiap tahapan untuk melihat detail
            aktivitas dan luaran yang akan Anda terima di setiap langkah.
          </p>
        </div>

        {/* Desktop Interactive Connected Timeline (lg+) */}
        <div className="mt-12 hidden lg:block">
          {/* Connected Track */}
          <div className="relative">
            {/* Continuous connecting line behind stage nodes */}
            <div
              aria-hidden="true"
              className="absolute left-6 right-6 top-8 h-1 rounded-full bg-white/15"
            />
            <div
              aria-hidden="true"
              className="absolute left-6 top-8 h-1 rounded-full bg-[#E5E56E] transition-all duration-300"
              style={{
                width: `calc(${(activeIndex / (workflowStages.length - 1)) * 100}% - 12px)`,
              }}
            />

            <div className="relative grid grid-cols-7 gap-3">
              {workflowStages.map((stage, index) => {
                const isSelected = index === activeIndex;
                const isPassed = index <= activeIndex;

                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    aria-pressed={isSelected}
                    className={`group flex flex-col items-center rounded-2xl p-3 text-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5E56E] ${
                      isSelected
                        ? "bg-white/10"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border-2 font-display text-lg font-black transition-all duration-200 ${
                        isSelected
                          ? "scale-110 border-[#E5E56E] bg-[#D30B40] text-white shadow-lg shadow-[#D30B40]/35"
                          : isPassed
                          ? "border-[#E5E56E] bg-[#E5E56E] text-[#231F20]"
                          : "border-white/25 bg-[#231F20] text-white/75 group-hover:border-white/50"
                      }`}
                    >
                      {stage.step}
                    </span>

                    <span
                      className={`mt-3 text-[11px] font-extrabold uppercase tracking-wider ${
                        isSelected ? "text-[#E5E56E]" : "text-white/55"
                      }`}
                    >
                      {stage.phaseTag}
                    </span>

                    <span
                      className={`mt-1 text-xs font-bold leading-snug ${
                        isSelected ? "text-white" : "text-white/80"
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detail Spotlight Panel */}
          <div className="mt-6 grid grid-cols-12 items-stretch gap-6 rounded-3xl border border-white/15 bg-white/6 p-8 backdrop-blur-xs">
            <div className="col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#231F20]"
                    style={{ backgroundColor: activeStage.accent }}
                  >
                    <StageIcon step={activeStage.step} />
                  </span>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E5E56E]">
                      Tahap {activeStage.step} &bull; {activeStage.phaseTag}
                    </span>
                    <h3 className="font-display text-3xl font-black uppercase text-white">
                      {activeStage.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-base leading-relaxed text-white/85">
                  {activeStage.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev > 0 ? prev - 1 : workflowStages.length - 1
                    )
                  }
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10"
                >
                  &larr; Tahap Sebelumnya
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev < workflowStages.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="rounded-full bg-[#E5E56E] px-4 py-2 text-xs font-bold text-[#231F20] transition-colors hover:bg-white"
                >
                  Tahap Berikutnya &rarr;
                </button>
              </div>
            </div>

            <div className="col-span-5 flex flex-col justify-between rounded-2xl border border-white/12 bg-[#231F20] p-6">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                  Aktivitas pada Tahap Ini
                </p>
                <ul className="mt-3 space-y-2.5">
                  {activeStage.activities.map((act, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: activeStage.accent }}
                      />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#E5E56E]">
                  Keluaran Tahap {activeStage.step}
                </span>
                <span className="mt-0.5 block text-xs font-semibold text-white">
                  {activeStage.deliverableHint}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Connected Vertical Timeline (< lg) */}
        <div className="relative mt-10 lg:hidden">
          {/* Continuous Vertical Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-5 top-6 w-0.5 bg-white/20"
          />

          <div className="space-y-4">
            {workflowStages.map((stage, index) => {
              const isOpen = index === activeIndex;

              return (
                <div key={stage.step} className="relative pl-14">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isOpen}
                    className={`w-full rounded-2xl border p-4 text-left transition-all ${
                      isOpen
                        ? "border-[#E5E56E] bg-white/10"
                        : "border-white/12 bg-white/4 hover:bg-white/7"
                    }`}
                  >
                    {/* Node Badge on Vertical Rail */}
                    <span
                      className={`font-display absolute left-0 top-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 text-sm font-black ${
                        isOpen
                          ? "border-[#E5E56E] bg-[#D30B40] text-white"
                          : "border-white/25 bg-[#231F20] text-[#E5E56E]"
                      }`}
                    >
                      {stage.step}
                    </span>

                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5E56E]">
                          {stage.phaseTag}
                        </span>
                        <h3 className="font-display text-xl font-black uppercase text-white">
                          {stage.title}
                        </h3>
                      </div>
                      <span
                        aria-hidden="true"
                        className="text-xs font-bold text-white/60"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>

                    <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                      {stage.description}
                    </p>

                    {isOpen && (
                      <div className="mt-4 space-y-2 border-t border-white/12 pt-3">
                        {stage.activities.map((act, idx) => (
                          <p
                            key={idx}
                            className="flex items-start gap-2 text-xs text-white/80"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E5E56E]"
                            />
                            <span>{act}</span>
                          </p>
                        ))}
                        <p className="mt-2 rounded-lg bg-black/30 px-3 py-2 text-xs font-semibold text-[#E5E56E]">
                          Output: {stage.deliverableHint}
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
