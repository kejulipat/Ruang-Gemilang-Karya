# PT Ruang Gemilang Kreatif — Company Profile Website

**Bersinar Bersama** — *Ruang untuk UMKM tumbuh berkembang.*

Repository ini berisi website **Company Profile resmi PT Ruang Gemilang Kreatif**, dibangun menggunakan Next.js (App Router) dan Tailwind CSS dengan pendekatan *static frontend* yang ringan, responsif, dan siap dipublikasikan.

---

## Tujuan Pembuatan Website

Website ini dibuat sebagai etalase digital dan representasi resmi **PT Ruang Gemilang Kreatif** untuk:

1. Memperkenalkan identitas, filosofi brand, visi, misi, nilai inti, serta struktur organisasi perusahaan kepada calon klien UMKM, mitra, dan pemangku kepentingan.
2. Menyajikan katalog layanan kreatif dan digital secara interaktif agar pelaku usaha dapat memilih solusi yang paling relevan dengan tahap perkembangan bisnisnya.
3. Menjelaskan alur kerja kolaborasi secara transparan melalui tujuh tahapan pengerjaan yang runtut.
4. Menampilkan portofolio karya secara jujur dan terkurasi dengan pemisahan status yang jelas antara **Proyek Nyata**, **Konsep**, dan **Simulasi**.
5. Mempermudah calon klien menghubungi tim untuk konsultasi langsung melalui tautan kanal komunikasi resmi perusahaan tanpa formulir yang berbelit.

---

## Tentang PT Ruang Gemilang Kreatif

**PT Ruang Gemilang Kreatif** adalah perusahaan jasa kreatif dan digital yang berfokus membantu pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) meningkatkan kualitas, daya saing, dan kehadiran digital bisnisnya.

Perusahaan hadir sebagai ruang kolaborasi yang hangat dan terarah bagi berbagai segmen usaha, khususnya:

- **UMKM Kuliner Kemasan** — produk makanan dan minuman olahan lokal.
- **UMKM Fesyen** — brand busana, kain lokal, dan aksesori.
- **UMKM Kriya** — kerajinan tangan dan produk suvenir lokal.
- **Produk Lokal Berbasis Rumahan** — usaha rintisan dari rumah yang siap naik kelas.

---

## Layanan yang Ditawarkan

Website ini merangkum sembilan layanan utama yang terbagi ke dalam empat kategori:

### 1. Konten & Media Sosial
- **Paket Konten Bulanan** — Desain feed Instagram, cover dan template Reels, serta kalender konten bulanan.
- **Desain Promo & Event** — Desain poster, banner, dan materi promosi musiman atau kegiatan khusus.

### 2. Branding & Visual
- **Logo & Identitas Visual** — Desain logo, palet warna brand, dan brand guideline.
- **Desain Kemasan & Label** — Desain kemasan produk, desain label, dan file desain siap cetak.

### 3. UI/UX & Toko Online
- **Desain UI/UX App/Web** — Prototype Figma, desain katalog digital, serta rancangan alur dan form pemesanan produk digital.
- **Tampilan Toko Marketplace** — Banner toko marketplace, desain foto produk, dan styling listing produk.
- **Audit Usability** — Dokumen laporan audit usability, temuan permasalahan UX, dan rekomendasi perbaikan pengalaman pengguna.

### 4. Pendampingan & Dev
- **Workshop Literasi Digital** — Sesi pelatihan, materi/modul digital, dan panduan praktis sesuai topik workshop.
- **Pembuatan Website** — Pengembangan website responsif sesuai kebutuhan bisnis dan peluncuran live melalui kolaborasi dengan mitra developer.

---

## Fitur Utama Website

- **Navigasi Sticky & Responsif** dengan penanda section aktif dan menu mobile yang mudah dijangkau.
- **Katalog Layanan Interaktif** dilengkapi filter kategori dan tombol konsultasi langsung per layanan.
- **Timeline Alur Kerja 7 Tahap** yang interaktif di desktop maupun perangkat mobile.
- **Galeri Portofolio Terkurasi** dengan filter kategori, label status (*Proyek Nyata*, *Konsep*, *Simulasi*), dan modal detail proyek yang dimuat secara dinamis (*code-split*).
- **Struktur Organisasi Inti** yang menampilkan peran strategis dan manajerial perusahaan.
- **Optimisasi SEO & Open Graph** mencakup metadata, favicon, dan thumbnail preview `1200x630`.

---

## Teknologi & Struktur Singkat

- **Framework:** Next.js 16 (App Router, Turbopack, React Compiler)
- **UI & Styling:** React 19 & Tailwind CSS v4
- **Struktur Folder Utama:**
  - `src/app/` — Entry layout, metadata SEO/OG, styling global, dan halaman utama statis.
  - `src/components/` — Komponen modular per section dan elemen UI interaktif.
  - `src/data/` — Pemisahan konten statis (profil perusahaan, layanan, alur kerja, portofolio, struktur tim, dan konfigurasi tautan kontak terpusat).
  - `public/` — Aset logo resmi, favicon, dan gambar preview Open Graph.

> **Catatan Konfigurasi Kontak:** Informasi tautan kontak dan media sosial dikelola secara terpusat di `src/data/contact.js` dan tidak dicantumkan di dalam dokumentasi ini.

---

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser untuk melihat tampilan pengembangan, atau jalankan build produksi:

```bash
npm run lint
npm run build
npm run start
```
