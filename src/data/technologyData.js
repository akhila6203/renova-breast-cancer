
import radixactImage from "../assets/patients-support/Image-guided radiotherapy.jpg";
import adaptiveImage from "../assets/patients-support/Heart-sparing radiotherapy.jpg";
import brachytherapyImage from "../assets/patients-support/Breast brachytherapy.jpg";
import dibhImage from "../assets/patients-support/Heart-sparing radiotherapy.jpg";
import versaImage from "../assets/home/radiation-oncology.jpg";
import molecularImage from "../assets/patients-support/Genomic profiling.jpg";
import pathologyImage from "../assets/patients-support/Onco-pathology.jpg";
import roboticImage from "../assets/home/surgical-oncology.jpg";
import hipecImage from "../assets/home/diagnostic-imaging.jpg";
import mammographyImage from "../assets/patients-support/Digital breast tomosynthesis.jpg";
import breastInitiativeImage from "../assets/patients-support/Pink Room and B-Well Wednesdays.jpg";

// Reusable section builder.
// Each technology still has its own content and images.
const createSections = ({
  overview,
  need,
  procedure,
  benefits,
  preparation,
  recovery,
  conclusion,
  images,
  alt,
}) => [
  {
    title: overview.title,
    image: images[0],
    imageAlt: alt[0],
    paragraphs: overview.paragraphs,
    points: overview.points,
  },
  {
    title: need.title,
    image: images[1],
    imageAlt: alt[1],
    paragraphs: need.paragraphs,
    points: need.points,
  },
  {
    title: procedure.title,
    image: images[2],
    imageAlt: alt[2],
    paragraphs: procedure.paragraphs,
    points: procedure.points,
  },
  {
    title: benefits.title,
    image: images[3],
    imageAlt: alt[3],
    paragraphs: benefits.paragraphs,
    points: benefits.points,
  },
  {
    title: preparation.title,
    image: images[4],
    imageAlt: alt[4],
    paragraphs: preparation.paragraphs,
    points: preparation.points,
  },
  {
    title: recovery.title,
    image: images[5],
    imageAlt: alt[5],
    paragraphs: recovery.paragraphs,
    points: recovery.points,
  },
  {
    title: conclusion.title,
    image: images[0],
    imageAlt: alt[0],
    paragraphs: conclusion.paragraphs,
    points: conclusion.points,
  },
];

// Shared disclaimer for technology detail pages.
const clinicalDisclaimer =
  "This information is for general education and does not replace medical advice. Treatment suitability, benefits, risks and recovery vary between patients. Please consult the relevant specialist for individual guidance.";

// -----------------------------------------------------
// 1. RADIXACT X9 TOMOTHERAPY WITH SYNCHRONY
// -----------------------------------------------------

const radixact = {
  slug: "radixact-x9-synchrony",
  title: "Radixact X9 TomoTherapy with Synchrony",
  category: "RADIOTHERAPY",
  image: radixactImage,
  imageAlt: "Radixact X9 image-guided radiotherapy system",
  specialities: ["Radiation Oncology"],

  description:
    "An advanced helical radiation therapy system combining integrated CT imaging, intensity-modulated radiation delivery and, where configured, real-time motion tracking.",

  detailIntro:
    "Radixact X9 TomoTherapy is an advanced radiation therapy system designed to deliver highly targeted radiation to selected cancer treatment areas. It combines image-guided radiation therapy (IGRT), intensity-modulated radiation therapy (IMRT) and, when the Synchrony option is available, motion tracking to help manage movement during treatment.",

  sections: createSections({
    images: [
      radixactImage,
      adaptiveImage,
      versaImage,
      molecularImage,
      pathologyImage,
      roboticImage,
    ],
    alt: [
      "Radixact X9 TomoTherapy system",
      "Radiation therapy planning",
      "Radiation therapy procedure",
      "Advanced cancer treatment technology",
      "Cancer treatment consultation",
      "Cancer recovery support",
    ],

    overview: {
      title: "What is Radixact X9 TomoTherapy?",
      paragraphs: [
        "Radixact X9 TomoTherapy is an advanced radiation therapy system designed to deliver precise and personalised radiation treatment. It uses image-guided radiation therapy (IGRT) and intensity-modulated radiation therapy (IMRT) to shape radiation around the planned treatment area.",
        "Its helical delivery approach allows the treatment gantry to rotate around the patient while the treatment couch moves through the machine. This enables radiation to be delivered from multiple angles according to the individual treatment plan.",
        "Integrated CT imaging helps the clinical team check the patient's position and treatment area. When the Synchrony motion-management option is installed and configured, the system can track selected target movements and coordinate radiation delivery accordingly.",
      ],
      points: [
        "Image-guided radiation therapy (IGRT).",
        "Intensity-modulated radiation therapy (IMRT).",
        "Helical radiation delivery.",
        "Integrated CT imaging.",
        "Synchrony motion tracking when available.",
        "Individualised treatment planning.",
      ],
    },

    need: {
      title: "What is the Need for Radixact X9 TomoTherapy?",
      paragraphs: [
        "Some tumours require carefully planned radiation delivery because of their location, shape or proximity to important organs. Radixact X9 may be considered when the treating radiation oncology team believes that its image-guided and modulated radiation delivery approach is appropriate.",
        "It may be evaluated for selected complex, irregular or difficult-to-reach tumours, including cases where nearby healthy tissues and vital organs need particular consideration.",
        "It may be assessed for selected cancers involving the brain, prostate, lungs, head and neck, liver or spine. Suitability depends on the cancer type, stage, tumour location and the patient's overall health.",
      ],
      points: [
        "Selected brain tumours.",
        "Selected prostate cancers.",
        "Selected lung cancers.",
        "Selected head and neck cancers.",
        "Selected liver and spine tumours.",
        "Cases requiring careful consideration of nearby organs.",
      ],
    },

    procedure: {
      title: "How is the Radixact X9 Procedure Performed?",
      paragraphs: [
        "The treatment process begins with a consultation and assessment by the radiation oncology team. A CT simulation scan is generally performed to understand the tumour's size, shape and location and its relationship with nearby organs.",
        "The radiation oncologist, medical physicist and treatment planning team prepare an individualised treatment plan. This includes determining the treatment area, radiation dose and delivery parameters.",
        "During treatment, the patient lies on a specially designed treatment couch. The couch moves through the rotating gantry while the machine delivers planned radiation from multiple angles using its helical delivery approach.",
        "Integrated imaging supports treatment-position verification. If the system has the appropriate Synchrony configuration and the patient's treatment is suitable for motion tracking, this technology may help manage target movement.",
        "An individual session may take approximately 15–30 minutes in some cases. The actual appointment time varies according to positioning, imaging and treatment requirements.",
      ],
      points: [
        "Initial consultation and clinical assessment.",
        "CT simulation and treatment-area assessment.",
        "Individualised radiation treatment planning.",
        "Patient positioning on the treatment couch.",
        "Image-guided positioning verification.",
        "Helical radiation delivery.",
        "Motion management when available and indicated.",
      ],
    },

    benefits: {
      title: "Benefits of Radixact X9 TomoTherapy",
      paragraphs: [
        "Radixact X9 combines image guidance and modulated radiation delivery. For appropriately selected patients, this approach may help the treatment team shape radiation around the planned target while considering nearby healthy structures.",
        "Integrated imaging supports positioning checks. The Synchrony option, where installed and clinically appropriate, can support motion-aware treatment delivery.",
        "The potential benefits depend on the patient's diagnosis, treatment plan, system configuration and the experience of the clinical team.",
      ],
      points: [
        "Individualised radiation treatment planning.",
        "Helical delivery from multiple angles.",
        "Integrated CT imaging for treatment guidance.",
        "Potential to limit unnecessary radiation exposure to nearby tissues.",
        "Motion-management support when configured.",
        "Assessment for selected cancers in different body areas.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before Treatment",
      paragraphs: [
        "Before starting treatment, patients attend consultations and planning appointments with the radiation oncology team. These appointments help the team understand the patient's medical history, current medicines and treatment requirements.",
        "Preparation requirements can differ according to the treatment area and individual plan. Patients should follow the instructions provided by their treating team.",
      ],
      points: [
        "Attend all pre-treatment consultations.",
        "Inform the doctor about current medicines and allergies.",
        "Follow fasting instructions only if specifically advised.",
        "Wear comfortable, loose-fitting clothing.",
        "Avoid jewellery if instructed.",
        "Follow positioning instructions.",
        "Rest adequately and discuss concerns with the team.",
      ],
    },

    recovery: {
      title: "Recovery Tips and Follow-Up Care",
      paragraphs: [
        "Recovery after radiation therapy varies from person to person. Some patients may experience fatigue or skin changes in the treated area. Side effects depend on the treatment site, radiation dose and individual response.",
        "Regular follow-up appointments help the team monitor recovery, assess treatment response and manage side effects.",
      ],
      points: [
        "Get adequate rest.",
        "Maintain a balanced diet and hydration.",
        "Follow the recommended skin-care instructions.",
        "Avoid scrubbing sensitive skin.",
        "Report persistent redness, swelling or discomfort.",
        "Attend scheduled follow-up appointments.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "Radixact X9 TomoTherapy combines helical radiation delivery with integrated imaging and individualised treatment planning. It may be considered for selected cancers following specialist assessment.",
        "When the appropriate Synchrony option is installed and clinically indicated, motion tracking can support treatment delivery for selected moving targets.",
        "The most suitable radiation therapy approach is determined by the treating radiation oncologist after reviewing the diagnosis, tumour characteristics and treatment goals.",
      ],
      points: [
        "Advanced image-guided radiation therapy.",
        "Individualised treatment planning.",
        "Integrated imaging and positioning verification.",
        "Motion-management support when configured.",
        "Specialist assessment before treatment.",
      ],
    },
  }),

  faqs: [
    {
      question: "What are the possible risks or side effects?",
      answer:
        "Possible side effects depend on the treatment area and radiation dose. Some patients may experience fatigue, mild skin irritation, nausea or temporary hair loss in the treated area. The radiation oncology team explains the expected risks before treatment.",
    },
    {
      question: "Can Radixact X9 be used for paediatric patients?",
      answer:
        "It may be considered for selected paediatric patients following careful evaluation by a paediatric oncology and radiation oncology team. The decision considers the child's diagnosis, age, treatment goals and potential long-term effects.",
    },
    {
      question: "How long does a treatment session take?",
      answer:
        "An individual session may take approximately 15–30 minutes in some cases. The actual appointment duration varies depending on the treatment plan, patient positioning and imaging requirements.",
    },
    {
      question: "How does Radixact X9 target a tumour?",
      answer:
        "It combines image-guided treatment workflows with intensity-modulated radiation delivery. Integrated imaging supports positioning verification. Synchrony can support motion tracking for selected targets when available and indicated.",
    },
    {
      question: "Does every Radixact X9 system include Synchrony?",
      answer:
        "No. Synchrony is an additional motion-management option and is not automatically included with every installation. Patients should confirm the system configuration with the treating hospital.",
    },
    {
      question: "Is Radixact X9 suitable for every type of cancer?",
      answer:
        "No. The radiation oncologist evaluates the cancer type, location, stage, treatment objective, nearby organs and the patient's overall health before recommending a radiation therapy technique.",
    },
  ],

  links: [
    {
      label: "Radixact – How It Works",
      url: "https://radixact.com/radixact-how-it-works/",
    },
    {
      label: "Accuray – Radixact System",
      url: "https://www.accuray.com/radixact/",
    },
    {
      label: "Accuray – Synchrony",
      url: "https://www.accuray.com/software/synchrony/",
    },
  ],
};

// -----------------------------------------------------
// 2. AI-ASSISTED ADAPTIVE RADIOTHERAPY
// -----------------------------------------------------

const adaptiveRadiotherapy = {
  slug: "ai-adaptive-radiotherapy",
  title: "AI-Assisted Adaptive Radiotherapy",
  category: "RADIOTHERAPY",
  image: adaptiveImage,
  imageAlt: "Adaptive radiotherapy image guidance",
  specialities: ["Radiation Oncology"],

  description:
    "An adaptive treatment approach that uses updated imaging and planning workflows to account for changes in tumour position, anatomy and nearby organs during radiotherapy.",

  detailIntro:
    "Adaptive radiotherapy allows the treatment team to review and modify a radiation plan when a patient's anatomy or tumour changes. AI-enabled tools may assist selected imaging, contouring and planning tasks, while clinical decisions remain with qualified professionals.",

  sections: createSections({
    images: [
      adaptiveImage,
      molecularImage,
      versaImage,
      pathologyImage,
      radixactImage,
      roboticImage,
    ],
    alt: [
      "Adaptive radiation therapy",
      "Computer-assisted medical analysis",
      "Radiation therapy equipment",
      "Medical imaging and pathology",
      "Image-guided radiotherapy",
      "Cancer care and recovery",
    ],

    overview: {
      title: "What is AI-Assisted Adaptive Radiotherapy?",
      paragraphs: [
        "Adaptive radiotherapy is a treatment approach in which the radiation plan can be reviewed and modified to account for changes in the tumour or nearby anatomy.",
        "A patient's anatomy can change during a course of treatment because of tumour response, organ filling, weight changes or day-to-day positioning differences.",
        "AI-enabled software may assist selected tasks such as image processing, structure contouring and planning workflows. Trained professionals review and approve treatment decisions.",
      ],
      points: [
        "Updated treatment-position imaging.",
        "Assessment of tumour and organ changes.",
        "Plan review and adaptation when indicated.",
        "AI-assisted contouring on selected platforms.",
        "Clinical review and quality assurance.",
      ],
    },

    need: {
      title: "Why is Adaptive Radiotherapy Needed?",
      paragraphs: [
        "A treatment plan is initially created using the patient's anatomy at simulation. During treatment, the relationship between the tumour and nearby organs may change.",
        "Adaptive workflows allow the clinical team to assess whether the original plan remains appropriate or whether a revised plan should be considered.",
      ],
      points: [
        "Changes in tumour size or position.",
        "Changes in nearby organ position.",
        "Changes in patient anatomy during treatment.",
        "Selected cases requiring updated dose assessment.",
        "Individualised treatment decisions.",
      ],
    },

    procedure: {
      title: "How is Adaptive Radiotherapy Performed?",
      paragraphs: [
        "The patient undergoes imaging during the treatment course. The team reviews the current anatomy and compares it with the original treatment plan.",
        "If adaptation is clinically appropriate, the target and nearby organs are reassessed. The treatment plan may be recalculated or modified.",
        "AI-enabled tools may assist selected planning tasks, but qualified professionals review the images, contours, dose calculations and proposed plan before delivery.",
      ],
      points: [
        "Initial consultation and CT simulation.",
        "Creation of the original radiation plan.",
        "Updated imaging during treatment.",
        "Review of anatomy and dose distribution.",
        "Plan adaptation when clinically indicated.",
        "Quality assurance and treatment delivery.",
      ],
    },

    benefits: {
      title: "Benefits of Adaptive Radiotherapy",
      paragraphs: [
        "Adaptive radiotherapy can help the clinical team account for anatomical changes that occur during treatment. This may support more personalised dose delivery in selected cases.",
        "The benefits depend on the imaging platform, software, cancer site, clinical workflow and patient-specific treatment requirements.",
      ],
      points: [
        "Treatment planning that can account for anatomical changes.",
        "Updated imaging and dose assessment.",
        "Potential to improve target coverage in selected cases.",
        "Potential to better consider nearby healthy organs.",
        "AI-assisted workflow support where validated.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before Treatment",
      paragraphs: [
        "Preparation depends on the treatment area and the imaging requirements. The team may provide specific instructions regarding bladder filling, bowel preparation, food or fluids.",
        "Patients should explain any difficulty remaining in the required position and inform the team about changes in their health during treatment.",
      ],
      points: [
        "Attend simulation and planning appointments.",
        "Follow bladder or bowel preparation instructions if given.",
        "Wear comfortable clothing.",
        "Inform the team about new symptoms.",
        "Follow positioning instructions.",
        "Ask questions about imaging and treatment adaptation.",
      ],
    },

    recovery: {
      title: "Recovery Tips and Follow-Up Care",
      paragraphs: [
        "Adaptive radiotherapy does not have one universal recovery pattern. Side effects depend on the body area being treated and the total radiation plan.",
        "Patients should follow the care instructions provided by their radiation oncology team and attend follow-up appointments.",
      ],
      points: [
        "Follow the prescribed treatment and follow-up schedule.",
        "Rest when experiencing fatigue.",
        "Maintain hydration and balanced nutrition.",
        "Follow site-specific skin-care instructions.",
        "Report new or worsening symptoms.",
        "Attend all recommended reviews.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "AI-assisted adaptive radiotherapy combines updated imaging, treatment planning and selected software-supported workflows to help clinicians respond to changes in patient anatomy.",
        "AI tools are intended to support trained professionals, not replace clinical judgement. The treating team determines whether adaptation is appropriate for an individual patient.",
      ],
      points: [
        "Updated imaging and plan review.",
        "Individualised treatment adaptation.",
        "AI support for selected workflow tasks.",
        "Clinical oversight remains essential.",
      ],
    },
  }),

  faqs: [
    {
      question: "What is adaptive radiotherapy?",
      answer:
        "Adaptive radiotherapy is an approach in which the radiation plan can be reviewed and modified to account for changes in a patient's anatomy or tumour during treatment.",
    },
    {
      question: "What role does AI play in adaptive radiotherapy?",
      answer:
        "Depending on the platform, AI-enabled tools may assist image processing, structure contouring, plan comparison or workflow automation. Qualified professionals review and approve the treatment plan.",
    },
    {
      question: "Does every patient need adaptive radiotherapy?",
      answer:
        "No. It is considered for selected cases where anatomical changes or treatment requirements make plan adaptation clinically useful.",
    },
    {
      question: "Is adaptive radiotherapy painful?",
      answer:
        "The imaging and radiation delivery are generally non-invasive. Patients may need to remain in a particular position for a period. The team can explain what to expect for the specific treatment.",
    },
    {
      question: "How long does an adaptive treatment session take?",
      answer:
        "The duration varies depending on the imaging platform, complexity of the case and whether the plan needs adaptation. The treatment team can provide an estimate for the individual plan.",
    },
    {
      question: "Can AI independently decide my cancer treatment?",
      answer:
        "No. AI-enabled tools may assist selected clinical workflows, but treatment decisions require review and approval by qualified healthcare professionals.",
    },
  ],

  links: [
    {
      label: "Elekta – Adaptive Radiotherapy",
      url: "https://www.elekta.com/products/radiation-therapy/adaptive/",
    },
    {
      label: "Elekta – Adaptive Radiotherapy Solutions",
      url: "https://www.elekta.com/adaptive-radiotherapy/",
    },
  ],
};

// -----------------------------------------------------
// 3. MR-GUIDED ADAPTIVE BRACHYTHERAPY
// -----------------------------------------------------

const brachytherapy = {
  slug: "mr-guided-adaptive-brachytherapy",
  title: "MR-Guided Adaptive Brachytherapy",
  category: "RADIOTHERAPY",
  image: brachytherapyImage,
  imageAlt: "Image-guided brachytherapy",
  specialities: ["Radiation Oncology", "Gynaecological Oncology"],

  description:
    "MRI-based imaging can help clinicians assess tumour and surrounding soft tissues during brachytherapy planning for selected cancers.",

  detailIntro:
    "Brachytherapy is a form of internal radiation treatment in which a radiation source is placed inside or close to the treatment area. MRI can provide detailed soft-tissue information to support target assessment and treatment planning in selected cases.",

  sections: createSections({
    images: [
      brachytherapyImage,
      pathologyImage,
      versaImage,
      adaptiveImage,
      molecularImage,
      roboticImage,
    ],
    alt: [
      "Brachytherapy treatment",
      "Medical imaging and diagnosis",
      "Radiation therapy",
      "Adaptive treatment planning",
      "Cancer care assessment",
      "Patient recovery support",
    ],

    overview: {
      title: "What is MR-Guided Adaptive Brachytherapy?",
      paragraphs: [
        "Brachytherapy is an internal radiation treatment in which a radiation source is positioned inside or close to the target area.",
        "For selected cancers, particularly certain gynaecological cancers, MRI provides detailed information about the tumour and surrounding soft tissues.",
        "The imaging information can help the clinical team assess the target, applicator position and nearby organs when preparing an individualised treatment plan.",
      ],
      points: [
        "Internal radiation treatment.",
        "MRI-based soft-tissue assessment.",
        "Target and nearby organ evaluation.",
        "Individualised treatment planning.",
      ],
    },

    need: {
      title: "Why is MR-Guided Brachytherapy Needed?",
      paragraphs: [
        "The location and shape of a tumour can vary between patients. In selected cases, detailed imaging helps the treatment team understand the relationship between the target and nearby organs.",
        "MRI-guided planning may be particularly useful in selected gynaecological cancer treatments where accurate assessment of the target and surrounding anatomy is important.",
      ],
      points: [
        "Assessment of selected cervical and gynaecological cancers.",
        "Detailed soft-tissue visualisation.",
        "Target and organ-at-risk evaluation.",
        "Individualised applicator and dose planning.",
      ],
    },

    procedure: {
      title: "How is MR-Guided Brachytherapy Performed?",
      paragraphs: [
        "The patient first meets the specialist team for assessment and treatment planning. Depending on the cancer site, an applicator or specialised device may be placed near or within the treatment area.",
        "CT or MRI imaging is performed to assess the applicator position and surrounding anatomy. The radiation oncologist and medical physicist use the images to plan the dose.",
        "The radiation source is delivered through the applicator using a specialised afterloading system. The source is placed at planned positions for a specified period and then withdrawn.",
        "The exact procedure, anaesthesia, duration and number of sessions depend on the treatment site and clinical protocol.",
      ],
      points: [
        "Specialist consultation and assessment.",
        "Applicator placement when required.",
        "CT or MRI imaging.",
        "Target and organ assessment.",
        "Individualised dose planning.",
        "Radiation delivery using an afterloading system.",
        "Observation after the procedure.",
      ],
    },

    benefits: {
      title: "Benefits of MR-Guided Adaptive Brachytherapy",
      paragraphs: [
        "MRI can provide detailed soft-tissue information that may support target definition and assessment of nearby organs in selected cases.",
        "Brachytherapy delivers radiation locally from a source positioned close to the treatment area. The clinical team plans the dose according to the target and surrounding anatomy.",
      ],
      points: [
        "Detailed soft-tissue imaging.",
        "Individualised treatment planning.",
        "Localised internal radiation delivery.",
        "Assessment of nearby organs.",
        "Adaptation to applicator position and anatomy where appropriate.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before Brachytherapy",
      paragraphs: [
        "Preparation depends on the type of brachytherapy and the treatment area. Some procedures require fasting, anaesthesia, blood tests or other pre-procedure assessments.",
        "The treating team explains how to prepare, what medicines to take or avoid and whether a person needs someone to accompany them home.",
      ],
      points: [
        "Attend pre-treatment consultations.",
        "Discuss current medicines and allergies.",
        "Follow fasting instructions if anaesthesia is planned.",
        "Complete requested blood tests and imaging.",
        "Ask about the procedure and expected duration.",
        "Arrange transport if sedation or anaesthesia is used.",
      ],
    },

    recovery: {
      title: "Recovery Tips and Follow-Up Care",
      paragraphs: [
        "Recovery depends on the treatment site, applicator placement and whether anaesthesia was used. Some patients may need observation after treatment.",
        "The team provides instructions about activity, pain relief, hygiene and when normal activities can resume. Patients should contact the hospital if they develop unexpected or worsening symptoms.",
      ],
      points: [
        "Follow post-procedure instructions.",
        "Rest as advised after anaesthesia.",
        "Use prescribed medicines as directed.",
        "Follow site-specific hygiene instructions.",
        "Report fever, severe pain or unusual bleeding.",
        "Attend follow-up appointments.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "MR-guided adaptive brachytherapy combines internal radiation treatment with detailed imaging to support individualised planning in selected cancers.",
        "The treating radiation oncologist determines whether MRI-guided brachytherapy is suitable based on the diagnosis, tumour characteristics and treatment goals.",
      ],
      points: [
        "Image-guided internal radiation treatment.",
        "Detailed soft-tissue assessment.",
        "Individualised dose planning.",
        "Specialist-led treatment and follow-up.",
      ],
    },
  }),

  faqs: [
    {
      question: "What is brachytherapy?",
      answer:
        "Brachytherapy is internal radiation therapy in which a radiation source is placed inside or close to the treatment area. It is used for selected cancers depending on the diagnosis and treatment plan.",
    },
    {
      question: "Why is MRI used during brachytherapy?",
      answer:
        "MRI provides detailed soft-tissue images that can help the clinical team assess the tumour, applicator position and nearby organs during treatment planning.",
    },
    {
      question: "Is brachytherapy painful?",
      answer:
        "The experience depends on the type of procedure and whether anaesthesia or pain relief is used. The treating team explains the procedure and comfort measures beforehand.",
    },
    {
      question: "How long does a brachytherapy procedure take?",
      answer:
        "The duration varies depending on applicator placement, imaging, planning and radiation delivery. The hospital team can explain the expected timing for the individual procedure.",
    },
    {
      question: "What preparation is required?",
      answer:
        "Preparation may include consultation, imaging, blood tests and fasting if anaesthesia is planned. Follow the instructions provided by the treating team.",
    },
    {
      question: "What should I expect after treatment?",
      answer:
        "Some patients need a period of observation. Recovery instructions depend on the treatment site and procedure. Follow the team's guidance and report unexpected symptoms.",
    },
  ],

  links: [
    {
      label: "NCI – Brachytherapy",
      url: "https://www.cancer.gov/about-cancer/treatment/types/radiation-therapy/brachytherapy",
    },
    {
      label: "eviQ – Cervical Cancer Brachytherapy Patient Information",
      url: "https://www.eviq.org.au/radiation-oncology/gynaecological/1319-gynaecological-cervix-definitive-brachytherap/patient-information",
    },
    {
      label: "Indian Brachytherapy Society Guidelines",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6737572/",
    },
  ],
};

// -----------------------------------------------------
// 4. DEEP INSPIRATION BREATH HOLD USING ABC
// -----------------------------------------------------

const dibh = {
  slug: "dibh-abc",
  title: "Deep Inspiration Breath Hold (DIBH) Using ABC",
  category: "RADIOTHERAPY",
  image: dibhImage,
  imageAlt: "Deep inspiration breath hold radiotherapy",
  specialities: ["Radiation Oncology"],

  description:
    "A respiratory motion-management technique that can help increase separation between the heart and treatment area in selected breast radiotherapy cases.",

  detailIntro:
    "Deep Inspiration Breath Hold (DIBH) is a radiotherapy technique in which the patient takes a controlled deep breath and briefly holds it during radiation delivery. An Active Breathing Coordinator (ABC), where available, can help monitor and guide the breath-hold process.",

  sections: createSections({
    images: [
      dibhImage,
      adaptiveImage,
      versaImage,
      radixactImage,
      pathologyImage,
      roboticImage,
    ],
    alt: [
      "Deep inspiration breath hold",
      "Radiotherapy planning",
      "Radiation treatment equipment",
      "Image-guided radiation therapy",
      "Clinical consultation",
      "Patient recovery support",
    ],

    overview: {
      title: "What is Deep Inspiration Breath Hold Using ABC?",
      paragraphs: [
        "Deep Inspiration Breath Hold is a respiratory motion-management technique used during selected radiotherapy treatments. The patient takes a controlled deep breath and holds it for a short period while radiation is delivered.",
        "During deep inspiration, the chest expands and the position of the heart may move farther from the left breast or chest-wall treatment area in selected patients.",
        "The Active Breathing Coordinator is a device-based approach used in some workflows to monitor breathing and assist repeatable breath holds.",
      ],
      points: [
        "Controlled deep inspiration.",
        "Breath-hold monitoring.",
        "Respiratory motion management.",
        "Potential heart-sparing benefit in selected cases.",
      ],
    },

    need: {
      title: "Why is DIBH Using ABC Needed?",
      paragraphs: [
        "Breathing causes movement in the chest and nearby organs. During selected breast radiotherapy treatments, this movement can affect the position of the heart relative to the treatment area.",
        "DIBH may increase the separation between the heart and the treatment region in selected patients, helping the clinical team plan treatment while considering exposure to nearby organs.",
        "Not every patient can or needs to use this technique. The radiation oncology team assesses breathing ability and expected treatment benefit.",
      ],
      points: [
        "Selected left-sided breast radiotherapy.",
        "Management of respiratory movement.",
        "Assessment of heart and lung position.",
        "Individualised treatment planning.",
      ],
    },

    procedure: {
      title: "How is DIBH Using ABC Performed?",
      paragraphs: [
        "The patient receives instructions and practice in taking a deep breath and holding it consistently. During simulation, the team records the breathing pattern and determines a suitable breath-hold level.",
        "When using an Active Breathing Coordinator, the patient breathes through the connected breathing equipment while the system monitors airflow and lung volume.",
        "During treatment, the patient performs the instructed breath hold. The treatment team monitors the breathing level and coordinates radiation delivery according to the approved workflow.",
        "If the patient cannot maintain the breath hold, the team can pause and provide further instructions. The process is adapted to the patient's ability and clinical needs.",
      ],
      points: [
        "Breathing assessment and coaching.",
        "CT simulation in the planned position.",
        "Breath-hold level assessment.",
        "ABC device setup when used.",
        "Practice and verification.",
        "Radiation delivery during monitored breath holds.",
      ],
    },

    benefits: {
      title: "Benefits of DIBH Using ABC",
      paragraphs: [
        "DIBH may help move the heart farther from the treatment region during selected breast radiotherapy treatments. This can support planning that considers the dose to the heart and nearby organs.",
        "ABC can help monitor and guide repeatable breath holds in suitable patients. The potential benefit depends on anatomy, breathing ability and the treatment plan.",
      ],
      points: [
        "Potential reduction in heart exposure in selected cases.",
        "Respiratory motion management.",
        "Repeatable breath-hold guidance.",
        "Image-based treatment-position assessment.",
        "Individualised radiation planning.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before DIBH Treatment",
      paragraphs: [
        "Patients are usually taught the breathing technique before treatment begins. Practising the instructed breathing pattern can help patients become familiar with the procedure.",
        "Patients should inform the team if they have difficulty holding their breath, breathing conditions or anxiety related to the equipment.",
      ],
      points: [
        "Attend breathing-coaching appointments.",
        "Practise only the breathing technique taught by the team.",
        "Tell the team about breathing difficulties.",
        "Wear comfortable clothing.",
        "Follow the positioning instructions.",
        "Ask the team to explain the ABC equipment before treatment.",
      ],
    },

    recovery: {
      title: "Recovery Tips and Follow-Up Care",
      paragraphs: [
        "DIBH is a treatment-delivery technique and does not have a separate recovery process from the radiotherapy course itself.",
        "Patients should follow the radiation oncology team's instructions and report discomfort, unusual breathlessness or other new symptoms.",
      ],
      points: [
        "Follow the prescribed radiotherapy schedule.",
        "Rest when needed.",
        "Maintain hydration and nutrition.",
        "Follow skin-care instructions for the treated area.",
        "Report breathing difficulties or unusual symptoms.",
        "Attend follow-up appointments.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "DIBH using ABC is a respiratory motion-management approach that may help the radiation team deliver selected treatments while considering the position of nearby organs.",
        "The technique requires patient coaching, reproducible breathing and clinical monitoring. The radiation oncology team decides whether it is suitable.",
      ],
      points: [
        "Controlled breathing during treatment.",
        "Respiratory motion management.",
        "Potential heart-sparing benefit in selected cases.",
        "Specialist assessment and monitoring.",
      ],
    },
  }),

  faqs: [
    {
      question: "What does DIBH mean?",
      answer:
        "DIBH stands for Deep Inspiration Breath Hold. It involves taking a controlled deep breath and holding it briefly while radiation is delivered.",
    },
    {
      question: "What is the Active Breathing Coordinator?",
      answer:
        "ABC is a device-based breathing management system that monitors breathing and helps guide a controlled breath hold during selected radiotherapy workflows.",
    },
    {
      question: "Why is DIBH used for left-sided breast cancer?",
      answer:
        "Deep inspiration can increase the distance between the heart and the left breast or chest-wall treatment area in selected patients. This may help the team plan treatment while considering heart exposure.",
    },
    {
      question: "Do I need to hold my breath for a long time?",
      answer:
        "The breath-hold duration and number of repetitions depend on your ability and treatment plan. The team provides practice and guidance before treatment.",
    },
    {
      question: "What if I cannot hold my breath?",
      answer:
        "Tell your radiation therapy team. They can assess your ability and discuss other validated treatment-position or motion-management approaches.",
    },
    {
      question: "Can every breast cancer patient use DIBH?",
      answer:
        "No. The technique is considered based on the patient's anatomy, breathing ability and expected treatment benefit.",
    },
  ],

  links: [
    {
      label: "Radiotherapy UK – DIBH",
      url: "https://radiotherapy.org.uk/patients-families/before-treatment/deep-inspiration-breath-hold/",
    },
    {
      label: "Elekta – Active Breathing Coordinator",
      url: "https://www.elekta.com/focus/active-breathing-coordinator-streamlines-treatment-for-several-indications-at-indian-clinic/",
    },
  ],
};

// -----------------------------------------------------
// 5. VERSA HD
// -----------------------------------------------------

const versaHD = {
  slug: "versa-hd",
  title: "VERSA HD",
  category: "RADIOTHERAPY",
  image: versaImage,
  imageAlt: "VERSA HD linear accelerator",
  specialities: ["Radiation Oncology"],

  description:
    "A linear accelerator platform designed to support advanced external-beam radiation techniques, depending on its installed configuration and clinical planning systems.",

  detailIntro:
    "VERSA HD is a radiotherapy linear accelerator platform. Depending on its configuration, software, accessories and clinical protocols, it may support techniques such as IMRT, VMAT, image-guided treatment and selected stereotactic approaches.",

  sections: createSections({
    images: [
      versaImage,
      adaptiveImage,
      radixactImage,
      molecularImage,
      pathologyImage,
      roboticImage,
    ],
    alt: [
      "VERSA HD linear accelerator",
      "Radiotherapy planning",
      "Image-guided radiation therapy",
      "Cancer treatment technology",
      "Medical consultation",
      "Patient recovery support",
    ],

    overview: {
      title: "What is VERSA HD?",
      paragraphs: [
        "VERSA HD is a linear accelerator platform used to deliver external-beam radiation therapy. Radiation is directed from a machine outside the body towards a planned treatment area.",
        "Depending on the installed configuration and clinical planning systems, it may support techniques such as intensity-modulated radiation therapy (IMRT), volumetric modulated arc therapy (VMAT), image-guided radiation therapy (IGRT) and selected stereotactic treatments.",
      ],
      points: [
        "External-beam radiation therapy.",
        "IMRT and VMAT where configured.",
        "Image-guided treatment workflows.",
        "Selected stereotactic techniques where commissioned.",
      ],
    },

    need: {
      title: "Why is VERSA HD Used?",
      paragraphs: [
        "Radiotherapy is used to treat selected cancers by directing radiation towards a planned target. The treatment technique is chosen according to the cancer type, stage, location and treatment objective.",
        "A linear accelerator platform such as VERSA HD may support different radiation delivery techniques. The radiation oncologist determines the most appropriate approach for each patient.",
      ],
      points: [
        "Selected cancers requiring external-beam radiotherapy.",
        "Treatment plans requiring modulated radiation delivery.",
        "Cases requiring image-guided positioning.",
        "Selected stereotactic treatment plans where available.",
      ],
    },

    procedure: {
      title: "How is VERSA HD Treatment Performed?",
      paragraphs: [
        "The process usually begins with consultation and CT simulation. The team identifies the treatment area and nearby organs before preparing an individualised radiation plan.",
        "During treatment, the patient lies on the treatment couch. The linear accelerator delivers radiation according to the approved plan, and imaging may be used to verify positioning.",
        "The number of sessions and duration depend on the cancer type, prescribed dose, technique and treatment objective.",
      ],
      points: [
        "Consultation and clinical assessment.",
        "CT simulation.",
        "Target and organ contouring.",
        "Radiation dose planning.",
        "Quality assurance.",
        "Patient positioning and image verification.",
        "Radiation delivery.",
      ],
    },

    benefits: {
      title: "Benefits of VERSA HD",
      paragraphs: [
        "VERSA HD can support a range of external-beam radiotherapy workflows depending on the installed configuration and commissioned techniques.",
        "Image guidance and treatment planning help the clinical team position the patient and deliver the prescribed radiation plan. The expected benefits depend on the individual treatment.",
      ],
      points: [
        "Support for selected advanced radiotherapy techniques.",
        "Image-guided positioning workflows.",
        "Individualised treatment planning.",
        "Potential for highly conformal dose delivery with appropriate techniques.",
        "Selected stereotactic treatment capability where available.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before VERSA HD Treatment",
      paragraphs: [
        "Preparation may include CT simulation, positioning practice and instructions related to the treatment area. Some patients may receive specific bladder or bowel preparation instructions.",
        "Patients should discuss medicines, existing health conditions and any difficulty maintaining the treatment position with their care team.",
      ],
      points: [
        "Attend simulation and planning appointments.",
        "Follow bladder or bowel preparation instructions if given.",
        "Wear comfortable clothing.",
        "Inform the team about new symptoms.",
        "Follow positioning instructions.",
        "Ask questions about the treatment schedule.",
      ],
    },

    recovery: {
      title: "Recovery Tips and Follow-Up Care",
      paragraphs: [
        "Side effects depend on the body area treated and the radiation plan. Some patients may experience fatigue, skin changes or other site-specific effects.",
        "The treating team provides advice on managing side effects and arranging follow-up reviews.",
      ],
      points: [
        "Rest when needed.",
        "Maintain hydration and balanced nutrition.",
        "Follow skin-care advice.",
        "Report persistent or worsening symptoms.",
        "Attend follow-up appointments.",
        "Take prescribed medicines as instructed.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "VERSA HD is a linear accelerator platform that can support different external-beam radiation therapy techniques according to its installed configuration and clinical protocols.",
        "The radiation oncology team selects the appropriate technique based on the patient's diagnosis, treatment objective and individual clinical requirements.",
      ],
      points: [
        "External-beam radiation treatment.",
        "Support for selected advanced techniques.",
        "Image-guided treatment workflows.",
        "Individualised specialist planning.",
      ],
    },
  }),

  faqs: [
    {
      question: "What is VERSA HD used for?",
      answer:
        "VERSA HD is a linear accelerator platform used for external-beam radiation therapy. The available techniques depend on the system configuration and clinical protocols.",
    },
    {
      question: "What is the difference between IMRT and VMAT?",
      answer:
        "Both are modulated radiation therapy techniques. IMRT adjusts radiation intensity across treatment fields, while VMAT delivers modulated radiation as the machine rotates around the patient.",
    },
    {
      question: "Is VERSA HD treatment painful?",
      answer:
        "External-beam radiation delivery itself is generally painless. Patients need to remain in the planned position while the machine delivers treatment.",
    },
    {
      question: "How many sessions are required?",
      answer:
        "The number of sessions depends on the cancer type, treatment objective, prescribed dose and technique. Your radiation oncologist will explain your schedule.",
    },
    {
      question: "Can VERSA HD be used for stereotactic treatment?",
      answer:
        "Selected stereotactic techniques may be supported when the system is appropriately configured, commissioned and used by a trained clinical team.",
    },
    {
      question: "What side effects can occur?",
      answer:
        "Side effects depend on the treatment area and dose. Fatigue, skin changes and other site-specific effects may occur. Your team will explain the risks for your treatment plan.",
    },
  ],

  links: [
    {
      label: "Elekta – VERSA HD",
      url: "https://www.elekta.com/products/radiation-therapy/versa-hd/",
    },
  ],
};

// -----------------------------------------------------
// 6. MOLECULAR ONCOLOGY
// -----------------------------------------------------

const molecularOncology = {
  slug: "molecular-oncology",
  title: "Molecular Oncology",
  category: "MOLECULAR & GENOMIC TECHNOLOGY",
  image: molecularImage,
  imageAlt: "Genomic profiling and molecular oncology",
  specialities: [
    "Medical Oncology",
    "Pathology & Molecular Diagnostics",
    "Precision Oncology",
  ],

  description:
    "Molecular oncology studies the genetic and biological features of a tumour to help refine diagnosis and identify clinically relevant treatment options in selected cancers.",

  detailIntro:
    "Molecular oncology examines changes in tumour DNA, RNA, proteins and other biomarkers. These findings can add information to pathology diagnosis and may help the oncology team consider targeted treatments or other management options.",

  sections: createSections({
    images: [
      molecularImage,
      pathologyImage,
      roboticImage,
      radixactImage,
      adaptiveImage,
      versaImage,
    ],
    alt: [
      "Genomic profiling",
      "Oncology pathology laboratory",
      "Multidisciplinary cancer care",
      "Cancer diagnosis",
      "Medical analysis",
      "Cancer treatment planning",
    ],

    overview: {
      title: "What is Molecular Oncology?",
      paragraphs: [
        "Molecular oncology studies the molecular and genetic characteristics of cancer cells. It examines biomarkers such as changes in DNA, RNA and proteins that may provide additional information about a tumour.",
        "Cancers arising in the same organ can have different molecular features. Biomarker testing may help refine diagnosis, provide additional information about prognosis or guide treatment decisions in selected cases.",
      ],
      points: [
        "Tumour biomarker assessment.",
        "DNA and RNA analysis.",
        "Protein expression assessment.",
        "Molecular profiling where clinically indicated.",
      ],
    },

    need: {
      title: "Why is Molecular Oncology Needed?",
      paragraphs: [
        "Traditional cancer classification considers the organ where the cancer began and its microscopic appearance. Molecular testing can provide additional information about the biological features of selected tumours.",
        "Some targeted medicines and immunotherapies are considered based on specific biomarkers. Molecular testing may help the oncology team determine whether a treatment option is relevant.",
        "Not every patient requires molecular testing. The decision depends on the cancer type, stage, available tissue and clinical question.",
      ],
      points: [
        "Additional tumour characterisation.",
        "Selected treatment-selection decisions.",
        "Assessment of clinically relevant biomarkers.",
        "Support for precision oncology.",
        "Potential identification of clinical-trial options.",
      ],
    },

    procedure: {
      title: "How is Molecular Testing Performed?",
      paragraphs: [
        "The process usually begins with a consultation in which the doctor identifies the clinical question and determines whether a biomarker test is appropriate.",
        "A sample may be obtained from a previous biopsy, surgical specimen or, in selected cases, a blood sample for liquid biopsy.",
        "The sample is sent to a laboratory for the selected tests. Methods may include immunohistochemistry, single-gene testing or multigene sequencing panels.",
        "The laboratory prepares a report. The oncology and pathology teams interpret the results alongside the diagnosis, stage and other clinical findings.",
      ],
      points: [
        "Clinical assessment and test selection.",
        "Biopsy tissue or another suitable sample.",
        "Laboratory biomarker analysis.",
        "Pathology and molecular report.",
        "Specialist interpretation.",
        "Discussion of treatment options.",
      ],
    },

    benefits: {
      title: "Benefits of Molecular Oncology",
      paragraphs: [
        "Biomarker testing can provide information that may help guide treatment decisions for selected cancers. It may identify biomarkers associated with targeted therapies or help determine whether certain treatments are less likely to be useful.",
        "The findings are interpreted with other clinical information. A biomarker result does not guarantee that a matching treatment will be suitable or effective.",
      ],
      points: [
        "Additional information about tumour biology.",
        "Support for selected targeted-treatment decisions.",
        "Potential guidance for immunotherapy selection.",
        "Support for precision-oncology discussions.",
        "Potential identification of relevant clinical trials.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before Molecular Testing",
      paragraphs: [
        "Preparation depends on the type of test and sample required. Some tests can use tissue already collected during a biopsy or surgery. Others may require a new tissue sample or blood draw.",
        "Patients should discuss the reason for testing, possible costs, sample requirements and expected reporting time with their healthcare team.",
      ],
      points: [
        "Discuss the purpose of the test with the doctor.",
        "Share previous biopsy and pathology reports.",
        "Provide details of previous cancer treatments.",
        "Ask whether a new biopsy or blood sample is required.",
        "Discuss test costs and availability.",
        "Ask when the report is expected.",
      ],
    },

    recovery: {
      title: "After Testing and Follow-Up Care",
      paragraphs: [
        "Molecular testing itself does not usually require recovery when an existing tissue sample or routine blood sample is used. If a new biopsy is required, recovery depends on the biopsy procedure.",
        "Once the report is available, the treating team explains the findings and whether they have any relevance to the patient's treatment options.",
      ],
      points: [
        "Attend the report-review appointment.",
        "Ask the doctor to explain unfamiliar terms.",
        "Discuss the meaning and limitations of results.",
        "Ask whether additional testing is required.",
        "Discuss relevant treatment options.",
        "Keep copies of pathology and molecular reports.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "Molecular oncology adds information about the biological features of selected cancers. Biomarker testing can support diagnosis and treatment discussions when clinically indicated.",
        "The treating oncology team interprets the results with other clinical findings and determines whether they should influence the patient's care.",
      ],
      points: [
        "Tumour biomarker assessment.",
        "Molecular and genomic analysis.",
        "Support for selected precision-oncology decisions.",
        "Specialist interpretation of results.",
      ],
    },
  }),

  faqs: [
    {
      question: "What is molecular oncology?",
      answer:
        "Molecular oncology studies genetic and biological changes in cancer cells. It can provide additional information about tumour characteristics and selected treatment options.",
    },
    {
      question: "What is biomarker testing?",
      answer:
        "Biomarker testing examines genes, proteins or other substances in a tumour that may provide information about diagnosis or treatment selection.",
    },
    {
      question: "How is a molecular test performed?",
      answer:
        "Testing may use tissue from a biopsy or surgery. Some selected tests use blood samples. The laboratory performs the appropriate analysis and prepares a report for the treating team.",
    },
    {
      question: "Does every cancer patient need molecular testing?",
      answer:
        "No. The need for testing depends on the cancer type, stage, clinical question, available tissue and current treatment guidance.",
    },
    {
      question: "How long does it take to receive molecular test results?",
      answer:
        "Reporting time varies according to the test, laboratory and sample requirements. Ask the laboratory or treating doctor for the expected reporting time.",
    },
    {
      question: "Can molecular testing identify targeted treatments?",
      answer:
        "Some tests identify biomarkers associated with specific treatments. However, a matching biomarker does not guarantee that a treatment will be suitable or effective.",
    },
    {
      question: "What happens if no actionable biomarker is found?",
      answer:
        "The oncology team will interpret the report alongside the patient's diagnosis and discuss other standard treatment options. A result without an actionable biomarker does not mean that treatment is unavailable.",
    },
  ],

  links: [
    {
      label: "NCI – Biomarker Testing for Cancer Treatment",
      url: "https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment",
    },
    {
      label: "NCI – Tumour Marker Tests",
      url: "https://www.cancer.gov/about-cancer/diagnosis-staging/diagnosis/tumor-markers-list",
    },
  ],
};

// -----------------------------------------------------
// 7. ROBOTIC-ASSISTED SURGERY
// -----------------------------------------------------

const roboticSurgery = {
  slug: "robotic-surgery",
  title: "Robotic-Assisted Surgery",
  category: "SURGICAL TECHNOLOGY",
  image: roboticImage,
  imageAlt: "Robotic-assisted surgical oncology",
  specialities: [
    "Surgical Oncology",
    "Urologic Oncology",
    "Gynaecological Oncology",
    "Colorectal Surgery",
    "Thoracic Surgery",
  ],

  description:
    "Robotic-assisted surgical platforms provide the surgeon with a magnified view and specialised instrument control for selected minimally invasive procedures.",

  detailIntro:
    "In robotic-assisted surgery, the surgeon controls specialised instruments from a console. The system translates the surgeon's hand movements into instrument movements inside the patient. The robot does not independently perform the operation.",

  sections: createSections({
    images: [
      roboticImage,
      pathologyImage,
      versaImage,
      molecularImage,
      hipecImage,
      breastInitiativeImage,
    ],
    alt: [
      "Robotic-assisted cancer surgery",
      "Surgical assessment",
      "Operating room technology",
      "Multidisciplinary cancer care",
      "Cancer treatment planning",
      "Patient recovery support",
    ],

    overview: {
      title: "What is Robotic-Assisted Surgery?",
      paragraphs: [
        "Robotic-assisted surgery is a minimally invasive surgical approach in which the surgeon controls specialised instruments using a robotic platform.",
        "The surgeon views the operating area through a visual system and controls the instruments from a console. The robot does not make independent surgical decisions or perform the operation by itself.",
        "The approach may be considered for selected cancer procedures depending on the tumour, anatomy and surgeon's experience.",
      ],
      points: [
        "Surgeon-controlled robotic instruments.",
        "Magnified visualisation on compatible systems.",
        "Specialised instrument movement.",
        "Minimally invasive access for selected procedures.",
      ],
    },

    need: {
      title: "Why is Robotic-Assisted Surgery Used?",
      paragraphs: [
        "Some operations can be performed using minimally invasive techniques. Robotic-assisted platforms may provide the surgeon with instrument control and visualisation features that can be useful in selected procedures.",
        "The choice between robotic-assisted, conventional laparoscopic and open surgery depends on the cancer, patient's health, anatomy and surgeon's expertise.",
      ],
      points: [
        "Selected urologic cancer procedures.",
        "Selected gynaecological cancer procedures.",
        "Selected colorectal procedures.",
        "Selected thoracic procedures.",
        "Other operations based on specialist assessment.",
      ],
    },

    procedure: {
      title: "How is Robotic-Assisted Surgery Performed?",
      paragraphs: [
        "Before surgery, the patient undergoes specialist assessment, imaging and pre-anaesthesia evaluation. The surgical team explains the planned procedure and available alternatives.",
        "During surgery, the patient receives anaesthesia. The surgical team positions the robotic system and places instruments through small incisions when a minimally invasive approach is planned.",
        "The surgeon controls the camera and instruments from the console. The operating-room team assists throughout the procedure and remains responsible for patient safety.",
        "The duration and hospital stay depend on the operation, patient's health and whether additional procedures are required.",
      ],
      points: [
        "Pre-operative consultation and assessment.",
        "Anaesthesia and surgical preparation.",
        "Positioning of the robotic system.",
        "Placement of instruments through incisions.",
        "Surgeon-controlled operation.",
        "Post-operative observation and recovery.",
      ],
    },

    benefits: {
      title: "Benefits of Robotic-Assisted Surgery",
      paragraphs: [
        "For selected procedures, robotic-assisted surgery may offer the benefits associated with minimally invasive access. Depending on the operation, this may include smaller incisions and a different recovery profile compared with open surgery.",
        "Outcomes vary according to the procedure, disease characteristics, patient health and surgeon experience. Robotic surgery is not automatically better for every patient.",
      ],
      points: [
        "Minimally invasive access for selected operations.",
        "Magnified visualisation on compatible systems.",
        "Specialised instrument movement.",
        "Potential for smaller incisions in suitable procedures.",
        "Recovery benefits may be possible in selected cases.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before Robotic Surgery",
      paragraphs: [
        "Patients undergo pre-operative assessment to review medical history, medicines, allergies and fitness for anaesthesia.",
        "The surgical team may provide instructions about fasting, medicines, bowel preparation or other steps depending on the operation.",
      ],
      points: [
        "Attend surgical and anaesthesia consultations.",
        "Share current medicines and allergies.",
        "Follow fasting instructions.",
        "Complete requested tests and imaging.",
        "Follow bowel preparation instructions if given.",
        "Arrange support and transport after discharge.",
        "Ask about expected hospital stay and recovery.",
      ],
    },

    recovery: {
      title: "Recovery Tips After Robotic-Assisted Surgery",
      paragraphs: [
        "Recovery depends on the operation, extent of surgery and individual health. Patients may need pain management, wound care, gradual activity and follow-up appointments.",
        "The surgical team explains when to resume daily activities, work, exercise and other routines. Patients should seek medical advice if they develop fever, worsening pain, wound problems or other concerning symptoms.",
      ],
      points: [
        "Follow wound-care instructions.",
        "Take prescribed medicines as directed.",
        "Resume activity gradually as advised.",
        "Follow nutrition and hydration guidance.",
        "Attend post-operative reviews.",
        "Report fever, wound discharge or worsening pain.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "Robotic-assisted surgery is a surgeon-controlled approach that may be suitable for selected cancer operations. It combines specialised instruments and visualisation technology to support minimally invasive procedures.",
        "The surgical team determines whether this approach is appropriate after considering the patient's condition, cancer characteristics and available alternatives.",
      ],
      points: [
        "Surgeon-controlled technology.",
        "Selected minimally invasive procedures.",
        "Individualised surgical planning.",
        "Specialist-led recovery and follow-up.",
      ],
    },
  }),

  faqs: [
    {
      question: "Does a robot perform the surgery independently?",
      answer:
        "No. The surgeon performs the operation and controls the robotic instruments. The robotic platform does not independently make decisions or operate on the patient.",
    },
    {
      question: "Is robotic-assisted surgery suitable for every cancer patient?",
      answer:
        "No. Suitability depends on the cancer type, stage, location, patient's health, surgical goals and the surgeon's experience.",
    },
    {
      question: "Is robotic surgery minimally invasive?",
      answer:
        "Many robotic-assisted procedures use small incisions, but the surgical approach depends on the operation. Some patients may still require open surgery.",
    },
    {
      question: "How long does robotic surgery take?",
      answer:
        "The duration varies depending on the procedure, complexity and individual patient factors. The surgeon can provide an estimate for the planned operation.",
    },
    {
      question: "What are the possible benefits?",
      answer:
        "In selected procedures, benefits may include minimally invasive access, smaller incisions and a different recovery profile. Outcomes depend on the operation and surgeon experience.",
    },
    {
      question: "How long is the recovery period?",
      answer:
        "Recovery varies according to the operation, patient's health and whether complications occur. The surgical team provides an individual recovery plan.",
    },
    {
      question: "What are the possible risks?",
      answer:
        "Risks include those associated with surgery and anaesthesia, such as bleeding, infection, injury to nearby structures and blood clots. The surgeon explains procedure-specific risks before treatment.",
    },
  ],

  links: [
    {
      label: "Intuitive – da Vinci Surgery for Patients",
      url: "https://www.intuitive.com/en-us/patients/da-vinci-robotic-surgery",
    },
    {
      label: "Intuitive – How da Vinci Surgery Works",
      url: "https://www.intuitive.com/en-us/patients/da-vinci-robotic-surgery/about-the-systems",
    },
  ],
};

// -----------------------------------------------------
// 8. HIPEC & PIPAC
// -----------------------------------------------------

const hipecPipac = {
  slug: "hipec-pipac",
  title: "HIPEC & PIPAC",
  category: "SPECIALISED CANCER PROCEDURES",
  image: hipecImage,
  imageAlt: "Specialised abdominal cancer treatment",
  specialities: [
    "Surgical Oncology",
    "Medical Oncology",
    "Gynaecological Oncology",
  ],

  description:
    "HIPEC and PIPAC are different methods of delivering chemotherapy into the abdominal cavity for carefully selected patients with cancers involving the peritoneum.",

  detailIntro:
    "Some cancers can spread to the peritoneum, the lining of the abdominal cavity. HIPEC and PIPAC are specialised approaches that deliver chemotherapy directly into the abdomen, but they differ in how they are performed and in the clinical situations in which they may be considered.",

  sections: createSections({
    images: [
      hipecImage,
      pathologyImage,
      roboticImage,
      molecularImage,
      versaImage,
      breastInitiativeImage,
    ],
    alt: [
      "HIPEC and PIPAC cancer procedures",
      "Cancer pathology assessment",
      "Surgical oncology",
      "Multidisciplinary cancer care",
      "Cancer treatment planning",
      "Patient recovery support",
    ],

    overview: {
      title: "What are HIPEC and PIPAC?",
      paragraphs: [
        "HIPEC stands for Hyperthermic Intraperitoneal Chemotherapy. It is generally performed during an operation after the surgical team has removed visible tumour deposits when cytoreductive surgery is appropriate.",
        "PIPAC stands for Pressurised Intraperitoneal Aerosol Chemotherapy. It is delivered laparoscopically using a specialised system that converts chemotherapy into a pressurised aerosol.",
        "Both approaches are designed for selected cancers involving the peritoneum, but they are different procedures and are not interchangeable.",
      ],
      points: [
        "HIPEC: heated liquid chemotherapy delivered into the abdomen.",
        "PIPAC: pressurised aerosol chemotherapy delivered laparoscopically.",
        "Both require specialist equipment and trained teams.",
        "Patient selection is essential.",
      ],
    },

    need: {
      title: "Why are HIPEC and PIPAC Used?",
      paragraphs: [
        "Some cancers spread to the peritoneum, which lines the abdominal cavity. Treatment planning can be complex because disease may involve several areas within the abdomen.",
        "HIPEC may be considered for selected patients in combination with cytoreductive surgery. PIPAC may be considered in selected clinical settings and protocols.",
        "The specialist team evaluates tumour type, disease extent, previous treatment, fitness for surgery and available evidence before recommending either approach.",
      ],
      points: [
        "Selected peritoneal surface malignancies.",
        "Selected abdominal cancers that have spread to the peritoneum.",
        "Assessment for cytoreductive surgery and HIPEC.",
        "PIPAC in selected protocols or clinical settings.",
      ],
    },

    procedure: {
      title: "How are HIPEC and PIPAC Performed?",
      paragraphs: [
        "For HIPEC, the patient undergoes an operation under general anaesthesia. When appropriate, the surgeon removes visible tumour deposits as part of cytoreductive surgery. A heated chemotherapy solution is then circulated within the abdominal cavity for a planned period.",
        "For PIPAC, the patient undergoes a laparoscopic procedure under anaesthesia. A specialised device delivers chemotherapy into the abdominal cavity as a pressurised aerosol.",
        "The procedures differ in their purpose, method and clinical evidence. The treating team explains which approach, if any, is appropriate for the patient.",
      ],
      points: [
        "Specialist multidisciplinary assessment.",
        "Pre-operative investigations and anaesthesia review.",
        "HIPEC: cytoreductive surgery when indicated.",
        "HIPEC: circulation of heated chemotherapy.",
        "PIPAC: laparoscopic access.",
        "PIPAC: delivery of pressurised aerosol chemotherapy.",
        "Post-procedure observation.",
      ],
    },

    benefits: {
      title: "Potential Benefits of HIPEC and PIPAC",
      paragraphs: [
        "These procedures are designed to deliver chemotherapy directly into the abdominal cavity in selected clinical situations.",
        "HIPEC may be considered alongside surgery that removes visible tumour deposits. PIPAC may be considered in selected treatment protocols. The evidence and expected benefit vary by cancer type and patient selection.",
      ],
      points: [
        "Localised chemotherapy delivery within the abdominal cavity.",
        "HIPEC may be combined with cytoreductive surgery.",
        "PIPAC offers a laparoscopic aerosol delivery approach.",
        "Specialist selection based on disease characteristics.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before HIPEC or PIPAC",
      paragraphs: [
        "Preparation involves detailed evaluation by the surgical and oncology team. Patients may need imaging, blood tests, anaesthesia assessment and review of previous treatments.",
        "The team provides specific instructions about fasting, medicines, nutrition and other preparation steps. Requirements differ between HIPEC and PIPAC.",
      ],
      points: [
        "Attend surgical and oncology consultations.",
        "Share previous treatment and surgery records.",
        "Discuss current medicines and allergies.",
        "Complete requested imaging and blood tests.",
        "Follow fasting instructions.",
        "Discuss nutrition and fitness before the procedure.",
        "Arrange support for the recovery period.",
      ],
    },

    recovery: {
      title: "Recovery Tips After HIPEC and PIPAC",
      paragraphs: [
        "Recovery after HIPEC can involve a longer hospital stay because it is generally associated with major abdominal surgery. The recovery period depends on the extent of surgery and whether complications occur.",
        "Recovery after PIPAC depends on the laparoscopic procedure and the patient's overall condition. The treating team provides instructions about activity, wound care, diet and follow-up.",
        "Patients should seek medical attention for fever, worsening abdominal pain, wound problems, persistent vomiting or other concerning symptoms.",
      ],
      points: [
        "Follow the discharge instructions.",
        "Take prescribed medicines as directed.",
        "Follow the recommended diet and hydration plan.",
        "Gradually increase activity as advised.",
        "Keep surgical wounds clean and follow wound-care guidance.",
        "Attend scheduled follow-up appointments.",
        "Report fever, worsening pain or persistent vomiting.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "HIPEC and PIPAC are specialised approaches to delivering chemotherapy within the abdominal cavity. They differ in procedure and clinical application.",
        "Neither approach is suitable for every patient. A specialist multidisciplinary team determines whether either treatment is appropriate after reviewing the cancer type, disease extent and overall health.",
      ],
      points: [
        "Different methods of intraperitoneal chemotherapy.",
        "Specialist-led patient selection.",
        "Individualised procedure and recovery planning.",
        "Multidisciplinary follow-up.",
      ],
    },
  }),

  faqs: [
    {
      question: "What does HIPEC stand for?",
      answer:
        "HIPEC stands for Hyperthermic Intraperitoneal Chemotherapy. It involves circulating a heated chemotherapy solution within the abdominal cavity during a planned surgical procedure.",
    },
    {
      question: "What does PIPAC stand for?",
      answer:
        "PIPAC stands for Pressurised Intraperitoneal Aerosol Chemotherapy. It is delivered laparoscopically using a specialised system that creates a pressurised chemotherapy aerosol.",
    },
    {
      question: "What is the difference between HIPEC and PIPAC?",
      answer:
        "HIPEC generally uses heated liquid chemotherapy during or after cytoreductive surgery. PIPAC uses pressurised aerosol chemotherapy delivered laparoscopically. They are different procedures with different clinical applications.",
    },
    {
      question: "Is HIPEC suitable for every abdominal cancer?",
      answer:
        "No. Suitability depends on the cancer type, disease extent, the possibility of removing visible tumour deposits, the patient's fitness and the specialist team's assessment.",
    },
    {
      question: "How long is the hospital stay after HIPEC?",
      answer:
        "HIPEC is generally associated with major abdominal surgery, so hospital stay can be longer than after a minor procedure. The duration depends on the operation, recovery and any complications.",
    },
    {
      question: "Is PIPAC a replacement for standard chemotherapy?",
      answer:
        "PIPAC is not a universal replacement for standard systemic chemotherapy. Its role depends on the disease, treatment protocol and available evidence. The oncology team explains available options.",
    },
    {
      question: "What are the possible risks?",
      answer:
        "Risks depend on the procedure and may include surgical complications, infection, bleeding, bowel-related problems and chemotherapy-related side effects. The specialist team explains individual risks before treatment.",
    },
  ],

  links: [
    {
      label: "NCI – HIPEC",
      url: "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hipec",
    },
    {
      label: "UCLH – HIPEC Patient Information",
      url: "https://www.uclh.nhs.uk/patients-and-visitors/patient-information-pages/hyperthermic-intraperitoneal-chemotherapy",
    },
    {
      label: "Mayo Clinic – PIPAC",
      url: "https://www.mayoclinic.org/tests-procedures/chemotherapy/in-depth/pressurized-intraperitoneal-aerosol-chemotherapy/art-20584939",
    },
  ],
};

// -----------------------------------------------------
// 9. BREAST HEALTH INITIATIVE
// -----------------------------------------------------

const breastHealthInitiative = {
  slug: "breast-health-initiative",
  title: "Breast Health Initiative",
  category: "BREAST HEALTH & AWARENESS",
  image: breastInitiativeImage,
  imageAlt: "Breast health awareness initiative",
  specialities: [
    "Preventive Oncology",
    "Onco-Radiology",
    "Breast Cancer Care",
  ],

  description:
    "A breast health awareness initiative that helps people understand breast changes, screening options, risk assessment and when to seek medical advice.",

  detailIntro:
    "Breast Health Initiative content is designed to encourage awareness, timely assessment and informed conversations about breast health. Campaign activities should reflect the programmes and services actually conducted by RENOVA.",

  sections: createSections({
    images: [
      breastInitiativeImage,
      mammographyImage,
      pathologyImage,
      molecularImage,
      roboticImage,
      hipecImage,
    ],
    alt: [
      "Breast health awareness campaign",
      "Digital breast tomosynthesis",
      "Breast cancer diagnostic assessment",
      "Breast cancer care",
      "Specialist breast cancer team",
      "Patient support",
    ],

    overview: {
      title: "What is the Breast Health Initiative?",
      paragraphs: [
        "A Breast Health Initiative is an awareness and education programme designed to help people understand breast health, recognise changes and learn about screening and clinical assessment.",
        "Awareness activities may include educational sessions, information about possible warning signs, risk-assessment discussions and guidance on how to access breast care services.",
        "Campaign activities and services should be described according to the programmes RENOVA actually conducts.",
      ],
      points: [
        "Breast health education.",
        "Awareness of possible breast changes.",
        "Screening and risk-assessment information.",
        "Guidance on seeking professional advice.",
      ],
    },

    need: {
      title: "Why is Breast Health Awareness Important?",
      paragraphs: [
        "Breast awareness can help people recognise changes such as a new lump, nipple changes, skin dimpling or unusual discharge. A change does not automatically mean cancer, but it should be assessed by a healthcare professional.",
        "Screening recommendations depend on age, personal risk, family history and local clinical guidance. People with symptoms need diagnostic assessment rather than relying on a routine screening appointment.",
      ],
      points: [
        "Understanding normal breast appearance and feel.",
        "Recognising changes that need medical assessment.",
        "Learning about risk factors and family history.",
        "Understanding screening and diagnostic options.",
        "Encouraging timely consultation.",
      ],
    },

    procedure: {
      title: "How Does a Breast Health Assessment Work?",
      paragraphs: [
        "The process begins with a discussion about symptoms, personal medical history and family history. A healthcare professional may perform a clinical breast examination when indicated.",
        "Depending on the patient's age, symptoms and risk, the clinician may recommend imaging such as mammography, 3D mammography or ultrasound.",
        "If an imaging finding needs further evaluation, additional imaging or a biopsy may be recommended. The next steps depend on the clinical findings.",
      ],
      points: [
        "Discussion of symptoms and medical history.",
        "Risk assessment where appropriate.",
        "Clinical examination when indicated.",
        "Mammography or other imaging when recommended.",
        "Further diagnostic assessment if needed.",
        "Follow-up and specialist consultation.",
      ],
    },

    benefits: {
      title: "Benefits of Breast Health Awareness",
      paragraphs: [
        "Awareness programmes can help people understand breast changes and learn when to seek professional assessment.",
        "Education about screening and diagnostic pathways can support informed conversations with healthcare professionals. Screening itself has potential benefits and limitations, which should be discussed with a clinician.",
      ],
      points: [
        "Improved understanding of breast health.",
        "Awareness of possible warning signs.",
        "Better understanding of screening options.",
        "Encouragement to seek timely assessment.",
        "Information about available breast care pathways.",
      ],
    },

    preparation: {
      title: "How to Prepare for a Breast Health Consultation",
      paragraphs: [
        "Patients can prepare by noting any breast changes, when they began and whether they have changed over time. Details of family history and previous breast imaging can also help the clinician.",
        "For mammography or other imaging, the imaging centre provides specific appointment instructions.",
      ],
      points: [
        "Note any new breast or nipple changes.",
        "Share relevant family history.",
        "Bring previous imaging and reports if available.",
        "List current medicines and relevant medical history.",
        "Ask questions about screening and diagnostic options.",
        "Follow the imaging centre's appointment instructions.",
      ],
    },

    recovery: {
      title: "Follow-Up and Ongoing Breast Health",
      paragraphs: [
        "A breast health awareness programme is not itself a medical treatment and does not have a recovery period. Follow-up depends on whether the patient has symptoms, screening findings or a diagnosis requiring further care.",
        "Patients should follow the advice of their healthcare professional and attend any recommended imaging, biopsy or specialist appointments.",
      ],
      points: [
        "Follow the recommended screening schedule.",
        "Attend further assessment when advised.",
        "Keep copies of imaging and pathology reports.",
        "Discuss any new breast changes promptly.",
        "Follow the specialist's recommendations.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "Breast health awareness encourages informed conversations, recognition of possible changes and timely access to professional assessment.",
        "Screening and diagnostic recommendations should be individualised according to age, symptoms, personal risk and clinical guidance.",
      ],
      points: [
        "Awareness and education.",
        "Recognition of possible breast changes.",
        "Informed screening discussions.",
        "Timely specialist assessment.",
      ],
    },
  }),

  faqs: [
    {
      question: "What is a Breast Health Initiative?",
      answer:
        "It is an awareness and education programme that helps people learn about breast health, possible changes, screening options and when to seek professional advice.",
    },
    {
      question: "What breast changes should be assessed by a doctor?",
      answer:
        "A new lump or thickening, nipple changes, unusual discharge, skin dimpling, changes in breast size or shape and persistent breast or armpit discomfort should be discussed with a healthcare professional.",
    },
    {
      question: "Does every breast lump mean cancer?",
      answer:
        "No. Many breast lumps are not cancerous. However, a new or changing lump should be assessed by a healthcare professional.",
    },
    {
      question: "When should I undergo breast screening?",
      answer:
        "Screening recommendations depend on age, personal risk, family history and local clinical guidance. Discuss the appropriate screening schedule with a healthcare professional.",
    },
    {
      question: "Is breast self-examination enough to screen for cancer?",
      answer:
        "No. Being aware of normal breast changes can help people recognise symptoms, but self-examination alone is not an adequate substitute for recommended screening or diagnostic assessment.",
    },
    {
      question: "What happens if a screening result is abnormal?",
      answer:
        "An abnormal result does not automatically mean cancer. The clinician may recommend additional imaging, clinical assessment or a biopsy to understand the finding.",
    },
    {
      question: "Can people with a family history of breast cancer get a risk assessment?",
      answer:
        "Yes. A healthcare professional can review family history and personal risk factors and discuss whether additional assessment or a different screening plan is appropriate.",
    },
  ],

  links: [
    {
      label: "NCI – Breast Cancer Screening",
      url: "https://www.cancer.gov/types/breast/screening",
    },
    {
      label: "Government of India – Breast Cancer Screening",
      url: "https://aam.mohfw.gov.in/download/document/47b077f6bfcded85af8bf2f319136186.pdf",
    },
  ],
};

// -----------------------------------------------------
// 10. 3D MAMMOGRAPHY
// Existing dedicated detail page is retained.
// -----------------------------------------------------

export const mammographyTechnology = {
  slug: "3d-mammography",
  title: "3D Mammography",
  category: "BREAST IMAGING",
  image: mammographyImage,
  imageAlt: "Digital breast tomosynthesis",
  specialities: ["Onco-Radiology", "Breast Cancer Care"],

  description:
    "Digital breast tomosynthesis captures multiple low-dose X-ray images from different angles and reconstructs them into thin image slices for radiologist review.",

  detailIntro:
    "3D Mammography, also called digital breast tomosynthesis, captures multiple X-ray images of the breast from different angles. These images are reconstructed into thin slices to help radiologists examine breast tissue.",

  path: "/services/screening-diagnostics/3d-mammography",

  sections: createSections({
    images: [
      mammographyImage,
      breastInitiativeImage,
      pathologyImage,
      molecularImage,
      adaptiveImage,
      roboticImage,
    ],
    alt: [
      "Digital breast tomosynthesis",
      "Breast health awareness",
      "Breast diagnostic imaging",
      "Breast cancer assessment",
      "Medical imaging",
      "Breast care support",
    ],

    overview: {
      title: "What is 3D Mammography?",
      paragraphs: [
        "3D Mammography, also called digital breast tomosynthesis (DBT), is an imaging technique that captures multiple low-dose X-ray images of the breast from different angles.",
        "The images are reconstructed into thin slices, allowing the radiologist to examine breast tissue layer by layer rather than relying only on a single two-dimensional image.",
        "It may be useful in evaluating breast tissue, including selected cases involving dense breasts. The appropriate imaging method depends on the patient's clinical needs.",
      ],
      points: [
        "Multiple low-dose X-ray images.",
        "Images captured from different angles.",
        "Reconstructed thin breast image slices.",
        "Radiologist interpretation.",
      ],
    },

    need: {
      title: "Why is 3D Mammography Needed?",
      paragraphs: [
        "Breast tissue can overlap on conventional two-dimensional mammography images. Tomosynthesis provides reconstructed slices that may help the radiologist assess certain findings.",
        "It may be recommended for screening or diagnostic assessment depending on the patient's age, symptoms, breast density, risk and local clinical guidance.",
      ],
      points: [
        "Assessment of breast tissue.",
        "Evaluation of selected imaging findings.",
        "Additional information in some dense-breast cases.",
        "Screening or diagnostic use when recommended.",
      ],
    },

    procedure: {
      title: "How is a 3D Mammogram Performed?",
      paragraphs: [
        "The patient stands in front of the mammography unit. A trained radiographer positions the breast on the imaging platform and applies compression to keep the breast still and obtain clear images.",
        "The X-ray tube moves through a limited arc and captures multiple images from different angles. These are reconstructed into thin slices for the radiologist to review.",
        "The examination is usually completed within a short appointment, although the total time depends on the number of views and whether additional images are required.",
      ],
      points: [
        "Patient positioning.",
        "Breast placement on the imaging platform.",
        "Brief breast compression.",
        "Multiple low-dose X-ray images.",
        "Image reconstruction.",
        "Radiologist review and reporting.",
      ],
    },

    benefits: {
      title: "Benefits of 3D Mammography",
      paragraphs: [
        "Digital breast tomosynthesis provides multiple reconstructed image slices that may help radiologists assess breast tissue and selected findings.",
        "It can provide additional imaging information in some circumstances, but it does not eliminate the possibility of false-positive or false-negative results. The radiologist interprets the findings alongside clinical information.",
      ],
      points: [
        "Multiple reconstructed breast image slices.",
        "Assessment of overlapping breast tissue.",
        "Additional information for radiologist review.",
        "Potential usefulness in selected dense-breast cases.",
        "Supports screening and diagnostic assessment when indicated.",
      ],
    },

    preparation: {
      title: "Preparation Tips Before 3D Mammography",
      paragraphs: [
        "Patients should follow the instructions provided by the imaging centre. It may be helpful to schedule the examination when the breasts are less tender, if applicable.",
        "Previous mammograms and relevant breast imaging reports should be shared with the radiology team when available.",
      ],
      points: [
        "Bring previous mammography reports if available.",
        "Inform the radiographer about pregnancy or possible pregnancy.",
        "Tell the team about breast symptoms or previous surgery.",
        "Avoid deodorant, powder or lotion around the breast and underarm area if instructed.",
        "Wear clothing that is easy to remove from the waist up.",
        "Follow the imaging centre's instructions.",
      ],
    },

    recovery: {
      title: "After 3D Mammography and Follow-Up",
      paragraphs: [
        "Most patients can return to their usual activities after mammography. Some temporary discomfort may occur because of breast compression.",
        "The radiologist reviews the images and prepares a report. If additional imaging or assessment is needed, the imaging centre or referring clinician explains the next steps.",
      ],
      points: [
        "Resume usual activities if comfortable.",
        "Ask when and how the report will be available.",
        "Attend additional imaging if recommended.",
        "Discuss results with the referring doctor.",
        "Keep copies of imaging reports.",
      ],
    },

    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "3D Mammography uses digital breast tomosynthesis to create reconstructed slices from multiple X-ray images. It provides additional information for radiologist review in selected screening and diagnostic situations.",
        "The most appropriate breast imaging test depends on the patient's symptoms, age, risk factors and clinical assessment.",
      ],
      points: [
        "Advanced breast imaging technique.",
        "Multiple reconstructed image slices.",
        "Radiologist-led interpretation.",
        "Individualised screening and diagnostic decisions.",
      ],
    },
  }),

  faqs: [
    {
      question: "What is the difference between 2D and 3D mammography?",
      answer:
        "2D mammography creates standard breast X-ray images. 3D mammography captures images from multiple angles and reconstructs them into thin slices for radiologist review.",
    },
    {
      question: "Is 3D mammography painful?",
      answer:
        "Breast compression may cause temporary discomfort. The radiographer positions the breast and adjusts the compression during the examination.",
    },
    {
      question: "How long does a 3D mammogram take?",
      answer:
        "The examination is generally completed within a short appointment. The exact duration depends on the number of views and whether additional images are needed.",
    },
    {
      question: "Is 3D mammography suitable for everyone?",
      answer:
        "Not every patient needs 3D mammography. The appropriate imaging test depends on age, symptoms, breast density, personal risk and the clinician's recommendation.",
    },
    {
      question: "Does 3D mammography use radiation?",
      answer:
        "Yes. It uses X-rays. The imaging equipment is designed for mammography, and the radiology team follows applicable imaging and radiation-safety procedures.",
    },
    {
      question: "What happens if the mammogram shows an abnormality?",
      answer:
        "An abnormal finding does not automatically mean cancer. The radiologist or treating doctor may recommend additional imaging or a biopsy to evaluate it further.",
    },
    {
      question: "Can I have a mammogram if I have breast symptoms?",
      answer:
        "Yes, diagnostic breast imaging may be recommended for people with symptoms. Contact a healthcare professional so the appropriate assessment can be arranged.",
    },
  ],

  links: [
    {
      label: "FDA – Mammography: What You Need to Know",
      url: "https://www.fda.gov/consumers/consumer-updates/mammography-what-you-need-know",
    },
    {
      label: "NCI – Breast Cancer Screening",
      url: "https://www.cancer.gov/types/breast/screening",
    },
  ],
};

// -----------------------------------------------------
// EXPORT ALL TECHNOLOGIES
// -----------------------------------------------------

export const technologyItems = [
  radixact,
  adaptiveRadiotherapy,
  brachytherapy,
  dibh,
  versaHD,
  molecularOncology,
  roboticSurgery,
  hipecPipac,
  breastHealthInitiative,
];

export const allTechnologyItems = [
  ...technologyItems,
  mammographyTechnology,
];

export { clinicalDisclaimer };




