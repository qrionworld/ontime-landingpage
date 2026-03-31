import React from "react";
import { motion } from "framer-motion";

export default function EcosystemSection() {
  return (
    <section className="relative pt-14 md:pt-24 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 class="text-2xl font-bold text-[#33B77E] mb-6">
            Ciptakan Ekosistem Sekolah yang <br className="hidden md:block" />
            Sinergis dan Produktif
          </h2>

          <p className="text-sm md:text-xl text-[#434343] max-w-3xl mx-auto leading-relaxed">
            Optimalkan manajemen absensi siswa dan guru sekolah anda. Beralih ke
            sistem monitoring absensi real-time dan terintegrasi.
          </p>
        </motion.div>

        {/* GRID CARD */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10"
        >
          {/* CARD 1 */}
          <Card>
            <h3 className="text-lg md:text-2xl font-bold text-[#33B77E] mb-1">
              Kepala Sekolah
            </h3>
            <p className="text-xs md:text-base text-[#434343] mb-3 md:mb-6">
              Monitor Kualitas Sekolah dalam Genggaman
            </p>

            <CardContent>
              <li>
                <span className="font-bold">Executive Dashboard:</span>
                <p className="mt-1 ml-6 text-xs md:text-base">
                  Grafik statistik kehadiran siswa & guru.
                </p>
              </li>

              <li>
                <span className="font-bold">Laporan Kinerja Objektif:</span>
                <p className="mt-1 ml-6 text-xs md:text-base">
                  Data valid untuk evaluasi strategis.
                </p>
              </li>

              <li>
                <span className="font-bold">Pengawasan Terpusat:</span>
                <p className="mt-1 ml-6 text-xs md:text-base">
                  Pantau aktivitas sekolah tanpa harus berkeliling.
                </p>
              </li>
            </CardContent>
          </Card>

          {/* CARD 2 */}
          <Card>
            <h3 className="text-lg md:text-2xl font-bold text-[#33B77E] mb-1">
              Guru & Staff
            </h3>
            <p className="text-xs md:text-base text-[#434343] mb-3 md:mb-6">
              Hentikan Lembur Administrasi, Kembali Fokus Mengajar
            </p>

            <CardContent>
              <li>
                <span className="font-bold">Auto-Rekapitulasi:</span>
                <p className="mt-1 ml-6 text-xs md:text-base">
                  Sistem menghitung kehadiran otomatis.
                </p>
              </li>

              <li>
                <span className="font-bold">Laporan PDF Siap Cetak:</span>
                <p className="mt-1 ml-6 text-xs md:text-base">
                  Unduh laporan resmi sekolah sekali klik.
                </p>
              </li>

              <li>
                <span className="font-bold">Manajemen Piket Digital:</span>
                <p className="mt-1 ml-6 text-xs md:text-base">
                  Kelola jadwal piket via aplikasi.
                </p>
              </li>
            </CardContent>
          </Card>

          {/* CARD 3 */}
          <Card>
            <h3 className="text-lg md:text-2xl font-bold text-[#33B77E] mb-1">
              Orang Tua Siswa
            </h3>
            <p className="text-xs md:text-base text-[#434343] mb-3 md:mb-6">
              Rasa Aman & Monitoring Aktivitas Anak
            </p>

            <CardContent>
              <li>
                <span className="font-bold">Notifikasi WA Real-Time:</span>
                <p className="mt-1 ml-6 text-xs md:text-base">
                  Update otomatis saat anak check-in/check-out.
                </p>
              </li>

              <li>
                <span className="font-bold">Riwayat Kehadiran:</span>
                <p className="mt-1 ml-6 text-xs md:text-base">
                  Pantau kehadiran anak langsung dari HP.
                </p>
              </li>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

/* CARD WRAPPER */
function Card({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        },
      }}
      className="border-4 border-[#33B77E] rounded-2xl p-4 md:p-8 bg-white"
    >
      {children}
    </motion.div>
  );
}

/* CARD CONTENT */
function CardContent({ children }) {
  return (
    <ul className="space-y-3 md:space-y-6 text-[#434343] list-disc list-inside">
      {children}
    </ul>
  );
}
