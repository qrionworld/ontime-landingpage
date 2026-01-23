import React from "react";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaClock,
  FaBook,
  FaTimesCircle,
  FaExclamationTriangle,
  FaListUl,
} from "react-icons/fa";

// Background gradient asset
import gradientHijau from "../assets/hijau.png";
import gradientMerah from "../assets/merah.png";

export default function ManfaatSection() {
  return (
    <section className="relative pt-20 pb-40 bg-white overflow-hidden">

      {/* ===== BACKGROUND BLUR GRADIENT ===== */}
      <motion.img
        src={gradientHijau}
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-20 -top-10 w-[700px] blur-[40px] pointer-events-none"
      />

      <motion.img
        src={gradientMerah}
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute right-20 -top-10 w-[700px] blur-[40px] pointer-events-none"
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ================= CARA BARU ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl border-4 border-[#33B77E] bg-[#E6FFF4] px-6 py-4 mb-8">
              <h3 className="text-[#1F9D63] text-xl font-bold">
                Cara Baru ( Ontime : Digital & Otomatis )
              </h3>
            </div>

            <div className="space-y-8">
              <FeatureItem
                variant="green"
                icon={<FaChartBar />}
                title="Efisiensi Waktu Rekap: Naik 90%"
                desc="Buang waktu berjam-jam setiap bulan untuk rekap absensi, validasi data."
              />

              <FeatureItem
                variant="green"
                icon={<FaClock />}
                title="Akurasi Data 100% & Kedisiplinan Meningkat"
                desc="Monitoring real-time bukti kehadiran dan notifikasi instan ke wali siswa."
              />

              <FeatureItem
                variant="green"
                icon={<FaBook />}
                title="Pelacakan Absensi Pelajaran yang Otomatis"
                desc="Sistem absensi by mapel dan by jam terintegrasi penuh."
              />
            </div>
          </motion.div>

          {/* ================= CARA LAMA ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl border-4 border-[#FF8A8A] bg-[#FFECEC] px-6 py-4 mb-8">
              <h3 className="text-[#E24A4A] text-xl font-bold">
                Cara Lama : Manual & Lambat
              </h3>
            </div>

            <div className="space-y-8">
              <FeatureItem
                variant="red"
                icon={<FaTimesCircle />}
                title="Kerugian Waktu Administrasi: 120+ Jam/Bulan"
                desc="Buang waktu berjam-jam setiap bulan untuk rekap manual."
              />

              <FeatureItem
                variant="red"
                icon={<FaExclamationTriangle />}
                title="Banyak Data Hilang & Keterlambatan Tinggi"
                desc="Data absensi rawan hilang, tidak real-time, dan sulit diverifikasi."
              />

              <FeatureItem
                variant="red"
                icon={<FaListUl />}
                title="Sulit Melacak Absensi Pelajaran"
                desc="Data absensi pelajaran terpisah dan tidak terintegrasi."
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ================= FEATURE ITEM ================= */
function FeatureItem({ icon, title, desc, variant }) {
  const styles = {
    green: {
      bg: "bg-green-gradient",
      icon: "text-[#1F9D63]",
    },
    red: {
      bg: "bg-red-gradient",
      icon: "text-[#E24A4A]",
    },
  };

  return (
    <div className="flex items-start gap-4">
      {/* ICON */}
      <div
        className={`p-4 rounded-2xl ${styles[variant].bg}`}
      >
        <div className={`w-8 h-8 ${styles[variant].icon}`}>
          {React.cloneElement(icon, { className: "w-full h-full" })}
        </div>
      </div>

      {/* TEXT */}
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
