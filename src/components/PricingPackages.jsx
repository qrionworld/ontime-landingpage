import React, { useState } from "react";
import { motion } from "framer-motion";
import BlurBg from "../assets/blur.png";
import { WhatsAppIcon, BankIcon } from "./icon";


export default function PricingPackages() {
  const [plan, setPlan] = useState("6");

  const pricing = {
    "3": [
      { tier: "Tier 1", range: "1 - 300 Siswa", price: "295.000" },
      { tier: "Tier 2", range: "301 - 600 Siswa", price: "489.000" },
      { tier: "Tier 3", range: "601 - 900 Siswa", price: "579.000" },
    ],
    "6": [
      { tier: "Tier 1", range: "1 - 300 Siswa", price: "275.000" },
      { tier: "Tier 2", range: "301 - 600 Siswa", price: "459.000" },
      { tier: "Tier 3", range: "601 - 900 Siswa", price: "549.000" },
    ],
    "12": [
      { tier: "Tier 1", range: "1 - 300 Siswa", price: "249.000" },
      { tier: "Tier 2", range: "301 - 600 Siswa", price: "449.000" },
      { tier: "Tier 3", range: "601 - 900 Siswa", price: "529.000" },
    ],
  };

  const addons = [
  {
    title: "Notifikasi ke WA Orang Tua",
    price: "Rp 5.000.000 / Tahun",
    icon: <WhatsAppIcon className="w-7 h-7 text-[#33B77E]" />,
  },
  {
    title: "Integrasi E-Channel",
    desc: "(VA, Transfer Antar Bank, QRIS)",
    price: "Rp 2.000.000 / Instalasi",
    icon: <BankIcon className="w-7 h-7 text-[#33B77E]" />,
  },
];


  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto -mt-20 text-center">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative pt-60 pb-40 mb-10 flex flex-col items-center justify-center
            bg-gradient-to-b from-white via-[#e9fff3] to-white rounded-3xl
          "
          style={{
            backgroundImage: `url(${BlurBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-5xl font-bold text-[#33B77E] mb-4">
            Paket dan Harga
          </h2>

          <p className="text-lg text-gray-700 mb-12">
            Tingkatkan Manajemen Sekolah Anda dengan Harga Terbaik
          </p>

          {/* TOGGLE */}
          <div className="inline-flex border-2 border-[#33B77E] rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm">
            {["3", "6", "12"].map((p) => (
              <button
                key={p}
                onClick={() => setPlan(p)}
                className={`px-10 py-3 font-semibold transition
                  ${
                    plan === p
                      ? "bg-[#33B77E] text-white"
                      : "text-[#33B77E] bg-transparent"
                  }
                `}
              >
                {p === "3" ? "3 Bulan" : p === "6" ? "6 Bulan" : "1 Tahun"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ================= PRICING CARDS ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.9,
                staggerChildren: 0.9,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {pricing[plan].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                    mass: 0.9,
                  },
                },
              }}
              className="bg-[#F3FFF9] border-4 border-[#33B77E] rounded-3xl -mt-20 p-11 text-left shadow-lg"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="bg-[#33B77E] text-white px-6 py-2 rounded-xl font-bold">
                  {item.tier}
                </span>
                <span className="bg-[#DFF5EA] text-[#33B77E] px-4 py-2 rounded-xl font-semibold">
                  {item.range}
                </span>
              </div>

              <div className="text-3xl font-bold text-[#33B77E] mb-8">
                Rp{item.price}/Bulan
              </div>

              <ul className="space-y-3 text-gray-700 mb-10">
                <li>• Manajemen Akademik</li>
                <li>• Manajemen Keuangan</li>
                <li>• Absensi & Nilai</li>
                <li>• Support & Update</li>
              </ul>

              <button className="w-full border-2 border-[#33B77E] text-[#33B77E] py-4 rounded-xl font-bold hover:bg-[#33B77E] hoverhelp transform hover:text-white transition">
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= ADD-ON ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-28"
        >
          <h3 className="text-3xl font-bold mb-10">
            Tingkatkan Produktivitas dengan{" "}
            <span className="text-[#33B77E]">Add-On</span>
          </h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-between
                  border-4 border-[#33B77E]
                  rounded-2xl px-8 py-6
                  bg-white shadow-md
                "
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 flex items-center justify-center">
                    {addon.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold">
                      {addon.title}
                    </h4>
                    {addon.desc && (
                      <p className="text-sm text-gray-500">
                        {addon.desc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-lg font-bold text-[#33B77E] whitespace-nowrap">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
