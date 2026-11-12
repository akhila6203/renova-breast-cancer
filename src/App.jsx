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

import ServicesHubPage from "./pages/ServicesHubPage";
import CancerTypesPage from "./pages/CancerTypesPage";
import CancerProgramPage from "./pages/CancerProgramPage";
import ScreeningDiagnosticsPage from "./pages/ScreeningDiagnosticsPage";
import ScreeningDiagnosticDetailPage from "./pages/ScreeningDiagnosticDetailPage";
import CancerTreatmentsPage from "./pages/CancerTreatmentsPage";
import CancerTreatmentDetailPage from "./pages/CancerTreatmentDetailPage";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyDetailPage from "./pages/TechnologyDetailPage";
import SecondOpinionPage from "./pages/SecondOpinionPage";

import HealthLibraryPage from "./pages/HealthLibraryPage";
import HealthLibraryCategoryPage from "./pages/HealthLibraryCategoryPage";
import HealthLibraryBlogsPage from "./pages/HealthLibraryBlogsPage";
import HealthLibraryArticlePage from "./pages/HealthLibraryArticlePage";
import HealthLibraryVideosFaqsPage from "./pages/HealthLibraryVideosFaqsPage";

import OurVisionMissionPage from "./pages/OurVisionMissionPage";

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
        <Route
          path="/about/vision-mission"
          element={<OurVisionMissionPage />}
        />
        
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route path="/services/:slug" element={<ServiceDetailPage />} /> */}
        {/* <Route path="/our-team" element={<TeamPage />} /> */}
        {/* <Route path="/breast-cancer" element={<BreastCancerPage />} /> */}
        {/* <Route path="/blogs" element={<BlogsPage />} /> */}
        <Route path="/patient-care" element={<PatientCarePage />} />
        <Route
          path="/patient-care/:programme"
          element={<PatientCareDetailPage />}
        />

        <Route path="/specialities" element={<SpecialitiesPage />} />
        <Route path="/specialities/:slug" element={<SpecialityDetailPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:slug" element={<DoctorDetailsPage />} />

        <Route path="/services" element={<ServicesHubPage />} />
        <Route path="/services/cancer-types" element={<CancerTypesPage />} />
        <Route
          path="/services/cancer/:slug"
          element={<CancerProgramPage />}
        />
        <Route
          path="/services/screening-diagnostics"
          element={<ScreeningDiagnosticsPage />}
        />
        <Route
          path="/services/screening-diagnostics/:slug"
          element={<ScreeningDiagnosticDetailPage />}
        />
        <Route
        path="/services/treatments"
        element={<CancerTreatmentsPage />}
      />
      <Route
        path="/services/treatments/:slug"
        element={<CancerTreatmentDetailPage />}
      />
      <Route
        path="/services/treatments-technology"
        element={<TechnologyPage />}
      />
            {/* OUR TECHNOLOGY */}
      <Route
        path="/technology"
        element={<TechnologyPage />}
      />

      <Route
        path="/technology/:slug"
        element={<TechnologyDetailPage />}
      />
      <Route
        path="/services/second-opinion"
        element={<SecondOpinionPage />}
      />


<Route path="/health-library" element={<HealthLibraryPage />} />
        <Route path="/health-library/blogs" element={<HealthLibraryBlogsPage />} />
        <Route path="/health-library/blogs/:slug" element={<HealthLibraryArticlePage />} />
        <Route path="/health-library/videos-faqs" element={<HealthLibraryVideosFaqsPage />} />
        <Route path="/health-library/:slug" element={<HealthLibraryCategoryPage />} />
        <Route path="/blogs" element={<HealthLibraryBlogsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <FloatingActions />
    </>
  );
}
