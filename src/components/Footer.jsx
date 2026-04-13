import { Icon } from "@iconify/react";
import logo from "../assets/Icon Ontime.png";

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-[#DFF7E8]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* === Column 1: Logo + Desc + Social === */}
          <div className="space-y-5">
            <img
              src={logo}
              alt="Ontuition Logo"
              className="w-[160px] h-auto object-contain"
            />

            <p className="text-sm text-[#0E1E14] leading-relaxed w-64">
              Platform manajemen keuangan sekolah terpadu yang membantu
              mengotomatisasi pembayaran, laporan, dan administrasi sekolah Anda.
            </p>

            <div className="flex gap-3">
              {["facebook", "instagram", "linkedin", "youtube"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#33B77E] hover:bg-[#28a06c] transition"
                >
                  <Icon icon={`mdi:${item}`} className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* === Column 2: Produk === */}
          <div>
            <h3 className="font-bold text-lg mb-4">Produk</h3>
            <ul className="space-y-3 text-sm text-[#0E1E14]">
              {[
                { name: "Fitur", id: "fitur" },
                { name: "Harga", id: "PricingPackages" },
                { name: "QRION Ekosistem", id: "custom" },
                { name: "Integrasi E-Channel", id: "channel" },
                { name: "Notifikasi WhatsApp", id: "notifikasi" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-[#33B77E] transition"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* === Column 3: Bantuan === */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bantuan</h3>
            <ul className="space-y-3 text-sm text-[#0E1E14]">
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-[#33B77E] transition"
                >
                  FAQ
                </button>
              </li>
              {[
                "Panduan Penggunaan",
                "Pusat Bantuan",
                "Kebijakan Privasi",
                "Syarat & Ketentuan",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#33B77E] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Column 4: Hubungi Kami === */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>

            <ul className="space-y-4 text-sm text-[#0E1E14]">

              <li className="flex items-center gap-3">
                <Icon icon="heroicons:envelope" className="text-[#33B77E] h-5" />
                info@ontime.com
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="ic:baseline-whatsapp" className="text-[#33B77E] h-5" />
                +62 821-6195-202
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="heroicons:map-pin" className="text-[#33B77E] h-5" />
                Pekanbaru, Indonesia
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://wa.wizard.id/26d596"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#1ebe5c] transition"
              >
                <Icon icon="ic:baseline-whatsapp" className="h-5" />
                Konsultasi Gratis
              </a>
            </div>
          </div>

        </div>

        {/* === Bottom Section === */}
        <div className="mt-12 border-t border-[#33B77E]/25 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#0E1E14]">
            © 2025 QRION. All rights reserved.
          </p>

          <p className="text-sm text-[#0E1E14] flex gap-1">
            Powered by <span className="font-bold text-[#33B77E]">QRION</span>
          </p>
        </div>

      </div>
    </footer>
  );
}