export const serviceCategories = [
  {
    id: "Semua",
    label: "Semua",
    accent: "#231F20",
    textOnAccent: "#FFFFFF",
  },
  {
    id: "Konten & Media Sosial",
    label: "Konten & Media Sosial",
    accent: "#D30B40",
    textOnAccent: "#FFFFFF",
  },
  {
    id: "Branding & Visual",
    label: "Branding & Visual",
    accent: "#66CC69",
    textOnAccent: "#231F20",
  },
  {
    id: "UI/UX & Toko Online",
    label: "UI/UX & Toko Online",
    accent: "#4486C1",
    textOnAccent: "#FFFFFF",
  },
  {
    id: "Pendampingan & Dev",
    label: "Pendampingan & Dev",
    accent: "#E5E56E",
    textOnAccent: "#231F20",
  },
];

export const categoryColorMap = {
  "Konten & Media Sosial": {
    accent: "#D30B40",
    textOnAccent: "#FFFFFF",
    softBg: "rgba(211, 11, 64, 0.08)",
    badgeClass: "bg-[#D30B40] text-white",
    borderClass: "border-[#D30B40]",
  },
  "Branding & Visual": {
    accent: "#66CC69",
    textOnAccent: "#231F20",
    softBg: "rgba(102, 204, 105, 0.14)",
    badgeClass: "bg-[#66CC69] text-[#231F20]",
    borderClass: "border-[#66CC69]",
  },
  "UI/UX & Toko Online": {
    accent: "#4486C1",
    textOnAccent: "#FFFFFF",
    softBg: "rgba(68, 134, 193, 0.12)",
    badgeClass: "bg-[#4486C1] text-white",
    borderClass: "border-[#4486C1]",
  },
  "Pendampingan & Dev": {
    accent: "#E5E56E",
    textOnAccent: "#231F20",
    softBg: "rgba(229, 229, 110, 0.28)",
    badgeClass: "bg-[#E5E56E] text-[#231F20]",
    borderClass: "border-[#231F20]",
  },
};

export const servicesList = [
  {
    id: "paket-konten-bulanan",
    number: "01",
    name: "Paket Konten Bulanan",
    category: "Konten & Media Sosial",
    description:
      "Layanan pembuatan materi visual untuk membantu UMKM menjaga konsistensi komunikasi dan promosi di media sosial.",
    deliverables: [
      "Desain feed Instagram",
      "Cover dan template Reels",
      "Kalender konten bulanan",
    ],
    featured: true,
    visualType: "social-grid",
  },
  {
    id: "desain-promo-event",
    number: "02",
    name: "Desain Promo & Event",
    category: "Konten & Media Sosial",
    description:
      "Pembuatan materi visual promosi yang disesuaikan dengan kebutuhan pemasaran, campaign, maupun kegiatan khusus.",
    deliverables: [
      "Desain poster",
      "Desain banner",
      "Materi promosi musiman atau event",
    ],
    featured: false,
    visualType: "campaign-poster",
  },
  {
    id: "logo-identitas-visual",
    number: "03",
    name: "Logo & Identitas Visual",
    category: "Branding & Visual",
    description:
      "Membangun identitas visual yang konsisten dan mencerminkan karakter usaha agar lebih mudah dikenali pelanggan.",
    deliverables: [
      "Desain logo",
      "Palet warna brand",
      "Brand guideline",
    ],
    featured: true,
    visualType: "brand-identity",
  },
  {
    id: "desain-kemasan-label",
    number: "04",
    name: "Desain Kemasan & Label",
    category: "Branding & Visual",
    description:
      "Membantu UMKM menghadirkan tampilan kemasan yang menarik, informatif, dan sesuai karakter produknya.",
    deliverables: [
      "Desain kemasan produk",
      "Desain label",
      "File desain siap cetak",
    ],
    featured: false,
    visualType: "packaging-label",
  },
  {
    id: "desain-uiux-app-web",
    number: "05",
    name: "Desain UI/UX App/Web",
    category: "UI/UX & Toko Online",
    description:
      "Merancang pengalaman pengguna dan antarmuka digital yang intuitif serta mudah digunakan.",
    deliverables: [
      "Prototype Figma",
      "Desain katalog digital",
      "Desain alur dan form pemesanan sebagai bagian dari rancangan produk digital",
    ],
    featured: true,
    visualType: "uiux-wireframe",
  },
  {
    id: "tampilan-toko-marketplace",
    number: "06",
    name: "Tampilan Toko Marketplace",
    category: "UI/UX & Toko Online",
    description:
      "Mengoptimalkan tampilan toko digital agar produk terlihat lebih menarik dan memiliki identitas visual yang konsisten.",
    deliverables: [
      "Banner toko marketplace",
      "Desain foto produk",
      "Styling listing produk",
    ],
    featured: false,
    visualType: "marketplace-store",
  },
  {
    id: "audit-usability",
    number: "07",
    name: "Audit Usability",
    category: "UI/UX & Toko Online",
    description:
      "Mengevaluasi kemudahan penggunaan antarmuka digital untuk mengidentifikasi hambatan dan peluang perbaikan.",
    deliverables: [
      "Dokumen laporan audit usability",
      "Temuan permasalahan UX",
      "Rekomendasi perbaikan pengalaman pengguna",
    ],
    featured: false,
    visualType: "usability-audit",
  },
  {
    id: "workshop-literasi-digital",
    number: "08",
    name: "Workshop Literasi Digital",
    category: "Pendampingan & Dev",
    description:
      "Program pelatihan untuk membantu UMKM memahami dan memanfaatkan teknologi digital dalam kegiatan bisnis.",
    deliverables: [
      "Sesi pelatihan",
      "Materi atau modul digital",
      "Panduan praktis sesuai topik workshop",
    ],
    featured: false,
    visualType: "workshop-module",
  },
  {
    id: "pembuatan-website",
    number: "09",
    name: "Pembuatan Website",
    category: "Pendampingan & Dev",
    description:
      "Pengembangan website untuk membantu UMKM membangun kehadiran digital dan menyampaikan informasi bisnis secara profesional.",
    deliverables: [
      "Website sesuai kebutuhan bisnis",
      "Tampilan responsif",
      "Website live melalui kolaborasi dengan mitra developer",
    ],
    featured: true,
    visualType: "website-launch",
  },
];
