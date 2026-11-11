
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Stethoscope,
} from "lucide-react";

import { allTechnologyItems } from "../data/technologyData";
import { specialities } from "../data/specialitiesData";

/* --------------------------------------------------
   HELPERS
-------------------------------------------------- */

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");
}

function findRelatedSpeciality(name) {
  const normalizedName = normalizeText(name);

  return specialities.find((item) => {
    const title = normalizeText(item.title);
    const slug = normalizeText(item.slug);

    return (
      title === normalizedName ||
      slug === normalizedName ||
      title.includes(normalizedName) ||
      normalizedName.includes(title)
    );
  });
}

/* --------------------------------------------------
   BREADCRUMB
-------------------------------------------------- */

function Breadcrumb({ title }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-[14px] sm:text-[15px]"
    >
      <Link
        to="/"
        className="font-semibold text-[#476B55] transition hover:text-[#E87744]"
      >
        Home
      </Link>

      <ChevronRight size={15} className="text-[#9AA89C]" />

      <Link
        to="/technology"
        className="font-semibold text-[#476B55] transition hover:text-[#E87744]"
      >
        Our Technology
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

/* --------------------------------------------------
   CENTERED SECTION HEADING
-------------------------------------------------- */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10">
      {eyebrow && (
        <p className="text-[15px] font-extrabold uppercase tracking-[.18em] text-[#E87744] sm:text-[16px]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-2xl font-bold leading-tight text-[#263C30] sm:text-3xl lg:text-[36px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[16px] leading-8 text-[#536357] sm:text-[18px]">
          {description}
        </p>
      )}
    </div>
  );
}

/* --------------------------------------------------
   TECHNOLOGY DETAIL SECTION
-------------------------------------------------- */

function TechnologySection({ section, index }) {
  const imageOnRight = index % 2 === 1;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45 }}
      className="py-8 sm:py-12"
    >
      {/* CENTERED HEADING */}

      <SectionHeading
        eyebrow={`${String(index + 1).padStart(2, "0")} / TECHNOLOGY DETAILS`}
        title={section.title}
      />

      {/* IMAGE + CONTENT */}

      <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-10">
        {/* CONTENT */}

        <div
          className={`flex min-w-0 flex-col justify-center ${
            imageOnRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {section.paragraphs?.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="mb-4 text-[16px] leading-8 text-[#536357] last:mb-0 sm:text-[17px]"
            >
              {paragraph}
            </p>
          ))}

          {section.points?.length > 0 && (
            <ul className="mt-5 space-y-4">
              {section.points.map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#E87744]"
                  />

                  <span className="text-[16px] leading-7 text-[#46584A] sm:text-[18px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* IMAGE */}

        {section.image && (
          <div
            className={`min-w-0 ${
              imageOnRight ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <img
              src={section.image}
              alt={section.imageAlt || section.title}
              loading="lazy"
              className="h-[280px] w-full rounded-[22px] object-cover sm:h-[350px] lg:h-full lg:min-h-[360px] lg:max-h-[460px]"
            />
          </div>
        )}
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------
   RELATED SPECIALITIES
-------------------------------------------------- */


function RelatedSpecialities({ names = [] }) {
  const relatedSpecialities = names
    .map((name) => findRelatedSpeciality(name))
    .filter(Boolean);

  if (!relatedSpecialities.length) return null;

  return (
    <section className="py-14 md:py-16">
      <div className="page-container">
        <SectionHeading
          eyebrow="OUR EXPERTISE"
          title="Related Specialities"
          description="Explore the specialist teams involved in delivering comprehensive cancer care."
        />

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {relatedSpecialities.map((speciality) => {
            const Icon = speciality.icon || Stethoscope;

            return (
              <Link
                key={speciality.slug}
                to={`/specialities/${speciality.slug}`}
                className="group flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-[#dce6dc] bg-white px-6 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#476b55] hover:shadow-md"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1f6ef] text-[#476b55] transition-colors group-hover:bg-[#476b55] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.7} />
                </span>

                <h3 className="text-base font-semibold leading-snug text-[#304b3c] md:text-lg">
                  {speciality.title}
                </h3>

                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#e87744]">
                  Explore Speciality
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}



/* --------------------------------------------------
   FAQ
-------------------------------------------------- */

function FrequentlyAskedQuestions({ faqs }) {
  if (!faqs?.length) return null;

  return (
    <section className="py-10 sm:py-14">
      <SectionHeading
        eyebrow="COMMON QUESTIONS"
        title="Frequently Asked Questions"
        description="Find answers to common questions about this technology."
      />

      <div className="mx-auto max-w-4xl divide-y divide-[#E5EBE2]">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group py-5"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] font-bold leading-7 text-[#304B3C] marker:hidden sm:text-[18px]">
              <span>{faq.question}</span>

              <ChevronRight
                size={19}
                className="mt-1 shrink-0 text-[#E87744] transition-transform group-open:rotate-90"
              />
            </summary>

            <p className="mt-4 pr-6 text-[15px] leading-8 text-[#536357] sm:text-[17px]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}


/* --------------------------------------------------
   CONTACT + APPOINTMENT CTA
-------------------------------------------------- */


function ContactActions() {
  return (
    <section className="mt-12 mb-12 w-full rounded-[24px] bg-[#304B3C] px-5 py-9 sm:mt-16 sm:mb-16 sm:px-10 sm:py-12 lg:px-14">
      <div className="flex w-full flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
        <div className="max-w-2xl">
          <p className="text-[15px] font-extrabold uppercase tracking-[.17em] text-[#F2B477]">
            WE ARE HERE TO HELP
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Need More Information?
          </h2>

          <p className="mt-3 text-[16px] leading-7 text-[#E5EEE6] sm:text-[18px]">
            Contact our team for more information or to discuss an appointment with our care team.
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white bg-transparent px-7 py-3 text-[15px] font-bold text-white transition hover:bg-white hover:text-[#304B3C]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>

          <Link
            to="/appointments"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E87744] px-7 py-3 text-[15px] font-bold text-white transition hover:bg-[#D96535]"
          >
            Book an Appointment
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}


/* --------------------------------------------------
   MAIN TECHNOLOGY DETAIL PAGE
-------------------------------------------------- */

export default function TechnologyDetailPage() {
  const { slug } = useParams();

  const technology = allTechnologyItems.find(
    (item) => item.slug === slug
  );

  if (!technology) {
    return <Navigate to="/technology" replace />;
  }

  return (
    <main className="min-h-screen bg-[#FFFDFA] text-[#304B3C]">

      {/* BREADCRUMB */}

      <div className="border-b border-[#DCE5DA] bg-[#F6F8F4]">
        <div className="page-container px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumb title={technology.title} />
        </div>
      </div>

      {/* HERO */}

      <section className="bg-[#fdfefd]">
        <div className="page-container grid items-center gap-9 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-extrabold tracking-[.15em] text-[#476B55] shadow-sm sm:text-[12px]">
              {technology.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl lg:text-5xl">
              {technology.title}
            </h1>

            <p className="mt-5 text-[16px] leading-8 text-[#536357] sm:text-[18px]">
              {technology.description}
            </p>
             <p className="mt-5 text-[16px] leading-8 text-[#536357] sm:text-[18px]">
            {technology.detailIntro}
          </p>

            <Link
              to="/appointments"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#304B3C] px-4 py-2 text-[16px] font-bold text-white transition hover:bg-[#E87744] sm:text-[18px]"
            >
              Book an Appointment
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {technology.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={technology.image}
                alt={technology.imageAlt || technology.title}
                className="h-[270px] w-full rounded-[26px] object-cover shadow-xl sm:h-[360px] lg:h-[430px]"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* FIRST CONTENT SECTION - OVERVIEW PARAGRAPH */}

      <div className="page-container px-2 py-4 sm:px-6 sm:py-2 lg:px-4 lg:py-2">
        {/* <section className="mx-auto max-w-5xl py-4 text-center sm:py-7">
          <h2 className="text-2xl font-bold leading-tight text-[#263C30] sm:text-3xl lg:text-[36px]">
            Understanding {technology.title}
          </h2>

          <p className="mt-5 text-left text-[15px] leading-8 text-[#536357] sm:text-center sm:text-[17px]">
            {technology.detailIntro}
          </p>
        </section> */}

        {/* TECHNOLOGY DATA SECTIONS */}

        {technology.sections?.length > 0 && (
          <div className="mt-7 sm:mt-10">
            {technology.sections.map((section, index) => (
              <TechnologySection
                key={`${section.title}-${index}`}
                section={section}
                index={index}
              />
            ))}
          </div>
        )}

        {/* RELATED SPECIALITIES */}

        <RelatedSpecialities names={technology.specialities} />

        {/* FAQ */}

        <FrequentlyAskedQuestions faqs={technology.faqs} />

      {/* <ContactActions /> */}

        <ContactActions />
      

      </div>
    </main>
  );
}




