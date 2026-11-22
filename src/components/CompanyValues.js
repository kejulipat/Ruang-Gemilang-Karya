import { companyProfile } from "@/data/company";

export default function CompanyValues() {
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-[#D30B40]">
            Nilai Perusahaan
          </span>
          <h3 className="font-display mt-2 text-3xl font-black uppercase tracking-tight text-[#231F20] sm:text-4xl">
            Empat Prinsip Kami Mendampingi UMKM
          </h3>
        </div>
        <p className="max-w-md text-sm text-[#231F20]/70">
          Setiap proyek dirancang dengan karakter kerja yang kolaboratif,
          relevan, hangat, dan berorientasi pada manfaat nyata.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {companyProfile.values.map((val) => {
          const isDarkCard = val.cardTheme === "dark";
          const isLimeCard = val.cardTheme === "lime";
          const isBlueCard = val.cardTheme === "blue";

          let cardClass =
            "bg-white text-[#231F20] border border-[#231F20]/12";
          let subTextClass = "text-[#231F20]/75";
          let tagBg = "#66CC69";
          let tagText = "#231F20";

          if (isDarkCard) {
            cardClass = "bg-[#231F20] text-white border border-[#231F20]";
            subTextClass = "text-white/80";
            tagBg = "#D30B40";
            tagText = "#FFFFFF";
          } else if (isLimeCard) {
            cardClass =
              "bg-[#E5E56E] text-[#231F20] border border-[#231F20]/15";
            subTextClass = "text-[#231F20]/85";
            tagBg = "#231F20";
            tagText = "#E5E56E";
          } else if (isBlueCard) {
            cardClass = "bg-[#4486C1] text-white border border-[#4486C1]";
            subTextClass = "text-white/90";
            tagBg = "#FFFFFF";
            tagText = "#231F20";
          }

          return (
            <article
              key={val.id}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 ${cardClass}`}
            >
              {/* Distinct geometric corner accent */}
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-20"
                style={{ backgroundColor: val.accentBg }}
              />

              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider"
                    style={{ backgroundColor: tagBg, color: tagText }}
                  >
                    {val.tag}
                  </span>
                  <span className="font-display text-3xl font-black opacity-30">
                    {val.number}
                  </span>
                </div>

                <h4 className="font-display mt-6 text-2xl font-black uppercase tracking-tight">
                  {val.title}
                </h4>

                <p className={`mt-2.5 text-sm leading-relaxed ${subTextClass}`}>
                  {val.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 pt-3 border-t border-current/15">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: val.accentBg }}
                />
                <span className="text-xs font-bold opacity-75">
                  Nilai Inti {val.number}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
