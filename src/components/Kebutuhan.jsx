import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Kebutuhan() {
  return (
    <section className="py-24 bg-[#E9FBF3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1], // easeOutExpo (smooth)
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Perlu Kebutuhan Custom <br />
            Untuk <span className="text-[#33B77E]">Sekolah Anda?</span>
          </h2>

          <p className="text-xl text-gray-600 mb-16">
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
                delayChildren: 0.6, // jeda setelah title
                staggerChildren: 0.25,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 70,   // lembut
                    damping: 18,     // tidak mantul
                    mass: 0.9,
                  },
                },
              }}
              className="
                bg-white rounded-3xl p-14 shadow-xl"
            >
              {index === 0 ? (
                <>
                  <h3 className="text-4xl font-bold text-[#33B77E] mb-6">
                    Custom
                  </h3>

                  <p className="text-lg text-gray-600 mb-10">
                    Solusi yang disesuaikan, direncanakan untuk kebutuhan spesifik sekolah anda
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-4xl font-bold text-[#33B77E] mb-6">
                    QRION Ekosistem
                  </h3>

                  <p className="text-lg text-gray-600 mb-10">
                    Versi terlengkap QRION <br />
                    (Oncard, Ontuition, Ontime, Onclass)
                  </p>
                </>
              )}

              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  bg-[#33B77E] text-white px-10 py-4
                  rounded-full text-lg font-semibold
                  hover:bg-[#249a67] transition-all
                "
              >
                <FaWhatsapp className="text-2xl" />
                Konsultasi Gratis
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
