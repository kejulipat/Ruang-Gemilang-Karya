export const portfolioCategories = [
  "Semua",
  "Branding & Visual",
  "Konten & Media Sosial",
  "UI/UX & Toko Online",
  "Website & Digital",
  "Edukasi & Pendampingan",
];

export const statusStyles = {
  "Proyek Nyata": {
    bg: "#66CC69",
    text: "#231F20",
    border: "#231F20",
    tag: "TERVERIFIKASI",
    description:
      "Studi kasus nyata pelaksanaan proyek bersama pelaku usaha.",
  },
  Konsep: {
    bg: "#E5E56E",
    text: "#231F20",
    border: "#231F20",
    tag: "EKSPLORASI KONSEP",
    description:
      "Rancangan konsep visual dan komunikasi pemasaran produk (bukan dokumentasi proyek klien live).",
  },
  Simulasi: {
    bg: "#4486C1",
    text: "#FFFFFF",
    border: "#4486C1",
    tag: "SIMULASI KAPABILITAS",
    description:
      "Simulasi artefak kerja digital dan modul edukasi untuk mendemonstrasikan standar deliverable.",
  },
};

export const portfolioProjects = [
  {
    id: "fresh-bite",
    title: "Fresh Bite",
    subtitle: "Branding, Kemasan & Aktivasi Promo UMKM Kuliner",
    status: "Proyek Nyata",
    categories: ["Branding & Visual", "Konten & Media Sosial"],
    clientType: "UMKM Kuliner Kemasan",
    periodLabel: "Event Wisuda UNNES",
    summary:
      "Studi kasus nyata pendampingan UMKM kuliner Fresh Bite mencakup identitas visual, desain kemasan & label, konten bulanan, hingga aktivasi materi promosi event wisuda UNNES dengan hasil 100% habis terjual.",
    challenge:
      "Produk kuliner rumahan Fresh Bite perlu tampil menonjol, higienis, dan meyakinkan di momen keramaian event wisuda UNNES agar mudah dikenali pembeli dalam waktu singkat serta mendorong pembelian paket secara cepat.",
    solution:
      "Tim menyusun identitas visual yang segar, merancang label kemasan yang jelas dan menarik perhatian, menyiapkan materi promosi cetak maupun digital khusus momentum wisuda, serta menyelaraskan komunikasi konten media sosial.",
    servicesUsed: [
      "Logo & Identitas Visual",
      "Desain Kemasan & Label",
      "Paket Konten Bulanan",
      "Desain Promo & Event",
    ],
    metrics: [
      {
        value: "87",
        label: "Produk / Paket Terjual",
        detail: "Total unit produk dan paket yang terjual selama periode aktivasi",
      },
      {
        value: "100%",
        label: "Habis Terjual",
        detail: "Seluruh stok terjual habis saat event wisuda UNNES",
      },
      {
        value: "Rp767.000",
        label: "Omzet Tercatat",
        detail: "Pendapatan kotor yang tercatat dari penjualan proyek",
      },
      {
        value: "~25%",
        label: "Margin Keuntungan",
        detail: "Margin sekitar 25% dari total penjualan produk/paket",
      },
    ],
    galleryPanels: [
      {
        id: "fb-logo",
        badge: "Proyek Nyata — Preview Komponen",
        title: "Logo & Identitas Visual Fresh Bite",
        subtitle: "Sistem warna segar, tipografi mudah dibaca pada jarak dekat maupun media sosial.",
        accent: "#66CC69",
        highlights: ["Logotype Fresh Bite", "Palet warna segar higienis", "Penerapan stempel & stiker"],
      },
      {
        id: "fb-packaging",
        badge: "Proyek Nyata — Preview Komponen",
        title: "Desain Kemasan & Label Produk",
        subtitle: "Label kemasan informatif yang menonjolkan nama produk dan daya tarik paket.",
        accent: "#E5E56E",
        highlights: ["Label depan kemasan", "Informasi varian rasa", "Layout siap cetak"],
      },
      {
        id: "fb-content",
        badge: "Proyek Nyata — Preview Komponen",
        title: "Materi Konten Media Sosial",
        subtitle: "Pola konten terstruktur untuk membangun minat sebelum hari event.",
        accent: "#D30B40",
        highlights: ["Teaser pra-event", "Katalog paket pilihan", "Info pemesanan langsung"],
      },
      {
        id: "fb-event",
        badge: "Proyek Nyata — Preview Komponen",
        title: "Desain Promo Event Wisuda UNNES",
        subtitle: "Materi promosi tematik yang mendukung capaian 87 paket dan 100% habis terjual.",
        accent: "#4486C1",
        highlights: ["Banner booth event", "Flyer paket wisuda", "Panggilan beli cepat"],
      },
    ],
    beforeAfter: {
      hasPhotos: false,
      note: "Dokumentasi foto asli sebelum dan sesudah belum dilampirkan di dalam direktori aset project saat ini. Panel perbandingan di bawah disiapkan terstruktur tanpa menggunakan foto simulasi palsu.",
      beforeSummary:
        "Kemasan polos tanpa label identitas yang seragam dan promosi belum terhubung ke momentum event wisuda secara visual.",
      afterSummary:
        "Hadir dengan identitas logo, label kemasan siap cetak, materi konten bulanan, serta promo tematik event wisuda UNNES — terjual 87 produk/paket (100% habis terjual, omzet Rp767.000, margin ~25%).",
    },
  },
  {
    id: "kalola",
    title: "Kalola",
    subtitle: "Konsep Seri 5 Frame Materi Promosi & Mockup Aplikasi UMKM",
    status: "Konsep",
    categories: ["Konten & Media Sosial", "UI/UX & Toko Online"],
    clientType: "Konsep Aplikasi Manajemen Usaha UMKM",
    periodLabel: "Eksplorasi Konsep Desain",
    summary:
      "Kalola adalah rancangan konsep materi promosi aplikasi manajemen usaha UMKM yang disajikan dalam seri lima frame narasi visual beserta preview antarmuka aplikasi.",
    challenge:
      "Pelaku UMKM sering merasa aplikasi pembukuan dan stok terlalu rumit dan teknis. Dibutuhkan narasi visual promosi lima frame yang hangat, runtut, dan langsung menjawab keresahan harian pemilik usaha.",
    solution:
      "Merancang seri 5 frame materi promosi media sosial yang saling menyambung—mulai dari pemetaan masalah pencatatan manual hingga ajakan mencoba antarmuka aplikasi Kalola yang ringkas dan ramah pengguna.",
    servicesUsed: [
      "Paket Konten Bulanan",
      "Desain Promo & Event",
      "Desain UI/UX App/Web",
    ],
    metrics: [
      {
        value: "5 Frame",
        label: "Seri Materi Promosi",
        detail: "Alur cerita visual carousel dari masalah hingga CTA",
      },
      {
        value: "Konsep UI",
        label: "Mockup Aplikasi",
        detail: "Preview antarmuka manajemen stok, kasir, dan arus kas",
      },
      {
        value: "Konsep",
        label: "Status Eksplorasi",
        detail: "Karya konsep internal — bukan proyek klien komersial aktif",
      },
    ],
    frames: [
      {
        frame: "Frame 01",
        role: "Problem Hook",
        headline: "Masih Catat Pembukuan Usaha di Kertas?",
        caption:
          "Nota terselip dan stok tidak terpantau sering membuat pemilik UMKM kesulitan melihat untung bersih harian.",
        accent: "#D30B40",
      },
      {
        frame: "Frame 02",
        role: "Product Intro",
        headline: "Kenalan dengan Kalola — Asisten Usaha UMKM",
        caption:
          "Konsep aplikasi manajemen usaha yang dirancang dengan bahasa sederhana untuk usaha rumahan hingga toko berkembang.",
        accent: "#E5E56E",
      },
      {
        frame: "Frame 03",
        role: "Core UI Feature",
        headline: "Pantau Stok & Catat Transaksi dalam Satu Layar",
        caption:
          "Antarmuka ringkas memudahkan pemilik usaha mencatat penjualan harian tanpa langkah yang berbelit.",
        accent: "#4486C1",
      },
      {
        frame: "Frame 04",
        role: "Value Proposition",
        headline: "Ringkasan Arus Kas & Margin Usaha Lebih Jelas",
        caption:
          "Membantu pelaku usaha membaca pemasukan, pengeluaran, dan produk terlaris secara cepat setiap hari.",
        accent: "#66CC69",
      },
      {
        frame: "Frame 05",
        role: "Call to Action",
        headline: "Mulai Rapi Kelola Usaha dari Rumah",
        caption:
          "Penutup seri promosi dengan pesan penguatan ekosistem UMKM dan ajakan eksplorasi fitur.",
        accent: "#231F20",
      },
    ],
    appMockupPreview: {
      badge: "Konsep — Mockup Antarmuka",
      appName: "Kalola UMKM Manager",
      modules: [
        { label: "Penjualan Hari Ini", value: "Ringkasan Harian" },
        { label: "Stok Produk", value: "Pantauan Inventaris" },
        { label: "Catatan Kas", value: "Arus Masuk & Keluar" },
      ],
    },
    beforeAfter: {
      hasPhotos: false,
      note: "Proyek ini berstatus Konsep. Tidak ada dokumentasi sebelum-sesudah klien nyata karena konten dibuat sebagai eksplorasi konsep komunikasi visual dan mockup antarmuka.",
      beforeSummary:
        "Konsep awal berupa ide fitur manajemen usaha tanpa alur visual promosi yang terstruktur.",
      afterSummary:
        "Tersusun sebagai seri 5 frame materi promosi yang runtut dan konsep UI mockup aplikasi yang komunikatif bagi pelaku UMKM.",
    },
  },
  {
    id: "layanan-digital-edukasi",
    title: "Layanan Digital & Edukasi",
    subtitle: "Simulasi 7 Artefak Pekerjaan UI/UX, Marketplace, Audit, Workshop & Web",
    status: "Simulasi",
    categories: [
      "UI/UX & Toko Online",
      "Website & Digital",
      "Edukasi & Pendampingan",
    ],
    clientType: "Simulasi Standar Deliverable Perusahaan",
    periodLabel: "Katalog Simulasi Layanan Digital",
    summary:
      "Kumpulan simulasi visual untuk memperlihatkan bentuk nyata luaran layanan digital dan edukasi PT Ruang Gemilang Kreatif—mulai dari prototype Figma hingga desain landing page dan modul workshop.",
    challenge:
      "Calon klien UMKM sering membutuhkan gambaran konkret mengenai wujud deliverable digital sebelum memilih paket—seperti bagaimana bentuk laporan audit usability, slide workshop, atau tampilan toko marketplace.",
    solution:
      "Menyusun 7 preview simulasi terkurasi yang merepresentasikan struktur dan kualitas standar pekerjaan digital serta edukasi perusahaan, dengan pelabelan Simulasi yang tegas dan transparan.",
    servicesUsed: [
      "Desain UI/UX App/Web",
      "Tampilan Toko Marketplace",
      "Audit Usability",
      "Workshop Literasi Digital",
      "Pembuatan Website",
    ],
    metrics: [
      {
        value: "7 Artefak",
        label: "Preview Simulasi",
        detail: "Mewakili seluruh layanan digital, marketplace, audit, edukasi & web",
      },
      {
        value: "5 Layanan",
        label: "Cakupan Kategori",
        detail: "UI/UX, Toko Online, Audit, Workshop & Pengembangan Web",
      },
      {
        value: "Simulasi",
        label: "Status Transparan",
        detail: "Bukan proyek klien nyata — murni simulasi kapabilitas deliverable",
      },
    ],
    simulationItems: [
      {
        id: "sim-figma-katalog",
        number: "01",
        title: "Prototype Figma UI/UX Katalog",
        service: "Desain UI/UX App/Web",
        accent: "#4486C1",
        summary:
          "Simulasi tampilan katalog produk mobile & web dengan filter kategori, kartu produk bersih, dan hierarki harga yang jelas.",
        elements: ["Navigasi kategori produk", "Kartu varian & harga", "Tombol aksi keranjang / pesan"],
      },
      {
        id: "sim-alur-pemesanan",
        number: "02",
        title: "Prototype Desain Alur Pemesanan",
        service: "Desain UI/UX App/Web",
        accent: "#4486C1",
        summary:
          "Simulasi wireframe interaktif alur pemilihan produk hingga rancangan form pemesanan pada produk digital klien.",
        elements: ["Langkah 1: Pilih Produk", "Langkah 2: Rincian Pesanan", "Langkah 3: Konfirmasi Ringkas"],
      },
      {
        id: "sim-banner-marketplace",
        number: "03",
        title: "Mockup Banner Marketplace",
        service: "Tampilan Toko Marketplace",
        accent: "#D30B40",
        summary:
          "Simulasi tata letak header toko marketplace dengan highlight promo musiman, nilai utama produk, dan konsistensi warna brand.",
        elements: ["Banner utama toko 2:1", "Badge produk unggulan", "Pita informasi pengiriman"],
      },
      {
        id: "sim-listing-toko",
        number: "04",
        title: "Mockup Listing Toko Online",
        service: "Tampilan Toko Marketplace",
        accent: "#66CC69",
        summary:
          "Simulasi grid foto produk seragam dengan bingkai informasi ukuran, berat bersih, dan keunggulan produk agar etalase rapi.",
        elements: ["Template frame foto produk", "Label varian & neto", "Konsistensi etalase"],
      },
      {
        id: "sim-audit-usability",
        number: "05",
        title: "Cuplikan Laporan Audit Usability",
        service: "Audit Usability",
        accent: "#4486C1",
        summary:
          "Simulasi halaman laporan evaluasi UX yang memetakan tingkat temuan masalah, dampak ke pengguna, dan rekomendasi perbaikan.",
        elements: ["Skor kejelasan navigasi", "Temuan hambatan alur beli", "Prioritas perbaikan UX"],
      },
      {
        id: "sim-modul-workshop",
        number: "06",
        title: "Slide Modul Workshop Literasi Digital",
        service: "Workshop Literasi Digital",
        accent: "#E5E56E",
        summary:
          "Simulasi dek materi pelatihan yang disusun menggunakan bahasa non-teknis, langkah praktik langsung, dan lembar kerja UMKM.",
        elements: ["Agenda sesi interaktif", "Studi kasus sederhana", "Checklist praktik mandiri"],
      },
      {
        id: "sim-landing-page",
        number: "07",
        title: "Desain Landing Page Website",
        service: "Pembuatan Website",
        accent: "#231F20",
        summary:
          "Simulasi struktur landing page bisnis responsif dengan hero informatif, katalog produk, profil usaha, dan tombol kontak langsung.",
        elements: ["Hero bernarasi jelas", "Blok keunggulan & produk", "Akses kontak cepat responsif"],
      },
    ],
    beforeAfter: {
      hasPhotos: false,
      note: "Seluruh item dalam proyek ini berstatus Simulasi. Dokumentasi ini disiapkan untuk memperlihatkan struktur deliverable layanan digital dan edukasi, bukan proyek klien live.",
      beforeSummary:
        "Gambaran kebutuhan digital UMKM yang sering masih berupa deskripsi umum tanpa referensi bentuk hasil.",
      afterSummary:
        "Simulasi 7 artefak terstruktur yang memudahkan calon klien memahami standar output UI/UX, marketplace, audit, workshop, hingga website.",
    },
  },
];
