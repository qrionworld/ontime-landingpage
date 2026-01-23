import DashboardNavbar from "../partials/DashboardNavbar";
import DashboardSidebar from "../partials/DashboardSidebar";
import DashboardFooter from "../partials/DashboardFooter";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Content Area */}
      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <DashboardNavbar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

        {/* Footer */}
        <DashboardFooter />

      </div>
    </div>
  );
}
