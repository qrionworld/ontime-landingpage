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
        className="absolute -top-24 -left-24 w-[600px] opacity-40"
      />
      <img
        src={Lingkan}
        className="absolute top-[40%] -right-40 w-[700px] opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center pt-32 pb-24"
        >
          <h2 className="text-5xl font-bold text-[#33B77E] mb-6">
            Ciptakan Ekosistem Sekolah yang <br /> Sinergis dan Produktif
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimalkan manajemen absensi siswa dan guru sekolah anda. Beralih ke
            sistem monitoring absensi real-time dan terintegrasi
          </p>
        </motion.div>

        {/* ================= ECOSYSTEM CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-32">
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
              className="border-4 border-[#33B77E] rounded-2xl p-8 bg-white"
            >
              <h3 className="text-2xl font-bold text-[#33B77E] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6">{card.desc}</p>
              <ul className="list-disc list-inside space-y-3">
                {card.items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ================= METODE ABSENSI ================= */}
        <div className="text-center pb-32">
          <h3 className="text-4xl font-bold text-[#33B77E] mb-16">
            Metode Absensi
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-24">
            {[
              { img: TapImage, label: "Tap Card", width: "270px" },
              { img: MobileAbsensi, label: "Mobile", width: "240px" },
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
                  className="drop-shadow-2xl mb-6"
                />

                <span className="text-2xl font-bold">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= QRION INTEGRATION ================= */}
        <div className="relative pb-40">
          <motion.img
            src={Ling}
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 top-40 -translate-x-1/2 w-[900px] pointer-events-none"
          />

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h3 className="text-5xl font-bold text-[#33B77E] mb-4">
              Terintegrasi Dengan QRION
            </h3>
            <p className="text-xl text-gray-600">
              Ekosistem Digitalisasi Sekolah Terlengkap
            </p>
          </motion.div>

          {/* TOP DEVICES */}
          <div className="flex justify-center gap-40 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <span
                className="-mb-20 px-6 py-2 rounded-full 
  border-2 border-[#33B77E] 
  bg-white 
  text-[#33B77E] 
  font-bold"
              >
                QRION For Teacher
              </span>
              <div className="w-[340px] h-[600px] flex items-center justify-center">
                <img src={TeacherImg} className="w-[260px] drop-shadow-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
              className="flex flex-col items-center"
            >
              <span className="-mb-20 px-6 py-2 rounded-full border-2 bg-white border-[#33B77E] text-[#33B77E] font-bold">
                QRION Mobile
              </span>
              <div className="w-[440px] h-[600px] flex items-center justify-center">
                <img src={MobileImg} className="w-[520px] drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>

          {/* ECOSYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
            className="flex flex-col items-center"
          >
            <span className="mb-6 -mt-40 px-8 py-3 rounded-full border-2 bg-white border-[#33B77E] text-[#33B77E] font-bold">
              QRION Ekosistem
            </span>
            <img src={EcosystemImg} className="w-[520px] drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
