import { serviceDetailContent } from "./serviceDetails";
import breastBanner from "../assets/home/breast-banner.png";
import diagnosisBanner from "../assets/home/diagnosisBanner2.jpg";
import treatmentBanner from "../assets/home/treatmentBanner3.jpg";

import breastScreening from "../assets/home/breast-screening.jpg";
import diagnosticImaging from "../assets/home/diagnostic-imaging.jpg";
import surgicalOncology from "../assets/home/surgical-oncology.jpg";
import medicalOncology from "../assets/home/medical-oncology.jpg";
import radiationOncology from "../assets/home/radiation-oncology.jpg";
import patientSupport from "../assets/home/patient-support.jpg";

export const hospital = {
  name: "Kaizen Oncology",
  nameLine2: "Hospitals",
  tagline: "Specialist Breast Care Programme",
  email: "care@kaizenoncologyhospitals.com",
  phoneDisplay: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  address: "Hi-tech City | Banjara Hills | Nampally | Masab Tank, Hyderabad.",
 hours: "Monday – Sunday: 9:00 AM – 8:00 PM (Sample timings)",
  whatsappNumber: "910000000000",
};

export const brochures = [
  {
    id: "brochure-main",
    tag: "B-READY · B-AHEAD · B-YOU",
    title: "Breast care pathway brochure",
    description:
      "Overview of diagnostic assessment, treatment services and recovery support at Kaizen Oncology Hospitals. Add your verified 02.pdf to public/brochures/02.pdf.",
    file: "/brochures/02.pdf",
  },
  {
    id: "brochure-screening",
    tag: "SCREENING",
    title: "Breast screening guide",
    description: "When to attend screening, what mammography involves, and when further tests may be offered.",
    file: "/brochures/breast-screening-guide.pdf",
  },
  {
    id: "brochure-support",
    tag: "PATIENT SUPPORT",
    title: "Life during and after treatment",
    description: "Practical tips on side effects, nutrition, emotional wellbeing and follow-up care.",
    file: "/brochures/patient-support-guide.pdf",
  },
];


export const services = [
  {
    slug: "breast-cancer-screening",
    title: "Breast Cancer Screening",
    description:
      "Learn about mammography, clinical examinations and screening options that depend on age, risk and local guidance.",
    image:
      breastScreening,
    path: "/services/breast-cancer-screening",
    detail: serviceDetailContent["breast-cancer-screening"],
  },
  {
    slug: "diagnostic-imaging",
    title: "Diagnostic Imaging",
    description:
      "Understand how mammography, ultrasound and, when indicated, MRI help clinicians look more closely at breast changes.",
    image:
      diagnosticImaging,
    path: "/services/diagnostic-imaging",
    detail: serviceDetailContent["diagnostic-imaging"],
  },
  {
    slug: "surgical-oncology",
    title: "Surgical Oncology",
    description:
      "Explore breast-conserving surgery, mastectomy and oncoplastic approaches, chosen according to clinical need and preference.",
    image:
      surgicalOncology,
    path: "/services/surgical-oncology",
    detail: serviceDetailContent["surgical-oncology"],
  },
  {
    slug: "medical-oncology",
    title: "Medical Oncology",
    description:
      "Learn about chemotherapy, hormone therapy and targeted medicines that may form part of an individual treatment plan.",
    image:
     medicalOncology,
    path: "/services/medical-oncology",
    detail: serviceDetailContent["medical-oncology"],
  },
  {
    slug: "radiation-oncology",
    title: "Radiation Oncology",
    description:
      "Understand how radiotherapy may be used after surgery, or to help control symptoms, when it is clinically appropriate.",
    image:
      radiationOncology,
    path: "/services/radiation-oncology",
    detail: serviceDetailContent["radiation-oncology"],
  },
  {
    slug: "patient-support",
    title: "Patient Support",
    description:
      "Find guidance on appointments, treatment preparation, recovery, nutrition and emotional wellbeing for patients and families.",
    image:
     patientSupport,
    path: "/services/patient-support",
    detail: serviceDetailContent["patient-support"],
  },
];


export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}


export const slides = [
  {
    eyebrow: "Kaizen Oncology HOSPITALS",
    title: "Comprehensive Cancer Care with Compassion and Expertise",
    description:
      "From first assessment to recovery, we help you understand the next step and feel supported while you take it.",
    image: breastBanner,

    primary: "Appointment",
    primaryPath: "/appointments",

    secondary: "Explore Our Services",
    secondaryPath: "/services",
  },

  {
    eyebrow: "CLEARER ANSWERS",
    title: "When something feels different, seek assessment.",
    description:
      "Most breast lumps are not cancer. Persistent or unusual changes still deserve a timely clinical review.",
    image: diagnosisBanner,

    primary: "Learn the Signs",
    primaryPath: "/health-library",

    secondary: "Find a Specialist",
    secondaryPath: "/doctors",
  },

  {
    eyebrow: "PERSONALISED SUPPORT",
    title: "A care pathway built around you.",
    description:
      "Diagnosis, treatment and recovery are connected stages. We explain options so you can take part in every decision.",
    image: treatmentBanner,

    primary: "Find a Specialist",
    primaryPath: "/doctors",

    secondary: "Patient Support",
    secondaryPath: "/patient-care",
  },
];


export const doctors = [
  {
    name: "Dr. Ananya Sharma",
    role: "Consultant, Medical Oncology",
    focus: "Systemic treatment planning and supportive care discussions.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Dr. Meera Reddy",
    role: "Consultant, Surgical Oncology",
    focus: "Breast-conserving surgery, mastectomy and reconstruction counselling.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Dr. Rahul Verma",
    role: "Consultant, Radiation Oncology",
    focus: "Radiotherapy planning and follow-up after local treatment.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
  },
];

export const testimonials = [
  {
    id: "t1",
    quote:
      "The team explained each step clearly and helped me feel heard throughout my appointments.",
    name: "Patient",
    detail: "Illustrative sample — replace with approved patient feedback.",
  },
  {
    id: "t2",
    quote:
      "Having access to clear information helped my family prepare better questions for the doctor.",
    name: "Caregiver",
    detail: "Illustrative sample — replace with approved patient feedback.",
  },
  {
    id: "t3",
    quote:
      "The guidance made it easier to understand my appointments and the next steps in my care.",
    name: "Patient",
    detail: "Illustrative sample — replace with approved patient feedback.",
  },
  {
    id: "t4",
    quote:
      "I appreciated being given time to ask questions and to think before making a decision.",
    name: "Patient",
    detail: "Illustrative sample — replace with approved patient feedback.",
  },
  {
    id: "t5",
    quote:
      "The written notes after the consultation helped our family talk through the options together.",
    name: "Caregiver",
    detail: "Illustrative sample — replace with approved patient feedback.",
  },
  {
    id: "t6",
    quote:
      "Follow-up felt organised. I knew who to contact if something worried me between visits.",
    name: "Patient",
    detail: "Illustrative sample — replace with approved patient feedback.",
  },
  {
    id: "t7",
    quote:
      "The clinic environment felt calm, and the explanations were never rushed.",
    name: "Patient",
    detail: "Illustrative sample — replace with approved patient feedback.",
  },
  {
    id: "t8",
    quote:
      "Support for side effects made treatment feel more manageable day to day.",
    name: "Patient",
    detail: "Illustrative sample — replace with approved patient feedback.",
  },
];

export const videos = [
  {
    id: "v1",
    title: "Breast cancer: signs to look for",
    youtubeId: "Kye2oX-b39E",
    url: "https://www.youtube.com/watch?v=Kye2oX-b39E",
  },
  {
    id: "v2",
    title: "Breast Health Awareness",
    youtubeId: "lY4KeyTMwq4",
    url: "https://youtube.com/shorts/lY4KeyTMwq4",
  },
  {
    id: "v3",
    title: "Breast Cancer Awareness",
    youtubeId: "YkVcmOWgj_M",
    url: "https://youtube.com/shorts/YkVcmOWgj_M",
  },
  {
    id: "v4",
    title: "Breast Health Education",
    youtubeId: "MvyIu7J9kbw",
    url: "https://youtube.com/shorts/MvyIu7J9kbw",
  },
];


export const gallery = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    alt: "Healthcare professional in clinic",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80",
    alt: "Medical consultation setting",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    alt: "Healthcare environment",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    alt: "Clinical discussion",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80",
    alt: "Surgical consultation",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    alt: "Supportive conversation",
  },
];

export const blogs = [
  {
    id: "breast-changes",
    category: "BREAST HEALTH",
    title: "Understanding breast changes and when to seek medical advice",
    description:
      "Learn which breast changes need a clinical review, and why most lumps are not cancer.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    path: "/blogs#breast-changes",
  },
  {
    id: "clinic-appointment",
    category: "CLINIC VISIT",
    title: "What to expect at a breast clinic appointment",
    description:
      "A plain-English guide to examination, imaging and, when indicated, biopsy in one visit.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    path: "/blogs#clinic-appointment",
  },
  {
    id: "imaging-biopsy",
    category: "DIAGNOSIS",
    title: "Mammography, ultrasound and breast biopsy explained",
    description:
      "How imaging and tissue sampling work together, and why the tests you have depend on your circumstances.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    path: "/blogs#imaging-biopsy",
  },
  {
    id: "pathology",
    category: "RESULTS",
    title: "Understanding breast cancer pathology results",
    description:
      "What receptor testing and tumour reports can mean when you discuss them with your specialist.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
    path: "/blogs#pathology",
  },
  {
    id: "treatment-questions",
    category: "TREATMENT",
    title: "Questions to ask before breast cancer treatment",
    description:
      "Practical questions that help you take part in decisions about surgery, medicines and radiotherapy.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80",
    path: "/blogs#treatment-questions",
  },
  {
    id: "side-effects",
    category: "SUPPORT",
    title: "Coping with treatment side effects",
    description:
      "How to talk about side effects, when to seek urgent help, and why supportive care matters.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
    path: "/blogs#side-effects",
  },
  {
    id: "emotional-wellbeing",
    category: "WELLBEING",
    title: "Emotional wellbeing during breast cancer care",
    description:
      "Anxiety, uncertainty and family strain are common. Support is part of care, not an extra.",
    image:
      "https://images..com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    path: "/blogs#emotional-wellbeing",
  },
  {
    id: "life-after",
    category: "SURVIVORSHIP",
    title: "Life after breast cancer treatment",
    description:
      "Follow-up, recovery, returning to daily activities and long-term support after active treatment.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cbca70401754?auto=format&fit=crop&w=900&q=80",
    path: "/blogs#life-after",
  },
];

export const careStages = [
  {
    code: "B-READY",
    label: "Diagnostic Services",
    heading: "Answers begin with a thorough assessment.",
    text: "A careful clinical review helps decide which tests, if any, are needed. Not every breast change requires the same pathway.",
    points: [
      "Clinical breast assessment",
      "Mammography and other appropriate imaging",
      "Ultrasound when indicated",
      "Image-guided biopsy when needed",
      "Pathology and laboratory evaluation",
      "Receptor testing and relevant tumour investigations",
      "A personalised discussion of results",
    ],
  },
  {
    code: "B-AHEAD",
    label: "Treatment Services",
    heading: "A treatment plan built around you.",
    text: "If treatment is needed, options are tailored to the diagnosis, tumour biology, overall health and your preferences.",
    points: [
      "Breast-conserving surgery where appropriate",
      "Mastectomy where clinically indicated",
      "Oncoplastic approaches where available",
      "Chemotherapy and other systemic treatments",
      "Hormone therapy and targeted medicines when appropriate",
      "Radiotherapy",
      "Multidisciplinary treatment planning",
    ],
  },
  {
    code: "B-YOU",
    label: "Rehabilitation and Recovery",
    heading: "Recovery is part of your care.",
    text: "Support continues after active treatment, helping you rebuild strength, manage side effects and look after long-term health.",
    points: [
      "Physical rehabilitation and recovery",
      "Support for treatment-related side effects",
      "Nutrition guidance",
      "Psychological and emotional support",
      "Lifestyle and wellbeing guidance",
      "Follow-up and survivorship care",
      "Long-term support for patients and families",
    ],
  },
];

export const diagnosticSteps = [
  {
    title: "Clinical assessment",
    text: "A trained clinician reviews your history, examines the breasts, nipples, underarms and nearby lymph node areas, and discusses what feels different for you.",
  },
  {
    title: "Appropriate imaging",
    text: "Mammography, ultrasound or, in selected cases, MRI may be used. The choice depends on age, symptoms, breast density and clinical findings.",
  },
  {
    title: "Biopsy when indicated",
    text: "If imaging or examination shows an area that needs a closer look, a tissue sample may be taken, often with image guidance. Not every finding needs a biopsy.",
  },
  {
    title: "Pathology and tumour tests",
    text: "A pathologist examines the sample. If cancer is found, further tests may look at hormone receptors, HER2 and other features that guide treatment.",
  },
  {
    title: "Specialist explanation",
    text: "Results are discussed in plain language so you can understand what they mean, which options exist, and what happens next.",
  },
];

export const mdtRoles = [
  "Breast surgeons",
  "Radiologists",
  "Pathologists",
  "Medical oncologists",
  "Radiation oncologists",
  "Specialist nurses",
  "Rehabilitation and support professionals",
];

export const references = [
  {
    label: "World Health Organization — Breast cancer fact sheet",
    url: "https://www.who.int/news-room/fact-sheets/detail/breast-cancer",
  },
  {
    label: "NHS — Symptoms of breast cancer in women",
    url: "https://www.nhs.uk/conditions/breast-cancer-in-women/symptoms-of-breast-cancer-in-women/",
  },
  {
    label: "NHS — Treatment for breast cancer in women",
    url: "https://www.nhs.uk/conditions/breast-cancer-in-women/treatment-for-breast-cancer-in-women/",
  },
  {
    label: "Cancer Research UK — Tests for breast cancer",
    url: "https://www.cancerresearchuk.org/about-cancer/breast-cancer/getting-diagnosed/tests",
  },
  {
    label: "IARC — Breast cancer",
    url: "https://www.iarc.who.int/cancer-type/breast-cancer/",
  },
];

export const articles = {
  "breast-changes": {
    intro:
      "Knowing what is usual for your breasts makes it easier to notice a change. A change does not mean cancer, but it does mean it is worth asking a clinician.",
    paragraphs: [
      "The World Health Organization notes that warning signs can include a lump or thickening, often without pain; a change in size, shape or appearance; dimpling, redness or pitting of the skin; a change in the nipple or areola; and abnormal or bloody nipple discharge. Most breast lumps are not cancer.",
      "The NHS also lists a lump or swelling in the breast, chest or armpit; skin that looks dimpled, like orange peel; a colour change; a change in size or shape; nipple discharge when you are not pregnant or breastfeeding; and a nipple that turns inwards or develops a rash. Breast pain by itself is not usually a symptom of breast cancer.",
      "See a doctor if you notice a new lump, a persistent change that is not normal for you, or nipple changes. Screening recommendations vary by country, age and individual risk, so they should be discussed with a clinician rather than treated as universal rules.",
    ],
  },
  "clinic-appointment": {
    intro:
      "A breast clinic visit is often organised as a “one-stop” assessment. You may have more than one test on the same day, depending on your symptoms.",
    paragraphs: [
      "Cancer Research UK describes triple assessment as a combination of clinical examination, imaging and, when indicated, biopsy. You will not always need every test.",
      "A clinician may examine the breasts and the lymph nodes under the arms. Imaging might include a mammogram, an ultrasound, or both. If a sample of tissue is needed, this is usually explained before it is taken.",
      "Bring a list of medicines, previous reports if you have them, and questions. You can ask for a chaperone or to have a trusted person with you. This page is educational and does not replace personal medical advice.",
    ],
  },
  "imaging-biopsy": {
    intro:
      "Imaging looks at the structure of the breast. A biopsy looks at cells or tissue. Together they help clinicians decide whether a change is benign or needs treatment.",
    paragraphs: [
      "A mammogram is a specialised X-ray of the breast. Compression can feel uncomfortable, but it is brief. Ultrasound uses sound waves and is often used for younger patients, dense breast tissue, or to look at a lump felt on examination.",
      "MRI is not a first test for every person. It may be used when more detail is needed, for example when mammograms and ultrasound do not give a clear picture, or in selected high-risk situations.",
      "A biopsy is the only way to confirm whether abnormal cells are present. Types include core needle biopsy and other image-guided techniques. The exact method depends on the size and location of the area being sampled.",
    ],
  },
  pathology: {
    intro:
      "Pathology results describe what the cells look like and, if cancer is present, features that help plan treatment. Reports can take time and often need a specialist explanation.",
    paragraphs: [
      "If cancer is found, the report may include the type (for example ductal or lobular), whether it is in situ or invasive, and the grade, which describes how the cells look compared with normal cells.",
      "Hormone receptor and HER2 tests look for features that some medicines can target. Genomic or tumour-profiling tests are used only in selected situations; they are not required for every diagnosis.",
      "Ask your specialist to explain each heading in the report. A pathology result is one part of a wider clinical picture that also includes examination, imaging and your overall health.",
    ],
  },
  "treatment-questions": {
    intro:
      "Treatment is not one-size-fits-all. NHS guidance notes that the plan depends on the size and type of cancer, whether it has spread, and your general health.",
    paragraphs: [
      "Helpful questions include: What type of breast cancer is this? What are the aims of treatment? What are the options if I have surgery, medicines, radiotherapy, or a combination? What are the likely side effects, and how are they managed?",
      "Ask whether breast-conserving surgery is suitable, or whether mastectomy is advised, and whether reconstruction can be discussed. Ask who will be in the multidisciplinary team and how decisions will be shared with you.",
      "No website can tell you which treatment you should have. These questions are a starting point for a conversation with your oncology team.",
    ],
  },
  "side-effects": {
    intro:
      "Side effects vary by treatment. Some are short-lived; others need ongoing support. Tell your team early rather than waiting for the next scheduled visit if you are worried.",
    paragraphs: [
      "Surgery can affect movement, sensation and body image. Radiotherapy may cause skin redness and tiredness. Chemotherapy can cause nausea, infection risk, hair loss and fatigue. Hormone therapy may affect joints, mood or menopausal symptoms.",
      "Supportive care can include medicines for nausea, physiotherapy, nutrition advice and psychological support. Scalp cooling is used in some centres for selected chemotherapy regimens; it is not suitable for everyone and is not confirmed as available here unless your hospital states it.",
      "Seek urgent medical help for symptoms your team has asked you to watch for, such as fever during chemotherapy. Complete the prescribed course unless your specialist advises a change.",
    ],
  },
  "emotional-wellbeing": {
    intro:
      "Uncertainty is common before diagnosis, during treatment and afterwards. Emotional support is a recognised part of cancer care, not a sign that you are not coping.",
    paragraphs: [
      "People respond differently. Some want detailed information; others prefer a stepwise explanation. Families and carers may also need support and a clear role in appointments.",
      "WHO emphasises that psychosocial, mental health, nutritional and physical support can help people complete treatment. Ask about counselling, specialist nursing support and trusted patient organisations.",
      "If you feel persistently low, anxious or unable to sleep, tell a member of your care team. This information is general and is not a substitute for mental health care.",
    ],
  },
  "life-after": {
    intro:
      "Follow-up after treatment looks after recovery, watches for recurrence, and supports a return to everyday life. Plans are individual.",
    paragraphs: [
      "Follow-up may include clinical reviews and recommended imaging. Report new breast, chest or other persistent symptoms rather than waiting for a routine appointment if you are concerned.",
      "Rehabilitation can help with arm movement, fatigue, scar care and fitness. Nutrition and gentle activity, as advised by your team, often form part of longer-term wellbeing.",
      "Survivorship is not a single moment. Some people feel well quickly; others need months of adjustment. Ask about late effects, work, fertility and sexual health if they matter to you.",
    ],
  },
};
