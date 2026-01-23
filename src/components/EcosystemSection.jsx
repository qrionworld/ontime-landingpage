import React from "react";
import { motion } from "framer-motion";

export default function EcosystemSection() {
  return (
    <section className="relative pt-24 pb-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto ">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-[#33B77E] mb-6">
            Ciptakan Ekosistem Sekolah yang <br /> Sinergis dan Produktif
          </h2>
          <p className="text-xl text-[#434343] max-w-3xl mx-auto">
            Optimalkan manajemen absensi siswa dan guru sekolah anda. Beralih
            ke sistem monitoring absensi real-time dan terintegrasi
          </p>
        </motion.div>

        {/* ================= CARD GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8, // ⏱️ jeda setelah header
                staggerChildren: 0.45, // satu-satu dari kiri
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >

          {/* CARD 1 */}
          <Card>
            <h3 className="text-2xl font-bold text-[#33B77E] mb-2">
              Kepala Sekolah
            </h3>
            <p className="text-[#434343] mb-6">
              Monitor Kualitas Sekolah dalam Genggaman
            </p>

            <CardContent>
              <li>
                <span className="font-bold">Executive Dashboard:</span>
                <p className="mt-2 ml-6">
                  Grafik statistik kehadiran siswa & guru yang bisa diakses
                  kapan saja.
                </p>
              </li>

              <li>
                <span className="font-bold">Laporan Kinerja Objektif:</span>
                <p className="mt-2 ml-6">
                  Data valid untuk evaluasi dan pengambilan kebijakan strategis.
                </p>
              </li>

              <li>
                <span className="font-bold">Pengawasan Terpusat:</span>
                <p className="mt-2 ml-6">
                  Pantau aktivitas sekolah tanpa harus berkeliling.
                </p>
              </li>
            </CardContent>
          </Card>

          {/* CARD 2 */}
          <Card>
            <h3 className="text-2xl font-bold text-[#33B77E] mb-2">
              Guru & Staff
            </h3>
            <p className="text-[#434343] mb-6">
              Hentikan Lembur Administrasi, Kembali Fokus Mengajar
            </p>

            <CardContent>
              <li>
                <span className="font-bold">Auto-Rekapitulasi:</span>
                <p className="mt-2 ml-6">
                  Sistem menghitung kehadiran secara otomatis.
                </p>
              </li>

              <li>
                <span className="font-bold">Laporan Siap Cetak (PDF):</span>
                <p className="mt-2 ml-6">
                  Unduh laporan resmi sekolah dengan sekali klik.
                </p>
              </li>

              <li>
                <span className="font-bold">Manajemen Piket Digital:</span>
                <p className="mt-2 ml-6">
                  Kelola jadwal piket langsung dari aplikasi.
                </p>
              </li>
            </CardContent>
          </Card>

          {/* CARD 3 */}
          <Card>
            <h3 className="text-2xl font-bold text-[#33B77E] mb-2">
              Orang Tua Siswa
            </h3>
            <p className="text-[#434343] mb-6">
              Rasa Aman & Monitoring Aktivitas Anak
            </p>

            <CardContent>
              <li>
                <span className="font-bold">
                  Notifikasi WhatsApp Real-Time:
                </span>
                <p className="mt-2 ml-6">
                  Terima update otomatis saat anak check-in & check-out.
                </p>
              </li>

              <li>
                <span className="font-bold">
                  Riwayat Kehadiran Transparan:
                </span>
                <p className="mt-2 ml-6">
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

/* ================= CARD ================= */
function Card({ children }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 60,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
      }}
      className="border-4 border-[#33B77E] rounded-2xl p-8 bg-white"
    >
      {children}
    </motion.div>
  );
}

/* ================= CARD CONTENT ================= */
function CardContent({ children }) {
  return (
    <ul className="space-y-6 text-[#434343] list-disc list-inside">
      {children}
    </ul>
  );
}
