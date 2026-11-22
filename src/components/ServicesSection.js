"use client";

import { useState } from "react";
import {
  serviceCategories,
  serviceCategoryCounts,
  servicesList,
} from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredServices =
    selectedCategory === "Semua"
      ? servicesList
      : servicesList.filter(
          (service) => service.category === selectedCategory
        );

  return (
    <section
      id="layanan"
      className="scroll-mt-20 bg-white py-16 text-[#231F20] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E5E56E] px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#231F20]">
              Katalog Layanan
            </span>
            <h2 className="font-display mt-4 text-4xl font-black uppercase leading-[0.98] text-[#231F20] sm:text-5xl">
              Sembilan Solusi Kreatif &amp; Digital untuk{" "}
              <span className="text-[#D30B40]">Naik Kelas</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#231F20]/75">
              Pilih kategori layanan sesuai kebutuhan usaha Anda saat ini.
              Setiap layanan dirancang dengan deliverables yang jelas dan dapat
              dikonsultasikan langsung via WhatsApp.
            </p>
          </div>

          <div className="rounded-2xl border border-[#231F20]/10 bg-[#F7F7F0] px-5 py-3.5 text-sm font-semibold text-[#231F20]">
            Menampilkan{" "}
            <span className="font-display text-xl font-black text-[#D30B40]">
              {filteredServices.length}
            </span>{" "}
            dari {servicesList.length} layanan
          </div>
        </div>

        {/* Category Filter Bar */}
        <div
          role="group"
          aria-label="Filter kategori layanan"
          className="mt-8 flex flex-wrap gap-2.5"
        >
          {serviceCategories.map((category) => {
            const isActive = selectedCategory === category.id;
            const count = serviceCategoryCounts[category.id] || 0;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-[background-color,color,border-color,box-shadow,transform] duration-200 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#231F20] ${
                  isActive
                    ? "shadow-md -translate-y-0.5"
                    : "border border-[#231F20]/15 bg-[#F7F7F0] text-[#231F20] hover:border-[#231F20]/40 hover:bg-white"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: category.accent,
                        color: category.textOnAccent,
                      }
                    : undefined
                }
              >
                <span>{category.label}</span>
                <span
                  className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-extrabold ${
                    isActive
                      ? "bg-black/15 text-current"
                      : "bg-[#231F20]/10 text-[#231F20]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div
          key={selectedCategory}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300"
        >
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
