import cancerTreatmentImage from "../assets/treatments/cancer-treatment-overview.jpg";
import surgeryImage from "../assets/treatments/surgical-oncology.jpg";
import medicalOncologyImage from "../assets/treatments/medical-oncology.jpg";
import radiationImage from "../assets/treatments/radiation-oncology.jpg";
import precisionImage from "../assets/treatments/precision-oncology.jpg";
import cellularImage from "../assets/treatments/cellular-therapy.jpg";
import stemCellImage from "../assets/treatments/stem-cell-transplant.jpg";
import interventionalImage from "../assets/treatments/interventional-oncology.jpg";
import dayCareImage from "../assets/treatments/day-care-treatment.jpg";

export const treatmentOverview = {
  title: "Cancer Treatments",
  description:
    "Cancer treatment is planned around the type and stage of cancer, pathology and biomarker findings, previous treatment, overall health and each person's goals. Explore the treatment approaches below and discuss suitable options with an oncology specialist.",
  image: cancerTreatmentImage,
};

export const treatmentServices = [
  {
    slug: "cancer-surgery",
    title: "Cancer Surgery",
    shortTitle: "Cancer Surgery",
    eyebrow: "SURGICAL ONCOLOGY",
    cardDescription:
      "Surgical approaches may remove a tumour, assess disease extent, relieve symptoms or form part of a combined cancer treatment plan.",
    intro:
      "Cancer surgery is planned according to the tumour's location, size, stage, relationship to nearby structures and the patient's overall health. The surgical team considers the intended treatment goal and whether other therapies should be given before or after an operation.",
    image: surgeryImage,
    imageAlt: "Surgical oncology care",
    overview:
      "Surgery may be used to remove cancer, obtain tissue for diagnosis, reduce tumour burden or manage complications. Not every cancer requires surgery, and the safest approach differs by cancer type and individual circumstances.",
    sections: [
      {
        title: "Surgical approaches",
        paragraphs: [
          "Depending on the clinical situation, surgery may be performed through an open incision or using minimally invasive techniques. The choice is based on the operation required, tumour characteristics, patient factors and the treating team's assessment.",
        ],
        points: [
          "Open cancer surgery",
          "Minimally invasive surgery",
          "Laparoscopic surgery",
          "Thoracoscopic surgery",
          "Robotic-assisted surgery where appropriate",
          "Organ-preserving surgery",
          "Reconstructive surgery",
          "Cytoreductive surgery",
        ],
      },
      {
        title: "Planning and preparation",
        paragraphs: [
          "Pre-operative assessment may include imaging, pathology review, blood tests, anaesthesia evaluation and discussion of expected benefits, risks, recovery and alternatives. A multidisciplinary team may review complex cases.",
        ],
      },
      {
        title: "Recovery and follow-up",
        paragraphs: [
          "Recovery depends on the procedure and the person's health. Follow-up may include wound review, pathology results, rehabilitation and discussion of additional treatment such as systemic therapy or radiation when indicated.",
        ],
      },
    ],
    faq: {
      question: "Does every cancer need surgery?",
      answer:
        "No. Some cancers are treated primarily with medicines or radiation, and some need a combination of approaches. The recommendation depends on the diagnosis and clinical assessment.",
    },
  },
  {
    slug: "medical-oncology-treatments",
    title: "Medical Oncology Treatments",
    shortTitle: "Medical Oncology",
    eyebrow: "SYSTEMIC CANCER TREATMENT",
    cardDescription:
      "Medicine-based treatments may act throughout the body and can include chemotherapy, immunotherapy, targeted and hormone-based therapies.",
    intro:
      "Medical oncology uses anti-cancer medicines selected according to cancer type, stage, biomarkers, previous treatment and overall health. Treatment may be given before or after surgery, with radiation, or as the main treatment when appropriate.",
    image: medicalOncologyImage,
    imageAlt: "Medical oncology treatment consultation",
    overview:
      "Systemic treatment travels through the bloodstream or acts across the body. The oncology team selects medicines and schedules based on the expected benefit, possible side effects and the patient's treatment goals.",
    sections: [
      {
        title: "Types of systemic treatment",
        paragraphs: [
          "Different medicines work in different ways. Some damage cancer cells, some block signals that support tumour growth, and others help the immune system recognise cancer.",
        ],
        points: [
          "Chemotherapy",
          "Immune checkpoint inhibitors and other immunotherapies",
          "Targeted therapy",
          "Hormone / endocrine therapy",
          "Monoclonal antibody therapy",
          "Antibody-drug conjugates (ADCs)",
          "Bispecific antibodies for selected indications",
        ],
      },
      {
        title: "Biomarker-guided decisions",
        paragraphs: [
          "Pathology and selected biomarker or molecular tests may help determine whether a targeted medicine, immunotherapy or another treatment is relevant. Not every test or medicine is appropriate for every cancer.",
        ],
      },
      {
        title: "Treatment monitoring and supportive care",
        paragraphs: [
          "During treatment, the team may monitor symptoms, examination findings, blood tests and imaging. Supportive medicines and symptom-management strategies can help patients manage treatment-related effects.",
        ],
      },
    ],
    faq: {
      question: "Is chemotherapy the only medical oncology treatment?",
      answer:
        "No. Medical oncology may include chemotherapy, immunotherapy, targeted therapy, hormone therapy and antibody-based treatments, depending on the cancer and clinical indication.",
    },
  },
  {
    slug: "radiation-therapy",
    title: "Radiation Therapy",
    shortTitle: "Radiation Therapy",
    eyebrow: "RADIATION ONCOLOGY",
    cardDescription:
      "Carefully planned radiation may be used to treat a tumour, reduce recurrence risk or relieve symptoms in selected situations.",
    intro:
      "Radiation therapy uses focused ionising radiation to damage cancer cells while planning treatment to limit exposure to nearby healthy tissues. It may be used alone or alongside surgery, systemic medicines or other treatments.",
    image: radiationImage,
    imageAlt: "Radiation oncology treatment equipment",
    overview:
      "The radiation approach is selected according to the cancer site, stage, treatment intent, anatomy, previous treatment and available equipment. A radiation oncologist and planning team assess the safest appropriate technique.",
    sections: [
      {
        title: "Radiation techniques",
        paragraphs: [
          "External-beam techniques shape and direct radiation from outside the body. Brachytherapy places a radiation source in or near the treatment area for selected cancers.",
        ],
        points: [
          "External-beam radiation therapy",
          "3D conformal radiation therapy",
          "Intensity-modulated radiation therapy (IMRT)",
          "Image-guided radiation therapy (IGRT)",
          "Volumetric modulated arc therapy (VMAT)",
          "Stereotactic radiosurgery (SRS)",
          "Stereotactic body radiation therapy (SBRT / SABR)",
          "Brachytherapy",
          "Adaptive radiotherapy",
        ],
      },
      {
        title: "Treatment planning",
        paragraphs: [
          "Planning may involve CT or other imaging, immobilisation devices, contouring of the target and nearby organs, dose calculation and quality checks before treatment begins.",
        ],
      },
      {
        title: "During and after treatment",
        paragraphs: [
          "Treatment schedules vary. The team reviews patients during the course and may provide advice for side effects. Follow-up assesses response and any short- or long-term effects.",
        ],
      },
    ],
    faq: {
      question: "Is radiation therapy painful?",
      answer:
        "External-beam radiation treatment itself is generally not felt during delivery. Some people develop side effects in the treated area, which depend on the site, dose and treatment schedule.",
    },
  },
  {
    slug: "precision-oncology",
    title: "Precision Oncology",
    shortTitle: "Precision Oncology",
    eyebrow: "PERSONALISED TREATMENT PLANNING",
    cardDescription:
      "Biomarker and molecular information can help identify treatment options relevant to a tumour's biological features.",
    intro:
      "Precision oncology considers the molecular characteristics of a cancer alongside its site, stage, pathology and the patient's overall clinical picture. The aim is to help clinicians assess whether a biomarker-linked treatment or clinical option may be relevant.",
    image: precisionImage,
    imageAlt: "Molecular and genomic profiling for precision oncology",
    overview:
      "Cancers that begin in the same organ can have different biological features. Selected molecular tests can reveal alterations that may influence diagnosis, prognosis or treatment selection.",
    sections: [
      {
        title: "Biomarker and molecular testing",
        paragraphs: [
          "Testing may examine DNA, RNA, proteins or other tumour features. The appropriate test depends on the cancer type, tissue availability, clinical question and current guidance.",
        ],
        points: [
          "Tumour biomarker testing",
          "Molecular pathology",
          "Next-generation sequencing in selected cases",
          "Hereditary cancer testing when indicated",
          "Liquid-biopsy applications in selected settings",
        ],
      },
      {
        title: "How results inform care",
        paragraphs: [
          "Results may help identify targeted medicines, immunotherapy eligibility, inherited risk or relevant clinical-trial options where available. A result does not guarantee that a matching treatment will be suitable or accessible.",
        ],
      },
      {
        title: "Interpreting results",
        paragraphs: [
          "A specialist interprets molecular findings with pathology, stage, prior therapies and the patient's health. Genetic counselling may be appropriate when an inherited cancer risk is suspected.",
        ],
      },
    ],
    faq: {
      question: "Does every patient need genomic testing?",
      answer:
        "No. Testing is considered selectively according to cancer type, stage, clinical guidance, available tissue and whether the result could change management.",
    },
  },
  {
    slug: "cellular-therapy",
    title: "Cellular Therapy",
    shortTitle: "Cellular Therapy",
    eyebrow: "SPECIALISED IMMUNE-CELL TREATMENTS",
    cardDescription:
      "Specialised cell-based treatments use selected immune cells to recognise or act against cancer in carefully chosen situations.",
    intro:
      "Cellular therapies are specialised treatments that use living cells, often immune cells, as part of cancer care. They require careful patient selection, specialist oversight and dedicated treatment and monitoring infrastructure.",
    image: cellularImage,
    imageAlt: "Specialist systemic cancer treatment care",
    overview:
      "Some cellular therapies modify or expand a patient's immune cells so they can recognise cancer. Their approved uses, availability and suitability vary by cancer type, country and treatment centre.",
    sections: [
      {
        title: "Examples of cellular therapy",
        paragraphs: [
          "CAR T-cell therapy is an established option for selected blood cancers in certain settings. Other cell-based approaches, including tumour-infiltrating lymphocyte (TIL) therapy, have more limited indications and availability.",
        ],
        points: [
          "CAR T-cell therapy for selected indications",
          "Tumour-infiltrating lymphocyte (TIL) approaches in selected settings",
          "Other specialised cell-based therapies under defined protocols",
        ],
      },
      {
        title: "Assessment and treatment pathway",
        paragraphs: [
          "Assessment may include confirming the diagnosis and target, reviewing previous treatments, checking fitness for therapy and discussing potential benefits and serious risks. Cell collection, manufacturing and infusion processes depend on the specific therapy.",
        ],
      },
      {
        title: "Monitoring and safety",
        paragraphs: [
          "Some cellular therapies can cause significant immune-related complications and require close monitoring by trained teams with appropriate facilities. Patients should receive clear information about follow-up and urgent warning signs.",
        ],
      },
    ],
    faq: {
      question: "Is CAR T-cell therapy suitable for all cancers?",
      answer:
        "No. CAR T-cell therapy is used for selected diagnoses and indications. Eligibility depends on the cancer target, prior treatment, patient factors, regulatory status and access to an appropriately equipped centre.",
    },
  },
  {
    slug: "stem-cell-transplant",
    title: "Stem Cell Transplant",
    shortTitle: "Stem Cell Transplantation",
    eyebrow: "HAEMATO-ONCOLOGY",
    cardDescription:
      "Stem cell transplantation may support treatment for selected blood cancers and haematological conditions.",
    intro:
      "Stem cell transplantation, also called haematopoietic stem cell transplantation, replaces or restores blood-forming stem cells after intensive treatment. It is considered for selected diseases after detailed specialist assessment.",
    image: stemCellImage,
    imageAlt: "Supportive care during specialist cancer treatment",
    overview:
      "A transplant plan depends on the underlying condition, disease status, previous treatment, donor options and the patient's overall fitness. It is a complex treatment pathway that requires specialised facilities and long-term follow-up.",
    sections: [
      {
        title: "Types of transplant",
        paragraphs: [
          "The source of stem cells and donor relationship determine the transplant type. The haematology team explains the intended approach and the reasons for selecting it.",
        ],
        points: [
          "Autologous transplant — using the patient's own stem cells",
          "Allogeneic transplant — using stem cells from a donor",
        ],
      },
      {
        title: "Evaluation and preparation",
        paragraphs: [
          "Assessment may include disease evaluation, organ-function tests, infection screening, donor matching when relevant and a discussion of conditioning treatment, risks and expected recovery.",
        ],
      },
      {
        title: "Recovery and follow-up",
        paragraphs: [
          "Recovery can involve a prolonged period of monitoring for infection, blood-count recovery, graft-related complications and late effects. Follow-up and supportive care are important parts of the transplant pathway.",
        ],
      },
    ],
    faq: {
      question: "Is stem cell transplantation used for every blood cancer?",
      answer:
        "No. It is considered for selected blood cancers and haematological conditions based on disease features, response to prior treatment, patient fitness and donor or cell availability.",
    },
  },
  {
    slug: "interventional-oncology",
    title: "Interventional Oncology",
    shortTitle: "Interventional Oncology",
    eyebrow: "IMAGE-GUIDED MINIMALLY INVASIVE PROCEDURES",
    cardDescription:
      "Image-guided procedures can target selected tumours through ablation, embolisation and other minimally invasive techniques.",
    intro:
      "Interventional oncology uses imaging to guide needles, catheters or other devices to a tumour or its blood supply. These procedures may complement surgery, radiation or systemic treatment in carefully selected patients.",
    image: interventionalImage,
    imageAlt: "Diagnostic imaging used to guide cancer procedures",
    overview:
      "The suitability of an image-guided procedure depends on tumour type, size, location, number of lesions, organ function, stage and the wider treatment plan. A specialist review is required before deciding on an approach.",
    sections: [
      {
        title: "Image-guided procedures",
        paragraphs: [
          "Ablation uses energy or other methods to destroy targeted tissue. Embolisation blocks selected blood vessels supplying a tumour, sometimes combined with delivery of a therapeutic agent.",
        ],
        points: [
          "Radiofrequency ablation",
          "Microwave ablation",
          "Cryoablation",
          "Transarterial chemoembolisation (TACE)",
          "Radioembolisation",
          "Tumour embolisation",
          "Image-guided biopsy or drainage when indicated",
        ],
      },
      {
        title: "Who may be considered",
        paragraphs: [
          "Assessment considers the tumour's location and biology, nearby structures, liver or other organ function, prior treatment and the intended goal. Not every tumour can be treated with an interventional procedure.",
        ],
      },
      {
        title: "Planning and follow-up",
        paragraphs: [
          "Imaging and laboratory tests may be used before and after a procedure. The treating team explains preparation, anaesthesia or sedation, recovery, possible complications and how response will be assessed.",
        ],
      },
    ],
    faq: {
      question: "Does interventional oncology always replace surgery?",
      answer:
        "No. These procedures may be alternatives in selected situations or may complement surgery, radiation or systemic treatment. The best approach depends on individual clinical factors.",
    },
  },
  {
    slug: "day-care-cancer-treatment",
    title: "Day-Care Cancer Treatment",
    shortTitle: "Day-Care Cancer Treatment",
    eyebrow: "OUTPATIENT CANCER CARE",
    cardDescription:
      "Selected cancer medicines and supportive treatments may be delivered in an outpatient setting with appropriate monitoring.",
    intro:
      "Day-care cancer treatment allows eligible patients to receive selected medicines or supportive therapies without an overnight hospital admission. The care team confirms suitability for each visit and monitors patients according to the treatment protocol.",
    image: dayCareImage,
    imageAlt: "Oncology consultation and outpatient treatment planning",
    overview:
      "Day-care services may include chemotherapy, immunotherapy, targeted infusions and supportive medicines where provided. The treatment plan, observation period and discharge advice vary according to the medicine and the patient's condition.",
    sections: [
      {
        title: "Treatments that may be delivered",
        paragraphs: [
          "The exact services depend on the centre's approved protocols, staffing and facilities. Treatment is scheduled only after clinical review and required checks.",
        ],
        points: [
          "Selected chemotherapy regimens",
          "Immunotherapy infusions",
          "Targeted therapy infusions",
          "Supportive medicines",
          "Hydration or symptom-management treatments when prescribed",
        ],
      },
      {
        title: "Before each visit",
        paragraphs: [
          "The team may review symptoms, temperature, blood counts, organ-function results, previous side effects and medication changes before authorising a treatment cycle.",
        ],
      },
      {
        title: "Monitoring and going home",
        paragraphs: [
          "Patients may be observed during or after treatment. Before discharge, the team provides instructions about medicines, hydration, expected effects, follow-up and symptoms that require urgent medical advice.",
        ],
      },
    ],
    faq: {
      question: "Can every cancer treatment be given as day care?",
      answer:
        "No. Some treatments require inpatient care or prolonged monitoring. Day-care suitability depends on the medicine, regimen, patient condition and centre protocols.",
    },
  },
];

export const emergingTreatments = [
  {
    title: "Immune Checkpoint Inhibitors",
    text: "Established immunotherapies that block inhibitory immune checkpoints such as PD-1 / PD-L1 or CTLA-4. They are used for selected cancers and patients.",
  },
  {
    title: "Targeted Therapy",
    text: "Small molecules and monoclonal antibodies act on selected molecular targets or pathways involved in cancer growth. Biomarker testing is often needed.",
  },
  {
    title: "Antibody-Drug Conjugates (ADCs)",
    text: "Targeted antibodies carry anti-cancer drug payloads to cells expressing a particular target. Use depends on the target, cancer type and current approval.",
  },
  {
    title: "Bispecific Antibodies",
    text: "Engineered antibodies bind two targets. Several have established roles in selected blood cancers, while other applications continue to develop.",
  },
  {
    title: "CAR T-Cell Therapy",
    text: "A personalised cell therapy with established use in selected blood cancers and multiple myeloma. It requires specialised cellular-therapy infrastructure.",
  },
  {
    title: "Radioligand / Radiopharmaceutical Therapy",
    text: "Tumour-targeting molecules carry therapeutic radioisotopes. Examples include Lu-177 PSMA and Lu-177 DOTATATE for selected indications.",
  },
  {
    title: "Tumour-Agnostic Targeted Therapy",
    text: "Some treatments are selected by a specific molecular alteration rather than the organ where the cancer began, for defined approved biomarkers.",
  },
  {
    title: "Adaptive Radiotherapy",
    text: "Current imaging can be used to adapt radiation plans when tumour position or patient anatomy changes, where suitable platforms and expertise are available.",
  },
];