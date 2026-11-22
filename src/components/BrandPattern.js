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
        priority={priority}
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

/**
 * Low-opacity geometric backdrop echoing the 8-directional house-flower symbol.
 * Purely decorative background texture so text contrast stays crisp.
 */
export function HouseFlowerWatermark({
  className = "",
  strokeColor = "currentColor",
  opacity = 0.08,
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 240"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      {/* Top, Bottom, Left, Right House Petals */}
      <path
        d="M120 18L146 44V84H128V66H112V84H94V44L120 18Z"
        fill={strokeColor}
      />
      <path
        d="M120 222L146 196V156H128V174H112V156H94V196L120 222Z"
        fill={strokeColor}
      />
      <path
        d="M18 120L44 94H84V112H66V128H84V146H44L18 120Z"
        fill={strokeColor}
      />
      <path
        d="M222 120L196 94H156V112H174V128H156V146H196L222 120Z"
        fill={strokeColor}
      />
      {/* Diagonal House Petals */}
      <path
        d="M36 36H74L92 54L79 67L66 54L54 66L67 79L54 92L36 74V36Z"
        fill={strokeColor}
      />
      <path
        d="M204 36H166L148 54L161 67L174 54L186 66L173 79L186 92L204 74V36Z"
        fill={strokeColor}
      />
      <path
        d="M36 204H74L92 186L79 173L66 186L54 174L67 161L54 148L36 166V204Z"
        fill={strokeColor}
      />
      <path
        d="M204 204H166L148 186L161 173L174 186L186 174L173 161L186 148L204 166V204Z"
        fill={strokeColor}
      />
    </svg>
  );
}

/**
 * Flowing contour wave pattern inspired by the UI/UX reference backdrop.
 */
export function OrganicWavePattern({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 720"
      fill="none"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M-60 120C140 40 310 210 510 140C710 70 840 -20 1070 70C1250 140 1370 110 1500 40"
        stroke="rgba(229, 229, 110, 0.08)"
        strokeWidth="44"
        strokeLinecap="round"
      />
      <path
        d="M-80 310C120 220 290 400 520 330C750 260 910 160 1130 250C1320 328 1410 290 1520 210"
        stroke="rgba(255, 255, 255, 0.04)"
        strokeWidth="52"
        strokeLinecap="round"
      />
      <path
        d="M-50 530C170 430 350 610 580 540C810 470 980 370 1200 470C1350 538 1440 500 1530 430"
        stroke="rgba(211, 11, 64, 0.09)"
        strokeWidth="48"
        strokeLinecap="round"
      />
    </svg>
  );
}
