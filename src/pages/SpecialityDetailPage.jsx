import { Link, Navigate, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  BriefcaseMedical,
  CalendarDays,
  HeartHandshake,
  Phone,
} from "lucide-react";

import { getSpecialityBySlug } from "../data/specialitiesData";
import { doctors } from "../data/doctorsData";
import ContentVideoCarousel from "../components/ContentVideoCarousel";

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

  if (!speciality) {
    return <Navigate to="/specialities" replace />;
  }

  // Only show doctors whose speciality exactly matches this page.
  const specialityDoctors = doctors.filter(
    (doctor) => doctor.speciality === speciality.title
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
      <nav aria-label="Breadcrumb" className="border-b border-line bg-mist">
        <div className="page-container px-5 py-3 sm:px-8 lg:px-12">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li>
              <Link
                to="/"
                className="font-semibold text-royal transition hover:text-sky"
              >
                Home
              </Link>
            </li>

            <li className="text-[#aab5aa]">/</li>

            <li>
              <Link
                to="/specialities"
                className="font-semibold text-royal transition hover:text-sky"
              >
                Specialities
              </Link>
            </li>

            <li className="text-[#aab5aa]">/</li>

            <li className="font-semibold text-navy">
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

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="flex min-h-[76px] items-center gap-4 rounded-2xl border border-line bg-white px-5 py-5 shadow-sm transition duration-300 hover:border-royal hover:shadow-md"
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
    </main>
  );
}













// import { Link, Navigate, useParams } from "react-router-dom";
// import { motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowRight,
//   CheckCircle2,
//   MapPin,
//   BriefcaseMedical,
//   CalendarDays,
//   HeartHandshake,
//   Phone,
// } from "lucide-react";

// import { getSpecialityBySlug } from "../data/specialitiesData";
// import { doctors } from "../data/doctorsData";
// import ContentVideoCarousel from "../components/ContentVideoCarousel";

// // Existing local project images. No external image URLs are used for the page.
// import assessmentImage from "../assets/home/assessment.jpg";
// import breastCareOneImage from "../assets/home/breastCare1.jpg";
// import breastCareTwoImage from "../assets/home/breastCare2.jpg";
// import breastScreeningImage from "../assets/home/breast-screening.jpg";
// import diagnosisImage from "../assets/home/diagnosis.jpg";
// import diagnosticImagingImage from "../assets/home/diagnostic-imaging.jpg";
// import medicalOncologyImage from "../assets/home/medical-oncology.jpg";
// import patientCareImage from "../assets/home/patientCare.jpg";
// import patientSupportImage from "../assets/home/patient-support.jpg";
// import radiationOncologyImage from "../assets/home/radiation-oncology.jpg";
// import surgicalOncologyImage from "../assets/home/surgical-oncology.jpg";
// import treatmentImage from "../assets/home/treatment.jpg";

// // Three relevant images per speciality, selected from the assets already in src/assets/home.
// const specialityImages = {
//   "medical-oncology": [
//     medicalOncologyImage,
//     treatmentImage,
//     patientCareImage,
//   ],
//   "surgical-oncology": [
//     surgicalOncologyImage,
//     diagnosisImage,
//     treatmentImage,
//   ],
//   "radiation-oncology": [
//     radiationOncologyImage,
//     diagnosticImagingImage,
//     treatmentImage,
//   ],
//   "haemato-oncology": [
//     medicalOncologyImage,
//     patientCareImage,
//     assessmentImage,
//   ],
//   "gynaecological-oncology": [
//     breastCareTwoImage,
//     breastScreeningImage,
//     treatmentImage,
//   ],
//   "paediatric-oncology": [
//     patientCareImage,
//     patientSupportImage,
//     assessmentImage,
//   ],
//   "neuro-oncology": [
//     diagnosisImage,
//     diagnosticImagingImage,
//     radiationOncologyImage,
//   ],
//   "onco-radiology": [
//     diagnosticImagingImage,
//     diagnosisImage,
//     assessmentImage,
//   ],
//   "nuclear-medicine-theranostics": [
//     diagnosticImagingImage,
//     radiationOncologyImage,
//     treatmentImage,
//   ],
//   "interventional-oncology": [
//     diagnosisImage,
//     treatmentImage,
//     surgicalOncologyImage,
//   ],
//   "preventive-oncology": [
//     breastScreeningImage,
//     breastCareOneImage,
//     assessmentImage,
//   ],
//   "palliative-supportive-care": [
//     patientSupportImage,
//     patientCareImage,
//     breastCareTwoImage,
//   ],
// };

// function getYouTubeId(url = "") {
//   try {
//     const parsed = new URL(url);
//     const host = parsed.hostname.replace(/^www\./, "");

//     if (host === "youtu.be") {
//       return parsed.pathname.split("/").filter(Boolean)[0] || "";
//     }

//     if (
//       host === "youtube.com" ||
//       host === "m.youtube.com" ||
//       host === "youtube-nocookie.com"
//     ) {
//       return (
//         parsed.searchParams.get("v") ||
//         parsed.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1] ||
//         ""
//       );
//     }

//     return "";
//   } catch {
//     return "";
//   }
// }

// export default function SpecialityDetailPage() {
//   const { slug } = useParams();
//   const reduceMotion = useReducedMotion();
//   const speciality = getSpecialityBySlug(slug);

//   if (!speciality) {
//     return <Navigate to="/specialities" replace />;
//   }

//   // Only show doctors whose speciality exactly matches this page.
//   const specialityDoctors = doctors.filter(
//     (doctor) => doctor.speciality === speciality.title
//   );

//   // Use only YouTube patient testimonial videos belonging to matching doctors.
//   const testimonialVideos = specialityDoctors.flatMap((doctor) =>
//     (doctor.testimonialVideos || [])
//       .map((video, index) => {
//         const videoId = getYouTubeId(video.youtubeUrl || "");
//         if (!videoId) return null;

//         return {
//           id: `${doctor.id}-testimonial-${index}`,
//           title: video.title || `${doctor.name} – Patient Story`,
//           category: speciality.title,
//           href: video.youtubeUrl,
//           thumbnail:
//             video.thumbnail ||
//             `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
//         };
//       })
//       .filter(Boolean)
//   );

//   const images = specialityImages[speciality.slug] || [
//     assessmentImage,
//     patientCareImage,
//     treatmentImage,
//   ];

//   const doctorGridClass =
//     specialityDoctors.length === 1
//       ? "mx-auto grid max-w-sm grid-cols-1"
//       : specialityDoctors.length === 2
//         ? "mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2"
//         : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-ink">
//       {/* Breadcrumb */}
//       <nav aria-label="Breadcrumb" className="border-b border-line bg-mist">
//         <div className="page-container px-5 py-3 sm:px-8 lg:px-12">
//           <ol className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
//             <li>
//               <Link
//                 to="/"
//                 className="font-semibold text-royal transition hover:text-sky"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="text-[#aab5aa]">/</li>
//             <li>
//               <Link
//                 to="/specialities"
//                 className="font-semibold text-royal transition hover:text-sky"
//               >
//                 Specialities
//               </Link>
//             </li>
//             <li className="text-[#aab5aa]">/</li>
//             <li className="font-semibold text-navy">{speciality.title}</li>
//           </ol>
//         </div>
//       </nav>

//       {/* About this speciality: content left, image right */}
//       <section className="page-container grid items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, x: reduceMotion ? 0 : -22 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: reduceMotion ? 0 : 0.55 }}
//         >
//           <span className="text-sm font-bold tracking-[0.17em] text-sky">
//             SPECIALITY OVERVIEW
//           </span>

//           <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.65rem]">
//             {speciality.title}
//           </h1>

//           <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-royal sm:text-2xl">
//             {speciality.heading}
//           </h2>

//           <p className="mt-4 text-base leading-8 text-[#526357] sm:text-[17px]">
//             {speciality.description}
//           </p>

//           {speciality.whenToConsult && (
//             <div className="mt-6 rounded-2xl border border-line bg-mist p-5 sm:p-6">
//               <div className="flex items-center gap-3">
//                 <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-royal">
//                   <HeartHandshake size={21} />
//                 </span>
//                 <h3 className="font-display text-lg font-bold text-navy">
//                   When to Consult
//                 </h3>
//               </div>
//               <p className="mt-3 text-sm leading-7 text-[#526357] sm:text-base">
//                 {speciality.whenToConsult}
//               </p>
//             </div>
//           )}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: reduceMotion ? 0 : 22 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: reduceMotion ? 0 : 0.6, delay: 0.08 }}
//           className="relative"
//         >
//           <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-2 shadow-[0_12px_35px_rgba(47,70,56,0.10)]">
//             <img
//               src={images[0]}
//               alt={`${speciality.title} care`}
//               className="h-[260px] w-full rounded-[1.1rem] object-cover sm:h-[340px] lg:h-[390px]"
//             />
//           </div>
//           <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-2xl bg-[#e8f0ea] sm:-bottom-4 sm:-left-4 sm:h-28 sm:w-28" />
//         </motion.div>
//       </section>

//       {/* Sub-specialities: hidden when no sub-speciality data exists */}
//       {speciality.subSpecialties?.length > 0 && (
//         <section className="bg-mist px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
//           <div className="page-container">
//             <div className="mx-auto max-w-3xl text-center">
//               <span className="text-sm font-bold tracking-[0.16em] text-sky">
//                 AREAS OF FOCUS
//               </span>
//               <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
//                 Sub-specialities
//               </h2>
//             </div>

//             <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//               {speciality.subSpecialties.map((item, index) => (
//                 <motion.div
//                   key={item}
//                   initial={{
//                     opacity: 0,
//                     y: reduceMotion ? 0 : 14,
//                   }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{
//                     duration: reduceMotion ? 0 : 0.35,
//                     delay: reduceMotion ? 0 : index * 0.04,
//                   }}
//                   className="flex min-h-[68px] items-center gap-3 rounded-xl border border-line bg-white px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-md"
//                 >
//                   <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#fff1e9] text-sky">
//                     <ArrowRight size={17} />
//                   </span>
//                   <span className="text-sm font-semibold leading-6 text-navy sm:text-base">
//                     {item}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Care & Treatment Areas: points left, three image tiles right */}
//       <section className="page-container grid items-center gap-8 px-5 py-11 sm:px-8 sm:py-14 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-12">
//         <div>
//           <span className="text-sm font-bold tracking-[0.16em] text-sky">
//             OUR CLINICAL SERVICES
//           </span>
//           <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
//             Care &amp; Treatment Areas
//           </h2>

//           <ul className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
//             {speciality.careAreas.map((area) => (
//               <li
//                 key={area}
//                 className="flex items-start gap-3 border-b border-[#e8ece6] pb-3 text-sm leading-6 text-[#405247] sm:text-[15px]"
//               >
//                 <CheckCircle2
//                   size={19}
//                   className="mt-0.5 shrink-0 text-royal"
//                 />
//                 <span>{area}</span>
//               </li>
//             ))}
//           </ul>

//           {speciality.note && (
//             <p className="mt-5 rounded-xl border-l-4 border-sky bg-[#fff8f3] p-4 text-sm leading-7 text-[#647368]">
//               {speciality.note}
//             </p>
//           )}
//         </div>

//         <div className="grid grid-cols-2 gap-3 sm:gap-4">
//           <motion.div
//             whileHover={reduceMotion ? {} : { y: -6 }}
//             transition={{ duration: 0.25 }}
//             className="row-span-2 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-sm"
//           >
//             <img
//               src={images[0]}
//               alt={`${speciality.title} clinical care`}
//               loading="lazy"
//               className="h-full min-h-[270px] w-full rounded-xl object-cover sm:min-h-[350px]"
//             />
//           </motion.div>

//           <motion.div
//             whileHover={reduceMotion ? {} : { y: -6 }}
//             transition={{ duration: 0.25 }}
//             className="overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-sm"
//           >
//             <img
//               src={images[1]}
//               alt={`${speciality.title} treatment`}
//               loading="lazy"
//               className="h-[130px] w-full rounded-xl object-cover sm:h-[168px]"
//             />
//           </motion.div>

//           <motion.div
//             whileHover={reduceMotion ? {} : { y: -6 }}
//             transition={{ duration: 0.25 }}
//             className="overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-sm"
//           >
//             <img
//               src={images[2]}
//               alt={`${speciality.title} patient care`}
//               loading="lazy"
//               className="h-[130px] w-full rounded-xl object-cover sm:h-[168px]"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Full-width Contact / Appointment CTA before doctor profiles */}
//       <section className="px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12">
//         <div className="page-container">
//           <div className="flex flex-col gap-5 rounded-2xl border border-[#dbe5dc] bg-[#f5f8f2] px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between">
//             <div className="max-w-3xl">
//               <span className="text-sm font-bold tracking-[0.15em] text-sky">
//                 WE ARE HERE TO HELP
//               </span>
//               <h2 className="mt-2 font-display text-xl font-bold text-navy sm:text-2xl">
//                 Need guidance about {speciality.title}?
//               </h2>
//               <p className="mt-2 text-sm leading-7 text-[#647368] sm:text-base">
//                 Contact our team or request an appointment to discuss the next
//                 steps in your care.
//               </p>
//             </div>

//             <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
//               <Link
//                 to="/contact"
//                 className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-royal bg-white px-6 py-3 text-sm font-bold text-royal transition hover:bg-ice"
//               >
//                 <Phone size={16} />
//                 Contact Us
//               </Link>
//               <Link
//                 to="/appointments"
//                 className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-bold text-white transition hover:bg-royaldeep"
//               >
//                 <CalendarDays size={17} />
//                 Book an Appointment
//                 <ArrowRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Matching speciality doctors only. Hidden if no matching doctor exists. */}
//       {specialityDoctors.length > 0 && (
//         <section className="bg-[#f6f9f6] px-5 py-11 sm:px-8 sm:py-14 lg:px-12">
//           <div className="page-container">
//             <div className="text-center">
//               <span className="text-sm font-bold tracking-[0.16em] text-sky">
//                 MEET THE EXPERTS
//               </span>
//               <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
//                 {speciality.title} Doctors
//               </h2>
//               <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#647368]">
//                 Meet the specialists for this department and explore their
//                 profiles, experience and areas of expertise.
//               </p>
//             </div>

//             <div className={`mt-8 gap-5 ${doctorGridClass}`}>
//               {specialityDoctors.map((doctor, index) => (
//                 <motion.article
//                   key={doctor.id}
//                   initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: reduceMotion ? 0 : 0.45,
//                     delay: reduceMotion ? 0 : index * 0.07,
//                   }}
//                   className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
//                 >
//                   <Link
//                     to={`/doctors/${doctor.slug}`}
//                     aria-label={`View ${doctor.name} profile`}
//                     className="block overflow-hidden bg-ice"
//                   >
//                     <div className="h-[245px] overflow-hidden sm:h-[230px] lg:h-[245px]">
//                       <img
//                         src={doctor.image}
//                         alt={doctor.name}
//                         loading="lazy"
//                         className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
//                       />
//                     </div>
//                   </Link>

//                   <div className="flex flex-1 flex-col p-4 sm:p-5">
//                     <h3 className="font-display text-lg font-bold leading-snug text-navy">
//                       {doctor.name}
//                     </h3>
//                     <p className="mt-1 text-sm leading-6 text-[#647368]">
//                       {doctor.designation}
//                     </p>
//                     <p className="mt-1 text-sm font-semibold leading-6 text-royal">
//                       {doctor.speciality}
//                     </p>

//                     <div className="mt-3 space-y-2 text-sm text-[#647368]">
//                       <p className="flex items-start gap-2">
//                         <BriefcaseMedical
//                           size={16}
//                           className="mt-0.5 shrink-0 text-royal"
//                         />
//                         <span>{doctor.experience}+ Years Experience</span>
//                       </p>
//                       <p className="flex items-start gap-2">
//                         <MapPin
//                           size={16}
//                           className="mt-0.5 shrink-0 text-royal"
//                         />
//                         <span>{doctor.location}</span>
//                       </p>
//                     </div>

//                     <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
//                       <Link
//                         to={`/doctors/${doctor.slug}`}
//                         className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full border border-royal px-2 py-2 text-center text-xs font-bold text-royal transition hover:bg-royal hover:text-white sm:text-sm"
//                       >
//                         View Profile
//                         <ArrowRight size={14} />
//                       </Link>
//                       <Link
//                         to={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
//                         className="inline-flex min-h-10 items-center justify-center rounded-full bg-royal px-2 py-2 text-center text-xs font-bold text-white transition hover:bg-royaldeep sm:text-sm"
//                       >
//                         Book Appointment
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Patient testimonial videos: hidden if this speciality has no valid YouTube videos. */}
//       {testimonialVideos.length > 0 && (
//         <ContentVideoCarousel
//           eyebrow="PATIENT STORIES"
//           title={`${speciality.title} – Patient Testimonials`}
//           subtitle="Watch patient stories shared by people connected with this speciality."
//           items={testimonialVideos}
//           slidesPerView={3}
//           autoPlay
//           interval={4500}
//           background="white"
//         />
//       )}
//     </main>
//   );
// }
