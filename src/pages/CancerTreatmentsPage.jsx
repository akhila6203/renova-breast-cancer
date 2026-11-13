import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  Microscope,
  Radiation,
  Scissors,
  Sparkles,
  Syringe,
  Activity,
  Dna,
  Stethoscope,
} from "lucide-react";

import {
  emergingTreatments,
  treatmentOverview,
  treatmentServices,
} from "../data/treatmentServicesData";

const treatmentIcons = [
  Scissors,
  Stethoscope,
  Radiation,
  Dna,
  Sparkles,
  HeartPulse,
  Activity,
  Syringe,
];

import appointmentsWave from "../assets/appointments-wave.jpg";

function Breadcrumb() {
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
          <li>
            <Link
              to="/"
              className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
            >
              Home
            </Link>
          </li>

          <li aria-hidden="true" className="text-white/90 drop-shadow-md">
            /
          </li>

          <li>
            <Link
              to="/services"
              className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
            >
              Services
            </Link>
          </li>

          <li aria-hidden="true" className="text-white/90 drop-shadow-md">
            /
          </li>

          <li
            aria-current="page"
            className="font-bold text-white drop-shadow-md"
          >
            Cancer Treatments
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default function CancerTreatmentsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFA] text-[#304B3C]">

      {/* HERO AND BREADCRUMB */}
      <section className="bg-[#fefefe]">

        <Breadcrumb />

        <div className="page-container grid items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[12px] font-extrabold tracking-[.16em] text-[#476B55] shadow-sm">
              RENOVA CANCER CARE
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#263C30] sm:text-5xl lg:text-[56px]">
              Cancer{" "}
              <span className="text-[#E87744]">
                Treatments
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#536357] sm:text-[19px]">
              {treatmentOverview.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#treatment-options"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#304B3C] px-6 py-3 text-[15px] font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#263C30]"
              >
                Explore treatments
                <ArrowRight size={18} />
              </a>

              <Link
                to="/appointments"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#476B55] px-6 py-3 text-[15px] font-bold text-[#304B3C] transition hover:bg-[#304B3C] hover:text-white"
              >
                <CalendarDays size={18} />
                Book an appointment
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {[
                "Treatment planning based on individual needs",
                "Options reviewed by relevant specialists",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-[15px] font-semibold text-[#476B55]"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#E87744]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-[#E87744]/15 blur-2xl" />

            <img
              src={treatmentOverview.image}
              alt="Cancer treatment consultation and care"
              className="relative h-[280px] w-full rounded-[26px] object-cover shadow-xl sm:h-[380px] lg:h-[440px]"
            />

            <div className="absolute -bottom-5 right-3 max-w-[290px] rounded-2xl border border-[#E5EDE4] bg-white p-4 shadow-xl sm:right-7 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F1F6F0] text-[#476B55]">
                  <HeartPulse size={23} />
                </span>

                <div>
                  <p className="font-bold text-[#263C30]">
                    Personalised care decisions
                  </p>

                  <p className="mt-1 text-[14px] leading-5 text-[#657368]">
                    Options depend on diagnosis and clinical assessment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* EIGHT TREATMENT SERVICES */}
      <section
        id="treatment-options"
        className="scroll-mt-28 page-container px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12"
      >
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[.18em] text-[#E87744]">
            CANCER CARE & TREATMENT SERVICES
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl">
            Explore treatment options
          </h2>

          <p className="mt-4 text-[17px] leading-8 text-[#536357]">
            Learn what each treatment approach involves, when it may be
            considered and how it can fit into an individual care plan.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {treatmentServices.map((service, index) => {
            const Icon = treatmentIcons[index] || Microscope;

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.045,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#E2EAE0] bg-white shadow-[0_10px_30px_rgba(38,60,48,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(38,60,48,0.12)]"
              >
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#263C30]/55 to-transparent" />

                  <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-white text-[#476B55] shadow-md">
                    <Icon size={23} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-extrabold uppercase tracking-[.13em] text-[#E87744]">
                    0{index + 1} / TREATMENT
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-snug text-[#263C30]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[15px] leading-7 text-[#59695D]">
                    {service.cardDescription}
                  </p>

                  <Link
                    to={`/services/treatments/${service.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-[#304B3C] px-5 py-2.5 text-[14px] font-bold text-white transition hover:bg-[#E87744]"
                  >
                    Know More
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* MODERN AND EMERGING TREATMENTS */}
      <section
        id="modern-treatments"
        className="bg-[#F3F7F1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="page-container">

          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-[13px] font-extrabold uppercase tracking-[.18em] text-[#E87744]">
              INNOVATION IN ONCOLOGY
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl">
              Modern & Emerging Cancer Treatments
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-[#536357]">
              Established treatments and newer approaches are presented
              separately. Approved indications, regulatory status and
              availability vary by country and change over time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emergingTreatments.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E0E9DE] bg-white p-5 shadow-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F1F6F0] text-[14px] font-extrabold text-[#E87744]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-[18px] font-bold leading-6 text-[#263C30]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[17px] leading-6 text-[#59695D]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#E9D8C9] bg-[#FFF9F4] p-5 sm:p-6">
            <p className="font-bold text-[#8B4B2A]">
              Important treatment availability note
            </p>

            <p className="mt-2 text-[16px] leading-7 text-[#705B4E]">
              The therapies described are educational information. A
              treatment should be presented as available at RENOVA only
              after the hospital confirms that it is approved, staffed,
              equipped and clinically provided at the relevant location.
              Suitability must be determined by the treating specialist.
            </p>
          </div>

        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="bg-[#304B3C] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[.17em] text-[#FFB38D]">
              YOUR NEXT STEP
            </p>

            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Discuss your cancer treatment options with a specialist
            </h2>

            <p className="mt-4 max-w-2xl text-[16px] leading-7 text-white/85">
              Bring your reports, scans and previous treatment details so
              the team can understand your situation and discuss
              appropriate next steps.
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

      <p className="page-container px-4 py-7 text-[18px] leading-6 text-[#68766B] sm:px-6 lg:px-8">
        This content is for general education and does not replace medical
        advice. Treatment decisions are individualised by qualified
        clinicians using current evidence, regulatory guidance and the
        patient's clinical circumstances.
      </p>

    </main>
  );
}