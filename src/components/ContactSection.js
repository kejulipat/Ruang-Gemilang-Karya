import {
  contactConfig,
  getMailtoUrl,
  getWhatsAppUrl,
} from "@/data/contact";
import { HouseFlowerWatermark } from "./BrandPattern";

export default function ContactSection() {
  return (
    <section
      id="kontak"
      className="scroll-mt-20 bg-[#F7F7F0] py-16 text-[#231F20] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-[#E5E56E] p-8 text-[#231F20] shadow-xl sm:p-12 lg:p-16">
          <HouseFlowerWatermark
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-[#D30B40]"
            opacity={0.1}
          />
          <HouseFlowerWatermark
            className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 text-[#231F20]"
            opacity={0.05}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#231F20] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#E5E56E]">
              Mulai Kolaborasi
            </span>

            <h2 className="font-display mt-5 text-4xl font-black uppercase leading-[0.98] text-[#231F20] sm:text-5xl lg:text-6xl">
              Siap Membawa Usahamu Tumbuh dan{" "}
              <span className="text-[#D30B40]">Bersinar Bersama?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#231F20]/85 sm:text-lg">
              Setiap usaha memiliki potensi untuk berkembang. Mari mulai langkah
              berikutnya bersama PT Ruang Gemilang Kreatif melalui solusi
              kreatif dan digital yang sesuai dengan kebutuhan bisnismu.
            </p>

            {/* 3 Direct Communication Channel Buttons (Zero Form Elements) */}
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              {/* 1. WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D30B40] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#D30B40]/25 transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#b50936] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#231F20]"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WhatsApp &mdash; Konsultasi Sekarang</span>
              </a>

              {/* 2. Email */}
              <a
                href={getMailtoUrl()}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#231F20] px-7 py-4 text-base font-bold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#3a3436] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D30B40]"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span>Email &mdash; Kirim Email</span>
              </a>

              {/* 3. Instagram */}
              <a
                href={contactConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#231F20] bg-white px-7 py-3.5 text-base font-bold text-[#231F20] transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-[#231F20] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D30B40]"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram &mdash; Kunjungi Instagram</span>
              </a>
            </div>

            {/* Centralized Contact Channels Summary */}
            <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-[#231F20]/12 bg-white/65 p-4 text-left text-xs sm:grid-cols-3">
              <div>
                <span className="block font-extrabold uppercase tracking-wider text-[#231F20]/75">
                  WhatsApp
                </span>
                <span className="mt-0.5 block font-bold text-[#231F20]">
                  {contactConfig.whatsapp.display}
                </span>
              </div>
              <div>
                <span className="block font-extrabold uppercase tracking-wider text-[#231F20]/75">
                  Email Resmi
                </span>
                <span className="mt-0.5 block font-bold text-[#231F20]">
                  {contactConfig.email.display}
                </span>
              </div>
              <div>
                <span className="block font-extrabold uppercase tracking-wider text-[#231F20]/75">
                  Instagram
                </span>
                <span className="mt-0.5 block font-bold text-[#231F20]">
                  {contactConfig.instagram.handle}
                </span>
              </div>
            </div>

            <p className="mt-4 text-[11px] font-medium text-[#231F20]/70">
              {contactConfig.configNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
