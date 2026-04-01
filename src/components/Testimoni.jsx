import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimoniImg from "../assets/testimoni.png";

// ==========================
// UTIL: Get YouTube Thumbnail
// ==========================
const getThumbnail = (url) => {
  const match = url.match(/(?:v=|\.be\/)([A-Za-z0-9_-]{11})/);
  return match
    ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
    : TestimoniImg;
};

// ==========================
// DATA
// ==========================
const testimonials = [
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
    videoUrl: "https://youtu.be/NlU_hVsmBek?si=Dlq3S4eAG0d40YU1",
  },
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
    videoUrl: "https://youtu.be/laW5bMPIlhY?si=67B9LGJvBqGkFIdB",
  },
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
    videoUrl: "https://youtu.be/_V9-UtVLWus?si=TyvUlvEYuxs6tWkM",
  },
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
    videoUrl: "https://youtu.be/fFs9Hc7ttQg?si=qOIYpnSeBuB6txWo",
  },
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
    videoUrl: "https://youtu.be/VCV6DLLUvtM?si=xxAKm8CX0iNxOPYQ",
  },
  {
    title: "Digitalisasi Absensi Sekolah yang Lebih Efisien",
    desc: "Sebelumnya, proses absensi sekolah masih dilakukan secara manual...",
    duration: "1:20",
    videoUrl: "https://youtu.be/jwZSBUKVPaQ?si=J0iKntDWgFf_5rOK",
  },
];

export default function Testimoni() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="-mb-20 py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center font-bold mb-20"
        >
          <p className="text-gray-600 text-2xl sm:text-3xl mb-3">
            Dipercaya berbagai sekolah & yayasan di Indonesia
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#33B77E] mb-6">
            Otomatisasi Absensi Sekolah <br className="hidden sm:block" />
            Anda dengan Ontime
          </h2>

          <a className="text-gray-700 hover:text-[#33B77E] text-base font-medium cursor-pointer">
            Lihat Cerita Mitra Kami
          </a>
        </motion.div>

        {/* BIG MAIN VIDEO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { delayChildren: 0.5, staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            onClick={() =>
              setActiveVideo("https://youtu.be/NlU_hVsmBek?si=Dlq3S4eAG0d40YU1")
            }
            className="cursor-pointer relative rounded-3xl overflow-hidden shadow-xl group"
          >
            {/* AUTO THUMBNAIL */}
            <img
              src={getThumbnail(
                "https://youtu.be/NlU_hVsmBek?si=Dlq3S4eAG0d40YU1",
              )}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className="text-4xl font-bold text-[#33B77E] mb-6">
              Digitalisasi Absensi Sekolah yang Lebih Efisien
            </h3>

            <p className="text-gray-600 text-lg mb-8">
              Dengan QRION, sistem absensi kini beralih ke format digital yang
              lebih praktis.
            </p>

            <button
              onClick={() =>
                setActiveVideo(
                  "https://youtu.be/NlU_hVsmBek?si=Dlq3S4eAG0d40YU1",
                )
              }
              className="bg-[#33B77E] text-white px-8 py-4 rounded-full hover:bg-[#249a67] transition"
            >
              Selengkapnya
            </button>
          </motion.div>
        </motion.div>

        {/* CAROUSEL SECTION */}
        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-6 w-max px-2">
            {testimonials.map((item, i) => (
              <div key={i} className="w-72 shrink-0">
                <div
                  onClick={() => setActiveVideo(item.videoUrl)}
                  className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img
                    src={getThumbnail(item.videoUrl)}
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                  <span className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                    {item.duration}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#33B77E] mt-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>

                <button
                  onClick={() => setActiveVideo(item.videoUrl)}
                  className="text-sm font-semibold text-white bg-[#33B77E] px-5 py-2 rounded-full hover:bg-[#249a67]"
                >
                  Selengkapnya
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MODAL POPUP ================= */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-xl
              text-black text-3xl font-bold hover:bg-white hover:scale-110 hover:shadow-2xl transition-all duration-300">
              ✕
            </button>

            <iframe
              width="100%"
              height="400"
              src={activeVideo.replace("youtu.be/", "www.youtube.com/embed/")}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
