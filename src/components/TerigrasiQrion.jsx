import React from "react";
import { motion } from "framer-motion";

// ===== ASSETS =====
import TapImage from "../assets/Tap.png";
import MobileAbsensi from "../assets/Mobile Absensi.png";
import TeacherImg from "../assets/teacher.png";
import MobileImg from "../assets/mobile.png";
import EcosystemImg from "../assets/ekosistem.png";
import Lingkir from "../assets/lingkir.png";
import Lingkan from "../assets/lingkan.png";
import Ling from "../assets/ling.png";

export default function EcosystemUnifiedSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0FAF6] to-[#36C48A]">
      {/* ===== DECORATIONS ===== */}
      <img
        src={Lingkir}
        className="absolute -top-10 -left-28 w-[260px] md:w-[600px] opacity-30 pointer-events-none"
      />
      <img
        src={Lingkan}
        className="absolute top-[55%] -right-32 w-[300px] md:w-[700px] opacity-30 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center pt-20 md:pt-32 pb-16 md:pb-24"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-[#33B77E] mb-4 leading-tight">
            Ciptakan Ekosistem Sekolah yang <br className="hidden md:block" />
            Sinergis dan Produktif
          </h2>

          <p className="text-sm md:text-xl text-[#434343] mx-auto max-w-xl md:max-w-3xl leading-relaxed">
            Optimalkan manajemen absensi siswa dan guru sekolah anda. Beralih ke
            sistem monitoring absensi real-time dan terintegrasi.
          </p>
        </motion.div>

        {/* ================= ECOSYSTEM CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pb-20 md:pb-32">
          {[
            {
              title: "Kepala Sekolah",
              desc: "Monitor Kualitas Sekolah dalam Genggaman",
              items: [
                "Executive Dashboard",
                "Laporan Kinerja Objektif",
                "Pengawasan Terpusat",
              ],
            },
            {
              title: "Guru & Staff",
              desc: "Hentikan Lembur Administrasi",
              items: [
                "Auto-Rekapitulasi",
                "Laporan Siap Cetak",
                "Manajemen Piket Digital",
              ],
            },
            {
              title: "Orang Tua Siswa",
              desc: "Rasa Aman & Monitoring Anak",
              items: ["Notifikasi WhatsApp", "Riwayat Kehadiran Transparan"],
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.2 }}
              className="border-4 border-[#33B77E] rounded-xl md:rounded-2xl p-6 md:p-8 bg-white shadow-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#33B77E] mb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                {card.desc}
              </p>
              <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
                {card.items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ================= METODE ABSENSI ================= */}
        <div className="text-center pb-24 md:pb-32">
          <h3 className="text-2xl md:text-4xl font-bold text-[#33B77E] mb-12 md:mb-16">
            Metode Absensi
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
            {[
              { img: TapImage, label: "Tap Card", width: "180px" },
              { img: MobileAbsensi, label: "Mobile", width: "160px" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.3 }}
                className="flex flex-col items-center"
              >
                <img
                  src={m.img}
                  style={{ width: m.width }}
                  className="drop-shadow-2xl mb-4"
                />

                <span className="text-lg md:text-2xl font-bold">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= QRION INTEGRATION ================= */}
        <div className="relative pb-32 md:pb-40">

          {/* BACKGROUND LING – Fixed Size */}
          <motion.img
            src={Ling}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.35 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="
              absolute 
              left-1/2 
              top-16 md:top-40 
              -translate-x-1/2 
              w-[320px] md:w-[900px]
              pointer-events-none
            "
          />

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h3 className="text-xl md:text-3xl font-bold text-[#33B77E] mb-2">
              Terintegrasi Dengan QRION
            </h3>

            <p className="text-sm md:text-xl text-gray-600 mx-auto max-w-xs md:max-w-md">
              Ekosistem Digitalisasi Sekolah Terlengkap
            </p>
          </motion.div>

          {/* DEVICES */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-40 mb-16">

            {/* Device 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="text-xs md:text-base px-3 py-1 rounded-full bg-white border-2 border-[#33B77E] text-[#33B77E] mb-4">
                QRION For Teacher
              </span>

              <img
                src={TeacherImg}
                className="w-[130px] md:w-[260px] drop-shadow-2xl"
              />
            </motion.div>

            {/* Device 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-xs md:text-base px-3 py-1 rounded-full bg-white border-2 border-[#33B77E] text-[#33B77E] mb-4">
                QRION Mobile
              </span>

              <img
                src={MobileImg}
                className="w-[250px] md:w-[520px] drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* ECOSYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="px-6 py-2 mb-4 rounded-full bg-white border-2 border-[#33B77E] text-[#33B77E] text-sm md:text-base font-bold">
              QRION Ekosistem
            </span>

            <img
              src={EcosystemImg}
              className="w-[260px] md:w-[520px] drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}