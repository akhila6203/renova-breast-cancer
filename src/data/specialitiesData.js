import {
  Stethoscope,
  Scissors,
  Radiation,
  Droplets,
  Venus,
  Baby,
  Brain,
  ScanLine,
  Atom,
  Target,
  ShieldCheck,
  HandHeart,
} from "lucide-react";

export const specialities = [
  {
    slug: "medical-oncology",
    title: "Medical Oncology",
    Icon: Stethoscope,
    short: "Personalised cancer treatment using medicines and systemic therapies.",
    heading: "Personalised Medical Treatment for Cancer",
    description:
      "Medical oncology focuses on treating cancer with medicines such as chemotherapy, immunotherapy, targeted therapy and hormone therapy. Recommendations depend on the cancer type and stage, biomarker or molecular results, previous treatment and the patient's overall health.",
    careAreas: [
      "Chemotherapy",
      "Immunotherapy and immune checkpoint inhibitors",
      "Targeted therapy",
      "Hormone / endocrine therapy",
      "Monoclonal antibody therapy",
      "Antibody-drug conjugates where appropriate",
      "Bispecific antibodies for selected indications",
      "Precision oncology and biomarker-guided treatment",
      "Supportive systemic treatment",
    ],
    whenToConsult:
      "A consultation may be recommended following a cancer diagnosis, when medicine-based treatment is being considered, when treatment response needs review or when another specialist opinion is required.",
    subSpecialties: [
      "Breast Medical Oncology",
      "Thoracic Oncology",
      "Gastrointestinal Oncology",
      "Genitourinary Oncology",
      "Precision Oncology",
    ],
    related: ["surgical-oncology", "radiation-oncology", "haemato-oncology"],
  },
  {
    slug: "surgical-oncology",
    title: "Surgical Oncology",
    Icon: Scissors,
    short: "Specialised surgical assessment and treatment for cancer.",
    heading: "Specialised Surgical Care for Cancer",
    description:
      "Surgical oncology focuses on the surgical management of cancer. Depending on the cancer type, location and stage, surgery may remove a tumour, obtain diagnostic tissue, assess disease extent, relieve symptoms or form part of a wider multimodality treatment plan.",
    careAreas: [
      "Tumour removal",
      "Open cancer surgery",
      "Minimally invasive surgery",
      "Laparoscopic surgery",
      "Thoracoscopic surgery",
      "Robotic-assisted surgery where appropriate",
      "Organ-preserving surgery",
      "Reconstructive cancer surgery",
      "Cytoreductive surgery",
      "HIPEC for carefully selected peritoneal malignancies",
    ],
    whenToConsult:
      "A consultation may be recommended when surgery is being considered, when a tumour needs surgical assessment or when a patient wants another opinion about surgical options.",
    subSpecialties: [
      "Breast Surgical Oncology",
      "Gastrointestinal Surgical Oncology",
      "Thoracic Surgical Oncology",
      "Head and Neck Surgical Oncology",
      "Oncoplastic Surgery",
    ],
    related: ["medical-oncology", "radiation-oncology", "interventional-oncology"],
  },
  {
    slug: "radiation-oncology",
    title: "Radiation Oncology",
    Icon: Radiation,
    short: "Precisely planned radiation treatment to control cancer growth.",
    heading: "Precision-Focused Radiation Treatment for Cancer",
    description:
      "Radiation oncology uses carefully planned high-energy radiation to destroy cancer cells or control tumour growth. Radiation may be used alone or with surgery, chemotherapy, immunotherapy or other treatments.",
    careAreas: [
      "External beam radiation therapy",
      "3D conformal radiation therapy",
      "IMRT",
      "IGRT",
      "VMAT",
      "SRS",
      "SBRT / SABR",
      "Brachytherapy",
      "Adaptive radiation therapy",
    ],
    note:
      "Not every technique is appropriate for every patient. The treatment method depends on the cancer site, stage, treatment objective, anatomy and clinical assessment.",
    whenToConsult:
      "A consultation may be recommended when radiotherapy is part of a treatment plan, after surgery, for definitive treatment, for stereotactic treatment or for symptom control.",
    subSpecialties: [
      "Breast Radiation Oncology",
      "Stereotactic Radiosurgery",
      "Brachytherapy",
      "Paediatric Radiation Oncology",
      "Image-Guided Radiotherapy",
    ],
    related: ["medical-oncology", "surgical-oncology", "onco-radiology"],
  },
  {
    slug: "haemato-oncology",
    title: "Haemato-Oncology",
    Icon: Droplets,
    short: "Specialist care for cancers of blood, bone marrow and lymphatic system.",
    heading: "Specialised Care for Blood Cancers",
    description:
      "Haemato-oncology focuses on cancers affecting the blood, bone marrow and lymphatic system, including leukaemia, lymphoma, multiple myeloma and related haematological malignancies.",
    careAreas: [
      "Chemotherapy",
      "Targeted therapy",
      "Immunotherapy",
      "Monoclonal antibodies",
      "Bispecific antibodies where appropriate",
      "Stem cell transplantation",
      "CAR T-cell therapy where clinically appropriate and available",
      "Supportive haematology",
    ],
    whenToConsult:
      "Consultation may be recommended after a blood-cancer diagnosis, for unexplained blood-count abnormalities requiring specialist assessment, or for another opinion about treatment or transplantation.",
    subSpecialties: [
      "Leukaemia",
      "Lymphoma",
      "Multiple Myeloma",
      "Stem Cell Transplantation",
      "Cellular Therapy",
    ],
    related: ["medical-oncology", "nuclear-medicine-theranostics", "palliative-supportive-care"],
  },
  {
    slug: "gynaecological-oncology",
    title: "Gynaecological Oncology",
    Icon: Venus,
    short: "Coordinated care for cancers of the female reproductive system.",
    heading: "Specialised Care for Cancers of the Female Reproductive System",
    description:
      "Gynaecological oncology focuses on cancers affecting the ovaries, cervix, uterus, endometrium, vulva and vagina. Care frequently combines surgical, medical and radiation oncology expertise.",
    careAreas: [
      "Cancer surgery",
      "Chemotherapy",
      "Radiation therapy",
      "MR Guided Adaptive Brachytherapy",
      "Targeted therapy",
      "Immunotherapy",
      "Genetic and molecular assessment where relevant",
      "Fertility and survivorship support",
    ],
    whenToConsult:
      "A consultation may be recommended after diagnosis or when further specialist assessment is required for a suspected gynaecological malignancy.",
    subSpecialties: [
      "Ovarian Cancer",
      "Cervical Cancer",
      "Uterine and Endometrial Cancer",
      "Vulvar and Vaginal Cancer",
      "Fertility-Sparing Oncology",
    ],
    related: ["medical-oncology", "surgical-oncology", "radiation-oncology"],
  },
  {
    slug: "paediatric-oncology",
    title: "Paediatric Oncology",
    Icon: Baby,
    short: "Cancer diagnosis and treatment for children and adolescents.",
    heading: "Specialised Cancer Care for Children and Adolescents",
    description:
      "Paediatric oncology focuses on diagnosing and treating cancers in children and adolescents. Childhood cancers can include leukaemia, lymphoma, brain tumours, bone tumours and other solid tumours.",
    careAreas: [
      "Chemotherapy",
      "Cancer surgery",
      "Targeted therapy",
      "Immunotherapy",
      "Radiation therapy when appropriate",
      "Stem cell transplantation for selected conditions",
      "Nutrition and supportive care",
      "Family-centred psychological and rehabilitation support",
    ],
    whenToConsult:
      "A consultation may be recommended when a child is diagnosed with cancer, when specialist assessment is required for a suspected condition or when a family seeks another opinion.",
    subSpecialties: [
      "Paediatric Haemato-Oncology",
      "Paediatric Neuro-Oncology",
      "Paediatric Solid Tumours",
      "Paediatric Bone Tumours",
      "Childhood Leukaemia and Lymphoma",
    ],
    related: ["haemato-oncology", "neuro-oncology", "radiation-oncology"],
  },
  {
    slug: "neuro-oncology",
    title: "Neuro-Oncology",
    Icon: Brain,
    short: "Multidisciplinary care for brain, spinal cord and nervous system tumours.",
    heading: "Specialised Care for Brain and Nervous System Tumours",
    description:
      "Neuro-oncology focuses on tumours affecting the brain, spinal cord and nervous system. These tumours may be benign or malignant and can require coordinated input from neurosurgery, radiation oncology, medical oncology, neuroradiology and pathology.",
    careAreas: [
      "Neurosurgical assessment",
      "Biopsy and molecular diagnosis",
      "Radiation therapy",
      "Stereotactic radiosurgery",
      "Chemotherapy",
      "Targeted therapy for selected tumours",
      "Supportive care",
      "Neurological rehabilitation",
    ],
    whenToConsult:
      "A consultation may be recommended following diagnosis of a brain or spinal tumour, for treatment planning or for another specialist opinion.",
    subSpecialties: [
      "Brain Tumour Oncology",
      "Spinal Cord Tumours",
      "Neuro-Surgical Oncology",
      "Stereotactic Radiosurgery",
      "Neuro-Rehabilitation",
    ],
    related: ["radiation-oncology", "medical-oncology", "onco-radiology"],
  },
  {
    slug: "onco-radiology",
    title: "Onco-Radiology",
    Icon: ScanLine,
    short: "Advanced imaging for cancer detection, staging and treatment planning.",
    heading: "Advanced Imaging for Cancer Diagnosis and Treatment Planning",
    description:
      "Onco-radiology uses medical imaging to help detect, diagnose, stage and assess cancer. Imaging can also guide biopsies and selected minimally invasive procedures and monitor treatment response.",
    careAreas: [
      "CT",
      "MRI",
      "PET/CT",
      "Ultrasound",
      "Mammography where relevant",
      "Image-guided biopsy",
      "Specialised molecular imaging such as PSMA PET or somatostatin-receptor PET where available",
    ],
    whenToConsult:
      "Imaging may be recommended when investigating suspected cancer, staging disease, planning treatment, guiding procedures or monitoring response.",
    subSpecialties: [
      "Breast Imaging",
      "Neuro-Radiology",
      "Thoracic Imaging",
      "Abdominal Onco-Imaging",
      "Molecular Imaging",
    ],
    related: ["nuclear-medicine-theranostics", "interventional-oncology", "radiation-oncology"],
  },
  {
    slug: "nuclear-medicine-theranostics",
    title: "Nuclear Medicine & Theranostics",
    Icon: Atom,
    short: "Molecular imaging and targeted radionuclide treatment for selected cancers.",
    heading: "Molecular Imaging and Targeted Radionuclide Therapy",
    description:
      "Nuclear medicine uses radiopharmaceuticals to visualise biological processes in the body. Theranostics links targeted imaging with targeted radionuclide treatment for selected cancers.",
    careAreas: [
      "PET/CT and SPECT/CT imaging",
      "PSMA-targeted imaging for selected prostate cancers",
      "Somatostatin-receptor imaging for selected neuroendocrine tumours",
      "Radioiodine therapy for selected thyroid cancers",
      "Lu-177 PSMA therapy where approved and available",
      "Lu-177 DOTATATE/DOTANOC therapy where approved and available",
      "Selected Y-90 radioembolisation programs",
    ],
    whenToConsult:
      "Patients require specialist assessment to determine whether the relevant molecular target is present and whether treatment is appropriate.",
    subSpecialties: [
      "PET/CT Imaging",
      "SPECT/CT Imaging",
      "PSMA Theranostics",
      "Neuroendocrine Tumour Theranostics",
      "Radionuclide Therapy",
    ],
    related: ["onco-radiology", "medical-oncology", "interventional-oncology"],
  },
  {
    slug: "interventional-oncology",
    title: "Interventional Oncology",
    Icon: Target,
    short: "Image-guided minimally invasive procedures for selected tumours.",
    heading: "Image-Guided Minimally Invasive Cancer Treatment",
    description:
      "Interventional oncology uses imaging to guide needles, catheters or other devices to tumours. These techniques may complement surgery, radiation or systemic treatment in carefully selected patients.",
    careAreas: [
      "Radiofrequency ablation",
      "Microwave ablation",
      "Cryoablation",
      "Transarterial chemoembolisation (TACE)",
      "Radioembolisation",
      "Tumour embolisation",
      "Image-guided biopsy and drainage procedures",
    ],
    whenToConsult:
      "Suitability depends on tumour type, size, location, stage, liver or organ function and overall treatment strategy.",
    subSpecialties: [
      "Tumour Ablation",
      "Interventional Liver Oncology",
      "Image-Guided Biopsy",
      "Tumour Embolisation",
      "Vascular Interventions",
    ],
    related: ["onco-radiology", "nuclear-medicine-theranostics", "surgical-oncology"],
  },
  {
    slug: "preventive-oncology",
    title: "Preventive Oncology",
    Icon: ShieldCheck,
    short: "Cancer risk assessment, prevention guidance and early detection.",
    heading: "Cancer Risk Reduction, Screening and Early Detection",
    description:
      "Preventive oncology focuses on identifying cancer risk, promoting evidence-based prevention and supporting screening or early-detection strategies appropriate to age, risk and family history.",
    careAreas: [
      "Risk assessment",
      "Screening guidance",
      "Tobacco cessation",
      "HPV vaccination guidance",
      "Hepatitis vaccination guidance where relevant",
      "Genetic counselling for inherited cancer risk",
      "Lifestyle guidance",
    ],
    whenToConsult:
      "Screening recommendations differ by cancer type and individual risk. Symptoms should be evaluated regardless of routine screening schedules.",
    subSpecialties: [
      "Cancer Risk Assessment",
      "Hereditary Cancer Counselling",
      "Breast Cancer Screening",
      "Cervical Cancer Prevention",
      "Lifestyle and Tobacco Cessation Support",
    ],
    related: ["medical-oncology", "onco-radiology", "palliative-supportive-care"],
  },
  {
    slug: "palliative-supportive-care",
    title: "Palliative & Supportive Care",
    Icon: HandHeart,
    short: "Compassionate symptom management and quality-of-life support.",
    heading: "Compassionate Care Focused on Comfort and Quality of Life",
    description:
      "Palliative and supportive care helps people living with cancer manage symptoms, treatment effects and practical or emotional challenges. It can be provided at any stage and alongside active cancer treatment.",
    careAreas: [
      "Pain and symptom management",
      "Nausea and fatigue management",
      "Emotional support",
      "Nutritional guidance",
      "Treatment side-effect management",
      "Family and caregiver support",
      "Advance-care discussions when appropriate",
    ],
    whenToConsult:
      "Supportive care may be helpful for pain, difficult symptoms, emotional distress, treatment complications or quality-of-life concerns.",
    subSpecialties: [
      "Cancer Pain Management",
      "Psycho-Oncology",
      "Nutrition Support",
      "Rehabilitation and Fatigue Management",
      "Family and Caregiver Support",
    ],
    related: ["medical-oncology", "haemato-oncology", "preventive-oncology"],
  },
];

export const getSpecialityBySlug = (slug) =>
  specialities.find((item) => item.slug === slug);

export const getRelatedSpecialities = (speciality) =>
  (speciality?.related || [])
    .map((slug) => getSpecialityBySlug(slug))
    .filter(Boolean);