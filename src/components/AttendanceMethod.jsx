import React from "react";
import { motion } from "framer-motion";

// IMPORT IMAGES
import TapImage from "../assets/Tap.png";
import MobileImage from "../assets/Mobile Absensi.png";
import lingkir from "../assets/lingkir.png";
import lingkan from "../assets/lingkan.png";

export default function AttendanceMethod() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#F0FAF6] to-[#E8F5F0]">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={lingkir}
          alt=""
          className="absolute -top-10 -left-10 w-[500px] md:w-[650px] opacity-70"
        />
        <img
          src={lingkan}
          alt=""
          className="absolute -bottom-10 -right-10 w-[500px] md:w-[650px] opacity-70"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ================= HEADER ================= */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-4xl md:text-5xl font-bold text-[#33B77E] mb-16 md:mb-20"
        >
          Metode Absensi
        </motion.h2>

        {/* ================= IMAGE GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8, // ⏱️ jeda setelah header
                staggerChildren: 0.6, // kiri dulu baru kanan
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end max-w-5xl mx-auto"
        >

          {/* TAP CARD (LEFT → RIGHT) */}
          <AttendanceCard
            image={TapImage}
            title="Tap Card"
            alt="Tap Card"
            direction="left"
          />

          {/* MOBILE CARD (RIGHT → LEFT) */}
          <AttendanceCard
            image={MobileImage}
            title="Mobile"
            alt="Mobile Absensi"
            direction="right"
          />

        </motion.div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function AttendanceCard({ image, title, alt, direction }) {
  const isLeft = direction === "left";

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: isLeft ? -80 : 80,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
      }}
      className="flex flex-col items-center group"
    >
      <div className="relative mb-6 md:mb-8">
        <img
          src={image}
          alt={alt}
          className="w-[220px] md:w-[300px] h-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-[#2A2A2A]">
        {title}
      </h3>
    </motion.div>
  );
}
