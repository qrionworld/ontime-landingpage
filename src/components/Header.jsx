import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Icon Ontime.png";

const menus = [
  { label: "Beranda", id: "beranda" },
  { label: "Mitra", id: "mitra" },
  { label: "Fitur", id: "fitur" },
  { label: "Testimoni", id: "testimoni" },
  { label: "Harga", id: "harga" },
  { label: "FAQ", id: "faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("beranda");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      menus.forEach((menu) => {
        const section = document.getElementById(menu.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(menu.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <img src={logo} alt="Ontuition" className="h-12 md:h-14 cursor-pointer" />

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              className={`text-lg font-medium transition-colors ${
                active === menu.id
                  ? "text-[#33B77E] font-bold"
                  : "text-[#231F20] hover:text-[#33B77E]"
              }`}
            >
              {menu.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/register"
            className="px-7 py-2.5 text-lg font-semibold text-[#33B77E] border-2 border-[#33B77E] rounded-full hover:bg-[#33B77E] hover:text-white transition"
          >
            Daftar
          </Link>

          <Link
            to="/login"
            className="px-7 py-2.5 text-lg font-semibold text-white bg-[#33B77E] rounded-full hover:bg-[#2a9a6a] transition"
          >
            Log in
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-3xl text-[#231F20]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] py-4" : "max-h-0"
        } bg-white/95 backdrop-blur-xl shadow-md`}
      >
        <div className="flex flex-col items-center gap-4">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              onClick={() => setOpen(false)}
              className={`text-base font-medium ${
                active === menu.id
                  ? "text-[#33B77E] font-semibold"
                  : "text-[#231F20]"
              }`}
            >
              {menu.label}
            </a>
          ))}

          <Link
            to="/register"
            className="w-40 text-center px-6 py-2 text-[#33B77E] border border-[#33B77E] rounded-full font-medium"
          >
            Daftar
          </Link>

          <Link
            to="/login"
            className="w-40 text-center px-6 py-2 bg-[#33B77E] text-white rounded-full font-medium"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
}