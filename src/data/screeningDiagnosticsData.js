import mammographyImage from "../assets/patients-support/Digital breast tomosynthesis.jpg";
import screeningImage from "../assets/home/breast-screening.jpg";
import diagnosisImage from "../assets/home/diagnosisBanner.jpg";
import pathologyImage from "../assets/patients-support/Onco-pathology.jpg";
import molecularImage from "../assets/patients-support/Genomic profiling.jpg";

export const screeningDiagnosticServices = [
  {
    slug: "3d-mammography",
    title: "3D Mammography",
    shortTitle: "3D Mammography",
    eyebrow: "ADVANCED BREAST IMAGING",
    image: mammographyImage,
    imageAlt: "Digital breast tomosynthesis imaging equipment",
    cardDescription:
      "Explore digital breast tomosynthesis, an advanced mammography technique that creates multiple breast images to help clinicians assess breast tissue.",
    intro:
      "3D mammography, also called digital breast tomosynthesis (DBT), is an imaging technique used to examine breast tissue. It captures a series of low-dose X-ray images from different angles, which are reconstructed into thin image slices for review by a radiologist.",
    overview:
      "Conventional mammography creates two-dimensional images. Tomosynthesis adds depth by allowing the radiologist to review breast tissue in thin sections. This may make some abnormalities easier to assess, particularly when breast tissue is dense. Whether 3D mammography is appropriate depends on a person's age, symptoms, breast history, risk factors and the clinician's recommendation.",
    sections: [
      {
        title: "How does 3D mammography work?",
        paragraphs: [
          "During the examination, the breast is positioned and gently compressed between two plates, similar to a conventional mammogram. The X-ray tube moves in an arc and takes multiple images from different angles. A computer combines these images to create a series of thin views through the breast.",
          "The examination is performed by trained imaging staff. The radiologist reviews the images and may compare them with previous studies when available.",
        ],
        points: [
          "A series of low-dose images is acquired from different angles.",
          "Images are reconstructed into thin sections of breast tissue.",
          "The radiologist reviews the images for areas that may need further assessment.",
        ],
      },
      {
        title: "Who may be advised to have this test?",
        paragraphs: [
          "A clinician may recommend mammography as part of routine screening for an eligible person or as a diagnostic investigation when there is a breast symptom or an earlier imaging finding. Tomosynthesis may be considered in selected circumstances, including when additional detail is useful.",
          "There is no single screening schedule that is right for everyone. The appropriate test and timing should be discussed with a qualified healthcare professional, taking personal risk and local clinical guidance into account.",
        ],
        points: [
          "People attending an age- and risk-appropriate breast screening programme.",
          "People with a new breast change who need diagnostic assessment.",
          "People whose clinician recommends additional imaging after reviewing their history or previous results.",
        ],
      },
      {
        title: "What to expect during your appointment",
        paragraphs: [
          "The imaging team will explain the procedure and ask relevant questions about symptoms, previous breast procedures and the possibility of pregnancy. You may be asked not to use deodorant, powder or lotion around the breast and underarm on the day, as some products can affect image quality. Follow the specific instructions provided by the imaging centre.",
          "Breast compression can feel uncomfortable for a short time. Tell the technologist if you are experiencing significant pain or have difficulty standing or positioning your arm. The team will guide you through the examination.",
        ],
        points: [
          "Wear comfortable clothing that is easy to change out of.",
          "Bring previous mammogram or breast imaging reports if available.",
          "Tell the team about symptoms, implants, prior surgery or possible pregnancy.",
        ],
      },
      {
        title: "Understanding your results",
        paragraphs: [
          "A radiologist interprets the images and sends a report to the referring clinician. The result may be reassuring, may recommend routine follow-up, or may suggest additional imaging or a biopsy. An abnormal mammogram does not automatically mean cancer; many findings are non-cancerous and need further assessment to understand their cause.",
          "Your clinician will explain the report and whether any next step is needed. Please do not interpret an imaging result in isolation.",
        ],
        points: [],
      },
    ],
    faqs: [
      { question: "Is 3D mammography the same as a breast MRI?", answer: "No. 3D mammography uses X-rays to create images of breast tissue from multiple angles. MRI uses magnetic fields and radio waves. They are different tests and are recommended for different clinical reasons." },
      { question: "Does 3D mammography use radiation?", answer: "Yes. It uses X-rays. The imaging team follows established protocols to keep radiation exposure as low as reasonably achievable while obtaining diagnostic images." },
      { question: "Will I need a biopsy after mammography?", answer: "Not usually. A biopsy is recommended only when the imaging and clinical assessment identify an area that needs tissue testing. Many findings are benign." },
    ],
    closing: "The right breast imaging plan is individual. Speak with a breast specialist or radiologist to understand whether 3D mammography is suitable for you.",
  },
  {
    slug: "screening-early-detection",
    title: "Screening & Early Detection",
    shortTitle: "Screening & Early Detection",
    eyebrow: "BE INFORMED. ACT EARLY.",
    image: screeningImage,
    imageAlt: "Breast screening appointment and early detection assessment",
    cardDescription:
      "Learn how risk assessment, screening tests and awareness of body changes can support timely medical evaluation.",
    intro:
      "Cancer screening looks for certain cancers before symptoms appear. Early detection also includes recognising possible warning signs and seeking medical advice promptly. Screening is not a guarantee that cancer will be found or prevented, but for some cancers and eligible groups it can reduce the risk of dying from the disease.",
    overview:
      "The benefits and limitations of screening vary by cancer type and by individual risk. A screening plan should consider age, personal and family history, inherited risk, previous test results, overall health and current clinical recommendations. Not every test is suitable for every person, and screening tests can sometimes lead to false-positive or false-negative results.",
    sections: [
      {
        title: "Screening and diagnostic testing are different",
        paragraphs: [
          "Screening is generally offered to people who do not have symptoms, to identify those who may need further assessment. Diagnostic testing is used when a person has symptoms, an abnormal screening result or another clinical concern.",
          "If you notice a persistent or unusual change, do not wait for your next routine screening appointment. Arrange a clinical assessment even if a recent screening test was normal.",
        ],
        points: ["Screening: checks eligible people who do not have symptoms.", "Diagnostic assessment: investigates a symptom or an abnormal screening result.", "Follow-up: clarifies a finding and determines whether further tests are needed."],
      },
      {
        title: "What may be included in a screening discussion?",
        paragraphs: [
          "Depending on the cancer type and personal risk, a clinician may discuss breast imaging, cervical screening, colorectal screening or other evidence-based assessments. The tests offered and the recommended intervals differ across countries and clinical guidelines.",
          "A healthcare professional can explain the likely benefits, possible harms, preparation and follow-up associated with each test before you decide how to proceed.",
        ],
        points: ["Personal and family medical history review.", "Assessment of inherited or lifestyle-related risk factors where relevant.", "Selection of an appropriate screening test based on current guidance.", "A clear plan for communicating results and arranging follow-up."],
      },
      {
        title: "Know your body and report changes",
        paragraphs: [
          "Being familiar with what is normal for your body can help you notice changes. Possible warning signs may include a new lump, unexplained bleeding, a persistent cough or hoarseness, a change in bowel or bladder habits, difficulty swallowing, a non-healing sore or unexplained weight loss. These symptoms can have many causes and do not necessarily indicate cancer.",
          "Seek medical advice for symptoms that are persistent, unexplained or worsening. A clinician can assess the concern and decide whether tests are needed.",
        ],
        points: [],
      },
      {
        title: "Your screening journey",
        paragraphs: [
          "A screening appointment usually begins with a discussion of your health history and the reason for the test. The team explains what the test involves, how results will be shared and what may happen if the result needs further assessment.",
          "If a result is abnormal, follow-up may include repeat imaging, a specialist consultation, endoscopy or a biopsy depending on the finding. An abnormal screening result is not a cancer diagnosis.",
        ],
        points: ["Discuss your personal risk and screening eligibility.", "Understand the test, preparation and possible limitations.", "Attend the recommended screening appointment.", "Review the result with your clinician and complete any advised follow-up."],
      },
    ],
    faqs: [
      { question: "Does screening mean I have cancer?", answer: "No. Screening is performed to look for possible signs of disease. An abnormal result needs further assessment and does not by itself confirm cancer." },
      { question: "Can a normal screening result rule out cancer completely?", answer: "No test is perfect. If you develop a new or persistent symptom, seek medical advice even if your previous screening result was normal." },
      { question: "How often should I get screened?", answer: "The recommended test and interval depend on the cancer type, age, personal risk, medical history and applicable clinical guidelines. Ask your healthcare professional for an individual recommendation." },
    ],
    closing: "A thoughtful screening plan starts with an informed conversation. Our team can help you understand the options that may be appropriate for your circumstances.",
  },
  {
    slug: "diagnosis-and-staging",
    title: "Diagnosis & Staging",
    shortTitle: "Diagnosis & Staging",
    eyebrow: "FROM INVESTIGATION TO CLARITY",
    image: diagnosisImage,
    imageAlt: "Medical diagnostic imaging used in cancer assessment",
    cardDescription:
      "Understand the investigations used to identify cancer, confirm a diagnosis and determine the extent of disease.",
    intro:
      "Cancer diagnosis is a step-by-step process that brings together a person's symptoms, clinical examination, imaging, laboratory tests and, when needed, tissue sampling. Staging describes the extent of a cancer, including its size, location and whether it has spread.",
    overview:
      "The tests required depend on the suspected cancer type and the individual clinical situation. Not everyone needs every investigation. The treating team reviews the findings together to establish the diagnosis, identify relevant tumour features and discuss an appropriate care plan. Some results may take longer because specialist pathology or additional testing is required.",
    sections: [
      {
        title: "Clinical assessment and medical history",
        paragraphs: [
          "The first step often includes a discussion of symptoms, how long they have been present, relevant medical and family history, previous illnesses, medicines and general health. A physical examination may help identify areas that need closer investigation.",
          "Bring previous reports, scan images, medication details and a list of questions to your appointment where possible. This can help the clinical team understand the full picture.",
        ],
        points: ["Review of symptoms and relevant history.", "Physical examination based on the concern.", "Planning investigations according to the suspected cancer type."],
      },
      {
        title: "Imaging and laboratory investigations",
        paragraphs: [
          "Imaging tests help doctors see the location and appearance of an abnormality and assess nearby structures or other areas of the body. Depending on the clinical question, investigations may include ultrasound, mammography, CT, MRI, PET-CT or other specialised imaging.",
          "Blood tests may assess general health, organ function or selected markers. A blood test alone usually cannot confirm or exclude most cancers; results are interpreted alongside other findings.",
        ],
        points: ["Ultrasound and mammography for selected breast or soft-tissue concerns.", "CT or MRI to examine specific body regions.", "PET-CT or bone imaging in selected staging situations.", "Blood and other laboratory tests to support clinical assessment."],
      },
      {
        title: "Biopsy and confirmation",
        paragraphs: [
          "When appropriate, a biopsy collects a small sample of tissue or cells from an area of concern. A pathologist examines the sample under a microscope and may perform additional tests to identify the cell type and relevant tumour characteristics.",
          "The safest and most informative biopsy method depends on the location of the abnormality and the suspected diagnosis. Your doctor will explain the reason for the procedure, preparation, possible risks and expected timeline for results.",
        ],
        points: ["Core needle or fine-needle sampling in selected cases.", "Image-guided biopsy when the area is not easily felt or seen.", "Endoscopic or surgical biopsy for certain locations.", "Pathology review and additional testing when indicated."],
      },
      {
        title: "What does cancer staging mean?",
        paragraphs: [
          "Staging describes how far a cancer has developed or spread. For many solid tumours, clinicians use the TNM framework: T describes the primary tumour, N describes nearby lymph node involvement and M describes distant metastasis. Other cancers may use different staging systems.",
          "The stage helps the team discuss treatment options and prognosis, but it is only one part of the picture. Cancer type, grade, molecular features, overall health and patient preferences also matter. The stage may be refined as more test results become available.",
        ],
        points: ["Tumour size and local extent.", "Whether nearby lymph nodes are involved.", "Whether there is evidence of spread to distant organs.", "Other cancer-specific factors that may affect staging."],
      },
      {
        title: "Multidisciplinary review and next steps",
        paragraphs: [
          "Complex cases may be reviewed by a multidisciplinary team that includes relevant specialists, radiologists, pathologists, surgeons, medical oncologists and radiation oncologists. This helps bring imaging, pathology and clinical information together.",
          "Your specialist should explain what is known, what remains uncertain and whether further tests are needed before treatment decisions are made. You can ask for clarification or discuss a second opinion if you would find that helpful.",
        ],
        points: [],
      },
    ],
    faqs: [
      { question: "Does an imaging scan confirm cancer?", answer: "Imaging can identify suspicious areas and help assess their extent, but tissue examination is often needed to confirm a cancer diagnosis. The approach depends on the clinical situation." },
      { question: "Is a biopsy always required?", answer: "Not in every situation, but biopsy is commonly used when tissue confirmation is needed. Your specialist will explain whether it is appropriate and which method is safest." },
      { question: "Can the cancer stage change?", answer: "The stage may be clarified or updated when additional investigations or pathology results become available. Your treating team can explain the staging system relevant to your diagnosis." },
    ],
    closing: "A clear diagnosis and accurate staging help guide discussions about care. Your specialist will explain your results and the next steps in language you can understand.",
  },
  {
    slug: "pathology-molecular-diagnostics",
    title: "Pathology & Molecular Diagnostics",
    shortTitle: "Pathology & Molecular Diagnostics",
    eyebrow: "UNDERSTANDING THE BIOLOGY OF CANCER",
    image: pathologyImage,
    imageAlt: "Pathology laboratory assessment of tissue samples",
    cardDescription:
      "Discover how tissue analysis, biomarker testing and selected molecular tests help define a cancer and inform treatment discussions.",
    intro:
      "Pathology examines cells and tissue samples to help determine whether a disease is present and, when cancer is found, to identify its type and important characteristics. Molecular diagnostics can look for selected changes in genes, proteins or other biomarkers within a tumour.",
    overview:
      "Pathology and molecular results provide information that may help classify a cancer, estimate how it may behave and identify whether certain treatments could be considered. The tests selected depend on the cancer type, the amount and quality of available tissue, the clinical question and current evidence. Not every patient needs every molecular test, and a test result does not guarantee a particular treatment response.",
    sections: [
      {
        title: "What happens in a pathology laboratory?",
        paragraphs: [
          "A tissue or cell sample is labelled, processed and examined by a pathologist. The report may describe the tumour type, grade, appearance and other features relevant to diagnosis. The pathologist may request additional stains or tests when more information is needed.",
          "Accurate interpretation depends on an adequate sample and the clinical details supplied with it. In some cases, a second review or additional tissue sampling may be recommended.",
        ],
        points: ["Macroscopic and microscopic examination of the sample.", "Assessment of tumour type, grade and relevant tissue features.", "Immunohistochemistry or other special stains when indicated.", "A structured report shared with the treating clinician."],
      },
      {
        title: "Immunohistochemistry and biomarkers",
        paragraphs: [
          "Immunohistochemistry (IHC) uses antibodies to detect specific proteins in tissue. Depending on the cancer, biomarker tests may help classify a tumour or provide information relevant to treatment selection. Examples include hormone receptors and HER2 in breast cancer, or other markers used in different tumour types.",
          "The meaning of a biomarker depends on the cancer type and the validated test method. Your specialist and pathologist interpret the result in the context of the full diagnosis.",
        ],
        points: ["Hormone receptor testing in appropriate breast cancers.", "HER2 assessment where clinically indicated.", "Other tumour-specific protein markers based on the diagnosis."],
      },
      {
        title: "Molecular and genomic testing",
        paragraphs: [
          "Molecular tests examine selected genetic or molecular features of tumour cells. Depending on the clinical situation, testing may use a targeted method or a broader panel. The sample may come from tumour tissue and, in selected circumstances, blood or another specimen.",
          "These tests can sometimes identify changes that are relevant to targeted treatment, clinical trial consideration or understanding tumour biology. A result may also be inconclusive or may not identify an actionable change. The specialist will explain what the result means for the individual case.",
        ],
        points: ["Targeted testing for specific gene alterations when appropriate.", "Broader molecular profiling in selected clinical situations.", "Review of whether the result has an established clinical implication.", "Discussion of limitations, uncertain findings and possible next steps."],
      },
      {
        title: "How results support personalised care",
        paragraphs: [
          "Pathology and molecular findings are considered alongside the cancer stage, imaging, general health and patient preferences. The combined information may help the multidisciplinary team discuss suitable treatment options and whether additional testing is worthwhile.",
          "A molecular finding does not automatically mean that a matching medicine is suitable or available. Treatment decisions are based on the strength of evidence, the patient's diagnosis and the treating team's assessment.",
        ],
        points: ["More precise classification of selected tumours.", "Information that may guide treatment discussions.", "Support for multidisciplinary review and selected clinical trial assessment."],
      },
      {
        title: "Understanding your pathology report",
        paragraphs: [
          "Pathology reports can contain technical terms and measurements. Ask your treating doctor to explain the diagnosis, grade, biomarker results, whether the sample was sufficient and whether any additional tests are pending.",
          "If you are seeking a second opinion, ask how to obtain the pathology report, glass slides or digital images and any available tissue blocks, following the laboratory's process.",
        ],
        points: [],
      },
    ],
    faqs: [
      { question: "Is pathology the same as molecular testing?", answer: "No. Pathology includes examination of cells and tissues to diagnose and classify disease. Molecular testing is a specialised group of tests that examines selected molecular features and may form part of a pathology work-up." },
      { question: "Does everyone with cancer need genomic profiling?", answer: "No. The usefulness of molecular testing varies by cancer type, stage, available tissue and treatment question. Your specialist can explain whether a test is likely to add useful information." },
      { question: "Does finding a mutation mean targeted therapy will work?", answer: "Not necessarily. The significance of a finding depends on the tumour type and available evidence. A molecular result may inform a discussion, but it cannot guarantee response to a medicine." },
    ],
    closing: "Pathology and molecular diagnostics can add important detail to a cancer diagnosis. Your care team can help interpret the findings and explain how they may influence your treatment discussions.",
  },
];

export const screeningDiagnosticsOverview = {
  title: "Screening & Diagnostics",
  description:
    "Screening and diagnostic services play an important role in understanding health concerns, identifying suspicious changes and building an accurate picture of a diagnosis. Explore the four areas below to learn what each service involves and how it may support clinical decision-making.",
};
