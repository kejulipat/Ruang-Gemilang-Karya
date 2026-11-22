import { categoryColorMap } from "@/data/services";
import { getServiceWhatsAppUrl } from "@/data/contact";

function ServiceVisualHeader({ visualType, accent, textOnAccent }) {
  switch (visualType) {
    case "social-grid":
      return (
        <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-[#231F20]/5 p-2.5">
          <div
            className="h-10 rounded-md p-1.5 flex items-end"
            style={{ backgroundColor: accent }}
          >
            <span className="h-1.5 w-6 rounded-full bg-white/80" />
          </div>
          <div className="h-10 rounded-md bg-[#E5E56E] p-1.5 flex flex-col justify-between">
            <span className="h-1.5 w-5 rounded-full bg-[#231F20]/70" />
            <span className="h-1.5 w-8 rounded-full bg-[#231F20]/35" />
          </div>
          <div className="h-10 rounded-md bg-[#231F20] p-1.5 flex items-center justify-center">
            <span className="h-3 w-3 rounded-full border-2 border-[#E5E56E]" />
          </div>
        </div>
      );
    case "campaign-poster":
      return (
        <div className="flex items-center gap-2 rounded-xl bg-[#231F20]/5 p-2.5">
          <div
            className="flex h-10 w-14 shrink-0 flex-col justify-between rounded-md p-1.5"
            style={{ backgroundColor: accent, color: textOnAccent }}
          >
            <span className="h-1 w-6 rounded-full bg-current opacity-80" />
            <span className="text-[8px] font-black uppercase leading-none">
              PROMO
            </span>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2.5 w-full rounded bg-[#231F20]/80" />
            <div className="h-2 w-3/4 rounded bg-[#E5E56E]" />
          </div>
        </div>
      );
    case "brand-identity":
      return (
        <div className="flex items-center justify-between gap-2 rounded-xl bg-[#231F20]/5 p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-8 w-8 rounded-lg bg-[#D30B40]" />
            <span className="h-8 w-8 rounded-lg bg-[#E5E56E] border border-[#231F20]/15" />
            <span className="h-8 w-8 rounded-lg bg-[#66CC69]" />
            <span className="h-8 w-8 rounded-lg bg-[#231F20]" />
          </div>
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#231F20]/60">
            Brand Kit
          </span>
        </div>
      );
    case "packaging-label":
      return (
        <div className="flex items-center justify-between gap-3 rounded-xl bg-[#231F20]/5 p-2.5">
          <div className="flex h-10 flex-1 items-center gap-2 rounded-lg border border-dashed border-[#231F20]/25 bg-white px-2.5">
            <span
              className="h-5 w-5 shrink-0 rounded-md"
              style={{ backgroundColor: accent }}
            />
            <div className="flex-1 space-y-1">
              <span className="block h-1.5 w-16 rounded-full bg-[#231F20]/70" />
              <span className="block h-1.5 w-10 rounded-full bg-[#231F20]/25" />
            </div>
          </div>
          <span className="rounded bg-[#231F20] px-2 py-1 text-[8px] font-bold uppercase text-[#E5E56E]">
            Print Ready
          </span>
        </div>
      );
    case "uiux-wireframe":
      return (
        <div className="flex items-center gap-2 rounded-xl bg-[#231F20]/5 p-2.5">
          <div className="flex h-10 w-16 flex-col justify-between rounded-md border border-[#4486C1]/40 bg-white p-1.5">
            <span className="h-1.5 w-8 rounded-full bg-[#4486C1]" />
            <div className="grid grid-cols-2 gap-1">
              <span className="h-3 rounded-xs bg-[#4486C1]/25" />
              <span className="h-3 rounded-xs bg-[#E5E56E]" />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#4486C1]" />
              <span className="h-1.5 flex-1 rounded-full bg-[#231F20]/25" />
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#D30B40]" />
              <span className="h-1.5 w-4/5 rounded-full bg-[#231F20]/20" />
            </div>
          </div>
        </div>
      );
    case "marketplace-store":
      return (
        <div className="rounded-xl bg-[#231F20]/5 p-2.5">
          <div className="flex items-center justify-between rounded-md bg-[#4486C1] px-2.5 py-1.5 text-[9px] font-extrabold uppercase text-white">
            <span>Banner Toko</span>
            <span className="rounded bg-[#E5E56E] px-1.5 py-0.5 text-[8px] text-[#231F20]">
              Official Look
            </span>
          </div>
          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
            <span className="h-3 rounded bg-white border border-[#231F20]/10" />
            <span className="h-3 rounded bg-white border border-[#231F20]/10" />
            <span className="h-3 rounded bg-white border border-[#231F20]/10" />
          </div>
        </div>
      );
    case "usability-audit":
      return (
        <div className="flex items-center justify-between gap-2 rounded-xl bg-[#231F20]/5 p-2.5">
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#66CC69]" />
              <span className="h-1.5 w-20 rounded-full bg-[#231F20]/65" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#D30B40]" />
              <span className="h-1.5 w-14 rounded-full bg-[#231F20]/40" />
            </div>
          </div>
          <span className="rounded-md bg-[#4486C1] px-2.5 py-1.5 text-[9px] font-extrabold uppercase text-white">
            UX Report
          </span>
        </div>
      );
    case "workshop-module":
      return (
        <div className="flex items-center gap-2 rounded-xl bg-[#231F20]/5 p-2.5">
          <div className="flex h-10 w-14 flex-col justify-center rounded-md bg-[#231F20] px-2 text-[#E5E56E]">
            <span className="text-[8px] font-extrabold uppercase">MODUL</span>
            <span className="text-[8px] text-white/75">Slide Dek</span>
          </div>
          <div className="flex-1 space-y-1">
            <span className="block h-2 w-full rounded bg-[#231F20]/70" />
            <span className="block h-1.5 w-2/3 rounded bg-[#231F20]/30" />
          </div>
        </div>
      );
    case "website-launch":
    default:
      return (
        <div className="rounded-xl bg-[#231F20]/5 p-2.5">
          <div className="flex items-center gap-1 border-b border-[#231F20]/10 pb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D30B40]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5E56E]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#66CC69]" />
            <span className="ml-1 h-1.5 flex-1 rounded-full bg-white" />
          </div>
          <div className="mt-1.5 flex items-center justify-between">
            <span className="h-4 w-20 rounded bg-[#231F20]" />
            <span className="rounded bg-[#E5E56E] px-2 py-0.5 text-[8px] font-extrabold uppercase text-[#231F20]">
              Responsive Web
            </span>
          </div>
        </div>
      );
  }
}

export default function ServiceCard({ service }) {
  const palette =
    categoryColorMap[service.category] || categoryColorMap["Branding & Visual"];

  const isLimeCategory = service.category === "Pendampingan & Dev";

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        service.featured
          ? "border-[#231F20]/20 shadow-md"
          : "border-[#231F20]/12 shadow-xs"
      }`}
    >
      {/* Top Category Color Bar */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-1.5 w-full"
        style={{ backgroundColor: palette.accent }}
      />

      <div>
        {/* Card Header: Service Number + Category Pill */}
        <div className="flex items-start justify-between gap-3 pt-1">
          <span className="font-display text-4xl font-black leading-none text-[#231F20]/18 transition-colors group-hover:text-[#231F20]">
            {service.number}
          </span>

          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide ${
              isLimeCategory ? "border border-[#231F20]/25" : ""
            }`}
            style={{
              backgroundColor: palette.accent,
              color: palette.textOnAccent,
            }}
          >
            {service.category}
          </span>
        </div>

        {/* Distinct Visual Mini-Illustration */}
        <div className="mt-4">
          <ServiceVisualHeader
            visualType={service.visualType}
            accent={palette.accent}
            textOnAccent={palette.textOnAccent}
          />
        </div>

        {/* Service Name & Description */}
        <h3 className="font-display mt-5 text-2xl font-black uppercase leading-tight text-[#231F20]">
          {service.name}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#231F20]/80">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="mt-5 rounded-2xl bg-[#F7F7F0] p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#231F20]/65">
            Deliverables Utama
          </p>
          <ul className="mt-2.5 space-y-2">
            {service.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs font-medium leading-snug text-[#231F20]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: palette.accent,
                    color: palette.textOnAccent,
                  }}
                >
                  <svg
                    className="h-2.5 w-2.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Direct WhatsApp Inquiry CTA */}
      <div className="mt-6 pt-2">
        <a
          href={getServiceWhatsAppUrl(service.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#231F20] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#D30B40] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D30B40]"
        >
          <span>Tanya Layanan Ini</span>
          <svg
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}
