
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Microscope,
  ScanLine,
  Dna,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  CalendarDays,
  ChevronRight,
  MessageCircle,
  FlaskConical,
  Users,
  BookOpenCheck,
} from "lucide-react";

import secondOpinionImage from "../assets/services/second-opinion-consultation.jpg";

import appointmentsWave from "../assets/appointments-wave.jpg";

/* --------------------------------------------------
   PAGE DATA
-------------------------------------------------- */

const reviewAreas = [
  {
    icon: Microscope,
    title: "Pathology Review",
    description:
      "Review of biopsy and surgical pathology reports, including tumour type, grade and relevant diagnostic findings.",
  },
  {
    icon: ScanLine,
    title: "Imaging Review",
    description:
      "Review of relevant mammography, ultrasound, MRI, CT, PET-CT and other imaging reports or available images.",
  },
  {
    icon: ClipboardList,
    title: "Cancer Stage Assessment",
    description:
      "Review of the documented cancer stage and available clinical findings to understand the extent of disease.",
  },
  {
    icon: Dna,
    title: "Biomarker & Molecular Review",
    description:
      "Assessment of relevant biomarker and molecular test results where these may help inform treatment discussions.",
  },
  {
    icon: HeartPulse,
    title: "Treatment Plan Review",
    description:
      "Review of the proposed treatment approach, its rationale, potential alternatives and questions to discuss with the treating team.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Perspective",
    description:
      "Where appropriate, input from relevant specialists to support a coordinated understanding of the case.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Medical Records",
    description:
      "Provide available pathology reports, imaging reports, biopsy results, treatment records and relevant medical history.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Specialist Review",
    description:
      "The submitted information is reviewed by an appropriate cancer specialist. Additional specialist input may be considered where relevant.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Discuss Your Findings",
    description:
      "Understand the review findings, possible treatment considerations and questions that may need further discussion.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Plan Your Next Steps",
    description:
      "Use the second opinion to have an informed discussion with your treating team about appropriate next steps.",
    icon: ShieldCheck,
  },
];

const documents = [
  "Previous medical consultation notes and diagnosis summary",
  "Biopsy, histopathology and surgical pathology reports",
  "Mammography, ultrasound, MRI, CT or PET-CT reports",
  "Available imaging files, if requested",
  "Cancer staging and relevant investigation reports",
  "Immunohistochemistry and biomarker reports",
  "Molecular or genomic test results, if available",
  "Previous and current treatment details",
  "Medication list and relevant medical history",
];

const treatmentCategories = [
  {
    title: "Established Clinical Treatments",
    subtitle: "Treatments used in appropriate clinical settings",
    description:
      "A specialist may review established treatment approaches according to the cancer type, stage, tumour characteristics, overall health and treatment goals.",
    items: [
      "Cancer surgery",
      "Chemotherapy",
      "Radiation therapy",
      "Hormone therapy",
      "Targeted therapy",
      "Immunotherapy",
    ],
  },
  {
    title: "Modern & Emerging Cancer Treatments",
    subtitle: "Newer approaches and evolving evidence",
    description:
      "Depending on the diagnosis, the review may consider newer treatment approaches, relevant clinical evidence, clinical trial options and whether a particular therapy is appropriate to discuss.",
    items: [
      "Precision and biomarker-guided treatment",
      "Advanced molecular profiling",
      "Antibody-drug conjugates",
      "Cellular therapies in selected cancers",
      "Radioligand and theranostic approaches",
      "Relevant clinical trial options",
    ],
  },
];

const faqs = [
  {
    question: "What is a cancer second opinion?",
    answer:
      "A cancer second opinion is an independent review of available medical information, such as pathology, imaging, stage, biomarkers and the proposed treatment plan, by an appropriate specialist or multidisciplinary team.",
  },
  {
    question: "Can I request a second opinion for breast cancer?",
    answer:
      "Yes. A breast cancer review may include available imaging, biopsy and pathology findings, tumour grade, ER, PR and HER2 status, stage and proposed treatment options. Additional tests may be recommended if clinically appropriate.",
  },
  {
    question: "Do I need to repeat all my tests?",
    answer:
      "Not necessarily. Existing reports and records can be reviewed first. If additional testing or a review of original slides or imaging is considered necessary, the specialist can explain why it may be helpful.",
  },
  {
    question: "Can a second opinion change my treatment plan?",
    answer:
      "A second opinion may confirm the proposed approach, identify questions for clarification or discuss other appropriate options. Any treatment decision should be made with your treating specialist after considering your individual circumstances.",
  },
  {
    question: "Are emerging cancer treatments suitable for everyone?",
    answer:
      "No. Newer therapies may be suitable only for particular cancer types, biomarkers or clinical situations. Approval, availability and eligibility vary by country and over time.",
  },
  {
    question: "What if I do not have all my medical reports?",
    answer:
      "You can begin by sharing the reports you currently have. The care team can help identify which additional records may be needed for a meaningful review.",
  },
];

/* --------------------------------------------------
   SECTION HEADING
-------------------------------------------------- */

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      {eyebrow && (
        <p className="text-[13px] font-extrabold uppercase tracking-[.18em] text-[#E87744] sm:text-sm">
          {eyebrow}
        </p>
      )}

      <h2
        className={`mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-[36px] ${
          light ? "text-white" : "text-[#263C30]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-[15px] leading-8 sm:text-[17px] ${
            light ? "text-white/80" : "text-[#536357]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* --------------------------------------------------
   BREADCRUMB
-------------------------------------------------- */

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
            Second Opinion
          </li>
        </ol>
      </div>
    </nav>
  );
}

/* --------------------------------------------------
   HERO
-------------------------------------------------- */

function SecondOpinionHero() {
  return (
    <section className="relative overflow-hidden bg-[#fafbfa]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#DCEBDD]/60 blur-3xl" />

      <div className="page-container relative grid items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-[#476B55] shadow-sm">
            <ShieldCheck size={16} className="text-[#E87744]" />
            Informed Cancer Care
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl lg:text-5xl">
            Cancer Second Opinion
            <span className="mt-2 block text-[#E87744]">
              Clarity for Your Next Step
            </span>
          </h1>

          <p className="mt-6 text-[16px] leading-8 text-[#536357] sm:text-[18px]">
            A second opinion can help you better understand your diagnosis
            and proposed treatment. Our review approach brings together
            available pathology, imaging, cancer stage, biomarkers,
            molecular results and treatment information for a more informed
            discussion with an appropriate specialist.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/appointments"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#304B3C] px-7 py-3 text-[15px] font-bold text-white transition hover:bg-[#E87744]"
            >
              Request a Second Opinion
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#476B55] px-7 py-3 text-[15px] font-bold text-[#304B3C] transition hover:bg-white"
            >
              Contact Our Team
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#476B55]">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#E87744]" />
              Diagnosis Review
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#E87744]" />
              Treatment Discussion
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative pb-5"
        >
          <img
            src={secondOpinionImage}
            alt="Cancer specialist discussing medical reports with a patient"
            className="h-[280px] w-full rounded-[26px] object-cover shadow-xl sm:h-[380px] lg:h-[460px]"
          />

          <div className="absolute -bottom-0 left-4 right-4 rounded-2xl border border-[#E1E9DF] bg-white p-4 shadow-lg sm:left-8 sm:right-8 sm:p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1F6F0] text-[#476B55]">
                <Stethoscope size={25} />
              </span>

              <div>
                <h3 className="text-[15px] font-bold text-[#304B3C] sm:text-base">
                  A Closer Look at Your Diagnosis
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-[#647267] sm:text-sm">
                  Review the available information and understand possible
                  next steps.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   INTRODUCTION
-------------------------------------------------- */

function SecondOpinionIntroduction() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="page-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="UNDERSTANDING YOUR OPTIONS"
          title="What Is a Cancer Second Opinion?"
          description="A second opinion is an additional specialist review that can help you understand your diagnosis, the information behind it and the treatment approach being considered."
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E1E9DF] bg-[#F8FAF7] p-6 sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F0E5] text-[#476B55]">
              <BookOpenCheck size={25} />
            </span>

            <h3 className="mt-5 text-xl font-bold text-[#304B3C]">
              Understand Your Diagnosis
            </h3>

            <p className="mt-3 text-[16px] leading-8 text-[#536357]">
              Review the available findings from pathology, imaging,
              staging and relevant laboratory or molecular investigations
              to better understand the diagnosis.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E1E9DF] bg-[#F8FAF7] p-6 sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FCEDE5] text-[#E87744]">
              <HeartPulse size={25} />
            </span>

            <h3 className="mt-5 text-xl font-bold text-[#304B3C]">
              Discuss Treatment Choices
            </h3>

            <p className="mt-3 text-[16px] leading-8 text-[#536357]">
              Discuss the proposed treatment, its rationale and other
              clinically appropriate options that may be relevant to
              your individual situation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   REVIEW AREAS
-------------------------------------------------- */

function ReviewAreas() {
  return (
    <section className="bg-[#F5F8F3] py-14 sm:py-16 lg:py-20">
      <div className="page-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMPREHENSIVE REVIEW"
          title="What Our Specialists Review"
          description="The review is guided by the cancer type, available medical records and the questions you would like addressed."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviewAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="rounded-2xl border border-[#E0E9DE] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF5EC] text-[#476B55]">
                  <Icon size={25} strokeWidth={1.8} />
                </span>

                <h3 className="mt-5 text-lg font-bold text-[#304B3C]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[16px] leading-7 text-[#536357] sm:text-[17px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   BREAST CANCER SECOND OPINION
-------------------------------------------------- */

function BreastCancerOpinion() {
  const breastReviewItems = [
    "Mammography, breast ultrasound and MRI findings",
    "Biopsy and histopathology findings",
    "Tumour type, grade and relevant staging information",
    "ER (oestrogen receptor) and PR (progesterone receptor) status",
    "HER2 status and other relevant biomarkers",
    "Genomic or molecular test results, when available and appropriate",
    "Breast-conserving surgery or mastectomy discussions",
    "Radiation, chemotherapy, hormone and targeted treatment considerations",
  ];

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="page-container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[.18em] text-[#E87744]">
              BREAST CANCER CARE
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#263C30] sm:text-3xl lg:text-[36px]">
              Breast Cancer Second Opinion
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-[#536357] sm:text-[17px]">
              Breast cancer care may involve several decisions about
              diagnosis, tumour characteristics and treatment. A specialist
              review can help bring together available breast imaging,
              biopsy, pathology, biomarker results and the proposed
              treatment plan.
            </p>

            <p className="mt-4 text-[16px] leading-8 text-[#536357] sm:text-[17px]">
            Every breast cancer diagnosis is different. A second opinion
            can help you better understand your cancer subtype, receptor
            status, available treatment choices and the potential benefits
            and considerations of each approach. It can also help you
            prepare informed questions about breast-conserving surgery,
            mastectomy, reconstruction and other aspects of your care,
            depending on your individual diagnosis and treatment needs.
            </p>

            {/* UPDATED BREAST CANCER BUTTON */}
            <Link
              to="/services/cancer/breast-cancer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E87744] px-7 py-3 text-[15px] font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#D96535] hover:shadow-md"
            >
              Explore Breast Cancer Care
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-[24px] bg-[#F3F7F1] p-6 sm:p-8 lg:p-9">
            <h3 className="text-xl font-bold text-[#304B3C]">
              What May Be Reviewed?
            </h3>

            <ul className="mt-6 space-y-4">
              {breastReviewItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#E87744]"
                  />

                  <span className="text-[14px] leading-7 text-[#46584A] sm:text-[16px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   PROCESS
-------------------------------------------------- */

function SecondOpinionProcess() {
  return (
    <section className="bg-[#F5F8F3] py-14 sm:py-16 lg:py-20">
      <div className="page-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="YOUR JOURNEY"
          title="How the Second Opinion Process Works"
          description="A clear, step-by-step approach to reviewing your available medical information."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-[#E0E9DE] bg-white p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#E5EDE2]">
                    {step.number}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF5EC] text-[#476B55]">
                    <Icon size={24} />
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#304B3C]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#536357] sm:text-[17px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   DOCUMENT CHECKLIST
   UPDATED: CENTERED HEADING + NO BOX DESIGN
-------------------------------------------------- */

function RequiredDocuments() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="page-container px-4 sm:px-6 lg:px-8">

        {/* CENTERED SECTION HEADING */}

        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="text-[13px] font-extrabold uppercase tracking-[.18em] text-[#E87744] sm:text-sm">
            BEFORE YOUR CONSULTATION
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#263C30] sm:text-3xl lg:text-[36px]">
            Reports and Documents to Share
          </h2>

          <p className="mt-4 text-[15px] leading-8 text-[#536357] sm:text-[17px]">
            Sharing relevant medical records can help the specialist
            understand your diagnosis and the treatment decisions being
            considered. Start with the reports you already have.
          </p>
        </div>

        {/* CONTENT BELOW THE HEADING - WITHOUT CARDS OR BOXES */}

        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-center text-lg font-bold text-[#304B3C] sm:text-xl">
            Helpful Medical Records
          </h3>

          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:gap-x-14">
            {documents.map((document) => (
              <li
                key={document}
                className="flex items-start gap-3 border-b border-[#E8EEE6] pb-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-[#E87744]"
                />

                <span className="text-[15px] leading-7 text-[#536357] sm:text-[17px]">
                  {document}
                </span>
              </li>
            ))}
          </ul>

          {/* SIMPLE INFORMATION NOTE - NO BOX */}

          <div className="mt-8 flex items-start gap-3 border-l-[3px] border-[#E87744] bg-[#FAF8F4] px-4 py-4 sm:px-6">
            <FileText
              size={22}
              className="mt-1 shrink-0 text-[#E87744]"
            />

            <p className="text-[15px] leading-7 text-[#46584A] sm:text-[16px]">
              Original pathology slides, tissue blocks or imaging files
              may be requested separately if needed for a more detailed
              review. You can initially share the reports that are
              currently available to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   ESTABLISHED AND EMERGING TREATMENTS
-------------------------------------------------- */

function TreatmentOptions() {
  return (
    <section className="bg-[#F5F8F3] py-14 sm:py-16 lg:py-20">
      <div className="page-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TREATMENT DISCUSSIONS"
          title="Modern & Emerging Cancer Treatments"
          description="A second opinion can help distinguish established clinical treatments from newer or emerging approaches, based on the cancer type and individual clinical findings."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {treatmentCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-[22px] border border-[#DFE8DC] bg-white p-6 sm:p-8"
            >
              <span className="inline-flex rounded-full bg-[#EEF5EC] px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-[#476B55]">
                {category.subtitle}
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#304B3C] sm:text-2xl">
                {category.title}
              </h3>

              <p className="mt-4 text-[16px] leading-8 text-[#536357]">
                {category.description}
              </p>

              <ul className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#E87744]"
                    />

                    <span className="text-[15px] leading-7 text-[#46584A] sm:text-[18px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-[#E8D9C9] bg-[#FFF8F1] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <FlaskConical
              size={23}
              className="mt-1 shrink-0 text-[#D87542]"
            />

            <div>
              <h3 className="font-bold text-[#704A32]">
                Important Information About Emerging Therapies
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-[#745E4D] sm:text-[17px]">
                Availability, approved indications, regulatory status,
                eligibility and access to newer therapies vary by country
                and over time. Some approaches may remain investigational
                or be available only through clinical trials. A treatment
                should be considered only after an appropriate specialist
                review of its evidence, suitability, risks and potential
                benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   FAQ
-------------------------------------------------- */

function FrequentlyAskedQuestions() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="page-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          description="Helpful information about requesting a cancer second opinion."
        />

        <div className="mx-auto max-w-4xl divide-y divide-[#E3EAE1]">
          {faqs.map((faq, index) => (
            <details key={index} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] font-bold leading-7 text-[#304B3C] marker:hidden sm:text-[18px]">
                <span>{faq.question}</span>

                <ChevronRight
                  size={20}
                  className="mt-1 shrink-0 text-[#E87744] transition-transform group-open:rotate-90"
                />
              </summary>

              <p className="mt-4 pr-7 text-[15px] leading-8 text-[#536357] sm:text-[18px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   CONTACT CTA
   UPDATED: FULL-WIDTH SECTION, NO OUTER GAP
-------------------------------------------------- */

function SecondOpinionCTA() {
  return (
    <section className="w-full border-y border-[#263F31] bg-[#304B3C] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">

          {/* CTA CONTENT */}

          <div className="max-w-2xl">
            <p className="text-[13px] font-extrabold uppercase tracking-[.17em] text-[#F2B477]">
              WE ARE HERE TO HELP
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[36px]">
              Looking for a Cancer Second Opinion?
            </h2>

            <p className="mt-3 text-[15px] leading-8 text-[#E5EEE6] sm:text-[17px]">
              Connect with our team to understand the consultation process
              and the medical records you may need to share.
            </p>
          </div>

          {/* CTA BUTTONS */}

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white px-7 py-3 text-[15px] font-bold text-white transition duration-300 hover:bg-white hover:text-[#304B3C]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/appointments"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E87744] px-7 py-3 text-[15px] font-bold text-white transition duration-300 hover:bg-[#D96535]"
            >
              Book an Appointment
              <CalendarDays size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   MAIN PAGE
-------------------------------------------------- */

export default function SecondOpinionPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFA] text-[#304B3C]">

      {/* BREADCRUMB */}
      <Breadcrumb />

      <SecondOpinionHero />

      <SecondOpinionIntroduction />

      <ReviewAreas />

      <BreastCancerOpinion />

      <SecondOpinionProcess />

      <RequiredDocuments />

      <TreatmentOptions />

      <FrequentlyAskedQuestions />

      <SecondOpinionCTA />

    </main>
  );
}










