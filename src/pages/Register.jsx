// src/pages/Register.jsx
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // --- Di sini nanti kamu bisa panggil API register ke backend ---
    // Jika sukses, arahkan ke halaman OTP
    navigate("/otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        {/* Judul */}
        <h2 className="text-3xl font-bold text-center mb-6 text-[#33B77E]">
          Daftar Akun Baru
        </h2>

        {/* Form Register */}
        <form className="space-y-5" onSubmit={handleRegister}>
          
          {/* Nama */}
          <div>
            <label className="block font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#33B77E] outline-none"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#33B77E] outline-none"
              placeholder="email@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#33B77E] outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* Tombol Daftar */}
          <button
            type="submit"
            className="w-full py-3 bg-[#33B77E] text-white rounded-xl hover:bg-[#2a9a6a] transition font-semibold"
          >
            Daftar
          </button>
        </form>

        {/* Sudah punya akun */}
        <p className="text-center mt-5">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-[#33B77E] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
