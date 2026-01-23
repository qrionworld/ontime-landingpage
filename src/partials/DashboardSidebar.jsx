import { Link } from "react-router-dom";

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-6 fixed">
      <h2 className="text-xl font-bold mb-8 text-[#33B77E]">
        ONTUITION
      </h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="text-gray-700 hover:text-[#33B77E]">
          Dashboard
        </Link>
        <Link to="/dashboard/profile" className="text-gray-700 hover:text-[#33B77E]">
          Profile
        </Link>
        <Link to="/dashboard/settings" className="text-gray-700 hover:text-[#33B77E]">
          Pengaturan
        </Link>
      </nav>
    </aside>
  );
}
