import React from "react";
import { motion } from "framer-motion";
import dashboardFront from "../assets/dashboard2.png";
import dashboardBack from "../assets/dashboard1.png";
import bgPattern from "../assets/bg.png";

export default function FreeTrialCTA() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-b from-white via-[#E8F5F0] to-[#33B77E]">
      
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: "600px",
          backgroundPosition: "center bottom",
          backgroundRepeat: "repeat-x",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* ================= HEADER ================= */}
        <motion.div
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <h2 className="text-[#33B77E] font-bold text-2xl sm:text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">
    Coba Ontime Gratis 14 Hari
  </h2>

  <div className="mb-10 md:mb-16">
    <a
      href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20konsultasi%20gratis%20terkait%20sistem%20absensi%20digital%20Ontime.%20Boleh%20dibantu?"
      className="
        inline-block
        border-2 border-[#33B77E] text-[#33B77E]
        font-semibold rounded-full
        px-6 py-2.5 sm:px-8 sm:py-3
        text-sm sm:text-base
        hover:bg-[#33B77E] hover:text-white
        transition-all duration-300
        w-full sm:w-auto text-center
      "
    >
      Coba Gratis
    </a>
  </div>
</motion.div>

        {/* ================= MOCKUP ================= */}
        <div className="relative w-full max-w-5xl mx-auto">

          {/* MOBILE: STACK */}
          <div className="flex flex-col items-center gap-4 sm:hidden">
            <img
              src={dashboardFront}
              alt="Dashboard Monitoring Absensi"
              className="w-full max-w-sm"
            />
            <img
              src={dashboardBack}
              alt="Dashboard Kalender Akademik"
              className="w-full max-w-sm"
            />
          </div>

          {/* DESKTOP: OVERLAP */}
          <div className="hidden sm:block relative h-[400px] md:h-[500px] lg:h-[600px]">

            {/* BELAKANG */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 bottom-0 w-[55%] md:w-[50%] z-10"
            >
              <img src={dashboardBack} alt="Dashboard Kalender Akademik" />
            </motion.div>

            {/* DEPAN */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-0 top-0 w-[55%] md:w-[50%] z-20"
            >
              <img src={dashboardFront} alt="Dashboard Monitoring Absensi" />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}