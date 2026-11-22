import { companyProfile } from "@/data/company";
import { getWhatsAppUrl } from "@/data/contact";
import {
  BrandLogo,
  HouseFlowerWatermark,
  OrganicWavePattern,
} from "./BrandPattern";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-[#231F20] text-white"
    >
      {/* Background depth: contour waves + subtle house-flower watermark */}
      <OrganicWavePattern className="pointer-events-none absolute inset-0 h-full w-full" />
      <HouseFlowerWatermark
        className="pointer-events-none absolute -right-24 -top-20 h-105 w-105 text-[#E5E56E]"
        opacity={0.04}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Brand Headline, Narrative, CTAs, and 4 Focus Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#E5E56E]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#D30B40]"
              />
              <span>{companyProfile.legalName}</span>
            </div>

            <h1 className="font-display mt-6 text-5xl font-black uppercase leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-[78px]">
              Bersinar{" "}
              <span className="relative inline-block text-[#E5E56E]">
                Bersama
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-2 w-full rounded-full bg-[#D30B40]"
                />
              </span>
            </h1>

            <p className="mt-5 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {companyProfile.subTagline}.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {companyProfile.heroDescription}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D30B40] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#D30B40]/30 transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#b50936] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5E56E]"
              >
                <span>Konsultasi Sekarang</span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#E5E56E] bg-transparent px-7 py-3.5 text-base font-bold text-[#E5E56E] transition-colors duration-200 hover:bg-[#E5E56E] hover:text-[#231F20] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Lihat Katalog Layanan</span>
              </a>
            </div>

            {/* 4 Focus Pillars Strip (mirrors reference metrics rhythm) */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/12 pt-7 sm:grid-cols-4">
              {companyProfile.heroHighlights.map((pillar) => (
                <div key={pillar.id} className="group">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 shrink-0 rounded-sm"
                      style={{ backgroundColor: pillar.accent }}
                    />
                    <span className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
                      {pillar.title}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-snug text-white/65">
                    {pillar.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Studio Visual Showcase Composition */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background geometric offset block */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-4xl border border-[#E5E56E]/25 bg-white/3"
              />

              {/* Primary Signature Identity Card (#D30B40 on #E5E56E) */}
              <div className="relative rounded-3xl bg-[#E5E56E] p-6 text-[#231F20] shadow-2xl">
                <div className="flex items-center justify-between gap-2 border-b border-[#231F20]/15 pb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#231F20] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E5E56E]">
                    &ldquo;{companyProfile.logoQuote}&rdquo;
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D30B40]">
                    STUDIO PREVIEW
                  </span>
                </div>

                <div className="my-5 flex flex-col items-start gap-3">
                  <BrandLogo
                    variant="magenta"
                    type="full"
                    imageClassName="h-14 sm:h-16 w-auto"
                    priority
                  />
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#231F20]/80">
                    {companyProfile.legalName} &bull; {companyProfile.tagline}
                  </p>
                </div>

                {/* Angled Creative & Digital Showcase Mockups (explicitly labeled Preview) */}
                <div className="grid grid-cols-12 gap-3 pt-1">
                  {/* Mockup 1: Packaging & Brand Card */}
                  <div className="col-span-7 rounded-2xl bg-[#231F20] p-4 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-[#66CC69] px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#231F20]">
                        Branding &amp; Kemasan
                      </span>
                      <span className="text-[10px] font-semibold text-white/75">
                        Mockup
                      </span>
                    </div>
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#66CC69]/20 border border-[#66CC69]/40">
                          <span className="font-display text-sm font-black text-[#66CC69]">
                            FB
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold text-white">
                            Studi Kasus: Fresh Bite
                          </p>
                          <p className="truncate text-[11px] text-white/65">
                            100% Habis Terjual &bull; Wisuda UNNES
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                        <div className="rounded-lg bg-white/8 px-2 py-1.5">
                          <span className="block font-display text-base font-black text-[#E5E56E]">
                            87
                          </span>
                          <span className="block text-[10px] text-white/70">
                            Paket Terjual
                          </span>
                        </div>
                        <div className="rounded-lg bg-white/8 px-2 py-1.5">
                          <span className="block font-display text-base font-black text-[#66CC69]">
                            ~25%
                          </span>
                          <span className="block text-[10px] text-white/70">
                            Margin
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mockup 2: UI/UX & Social Content Card */}
                  <div className="col-span-5 flex flex-col justify-between rounded-2xl bg-white p-3.5 text-[#231F20] shadow-lg">
                    <div>
                      <span className="inline-block rounded-md bg-[#4486C1] px-2 py-0.5 text-[10px] font-extrabold uppercase text-white">
                        UI/UX &amp; Feed
                      </span>
                      <p className="mt-2 text-xs font-extrabold leading-snug">
                        Kalola Konsep App
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#231F20]/65">
                        5 Frame Promo
                      </p>
                    </div>

                    {/* Mini mobile UI wireframe illustration */}
                    <div className="mt-3 rounded-xl border border-[#231F20]/12 bg-[#F7F7F0] p-2">
                      <div className="flex items-center justify-between">
                        <span className="h-1.5 w-8 rounded-full bg-[#231F20]/30" />
                        <span className="h-2 w-2 rounded-full bg-[#D30B40]" />
                      </div>
                      <div className="mt-2 space-y-1.5">
                        <div className="h-5 rounded bg-[#4486C1]/20 px-1.5 flex items-center">
                          <span className="h-1.5 w-10 rounded-full bg-[#4486C1]" />
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-6 rounded bg-[#E5E56E]" />
                          <div className="h-6 rounded bg-[#66CC69]/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Studio Bar */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-[#231F20]/8 px-3.5 py-2 text-xs font-semibold text-[#231F20]">
                  <span>9 Layanan Kreatif &amp; Digital Terkurasi</span>
                  <a
                    href="#portofolio"
                    className="font-bold text-[#D30B40] underline decoration-2 underline-offset-4 hover:text-[#231F20]"
                  >
                    Lihat Karya &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
