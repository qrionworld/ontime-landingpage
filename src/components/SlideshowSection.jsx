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
        desc: "Pencatatan kehadiran tanpa manual, langsung terintegrasi dengan sistem." 
      },
      { 
        icon: <FaClipboardList />, 
        title: "Rekap Otomatis", 
        desc: "Laporan kehadiran tersedia secara real-time dan akurat." 
      },
      { 
        icon: <FaChartLine />, 
        title: "Laporan Kehadiran", 
        desc: "Analisis data kehadiran siswa dan guru secara berkala." 
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
        desc: "Buat dan kelola jadwal piket guru dengan mudah dan fleksibel." 
      },
      { 
        icon: <FaClock />, 
        title: "Monitoring Kehadiran", 
        desc: "Pastikan guru piket hadir sesuai jadwal yang ditentukan." 
      },
      { 
        icon: <FaSearch />, 
        title: "Evaluasi Kinerja", 
        desc: "Pantau dan evaluasi kinerja guru piket secara berkala." 
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
        desc: "Kelola semua agenda dan kegiatan akademik dalam satu platform." 
      },
      { 
        icon: <FaBookOpen />, 
        title: "Jadwal Ujian", 
        desc: "Atur jadwal ujian dan ulangan untuk menghindari bentrokan." 
      },
      { 
        icon: <FaClock />, 
        title: "Pengingat Otomatis", 
        desc: "Dapatkan notifikasi untuk setiap agenda penting sekolah." 
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
        desc: "Akses rapor siswa secara online dengan keamanan terjamin." 
      },
      { 
        icon: <FaClipboardList />, 
        title: "Rekap Nilai", 
        desc: "Sistem otomatis merekap nilai dari semua mata pelajaran." 
      },
      { 
        icon: <FaChartLine />, 
        title: "Analisis Prestasi", 
        desc: "Monitor perkembangan akademik siswa dengan grafik dan statistik." 
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
          showLeftGradient ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div 
        className={`absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#33B77E]/25 via-[#33B77E]/10 to-transparent pointer-events-none z-30 transition-opacity duration-300 ${
          showRightGradient ? 'opacity-100' : 'opacity-0'
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
        className="max-w-[1400px] mx-auto px-8 lg:px-12"
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active'
          }}
          navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
          loop
          className="pb-20"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* HEADER */}
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#33B77E] mb-3">
                  {slide.title}
                </h2>
                <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* CONTENT - Alternating Layout */}
              <div
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* TEXT */}
                <div className="flex-1 space-y-6">
                  {slide.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        {item.icon}
                      </div>
                      <div className="flex-1 pt-1">
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

                {/* IMAGE */}
                <div className="flex-1 flex justify-center relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full object-contain transition-transform duration-500"
                    style={{
                      filter: "drop-shadow(0px 20px 50px rgba(0,0,0,0.12))",
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