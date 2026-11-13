
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

import {
  cancerTypes,
  cancerOverview,
} from "../data/cancerTypeContent";

function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-[15px] sm:text-base"
    >
      <Link
        to="/"
        className="font-semibold text-[#476B55] transition hover:text-[#E87744]"
      >
        Home
      </Link>

      <ChevronRight size={16} className="text-[#8B9B8D]" />

      <span
        aria-current="page"
        className="font-bold text-[#3b3a3a]"
      >
        Cancer Types
      </span>
    </nav>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}) {
  return (
    <div
      className={`mx-auto w-full max-w-3xl ${
        center ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#E87744]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-8 text-[#536357] sm:text-[18px]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function CancerTypesPage() {
  return (
    <main className="overflow-x-clip bg-[#fffdf9]">

      {/* BREADCRUMB */}
      <div className="border-b border-[#E8EDE6] bg-[#F4F7F2]">
        <div className="page-container px-4 py-5 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>
      </div>

      {/* HERO */}
      {/* <section className="relative bg-[#F1F6F0]">
        <div className="page-container grid items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#476B55] shadow-sm">
              RENOVA CANCER HOSPITAL
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#263C30] sm:text-5xl lg:text-[54px]">
              Understand Cancer.
              <span className="mt-2 block text-[#E87744]">
                Explore Your Care Options.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-8 text-[#536357] sm:text-[19px]">
              Cancer is not one disease. Different cancers can behave
              differently and may require different specialists, tests and
              treatment approaches. Explore our cancer information to
              understand the condition, recognise possible symptoms and
              learn about available care options.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cancer-types"
                className="inline-flex items-center gap-2 rounded-full bg-[#304B3C] px-7 py-4 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#263C30]"
              >
                Explore Cancer Types
                <ArrowRight size={19} />
              </a>

              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#476B55] px-7 py-4 text-base font-bold text-[#304B3C] transition duration-300 hover:bg-[#304B3C] hover:text-white"
              >
                <CalendarDays size={18} />
                Book Appointment
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#E87744]/15 blur-2xl" />

            <img
              src={cancerOverview.image}
              alt={cancerOverview.imageAlt}
              className="relative h-[300px] w-full rounded-[28px] object-cover shadow-xl sm:h-[420px]"
            />

            <div className="absolute -bottom-5 right-4 max-w-[270px] rounded-2xl bg-white p-5 shadow-xl sm:right-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F1F6F0] p-3 text-[#476B55]">
                  <HeartPulse size={25} />
                </div>

                <div>
                  <p className="font-bold text-[#263C30]">
                    Patient-centred care
                  </p>
                  <p className="mt-1 text-sm text-[#536357]">
                    Guidance throughout your journey
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* WHAT IS CANCER */}
      <section className="page-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Cancer awareness"
          title={cancerOverview.title}
          description="Understanding cancer is an important first step towards making informed decisions about your health and care."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[26px] shadow-lg">
              <img
                src={cancerOverview.image}
                alt={cancerOverview.imageAlt}
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px]"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-4 shadow-lg sm:left-8">
              <div className="flex items-center gap-3">
                <HeartPulse size={28} className="text-[#E87744]" />
                <div>
                  <p className="font-bold text-[#263C30]">
                    Knowledge matters
                  </p>
                  <p className="text-sm text-[#536357]">
                    Understand your health
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold leading-snug text-[#263C30] sm:text-3xl">
              Understanding the Condition
            </h3>

            <p className="mt-5 text-[17px] leading-8 text-[#536357] sm:text-[18px]">
              {cancerOverview.description}
            </p>

            <p className="mt-5 text-[17px] leading-8 text-[#536357] sm:text-[18px]">
              {cancerOverview.secondParagraph}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E5EDE4] bg-[#F5F8F3] p-5">
                <BookOpen className="mb-3 text-[#476B55]" size={28} />

                <h3 className="text-lg font-bold text-[#263C30]">
                  Understand
                </h3>

                <p className="mt-2 text-base leading-7 text-[#536357]">
                  Learn about cancer types, symptoms and diagnosis.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F3E5DA] bg-[#FFF8F2] p-5">
                <ShieldCheck className="mb-3 text-[#E87744]" size={28} />

                <h3 className="text-lg font-bold text-[#263C30]">
                  Make Informed Decisions
                </h3>

                <p className="mt-2 text-base leading-7 text-[#536357]">
                  Understand possible treatment and prevention options.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CANCER TYPES */}
      <section
        id="cancer-types"
        className="scroll-mt-28 bg-[#F4F7F2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="page-container">

          <SectionHeading
            eyebrow="Explore by condition"
            title="Find Care by Cancer Type"
            description="Every cancer type is different. Explore the information below to learn about possible symptoms, diagnostic tests, risk factors and available treatment approaches."
          />

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {cancerTypes.map((cancer, index) => (
              <motion.article
                key={cancer.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E4EAE1] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cancer.image}
                    alt={cancer.imageAlt}
                    className="h-[230px] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wider text-[#476B55] shadow-sm">
                    {cancer.category || "CANCER TYPE"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">

                  <h3 className="text-center text-[23px] font-bold leading-snug text-[#263C30]">
                    {cancer.title}
                  </h3>

                  <p className="mt-4 flex-1 text-center text-[16px] leading-7 text-[#536357]">
                    {cancer.cardDescription}
                  </p>

                  <div className="mt-7 flex justify-center">
                    <Link
                      to={`/services/cancer/${cancer.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#304B3C] px-7 py-3.5 text-base font-bold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#E87744] hover:shadow-md"
                    >
                      Know More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR NEXT STEP */}
      <section className="page-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] bg-[#304B3C] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[#FFD0B3]">
                Your Next Step
              </p>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[42px]">
                Every Cancer Journey Is Different
              </h2>

              <p className="mt-5 max-w-2xl text-[17px] font-medium leading-8 text-white sm:text-[18px]">
                Understanding your condition and available treatment options
                is an important part of making informed healthcare decisions.
                Every patient's needs are different. Speak with a specialist
                to discuss your diagnosis, concerns and possible next steps.
              </p>
            </div>

            <Link
              to="/appointments"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#E87744] px-7 py-4 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D96835]"
            >
              <Stethoscope size={20} />
              Book an Appointment
              <ArrowRight size={19} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* MEDICAL DISCLAIMER */}
      {/* <section className="page-container px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E6EBE3] bg-white p-5 sm:p-6">
          <p className="text-[15px] leading-7 text-[#536357]">
            <strong className="text-[#304B3C]">
              Medical information:
            </strong>{" "}
            Information on this website is intended for general education and
            awareness. It does not replace consultation, diagnosis or
            treatment by a qualified healthcare professional. If you have
            new, persistent or concerning symptoms, seek medical evaluation.
          </p>
        </div>
      </section> */}
    </main>
  );
}
