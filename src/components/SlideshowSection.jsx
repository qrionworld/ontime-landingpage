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
import "../SlideshowSection.css";

/* ================= SLIDE DATA ================= */
const slides = [
  {
    title: "Real-Time Monitoring",
    description:
      "Pantau aktivitas kehadiran dan belajar mengajar di sekolah anda lewat real-time dashboard",
    image: s1,
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
    items: [
      {
        icon: <FaUserCheck />,
        title: "Absensi Digital",
        desc: "Pencatatan kehadiran tanpa manual, langsung terintegrasi dengan sistem.",
      },
      {
        icon: <FaClipboardList />,
        title: "Rekap Otomatis",
        desc: "Laporan kehadiran tersedia secara real-time dan akurat.",
      },
      {
        icon: <FaChartLine />,
        title: "Laporan Kehadiran",
        desc: "Analisis data kehadiran siswa dan guru secara berkala.",
      },
    ],
  },
  {
    title: "Manajemen Guru Piket",
    description: "Atur dan pantau tugas guru piket secara optimal.",
    image: s3,
    items: [
      {
        icon: <FaUsersCog />,
        title: "Jadwal Piket",
        desc: "Buat dan kelola jadwal piket guru dengan mudah dan fleksibel.",
      },
      {
        icon: <FaClock />,
        title: "Monitoring Kehadiran",
        desc: "Pastikan guru piket hadir sesuai jadwal yang ditentukan.",
      },
      {
        icon: <FaSearch />,
        title: "Evaluasi Kinerja",
        desc: "Pantau dan evaluasi kinerja guru piket secara berkala.",
      },
    ],
  },
  {
    title: "Kalender Akademik",
    description: "Kelola agenda akademik sekolah secara terstruktur.",
    image: s4,
    items: [
      {
        icon: <FaCalendarAlt />,
        title: "Agenda Sekolah",
        desc: "Kelola semua agenda dan kegiatan akademik dalam satu platform.",
      },
      {
        icon: <FaBookOpen />,
        title: "Jadwal Ujian",
        desc: "Atur jadwal ujian dan ulangan untuk menghindari bentrokan.",
      },
      {
        icon: <FaClock />,
        title: "Pengingat Otomatis",
        desc: "Dapatkan notifikasi untuk setiap agenda penting sekolah.",
      },
    ],
  },
  {
    title: "Rapor & Rekapitulasi",
    description: "Pelaporan hasil belajar yang cepat dan aman.",
    image: s5,
    items: [
      {
        icon: <FaFileAlt />,
        title: "Rapor Digital",
        desc: "Akses rapor siswa secara online dengan keamanan terjamin.",
      },
      {
        icon: <FaClipboardList />,
        title: "Rekap Nilai",
        desc: "Sistem otomatis merekap nilai dari semua mata pelajaran.",
      },
      {
        icon: <FaChartLine />,
        title: "Analisis Prestasi",
        desc: "Monitor perkembangan akademik siswa dengan grafik dan statistik.",
      },
    ],
  },
];

/* ================= COMPONENT ================= */
export default function SlideshowSection() {
  const [showLeftGradient, setShowLeftGradient] = React.useState(false);
  const [showRightGradient, setShowRightGradient] = React.useState(false);
  const sectionRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const mouseX = e.clientX - sectionRect.left;
    const sectionWidth = sectionRect.width;

    // Show gradient when cursor is within 150px from left edge
    if (mouseX < 150) {
      setShowLeftGradient(true);
    } else {
      setShowLeftGradient(false);
    }

    // Show gradient when cursor is within 150px from right edge
    if (mouseX > sectionWidth - 150) {
      setShowRightGradient(true);
    } else {
      setShowRightGradient(false);
    }
  };

  const handleMouseLeave = () => {
    setShowLeftGradient(false);
    setShowRightGradient(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* GRADIENT OVERLAYS - Inside section only */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#33B77E]/25 via-[#33B77E]/10 to-transparent pointer-events-none z-30 transition-opacity duration-300 ${
          showLeftGradient ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#33B77E]/25 via-[#33B77E]/10 to-transparent pointer-events-none z-30 transition-opacity duration-300 ${
          showRightGradient ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* NAVIGATION */}
      <div className="swiper-prev absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 cursor-pointer hover:scale-110 transition-transform duration-300">
        <FaChevronLeft className="text-3xl lg:text-4xl text-[#33B77E]" />
      </div>
      <div className="swiper-next absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 cursor-pointer hover:scale-110 transition-transform duration-300">
        <FaChevronRight className="text-3xl lg:text-4xl text-[#33B77E]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-[1600px] mx-auto px-4 lg:px-6"
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
          loop
          className="pb-20"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* HEADER */}
              <div className="text-center mb-40 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#33B77E] mb-3">
                  {slide.title}
                </h2>
                <p
                  className="text-base lg:text-lg text-gray-700max-w-5xl  mx-auto whitespace-nowrap"
                >
                  {slide.description}
                </p>
              </div>

              {/* CONTENT - MAIN GRID dengan RELATIVE position */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative">
                {/* TEXT COLUMN - z-index lebih tinggi */}
                <div
                  className={`relative z-10 ${
                    index % 2 === 0
                      ? "lg:order-2" // Slide ganjil (0,2,4): text di kiri
                      : "lg:order-2" // Slide genap (1,3): text di kanan
                  }`}
                >
                  {/* GRID untuk text items */}
                  <div className="grid grid-cols-1 gap-6 px-4 lg:px-8">
                    {slide.items.map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[auto_1fr] gap-5 items-start"
                      >
                        {/* Icon Column */}
                        <div className="w-16 h-16 rounded-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                          {item.icon}
                        </div>
                        {/* Text Column */}
                        <div className="pt-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-base text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* IMAGE COLUMN - z-index lebih tinggi */}
                <div
                  className={`overflow-visible relative z-10 ${
                    index % 2 === 0
                      ? "lg:order-2" // Slide ganjil (0,2,4): gambar di kanan
                      : "lg:order-1" // Slide genap (1,3): gambar di kiri
                  }`}
                >
                  {/* GRADASI WARNA BESAR - z-index paling rendah, center di image column */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(circle,
                          rgba(51, 183, 126, 0.55) 0%,
                          rgba(184, 230, 213, 0.45) 25%,
                          rgba(184, 230, 213, 0.25) 45%,
                          rgba(184, 230, 213, 0.12) 65%,
                          transparent 75%
                        )
                      `,
                      width: "900px",
                      height: "900px",
                      filter: "blur(60px)",
                      zIndex: -1,
                    }}
                  />

                  {/* GRID untuk center image */}
                  <div className="grid place-items-center h-full relative">
                    {/* IMAGE */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto object-contain transition-transform duration-500"
                      style={{
                        filter: "drop-shadow(0px 20px 50px rgba(0,0,0,0.12))",
                        transform: "scale(1.15)",
                        maxWidth: "600px",
                        maxHeight: "500px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
