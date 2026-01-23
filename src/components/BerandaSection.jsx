// src/components/BerandaSection.jsx
import React from "react";
import { motion } from "framer-motion";

import laptopMockup from "../assets/Rectangle.png";
import icon from "../assets/whatsapp.svg";

// ASSET GRADIENT
import gradientLeft from "../assets/gradienkir.png";
import gradientRight from "../assets/gradienkan.png";

export default function BerandaSection() {
  return (
    <section id="beranda" className="relative pt-20 bg-white overflow-hidden">
      {/* ===== BACKGROUND GRADIENT ===== */}
      <motion.img
        src={gradientLeft}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -left-50 top-0 w-[700px] opacity-300 blur-[120px] pointer-events-none"
      />

      <motion.img
        src={gradientRight}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -right-40 top-100 w-[500px] opacity-300 blur-[120px] pointer-events-none"
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-2xl"
          >
            <p className="text-[#33B77E] font-semibold text-lg tracking-wide mb-3">
              Sistem Absensi Digital Sekolah All-in-One
            </p>

            <h1 className="text-4xl lg:text-[40px] font-bold text-[#231F20] leading-[1.15]">
              Otomatisasi Absensi Sekolah <br />
              Tingkatkan Kedisiplinan <br />
              Guru & Siswa
            </h1>

            <p className="mt-6 text-[#6B7280] text-lg leading-relaxed">
              Kelola presensi harian, absensi pelajaran, dan notifikasi otomatis
              24/7 dengan Ontime.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex items-center gap-4">
              <button
                className="flex items-center gap-2 px-8 py-3 
                          text-white font-semibold rounded-full shadow-md transition
                          bg-gradient-to-r from-[#33B77E] to-[#2FA570] hover:opacity-90"
              >
                <img src={icon} alt="WA" className="w-5 h-5" />
                Konsultasi Gratis
              </button>

              <button className="px-8 py-3 border-2 border-[#33B77E] text-[#33B77E] font-semibold rounded-full hover:bg-[#e8fff4] transition">
                Coba Gratis
              </button>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              *Free Trial & Full Customer Support
            </p>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.8, // muncul setelah left
            }}
            className="flex justify-center pointer-events-none"
          >
            <img
              src={laptopMockup}
              alt="Dashboard Ontime"
              className="w-full max-w-3xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] -rotate-1"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
