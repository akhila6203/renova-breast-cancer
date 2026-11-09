import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import {
  HomePage,
  AboutPage,
  // ServicesPage,
  // ServiceDetailPage,
  // TeamPage,
  // BreastCancerPage,
  PatientCarePage,
  // BlogsPage,
  ContactPage,
  AppointmentsPage,
  NotFoundPage,
} from "./pages/Pages";
import PatientCareDetailPage from "./pages/PatientCareDetailPage";

import DoctorsPage from "./pages/DoctorsPage";
import DoctorDetailsPage from "./pages/DoctorDetailsPage";
import SpecialitiesPage from "./pages/SpecialitiesPage";
import SpecialityDetailPage from "./pages/SpecialityDetailPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);

      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route path="/services/:slug" element={<ServiceDetailPage />} /> */}
        {/* <Route path="/our-team" element={<TeamPage />} /> */}
        {/* <Route path="/breast-cancer" element={<BreastCancerPage />} /> */}
        {/* <Route path="/blogs" element={<BlogsPage />} /> */}
        <Route path="/patient-care" element={<PatientCarePage />} />\
        <Route
          path="/patient-care/:programme"
          element={<PatientCareDetailPage />}
        />

        <Route path="/specialities" element={<SpecialitiesPage />} />
        <Route path="/specialities/:slug" element={<SpecialityDetailPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:slug" element={<DoctorDetailsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <FloatingActions />
    </>
  );
}
