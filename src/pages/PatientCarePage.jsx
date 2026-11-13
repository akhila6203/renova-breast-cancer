import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  HeartPulse,
  MessageCircleHeart,
  Stethoscope,
  UsersRound,
  BookOpenCheck,
  CalendarDays,
  ShieldCheck,
  Activity,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

import ContentVideoCarousel from "../components/ContentVideoCarousel";
import { doctors } from "../data/doctorsData";

import patientCareImage from "../assets/home/patientCare.jpg";
import diagnosisImage from "../assets/home/diagnosis.jpg";
import treatmentImage from "../assets/home/treatmentBanner3.jpg";
import recoveryImage from "../assets/home/patient-support.jpg";

import nextStepsImage from "../assets/patients-support/understanding-next-steps.jpg";
import newlyDiagnosedImage from "../assets/patients-support/newly-diagnosed.jpg";
import firstAppointmentImage from "../assets/patients-support/first-appointment.jpg";
import oncologistQuestionsImage from "../assets/patients-support/oncologist-questions.jpg";

import appointmentsWave from "../assets/appointments-wave.jpg";

const programmeStages = [
  {
    id: "b-ready",
    number: "01",
    name: "DIAGNOSIS & ASSESSMENT 01",
    label: "DIAGNOSTIC SERVICES",
    title: "Understanding Your Diagnosis",
    description:
      "A clear understanding of your diagnosis is an important first step. Your oncology team reviews the available medical information and identifies whether further investigations are needed.",
    image: diagnosisImage,
    alt: "Diagnostic imaging equipment in a clinical setting",
    highlights: [
      "Clinical assessment and specialist consultations",
      "Review of biopsy, pathology and imaging reports",
      "Additional investigations and biomarker testing where appropriate",
      "Guidance on understanding your diagnosis and next steps",
    ],
    path: "/patient-care/b-ready",
  },
  {
    id: "b-ahead",
    number: "02",
    name: "TREATMENT & CARE 02",
    label: "TREATMENT SERVICES",
    title: "Personalised Treatment Planning",
    description:
      "Treatment decisions depend on the type and stage of cancer, the patient's overall health and individual clinical needs. The oncology team discusses suitable treatment approaches and helps patients understand their options.",
    image: treatmentImage,
    alt: "Patient speaking with a healthcare professional",
    highlights: [
      "Specialist consultations and treatment discussions",
      "Multidisciplinary team review where appropriate",
      "Guidance on surgery, chemotherapy and radiation therapy",
      "Information about targeted therapy and immunotherapy where suitable",
      "Supportive care during treatment",
    ],
    path: "/patient-care/b-ahead",
  },
  {
    id: "b-you",
    number: "03",
    name: "RECOVERY & ONGOING SUPPORT 03",
    label: "REHABILITATION SERVICES",
    title: "Support for Recovery and Beyond",
    description:
      "Care continues beyond active treatment. Appropriate supportive services can help patients manage treatment-related challenges, regain strength and maintain quality of life.",
    image: recoveryImage,
    alt: "Caregiver supporting a patient during recovery",
    highlights: [
      "Nutrition and dietary guidance",
      "Emotional and psychological support",
      "Pain and symptom management & Physiotherapy and cancer rehabilitation",
      "Family and caregiver guidance & Follow-up and survivorship support",
    ],
    path: "/patient-care/b-you",
  },
];



const ongoingSupportItems = [
  {
    title: "Oncology nutrition",
    text: "Dietitians can help with maintaining strength, appetite or digestive changes, nutrition during treatment and recovery, and avoiding unnecessary dietary restrictions.",
  },
  {
    title: "Psycho-oncology",
    text: "Psychological support may help with anxiety, low mood, fear, body-image concerns, treatment stress, family adjustment and fear of recurrence.",
  },
  {
    title: "Cancer rehabilitation",
    text: "Support may include physiotherapy, mobility and strength recovery, occupational rehabilitation, speech and swallow therapy, lymphoedema assessment and return-to-activity planning.",
  },
  {
    title: "Pain and palliative care",
    text: "Specialist palliative care can help manage pain, nausea, breathlessness, fatigue, sleep problems and other difficult symptoms. It can be provided alongside cancer treatment.",
  },
  {
    title: "Fertility and reproductive support",
    text: "Some cancer treatments can affect fertility. If having children in the future is important to you, discuss fertility preservation before starting treatment that may affect fertility.",
  },
  {
    title: "Genetic counselling",
    text: "Genetic counselling can help assess inherited cancer risk using personal and family history and support decisions about appropriate genetic testing.",
  },
  {
    title: "Caregiver and family support",
    text: "Caregivers may need guidance about communication, treatment schedules, home care, nutrition, symptom monitoring and their own wellbeing.",
  },
  {
    title: "International patient services",
    text: "Where these services are available, information may cover medical-record review, appointment coordination, treatment estimates, visa documentation, travel or accommodation guidance, interpreters and follow-up coordination. Please confirm current services with the hospital.",
  },
  {
    title: "Insurance and financial guidance",
    text: "Please contact the hospital to confirm accepted insurance, cashless processes, pre-authorisation, billing assistance and financial counselling. Costs and coverage depend on the approved process and individual policy.",
  },
  {
    title: "Survivorship and life after treatment",
    text: "Follow-up care may address surveillance, long-term treatment effects, rehabilitation, nutrition, emotional wellbeing, lifestyle guidance and returning to work or everyday activities.",
  },
];

const patientPreparationSections = [
  {
    id: "newly-diagnosed",
    eyebrow: "START HERE",
    title: "Newly Diagnosed: What Happens Next?",
    description:
      "A new cancer diagnosis can feel overwhelming. Start by understanding three important things: what exactly the diagnosis is, how extensive the cancer is, and which treatment choices are available.",
    image: newlyDiagnosedImage,
    alt: "Newly diagnosed patient discussing cancer care with an oncologist",
    points: [
      "What exactly is my diagnosis?",
      "What stage is the cancer?",
      "Are additional pathology, imaging or biomarker tests needed?",
      "What treatment is recommended and why?",
      "Should treatment start with surgery, medicines or radiation?",
      "Are there reasonable alternative approaches?",
      "Would a second opinion be useful?",
    ],
  },
  {
    id: "first-appointment",
    eyebrow: "BE PREPARED",
    title: "Preparing for Your First Appointment",
    description:
      "Bring all available medical information so your care team can review your case efficiently and understand your medical history.",
    image: firstAppointmentImage,
    alt: "Doctor reviewing medical reports and scans with a patient",
    points: [
      "Pathology and biopsy reports",
      "Imaging reports and scan images",
      "CT / MRI / PET reports",
      "Blood-test results",
      "Previous surgery records",
      "Previous chemotherapy or immunotherapy details",
      "Previous radiation records",
      "Current medication list",
      "Genetic or molecular test results",
      "Relevant family cancer history",
      "A written list of questions",
    ],
  },
];

const oncologistQuestions = [
  "What type of cancer do I have?",
  "What is the stage and grade?",
  "Has it spread?",
  "Do I need more tests?",
  "Should molecular or genetic testing be considered?",
  "What is the goal of treatment?",
  "What are my treatment choices?",
  "Do I need surgery?",
  "Do I need chemotherapy?",
  "Could targeted therapy or immunotherapy be relevant?",
  "Do I need radiation?",
  "Are there alternatives?",
  "What side effects should I expect?",
  "Could treatment affect fertility?",
  "Can I continue working?",
  "How will we know treatment is working?",
  "Should I get a second opinion?",
  "Are clinical trials relevant?",
  "What happens after treatment?",
];

const approvedPatientStories = [];

function Breadcrumbs() {
  return (
    <nav
  aria-label="Breadcrumb"
  className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
  style={{
    backgroundImage: `url(${appointmentsWave})`,
  }}
>
  <div className="page-container relative z-10 mx-auto px-5 py-3 sm:px-8 lg:px-12">
    <ol className="flex items-center gap-2 text-sm">
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

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        Patient Support
      </li>
    </ol>
  </div>
</nav>
    // <nav aria-label="Breadcrumb" className="border-b border-[#e4e9e2] bg-[#f7f9f6]">
    //   <div className="page-container px-5 py-3 sm:px-8 lg:px-12">
    //     <ol className="flex items-center gap-2 text-sm">
    //       <li><Link to="/" className="font-semibold text-[#476b55] hover:text-[#e87744]">Home</Link></li>
    //       <li aria-hidden="true" className="text-[#9aa89c]">/</li>
    //       <li aria-current="page" className="font-semibold text-[#263c30]">Patient Support</li>
    //     </ol>
    //   </div>
    // </nav>
  );
}

function getYouTubeId(url = "") {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");

    let videoId = "";

    if (host === "youtu.be") {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] || "";
    } else if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      videoId =
        parsedUrl.searchParams.get("v") ||
        parsedUrl.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1] ||
        "";
    }

    if (!videoId || videoId.startsWith("YOUR_VIDEO_ID")) {
      return "";
    }

    return videoId;
  } catch {
    return "";
  }
}

export default function PatientCarePage() {
  const patientTestimonialItems = [
  ...new Map(
    doctors.flatMap((doctor) =>
      (doctor.testimonialVideos || []).map((video) => {
        const videoId = getYouTubeId(video.youtubeUrl);

        if (!videoId) return null;

        return [
          videoId,
          {
            id: `patient-story-${videoId}`,
            title: video.title || "Patient Testimonial",
            category: doctor.speciality,
            href: video.youtubeUrl,
            thumbnail:
              video.thumbnail ||
              `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          },
        ];
      }).filter(Boolean)
    )
  ).values(),
];


  return (
    <main className="overflow-hidden bg-[#fffdf9] text-[#304b3c]">
      <Breadcrumbs />

      <section className="bg-[#f7f9f6] py-6 sm:py-8 lg:py-12">
  <div className="page-container px-5 sm:px-8 lg:px-12">

    <div className="mx-auto mb-6 max-w-4xl text-center sm:mb-12">
      <p className="text-sm font-bold tracking-[0.2em] text-[#e87744]">
       ABOUT PATIENT CARE
      </p>

      <h1 className="display-font mt-4 text-3xl font-bold leading-tight text-[#263c30] sm:text-4xl lg:text-5xl">
        Care Across Every Stage of Your Cancer Journey
      </h1>

      <p className="mx-auto mt-3 max-w-4xl text-base leading-8 text-[#536458] sm:text-lg">
        At RENOVA Cancer Hospital, we provide guidance and support throughout diagnosis, treatment, recovery and follow-up care, helping patients and their families navigate each stage with greater confidence.
      </p>
    </div>

    <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

      <div>
        <span className="text-sm font-bold tracking-wider text-[#e87744]">
          RENOVA PATIENT CARE
        </span>

        <h2 className="display-font mt-1 text-2xl font-bold leading-snug text-[#263c30] sm:text-3xl">
          Every Step of Your Journey Matters
        </h2>

        <p className="mt-4 text-[16px] leading-6 text-[#4b5d50] sm:text-[18px]">
        A cancer diagnosis can bring uncertainty and many questions. Having access to the right information,
         medical guidance and supportive
         care can help patients understand their options and make informed decisions.
        </p>

        <p className="mt-4 text-[16px] leading-7 text-[#4b5d50] sm:text-[18px] ">
         At RENOVA, patient care goes beyond medical treatment. We recognise the importance of emotional support, 
         nutritional guidance, pain and symptom management, rehabilitation and ongoing care for patients and their families.
        </p>

        <p className="mt-4 text-[16px] leading-7 text-[#4b5d50] sm:text-[18px]">
         Our approach focuses on understanding each patient's individual needs and providing appropriate 
         guidance and support throughout their cancer journey.
        </p>

        <Link
          to="#programme-pillars"
          className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#476b55] px-4 py-2 font-semibold text-white transition hover:bg-[#304b3c]"
        >
          Explore Patient Care
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="relative">
        <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-[#e87744]/15 sm:-right-5 sm:-top-5" />

        <img
          src={patientCareImage}
          alt="Patient receiving guidance from a healthcare professional"
          className="relative h-[280px] w-full rounded-[24px] object-cover shadow-lg sm:h-[390px] lg:h-[440px]"
        />

        <div className="absolute -bottom-5 left-6 right-8 rounded-xl border border-[#e4e9e2] bg-white p-10 shadow-md sm:left-16 sm:right-40 sm:p-5">
          <p className="text-xs font-bold tracking-wider text-[#e87744]">
            OUR THREE CONNECTED PILLARS
          </p>

          <p className="mt-2 text-base font-bold text-[#304b3c] sm:text-lg">
            B-READY <span className="text-[#e87744]">·</span>
            B-AHEAD <span className="text-[#e87744]">·</span>
            B-YOU
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* BEFORE THE THREE PILLARS */}
<section className="bg-white py-14 sm:py-16 lg:py-20">
  <div className="page-container px-5 sm:px-8 lg:px-12">

    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-[#e87744]">
        YOUR CARE JOURNEY
      </p>

      <h2 className="display-font mt-4 text-3xl font-bold text-[#263c30] sm:text-4xl">
        Understanding Your Next Steps
      </h2>

      <p className="mt-4 text-base leading-8 text-[#536458]">
        Every patient's cancer journey is different. Understanding your diagnosis, 
        treatment options and available support is an important first step towards 
        making informed decisions about your care.
      </p>
    </div>

    <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

      <div>
        <h3 className="display-font text-2xl font-bold text-[#263c30] sm:text-3xl">
          Begin With Clarity, Care and Guidance
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-[#4b5d50] sm:text-[16px]">
          Following a diagnosis, discussions with your oncology team help you understand your condition,
           identify any further investigations needed and explore suitable treatment options
        </p>

        <ul className="mt-6 space-y-4 " >
          {[
            "Understand the type, stage and grade of your cancer.",
            "Review pathology, biopsy and imaging reports.",
            "Discuss additional tests, including biomarker or molecular testing where appropriate.",
            "Understand the available treatment options and their goals.",
            "Discuss your questions, concerns and whether a second medical opinion may be helpful.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="mt-1 shrink-0 text-[#e87744]"
              />
              <span className="text-[18px] leading-7 text-[#4b5d50]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <img
          // src={diagnosisImage}
           src={nextStepsImage}
          alt="Cancer diagnostic assessment"
          loading="lazy"
          className="h-[280px] w-full rounded-[24px] object-cover shadow-lg sm:h-[390px]"
        />
      </div>

    </div>
  </div>
</section>

      {/* Three programme pillars */}
      <section id="programme-pillars" className="section-padding scroll-mt-24 bg-[#f4f7f2]">
        <div className="page-container">
          <SectionTitle
            eyebrow="SUPPORT THROUGHOUT YOUR CARE JOURNEY"
            title="Connected Care. Support at Every Step."
            description="Every patient's cancer journey is different. At RENOVA, we recognise the importance of appropriate 
                          guidance and support from diagnosis and treatment through recovery and follow-up care."
          />
          <div className="space-y-8 lg:space-y-10">
            {programmeStages.map((stage, index) => (
              <article key={stage.id} className="grid items-stretch overflow-hidden rounded-[26px] border border-[#e1e8e0] bg-white shadow-sm lg:grid-cols-2">
                <div className={`relative min-h-[250px] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
                  <img src={stage.image} alt={stage.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e382b]/55 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-[0.14em] text-[#476b55] shadow">{stage.label}</span>
                  <span className="absolute bottom-5 left-5 text-5xl font-black text-white/90">{stage.number}</span>
                </div>
                <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${index % 2 ? "lg:order-1" : ""}`}>
                  <p className="text-sm font-extrabold tracking-[0.18em] text-[#e87744]">{stage.name}</p>
                  <h2 className="display-font mt-3 text-2xl font-bold leading-tight text-[#263c30] sm:text-3xl">{stage.title}</h2>
                  <p className="mt-4 text-[16px] leading-7 text-[#4b5d50] sm:text-base">{stage.description}</p>
                  <ul className="mt-5 space-y-3">
                    {stage.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[17px] leading-6 text-[#304b3c]">
                        <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#e87744]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={stage.path} className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#476b55] px-6 py-3 font-semibold text-white transition hover:bg-[#304b3c]">
                    Explore {stage.name} <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     
{/* PATIENT RESOURCES */}
<section
  id="patient-resources"
  className="scroll-mt-24 bg-[#f7f9f6] py-14 sm:py-16 lg:py-20"
>
  <div className="page-container px-5 sm:px-8 lg:px-12">

    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-[#e87744]">
        PATIENT RESOURCES
      </p>

      <h2 className="display-font mt-4 text-3xl font-bold text-[#263c30] sm:text-4xl">
        Information to Guide Your Care Journey
      </h2>

      <p className="mt-4 text-base leading-8 text-[#536458]">
        Helpful information for patients and families to understand
        a diagnosis, prepare for consultations and take informed
        decisions throughout cancer care.
      </p>
    </div>

    <div className="space-y-14 lg:space-y-20">

      {patientPreparationSections.map((section) => (
        <article
          key={section.id}
          id={section.id}
          className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12"
        >

          {/* LEFT SIDE - CONTENT */}
          <div className="flex flex-col justify-center">

            <h3 className="display-font text-2xl font-bold leading-snug text-[#263c30] sm:text-3xl">
              {section.title}
            </h3>

            <p className="mt-4 text-[16px] leading-8 text-[#4b5d50] sm:text-base">
              {section.description}
            </p>

            <ul className="mt-6 space-y-3">
              {section.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#e87744]"
                  />

                  <span className="text-[15px] leading-7 text-[#435849] sm:text-[18px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative min-h-[280px] self-stretch sm:min-h-[340px] lg:min-h-0">
            <img
              src={section.image}
              alt={section.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[24px] object-cover"
            />
          </div>

        </article>
      ))}

    </div>
  </div>
</section>



{/* QUESTIONS TO ASK YOUR ONCOLOGIST */}
<section className="bg-white py-14 sm:py-16 lg:py-20">
  <div className="page-container px-5 sm:px-8 lg:px-12">

    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-[#e87744]">
        YOUR CONSULTATION CHECKLIST
      </p>

      <h2 className="display-font mt-4 text-3xl font-bold text-[#263c30] sm:text-4xl">
        Questions to Ask Your Oncologist
      </h2>

      <p className="mt-4 text-base leading-8 text-[#536458]">
        Preparing questions before your appointment can help you
        understand your diagnosis, treatment choices and the next
        steps in your care.
      </p>
    </div>

    <div className="grid items-center gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

      <div>
        <img
           src={oncologistQuestionsImage}
  alt="Patient discussing questions with an oncologist"
          loading="lazy"
          className="h-[300px] w-full rounded-[24px] object-cover shadow-md sm:h-[460px]"
        />

        <div className="mt-5 rounded-2xl bg-[#edf3ed] p-5">
          <h3 className="font-bold text-[#304b3c]">
            A little preparation can help
          </h3>

          <p className="mt-2 text-[17px] leading-7 text-[#4b5d50]">
            Write down your questions, bring your reports and,
            if helpful, ask a family member or caregiver to
            accompany you.
          </p>
        </div>
      </div>

      <div className="rounded-[24px] border border-[#e1e8e0] bg-[#f8faf7] p-5 sm:p-8">

        <h3 className="mb-6 text-xl font-bold text-[#263c30]">
          Your appointment checklist
        </h3>

        <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {oncologistQuestions.map((question, index) => (
            <div
              key={question}
              className="flex items-start gap-3 border-b border-[#e3eae3] pb-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] text-xs font-bold text-[#c9673c]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-[16px] leading-6 text-[#435849] sm:text-[17px]">
                {question}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>

{/* SUPPORTIVE CARE SERVICES */}
<section className="bg-[#f7f9f6] py-14 sm:py-16 lg:py-20">
  <div className="page-container px-5 sm:px-8 lg:px-12">

    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-[#e87744]">
        CONTINUED SUPPORT
      </p>

      <h2 className="display-font mt-4 text-3xl font-bold text-[#263c30] sm:text-4xl">
        Support Beyond Treatment
      </h2>

      <p className="mt-4 text-base leading-8 text-[#536458]">
        Supportive services can address the physical, emotional
        and practical needs of patients and their families.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {ongoingSupportItems.map((item, index) => (
        <article
          key={item.title}
          className="rounded-2xl border border-[#e1e8e0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf3ed] text-[#476b55]">
            {index === 0 ? <HeartPulse size={22} /> :
             index === 1 ? <HeartHandshake size={22} /> :
             index === 2 ? <Activity size={22} /> :
             index === 3 ? <ShieldCheck size={22} /> :
             index === 4 ? <UsersRound size={22} /> :
             <Stethoscope size={22} />}
          </span>

          <h3 className="mt-4 text-lg font-bold text-[#263c30]">
            {item.title}
          </h3>

          <p className="mt-3 text-[18px] leading-7 text-[#4b5d50]">
            {item.text}
          </p>
        </article>
      ))}
    </div>

    {/* <p className="mt-7 text-sm leading-6 text-[#657468]">
      Please contact RENOVA to confirm the availability of individual
      services, international patient assistance and insurance support.
    </p> */}

  </div>
</section>




    {/* PATIENT TESTIMONIAL VIDEOS - ALL SPECIALITIES */}

{patientTestimonialItems.length > 0 && (
  <ContentVideoCarousel
    eyebrow="PATIENT STORIES"
    title="Stories of Strength and Support"
    subtitle="Explore genuine patient experiences and educational
        videos shared by RENOVA, helping patients and families
        understand different aspects of cancer care."
    items={patientTestimonialItems}
    slidesPerView={4}
    autoPlay
    interval={4500}
    background="white"
  />
)}


      {/* CONTACT AND APPOINTMENTS */}
<section className="bg-[#edf3ed] px-5 py-14 sm:px-8 lg:px-12">
  <div className="page-container flex flex-col justify-between gap-7 md:flex-row md:items-center">

    <div className="max-w-2xl">
      <p className="text-xs font-bold tracking-[0.2em] text-[#e87744]">
        WE ARE HERE TO HELP
      </p>

      <h2 className="display-font mt-3 text-2xl font-bold text-[#263c30] sm:text-3xl">
        Have Questions About Your Care Journey?
      </h2>

      <p className="mt-3 text-[16px] leading-7 text-[#4b5d50]">
        Our team is here to help with appointment enquiries, information about available patient support services and guidance on preparing for your consultation.
      </p>
    </div>

    <div className="flex flex-wrap gap-3">
      <Link
        to="/contact"
        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#476b55] px-6 py-3 font-semibold text-[#304b3c] transition hover:bg-white"
      >
        Contact Us
        <MessageCircleHeart size={18} />
      </Link>

      <Link
        to="/appointments"
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#476b55] px-6 py-3 font-semibold text-white transition hover:bg-[#304b3c]"
      >
        Book an Appointment
        <CalendarDays size={18} />
      </Link>
    </div>

  </div>
</section>
    </main>
  );
}


