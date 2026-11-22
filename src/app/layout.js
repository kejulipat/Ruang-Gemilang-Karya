import "./globals.css";

export const metadata = {
  title: "PT Ruang Gemilang Kreatif — Bersinar Bersama UMKM",
  description:
    "PT Ruang Gemilang Kreatif hadir sebagai ruang untuk UMKM tumbuh berkembang melalui layanan branding, desain kreatif, media sosial, UI/UX, dan solusi digital.",
  keywords: [
    "PT Ruang Gemilang Kreatif",
    "Ruang Kreatif UMKM",
    "Branding UMKM",
    "Desain Kemasan UMKM",
    "Jasa Konten Media Sosial UMKM",
    "Desain UI/UX UMKM",
    "Pembuatan Website UMKM",
    "Workshop Literasi Digital",
  ],
  authors: [{ name: "PT Ruang Gemilang Kreatif" }],
  openGraph: {
    title: "PT Ruang Gemilang Kreatif — Bersinar Bersama UMKM",
    description:
      "Ruang untuk UMKM tumbuh berkembang melalui branding, desain visual, konten media sosial, UI/UX, toko online, website, dan pendampingan digital.",
    type: "website",
    locale: "id_ID",
    siteName: "PT Ruang Gemilang Kreatif",
    images: [
      {
        url: "/logos/logo-full-magenta.png",
        width: 248,
        height: 106,
        alt: "Logo PT Ruang Gemilang Kreatif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Ruang Gemilang Kreatif — Bersinar Bersama UMKM",
    description:
      "Ruang kolaborasi kreatif dan digital untuk membantu UMKM tumbuh berkembang dan bersinar bersama.",
    images: ["/logos/logo-full-magenta.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#231F20] antialiased selection:bg-[#E5E56E] selection:text-[#231F20]">
        {children}
      </body>
    </html>
  );
}
