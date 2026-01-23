import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";

import {
  FaChartLine,
  FaClock,
  FaSearch,
  FaUserCheck,
  FaClipboardList,
  FaUsersCog,
  FaCalendarAlt,
  FaBookOpen,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ================= SLIDE DATA ================= */
const slides = [
  {
    title: "Real-Time Monitoring",
    description:
      "Pantau aktivitas kehadiran dan belajar mengajar di sekolah anda lewat real-time dashboard",
    image: s1,
    imageWidth: "max-w-[100%]",
    imageTranslateX: "lg:translate-x-3",
    imageTranslateY: "lg:-translate-y-1",
    items: [
      {
        icon: <FaChartLine />,
        title: "Track Progress Belajar",
        desc: "Lacak aktivitas setiap kelas melalui indikator status secara real-time (Ongoing, Done, Passed)",
      },
      {
        icon: <FaClock />,
        title: "Pantau Detail Jadwal",
        desc: "Pantau guru mata pelajaran yang masuk kelas, mata pelajaran, hingga durasi waktu mengajar",
      },
      {
        icon: <FaSearch />,
        title: "Deteksi Dini Masalah Kelas",
        desc: "Identifikasi kelas yang terlambat dimulai, guru belum hadir, atau jadwal tidak berjalan sesuai rencana.",
      },
    ],
  },
  {
    title: "Manajemen Absensi",
    description: "Sistem absensi siswa dan guru yang otomatis dan akurat.",
    image: s2,
    imageWidth: "max-w-[1000px]",
    imageTranslateX: "lg:-translate-x-9",
    imageTranslateY: "lg:translate-y-0",
    items: [
      { icon: <FaUserCheck />, title: "Absensi Digital", desc: "Tanpa pencatatan manual." },
      { icon: <FaClipboardList />, title: "Rekap Otomatis", desc: "Rekap langsung tersedia." },
      { icon: <FaChartLine />, title: "Laporan Kehadiran", desc: "Pantau kehadiran berkala." },
    ],
  },
  {
    title: "Manajemen Guru Piket",
    description: "Atur dan pantau tugas guru piket secara optimal.",
    image: s3,
    imageWidth: "max-w-[1000px]",
    imageTranslateX: "lg:translate-x-4",
    imageTranslateY: "",
    items: [
      { icon: <FaUsersCog />, title: "Jadwal Piket", desc: "Atur jadwal fleksibel." },
      { icon: <FaClock />, title: "Monitoring Kehadiran", desc: "Pastikan sesuai jadwal." },
      { icon: <FaSearch />, title: "Evaluasi Kinerja", desc: "Pantau kinerja guru." },
    ],
  },
  {
    title: "Kalender Akademik",
    description: "Kelola agenda akademik sekolah secara terstruktur.",
    image: s4,
    imageWidth: "max-w-[1000px]",
    imageTranslateX: "lg:-translate-x-8",
    imageTranslateY: "lg:-translate-y-2",
    items: [
      { icon: <FaCalendarAlt />, title: "Agenda Sekolah", desc: "Kelola agenda akademik." },
      { icon: <FaBookOpen />, title: "Jadwal Ujian", desc: "Tidak terjadi bentrok." },
      { icon: <FaClock />, title: "Pengingat Otomatis", desc: "Notifikasi agenda penting." },
    ],
  },
  {
    title: "Rapor & Rekapitulasi",
    description: "Pelaporan hasil belajar yang cepat dan aman.",
    image: s5,
    imageWidth: "max-w-[1000px]",
    imageTranslateX: "lg:translate-x-5",
    imageTranslateY: "",
    items: [
      { icon: <FaFileAlt />, title: "Rapor Digital", desc: "Akses rapor online." },
      { icon: <FaClipboardList />, title: "Rekap Nilai", desc: "Rekap nilai otomatis." },
      { icon: <FaChartLine />, title: "Analisis Prestasi", desc: "Pantau perkembangan siswa." },
    ],
  },
];

/* ================= COMPONENT ================= */
export default function SlideshowSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#ECFBF4] overflow-hidden">

      {/* NAVIGATION */}
      <div className="swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-40 cursor-pointer">
        <FaChevronLeft className="text-4xl text-[#33B77E]" />
      </div>
      <div className="swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-40 cursor-pointer">
        <FaChevronRight className="text-4xl text-[#33B77E]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6"
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
          loop
          className="pb-20"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* HEADER */}
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#33B77E] mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {slide.description}
                </p>
              </div>

              {/* CONTENT */}
              <div
                className={`flex flex-col lg:flex-row items-center gap- ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* TEXT */}
                <div className="flex-1 space-y-8">
                  {slide.items.map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-16 h-16 rounded-full bg-[#E6FAF1]
                        flex items-center justify-center text-[#33B77E]
                        text-2xl shadow-md">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* IMAGE */}
                <div className="flex-1 flex justify-center relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`
                      w-full object-contain transition-transform duration-500
                      ${slide.imageWidth}
                      ${slide.imageTranslateX}
                      ${slide.imageTranslateY}
                    `}
                    style={{
                      filter:
                        "drop-shadow(0px 25px 70px rgba(0,0,0,0.15))",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
