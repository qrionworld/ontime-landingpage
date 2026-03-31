import React, { useState } from "react";
import { motion } from "framer-motion";

// AUTO IMPORT semua gambar di assets/school
const logos = Object.values(
  import.meta.glob("../assets/school/*.png", { eager: true })
).map((file) => file.default);

// FUNCTION SHUFFLE (acak array)
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function SekolahSection() {
  const [isPaused, setIsPaused] = useState(false);

  // ACak tapi stabil (tidak berubah saat re-render)
  const [shuffledLogos1] = useState(() => shuffleArray(logos));
  const [shuffledLogos2] = useState(() => shuffleArray(logos));

  return (
    <section id="mitra" className="mt-10 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 text-center relative z-20">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-[#33B77E] text-2xl md:text-3xl font-bold mb-3">
            Dipercaya Banyak Sekolah di Seluruh Indonesia
          </h2>
          <p className="text-[#434343] text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Dari sekolah dasar hingga yayasan, Ontuition telah membantu manajemen
            sekolah bekerja lebih efisien dan transparan.
          </p>
        </motion.div>

        {/* MARQUEE 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden mb-6 md:mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-30" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-30" />

          <div
            className="flex gap-6 md:gap-10 animate-left"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...shuffledLogos1, ...shuffledLogos1].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="logo sekolah"
                className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </motion.div>

        {/* MARQUEE 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-30" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-30" />

          <div
            className="flex gap-6 md:gap-10 animate-right"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...shuffledLogos2, ...shuffledLogos2].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="logo sekolah"
                className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ANIMATION STYLE */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-left {
          animation: marquee-left 20s linear infinite;
        }

        .animate-right {
          animation: marquee-right 20s linear infinite;
        }
      `}</style>
    </section>
  );
}