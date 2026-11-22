import { companyProfile } from "@/data/company";
import {
  contactConfig,
  getMailtoUrl,
  getWhatsAppUrl,
} from "@/data/contact";
import { BrandLogo, HouseFlowerWatermark } from "./BrandPattern";

const FOOTER_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Alur Kerja", href: "#alur-kerja" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tim", href: "#tim" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#231F20] text-white">
      <HouseFlowerWatermark
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 text-[#E5E56E]"
        opacity={0.05}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/12 pb-12 md:grid-cols-12">
          {/* Bagian 1: Identitas Perusahaan + Monogram R.G. */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                <BrandLogo
                  variant="white"
                  type="mark"
                  imageClassName="h-11 w-11"
                />
                <span className="font-display mt-1.5 text-lg font-black tracking-widest text-[#E5E56E]">
                  {companyProfile.monogram}
                </span>
              </div>

              <div>
                <p className="font-display text-2xl font-black uppercase tracking-tight text-white">
                  {companyProfile.legalName}
                </p>
                <p className="mt-1 inline-block rounded-full bg-[#D30B40] px-3 py-0.5 text-xs font-extrabold uppercase tracking-wider text-white">
                  {companyProfile.tagline}
                </p>
                <p className="mt-1.5 text-xs font-medium text-[#E5E56E]">
                  {companyProfile.subTagline}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
              Ruang kolaborasi kreatif dan digital yang mendampingi UMKM
              mengembangkan identitas visual, konten media sosial, pengalaman
              UI/UX, toko online, website, dan literasi digital.
            </p>
          </div>

          {/* Bagian 2: Navigasi */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E5E56E]">
              Navigasi
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 md:grid-cols-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-[#E5E56E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5E56E]"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#D30B40]"
                    />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bagian 3: Kontak */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E5E56E]">
              Kontak Perusahaan
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-[#E5E56E]/50 hover:bg-white/10"
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#66CC69]">
                    WhatsApp
                  </span>
                  <span className="mt-0.5 text-sm font-bold text-white group-hover:text-[#E5E56E]">
                    {contactConfig.whatsapp.display}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={getMailtoUrl()}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-[#E5E56E]/50 hover:bg-white/10"
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4486C1]">
                    Email
                  </span>
                  <span className="mt-0.5 text-sm font-bold text-white group-hover:text-[#E5E56E]">
                    {contactConfig.email.display}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-[#E5E56E]/50 hover:bg-white/10"
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D30B40]">
                    Instagram
                  </span>
                  <span className="mt-0.5 text-sm font-bold text-white group-hover:text-[#E5E56E]">
                    {contactConfig.instagram.handle}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bagian 4: Hak Cipta */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>&copy; 2026 PT Ruang Gemilang Kreatif. All Rights Reserved.</p>
          <p className="font-semibold text-white/75">
            {companyProfile.monogram} &mdash; {companyProfile.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
