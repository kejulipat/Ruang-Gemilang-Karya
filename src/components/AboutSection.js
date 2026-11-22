import { companyProfile } from "@/data/company";
import LogoPhilosophy from "./LogoPhilosophy";
import CompanyValues from "./CompanyValues";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="scroll-mt-20 bg-[#F7F7F0] py-16 text-[#231F20] sm:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-20 lg:px-8">
        {/* Part 1: Company Overview + Target Markets + Vision & 5 Missions */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Gambaran Umum & Target Pasar UMKM */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#231F20] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#E5E56E]">
              Tentang Kami
            </span>

            <h2 className="font-display mt-4 text-4xl font-black uppercase leading-[0.98] text-[#231F20] sm:text-5xl">
              Mitra Kreatif &amp; Digital yang Memahami Perjalanan{" "}
              <span className="text-[#D30B40]">UMKM</span>
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#231F20]/85">
              {companyProfile.aboutOverview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* 4 Target Markets */}
            <div className="mt-8">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#231F20]/70">
                Fokus Segmen UMKM yang Kami Dampingi
              </h3>
              <div className="mt-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {companyProfile.targetMarkets.map((market) => (
                  <div
                    key={market.id}
                    className="rounded-2xl border border-[#231F20]/10 bg-white p-4 shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className="h-3 w-3 shrink-0 rounded-sm"
                        style={{ backgroundColor: market.accent }}
                      />
                      <h4 className="text-sm font-extrabold text-[#231F20]">
                        {market.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#231F20]/75">
                      {market.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visi & 5 Misi Perusahaan */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* Visi Block */}
            <div className="relative overflow-hidden rounded-3xl bg-[#231F20] p-6 text-white shadow-lg sm:p-8">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block rounded-full bg-[#D30B40] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-white">
                  Visi Perusahaan
                </span>
                <span className="text-[11px] font-semibold text-white/55">
                  Arah Jangka Panjang
                </span>
              </div>

              <blockquote className="font-display mt-5 text-2xl font-bold leading-snug text-[#E5E56E] sm:text-3xl">
                &ldquo;{companyProfile.vision.text}&rdquo;
              </blockquote>

              <p className="mt-4 border-t border-white/12 pt-3 text-[11px] text-white/60">
                {companyProfile.vision.note}
              </p>
            </div>

            {/* 5 Poin Misi Block */}
            <div className="rounded-3xl border border-[#231F20]/12 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-2xl font-black uppercase text-[#231F20]">
                  5 Misi Perusahaan
                </h3>
                <span className="rounded-full bg-[#66CC69]/25 px-3 py-1 text-xs font-bold text-[#231F20]">
                  5 Langkah Utama
                </span>
              </div>

              <ol className="mt-5 space-y-3.5">
                {companyProfile.missions.map((mission) => (
                  <li
                    key={mission.number}
                    className="flex items-start gap-3.5 rounded-2xl bg-[#F7F7F0] p-3.5"
                  >
                    <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#231F20] text-sm font-black text-[#E5E56E]">
                      {mission.number}
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-[#231F20]">
                        {mission.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#231F20]/80">
                        {mission.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-4 text-[11px] text-[#231F20]/60">
                {companyProfile.missionsNote}
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Logo Philosophy */}
        <LogoPhilosophy />

        {/* Part 3: 4 Company Values */}
        <CompanyValues />
      </div>
    </section>
  );
}
