import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

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
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <img
          src={logo}
          alt="Ontuition"
          className="h-10 cursor-pointer"
        />

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-10">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              className={`
                text-lg font-medium transition-colors
                ${active === menu.id
                  ? "text-[#33B77E] font-bold"
                  : "text-[#231F20] hover:text-[#33B77E]"
                }
              `}
            >
              {menu.label}
            </a>
          ))}
        </nav>

        {/* BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/register"
            className="px-8 py-2.5 text-lg font-semibold text-[#33B77E] border-2 border-[#33B77E] rounded-full hover:bg-[#33B77E] hover:text-white transition"
          >
            Daftar
          </Link>

          <Link
            to="/login"
            className="px-8 py-2.5 text-lg font-semibold text-white bg-[#33B77E] rounded-full hover:bg-[#2a9a6a] transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
}
