import { companyProfile } from "@/data/company";
import { BrandLogo, HouseFlowerWatermark } from "./BrandPattern";

export default function LogoPhilosophy() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#E5E56E] p-6 text-[#231F20] shadow-xl sm:p-10 lg:p-12">
      <HouseFlowerWatermark
        className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 text-[#D30B40]"
        opacity={0.08}
      />

      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left: Large Original Logo Showcase (#D30B40 on #E5E56E primary pairing) */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#231F20] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#E5E56E]">
            <span>Filosofi Logo</span>
          </div>

          <h3 className="font-display mt-4 text-3xl font-black uppercase leading-none text-[#231F20] sm:text-4xl">
            &ldquo;{companyProfile.logoQuote}&rdquo;
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#231F20]/80">
            {companyProfile.subTagline}
          </p>

          <div className="mt-6 flex flex-col gap-5 rounded-2xl border-2 border-[#231F20]/15 bg-white/45 p-6 backdrop-blur-xs">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BrandLogo
                variant="magenta"
                type="mark"
                imageClassName="h-24 w-24 sm:h-28 sm:w-28"
              />
              <div className="border-l-2 border-[#D30B40]/30 pl-4">
                <BrandLogo
                  variant="magenta"
                  type="full"
                  imageClassName="h-12 sm:h-14 w-auto"
                />
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#231F20]">
                  {companyProfile.legalName}
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#231F20]/75">
              Lambang simetris delapan arah mempertahankan bentuk asli karya
              grafis perusahaan dengan kombinasi warna identitas utama Merah
              Magenta di atas Kuning Kehijauan.
            </p>
          </div>
        </div>

        {/* Right: 4 Visual Philosophy Breakdown Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {companyProfile.logoPhilosophy.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-[#231F20]/12 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-display inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black"
                    style={{
                      backgroundColor: item.accent,
                      color: item.accent === "#66CC69" ? "#231F20" : "#FFFFFF",
                    }}
                  >
                    {item.id}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#231F20]/75">
                    Makna Elemen
                  </span>
                </div>
                <h4 className="mt-3 text-lg font-extrabold text-[#231F20]">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs font-bold text-[#D30B40]">
                  {item.summary}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#231F20]/80">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
