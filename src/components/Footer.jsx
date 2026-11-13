
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { hospital } from "../data/siteData";

import logo from "../assets/logo3.jpg";

// Social media icons
function SocialIcon({ type }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  };

  if (type === "facebook") {
    return (
      <svg {...common}>
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg {...common}>
        <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M19 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 9h3v12H5V9Zm1.5-6a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM11 9h2.9v1.6h.1A3.2 3.2 0 0 1 17 8.8c3.2 0 3.8 2.1 3.8 4.8V21h-3v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21h-3V9Z" />
    </svg>
  );
}

const socials = [
  {
    label: "Facebook",
    type: "facebook",
    url: "https://www.facebook.com/",
  },
  {
    label: "Instagram",
    type: "instagram",
    url: "https://www.instagram.com/",
  },
  {
    label: "YouTube",
    type: "youtube",
    url: "https://www.youtube.com/",
  },
  {
    label: "LinkedIn",
    type: "linkedin",
    url: "https://www.linkedin.com/",
  },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Specialties", path: "/specialities" },
  { label: "Our Technology", path: "/technology" },
  { label: "Our Doctors", path: "/doctors" },
  { label: "Patient Support", path: "/patient-care" },
  { label: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  {
    label: "Cancer Types",
    path: "/services/cancer-types",
  },
  {
    label: "Screening & Diagnostics",
    path: "/services/screening-diagnostics",
  },
  {
    label: "Cancer Treatments",
    path: "/services/treatments",
  },
  {
    label: "Second Opinion",
    path: "/services/second-opinion",
  },
];

const libraryLinks = [
  {
    label: "Blogs",
    path: "/health-library/blogs",
  },
  {
    label: "Videos & FAQs",
    path: "/health-library/videos-faqs",
  },
];

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: "#2F4638",
        color: "#ffffff",
      }}
    >
      {/* MAIN FOOTER */}
      <div className="page-container px-5 pt-10 pb-8 sm:px-8 sm:pt-12 lg:px-10 2xl:px-12">

        {/* FIVE COLUMNS */}
        {/* <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 xl:grid-cols-[30%_16%_16%_16%_22%] xl:gap-x-0"> */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 xl:grid-cols-[30%_20%_20%_30%] xl:gap-x-0">


          {/* COLUMN 1 - LOGO AND DESCRIPTION */}
          {/* <div className="min-w-0"> */}
          <div className="min-w-0 xl:pr-8">

            <Link
              to="/"
              className="inline-flex items-center"
            >
              <img
                src={logo}
                alt={`${hospital.name} ${hospital.nameLine2}`}
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-[16px] leading-7 text-white sm:text-[17px]">
              RENOVA Cancer Hospital is dedicated to comprehensive cancer care, bringing together specialist expertise,
               advanced diagnostic and treatment approaches,
               personalised care planning and compassionate support throughout every stage of the cancer journey.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-5 flex flex-wrap items-center gap-3">

              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition duration-200 hover:border-[#F0B08A] hover:bg-[#F0B08A] hover:text-[#2F4638]"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}

            </div>

          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          {/* <div className="min-w-0"> */}
        <div className="min-w-0 xl:px-3">

            <h3 className="mb-5 text-[20px] font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-[17px] leading-7 text-white transition-colors duration-200 hover:text-[#F0B08A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          
{/* COLUMN 3 - SERVICES AND HEALTH LIBRARY */}
<div className="min-w-0 xl:px-3">

  {/* SERVICES */}
  <h3 className="mb-5 text-[20px] font-semibold text-white">
    Services
  </h3>

  <ul className="space-y-3">
    {serviceLinks.map((item) => (
      <li key={item.label}>
        <Link
          to={item.path}
          className="text-[17px] leading-7 text-white transition-colors duration-200 hover:text-[#F0B08A]"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>

  {/* HEALTH LIBRARY */}
  <h3 className="mb-5 mt-8 text-[20px] font-semibold text-white">
    Health Library
  </h3>

  <ul className="space-y-3">
    {libraryLinks.map((item) => (
      <li key={item.label}>
        <Link
          to={item.path}
          className="text-[17px] leading-7 text-white transition-colors duration-200 hover:text-[#F0B08A]"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>

</div>


          {/* COLUMN 4 - CONTACT US */}
          {/* <div className="min-w-0"> */}
          <div className="min-w-0 xl:pl-5">

            <h3 className="mb-5 text-[20px] font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-5 text-[18px] leading-7 text-white">

              {/* LOCATION */}
              <p className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#F0B08A]"
                />

                <span>{hospital.address}</span>
              </p>

              {/* PHONE */}
              <p className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="shrink-0 text-[#F0B08A]"
                />

                <a
                  href={hospital.phoneHref}
                  className="transition hover:text-[#F0B08A]"
                >
                  {hospital.phoneDisplay}
                </a>
              </p>

              {/* EMAIL */}
              <p className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="mt-1 shrink-0 text-[#F0B08A]"
                />

                <a
                  href={`mailto:${hospital.email}`}
                  className="break-all transition hover:text-[#F0B08A]"
                >
                  {hospital.email}
                </a>
              </p>

              {/* WORKING HOURS */}
              <p className="flex items-start gap-3">
                <Clock
                  size={20}
                  className="mt-1 shrink-0 text-[#F0B08A]"
                />

                <span>{hospital.hours}</span>
              </p>

              {/* VIEW LOCATIONS */}
              <Link
                to="/contact#locations"
                className="inline-flex items-center gap-2 font-semibold text-[#F0B08A] transition hover:text-white"
              >
                View Locations
                <ArrowUpRight size={17} />
              </Link>

              {/* BOOK APPOINTMENT */}
              <div className="pt-2">

                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-4 py-3 text-[16px] font-semibold text-white transition duration-200 hover:border-[#F0B08A] hover:bg-[#F0B08A] hover:text-[#2F4638]"
                >
                  Book an Appointment
                  <ArrowUpRight size={17} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="w-full border-t border-white/30">

        <div className="page-container flex flex-col justify-between gap-3 px-5 py-4 text-[15px] leading-7 text-white sm:flex-row sm:px-8 lg:px-12">

          <p>
            © {new Date().getFullYear()} {hospital.name}.
            All rights reserved.
          </p>

          <p>
            Educational information does not replace professional medical advice, diagnosis or treatment. 
            {/* Educational information does not replace
            professional medical advice. */}
          </p>

        </div>

      </div>

    </footer>
  );
}

