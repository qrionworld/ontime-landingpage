// src/components/BerandaSection.jsx
import React from "react";
import { motion } from "framer-motion";

import laptopMockup from "../assets/Rectangle.png";
import icon from "../assets/whatsapp.svg";

import gradientLeft from "../assets/gradienkir.png";
import gradientRight from "../assets/gradienkan.png";

export default function BerandaSection() {
  return (
    <section id="beranda" className="relative pt-16 bg-white overflow-hidden">
      
      {/* BG GRADIENT */}
      <motion.img
        src={gradientLeft}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -left-40 top-10 w-[400px] blur-[100px] opacity-30 pointer-events-none"
      />

      <motion.img
        src={gradientRight}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -right-20 top-20 w-[350px] blur-[100px] opacity-30 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">

        {/* MOBILE → Column | Desktop → Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left"
          >
            {/* SUBTITLE */}
            <p className="text-[#33B77E] font-semibold text-sm md:text-lg tracking-wide mb-3">
              Sistem Absensi Digital Sekolah All-in-One
            </p>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#231F20] leading-tight md:leading-snug">
              Otomatisasi Absensi Sekolah <br className="hidden md:block" />
              Tingkatkan Kedisiplinan <br className="hidden md:block" />
              Guru & Siswa
            </h1>

            {/* PARAGRAPH */}
            <p className="mt-4 md:mt-6 text-[#6B7280] text-sm md:text-lg leading-relaxed">
              Kelola presensi harian, absensi pelajaran, dan notifikasi otomatis
              24/7 dengan Ontime.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center sm:justify-start gap-3 sm:gap-4 w-full">
              <button
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 
                          text-white font-semibold rounded-full shadow-md transition
                          bg-gradient-to-r from-[#33B77E] to-[#2FA570] hover:opacity-90"
              >
                <img src={icon} alt="WA" className="w-5 h-5" />
                Konsultasi Gratis
              </button>

              <button 
                className="w-full sm:w-auto px-6 py-3 border-2 border-[#33B77E] 
                          text-[#33B77E] font-semibold rounded-full hover:bg-[#e8fff4] transition"
              >
                Coba Gratis
              </button>
            </div>

            <p className="mt-4 text-xs md:text-sm text-gray-500">
              *Free Trial & Full Customer Support
            </p>
          </motion.div>

          {/* RIGHT CONTENT (IMAGE) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex justify-center pointer-events-none w-full"
          >
            <img
              src={laptopMockup}
              alt="Dashboard Ontime"
              className="w-full max-w-md md:max-w-2xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] -rotate-1"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}