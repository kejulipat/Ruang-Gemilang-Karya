import { teamStructure } from "@/data/team";

export default function TeamSection() {
  return (
    <section
      id="tim"
      className="scroll-mt-20 bg-white py-16 text-[#231F20] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#231F20] px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#E5E56E]">
            Struktur Tim
          </span>
          <h2 className="font-display mt-4 text-4xl font-black uppercase leading-[0.98] text-[#231F20] sm:text-5xl">
            Organisasi &amp; Peran Inti Perusahaan
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#231F20]/75">
            {teamStructure.intro}
          </p>
        </div>

        {/* Org Chart Container */}
        <div className="mt-12">
          {/* Tier 1: Komisaris & Direktur Utama */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center justify-center">
              <span className="rounded-full border border-[#231F20]/15 bg-[#F7F7F0] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#231F20]">
                Tingkat 1 &mdash; Dewan Pengawas &amp; Pimpinan Eksekutif
              </span>
            </div>

            <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2">
              {teamStructure.tier1.map((role) => (
                <article
                  key={role.id}
                  className="relative flex flex-col justify-between rounded-3xl border-2 border-[#231F20] bg-[#231F20] p-6 text-white shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="font-display inline-flex h-10 w-10 items-center justify-center rounded-xl text-base font-black"
                        style={{
                          backgroundColor: role.accent,
                          color: role.badgeText,
                        }}
                      >
                        {role.number}
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-bold text-[#E5E56E]">
                        {role.level}
                      </span>
                    </div>

                    <h3 className="font-display mt-5 text-3xl font-black uppercase text-white">
                      {role.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                      {role.responsibility}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/12 pt-4">
                    {role.focusTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Org Chart Visual Connector Lines (Desktop) */}
          <div
            aria-hidden="true"
            className="mx-auto hidden max-w-5xl flex-col items-center md:flex"
          >
            <div className="h-8 w-0.5 bg-[#231F20]/35" />
            <div className="h-0.5 w-2/3 bg-[#231F20]/35" />
            <div className="grid w-full grid-cols-3">
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-[#231F20]/35" />
              </div>
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-[#231F20]/35" />
              </div>
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-[#231F20]/35" />
              </div>
            </div>
          </div>

          {/* Mobile Connector */}
          <div
            aria-hidden="true"
            className="mx-auto flex h-8 w-0.5 bg-[#231F20]/30 md:hidden"
          />

          {/* Tier 2: Tiga Manajer Divisi */}
          <div>
            <div className="mb-4 flex items-center justify-center">
              <span className="rounded-full border border-[#231F20]/15 bg-[#F7F7F0] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#231F20]">
                Tingkat 2 &mdash; Jajaran Manajer Divisi
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {teamStructure.tier2.map((role) => (
                <article
                  key={role.id}
                  className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#231F20]/15 bg-[#F7F7F0] p-6 shadow-xs transition-transform duration-200 hover:-translate-y-1"
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1.5 w-full"
                    style={{ backgroundColor: role.accent }}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span
                        className="font-display inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#231F20]/15 text-sm font-black"
                        style={{
                          backgroundColor: role.accent,
                          color: role.badgeText,
                        }}
                      >
                        {role.number}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#231F20]/60">
                        {role.level}
                      </span>
                    </div>

                    <h3 className="font-display mt-5 text-2xl font-black uppercase text-[#231F20]">
                      {role.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#231F20]/80">
                      {role.responsibility}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#231F20]/10 pt-4">
                    {role.focusTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#231F20]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-xs font-medium text-[#231F20]/60">
            {teamStructure.transparencyNote}
          </p>
        </div>
      </div>
    </section>
  );
}
