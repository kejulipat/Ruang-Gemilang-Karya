export const contactConfig = {
  whatsapp: {
    number: "6281234567890",
    display: "+62 812-3456-7890 (Konfigurasi Kontak)",
    isPlaceholder: true,
    defaultMessage:
      "Halo PT Ruang Gemilang Kreatif, saya ingin berkonsultasi mengenai pengembangan branding dan solusi digital untuk usaha/UMKM saya.",
  },
  email: {
    address: "halo@ruanggemilangkreatif.id",
    display: "halo@ruanggemilangkreatif.id (Konfigurasi Kontak)",
    isPlaceholder: true,
    subject: "Konsultasi Layanan Kreatif & Digital — PT Ruang Gemilang Kreatif",
  },
  instagram: {
    handle: "@ruanggemilangkreatif",
    url: "https://instagram.com/",
    isPlaceholder: true,
  },
  configNote:
    "Nomor WhatsApp, alamat email, dan tautan media sosial dikelola secara terpusat di src/data/contact.js dan siap diperbarui dengan akun resmi aktif perusahaan.",
};

export function getWhatsAppUrl(customMessage) {
  const message = customMessage || contactConfig.whatsapp.defaultMessage;
  return `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(serviceName) {
  const message = `Halo PT Ruang Gemilang Kreatif, saya tertarik dengan layanan ${serviceName}. Boleh saya mendapatkan informasi lebih lanjut?`;
  return getWhatsAppUrl(message);
}

export function getMailtoUrl() {
  return `mailto:${contactConfig.email.address}?subject=${encodeURIComponent(
    contactConfig.email.subject
  )}`;
}
