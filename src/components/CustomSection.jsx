// src/components/CustomSection.jsx
export default function CustomSection() {
  return (
    <section className="py-16 md:py-24 bg-[#E0FBE9]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-black leading-tight mb-4 md:mb-6">
          Perlu Kebutuhan Custom <br className="hidden md:block" />
          Untuk <span className="text-[#33B77E]">Sekolah Anda?</span>
        </h2>

        <p className="text-lg md:text-1xl text-[#434343] mb-10 md:mb-16">
          Hubungi Edutech Konsultan Kami
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl md:shadow-2xl text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-[#33B77E] mb-4 md:mb-6">
              Custom
            </h3>

            <p className="text-base md:text-xl text-[#434343] mb-8 md:mb-12 leading-relaxed">
              Solusi yang disesuaikan, direncanakan untuk kebutuhan spesifik
              sekolah anda
            </p>

            <a
              href="https://wa.wizard.id/3492f6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-24 bg-[#33B77E] text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-2xl font-bold flex items-center justify-center gap-3 md:gap-4 mx-auto transition-all duration-300 hover:bg-[#2a9a6a] hover:scale-[1.03]"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WA"
                className="w-6 h-6 md:w-10 md:h-10"
              />
              Konsultasi Gratis
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl md:shadow-2xl text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-[#33B77E] mb-4 md:mb-6">
              QRION Ekosistem
            </h3>

            <p className="text-base md:text-xl text-[#434343] mb-8 md:mb-12 leading-relaxed">
              Versi terlengkap QRION (Oncard, Ontuition, Ontime, Onclass)
            </p>

            <a
              href="https://wa.wizard.id/3492f6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#33B77E] text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-2xl font-bold flex items-center justify-center gap-3 md:gap-4 mx-auto transition-all duration-300 hover:bg-[#2a9a6a] hover:scale-[1.03]"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WA"
                className="w-6 h-6 md:w-10 md:h-10"
              />
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
