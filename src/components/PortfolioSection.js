"use client";

import { useState } from "react";
import {
  portfolioCategories,
  portfolioProjects,
  statusStyles,
} from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioDetailModal from "./PortfolioDetailModal";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "Semua"
      ? portfolioProjects
      : portfolioProjects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <section
      id="portofolio"
      className="scroll-mt-20 bg-[#F7F7F0] py-16 text-[#231F20] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading + Honest Status Legend */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D30B40] px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
              Galeri Portofolio
            </span>
            <h2 className="font-display mt-4 text-4xl font-black uppercase leading-[0.98] text-[#231F20] sm:text-5xl">
              Studi Kasus Nyata, Eksplorasi Konsep &amp; Simulasi Digital
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#231F20]/75">
              Setiap karya kami beri label status secara jujur agar calon klien
              dapat membedakan proyek komersial nyata, eksplorasi konsep, dan
              simulasi standar deliverable.
            </p>
          </div>

          {/* Status Legend Pills */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(statusStyles).map(([statusName, style]) => (
              <span
                key={statusName}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold"
                style={{
                  backgroundColor: style.bg,
                  color: style.text,
                  borderColor: style.border,
                }}
              >
                <span>{statusName}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div
          role="tablist"
          aria-label="Filter kategori portofolio"
          className="mt-8 flex flex-wrap gap-2.5"
        >
          {portfolioCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#231F20] ${
                  isActive
                    ? "bg-[#231F20] text-[#E5E56E] shadow-md"
                    : "border border-[#231F20]/15 bg-white text-[#231F20] hover:border-[#231F20]/40"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div
          key={selectedCategory}
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onSelect={setActiveProject}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-3xl border border-[#231F20]/15 bg-white p-10 text-center">
            <p className="text-base font-bold text-[#231F20]">
              Belum ada item portofolio pada kategori ini.
            </p>
          </div>
        )}
      </div>

      {/* Modal Detail Portofolio */}
      <PortfolioDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
