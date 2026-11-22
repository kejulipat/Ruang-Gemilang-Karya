import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RulerScrollbar from "@/components/RulerScrollbar";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ruang2k.vercel.app"),
  title: "Ruang Gemilang Kreatif",
  description:
    "Agensi kreatif dan digital yang membantu UMKM naik kelas melalui layanan konten media sosial, branding & kemasan, UI/UX, serta pendampingan digital.",
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
  alternates: {
    canonical: "https://ruang2k.vercel.app",
  },
  icons: {
    icon: [
      { url: "/logo/favicon.png", sizes: "128x128", type: "image/png" },
      { url: "/logo/logo-mark-magenta.png", sizes: "104x104", type: "image/png" },
    ],
    shortcut: ["/logo/favicon.png"],
    apple: [
      { url: "/logo/favicon.png", sizes: "128x128", type: "image/png" },
    ],
  },
  openGraph: {
    title: "PT Ruang Gemilang Kreatif — Bersinar Bersama",
    description:
      "Ruang untuk UMKM tumbuh berkembang melalui desain, identitas merek, tampilan digital, dan pendampingan.",
    url: "https://ruang2k.vercel.app",
    siteName: "PT Ruang Gemilang Kreatif",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://ruang2k.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "PT Ruang Gemilang Kreatif — Bersinar Bersama — Ruang untuk UMKM tumbuh berkembang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Ruang Gemilang Kreatif — Bersinar Bersama",
    description:
      "Ruang untuk UMKM tumbuh berkembang melalui desain, identitas merek, tampilan digital, dan pendampingan.",
    images: ["https://ruang2k.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#231F20] antialiased selection:bg-[#E5E56E] selection:text-[#231F20]">
        <RulerScrollbar />
        {children}
      </body>
    </html>
  );
}
