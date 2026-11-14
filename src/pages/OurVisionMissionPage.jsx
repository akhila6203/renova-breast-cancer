
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Users,
  Target,
  Eye,
  Handshake,
  Lightbulb,
  Award,
  CheckCircle2,
  ClipboardCheck,
  Heart,
  Sparkles,
} from "lucide-react";

import appointmentsWave from "../assets/appointments-wave.jpg";

import SectionTitle from "../components/SectionTitle";

import breastBanner from "../assets/home/about-breast-care1.jpg";
import patientCareImage from "../assets/home/patient-care1.jpg";
import diagnosticImagingImage from "../assets/home/diagnostic-imaging1.jpg";
import treatmentImage from "../assets/home/cancer-treatment1.jpg";
import missionExpertiseImage from "../assets/home/mission-expertise.jpg";

// REUSABLE REVEAL ANIMATION
function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  const positions = {
    left: { x: -45, y: 0 },
    right: { x: 45, y: 0 },
    up: { x: 0, y: 28 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...(reduceMotion ? { x: 0, y: 0 } : positions[direction]),
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// CORE VALUES DATA
const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "Understanding individual concerns and treating every patient with kindness and empathy.",
  },
  {
    icon: Users,
    title: "Respect",
    description:
      "Recognising the dignity, choices and individual needs of every patient and family.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "Valuing clinical expertise and thoughtful decisions in cancer care.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Promoting honest communication, transparency and responsible care.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Bringing relevant healthcare professionals together to support coordinated care.",
  },
  {
    icon: Heart,
    title: "Patient-Centred Care",
    description:
      "Keeping the patient's wellbeing, preferences and needs at the heart of every decision.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Remaining open to meaningful improvements in healthcare practices and technology.",
  },
  {
    icon: Sparkles,
    title: "Inclusion",
    description:
      "Valuing individual differences and creating a respectful, supportive care environment.",
  },
];

export default function OurVisionMissionPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-[#304b3c]">

      {/* BREADCRUMB */}
      {/* BREADCRUMB */}
<nav
  aria-label="Breadcrumb"
  className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
  style={{
    backgroundImage: `url(${appointmentsWave})`,
  }}
>
  <div className="page-container relative z-10 mx-auto px-5 py-3 sm:px-8 lg:px-12">
    <ol className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
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
          to="/about"
          className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
        >
          About Us
        </Link>
      </li>

      <li aria-hidden="true" className="text-white/90 drop-shadow-md">
        /
      </li>

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        Our Vision &amp; Mission
      </li>
    </ol>
  </div>
</nav>

      {/* PAGE HEADING */}
      <section className=" px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        <div className="page-container">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#dce6dc] bg-[#f1f5f0] px-5 py-2 text-xs font-bold tracking-[0.18em] text-[#304b3c] sm:text-sm">
                <HeartHandshake size={17} className="text-[#f26322]" />
                OUR PURPOSE
              </span>

              <h1 className="display-font mt-3 text-2xl font-bold leading-tight text-[#304b3c] sm:text-3xl lg:text-5xl">
                Our Vision &amp; Mission
              </h1>
              {/* <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#f26322]" /> */}
              <p className="mt-3 text-base leading-7 text-[#526357] sm:text-lg">
                Our mission and vision guide our commitment to clinical
                excellence, innovation and compassionate cancer care.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION - TWO IMAGE TOP CARDS */}
      <section
        id="mission-vision"
        className="scroll-mt-24 px-5 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-10"
      >
        <div className="page-container">

          <div className="grid items-stretch gap-7 lg:grid-cols-2">

            {/* OUR VISION CARD */}
            <Reveal direction="left" className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#dce6dc] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative h-[240px] shrink-0 overflow-hidden sm:h-[300px]">
                  <img
                    src={breastBanner}
                    alt="Our vision for compassionate cancer care"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#243c30]/50 to-transparent" />

                  <span className="absolute bottom-6 left-6 rounded-full bg-white/95 px-5 py-2 text-sm font-bold tracking-wider text-[#304b3c] shadow-lg">
                    OUR VISION
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#fff0e8] text-[#f26322]">
                    <Eye size={32} />
                  </span> */}

                  <p className="mt-6 text-sm font-bold tracking-[0.18em] text-[#f26322]">
                    OUR VISION
                  </p>

                  <h2 className="display-font mt-3 text-2xl font-bold text-[#304b3c] sm:text-3xl">
                    A Trusted Leader in Cancer Care
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#526357] sm:text-lg">
                    To be a trusted leader in cancer care, advancing
                    clinical excellence, innovation and compassionate
                    treatment.
                  </p>

                </div>
              </article>
            </Reveal>

            {/* OUR MISSION CARD */}
            <Reveal direction="right" delay={0.12} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#dce6dc] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative h-[240px] shrink-0 overflow-hidden sm:h-[300px]">
                  <img
                    // src={treatmentImage}
                    src={missionExpertiseImage}
                    alt="Our mission to support patients through cancer care"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#243c30]/50 to-transparent" />

                  <span className="absolute bottom-6 left-6 rounded-full bg-white/95 px-5 py-2 text-sm font-bold tracking-wider text-[#304b3c] shadow-lg">
                    OUR MISSION
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#e7eee7] text-[#304b3c]">
                    <Target size={32} />
                  </span> */}

                  <p className="mt-3 text-sm font-bold tracking-[0.18em] text-[#f26322]">
                    OUR MISSION
                  </p>

                  <h2 className="display-font mt-3 text-2xl font-bold text-[#304b3c] sm:text-3xl">
                    Advancing Care Through Expertise
                  </h2>

                  <p className="mt-3 text-base leading-8 text-[#526357] sm:text-lg">
                    To advance cancer care through clinical expertise,
                    evidence-based treatment and compassionate support
                    for every patient.
                  </p>

                </div>
              </article>
            </Reveal>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section
        id="core-values"
        className="scroll-mt-24 px-5 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-14"
      >
        <div className="page-container">

          <SectionTitle
            eyebrow="WHAT GUIDES US"
            title="Our Core Values"
            description="The principles that shape how we communicate, collaborate and support patients and their families."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <motion.article
                  whileHover={reduceMotion ? {} : { y: -6, scale: 1.015 }}
                  className="group h-full rounded-2xl border border-[#dfe8de] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#f26322]/60 hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e7eee7] text-[#304b3c] transition-all duration-300 group-hover:bg-[#304b3c] group-hover:text-white">
                      <Icon size={23} />
                    </span>

                    <span className="text-3xl font-bold text-[#304b3c]/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="display-font mt-5 text-lg font-bold text-[#304b3c] sm:text-xl">
                    {title}
                  </h3>

                  <p className="mt-3 text-[16px] leading-7 text-[#647368] sm:text-[18px]">
                    {description}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* EXCELLENCE THROUGH INCLUSION */}
      <section
        id="inclusion"
        className="scroll-mt-24 overflow-hidden bg-[#f1f5f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <Reveal direction="left">
            <div className="relative">

              <img
                src={patientCareImage}
                alt="Patient-centred care and support"
                loading="lazy"
                className="h-[300px] w-full rounded-[2rem_2rem_2rem_5rem] object-cover shadow-xl sm:h-[430px]"
              />

              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white p-4 shadow-xl sm:-right-5 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff0e8] text-[#f26322]">
                    <Users size={24} />
                  </span>

                  <div>
                    <p className="font-bold text-[#304b3c]">
                      Every Voice Matters
                    </p>
                    <p className="text-sm text-[#647368]">
                      Respect. Understanding. Inclusion.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

          <Reveal direction="right">

            <span className="text-sm font-bold tracking-[0.17em] text-[#f26322]">
              EXCELLENCE THROUGH INCLUSION
            </span>

            <h2 className="display-font mt-3 text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl lg:text-5xl">
              Different Perspectives,
              <span className="block text-[#f26322]">
                One Shared Goal
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#526357] sm:text-lg">
              At Kaizen Oncology Cancer Hospital, we believe that excellence in
              cancer care comes from respecting individual differences,
              valuing diverse perspectives and working together towards
              a shared goal.
            </p>

            <p className="mt-4 text-base leading-8 text-[#526357] sm:text-lg">
              We strive to create a supportive environment where every
              patient and family feels heard, respected and included
              throughout their cancer care journey.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Respecting individual differences",
                "Valuing diverse perspectives",
                "Listening to patients and families",
                "Working together towards better-informed care",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#f26322]"
                  />
                  <p className="text-base font-semibold text-[#304b3c]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </Reveal>
        </div>
      </section>

      {/* ONE Kaizen Oncology */}
      <section
        id="one-Kaizen Oncology"
        className="scroll-mt-24 w-full overflow-hidden"
      >
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#243c30] via-[#304b3c] to-[#496c54] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

          <Reveal>
            <div className="relative mx-auto max-w-5xl text-center">

              <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#ffb38d]">
                <Handshake size={20} />
                ONE Kaizen Oncology
              </span>

              <h2 className="display-font mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Working Together to Advance Cancer Care
              </h2>

              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#f26322]" />

              <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-white/85 sm:text-lg">
                Meaningful progress in cancer care comes through
                collaboration, clinical expertise and compassion.
                By bringing together healthcare professionals,
                patients and families, we aim to support informed
                treatment decisions and personalised care at every
                stage of the cancer journey.
              </p>

              <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-white/85 sm:text-lg">
                Our shared commitment is to provide care that
                respects every patient, recognises individual needs
                and keeps wellbeing at the heart of every decision.
              </p>

              <Link
                to="/contact"
                className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f26322] px-8 py-3 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#df551a] hover:shadow-xl"
              >
                Connect With Our Team
                <ArrowRight size={18} />
              </Link>

            </div>
          </Reveal>

        </div>
      </section>

      {/* TECHNOLOGY & INNOVATION */}
      <section
        id="technology"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <Reveal direction="left">
            <div className="relative">

              <img
                src={treatmentImage}
                alt="Cancer treatment and clinical care"
                loading="lazy"
                className="h-[300px] w-full rounded-[2rem_2rem_2rem_5rem] object-cover shadow-xl sm:h-[430px]"
              />

            </div>
          </Reveal>

          <Reveal direction="right">

            <span className="text-sm font-bold tracking-[0.17em] text-[#f26322]">
              TECHNOLOGY &amp; INNOVATION
            </span>

            <h2 className="display-font mt-3 text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl lg:text-5xl">
              Supporting Progress in Cancer Care
            </h2>

            <p className="mt-6 text-base leading-8 text-[#526357] sm:text-lg">
              Technology and innovation continue to shape cancer
              diagnosis and treatment. Appropriate diagnostic tools,
              treatment technologies and clinical developments can
              support specialists in evaluating individual patient
              needs and discussing suitable care options.
            </p>

            <p className="mt-4 text-base leading-8 text-[#526357] sm:text-lg">
              Kaizen Oncology's verified technology portfolio can be introduced
              here at a high level, with detailed information about
              available equipment and services presented in the
              Technology &amp; Equipment section under Cancer Care Services.
            </p>

            <Link
              to="/patient-care"
              className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#304b3c] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3d5a47] hover:shadow-lg"
            >
              Explore Cancer Care Services
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </Reveal>

        </div>
      </section>

    </main>
  );
}
