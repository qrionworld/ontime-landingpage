import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpPage() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();

    // Jika OTP benar → diarahkan ke dashboard atau halaman login
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6 text-[#33B77E]">
          Verifikasi OTP
        </h2>

        <p className="text-center text-gray-600 mb-4">
          Masukkan kode OTP yang telah kami kirim ke email Anda
        </p>

        <form className="space-y-5" onSubmit={handleVerify}>
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl text-center tracking-[8px] text-xl focus:ring-2 focus:ring-[#33B77E] outline-none"
            placeholder="------"
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#33B77E] text-white rounded-xl hover:bg-[#2a9a6a] transition font-semibold"
          >
            Verifikasi
          </button>
        </form>

        <button className="mt-4 w-full text-[#33B77E] hover:underline text-sm">
          Kirim ulang OTP
        </button>
      </div>
    </div>
  );
}
