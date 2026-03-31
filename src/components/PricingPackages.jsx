import React, { useState } from "react";
import { motion } from "framer-motion";
import BlurBg from "../assets/blur.png";
import { WhatsAppIcon, BankIcon } from "./icon";

export default function PricingPackages() {
  const [plan, setPlan] = useState("6");

  const pricing = {
    3: [
      { tier: "Tier 1", range: "1 - 500 Siswa", price: "1.500.000" },
      { tier: "Tier 2", range: "501 - 1000 Siswa", price: "2.500.000" },
      
    ],
    6: [
      { tier: "Tier 1", range: "1 - 500 Siswa", price: "9.000.000" },
      { tier: "Tier 2", range: "501 - 1000 Siswa", price: "15.000.000" },
     
    ],
    12: [
      { tier: "Tier 1", range: "1 - 500 Siswa", price: "18.000.000" },
      { tier: "Tier 2", range: "501 - 1000 Siswa", price: "30.000.000" },
    ],
  };

  const addons = [
    {
      title: "Notifikasi ke WA Orang Tua",
      price: "Rp 5.000.000 / Tahun",
      icon: <WhatsAppIcon className="w-6 h-6 text-[#33B77E]" />,
    },
    {
      title: "Integrasi E-Channel",
      desc: "(VA, Transfer Antar Bank, QRIS)",
      price: "Rp 2.000.000 / Instalasi",
      icon: <BankIcon className="w-6 h-6 text-[#33B77E]" />,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            relative pt-24 md:pt-40 pb-16 md:pb-28 mb-10
            flex flex-col items-center justify-center
            bg-gradient-to-b from-white via-[#e9fff3] to-white
            rounded-2xl md:rounded-3xl
          "
          style={{
            backgroundImage: `url(${BlurBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#33B77E] mb-3 md:mb-4">
            Paket dan Harga
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-12">
            Tingkatkan Manajemen Sekolah Anda
            <br className="block md:hidden" />
            <span className="hidden md:inline"> </span>
            dengan Harga Terbaik
          </p>

          {/* TOGGLE */}
          <div className="flex w-full max-w-md border border-[#33B77E] rounded-xl overflow-hidden">
            {["1", "6", "12"].map((p) => (
              <button
                key={p}
                onClick={() => setPlan(p)}
                className={`
                  flex-1 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition
                  ${plan === p ? "bg-[#33B77E] text-white" : "text-[#33B77E]"}
                `}
              >
                {p === "1" ? "3 Bulan" : p === "6" ? "6 Bulan" : "1 Tahun"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ================= PRICING CARDS ================= */}
       <div className="max-w-5xl mx-auto" />
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
          {pricing[plan].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="
                bg-[#F3FFF9]
                border-2 md:border-4 border-[#33B77E]
                rounded-2xl md:rounded-3xl
                p-4 sm:p-6 md:p-8
                text-left shadow-md
                 w-full max-w-sm mx-auto
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <span className="bg-[#33B77E] text-white px-4 py-1.5 rounded-lg text-sm font-bold">
                  {item.tier}
                </span>
                <span className="bg-[#DFF5EA] text-[#33B77E] px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold">
                  {item.range}
                </span>
              </div>

              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#33B77E] mb-6">
                Rp{item.price}
              </div>

              <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-6 md:mb-10">
                <li>• Manajemen Akademik</li>
                <li>• Manajemen Keuangan</li>
                <li>• Absensi & Nilai</li>
                <li>• Support & Update</li>
              </ul>

              <button className="w-full border-2 border-[#33B77E] text-[#33B77E] py-3 rounded-lg text-sm sm:text-base font-bold hover:bg-[#33B77E] hover:text-white transition">
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= ADD-ON ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-10">
            Tingkatkan Produktivitas dengan{" "}
            <span className="text-[#33B77E]">Add-On</span>
          </h3>

          <div className="space-y-4 max-w-3xl mx-auto">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="
        flex items-start gap-3
        border-2 md:border-4 border-[#33B77E]
        rounded-xl md:rounded-2xl
        px-4 sm:px-6 py-4
        bg-white shadow-sm
      "
              >
                {/* ICON */}
                <div className="mt-1">{addon.icon}</div>

                {/* CONTENT */}
                <div className="text-left flex-1">
                  <h4 className="text-sm sm:text-base font-bold leading-snug">
                    {addon.title}
                  </h4>

                  {addon.desc && (
                    <p className="text-xs text-gray-500 mt-1">{addon.desc}</p>
                  )}

                  {/* ✅ HARGA SEKARANG DI BAWAH JUDUL */}
                  <p className="mt-2 text-sm sm:text-base font-semibold text-[#33B77E]">
                    {addon.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
