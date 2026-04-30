import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Kebutuhan() {
  return (
    <section className="py-16 md:py-24 bg-[#E9FBF3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4 leading-tight">
            Perlu Kebutuhan Custom <br className="hidden sm:block" />
            Untuk <span className="text-[#33B77E]">Sekolah Anda?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 md:mb-16">
            Hubungi Edutech Konsultan Kami
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto"
        >
          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  },
                },
              }}
              className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg"
            >
              {index === 0 ? (
                <>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#33B77E] mb-3 md:mb-4">
                    Custom
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-10">
                    Solusi yang disesuaikan untuk kebutuhan spesifik sekolah Anda
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#33B77E] mb-3 md:mb-4">
                    QRION Ekosistem
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-10">
                    Versi terlengkap QRION (Oncard, Ontuition, Ontime, Onclass)
                  </p>
                </>
              )}

              <a
                href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20konsultasi%20gratis%20terkait%20sistem%20absensi%20digital%20Ontime.%20Boleh%20dibantu?"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  bg-[#33B77E] text-white
                  px-5 py-3 sm:px-6 sm:py-3.5
                  rounded-full text-sm sm:text-base font-semibold
                  hover:bg-[#249a67] transition-all w-full sm:w-auto
                "
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                Konsultasi Gratis
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}