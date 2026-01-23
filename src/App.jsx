import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import BerandaSection from "./components/BerandaSection";
import SekolahSection from "./components/SekolahSection";
import ManfaatSection from "./components/ManfaatSection";
import ManajementSection from "./components/ManajementSection";
import SlideshowSection from "./components/SlideshowSection";
import TerigrasiQrion from "./components/TerigrasiQrion";
import Kebutuhan from "./components/Kebutuhan";
import Testimoni from "./components/Testimoni";
import PricingPackages from "./components/PricingPackages";
import FreeTrialCTA from "./components/FreeTrialCTA";

import CustomCursor from "./components/CustomCursor";

import Login from "./pages/Login";
import Register from "./pages/Register";
import OtpPage from "./pages/OtpPage";  
import DashboardHome from "./pages/DashboardHome";

function App() {
  return (
    <>
      <CustomCursor />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Header />
              <BerandaSection />
              <SekolahSection />
              <ManfaatSection />
              <ManajementSection />
              <SlideshowSection />
              <TerigrasiQrion />
              <Kebutuhan />
              <Testimoni />
              <PricingPackages />
              <FreeTrialCTA />
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
    </>
  );
}


export default App;
