// src/components/FAQSection.jsx
import { useState } from "react";

export default function FAQSection() {
  const initialFaqs = [
    {
      q: "Apakah Ontuition cocok untuk semua jenjang sekolah?",
      a: "Ya, Ontuition fleksibel digunakan oleh TK, SD, SMP, SMA, hingga lembaga pendidikan non-formal",
    },
    {
      q: "Apakah data sekolah saya aman?",
      a: "Sangat aman. Kami menggunakan enkripsi tingkat tinggi dan server terpercaya di Indonesia.",
    },
    {
      q: "Apakah saya perlu instal aplikasi di komputer sekolah?",
      a: "Tidak perlu. Ontuition 100% berbasis web, akses dari browser mana saja.",
    },
    {
      q: "Apakah ada biaya setup?",
      a: "Tidak ada biaya setup untuk paket standar. Hanya ada biaya instalasi untuk add-on E-Channel.",
    },
  ];

  const [faqs, setFaqs] = useState(
    initialFaqs.map((faq) => ({ ...faq, open: false }))
  );

  const toggleFaq = (index) => {
    setFaqs((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : faq
      )
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-70xl mx-auto px-8">
        <div
          className="flex flex-col lg:flex-row bg-white rounded-[30px] border border-[#E5E5E5] shadow-xl overflow-hidden"
          style={{ minHeight: "500px" }}
        >
          {/* Pertanyaan di kiri */}
          <div className="flex-1 p-12 space-y-6 bg-white">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#E0E0E0] transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                onClick={() => toggleFaq(i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-[#333]">{faq.q}</h3>
                  <span className="text-3xl font-bold text-[#33B77E]">
                    {faq.open ? "−" : "+"}
                  </span>
                </div>
                {faq.open && (
                  <p className="text-lg text-[#555] mt-4">{faq.a}</p>
                )}
              </div>
            ))}
          </div>

          {/* Judul di kanan */}
          <div className="flex-1 bg-white flex items-center justify-center p-16">
            <h1 className="text-6xl lg:text-9xl font-extrabold leading-tight">
              Pertanyaan <br /> yang <span className="text-[#33B77E]">Sering Diajukan</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
