import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Microscope,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import {
  screeningDiagnosticServices,
  screeningDiagnosticsOverview,
} from "../data/screeningDiagnosticsData";

import appointmentsWave from "../assets/appointments-wave.jpg";
import molecularImage from "../assets/screening-diagnostics/molecular-diagnostics.jpg";

const icons = [ScanLine, ShieldCheck, ClipboardList, Microscope];

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
            Screening &amp; Diagnostics
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default function ScreeningDiagnosticsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDFA] text-[#304B3C]">
      <section className="bg-[#fbfcfb]">
        <Breadcrumb />

        <div className="page-container grid items-center gap-10 px-4 pb-14 pt-7 sm:px-6 md:pb-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[13px] font-bold uppercase tracking-[.16em] text-[#476B55] shadow-sm">
              Kaizen Oncology CANCER CARE
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#263C30] sm:text-5xl lg:text-[56px]">
              Screening & <span className="text-[#E87744]">Diagnostics</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#536357] sm:text-[19px]">
              {screeningDiagnosticsOverview.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#screening-services"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#304B3C] px-6 py-3 text-[16px] font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#263C30]"
              >
                Explore services <ArrowRight size={18} />
              </a>
              <Link
                to="/appointments"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#476B55] px-6 py-3 text-[16px] font-bold text-[#304B3C] transition hover:bg-[#304B3C] hover:text-white"
              >
                <CalendarDays size={18} /> Book an appointment
              </Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Understand your screening options",
                "Know what diagnostic tests involve",
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
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-[#E87744]/15 blur-2xl" />
            <img
             src={molecularImage}
              // src={screeningDiagnosticServices[0].image}
              alt="Digital breast tomosynthesis imaging"
              className="relative h-[280px] w-full rounded-[28px] object-cover shadow-xl sm:h-[390px] lg:h-[440px]"
            />
            <div className="absolute -bottom-5 right-3 max-w-[280px] rounded-2xl border border-[#E5EDE4] bg-white p-4 shadow-xl sm:right-7 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F1F6F0] text-[#476B55]">
                  <Microscope size={23} />
                </span>
                <div>
                  <p className="font-bold text-[#263C30]">
                    Informed clinical decisions
                  </p>
                  <p className="mt-1 text-[14px] leading-5 text-[#657368]">
                    Assessment guided by your individual needs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="screening-services"
        className="scroll-mt-28 page-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[.18em] text-[#E87744]">
            OUR SCREENING & DIAGNOSTIC SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl">
            Explore each service
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-[#536357]">
            Choose a service to understand why it may be recommended, what
            happens during the process and how results can guide the next
            conversation with your care team.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {screeningDiagnosticServices.map((service, index) => {
            const Icon = icons[index] || Microscope;
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E2EAE0] bg-white shadow-[0_10px_30px_rgba(38,60,48,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(38,60,48,0.12)]"
              >
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263C30]/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-white text-[#476B55] shadow-md">
                    <Icon size={24} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[12px] font-extrabold uppercase tracking-[.14em] text-[#E87744]">
                    0{index + 1} / SCREENING
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-[#263C30]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[16px] leading-7 text-[#59695D]">
                    {service.cardDescription}
                  </p>
                  <Link
                    to={`/services/screening-diagnostics/${service.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-[#304B3C] px-5 py-2.5 text-[15px] font-bold text-white transition hover:bg-[#E87744]"
                  >
                    Know More <ArrowRight size={17} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F3F7F1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="page-container grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[.18em] text-[#E87744]">
              YOUR NEXT STEP
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl">
              Get guidance on the right test for your needs
            </h2>
            <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#536357]">
              Screening and diagnostic decisions depend on your symptoms,
              personal history and clinical assessment. Speak with a qualified
              specialist to understand which investigations, if any, may be
              appropriate.
            </p>
          </div>
          <Link
            to="/appointments"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E87744] px-7 py-3 text-[16px] font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#d76535]"
          >
            Book an appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      {/* <p className="page-container px-4 py-7 text-[14px] leading-6 text-[#68766B] sm:px-6 lg:px-8">Medical information on this page is for general education and does not replace a consultation, diagnosis or personalised medical advice. Screening recommendations vary according to individual risk and current clinical guidance.</p> */}
    </main>
  );
}
