import { statusStyles } from "@/data/portfolio";

export default function PortfolioCard({ project, onSelect }) {
  const badge = statusStyles[project.status] || statusStyles["Simulasi"];
  const isFreshBite = project.id === "fresh-bite";
  const isKalola = project.id === "kalola";

  return (
    <article
      className={`group flex flex-col justify-between overflow-hidden rounded-3xl border bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isFreshBite
          ? "border-[#231F20]/20 shadow-md lg:col-span-2"
          : "border-[#231F20]/12 shadow-sm"
      }`}
    >
      <div>
        {/* Distinct Visual Preview Canvas per Project Type */}
        {isFreshBite ? (
          <div className="relative overflow-hidden bg-[#231F20] p-6 text-white sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider"
                style={{ backgroundColor: badge.bg, color: badge.text }}
              >
                <span className="h-2 w-2 rounded-full bg-[#231F20]" />
                <span>{project.status}</span>
              </span>
              <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-semibold text-[#E5E56E]">
                {project.periodLabel}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#66CC69]">
                  {project.clientType}
                </p>
                <h3 className="font-display mt-1 text-4xl font-black uppercase text-white sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {project.subtitle}
                </p>
              </div>

              {/* 4 Exact SRS Case Study Metrics */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-6 lg:grid-cols-2">
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/12 bg-white/8 p-3.5"
                  >
                    <p className="font-display text-2xl font-black text-[#E5E56E] sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-white">
                      {metric.label}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/65">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : isKalola ? (
          <div className="relative overflow-hidden bg-[#E5E56E] p-6 text-[#231F20]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-[#231F20]/30 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider"
                style={{ backgroundColor: "#231F20", color: "#E5E56E" }}
              >
                <span className="h-2 w-2 rounded-full bg-[#E5E56E]" />
                <span>{project.status}</span>
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D30B40]">
                5 Frame Seri Promo
              </span>
            </div>

            <div className="mt-5">
              <h3 className="font-display text-3xl font-black uppercase text-[#231F20] sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-bold text-[#231F20]/80">
                {project.subtitle}
              </p>
            </div>

            {/* 5-Frame Mini Carousel Strip Preview */}
            <div className="mt-5 grid grid-cols-5 gap-2">
              {project.frames.map((frame) => (
                <div
                  key={frame.frame}
                  className="flex flex-col justify-between rounded-xl bg-white p-2 shadow-xs border border-[#231F20]/10"
                >
                  <span
                    className="inline-block h-1.5 w-full rounded-full"
                    style={{ backgroundColor: frame.accent }}
                  />
                  <span className="mt-2 font-display text-[11px] font-black text-[#231F20]">
                    {frame.frame}
                  </span>
                  <span className="mt-0.5 line-clamp-2 text-[9px] font-semibold leading-tight text-[#231F20]/70">
                    {frame.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden bg-[#4486C1] p-6 text-white">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#231F20] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                <span className="h-2 w-2 rounded-full bg-[#4486C1]" />
                <span>{project.status}</span>
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E5E56E]">
                7 Artefak Simulasi
              </span>
            </div>

            <div className="mt-5">
              <h3 className="font-display text-3xl font-black uppercase text-white sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-white/85">
                {project.subtitle}
              </p>
            </div>

            {/* Simulation Grid Preview */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              {project.simulationItems.slice(0, 4).map((sim) => (
                <div
                  key={sim.id}
                  className="rounded-xl border border-white/20 bg-white/12 px-2.5 py-2"
                >
                  <span className="block text-[9px] font-extrabold uppercase text-[#E5E56E]">
                    Simulasi {sim.number}
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] font-bold text-white">
                    {sim.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Card Body */}
        <div className="p-6">
          <p className="text-sm leading-relaxed text-[#231F20]/85">
            {project.summary}
          </p>

          {/* Services Used */}
          <div className="mt-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#231F20]/75">
              Layanan yang Digunakan
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.servicesUsed.map((serviceName) => (
                <span
                  key={serviceName}
                  className="rounded-full border border-[#231F20]/12 bg-[#F7F7F0] px-3 py-1 text-xs font-semibold text-[#231F20]"
                >
                  {serviceName}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="border-t border-[#231F20]/10 px-6 py-4">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex w-full items-center justify-between rounded-full bg-[#231F20] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#D30B40] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D30B40]"
        >
          <span>
            Buka Detail {project.status === "Proyek Nyata" ? "Studi Kasus" : project.status}
          </span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </article>
  );
}
