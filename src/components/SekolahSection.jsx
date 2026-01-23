import React, { useState } from "react";
import { motion } from "framer-motion";

// AUTO IMPORT semua gambar di assets/school
const logos = Object.values(
  import.meta.glob("../assets/school/*.png", { eager: true })
).map((file) => file.default);

export default function SekolahSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="mitra" className="mt-10 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-8 text-center relative z-20">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-[#33B77E] text-4xl font-bold mb-4">
            Dipercaya Banyak Sekolah di Seluruh Indonesia
          </h2>
          <p className="text-[#434343] text-base max-w-3xl mx-auto mb-12">
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
          className="relative overflow-hidden mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-30" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-30" />

          <div
            className="flex gap-10 animate-left"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img key={i} src={logo} className="h-24 w-auto object-contain" />
            ))}
          </div>
        </motion.div>

        {/* MARQUEE 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-30" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-30" />

          <div
            className="flex gap-10 animate-right"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img key={i} src={logo} className="h-24 w-auto object-contain" />
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
