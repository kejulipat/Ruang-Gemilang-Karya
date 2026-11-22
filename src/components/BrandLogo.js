import Image from "next/image";

const LOGO_ASSETS = {
  full: {
    magenta: "/logos/logo-full-magenta.png",
    black: "/logos/logo-full-black.png",
    white: "/logos/logo-full-white.png",
    width: 248,
    height: 106,
  },
  mark: {
    magenta: "/logos/logo-mark-magenta.png",
    black: "/logos/logo-mark-black.png",
    white: "/logos/logo-mark-white.png",
    width: 104,
    height: 104,
  },
};

export function BrandLogo({
  variant = "magenta",
  type = "full",
  showLegalName = false,
  legalNameClassName = "text-white/80",
  imageClassName = "h-10 w-auto",
  priority = false,
}) {
  const assetGroup = LOGO_ASSETS[type] || LOGO_ASSETS.full;
  const src = assetGroup[variant] || assetGroup.magenta;

  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src={src}
        alt="Logo Ruang Kreatif UMKM — PT Ruang Gemilang Kreatif"
        width={assetGroup.width}
        height={assetGroup.height}
        sizes={type === "mark" ? "104px" : "(max-width: 640px) 160px, 248px"}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        className={`shrink-0 object-contain ${imageClassName}`}
      />
      {showLegalName && (
        <span className="hidden sm:flex flex-col border-l border-current/20 pl-3 leading-tight">
          <span
            className={`text-[11px] font-bold uppercase tracking-[0.14em] ${legalNameClassName}`}
          >
            PT Ruang Gemilang Kreatif
          </span>
          <span className="text-[11px] font-medium opacity-75">
            Bersinar Bersama
          </span>
        </span>
      )}
    </span>
  );
}
