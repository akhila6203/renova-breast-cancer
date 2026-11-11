import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
} from "lucide-react";

import { treatmentServices } from "../data/treatmentServicesData";

function Breadcrumb({ title }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-[15px] sm:text-[16px]"
    >
      <Link
        to="/"
        className="font-semibold text-[#476B55] hover:text-[#E87744]"
      >
        Home
      </Link>

      <ChevronRight size={15} className="text-[#9AA89C]" />

      <Link
        to="/services"
        className="font-semibold text-[#476B55] hover:text-[#E87744]"
      >
        Services
      </Link>

      <ChevronRight size={15} className="text-[#9AA89C]" />

      <Link
        to="/services/treatments"
        className="font-semibold text-[#476B55] hover:text-[#E87744]"
      >
        Cancer Treatments
      </Link>

      <ChevronRight size={15} className="text-[#9AA89C]" />

      <span
        aria-current="page"
        className="font-bold text-[#E87744]"
      >
        {title}
      </span>
    </nav>
  );
}

export default function CancerTreatmentDetailPage() {
  const { slug } = useParams();

  const service = treatmentServices.find(
    (item) => item.slug === slug
  );

  const [activeSection, setActiveSection] = useState("overview");
  const [faqOpen, setFaqOpen] = useState(false);

  useEffect(() => {
    if (!service) return undefined;

    const ids = [
      "overview",
      ...service.sections.map(
        (_, index) => `treatment-section-${index}`
      ),
      "treatment-faq",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [service]);

  if (!service) {
    return <Navigate to="/services/treatments" replace />;
  }

  const navItems = [
    {
      id: "overview",
      label: "Overview",
    },

    ...service.sections.map((section, index) => ({
      id: `treatment-section-${index}`,
      label: section.title,
    })),

    {
      id: "treatment-faq",
      label: "FAQs",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFFDFA] text-[#304B3C]">

      {/* BREADCRUMB */}
      <div className="w-full border-b border-[#DCE5DA] bg-[#F6F8F4]">
        <div className="page-container px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumb title={service.title} />
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#F1F6F0]">
        <div className="page-container grid items-center gap-9 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[12px] font-extrabold tracking-[.16em] text-[#476B55] shadow-sm">
              {service.eyebrow}
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#263C30] sm:text-5xl lg:text-[52px]">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#536357] sm:text-[19px]">
              {service.cardDescription}
            </p>

            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#536357] sm:text-[18px]">
              {service.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#overview"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#304B3C] px-6 py-3 text-[15px] font-bold text-white transition hover:bg-[#263C30]"
              >
                Read details
                <ArrowRight size={18} />
              </a>

              <Link
                to="/appointments"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#476B55] px-6 py-3 text-[15px] font-bold text-[#304B3C] transition hover:bg-[#304B3C] hover:text-white"
              >
                <CalendarDays size={18} />
                Book appointment
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
          >
            <img
              src={service.image}
              alt={service.imageAlt}
              className="h-[280px] w-full rounded-[26px] object-cover shadow-xl sm:h-[380px] lg:h-[430px]"
            />
          </motion.div>

        </div>
      </section>

      {/* DETAIL CONTENT AND LEFT NAVIGATION */}
      <div className="page-container grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-20">

        {/* LEFT STICKY NAVIGATION - DESKTOP */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 max-h-[calc(100vh-130px)] overflow-y-auto rounded-2xl border border-[#E1E9DF] bg-white p-5 shadow-sm">

            <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[.15em] text-[#E87744]">
              ON THIS PAGE
            </p>

            <nav
              className="space-y-2"
              aria-label="On this page"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`block rounded-xl border-l-4 px-3 py-3 text-[14px] font-bold leading-5 transition-all duration-200 ${
                    activeSection === item.id
                      ? "border-[#E87744] bg-[#304B3C] text-white shadow-sm"
                      : "border-transparent text-[#536357] hover:border-[#E87744] hover:bg-[#F1F6F0] hover:text-[#304B3C]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="min-w-0">

          {/* OVERVIEW */}
          <section
            id="overview"
            className="scroll-mt-28"
          >
            <p className="text-[13px] font-extrabold uppercase tracking-[.17em] text-[#E87744]">
              OVERVIEW
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#263C30] sm:text-4xl">
              Understanding {service.shortTitle}
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-[#536357]">
              {service.overview}
            </p>
          </section>

          <div className="my-10 h-px bg-[#E4EBE2]" />

          {/* DYNAMIC TREATMENT SECTIONS */}
          {service.sections.map((section, index) => (
            <section
              id={`treatment-section-${index}`}
              key={section.title}
              className="scroll-mt-28 border-b border-[#E4EBE2] py-9 first:pt-0 last:border-0"
            >
              <div className="flex items-start gap-4">

                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EAF1E8] text-[15px] font-extrabold text-[#476B55]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h2 className="text-2xl font-bold leading-tight text-[#263C30] sm:text-[28px]">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map(
                    (paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="mt-4 text-[16px] leading-8 text-[#536357]"
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                  {section.points?.length > 0 && (
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 rounded-xl bg-[#F4F7F2] p-4 text-[15px] leading-7 text-[#46584A]"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-1 shrink-0 text-[#E87744]"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            </section>
          ))}

          {/* FAQ */}
          <section
            id="treatment-faq"
            className="scroll-mt-28 pt-8"
          >
            <p className="text-[13px] font-extrabold uppercase tracking-[.17em] text-[#E87744]">
              COMMON QUESTION
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#263C30] sm:text-4xl">
              Frequently asked question
            </h2>

            <div className="mt-7 overflow-hidden rounded-2xl border border-[#E1E9DF] bg-white">

              <button
                type="button"
                aria-expanded={faqOpen}
                onClick={() => setFaqOpen(!faqOpen)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-[16px] font-bold leading-6 text-[#263C30] sm:text-[17px]">
                  {service.faq.question}
                </span>

                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#E87744] transition ${
                    faqOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {faqOpen && (
                <p className="border-t border-[#E8EEE6] px-5 py-4 text-[16px] leading-7 text-[#536357]">
                  {service.faq.answer}
                </p>
              )}

            </div>
          </section>

          {/* MEDICAL NOTE */}
          <div className="mt-12 rounded-2xl border border-[#E4EAE0] bg-[#F4F7F2] p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <ClipboardCheck
                className="mt-1 shrink-0 text-[#E87744]"
                size={25}
              />

              <div>
                <h2 className="text-xl font-bold text-[#263C30]">
                  A note about your care
                </h2>

                <p className="mt-3 text-[15px] leading-7 text-[#536357]">
                  Treatment availability and suitability depend on
                  clinical assessment, approved indications, local
                  regulatory requirements and the facilities available
                  at the treating centre. Your specialist can explain
                  the options relevant to your diagnosis.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* APPOINTMENT CTA */}
      <section className="bg-[#304B3C] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[.17em] text-[#FFB38D]">
              YOUR NEXT STEP
            </p>

            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Would you like to discuss this treatment?
            </h2>

            <p className="mt-4 max-w-2xl text-[16px] leading-7 text-white/85">
              Speak with the appropriate specialist about your
              diagnosis, reports and treatment goals.
            </p>
          </div>

          <Link
            to="/appointments"
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-[#E87744] px-7 py-3 text-[15px] font-bold text-white transition hover:bg-[#d76535]"
          >
            Book an appointment
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* BACK LINK */}
      {/* <div className="page-container flex flex-wrap items-center justify-between gap-4 px-4 py-7 sm:px-6 lg:px-8">
        <Link
          to="/services/treatments"
          className="inline-flex items-center gap-2 font-bold text-[#476B55] hover:text-[#E87744]"
        >
          ← Back to Cancer Treatments
        </Link>

        <p className="max-w-2xl text-[13px] leading-6 text-[#68766B]">
          This information is educational and does not replace a
          consultation, diagnosis or personalised medical advice.
        </p>
      </div> */}

    </main>
  );
}