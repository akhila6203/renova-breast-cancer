
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Stethoscope,
  HeartPulse,
  Activity,
  ShieldCheck,
  Microscope,
  Scan,
  Brain,
  Baby,
  HeartHandshake,
  BookOpen,
  PlayCircle,
} from "lucide-react";

import { hospital } from "../data/siteData";
import BrandLogo from "./BrandLogo";

// Actual social media icons using inline SVG.
// This avoids lucide-react brand export errors.
function SocialIcon({ type, size = 16 }) {
  const common = {
    width: size,
    height: size,
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
  { label: "Facebook", type: "facebook", url: "https://www.facebook.com/" },
  { label: "Instagram", type: "instagram", url: "https://www.instagram.com/" },
  { label: "YouTube", type: "youtube", url: "https://www.youtube.com/" },
  { label: "LinkedIn", type: "linkedin", url: "https://www.linkedin.com/" },
];

const specialtyItems = [
  { label: "Medical Oncology", path: "/specialities/medical-oncology", Icon: Stethoscope },
  { label: "Surgical Oncology", path: "/specialities/surgical-oncology", Icon: HeartPulse },
  { label: "Radiation Oncology", path: "/specialities/radiation-oncology", Icon: Activity },
  { label: "Haemato-Oncology", path: "/specialities/haemato-oncology", Icon: Microscope },
  { label: "Gynaecological Oncology", path: "/specialities/gynaecological-oncology", Icon: HeartPulse },
  { label: "Paediatric Oncology", path: "/specialities/paediatric-oncology", Icon: Baby },
  { label: "Neuro-Oncology", path: "/specialities/neuro-oncology", Icon: Brain },
  { label: "Onco-Radiology", path: "/specialities/onco-radiology", Icon: Scan },
  { label: "Nuclear Medicine & Theranostics", path: "/specialities/nuclear-medicine-theranostics", Icon: Microscope },
  { label: "Interventional Oncology", path: "/specialities/interventional-oncology", Icon: Activity },
  { label: "Preventive Oncology", path: "/specialities/preventive-oncology", Icon: ShieldCheck },
  { label: "Palliative & Supportive Care", path: "/specialities/palliative-supportive-care", Icon: HeartHandshake },
];

const navigation = [
  {
    label: "Home",
    path: "/",
  },
  // {
  //   label: "About Us",
  //   path: "/about",
  // },
  {
  label: "About Us",
  path: "/about",
  children: [
    {
      label: "Our Vision & Mission",
      path: "/about/vision-mission",
      Icon: HeartHandshake,
    },
  ],
},
  {
  label: "Specialties",
  path: "/specialities",
  children: specialtyItems,
},
 {
  label: "Our Technology",
  path: "/technology",
},
{
  label: "Services",
  path: "/services",
  children: [
    {
      label: "Cancer Types",
      path: "/services/cancer-types",
    },
    {
      label: "Screening & Diagnostics",
      path: "/services/screening-diagnostics",
    },
    // {
    //   label: "3D Mammography",
    //   path: "/services/screening-diagnostics/3d-mammography",
    // },
    // {
    //   label: "Screening & Early Detection",
    //   path: "/services/screening-diagnostics/screening-early-detection",
    // },
    // {
    //   label: "Diagnosis & Staging",
    //   path: "/services/screening-diagnostics/diagnosis-and-staging",
    // },
    // {
    //   label: "Pathology & Molecular Diagnostics",
    //   path: "/services/screening-diagnostics/pathology-molecular-diagnostics",
    // },
    {
      label: "Cancer Treatments",
      path: "/services/treatments",
    },
    {
      label: "Technology & Equipment",
      path: "/technology",
    },
    {
      label: "Second Opinion",
      path: "/services/second-opinion",
    },
  ],
},


  {
    label: "Our Doctors",
    path: "/doctors",
  },
  {
    label: "Patient Support",
    path: "/patient-care",
    // children: [
    //   { label: "Newly Diagnosed", path: "/patient-care" },
    //   {
    //     label: "Preparing for Your Appointment",
    //     path: "/appointments",
    //   },
    //   { label: "Second Opinion", path: "/patient-care" },
    //   { label: "Nutrition", path: "/patient-care" },
    //   { label: "Psycho-Oncology", path: "/patient-care" },
    //   { label: "Rehabilitation", path: "/patient-care" },
    //   { label: "Pain & Palliative Care", path: "/patient-care" },
    //   { label: "Fertility Support", path: "/patient-care" },
    //   { label: "Caregiver Support", path: "/patient-care" },
    //   { label: "International Patients", path: "/patient-care" },
    //   {
    //     label: "Insurance & Financial Guidance",
    //     path: "/patient-care",
    //   },
    //   { label: "Survivorship", path: "/patient-care" },
    // ],
  },
  
{
  label: "Health Library",
  path: "/health-library",
  children: [
    {
      label: "Blogs",
      path: "/health-library/blogs",
      Icon: BookOpen,
    },
    {
      label: "Videos & FAQs",
      path: "/health-library/videos-faqs",
      Icon: PlayCircle,
    },
  ],
},

  {
    label: "Contact Us",
    path: "/contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const headerRef = useRef(null);
  const closeRef = useRef(null);

  const closeAll = () => {
    setActiveDropdown(null);
    setOpen(false);
  };

  const toggleDropdown = (label) => {
    setActiveDropdown((current) =>
      current === label ? null : label
    );
  };

  // Close dropdown when clicking anywhere outside the header.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, []);

  // Close mobile menu on Escape.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      closeRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
         onMouseLeave={() => setActiveDropdown(null)}
  className="sticky top-0 z-[999] border-b border-line bg-white shadow-sm"
        // className="sticky top-0 z-50 border-b border-line bg-white shadow-sm"
      >
        {/* TOP INFORMATION STRIPn [#08614F] */}
        <div
          className="hidden bg-[#28563a]  lg:block"
        >
          <div className="page-container flex min-h-[44px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">

            {/* LEFT: LOCATION AND PHONE */}
            <div className="flex items-center gap-5 text-[15px] font-semibold text-white">

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-[#F0B08A]"
              >
                <MapPin size={17} />
                Hyderabad, Telangana
              </a>

              <span className="h-5 w-px bg-white/40" />

              <a
                href={hospital.phoneHref}
                className="flex items-center gap-2 transition hover:text-[#F0B08A]"
              >
                <Phone size={16} />
                {hospital.phoneDisplay}
              </a>
            </div>

            {/* RIGHT: SOCIAL ICONS AND EMAIL */}
            <div className="flex items-center gap-5">

              <div className="flex items-center gap-4 text-white">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="transition hover:-translate-y-0.5 hover:text-[#F0B08A]"
                  >
                    <SocialIcon type={social.type} size={18} />
                  </a>
                ))}
              </div>

              <span className="h-5 w-px bg-white/40" />

              <a
                href={`mailto:${hospital.email}`}
                className="flex items-center gap-2 text-[15px] font-semibold text-white transition hover:text-[#F0B08A]"
              >
                <Mail size={17} />
                {hospital.email}
              </a>

            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="bg-white/95 backdrop-blur-md">
          <div className="page-container flex min-h-[76px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

            <BrandLogo onClick={closeAll} compact />

            {/* DESKTOP NAVIGATION */}
            {/* <nav
              className="ml-auto hidden items-center gap-4 2xl:flex"
              aria-label="Main navigation"
            > */}
            <nav
            className="ml-auto hidden items-center gap-4 min-[1300px]:flex xl:gap-5 2xl:gap-6"
              // className="ml-auto hidden items-center gap-3 min-[1300px]:flex xl:gap-3"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                
                <div
  key={item.label}
  // className="relative z-10 flex h-full items-center"
  className="relative z-10 flex items-center"
  onMouseEnter={() => {
    if (item.children) {
      setActiveDropdown(item.label);
    } else {
      setActiveDropdown(null);
    }
  }}
  onMouseLeave={() => {
    if (item.children) {
      setActiveDropdown((current) =>
        current === item.label ? null : current
      );
    }
  }}
>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setActiveDropdown(null)}
                    // className={({ isActive }) =>
                    //   `whitespace-nowrap py-6 text-[16px] font-semibold transition-colors duration-200 ${
                    //     isActive
                    //       ? "text-[#E98A43]"
                    //       : "text-ink hover:text-[#08614F]"
                    //   }`
                    // }
                   className={({ isActive }) =>
  `whitespace-nowrap py-1 text-[16px] min-[1450px]:text-[17px] min-[1600px]:text-[18px] font-semibold transition-colors duration-200 ${
    isActive
      ? "text-[#E87744]"
      : "text-ink hover:text-[#4F7359]"
  }`
}
                  >
                    {item.label}
                  </NavLink>

                  {/* SEPARATE DROPDOWN ARROW */}
                  {item.children && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleDropdown(item.label);
                      }}
                      aria-label={`Open ${item.label} dropdown`}
                      aria-expanded={activeDropdown === item.label}
                      className={`ml-1 rounded p-1 transition-colors ${
                        activeDropdown === item.label
                          ? "text-[#E98A43]"
                          : "text-ink hover:text-[#08614F]"
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}
  {/* DESKTOP DROPDOWN */}
{item.children && activeDropdown === item.label && (
  <motion.div
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.18, ease: "easeOut" }}
    className="absolute left-0 top-full z-[1000] w-[310px] pt-0"
    // className="absolute left-0 top-full z-[1000] w-[310px] pt-2"
  >
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-xl">
      <div className="max-h-[65vh] overflow-y-auto py-2">
        {item.children.map((child) => {
          const Icon = child.Icon;

          return (
            <Link
              key={child.label}
              to={child.path}
              onClick={closeAll}
              className="flex min-h-[38px] items-center gap-3 border-b border-line/60 px-5 py-2 text-[16px] font-medium text-ink transition-colors last:border-0 hover:bg-[#F3F7F4] hover:text-[#08614F]"
            >
              {Icon && (
                <Icon size={19} className="shrink-0 text-[#E87744]" />
              )}
              <span>{child.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  </motion.div>
)}

                </div>
              ))}
            </nav>

            {/* APPOINTMENT AND MOBILE MENU */}
            {/* <div className="ml-auto flex shrink-0 items-center gap-2 2xl:ml-3"> */}
                <div className="ml-3 flex shrink-0 items-center gap-2 min-[1300px]:ml-2">
              {/* <Link
                to="/appointments"
                className="btn-header hidden sm:inline-flex"
              > */}
              <Link
  to="/appointments"
  className="btn-header hidden min-[1300px]:inline-flex"
>
                <CalendarDays size={16} />
                Book an Appointment
              </Link>

              <button
                type="button"
                onClick={() => {
                  setOpen((value) => !value);
                  setActiveDropdown(null);
                }}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-navigation"className="rounded-xl border border-line p-2 text-navy min-[1300px]:hidden"
                // className="rounded-xl border border-line p-2 text-navy 2xl:hidden"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE / TABLET NAVIGATION */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] 2xl:hidden">

            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/50"
              aria-label="Close menu overlay"
              onClick={closeAll}
            />

            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="absolute left-0 top-0 flex h-[100dvh] w-[min(100%,25rem)] flex-col bg-white shadow-lift"
            >

              {/* MOBILE HEADER */}
              <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-4">

                <BrandLogo onClick={closeAll} />

                <button
                  ref={closeRef}
                  type="button"
                  onClick={closeAll}
                  aria-label="Close navigation"
                  className="rounded-xl border border-line p-2 text-navy"
                >
                  <X size={21} />
                </button>

              </div>

              {/* MOBILE NAVIGATION ITEMS */}
              <nav className="hide-scroll flex-1 overflow-y-auto px-5 py-3">

                {navigation.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-line"
                  >
                    <div className="flex items-center justify-between gap-2">

                      <NavLink
                        to={item.path}
                        end={item.path === "/"}
                        onClick={closeAll}
                        className={({ isActive }) =>
                          `flex-1 py-4 text-[17px] font-semibold ${
                            isActive
                              ? "text-[#E98A43]"
                              : "text-heading hover:text-[#08614F]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>

                      {item.children && (
                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.label)}
                          aria-label={`Expand ${item.label}`}
                          aria-expanded={
                            activeDropdown === item.label
                          }
                          className="rounded-lg p-2 text-ink transition hover:bg-[#F3F7F4] hover:text-[#08614F]"
                        >
                          <ChevronDown
                            size={19}
                            className={`transition-transform ${
                              activeDropdown === item.label
                                ? "rotate-180 text-[#E98A43]"
                                : ""
                            }`}
                          />
                        </button>
                      )}

                    </div>

                    {/* MOBILE SUBMENU */}
                    <AnimatePresence>
                      {item.children &&
                        activeDropdown === item.label && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mb-3 ml-2 border-l-2 border-[#E98A43]/40 pl-3">

                              {item.children.map((child) => {
                                const Icon = child.Icon;

                                return (
                                  <Link
                                    key={child.label}
                                    to={child.path}
                                    onClick={closeAll}
                                    className="flex items-center gap-3 py-3 text-[16px] font-medium text-ink transition hover:text-[#08614F]"
                                  >
                                    {Icon && (
                                      <Icon
                                        size={19}
                                        className="shrink-0 text-[#E98A43]"
                                      />
                                    )}

                                    {child.label}
                                  </Link>
                                );
                              })}

                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  to="/appointments"
                  onClick={closeAll}
                  className="btn-primary mt-5 flex w-full items-center justify-center gap-2"
                >
                  <CalendarDays size={18} />
                  Book an Appointment
                </Link>

              </nav>

              {/* MOBILE CONTACT DETAILS */}
              <div className="space-y-3 border-t border-line bg-mist px-5 py-5 text-[16px] text-ink">

                <p className="font-bold text-navy">
                  Contact RENOVA
                </p>

                <p className="flex gap-3">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-royal"
                  />
                  {hospital.address}
                </p>

                <p className="flex gap-3">
                  <Phone
                    size={19}
                    className="shrink-0 text-royal"
                  />
                  <a href={hospital.phoneHref}>
                    {hospital.phoneDisplay}
                  </a>
                </p>

                <p className="flex gap-3 break-all">
                  <Mail
                    size={19}
                    className="shrink-0 text-royal"
                  />
                  <a href={`mailto:${hospital.email}`}>
                    {hospital.email}
                  </a>
                </p>

                <div className="flex items-center gap-5 pt-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-[#08614F] transition hover:text-[#E98A43]"
                    >
                      <SocialIcon type={social.type} size={21} />
                    </a>
                  ))}
                </div>

              </div>

            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


