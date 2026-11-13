
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  HeartHandshake,
  Microscope,
  ScanLine,
  UsersRound,
  Activity,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

// Programme hero images
import diagnosisImage from "../assets/home/diagnosis.jpg";
import treatmentImage from "../assets/home/treatmentBanner3.jpg";
import recoveryImage from "../assets/home/patient-support.jpg";

// B-READY images
import tripleAssessmentImage from "../assets/patients-support/Triple assessment.jpg";
import tomosynthesisImage from "../assets/patients-support/Digital breast tomosynthesis.jpg";
import biopsyImage from "../assets/patients-support/Stereotactic breast biopsy.jpg";
import pathologyImage from "../assets/patients-support/Onco-pathology.jpg";
import genomicImage from "../assets/patients-support/Genomic profiling.jpg";

// B-AHEAD images
import oncologyConsultationsImage from "../assets/patients-support/Oncology consultations.jpg";
import tumourBoardImage from "../assets/patients-support/Tumour board.jpg";
import breastSurgeryImage from "../assets/patients-support/Breast surgery.jpg";
import brachytherapyImage from "../assets/patients-support/Breast brachytherapy.jpg";
import heartSparingImage from "../assets/patients-support/Heart-sparing radiotherapy.jpg";
import imageGuidedImage from "../assets/patients-support/Image-guided radiotherapy.jpg";
import systemicTreatmentImage from "../assets/patients-support/Systemic treatment.jpg";
import supportiveCareImage from "../assets/patients-support/Supportive care.jpg";

// B-YOU images
import physiotherapyImage from "../assets/patients-support/Physiotherapy and lymphoedema care.jpg";
import nutritionImage from "../assets/patients-support/Nutrition support.jpg";
import emotionalSupportImage from "../assets/patients-support/Emotional support.jpg";
import painManagementImage from "../assets/patients-support/Pain management.jpg";
import yogaImage from "../assets/patients-support/Yoga and wellbeing.jpg";
import pinkRoomImage from "../assets/patients-support/Pink Room and B-Well Wednesdays.jpg";
import survivorshipImage from "../assets/patients-support/Long-term survivorship.jpg";

const details = {
  "b-ready": {
    name: "B-READY",
    name: "DIAGNOSIS & ASSESSMENT 01",
    label: "DIAGNOSTIC SERVICES",
    title: "Understanding Your Diagnosis",
    description:
          "A clear understanding of your diagnosis is an important first step. Your oncology team reviews the available medical information and identifies whether further investigations are needed.",
    image: diagnosisImage,
    introPoints: [
      "Clinical assessment and specialist consultations",
      "Review of biopsy, pathology and imaging reports",
      "Additional investigations and biomarker testing where appropriate",
      "Guidance on understanding your diagnosis and next steps",
    ],
    sections: [
      {
        // title: "Triple assessment",
        icon: Stethoscope,
        image: tripleAssessmentImage,
        title: "Clinical Assessment and Diagnosis",
text: "Cancer diagnosis begins with a detailed clinical assessment and review of the patient's symptoms, medical history and available investigation reports. The oncology team determines which additional tests may be required to understand the condition.",
bullets: [
  "Detailed medical history and clinical examination.",
  "Review of symptoms and previous medical records.",
  "Assessment by relevant oncology specialists.",
  "Guidance on further investigations and diagnostic planning.",
],
        // text:
        //   "Triple assessment combines clinical examination, breast imaging and tissue diagnosis to evaluate a breast abnormality. The findings help the clinical team understand the nature of the condition and plan appropriate next steps.",
        // bullets: [
        //   "Clinical breast examination by a specialist.",
        //   "Appropriate breast imaging based on clinical findings.",
        //   "Pathological assessment through biopsy when indicated.",
        //   "Integrated review of findings for further management.",
        // ],
      },
      {
        // title: "Digital breast tomosynthesis",
        icon: ScanLine,
        image: tomosynthesisImage,
        title: "Advanced Cancer Imaging",
text: "Imaging investigations help identify the location, size and extent of a suspected tumour. Depending on the clinical requirement, the oncology team may recommend ultrasound, CT, MRI, PET-CT or other appropriate imaging studies.",
bullets: [
  "Ultrasound, CT and MRI investigations where appropriate.",
  "PET-CT imaging for selected clinical indications.",
  "Assessment of tumour location and disease extent.",
  "Imaging review to support diagnosis and treatment planning.",
],
        // text:
        //   "Digital breast tomosynthesis is an advanced breast imaging technique that captures multiple images from different angles to create detailed views of breast tissue.",
        // bullets: [
        //   "Provides multiple image views of breast tissue.",
        //   "Helps assess overlapping breast structures.",
        //   "Supports evaluation of suspicious breast findings.",
        //   "Imaging is recommended according to individual clinical needs.",
        // ],
      },
      {
        // title: "Stereotactic breast biopsy",
        icon: Microscope,
        image: biopsyImage,
        title: "Image-Guided Biopsy",
text: "A biopsy involves collecting a tissue sample from a suspected abnormal area for laboratory examination. Image-guided techniques may be used to help obtain samples accurately from selected tumour sites.",
bullets: [
  "Tissue sampling from a suspected tumour or abnormal area.",
  "Imaging guidance when required for the procedure.",
  "Pathological examination of collected tissue.",
  "Findings help establish the diagnosis and guide further care.",
],
        // text:
        //   "Stereotactic breast biopsy is an image-guided procedure used to collect tissue samples from a specific area of the breast for laboratory examination.",
        // bullets: [
        //   "Uses imaging guidance to identify the target area.",
        //   "Helps obtain tissue samples from suspicious findings.",
        //   "Supports accurate pathological evaluation.",
        //   "The procedure is recommended when clinically indicated.",
        // ],
      },
      {
        title: "Onco-pathology and immunohistochemistry",
        icon: Microscope,
        image: pathologyImage,
        text:
          "Onco-pathology examines tissue samples to identify the type and characteristics of a tumour. Immunohistochemistry helps assess specific markers that may guide treatment decisions.",
        bullets: [
          "Detailed examination of biopsy and tissue samples.",
          "Assessment of tumour characteristics.",
          "Relevant biomarker and receptor testing.",
          "Reports support individualised treatment planning.",
        ],
      },
      {
        title: "Genomic profiling",
        icon: ShieldCheck,
        image: genomicImage,
        text:
          "Genomic profiling examines selected genetic features of a tumour. When appropriate, the results may provide additional information to help the oncology team understand the tumour and consider treatment options.",
        bullets: [
          "Assessment of selected tumour-related genetic features.",
          "Additional information about tumour characteristics.",
          "May support treatment decision-making in selected cases.",
          "Testing is recommended according to clinical indication.",
        ],
      },
    ],
  },

  "b-ahead": {
    name: "TREATMENT & CARE 02",
    label: "TREATMENT SERVICES",
    title: "Personalised Treatment Planning",
    description:
      "Treatment decisions depend on the type and stage of cancer, the patient's overall health and individual clinical needs. The oncology team discusses suitable treatment approaches and helps patients understand their options.",
    image: treatmentImage,
    introPoints: [
 "Specialist consultations and treatment discussions",
      "Multidisciplinary team review where appropriate",
      "Guidance on surgery, chemotherapy and radiation therapy",
      "Information about targeted therapy and immunotherapy where suitable",
      "Supportive care during treatment",
    ],
    sections: [
      {
        // title: "Consultations with all three oncology specialties",
        icon: UsersRound,
        image: oncologyConsultationsImage,
        title: "Cancer Surgery",
text: "Surgery is an important treatment option for many types of cancer. The surgical approach depends on the tumour location, type, stage and the patient's overall health. The oncology team discusses suitable surgical options for each individual case.",
bullets: [
  "Evaluation by surgical oncology specialists.",
  "Assessment of suitable surgical approaches.",
  "Tumour removal and organ-preserving procedures where appropriate.",
  "Individualised surgical planning and post-operative care.",
],
        // text:
        //   "Patients can receive coordinated consultations with surgical, medical and radiation oncology specialists. These discussions help explain the available treatment approaches and support an individualised care plan.",
        // bullets: [
        //   "Consultation with surgical oncology specialists.",
        //   "Consultation with medical oncology specialists.",
        //   "Consultation with radiation oncology specialists.",
        //   "Coordinated discussions about treatment options.",
        // ],
      },
      {
        title: "Multidisciplinary tumour board",
        icon: UsersRound,
        image: tumourBoardImage,
        text:
          "A multidisciplinary tumour board brings specialists together to review a patient's diagnosis, investigation results and treatment requirements. The team discusses suitable treatment approaches based on the individual case.",
        bullets: [
          "Collaborative review by relevant specialists.",
          "Discussion of pathology and imaging findings.",
          "Review of available treatment approaches.",
          "Support for coordinated treatment planning.",
        ],
      },
      {
        // title: "Breast-conserving and oncoplastic surgery",
        icon: Activity,
        image: breastSurgeryImage,
        title: "Advanced Radiation Therapy",
text: "Radiation therapy uses carefully planned radiation to target cancer cells. Different techniques may be recommended depending on the tumour type, treatment area and individual clinical requirements.",
bullets: [
  "Specialist radiation oncology consultation.",
  "Individualised radiation treatment planning.",
  "External beam radiotherapy and brachytherapy where appropriate.",
  "Image-guided and advanced radiation techniques when indicated.",
],
        // text:
        //   "Breast surgery options are considered according to tumour characteristics, clinical findings and patient preferences. Where suitable, breast-conserving and oncoplastic techniques may be discussed.",
        // bullets: [
        //   "Assessment of appropriate surgical options.",
        //   "Breast-conserving surgery when suitable.",
        //   "Oncoplastic techniques where clinically appropriate.",
        //   "Individualised surgical planning with the treating team.",
        // ],
      },
      {
        title: "Breast brachytherapy and partial-breast irradiation",
        icon: HeartPulse,
        image: brachytherapyImage,
        text:
          "Breast brachytherapy and partial-breast irradiation are specialised radiation treatment approaches that may be considered for selected patients depending on their clinical suitability.",
        bullets: [
          "Specialist assessment for treatment suitability.",
          "Consideration of targeted radiation approaches.",
          "Treatment planning based on individual clinical factors.",
          "Follow-up according to the treating team's recommendations.",
        ],
      },
      {
        // title: "Heart-sparing radiotherapy",
        icon: ShieldCheck,
        image: heartSparingImage,
        title: "Precision Radiotherapy Techniques",
text: "Modern radiotherapy techniques use advanced planning and imaging systems to deliver radiation accurately while helping limit exposure to surrounding healthy tissues. The appropriate technique depends on the treatment area and clinical needs.",
bullets: [
  "Advanced imaging for treatment planning.",
  "Assessment of surrounding healthy organs and tissues.",
  "Precision treatment delivery using suitable techniques.",
  "Monitoring and review by the radiation oncology team.",
],
        // text:
        //   "Heart-sparing radiotherapy techniques aim to reduce radiation exposure to the heart during selected breast cancer treatments, particularly when the left breast is being treated.",
        // bullets: [
        //   "Radiotherapy planning with attention to heart exposure.",
        //   "Evaluation of suitable heart-sparing techniques.",
        //   "Individualised treatment positioning and planning.",
        //   "Ongoing assessment by the radiation oncology team.",
        // ],
      },
      {
        title: "Image-guided, adaptive and motion-tracking radiotherapy",
        icon: ScanLine,
        image: imageGuidedImage,
        text:
          "Advanced radiotherapy approaches use imaging and treatment-planning technologies to support accurate delivery of radiation. The selected technique depends on the treatment area and individual clinical requirements.",
        bullets: [
          "Imaging support during radiotherapy planning and delivery.",
          "Assessment of patient positioning and treatment accuracy.",
          "Adaptive planning when clinically appropriate.",
          "Motion-management techniques where indicated.",
        ],
      },
      {
        title: "Systemic treatment and scalp cooling",
        icon: HeartPulse,
        image: systemicTreatmentImage,
        text:
          "Systemic treatment may include chemotherapy, hormonal therapy, targeted therapy or other recommended medicines depending on the diagnosis. Scalp cooling may be discussed for selected patients receiving certain chemotherapy treatments.",
        bullets: [
          "Treatment selection based on tumour characteristics.",
          "Individualised systemic treatment planning.",
          "Discussion of possible side effects and supportive measures.",
          "Scalp cooling assessment when appropriate.",
        ],
      },
      {
        title: "Supportive care during treatment",
        icon: HeartHandshake,
        image: supportiveCareImage,
        text:
          "Supportive care helps patients manage treatment-related symptoms and maintain wellbeing throughout their treatment journey. Support is planned according to individual needs.",
        bullets: [
          "Guidance on managing treatment-related symptoms.",
          "Support with nutrition and general wellbeing.",
          "Emotional and practical support during treatment.",
          "Coordination with the treating oncology team.",
        ],
      },
    ],
  },

  "b-you": {
    name: "RECOVERY & ONGOING SUPPORT 03",
    label: "REHABILITATION SERVICES",
    title: "Support for Recovery and Beyond",
    description:
      "Care continues beyond active treatment. Appropriate supportive services can help patients manage treatment-related challenges, regain strength and maintain quality of life.",
    image: recoveryImage,
    introPoints: [
      "Nutrition and dietary guidance",
      "Emotional and psychological support",
      "Pain and symptom management & Physiotherapy and cancer rehabilitation",
      "Family and caregiver guidance & Follow-up and survivorship support",
    ],
    sections: [
      {
        title: "Physiotherapy and lymphoedema care",
        icon: Activity,
        image: physiotherapyImage,
        text:
          "Physiotherapy and lymphoedema care support patients experiencing movement difficulties, stiffness, swelling or physical changes during and after cancer treatment.",
        bullets: [
          "Assessment of movement and physical function.",
          "Guidance on appropriate exercises and mobility.",
          "Lymphoedema assessment and management.",
          "Individualised rehabilitation support.",
        ],
      },
      {
        title: "Nutrition support",
        icon: HeartPulse,
        image: nutritionImage,
        text:
          "Nutrition support helps patients understand their dietary needs during treatment and recovery. Guidance can be adapted to appetite changes, nutritional requirements and individual health needs.",
        bullets: [
          "Assessment of individual nutritional requirements.",
          "Guidance on balanced meals and food choices.",
          "Support with treatment-related appetite changes.",
          "Nutrition guidance during recovery and follow-up.",
        ],
      },
      {
        title: "Psychiatry, counselling and emotional support",
        icon: UsersRound,
        image: emotionalSupportImage,
        text:
          "A cancer diagnosis and its treatment can affect emotional wellbeing. Counselling and psychological support can help patients and families address concerns and cope with the challenges of the care journey.",
        bullets: [
          "Emotional support during diagnosis and treatment.",
          "Counselling for anxiety, fear and treatment-related stress.",
          "Support with body-image and lifestyle changes.",
          "Guidance for patients and family members.",
        ],
      },
      {
        title: "Pain management",
        icon: HeartHandshake,
        image: painManagementImage,
        text:
          "Pain management focuses on assessing and addressing pain and other difficult symptoms that may occur during or after cancer treatment.",
        bullets: [
          "Assessment of pain and related symptoms.",
          "Individualised pain-management guidance.",
          "Support for treatment-related discomfort.",
          "Follow-up based on patient needs.",
        ],
      },
      {
        title: "Yoga and mind-body wellbeing",
        icon: Activity,
        image: yogaImage,
        text:
          "Suitable mind-body activities may support relaxation, physical confidence and general wellbeing. Activities are selected according to a patient's health, physical ability and treating team's advice.",
        bullets: [
          "Guidance on suitable mind-body activities.",
          "Relaxation and breathing practices.",
          "Gentle movement according to individual ability.",
          "Wellbeing support during recovery.",
        ],
      },
      {
  title: "Patient Wellness and Support Programmes",
  icon: HeartHandshake,
  image: pinkRoomImage,
  text: "Patient wellness programmes provide opportunities for individuals and families to access supportive activities, connect with others and receive guidance during cancer treatment and recovery.",
  bullets: [
    "Patient engagement and supportive activities.",
    "Emotional wellbeing and wellness guidance.",
    "Opportunities for patient and caregiver interaction.",
    "Supportive programmes based on patient needs.",
    ],
},
      // {
      //   title: "The Pink Room and B-Well Wednesdays",
      //   icon: CalendarDays,
      //   image: pinkRoomImage,
      //   text:
      //     "The Pink Room and B-Well Wednesdays provide opportunities for patients to engage with supportive activities and wellbeing initiatives as part of their care journey.",
      //   bullets: [
      //     "A welcoming environment for patient support.",
      //     "Wellbeing activities and patient engagement.",
      //     "Opportunities to connect with support services.",
      //     "Activities according to the programme schedule.",
      //   ],
      // },
      {
        title: "Long-term survivorship",
        icon: ShieldCheck,
        image: survivorshipImage,
        text:
          "Survivorship support focuses on life after treatment, including follow-up care, long-term wellbeing and guidance on returning to everyday activities.",
        bullets: [
          "Follow-up and surveillance guidance.",
          "Support with long-term treatment effects.",
          "Rehabilitation and lifestyle guidance.",
          "Emotional wellbeing and return-to-activity support.",
        ],
      },
    ],
  },
};

// Breadcrumb is placed directly inside the page.

function PageBreadcrumb({ name }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-[#e4e9e2] bg-[#f7f9f6]"
    >
      <div className="page-container w-full px-5 py-3 sm:px-8 lg:px-12">
        <ol className="flex w-full flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              to="/"
              className="font-semibold text-[#476b55] transition-colors hover:text-[#e87744]"
            >
              Home
            </Link>
          </li>

          <li aria-hidden="true" className="text-[#9aa89c]">
            /
          </li>

          <li>
            <Link
              to="/patient-care"
              className="font-semibold text-[#476b55] transition-colors hover:text-[#e87744]"
            >
              Patient Support
            </Link>
          </li>

          <li aria-hidden="true" className="text-[#9aa89c]">
            /
          </li>

          <li
            aria-current="page"
            className="font-semibold text-[#263c30]"
          >
            {name}
          </li>
        </ol>
      </div>
    </nav>
  );
}


function ProgrammeHero({ item }) {
  return (
    <section className="bg-[#f7f9f6] py-8 sm:py-12 lg:py-16">
      <div className="page-container px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#dce7dc] bg-white px-4 py-2 text-xs font-bold tracking-[0.15em] text-[#e87744]">
              {item.label}
            </span>

            <h1 className="display-font mt-5 text-3xl font-bold leading-tight text-[#263c30] sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>

            <p className="mt-5 text-base leading-8 text-[#536458] sm:text-lg">
              {item.description}
            </p>

            <div className="mt-6 space-y-3">
              {item.introPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#e87744]"
                  />

                  <p className="text-[15px] leading-7 text-[#405747] sm:text-[18px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/patient-care"
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#476b55] px-4 py-2 font-semibold text-white transition hover:bg-[#304b3c]"
            >
              <ArrowLeft size={18} />
              Back to Patient Support
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#e87744]/15 sm:-right-4 sm:-top-4 sm:h-24 sm:w-24" />

            <img
              src={item.image}
              alt={item.title}
              className="relative h-[260px] w-full rounded-[24px] object-cover shadow-lg sm:h-[360px] lg:h-[430px]"
            />

            <div className="absolute -bottom-4 left-4 right-4 rounded-xl border border-[#e5ebe4] bg-white p-4 shadow-md sm:left-8 sm:right-8 sm:p-5">
              <p className="text-xs font-bold tracking-[0.16em] text-[#e87744]">
                {/* RENOVA BREAST HEALTH INITIATIVE */}
                RENOVA CANCER CARE
              </p>

              <p className="mt-1 text-lg font-bold text-[#304b3c]">
                {item.name}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Image + content layout for each service.
// The image and content alternate on desktop.
// On mobile, image always appears before the content.
function ProgrammeSection({ section, index }) {
  const Icon = section.icon;
  const imageFirst = index % 2 === 0;

  return (
    <article className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">

      {/* IMAGE */}
      <div
        className={`relative min-h-[230px] overflow-hidden rounded-[22px] sm:min-h-[300px] lg:min-h-[340px] ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <img
          src={section.image}
          alt={section.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div
        className={`flex flex-col justify-center py-2 lg:py-5 ${
          imageFirst ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf3ed] text-[#476b55]">
            <Icon size={24} strokeWidth={1.8} />
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-[#e87744]">
              PATIENT CARE SERVICES
            </p>

            <h3 className="display-font mt-2 text-xl font-bold leading-snug text-[#263c30] sm:text-2xl lg:text-[26px]">
              {section.title}
            </h3>
          </div>
        </div>

        <p className="mt-5 text-[15px] leading-8 text-[#536458] sm:text-[16px]">
          {section.text}
        </p>

        <div className="my-5 h-px w-full bg-[#e7ede5]" />

        <ul className="space-y-3">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-[#e87744]"
              />

              <span className="text-[16px] leading-7 text-[#405747] sm:text-[18px]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </article>
  );
}

export default function PatientCareDetailPage() {
  const { programme } = useParams();
  const item = details[programme?.toLowerCase()];

  if (!item) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#fffdf9] px-5">
        <div className="w-full max-w-lg rounded-2xl border border-[#e3eae2] bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f7f2]">
            <HeartPulse size={30} className="text-[#476b55]" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-[#263c30]">
            Programme Not Found
          </h1>

          <p className="mt-3 text-[15px] leading-7 text-[#536458]">
            The requested patient support programme could not be found.
            Please return to Patient Support and select a programme.
          </p>

          <Link
            to="/patient-care"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#476b55] px-6 py-3 font-semibold text-white transition hover:bg-[#304b3c]"
          >
            <ArrowLeft size={18} />
            Back to Patient Support
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-[#fffdf9] text-[#304b3c]">

      {/* BREADCRUMB - SAME PAGE CONTAINER WIDTH */}
      <PageBreadcrumb name={item.name} />

      {/* PROGRAMME INTRODUCTION */}
      <ProgrammeHero item={item} />

      {/* PROGRAMME SERVICES */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="page-container px-5 sm:px-8 lg:px-12">

          {/* SECTION HEADING */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="inline-block rounded-full bg-[#edf3ed] px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#e87744]">
              {item.name} PROGRAMME
            </span>

            <h2 className="display-font mt-4 text-2xl font-bold leading-tight text-[#263c30] sm:text-3xl lg:text-4xl">
              Explore Our {item.label.toLowerCase()}
            </h2>

            <p className="mt-4 text-[15px] leading-8 text-[#536458] sm:text-base">
              Learn more about the services and support available through
              this programme. Each patient's care plan is based on individual
              clinical requirements.
            </p>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#e87744]" />
          </div>

          {/* ALTERNATING IMAGE AND CONTENT - NO CARDS */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {item.sections.map((section, index) => (
              <ProgrammeSection
                key={section.title}
                section={section}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#263c30] py-12 sm:py-16">
        <div className="page-container px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] text-[#f3a078]">
                RENOVA PATIENT SUPPORT
              </p>

              <h2 className="display-font mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                We are here to support your journey
              </h2>

              <p className="mt-4 text-[15px] leading-8 text-white/80 sm:text-base">
                Speak with our team to understand the available services
                and support options for your individual care needs.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-[#e87744] px-7 py-3.5 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d86635] hover:shadow-lg"
            >
              Contact Us
              <ArrowRight size={19} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}




