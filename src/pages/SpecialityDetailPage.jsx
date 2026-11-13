import { Link, Navigate, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  BriefcaseMedical,
  CalendarDays,
  HeartHandshake,
  Phone,
} from "lucide-react";

import CardSlider from "../components/CardSlider";
import { allTechnologyItems } from "../data/technologyData";

import { getSpecialityBySlug } from "../data/specialitiesData";

import { doctors } from "../data/doctorsData";
import ContentVideoCarousel from "../components/ContentVideoCarousel";

import appointmentsWave from "../assets/appointments-wave.jpg";
// Existing local project images
import assessmentImage from "../assets/home/assessment.jpg";
import breastCareOneImage from "../assets/home/breastCare1.jpg";
import breastCareTwoImage from "../assets/home/breastCare2.jpg";
import breastScreeningImage from "../assets/home/breast-screening.jpg";
import diagnosisImage from "../assets/home/diagnosis.jpg";
import diagnosticImagingImage from "../assets/home/diagnostic-imaging.jpg";
import medicalOncologyImage from "../assets/home/medical-oncology.jpg";
import patientCareImage from "../assets/home/patientCare.jpg";
import patientSupportImage from "../assets/home/patient-support.jpg";
import radiationOncologyImage from "../assets/home/radiation-oncology.jpg";
import surgicalOncologyImage from "../assets/home/surgical-oncology.jpg";
import treatmentImage from "../assets/home/treatment.jpg";

// Three relevant images per speciality
const specialityImages = {
  "medical-oncology": [
    medicalOncologyImage,
    treatmentImage,
    patientCareImage,
  ],
  "surgical-oncology": [
    surgicalOncologyImage,
    diagnosisImage,
    treatmentImage,
  ],
  "radiation-oncology": [
    radiationOncologyImage,
    diagnosticImagingImage,
    treatmentImage,
  ],
  "haemato-oncology": [
    medicalOncologyImage,
    patientCareImage,
    assessmentImage,
  ],
  "gynaecological-oncology": [
    breastCareTwoImage,
    breastScreeningImage,
    treatmentImage,
  ],
  "paediatric-oncology": [
    patientCareImage,
    patientSupportImage,
    assessmentImage,
  ],
  "neuro-oncology": [
    diagnosisImage,
    diagnosticImagingImage,
    radiationOncologyImage,
  ],
  "onco-radiology": [
    diagnosticImagingImage,
    diagnosisImage,
    assessmentImage,
  ],
  "nuclear-medicine-theranostics": [
    diagnosticImagingImage,
    radiationOncologyImage,
    treatmentImage,
  ],
  "interventional-oncology": [
    diagnosisImage,
    treatmentImage,
    surgicalOncologyImage,
  ],
  "preventive-oncology": [
    breastScreeningImage,
    breastCareOneImage,
    assessmentImage,
  ],
  "palliative-supportive-care": [
    patientSupportImage,
    patientCareImage,
    breastCareTwoImage,
  ],
};

function getYouTubeId(url = "") {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      return (
        parsed.searchParams.get("v") ||
        parsed.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1] ||
        ""
      );
    }

    return "";
  } catch {
    return "";
  }
}

export default function SpecialityDetailPage() {
  const { slug } = useParams();
  const reduceMotion = useReducedMotion();
  const speciality = getSpecialityBySlug(slug);

   const [openFAQIndex, setOpenFAQIndex] = useState(0)

  if (!speciality) {
    return <Navigate to="/specialities" replace />;
  }

  // Only show doctors whose speciality exactly matches this page.
  const specialityDoctors = doctors.filter(
    (doctor) => doctor.speciality === speciality.title
  );

  // Display only technologies related to the current speciality.
const specialityTechnologies = allTechnologyItems.filter((technology) =>
  technology.specialities?.includes(speciality.title)
);

const renderTechnologyCard = (technology) => (
  <Link
    to={`/technology/${technology.slug}`}
    className="group flex h-full min-h-[410px] w-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
    // className="group flex h-full min-h-[410px] w-full max-w-[420px] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
  >
    {/* TECHNOLOGY IMAGE */}
    <div className="relative h-48 shrink-0 overflow-hidden">
      <img
        src={technology.image}
        alt={technology.imageAlt || technology.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#263C30]/60 to-transparent" />

      <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#476B55]">
        {technology.category}
      </span>
    </div>

    {/* TECHNOLOGY CONTENT */}
    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-lg font-bold leading-snug text-[#263C30] transition-colors group-hover:text-[#E87744]">
        {technology.title}
      </h3>

      <p className="mt-3 flex-1 text-[15px] leading-7 text-[#59695D]">
        {technology.description}
      </p>

      <span className="mt-5 inline-flex min-h-10 items-center gap-2 self-start rounded-full bg-[#304B3C] px-5 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-[#E87744]">
        Know More
        <ArrowRight size={16} />
      </span>
    </div>
  </Link>
);
  // Only show YouTube testimonial videos belonging to matching doctors.
  const testimonialVideos = specialityDoctors.flatMap((doctor) =>
    (doctor.testimonialVideos || [])
      .map((video, index) => {
        const videoId = getYouTubeId(video.youtubeUrl || "");
        if (!videoId) return null;

        return {
          id: `${doctor.id}-testimonial-${index}`,
          title: video.title || `${doctor.name} – Patient Story`,
          category: speciality.title,
          href: video.youtubeUrl,
          thumbnail:
            video.thumbnail ||
            `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        };
      })
      .filter(Boolean)
  );

  const images = specialityImages[speciality.slug] || [
    assessmentImage,
    patientCareImage,
    treatmentImage,
  ];

  const doctorGridClass =
    specialityDoctors.length === 1
      ? "mx-auto grid max-w-sm grid-cols-1"
      : specialityDoctors.length === 2
        ? "mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-ink">

      {/* Breadcrumb */}
      {/* BREADCRUMB */}
<nav
  aria-label="Breadcrumb"
  className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
  style={{
    backgroundImage: `url(${appointmentsWave})`,
  }}
>
  <div className="page-container relative z-10 mx-auto px-5 py-3 sm:px-8 lg:px-12">
    <ol className="flex flex-wrap items-center gap-2 text-base">
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
          to="/specialities"
          className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
        >
          Specialities
        </Link>
      </li>

      <li aria-hidden="true" className="text-white/90 drop-shadow-md">
        /
      </li>

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        {speciality.title}
      </li>
    </ol>
  </div>
</nav>


      {/* About speciality */}
      <section className="w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* Center heading - no repeated heading on the left */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-14"
        >
          <span className="text-sm font-bold tracking-[0.18em] text-sky sm:text-base">
            SPECIALITY OVERVIEW
          </span>

          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            {speciality.title}
          </h1>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#e87744]" />
        </motion.div>

        {/* Left content and right image */}
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
          >
            <h2 className="font-display text-2xl font-bold leading-snug text-royal sm:text-3xl">
              {speciality.heading}
            </h2>

            <p className="mt-6 text-base leading-8 text-[#526357] sm:text-lg sm:leading-9">
              {speciality.description}
            </p>

            {speciality.whenToConsult && (
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.5 }}
                className="mt-8 rounded-2xl border border-line bg-mist p-5 shadow-sm sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-royal shadow-sm">
                    <HeartHandshake size={23} />
                  </span>

                  <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                    When to Consult
                  </h3>
                </div>

                <p className="mt-4 text-base leading-8 text-[#526357] sm:text-lg">
                  {speciality.whenToConsult}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.1,
            }}
            className="relative"
          >
            <motion.div
              whileHover={reduceMotion ? {} : { y: -7 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-[2rem] border border-line bg-white p-2 shadow-[0_18px_45px_rgba(38,59,80,0.13)]"
            >
              <img
                src={images[0]}
                alt={`${speciality.title} care`}
                className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[380px] lg:h-[460px]"
              />
            </motion.div>

            <div className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-[2rem] bg-[#e8f0ea] sm:h-36 sm:w-36" />
            <div className="absolute -right-3 -top-3 -z-10 h-20 w-20 rounded-full bg-[#fff1e9] sm:h-28 sm:w-28" />
          </motion.div>
        </div>
      </section>

      {/* Sub-specialities */}
      {speciality.subSpecialties?.length > 0 && (
        <section className="bg-mist px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold tracking-[0.16em] text-sky sm:text-base">
                AREAS OF FOCUS
              </span>

              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                Sub-specialities
              </h2>
            </div>

            {/* <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"> */}
            <div className="mt-9 flex flex-wrap justify-center gap-5">
              {speciality.subSpecialties.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 18,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                  whileHover={reduceMotion ? {} : { y: -5 }}
                  className="flex min-h-[76px] w-fit max-w-full items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-sm transition duration-300 hover:border-royal hover:shadow-md"
                  // className="flex min-h-[76px] items-center gap-4 rounded-2xl border border-line bg-white px-5 py-5 shadow-sm transition duration-300 hover:border-royal hover:shadow-md"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fff1e9] text-sky">
                    <ArrowRight size={19} />
                  </span>

                  <span className="text-base font-semibold leading-7 text-navy sm:text-lg">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Care & Treatment Areas */}
      <section className="w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">

          {/* Treatment points */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            <span className="text-sm font-bold tracking-[0.16em] text-sky sm:text-base">
              OUR CLINICAL SERVICES
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              Care &amp; Treatment Areas
            </h2>

            <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {speciality.careAreas.map((area, index) => (
                <motion.li
                  key={area}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : -12,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : index * 0.035,
                  }}
                  className="flex items-start gap-3 border-b border-[#e8ece6] pb-4 text-base leading-7 text-[#405247] sm:text-[17px]"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-royal"
                  />
                  <span>{area}</span>
                </motion.li>
              ))}
            </ul>

            {speciality.note && (
              <p className="mt-6 rounded-xl border-l-4 border-sky bg-[#fff8f3] p-5 text-base leading-8 text-[#647368] sm:text-lg">
                {speciality.note}
              </p>
            )}
          </motion.div>

          {/* Treatment images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <motion.div
              whileHover={reduceMotion ? {} : { y: -7, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="row-span-2 overflow-hidden rounded-[1.5rem] border border-line bg-white p-1.5 shadow-md"
            >
              <img
                src={images[0]}
                alt={`${speciality.title} clinical care`}
                loading="lazy"
                className="h-full min-h-[300px] w-full rounded-[1.1rem] object-cover sm:min-h-[410px]"
              />
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? {} : { y: -7, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-1.5 shadow-md"
            >
              <img
                src={images[1]}
                alt={`${speciality.title} treatment`}
                loading="lazy"
                className="h-[140px] w-full rounded-[1.1rem] object-cover sm:h-[195px]"
              />
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? {} : { y: -7, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-1.5 shadow-md"
            >
              <img
                src={images[2]}
                alt={`${speciality.title} patient care`}
                loading="lazy"
                className="h-[140px] w-full rounded-[1.1rem] object-cover sm:h-[195px]"
              />
            </motion.div>
          </div>
        </div>
      </section>


     {/* SPECIALITY RELATED TECHNOLOGIES */}
{specialityTechnologies.length > 0 && (
  <section className="section-padding overflow-hidden bg-mist">
    <div className="page-container px-5 sm:px-8 lg:px-12">

      {/* SECTION HEADING */}
      <motion.div
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 20,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-10 max-w-3xl text-center"
      >
        <span className="text-sm font-bold tracking-[0.16em] text-sky">
          ADVANCED TECHNOLOGY
        </span>

        <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
          Technologies for {speciality.title}
        </h2>

        <p className="mt-4 text-base leading-7 text-[#647368]">
          Explore the technologies associated with this speciality
          and learn how they support diagnosis and treatment.
        </p>
      </motion.div>

      {/* 1 OR 2 TECHNOLOGIES - CENTERED CARDS */}
{specialityTechnologies.length <= 2 ? (
  <div className="mx-auto flex flex-wrap justify-center gap-4">
    {specialityTechnologies.map((technology) => (
      <div
        key={technology.slug}
        className="w-full max-w-[420px] sm:w-[calc(50%-8px)]"
      >
        {renderTechnologyCard(technology)}
      </div>
    ))}
  </div>
) : (
  /* 3 OR MORE TECHNOLOGIES - SLIDER */
  <CardSlider
    items={specialityTechnologies}
    ariaLabel={`${speciality.title} technologies`}
    renderItem={renderTechnologyCard}
  />
)}

    </div>
  </section>
)}

      {/* Full-width Contact / Appointment CTA */}
      <section className="w-full ">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          whileHover={reduceMotion ? {} : { y: -3 }}
          className="relative w-full overflow-hidden border border-[#b8d2bd] bg-gradient-to-r from-[#0f3013] via-[#162b17] to-[#052601] px-6 py-9 shadow-[0_12px_35px_rgba(48,91,58,0.12)] sm:px-12 sm:py-13 lg:px-24 lg:py-14"
        >
          {/* Decorative background circles */}
          {/* <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#c9dfcb]/60" /> */}
          {/* <div className="pointer-events-none absolute -bottom-20 right-[28%] h-48 w-48 rounded-full bg-white/40" /> */}

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-1xl">
              <span className="text-sm font-bold tracking-[0.16em] text-[#df5f14] sm:text-base">
                WE ARE HERE TO HELP
              </span>

              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-[#f8f6f4] sm:text-3xl lg:text-4xl">
                Need guidance about {speciality.title}?
              </h2>

              <p className="mt-4 text-base leading-8 text-[#b9bdba] sm:text-lg">
                Contact our team or request an appointment to discuss the next
                steps in your care. Our team is here to help guide you through
                your treatment journey.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#477653] bg-white px-7 py-3 text-base font-bold text-[#477653] shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#477653] hover:text-white hover:shadow-lg"
              >
                <Phone size={18} />
                Contact Us
              </Link>

              <Link
                to="/appointments"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#477653] px-7 py-3 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#365e40] hover:shadow-lg"
              >
                <CalendarDays size={18} />
                Book an Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Matching speciality doctors only */}
      {specialityDoctors.length > 0 && (
        <section className="bg-[#f6f9f6] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-[1500px]">

            <div className="text-center">
              <span className="text-sm font-bold tracking-[0.16em] text-sky sm:text-base">
                MEET THE EXPERTS
              </span>

              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                {speciality.title} Doctors
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#647368] sm:text-lg">
                Meet the specialists for this department and explore their
                profiles, experience and areas of expertise.
              </p>
            </div>

            <div className={`mt-10 gap-6 ${doctorGridClass}`}>
              {specialityDoctors.map((doctor, index) => (
                <motion.article
                  key={doctor.id}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 22,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
                >
                  <Link
                    to={`/doctors/${doctor.slug}`}
                    aria-label={`View ${doctor.name} profile`}
                    className="block overflow-hidden bg-ice"
                  >
                    <div className="h-[255px] overflow-hidden sm:h-[245px] lg:h-[265px]">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-xl font-bold leading-snug text-navy">
                      {doctor.name}
                    </h3>

                    <p className="mt-1 text-base leading-7 text-[#647368]">
                      {doctor.designation}
                    </p>

                    <p className="mt-1 text-base font-semibold leading-7 text-royal">
                      {doctor.speciality}
                    </p>

                    <div className="mt-1 space-y-1 text-base text-[#647368]">
                      <p className="flex items-start gap-2">
                        <BriefcaseMedical
                          size={18}
                          className="mt-1 shrink-0 text-royal"
                        />
                        <span>{doctor.experience}+ Years Experience</span>
                      </p>

                      <p className="flex items-start gap-2">
                        <MapPin
                          size={18}
                          className="mt-1 shrink-0 text-royal"
                        />
                        <span>{doctor.location}</span>
                      </p>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
                      <Link
                        to={`/doctors/${doctor.slug}`}
                        className="inline-flex min-h-11 items-center justify-center gap-1 rounded-full border border-royal px-2 py-2 text-center text-sm font-bold text-royal transition hover:bg-royal hover:text-white"
                      >
                        View Profile
                        <ArrowRight size={15} />
                      </Link>

                      <Link
                        to={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-royal px-2 py-2 text-center text-sm font-bold text-white transition hover:bg-royaldeep"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Patient testimonial videos */}
      {testimonialVideos.length > 0 && (
        <ContentVideoCarousel
          eyebrow="PATIENT STORIES"
          title={`${speciality.title} – Patient Testimonials`}
          subtitle="Watch patient stories shared by people connected with this speciality."
          items={testimonialVideos}
          slidesPerView={4}
          autoPlay
          interval={4500}
          background="white"
        />
      )}


      {/* SPECIALITY FAQs */}
      {speciality.faqs?.length > 0 && (
        <section className="bg-mist px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-5xl">

            <div className="mb-9 text-center">
              <span className="text-sm font-bold tracking-[0.16em] text-sky sm:text-base">
                HAVE QUESTIONS?
              </span>

              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#647368]">
                Find answers to common questions about {speciality.title},
                diagnosis and treatment options.
              </p>
            </div>

            <div className="space-y-3">
              {speciality.faqs.map((faq, index) => {
                const isOpen = openFAQIndex === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-royal shadow-sm"
                        : "border-line hover:border-royal"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFAQIndex(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="flex items-start gap-3">
                        <span className="shrink-0 text-base font-bold text-sky">
                          {String(index + 1).padStart(2, "0")}.
                        </span>

                        <span className="text-base font-semibold leading-7 text-navy sm:text-lg">
                          {faq.question}
                        </span>
                      </span>

                      <ArrowRight
                        size={20}
                        className={`shrink-0 text-royal transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-line px-5 pb-5 pt-4 sm:px-6">
                        <p className="pl-8 text-[15px] leading-7 text-[#59695D] sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}


    </main>
  );
}

