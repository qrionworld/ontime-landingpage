// src/components/ManajementSection.jsx
import React from "react";
import { motion } from "framer-motion";
import dashboardFront from "../assets/dashboard2.png";
import dashboardBack from "../assets/dashboard1.png";
import bgPattern from "../assets/bg.png";

export default function FreeTrialCTA() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-[#E8F5F0] to-[#33B77E]">
      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: "800px 800px",
          backgroundPosition: "center bottom",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="text-[#33B77E] font-extrabold text-4xl sm:text-5xl md:text-6xl mb-8">
            Coba Ontime Gratis 14 Hari
          </h2>

          <div className="mb-16">
            <button className="border-2 border-[#33B77E] text-[#33B77E] font-semibold rounded-full px-16 py-3 text-base hover:bg-[#33B77E] hover:text-white transition-all duration-300">
              Coba Gratis
            </button>
          </div>
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
                delay: 0.8, // muncul setelah header
              }}
              className="absolute right-20 bottom-0 w-[50%] sm:w-[55%] lg:w-[50%] z-10"
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
                delay: 0.8, // sedikit setelah belakang
              }}
              className="absolute left-20 top-0 w-[50%] sm:w-[55%] lg:w-[50%] z-20"
            >
              <img
                src={dashboardFront}
                alt="Dashboard Monitoring Absensi"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
