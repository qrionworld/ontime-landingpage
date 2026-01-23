// src/components/ManajementSection.jsx
import React from "react";
import { motion } from "framer-motion";
import dashboardFront from "../assets/dashboard2.png";
import dashboardBack from "../assets/dashboard1.png";

export default function ManajementSection() {
  return (
    <section
      className="relative py-20 lg:py-20 overflow-hidden
      bg-gradient-to-b
      from-[#F2FBF7]
      via-[#DDF4EB]
      to-[#33B77E]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADER TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-[#33B77E] text-2xl lg:text-4xl font-bold mb-2">
            Manajemen Absensi Terlengkap
          </h2>

          <h3 className="text-[#231F20] text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Untuk Sekolah Go Digital
          </h3>

          <p className="text-[#4A5568] text-sm lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Optimalkan manajemen absensi siswa dan guru sekolah anda. Beralih ke
            sistem monitoring absensi real-time dan terintegrasi.
          </p>
        </motion.div>

        {/* ================= MOCKUP AREA ================= */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">

            {/* DASHBOARD BELAKANG (KANAN) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: 0.6, // muncul setelah header
              }}
              className="absolute right-10 bottom-0 w-[50%] sm:w-[55%] lg:w-[50%] z-20"
            >
              <img
                src={dashboardBack}
                alt="Dashboard Kalender Akademik"
              />
            </motion.div>

            {/* DASHBOARD DEPAN (KIRI) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: 0.6, // sedikit setelah belakang
              }}
              className="absolute left-10 top-0 w-[50%] sm:w-[55%] lg:w-[50%] z-10"
            >
              <img
                src={dashboardFront}
                alt="Dashboard Monitoring Absensi"
                className="w-full h-auto rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
