import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
  Users,
  Target,
  Eye,
  Handshake,
  Lightbulb,
  Award,
  CheckCircle2,
  Microscope,
  ClipboardCheck,
  Heart,
  Sparkles,
  Stethoscope,
  Activity,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";

import breastBanner from "../assets/home/about-breast-care1.jpg";
import assessmentImage from "../assets/home/assessment1.jpg";
import patientCareImage from "../assets/home/patient-care1.jpg";
import diagnosticImagingImage from "../assets/home/diagnostic-imaging1.jpg";
import treatmentImage from "../assets/home/cancer-treatment1.jpg";
// --------------------------------------------------
// REUSABLE REVEAL ANIMATION
// --------------------------------------------------

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

// --------------------------------------------------
// APPROACH DATA
// --------------------------------------------------

const approachItems = [
  {
    icon: Target,
    title: "Personalised Treatment Planning",
    description:
      "Developing care plans based on each patient's diagnosis, clinical needs and treatment goals.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Expertise",
    description:
      "Encouraging collaboration between relevant specialists to support well-informed treatment decisions.",
  },
  {
    icon: Microscope,
    title: "Evidence-Based Treatment Options",
    description:
      "Considering appropriate cancer treatments based on individual clinical requirements and established medical evidence.",
  },
  {
    icon: HeartHandshake,
    title: "Patient & Family Support",
    description:
      "Providing clear information, guidance and compassionate support to patients and their families.",
  },
  {
    icon: ClipboardCheck,
    title: "Continuity of Care",
    description:
      "Supporting patients from initial assessment and diagnosis through treatment and follow-up care.",
  },
];

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

// --------------------------------------------------
// MAIN ABOUT PAGE
// --------------------------------------------------

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-[#304b3c]">

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-[#e5e9e3] bg-[#f7f9f6]"
      >
        <div className="page-container px-5 py-3 sm:px-8 lg:px-12">
          <ol className="flex items-center gap-2 text-sm sm:text-base">
            <li>
              <Link
                to="/"
                className="font-semibold text-[#304b3c] transition-colors hover:text-[#f26322]"
              >
                Home
              </Link>
            </li>

            <li className="text-[#aab5aa]">/</li>

            <li className="font-semibold text-[#304b3c]">
              About Us
            </li>
          </ol>
        </div>
      </nav>

      {/* --------------------------------------------------
          ABOUT RENOVA - CENTRED HEADING + CONTENT LEFT,
          IMAGE RIGHT
      -------------------------------------------------- */}

      <section
        id="about-renova"
        className="relative scroll-mt-10 overflow-hidden bg-[#fffdf9] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12 lg:pb-24 lg:pt-8"
      >
        {/* Soft decorative curves */}
        {/* <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full border-[35px] border-[#e7eee7]/70" /> */}
        {/* <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#f26322]/[0.06] blur-3xl" /> */}

        <div className="page-container relative">

          {/* CENTRED ABOUT RENOVA HEADING */}
          <Reveal>
            <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">

              <span className="inline-flex items-center gap-2 rounded-full border border-[#dce6dc] bg-[#f1f5f0] px-5 py-2 text-xs font-bold tracking-[0.18em] text-[#304b3c] sm:text-sm">
                <HeartHandshake size={17} className="text-[#f26322]" />
                ABOUT RENOVA
              </span>

              <h1 className="display-font mt-2 text-3xl font-bold leading-tight text-[#304b3c] sm:text-3xl lg:text-6xl">
                Dedicated Cancer Care,
                <span className="mt-2 block text-[#f26322]">
                  Guided by Compassion
                </span>
              </h1>

              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#f26322]" />

            </div>
          </Reveal>

          {/* INTRO CONTENT + IMAGE */}
          <div className="grid items-center gap-6 lg:grid-cols-[1.14fr_1.09fr] lg:gap-6">
          {/* <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-4"> */}
          {/* <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16"> */}

            <Reveal direction="left">
              <div className="relative">

                <span className="text-xl font-bold tracking-[0.16em] text-[#f26322]">
                  COMPASSIONATE, PATIENT-CENTRED CARE
                </span>

                <p className="mt-5 text-base leading-8 text-[#526357] sm:text-lg">
                  At RENOVA Cancer Hospital, we are committed to providing
                  dedicated cancer care with compassion, clinical expertise
                  and a patient-centred approach. We recognise that every
                  cancer journey is unique, and every patient deserves to be
                  treated with dignity, understanding and respect.
                </p>

                <p className="mt-5 text-base leading-8 text-[#526357] sm:text-lg">
                  Our approach brings together specialist assessment,
                  personalised treatment planning and coordinated care to
                  help patients and their families make informed decisions
                  throughout their cancer journey.
                </p>

                <p className="mt-5 text-base leading-8 text-[#526357] sm:text-lg">
                  Cancer care is a journey that may involve assessment,
                  diagnosis, treatment, recovery and ongoing support.
                  Understanding each patient's needs at every stage helps
                  guide thoughtful discussions and individual care planning.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href="#our-approach"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f26322] px-7 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#df551a] hover:shadow-lg sm:text-base"
                  >
                    Explore Our Approach
                    <ArrowRight size={18} />
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#304b3c]/30 bg-white px-7 py-3 text-sm font-bold text-[#304b3c] transition duration-300 hover:-translate-y-1 hover:border-[#304b3c] hover:bg-[#304b3c] hover:text-white sm:text-base"
                  >
                    Contact Us
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </div>
            </Reveal>

            <Reveal direction="right" delay={0.12}>
              {/* <div className="relative mx-auto w-full max-w-xl"> */}
              <div className="relative w-full max-w-none">

                {/* <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[3rem] border-r-4 border-t-4 border-[#f26322] sm:-right-5 sm:-top-5 sm:h-36 sm:w-36" /> */}

                <div className="relative overflow-hidden rounded-[2rem_2rem_2rem_5rem] border-[3px] border-white shadow-2xl">
                  <img
                    src={breastBanner}
                    alt="Compassionate breast cancer care"
                    className="h-[320px] w-full object-cover sm:h-[430px] lg:h-[500px] xl:h-[520px]"
                    // className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[470px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#243c30]/30 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-2 flex max-w-[270px] items-center gap-3 rounded-2xl border border-[#e3e9df] bg-white p-4 shadow-xl sm:-left-7 sm:p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
                    <HeartHandshake size={26} />
                  </span>

                  <div>
                    <p className="font-bold text-[#304b3c]">
                      Compassionate Care
                    </p>
                    <p className="mt-1 text-sm text-[#647368]">
                      Every patient matters.
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-8 right-5 -z-10 h-32 w-32 rounded-full bg-[#f26322]/20 blur-2xl" />

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          OUR APPROACH
      -------------------------------------------------- */}

      <section
        id="our-approach"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="page-container">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            <Reveal direction="left">
              <div className="relative">

                {/* <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[2.5rem] border-l-4 border-t-4 border-[#f26322] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" /> */}

                <img
                  src={assessmentImage}
                  alt="Cancer care assessment"
                  loading="lazy"
                  className="relative h-[300px] w-full rounded-[2rem_1rem_2rem_1rem] object-cover shadow-xl sm:h-[430px]"
                />

                <div className="absolute -bottom-5 right-4 rounded-2xl bg-[#304b3c] px-5 py-4 text-white shadow-xl sm:right-[-18px]">
                  <p className="text-sm font-semibold text-white/75">
                    OUR COMMITMENT
                  </p>
                  <p className="mt-1 text-xl font-bold text-white">
                    Care with Compassion
                  </p>
                </div>

              </div>
            </Reveal>

            <Reveal direction="right">
              <span className="text-sm font-bold tracking-[0.17em] text-[#f26322]">
                OUR APPROACH TO CANCER CARE
              </span>

              <h2 className="display-font mt-3 text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl lg:text-5xl">
                Care That Goes Beyond Treatment
              </h2>

              <p className="mt-5 text-base leading-8 text-[#526357] sm:text-lg">
                Cancer care involves more than a treatment plan. It requires
                a thorough understanding of each patient's condition,
                careful consideration of appropriate treatment options and
                ongoing support throughout the care journey.
              </p>

              <p className="mt-4 text-base leading-8 text-[#526357] sm:text-lg">
                Our approach focuses on individual needs, clear communication
                and coordinated care so patients and families can take part
                in informed discussions about their care.
              </p>

              <div className="mt-7 flex items-center gap-3 border-l-4 border-[#f26322] bg-[#f7f9f6] p-4 sm:p-5">
                <HeartHandshake
                  className="shrink-0 text-[#304b3c]"
                  size={28}
                />
                <p className="text-sm font-semibold leading-7 text-[#304b3c] sm:text-base">
                  Every patient's journey is unique. Their care should
                  recognise that.
                </p>
              </div>
            </Reveal>

          </div>

          {/* APPROACH CARDS */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {approachItems.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <motion.article
                  whileHover={reduceMotion ? {} : { y: -7 }}
                  className="group h-full rounded-3xl border border-[#dfe8de] bg-white p-6 shadow-[0_5px_20px_rgba(48,75,60,0.05)] transition-all duration-300 hover:border-[#f26322]/60 hover:shadow-[0_15px_35px_rgba(48,75,60,0.12)] sm:p-7"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e7eee7] text-[#304b3c] transition-all duration-300 group-hover:rotate-[-5deg] group-hover:bg-[#304b3c] group-hover:text-white">
                    <Icon size={27} />
                  </span>

                  <h3 className="display-font mt-5 text-xl font-bold leading-snug text-[#304b3c]">
                    {title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-[#647368]">
                    {description}
                  </p>

                  {/* <div className="mt-5 h-1 w-10 rounded-full bg-[#f26322] transition-all duration-300 group-hover:w-20" /> */}
                </motion.article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
          MISSION & VISION - SEPARATE IMAGES
      -------------------------------------------------- */}

      <section
        id="mission-vision"
        className="scroll-mt-24 bg-[#f1f5f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="page-container">

          <SectionTitle
            eyebrow="OUR PURPOSE"
            title="Our Mission & Vision"
            description="Our mission and vision guide our commitment to clinical excellence, innovation and compassionate cancer care."
          />

          <div className="mt-12 space-y-8">

            {/* OUR VISION */}
            <div className="grid items-center gap-0 overflow-hidden rounded-[2rem] border border-[#dce6dc] bg-white shadow-lg lg:grid-cols-2">

              <Reveal direction="left" className="h-full">
                <div className="relative h-full min-h-[280px] overflow-hidden sm:min-h-[360px]">
                  <img
                    src={breastBanner}
                    alt="Our vision for compassionate cancer care"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243c30]/35 to-transparent" />

                  <span className="absolute bottom-6 left-6 rounded-full bg-white/95 px-5 py-2 text-sm font-bold tracking-wider text-[#304b3c] shadow-lg">
                    OUR VISION
                  </span>
                </div>
              </Reveal>

              <Reveal direction="right">
                <div className="relative p-7 sm:p-10 lg:p-12">

                  {/* <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[20px] border-[#e7eee7]/70" /> */}

                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[#fff0e8] text-[#f26322]">
                    <Eye size={32} />
                  </span>

                  <p className="relative mt-7 text-sm font-bold tracking-[0.18em] text-[#f26322]">
                    OUR VISION
                  </p>

                  <h3 className="display-font relative mt-3 text-2xl font-bold text-[#304b3c] sm:text-3xl">
                    A Trusted Leader in Cancer Care
                  </h3>

                  <p className="relative mt-5 text-base leading-8 text-[#526357] sm:text-lg">
                    To be a trusted leader in cancer care, advancing
                    clinical excellence, innovation and compassionate
                    treatment.
                  </p>

                  {/* <div className="relative mt-7 h-1 w-16 rounded-full bg-[#f26322]" /> */}

                </div>
              </Reveal>

            </div>

            {/* OUR MISSION */}
            <div className="grid items-center gap-0 overflow-hidden rounded-[2rem] border border-[#dce6dc] bg-white shadow-lg lg:grid-cols-2">

              <Reveal direction="left" className="h-full lg:order-2">
                <div className="relative h-full min-h-[280px] overflow-hidden sm:min-h-[360px]">
                  <img
                    src={treatmentImage}
                    alt="Our mission to support patients through cancer care"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243c30]/35 to-transparent" />

                  <span className="absolute bottom-6 left-6 rounded-full bg-white/95 px-5 py-2 text-sm font-bold tracking-wider text-[#304b3c] shadow-lg">
                    OUR MISSION
                  </span>
                </div>
              </Reveal>

              <Reveal direction="right" className="lg:order-1">
                <div className="relative p-7 sm:p-10 lg:p-12">

                  {/* <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full border-[20px] border-[#fff0e8]/80" /> */}

                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[#e7eee7] text-[#304b3c]">
                    <Target size={32} />
                  </span>

                  <p className="relative mt-7 text-sm font-bold tracking-[0.18em] text-[#f26322]">
                    OUR MISSION
                  </p>

                  <h3 className="display-font relative mt-3 text-2xl font-bold text-[#304b3c] sm:text-3xl">
                    Advancing Care Through Expertise
                  </h3>

                  <p className="relative mt-5 text-base leading-8 text-[#526357] sm:text-lg">
                    To advance cancer care through clinical expertise,
                    evidence-based treatment and compassionate support
                    for every patient.
                  </p>

                  {/* <div className="relative mt-7 h-1 w-16 rounded-full bg-[#f26322]" /> */}

                </div>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          CORE VALUES
      -------------------------------------------------- */}

      <section
        id="core-values"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="page-container">

          <SectionTitle
            eyebrow="WHAT GUIDES US"
            title="Our Core Values"
            description="The principles that shape how we communicate, collaborate and support patients and their families."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

                  <p className="mt-3 text-sm leading-7 text-[#647368] sm:text-base">
                    {description}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
          EXCELLENCE THROUGH INCLUSION
      -------------------------------------------------- */}

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
              At RENOVA Cancer Hospital, we believe that excellence in
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

      {/* --------------------------------------------------
          ONE RENOVA - FULL WIDTH, NO PAGE CONTAINER
      -------------------------------------------------- */}

      <section
        id="one-renova"
        className="scroll-mt-24 w-full overflow-hidden"
      >
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#243c30] via-[#304b3c] to-[#496c54] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

          {/* Decorative curves */}
          {/* <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[38px] border-white/[0.07]" />
          <div className="pointer-events-none absolute -bottom-36 left-[12%] h-80 w-80 rounded-full bg-[#f26322]/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-[25%] h-48 w-48 rounded-full border border-white/10" /> */}

          <Reveal>
            <div className="relative mx-auto max-w-5xl text-center">

              <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#ffb38d]">
                <Handshake size={20} />
                ONE RENOVA
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

      {/* --------------------------------------------------
          QUALITY & PATIENT SAFETY
      -------------------------------------------------- */}

      <section
        id="quality-safety"
        className="scroll-mt-24 bg-[#f1f5f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="page-container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          <Reveal direction="left">

            <span className="text-sm font-bold tracking-[0.17em] text-[#f26322]">
              QUALITY & PATIENT SAFETY
            </span>

            <h2 className="display-font mt-3 text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl lg:text-5xl">
              Quality and Safety Matter at Every Step
            </h2>

            <p className="mt-6 text-base leading-8 text-[#526357] sm:text-lg">
              Quality and patient safety are important considerations
              throughout the cancer care journey. Clear communication,
              careful clinical processes and attention to individual
              needs all contribute to a supportive care experience.
            </p>

            <p className="mt-4 text-base leading-8 text-[#526357] sm:text-lg">
              RENOVA's verified quality systems, accreditation,
              infection-control practices, medication safety,
              radiation safety, quality assurance and patient-safety
              programmes can be presented here once confirmed by
              the hospital team.
            </p>

            <div className="mt-7 rounded-2xl border border-[#dce6dc] bg-white p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="shrink-0 text-[#f26322]"
                  size={27}
                />
                <p className="font-semibold leading-7 text-[#304b3c]">
                  Only verified hospital policies, certifications
                  and quality information should be published here.
                </p>
              </div>
            </div>

          </Reveal>

          <Reveal direction="right">
            <div className="relative">

              <img
                src={diagnosticImagingImage}
                alt="Diagnostic imaging in cancer care"
                loading="lazy"
                className="h-[300px] w-full rounded-[2rem_1rem_2rem_1rem] object-cover shadow-xl sm:h-[420px]"
              />

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#dce6dc] bg-white p-5 shadow-lg sm:-left-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
                    <ClipboardCheck size={25} />
                  </span>

                  <div>
                    <p className="font-bold text-[#304b3c]">
                      Patient Safety
                    </p>
                    <p className="text-sm text-[#647368]">
                      A priority throughout care
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* --------------------------------------------------
          TECHNOLOGY & INNOVATION
      -------------------------------------------------- */}

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

              {/* <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[2.5rem] border-r-4 border-t-4 border-[#f26322] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" /> */}

            </div>
          </Reveal>

          <Reveal direction="right">

            <span className="text-sm font-bold tracking-[0.17em] text-[#f26322]">
              TECHNOLOGY & INNOVATION
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
              RENOVA's verified technology portfolio can be introduced
              here at a high level, with detailed information about
              available equipment and services presented in the
              Technology & Equipment section under Cancer Care Services.
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

      {/* --------------------------------------------------
          BOTTOM CTA
      -------------------------------------------------- */}

      <section className="px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-12">
        <div className="page-container">

          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#304b3c] px-6 py-10 text-center shadow-xl sm:px-12 sm:py-14">
{/* 
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-[28px] border-white/[0.06]" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#f26322]/15 blur-2xl" /> */}

              <h2 className="display-font relative text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Your Care Journey Matters
              </h2>

              <p className="relative mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Reach out to our team for guidance about appointments,
                breast care services and the next steps in your care journey.
              </p>

              <Link
                to="/appointments"
                className="relative mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f26322] px-8 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#df551a] hover:shadow-lg"
              >
                Book an Appointment
                <ArrowRight size={18} />
              </Link>

            </div>
          </Reveal>

        </div>
      </section>

    </main>
  );
}










