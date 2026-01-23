import React from "react";
import { motion } from "framer-motion";
import TestimoniImg from "../assets/testimoni.png";

const testimonials = [
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
  },
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
  },
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
  },
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
  },
];

export default function Testimoni() {
  return (
    <section className="-mb-20 py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center font-bold mb-20"
        >
          <p className="text-black-600 mb-4">
            Dipercaya berbagai sekolah & yayasan di Indonesia
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#33B77E] mb-6">
            Otomatisasi Absensi Sekolah <br />
            Anda dengan Ontime
          </h2>

          <a
            href="#"
            className="text-black-600 hover:text-[#33B77E] font-medium"
          >
            Lihat Cerita Mitra Kami
          </a>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8, // ⏱️ jeda setelah header
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* VIDEO CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={TestimoniImg}
              alt="Testimoni"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-3xl font-bold opacity-80">TESTIMONI</p>
              <p className="text-2xl font-semibold">
                SMAS Cendana Rumbai
              </p>
            </div>

            <span className="absolute bottom-6 right-6 bg-black/60 text-white px-4 py-1 rounded-full text-sm">
              1:20
            </span>
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            <h3 className="text-4xl font-bold text-[#33B77E] mb-6">
              Digitalisasi Absensi Sekolah <br />
              yang Lebih Efisien
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Sebelumnya, proses absensi sekolah masih dilakukan secara manual
              sehingga sering memakan waktu dan berpotensi terjadi kesalahan
              pencatatan. Dengan menggunakan QRION, sistem absensi kini beralih
              ke format digital yang lebih praktis dan terorganisir.
            </p>

            <button className="
              bg-[#33B77E] text-white px-8 py-4 rounded-full
              font-semibold hover:bg-[#249a67] transition
            ">
              Selengkapnya
            </button>
          </motion.div>
        </motion.div>

        {/* ================= GRID BAWAH ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8, // ⏱️ jeda setelah main content
                staggerChildren: 0.25,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-5">
                <img
                  src={TestimoniImg}
                  alt="Testimoni"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                  {item.duration}
                </span>
              </div>

              <h4 className="text-lg font-bold text-[#33B77E] mb-2">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm mb-4">
                {item.desc}
              </p>

              <button className="text-sm font-semibold text-white bg-[#33B77E] px-5 py-2 rounded-full hover:bg-[#249a67]">
                Selengkapnya
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
