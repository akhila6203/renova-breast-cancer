
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  HeartPulse,
  Microscope,
  Stethoscope,
} from "lucide-react";

import { cancerTypes } from "../data/cancerTypeContent";
import {
  technologyItems,
  mammographyTechnology,
} from "../data/technologyData";

import appointmentsWave from "../assets/appointments-wave.jpg";

/* ---------------------------------------------
   BREADCRUMB
--------------------------------------------- */
/* ---------------------------------------------
   BREADCRUMB
--------------------------------------------- */
function Breadcrumb({ items }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
      style={{
        backgroundImage: `url(${appointmentsWave})`,
      }}
    >
      <div className="page-container relative z-10 mx-auto px-5 py-3 sm:px-8 lg:px-12">
        <ol className="flex flex-wrap items-center gap-2 text-[15px] sm:text-[16px]">
          {items.map((item, index) => {
            const active = index === items.length - 1;

            return (
              <li key={item.label} className="flex items-center gap-2">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="text-white/90 drop-shadow-md"
                  >
                    /
                  </span>
                )}

                {active ? (
                  <span
                    aria-current="page"
                    className="font-bold text-white drop-shadow-md"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

/* ---------------------------------------------
   SECTION HEADING - LEFT ALIGNED
--------------------------------------------- */
function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-4xl text-left">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#E87744]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-left text-2xl font-bold leading-tight text-[#263C30] sm:text-3xl lg:text-[34px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-left text-[18px] leading-8 text-[#46574B] sm:text-[19px]">
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------------------
   BULLET LIST
--------------------------------------------- */
function BulletList({ items = [], orange = false }) {
  if (!items?.length) return null;

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2
            size={20}
            className={`mt-1 shrink-0 ${
              orange ? "text-[#E87744]" : "text-[#52775C]"
            }`}
          />

          <span className="text-[17px] leading-8 text-[#46574B] sm:text-[18px]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------
   CONTENT CARD
--------------------------------------------- */
function ContentCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[22px] border border-[#E5EBE3] bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------
   FAQ ACCORDION
--------------------------------------------- */
function CancerFAQ({ faqs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!faqs?.length) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border bg-white transition ${
              isOpen
                ? "border-[#E87744]/50 shadow-md"
                : "border-[#E5EBE3]"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
            >
              <span
                className={`text-left text-[16px] font-bold leading-7 sm:text-[18px] ${
                  isOpen ? "text-[#E87744]" : "text-[#263C30]"
                }`}
              >
                {faq.question}
              </span>

              <ChevronDown
                size={21}
                className={`shrink-0 transition-transform ${
                  isOpen
                    ? "rotate-180 text-[#E87744]"
                    : "text-[#476B55]"
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-[#E9EEE7] px-5 py-5 text-[17px] leading-8 text-[#46574B] sm:px-7 sm:text-[18px]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------
   MAIN CANCER DETAIL PAGE
--------------------------------------------- */

export default function CancerProgramPage() {
  const { slug } = useParams();

  // Get the selected cancer details using the URL slug
  const cancer = cancerTypes.find(
    (item) => item.slug === slug
  );

  // Combine all technologies, including 3D Mammography
  const allTechnologies = [
    ...technologyItems,
    mammographyTechnology,
  ].filter(Boolean);

  // Get technologies related to the selected cancer
  const relatedTechnologies = allTechnologies.filter((technology) =>
    cancer?.relatedTechnologySlugs?.includes(technology.slug)
  );

  const [activeSection, setActiveSection] = useState("overview");


  const sections = [
    { id: "overview", label: "Overview" },
    { id: "what-is", label: "What Is It?" },
    { id: "symptoms", label: "Signs & Symptoms" },
    { id: "diagnosis", label: "Diagnosis" },
{ id: "related-technologies", label: "Related Technologies" },
{ id: "treatment", label: "Treatment Options" },
    { id: "risk-factors", label: "Risk Factors" },
    { id: "prevention", label: "Prevention" },
    { id: "faqs", label: "FAQs" },
  ];

  /* ---------------------------------------------
     ACTIVE SIDEBAR SECTION ON SCROLL
  --------------------------------------------- */
  useEffect(() => {
    if (!cancer) return;

    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -65% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [slug]);

  if (!cancer) {
    return <Navigate to="/services#cancer-types" replace />;
  }

  return (
    <main className="overflow-x-clip bg-[#fffdf9]">
     
      {/* ---------------------------------------
        BREADCRUMB
      --------------------------------------- */}
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          {
            label: "Cancer Types",
            path: "/services#cancer-types",
          },
          { label: cancer.title },
        ]}
      />
      
      {/* ---------------------------------------
          TOP HERO SECTION

          Cancer title and description appear
          BEFORE the Overview section.
      --------------------------------------- */}
      <section className="bg-[#F4F7F2]">
        <div className="page-container grid items-center gap-9 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-left"
          >
            <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-[#476B55] shadow-sm">
              {cancer.category || "CANCER TYPE"}
            </span>

            {/* Main cancer heading */}
            <h1 className="mt-6 text-left text-4xl font-bold leading-tight text-[#263C30] sm:text-5xl lg:text-[54px]">
              {cancer.title}
            </h1>

            {/* Intro description directly below heading */}
            <p className="mt-6 max-w-2xl text-left text-[18px] leading-8 text-[#46574B] sm:text-[19px]">
              {cancer.cardDescription}
            </p>

            <p className="mt-4 max-w-2xl text-left text-[18px] leading-8 text-[#46574B] sm:text-[19px]">
            {cancer.overviewSecond}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full bg-[#304B3C] px-3 py-2 text-[16px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#263C30]"
              >
                Read Overview
                <ArrowRight size={19} />
              </a>

              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#476B55] px-3 py-2 text-[16px] font-bold text-[#304B3C] transition hover:bg-[#304B3C] hover:text-white"
              >
                <CalendarDays size={18} />
                Book Appointment
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <img
              src={cancer.image}
              alt={cancer.imageAlt}
              className="h-[300px] w-full rounded-[26px] object-cover shadow-xl sm:h-[420px]"
            />

            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:right-auto sm:max-w-[310px]">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F1F6F0] p-3 text-[#476B55]">
                  <HeartPulse size={25} />
                </div>

                <div>
                  <p className="font-bold text-[#263C30]">
                    Individual care matters
                  </p>

                  <p className="mt-1 text-sm text-[#657368]">
                    Every diagnosis is different
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------
          CONTENT AND PAGE NAVIGATION
      --------------------------------------- */}
      <div className="page-container grid items-start gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-20">
        {/* ---------------------------------------
            LEFT STICKY NAVIGATION
        --------------------------------------- */}
        <aside className="h-fit self-start lg:sticky lg:top-28">
          <div className="rounded-[22px] border border-[#E5EBE3] bg-white p-5 shadow-sm lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <h2 className="mb-4 text-lg font-bold text-[#263C30]">
              On This Page
            </h2>

            <nav className="space-y-1">
              {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block rounded-xl px-4 py-3 pl-5 text-[15px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#304B3C] text-white shadow-sm"
                        : "text-[#536357] hover:bg-[#F4F7F2] hover:text-[#304B3C]"
                    }`}
                  >
                    {/* Active orange indicator */}
                    {isActive && (
                      <span className="absolute bottom-2 left-0 top-2 w-[4px] rounded-r-full " />
                    )}

                    {section.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-5 rounded-2xl bg-[#F4F7F2] p-4">
              <p className="text-sm font-bold text-[#304B3C]">
                Need specialist guidance?
              </p>

              <Link
                to="/appointments"
                className="mt-3 inline-flex items-center gap-2 text-[15px] font-bold text-[#E87744] transition hover:gap-3"
              >
                Book Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </aside>

        {/* ---------------------------------------
            MAIN CANCER CONTENT
        --------------------------------------- */}
        <div className="min-w-0 space-y-12">
          {/* ---------------------------------------
              01. OVERVIEW
          --------------------------------------- */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28"
          >
            <SectionHeading
              eyebrow="01 — Overview"
              title={`Overview of ${cancer.title}`}
            />

            <ContentCard>
              <p className="text-[18px] leading-8 text-[#46574B] sm:text-[19px]">
                {cancer.overview}
              </p>

              {cancer.overviewSecond && (
                <p className="mt-5 text-[18px] leading-8 text-[#46574B] sm:text-[19px]">
                  {cancer.overviewSecond}
                </p>
              )}

              {cancer.overviewThird && (
                <p className="mt-5 text-[18px] leading-8 text-[#46574B] sm:text-[19px]">
                  {cancer.overviewThird}
                </p>
              )}
            </ContentCard>
          </motion.section>

          {/* ---------------------------------------
              02. WHAT IS CANCER?
          --------------------------------------- */}
          <motion.section
            id="what-is"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28"
          >
            <SectionHeading
              eyebrow="02 — Understanding the condition"
              title={`What Is ${cancer.title}?`}
            />

            <ContentCard>
              <p className="text-[18px] leading-8 text-[#46574B] sm:text-[19px]">
                {cancer.whatIs}
              </p>

              {cancer.types?.length > 0 && (
                <div className="mt-7">
                  <h3 className="mb-5 text-left text-xl font-bold text-[#304B3C]">
                    {cancer.typesHeading ||
                      `Common Types of ${cancer.title}`}
                  </h3>

                  <BulletList items={cancer.types} />
                </div>
              )}

              {cancer.whatIsClosing && (
                <p className="mt-6 text-[18px] leading-8 text-[#46574B]">
                  {cancer.whatIsClosing}
                </p>
              )}
            </ContentCard>
          </motion.section>

          {/* ---------------------------------------
              03. SYMPTOMS
          --------------------------------------- */}
          <motion.section
            id="symptoms"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28"
          >
            <SectionHeading
              eyebrow="03 — Warning signs"
              title={`What Are the Signs and Symptoms of ${cancer.title}?`}
              description={cancer.symptomsIntro}
            />

            <ContentCard className="border-l-4 border-l-[#E87744]">
              <BulletList items={cancer.symptoms} orange />

              {cancer.symptomsClosing && (
                <p className="mt-6 border-t border-[#E8EDE6] pt-5 text-[18px] leading-8 text-[#46574B]">
                  {cancer.symptomsClosing}
                </p>
              )}
            </ContentCard>
          </motion.section>

          {/* ---------------------------------------
              04. DIAGNOSIS
          --------------------------------------- */}
          <motion.section
            id="diagnosis"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28"
          >
            <SectionHeading
              eyebrow="04 — Tests and assessment"
              title={`How Is ${cancer.title} Diagnosed?`}
              description={cancer.diagnosisIntro}
            />

            <div className="space-y-5">
              {cancer.diagnosisSteps?.map((step, index) => (
                <ContentCard key={index}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F6F0] text-lg font-bold text-[#476B55]">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-left text-xl font-bold text-[#263C30]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-[18px] leading-8 text-[#46574B]">
                        {step.description}
                      </p>

                      {step.points?.length > 0 && (
                        <div className="mt-5">
                          <BulletList items={step.points} />
                        </div>
                      )}
                    </div>
                  </div>
                </ContentCard>
              ))}
            </div>

            {cancer.diagnosisClosing && (
              <div className="mt-6 rounded-2xl bg-[#F4F7F2] p-6">
                <div className="flex items-start gap-3">
                  <Microscope
                    size={25}
                    className="mt-1 shrink-0 text-[#476B55]"
                  />

                  <div>
                    <h3 className="text-left text-lg font-bold text-[#263C30]">
                      Understanding Your Diagnosis
                    </h3>

                    <p className="mt-2 text-[18px] leading-8 text-[#46574B]">
                      {cancer.diagnosisClosing}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.section>

          {/* BREAST IMAGING AND AWARENESS */}
          {/* RELATED TECHNOLOGIES */}
{relatedTechnologies.length > 0 && (
  <motion.section
    id="related-technologies"
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5 }}
    className="scroll-mt-28"
  >
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-[.18em] text-[#E87744]">
        ADVANCED CANCER CARE
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#263C30] sm:text-4xl">
        Technologies Related to {cancer.title}
      </h2>

      <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#46574B]">
        Explore technologies and specialised care approaches that may
        be considered as part of an individual treatment plan.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2">
      {relatedTechnologies.map((technology) => (
        <div
          key={technology.slug}
          className="overflow-hidden rounded-[22px] border border-[#E5EBE3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          {technology.image && (
            <img
              src={technology.image}
              alt={technology.imageAlt || technology.title || technology.name}
              className="h-56 w-full object-cover"
            />
          )}

          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E87744]">
              {technology.speciality || "ADVANCED TECHNOLOGY"}
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#263C30]">
              {technology.title || technology.name}
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-[#536357]">
              {technology.cardDescription ||
                technology.shortDescription ||
                technology.description}
            </p>

            <Link
              to={
                technology.path ||
                `/technology/${technology.slug}`
              }
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#476B55] transition hover:text-[#E87744]"
            >
              Explore Technology
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
)}



          {/* ---------------------------------------
              05. TREATMENT OPTIONS
          --------------------------------------- */}
          <motion.section
            id="treatment"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28"
          >
            <SectionHeading
              eyebrow="05 — Treatment and care"
              title={`How Is ${cancer.title} Treated?`}
              description={cancer.treatmentIntro}
            />

            <div className="grid gap-5 md:grid-cols-2">
              {cancer.treatments?.map((treatment, index) => (
                <ContentCard key={index}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-[#FFF2E9] p-3 text-[#E87744]">
                      <HeartPulse size={23} />
                    </div>

                    <h3 className="text-left text-lg font-bold text-[#263C30]">
                      {treatment.title}
                    </h3>
                  </div>

                  <p className="text-[18px] leading-8 text-[#46574B]">
                    {treatment.description}
                  </p>

                  {treatment.points?.length > 0 && (
                    <div className="mt-5">
                      <BulletList items={treatment.points} />
                    </div>
                  )}
                </ContentCard>
              ))}
            </div>

            {cancer.treatmentFactors?.length > 0 && (
              <ContentCard className="mt-6 bg-[#F4F7F2]">
                <h3 className="mb-5 text-left text-xl font-bold text-[#263C30]">
                  Choosing the Right Treatment
                </h3>

                <p className="mb-5 text-[18px] leading-8 text-[#46574B]">
                  The treatment approach depends on several factors:
                </p>

                <BulletList items={cancer.treatmentFactors} />

                {cancer.treatmentClosing && (
                  <p className="mt-5 border-t border-[#DFE8DD] pt-5 text-[18px] leading-8 text-[#46574B]">
                    {cancer.treatmentClosing}
                  </p>
                )}
              </ContentCard>
            )}
          </motion.section>

          {/* ---------------------------------------
              06. RISK FACTORS
          --------------------------------------- */}
          <motion.section
            id="risk-factors"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28"
          >
            <SectionHeading
              eyebrow="06 — Understanding your risk"
              title={`What Are the Risk Factors for ${cancer.title}?`}
              description={cancer.riskIntro}
            />

            <ContentCard>
              <BulletList items={cancer.riskFactors} orange />

              {cancer.riskClosing && (
                <p className="mt-6 border-t border-[#E8EDE6] pt-5 text-[18px] leading-8 text-[#46574B]">
                  {cancer.riskClosing}
                </p>
              )}
            </ContentCard>
          </motion.section>

          {/* ---------------------------------------
              07. PREVENTION
          --------------------------------------- */}
          <motion.section
            id="prevention"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28"
          >
            <SectionHeading
              eyebrow="07 — Risk reduction"
              title={`Can ${cancer.title} Be Prevented?`}
            />

            <ContentCard className="border-l-4 border-l-[#52775C]">
              <p className="text-[18px] leading-8 text-[#46574B] sm:text-[19px]">
                {cancer.prevention}
              </p>

              {cancer.preventionSteps?.length > 0 && (
                <div className="mt-6">
                  <BulletList items={cancer.preventionSteps} />
                </div>
              )}
            </ContentCard>
          </motion.section>

          {/* ---------------------------------------
              08. FAQ
          --------------------------------------- */}
          <motion.section
            id="faqs"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28"
          >
            <SectionHeading
              eyebrow="08 — Patient information"
              title={`Frequently Asked Questions About ${cancer.title}`}
              description="Find answers to common questions about symptoms, diagnosis and treatment."
            />

            <CancerFAQ faqs={cancer.faqs} />
          </motion.section>

          {/* ---------------------------------------
              CANCER CARE JOURNEY
          --------------------------------------- */}
          <section className="rounded-[26px] bg-[#F4F7F2] p-6 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white p-3 text-[#476B55] shadow-sm">
                <Stethoscope size={27} />
              </div>

              <div>
                <h2 className="text-left text-2xl font-bold text-[#263C30]">
                  {cancer.careJourneyTitle || "Your Cancer Care Journey"}
                </h2>

                <p className="mt-4 text-[18px] leading-8 text-[#46574B]">
                  {cancer.closing ||
                    "Understanding your condition and available treatment options is an important step towards informed care decisions. At RENOVA Cancer Hospital, our aim is to support patients with clear guidance, personalised care planning and compassionate support throughout their cancer journey."}
                </p>
              </div>
            </div>

            <Link
              to="/appointments"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#304B3C] px-7 py-4 text-[16px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#263C30]"
            >
              <CalendarDays size={19} />
              Book an Appointment
              <ArrowRight size={18} />
            </Link>
          </section>

          {/* ---------------------------------------
              BACK TO CANCER TYPES
          --------------------------------------- */}
          <div className="flex flex-col justify-between gap-5 border-t border-[#E5EBE3] pt-8 sm:flex-row sm:items-center">
            <Link
              to="/services#cancer-types"
              className="inline-flex items-center gap-2 text-[16px] font-bold text-[#476B55] transition hover:text-[#E87744]"
            >
              <ChevronRight className="rotate-180" size={19} />
              Explore All Cancer Types
            </Link>

            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 text-[16px] font-bold text-[#E87744] transition hover:gap-3"
            >
              Talk to Our Team
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------------------------------
          MEDICAL DISCLAIMER
      --------------------------------------- */}
      <section className="page-container px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E6EBE3] bg-white p-5 sm:p-6">
          <p className="text-[15px] leading-7 text-[#667268]">
            <strong className="text-[#304B3C]">
              Medical disclaimer:
            </strong>{" "}
            Information on this website is intended for general education and
            awareness and does not replace consultation, diagnosis or
            treatment by a qualified healthcare professional. Cancer
            diagnosis and treatment vary between individuals. Please discuss
            treatment decisions with your treating oncology team.
          </p>
        </div>
      </section>
    </main>
  );
}
