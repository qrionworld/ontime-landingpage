// src/components/CustomSection.jsx
export default function CustomSection() {
  return (
    <section className="py-24 bg-[#E0FBE9]">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* TITLE */}
        <h2 className="text-6xl font-bold text-black mb-6">
          Perlu Kebutuhan Custom <br/> Untuk <span className="text-[#33B77E]">Sekolah Anda?</span>
        </h2>
        <p className="text-2xl text-[#434343] mb-16">
          Hubungi Edutech Konsultan Kami
        </p>

        {/* TWO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
            <h3 className="text-5xl font-bold text-[#33B77E] mb-6">Custom</h3>
            <p className="text-xl text-[#434343] mb-12">
              Solusi yang disesuaikan, direncanakan untuk kebutuhan spesifik sekolah anda
            </p>
            <button
              className="
                mt-24
                bg-[#33B77E] text-white px-12 py-6 rounded-full 
                text-2xl font-bold flex items-center justify-center gap-4 mx-auto
                transition-all duration-300 hover:bg-[#2a9a6a] hover:scale-[1.03]
              "
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WA"
                className="w-10 h-10"
              />
              Konsultasi Gratis
            </button>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
            <h3 className="text-5xl font-bold text-[#33B77E] mb-6">QRION Ekosistem</h3>
            <p className="text-xl text-[#434343] mb-12">
              Versi terlengkap QRION (Oncard, Ontuition, Ontime, Onclass)
            </p>

            <button className="
              bg-[#33B77E] text-white px-12 py-6 rounded-full 
              text-2xl font-bold flex items-center justify-center gap-4 mx-auto
              transition-all duration-300 hover:bg-[#2a9a6a] hover:scale-[1.03]
            ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WA"
                className="w-10 h-10"
              />
              Konsultasi Gratis
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
