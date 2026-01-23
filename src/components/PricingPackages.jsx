// src/components/PricingPackages.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import BlurBg from "../assets/blur.png";

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

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto -mt-20 text-center">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          }}
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
                  ${plan === p
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
                delayChildren: 0.9, // jeda setelah header
                staggerChildren: 0.9, // jeda antar card
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {pricing[plan].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                },
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
              {/* HEADER CARD */}
              <div className="flex items-center justify-between mb-5">
                <span className="bg-[#33B77E] text-white px-6 py-2 rounded-xl font-bold">
                  {item.tier}
                </span>
                <span className="bg-[#DFF5EA] text-[#33B77E] px-4 py-2 rounded-xl font-semibold">
                  {item.range}
                </span>
              </div>

              {/* PRICE */}
              <div className="text-3xl font-bold text-[#33B77E] mb-8">
                Rp{item.price}/Bulan
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 text-gray-700 mb-10">
                <li>• Lorem Ipsum sit dolor amet</li>
                <li>• Lorem Ipsum sit dolor amet</li>
                <li>• Lorem Ipsum sit dolor amet</li>
                <li>• Lorem Ipsum sit dolor amet</li>
              </ul>

              {/* BUTTON */}
              <button className="w-full border-2 border-[#33B77E] text-[#33B77E] py-4 rounded-xl font-bold hover:bg-[#33B77E] hover:text-white transition">
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
