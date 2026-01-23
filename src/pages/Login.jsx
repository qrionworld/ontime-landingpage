// src/pages/Login.jsx
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Setelah login berhasil
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#33B77E]">
          Masuk ke OnTime
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#33B77E] outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#33B77E] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#33B77E] text-white rounded-xl hover:bg-[#2a9a6a] transition font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5">
          Belum punya akun?{" "}
          <Link to="/register" className="text-[#33B77E] font-semibold">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
