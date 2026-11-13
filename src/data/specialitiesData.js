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
    faqs: [
  {
    question: "What is Medical Oncology?",
    answer: "Medical Oncology is a speciality focused on treating cancer using medicines such as chemotherapy, immunotherapy, targeted therapy and hormone therapy.",
  },
  {
    question: "What treatments are available in Medical Oncology?",
    answer: "Treatment options may include chemotherapy, immunotherapy, targeted therapy, hormone therapy and other specialised medicines, depending on the cancer type and individual clinical needs.",
  },
  {
    question: "How does a Medical Oncologist decide which treatment is suitable?",
    answer: "The medical oncologist considers the cancer type and stage, biomarker or molecular test results, previous treatments and the patient's overall health before recommending a treatment plan.",
  },
  {
    question: "What is chemotherapy?",
    answer: "Chemotherapy uses medicines to destroy cancer cells or control their growth. It may be recommended alone or alongside other cancer treatments.",
  },
  {
    question: "What is immunotherapy?",
    answer: "Immunotherapy helps the body's immune system recognise and fight cancer cells. It may be suitable for selected types of cancer.",
  },
  {
    question: "What is targeted therapy?",
    answer: "Targeted therapy uses medicines that act on specific molecular changes involved in cancer growth. Biomarker testing may help identify patients who could benefit.",
  },
  {
    question: "What is hormone therapy?",
    answer: "Hormone therapy, also called endocrine therapy, uses medicines to block or reduce the effects of hormones that may support the growth of certain cancers.",
  },
  {
    question: "What is precision oncology?",
    answer: "Precision oncology uses information about the molecular and genetic characteristics of a tumour to help guide treatment decisions.",
  },
  {
    question: "When should I consult a Medical Oncologist?",
    answer: "You may consult a medical oncologist following a cancer diagnosis, when medicine-based treatment is being considered, when reviewing treatment response or when seeking another specialist opinion.",
  },
  {
    question: "Can I get a second opinion from a Medical Oncologist?",
    answer: "Yes. A medical oncology consultation can help you understand your diagnosis, review available treatment options and discuss whether another treatment approach may be appropriate.",
  },
  {
    question: "Does every cancer patient need chemotherapy?",
    answer: "No. Treatment depends on the cancer type, stage, molecular characteristics and individual clinical needs. Some patients may benefit from immunotherapy, targeted therapy or hormone therapy instead.",
  },
  {
    question: "Why are biomarker and molecular tests important?",
    answer: "These tests identify specific characteristics of cancer cells that may help doctors understand the disease and determine whether certain targeted treatments or other specialised therapies may be suitable.",
  },
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
    faqs: [
  {
    question: "What is Surgical Oncology?",
    answer: "Surgical Oncology is a speciality focused on the surgical treatment and management of cancer. Surgical oncologists evaluate tumours and determine whether surgery may be suitable as part of a patient's cancer treatment.",
  },
  {
    question: "When is surgery recommended for cancer?",
    answer: "Surgery may be recommended to remove a tumour, assess the extent of cancer, obtain tissue for diagnosis or relieve symptoms. The decision depends on the cancer type, location, stage and overall health of the patient.",
  },
  {
    question: "What types of cancer surgery are available?",
    answer: "Cancer surgery may include open surgery, minimally invasive procedures, laparoscopic surgery, thoracoscopic surgery, robotic-assisted surgery and organ-preserving procedures, depending on the patient's condition.",
  },
  {
    question: "What is minimally invasive cancer surgery?",
    answer: "Minimally invasive surgery uses small incisions and specialised instruments to perform selected surgical procedures. Laparoscopic and thoracoscopic surgeries are examples of minimally invasive approaches.",
  },
  {
    question: "What is robotic-assisted cancer surgery?",
    answer: "Robotic-assisted surgery uses specialised technology that allows surgeons to control surgical instruments with enhanced visualisation and precision. It may be considered for selected patients depending on the cancer type and surgical requirements.",
  },
  {
    question: "What is organ-preserving cancer surgery?",
    answer: "Organ-preserving surgery aims to remove cancer while retaining as much normal organ function as safely possible. Its suitability depends on the tumour's location, size and clinical characteristics.",
  },
  {
    question: "What is reconstructive cancer surgery?",
    answer: "Reconstructive cancer surgery aims to restore the appearance or function of an area affected by cancer removal. It may be performed during the initial operation or as a separate procedure, depending on individual needs.",
  },
  {
    question: "What is cytoreductive surgery?",
    answer: "Cytoreductive surgery involves removing as much visible cancer tissue as possible from selected areas of the body. It may be considered for certain cancers involving the abdominal cavity.",
  },
  {
    question: "What is HIPEC in cancer treatment?",
    answer: "HIPEC stands for Hyperthermic Intraperitoneal Chemotherapy. It involves delivering heated chemotherapy directly into the abdominal cavity, generally following cytoreductive surgery in carefully selected patients.",
  },
  {
    question: "Is cancer surgery always the only treatment required?",
    answer: "No. Depending on the cancer type and stage, surgery may be combined with chemotherapy, radiation therapy, targeted therapy or immunotherapy as part of a wider treatment plan.",
  },
  {
    question: "When should I consult a Surgical Oncologist?",
    answer: "You may consult a surgical oncologist when surgery is being considered, when a tumour requires surgical assessment or when you would like another opinion about available surgical treatment options.",
  },
  {
    question: "How does a Surgical Oncologist decide whether surgery is suitable?",
    answer: "The surgical oncologist reviews the cancer diagnosis, tumour location, stage, imaging findings, biopsy reports and the patient's overall health before discussing suitable surgical options.",
  },
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
    faqs: [
  {
    question: "What is Radiation Oncology?",
    answer: "Radiation Oncology is a speciality that uses carefully planned high-energy radiation to destroy cancer cells, control tumour growth or relieve cancer-related symptoms.",
  },
  {
    question: "When is radiation therapy recommended?",
    answer: "Radiation therapy may be recommended to treat cancer, reduce the risk of recurrence after surgery, shrink a tumour before surgery or help relieve symptoms. Its use depends on the cancer type and treatment goals.",
  },
  {
    question: "What are the different types of radiation therapy?",
    answer: "Radiation treatment techniques include external beam radiation therapy, 3D conformal radiation therapy, IMRT, IGRT, VMAT, SRS, SBRT, brachytherapy and adaptive radiotherapy.",
  },
  {
    question: "What is IMRT?",
    answer: "Intensity-Modulated Radiation Therapy (IMRT) is an advanced radiation technique that adjusts the intensity of radiation beams to shape the dose around the planned treatment area.",
  },
  {
    question: "What is IGRT?",
    answer: "Image-Guided Radiation Therapy (IGRT) uses imaging during treatment to help verify the patient's position and improve the accuracy of radiation delivery.",
  },
  {
    question: "What is VMAT?",
    answer: "Volumetric Modulated Arc Therapy (VMAT) delivers radiation while the treatment machine rotates around the patient. It allows radiation intensity to be adjusted during delivery according to the treatment plan.",
  },
  {
    question: "What are SRS and SBRT?",
    answer: "Stereotactic Radiosurgery (SRS) delivers highly focused radiation to selected targets, commonly in the brain. Stereotactic Body Radiotherapy (SBRT), also called SABR, delivers focused radiation to selected targets outside the brain.",
  },
  {
    question: "What is brachytherapy?",
    answer: "Brachytherapy is an internal radiation treatment in which a radiation source is placed inside or close to the tumour to deliver radiation to the treatment area.",
  },
  {
    question: "What is adaptive radiotherapy?",
    answer: "Adaptive radiotherapy allows the clinical team to review and modify a radiation treatment plan when changes in the tumour or surrounding anatomy occur during treatment.",
  },
  {
    question: "What are the possible side effects of radiation therapy?",
    answer: "Side effects depend on the treatment area, radiation dose and individual response. Some patients may experience fatigue, skin changes or other effects specific to the treated body area. The radiation oncology team explains the expected side effects before treatment.",
  },
  {
    question: "Can radiation therapy be combined with other cancer treatments?",
    answer: "Yes. Radiation therapy may be used alongside surgery, chemotherapy, immunotherapy or other treatments, depending on the cancer type and individual treatment plan.",
  },
  {
    question: "Is radiation therapy suitable for every cancer patient?",
    answer: "No. The suitability of radiation therapy depends on the cancer type, stage, location, treatment objectives, patient's overall health and clinical assessment.",
  },
  {
    question: "When should I consult a Radiation Oncologist?",
    answer: "You may consult a radiation oncologist when radiotherapy is being considered as part of your cancer treatment, after surgery, for stereotactic treatment or for symptom management.",
  },
  {
    question: "How is the appropriate radiation treatment technique selected?",
    answer: "The radiation oncologist evaluates the cancer type, location, stage, tumour characteristics, nearby organs and treatment goals before recommending an appropriate radiation technique.",
  },
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
    faqs: [
  {
    question: "What is Haemato-Oncology?",
    answer: "Haemato-Oncology is a speciality focused on diagnosing and treating cancers of the blood, bone marrow and lymphatic system. These include leukaemia, lymphoma and multiple myeloma.",
  },
  {
    question: "What types of cancers are treated under Haemato-Oncology?",
    answer: "Haemato-Oncology deals with several blood cancers, including leukaemia, Hodgkin and non-Hodgkin lymphoma, multiple myeloma and other haematological malignancies.",
  },
  {
    question: "What are the common treatments for blood cancers?",
    answer: "Treatment may include chemotherapy, targeted therapy, immunotherapy, monoclonal antibodies, bispecific antibodies and stem cell transplantation. The recommended approach depends on the specific cancer and the patient's condition.",
  },
  {
    question: "What is chemotherapy for blood cancer?",
    answer: "Chemotherapy uses medicines to destroy cancer cells or control their growth. It may be given alone or in combination with other treatments, depending on the type of blood cancer.",
  },
  {
    question: "What is targeted therapy?",
    answer: "Targeted therapy uses medicines that act on specific features of cancer cells involved in their growth and survival. It may be recommended for certain blood cancers based on diagnostic and molecular test results.",
  },
  {
    question: "What is immunotherapy?",
    answer: "Immunotherapy is a treatment that helps the body's immune system recognise and fight cancer cells. It may be considered for selected blood cancers depending on the diagnosis.",
  },
  {
    question: "What are monoclonal and bispecific antibodies?",
    answer: "These are specialised medicines used to help the immune system recognise or target cancer cells. Their suitability depends on the type of blood cancer and individual treatment requirements.",
  },
  {
    question: "What is stem cell transplantation?",
    answer: "Stem cell transplantation is a treatment that replaces damaged or diseased blood-forming stem cells with healthy stem cells. It may be considered for certain blood cancers following specialist assessment.",
  },
  {
    question: "What is CAR T-cell therapy?",
    answer: "CAR T-cell therapy is a specialised form of immunotherapy in which a patient's T-cells are modified to recognise and attack cancer cells. It may be suitable for selected blood cancers, depending on clinical eligibility and treatment availability.",
  },
  {
    question: "When should I consult a Haemato-Oncologist?",
    answer: "You may need to consult a Haemato-Oncologist if you have been diagnosed with a blood cancer, have unexplained blood-count abnormalities requiring specialist assessment, or need advice about treatment or stem cell transplantation.",
  },
  {
    question: "Do all blood cancers require the same treatment?",
    answer: "No. Treatment varies according to the type of blood cancer, its stage or risk category, test results, overall health and individual treatment needs.",
  },
  {
    question: "Can I seek a second opinion for a blood cancer diagnosis?",
    answer: "Yes. A second opinion from a Haemato-Oncologist can help you understand your diagnosis, review available treatment options and discuss whether transplantation or other specialised treatments may be appropriate.",
  },
  {
    question: "What tests may be required to diagnose blood cancer?",
    answer: "Tests may include blood tests, bone marrow examination, imaging, lymph node biopsy and specialised molecular or genetic tests. The tests recommended depend on the suspected or confirmed blood cancer.",
  },
  {
    question: "Is stem cell transplantation suitable for every blood cancer patient?",
    answer: "No. Stem cell transplantation is considered only for selected patients. Suitability depends on the type of cancer, disease status, overall health and availability of a suitable treatment approach.",
  },
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
    faqs: [
  {
    question: "What is Gynaecological Oncology?",
    answer: "Gynaecological Oncology is a speciality focused on diagnosing and treating cancers affecting the female reproductive system, including the ovaries, cervix, uterus, endometrium, vulva and vagina.",
  },
  {
    question: "What types of cancers are treated under Gynaecological Oncology?",
    answer: "This speciality deals with ovarian cancer, cervical cancer, uterine cancer, endometrial cancer, vulvar cancer and vaginal cancer.",
  },
  {
    question: "What are the treatment options for gynaecological cancers?",
    answer: "Treatment may include cancer surgery, chemotherapy, radiation therapy, targeted therapy and immunotherapy. The treatment plan depends on the cancer type, stage and individual health requirements.",
  },
  {
    question: "When should I consult a Gynaecological Oncologist?",
    answer: "You should consider consulting a Gynaecological Oncologist following a diagnosis or if further specialist assessment is recommended for a suspected cancer of the female reproductive system.",
  },
  {
    question: "What is gynaecological cancer surgery?",
    answer: "Gynaecological cancer surgery involves removing cancerous tissue or affected organs, depending on the type and extent of the cancer. The surgical approach is determined by the specialist team.",
  },
  {
    question: "Is chemotherapy used to treat gynaecological cancers?",
    answer: "Yes. Chemotherapy may be recommended to destroy cancer cells, control their growth or reduce the risk of recurrence. It may be used before or after surgery or as part of the main treatment.",
  },
  {
    question: "What is radiation therapy for gynaecological cancers?",
    answer: "Radiation therapy uses high-energy radiation to destroy cancer cells or control tumour growth. It may be used alone or alongside other treatments, depending on the diagnosis and treatment plan.",
  },
  {
    question: "What is MR-Guided Adaptive Brachytherapy?",
    answer: "MR-guided adaptive brachytherapy is a specialised form of internal radiation therapy that uses MRI imaging to help guide treatment planning and delivery. It may be considered for selected gynaecological cancers, particularly cervical cancer.",
  },
  {
    question: "What are targeted therapy and immunotherapy?",
    answer: "Targeted therapy uses medicines that act on specific features of cancer cells. Immunotherapy helps the immune system recognise and fight cancer. These treatments may be suitable for selected patients depending on the cancer type and test results.",
  },
  {
    question: "Are genetic and molecular tests important in gynaecological cancer care?",
    answer: "Genetic and molecular assessments may help identify inherited cancer risks or specific tumour characteristics. The results can support treatment decisions and help determine whether certain targeted treatments may be appropriate.",
  },
  {
    question: "Can gynaecological cancer treatment affect fertility?",
    answer: "Some treatments may affect fertility, depending on the cancer type, treatment and organs involved. Patients who wish to preserve their fertility should discuss available options with their specialist team before starting treatment.",
  },
  {
    question: "What is survivorship support after cancer treatment?",
    answer: "Survivorship support focuses on follow-up care, managing long-term treatment effects, emotional well-being and overall health after cancer treatment.",
  },
  {
    question: "Can gynaecological cancers be treated with a combination of treatments?",
    answer: "Yes. Some patients may need a combination of surgery, chemotherapy and radiation therapy. The treatment sequence is planned according to the cancer diagnosis and individual clinical needs.",
  },
  {
    question: "Can I seek a second opinion for a gynaecological cancer diagnosis?",
    answer: "Yes. A second opinion can help you understand your diagnosis, review treatment recommendations and explore suitable options with a specialist.",
  },
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
    faqs: [
  {
    question: "What is Paediatric Oncology?",
    answer: "Paediatric Oncology is a speciality focused on diagnosing and treating cancers in children and adolescents. It includes medical care, treatment planning and supportive care throughout the child's cancer journey.",
  },
  {
    question: "What types of cancer affect children?",
    answer: "Some childhood cancers include leukaemia, lymphoma, brain and spinal cord tumours, bone tumours and other solid tumours.",
  },
  {
    question: "What are the treatment options for childhood cancer?",
    answer: "Treatment may include chemotherapy, cancer surgery, targeted therapy, immunotherapy and radiation therapy when appropriate. Stem cell transplantation may also be considered for selected conditions.",
  },
  {
    question: "When should I consult a Paediatric Oncologist?",
    answer: "You should consider consulting a Paediatric Oncologist if your child has been diagnosed with cancer, requires specialist assessment for a suspected condition or if you would like another medical opinion.",
  },
  {
    question: "Is childhood cancer treated differently from adult cancer?",
    answer: "Yes. Treatment for children is planned according to their age, cancer type, disease characteristics and overall health. The care team also considers the child's growth, development and emotional needs.",
  },
  {
    question: "What is chemotherapy for children?",
    answer: "Chemotherapy uses medicines to destroy cancer cells or control their growth. It may be given alone or alongside other treatments, depending on the child's diagnosis and treatment plan.",
  },
  {
    question: "Is surgery used to treat childhood cancer?",
    answer: "Yes. Surgery may be recommended to remove a tumour or affected tissue when appropriate. The decision depends on the tumour's location, type and extent, as well as the child's overall condition.",
  },
  {
    question: "What are targeted therapy and immunotherapy?",
    answer: "Targeted therapy uses medicines that act on specific features of cancer cells. Immunotherapy helps the immune system recognise and fight cancer. These treatments may be suitable for selected childhood cancers.",
  },
  {
    question: "Is radiation therapy used for children?",
    answer: "Radiation therapy may be recommended for certain childhood cancers. The decision is made carefully, considering the child's age, cancer type, treatment goals and potential effects on growth and development.",
  },
  {
    question: "What is stem cell transplantation in childhood cancer?",
    answer: "Stem cell transplantation is a treatment that replaces damaged or diseased blood-forming stem cells with healthy stem cells. It may be considered for selected conditions, depending on the child's diagnosis and clinical suitability.",
  },
  {
    question: "Why is nutrition and supportive care important during treatment?",
    answer: "Good nutrition and supportive care help address treatment-related challenges and support the child's general well-being. Care may include dietary guidance, symptom management and support for treatment-related side effects.",
  },
  {
    question: "How are parents and families supported during childhood cancer treatment?",
    answer: "Family-centred care may include psychological support, guidance about treatment, rehabilitation and help with the emotional challenges of a cancer diagnosis. Parents and caregivers are important partners throughout the child's care journey.",
  },
  {
    question: "Can childhood cancer treatment affect a child's growth and development?",
    answer: "Some treatments may have short-term or long-term effects on growth, development or general health. The care team considers these factors during treatment planning and follow-up.",
  },
  {
    question: "Can I seek a second opinion about my child's cancer diagnosis?",
    answer: "Yes. A second opinion can help you understand your child's diagnosis, review the recommended treatment plan and discuss other appropriate treatment options with a specialist.",
  },
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
    faqs: [
  {
    question: "What is Neuro-Oncology?",
    answer: "Neuro-Oncology is a speciality focused on diagnosing and treating tumours affecting the brain, spinal cord and nervous system. These tumours may be benign or malignant.",
  },
  {
    question: "What types of tumours are treated under Neuro-Oncology?",
    answer: "Neuro-Oncology deals with different types of brain and nervous system tumours, including brain tumours, spinal cord tumours, gliomas, meningiomas, pituitary tumours and other tumours affecting the nervous system.",
  },
  {
    question: "What are the treatment options for brain and spinal tumours?",
    answer: "Treatment may include neurosurgery, radiation therapy, stereotactic radiosurgery, chemotherapy and targeted therapy for selected tumours. The treatment plan depends on the tumour type, location, size and individual clinical assessment.",
  },
  {
    question: "When should I consult a Neuro-Oncologist?",
    answer: "You may consider consulting a Neuro-Oncologist following a brain or spinal tumour diagnosis, when treatment planning is required or when you need another specialist opinion.",
  },
  {
    question: "Are all brain tumours cancerous?",
    answer: "No. Brain tumours may be benign (non-cancerous) or malignant (cancerous). Even benign tumours may require treatment depending on their location, size and effect on surrounding structures.",
  },
  {
    question: "How are brain and spinal tumours diagnosed?",
    answer: "Diagnosis may involve neurological assessment, MRI or CT scans, biopsy and laboratory examination of tumour tissue. Molecular testing may also be recommended to help classify certain tumours and guide treatment decisions.",
  },
  {
    question: "What is a brain tumour biopsy?",
    answer: "A biopsy is a procedure in which a small sample of tumour tissue is collected for examination. It can help identify the tumour type and provide information that may guide treatment planning.",
  },
  {
    question: "What is molecular diagnosis in Neuro-Oncology?",
    answer: "Molecular diagnosis involves testing tumour tissue for specific genetic or molecular changes. These findings can help classify certain tumours and may support decisions about suitable treatment options.",
  },
  {
    question: "What is stereotactic radiosurgery?",
    answer: "Stereotactic radiosurgery is a highly focused form of radiation treatment that delivers radiation to a specific target. Despite its name, it does not involve a surgical incision and may be considered for selected brain tumours.",
  },
  {
    question: "Is radiation therapy used to treat brain tumours?",
    answer: "Yes. Radiation therapy may be recommended to treat certain brain tumours, control tumour growth or reduce the risk of recurrence. The approach depends on the tumour type, location and treatment goals.",
  },
  {
    question: "Is chemotherapy used for brain tumours?",
    answer: "Chemotherapy may be recommended for certain brain tumours, either alone or alongside other treatments. Its suitability depends on the tumour type and its clinical characteristics.",
  },
  {
    question: "What is targeted therapy for brain tumours?",
    answer: "Targeted therapy uses medicines that act on specific molecular changes involved in tumour growth. It may be considered for selected tumours when relevant molecular findings are identified.",
  },
  {
    question: "Why is a multidisciplinary team important in Neuro-Oncology?",
    answer: "Brain and spinal tumours may require input from neurosurgeons, radiation oncologists, medical oncologists, neuroradiologists and pathologists. A coordinated approach helps the team review diagnosis and treatment options.",
  },
  {
    question: "Is rehabilitation needed after treatment for a brain or spinal tumour?",
    answer: "Some patients may benefit from neurological rehabilitation to address difficulties with movement, balance, speech, memory or daily activities. Rehabilitation needs depend on the tumour, treatment and individual recovery.",
  },
  {
    question: "Can I seek a second opinion for a brain or spinal tumour diagnosis?",
    answer: "Yes. A second opinion can help you better understand the diagnosis, review available treatment options and discuss an appropriate care plan with specialists.",
  },
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
    faqs: [
  {
    question: "What is Onco-Radiology?",
    answer: "Onco-Radiology is a speciality that uses medical imaging to help detect, diagnose, stage and monitor cancer. It plays an important role in treatment planning and assessing how a patient responds to treatment.",
  },
  {
    question: "What imaging tests are used in cancer diagnosis?",
    answer: "Different imaging techniques may be used, depending on the suspected cancer and clinical requirements. These include CT scans, MRI scans, PET/CT scans, ultrasound and mammography, where relevant.",
  },
  {
    question: "What is a CT scan, and why is it used in cancer care?",
    answer: "A CT scan uses X-rays to create detailed cross-sectional images of the body. It can help identify tumours, assess their size and location, determine the extent of disease and support treatment planning.",
  },
  {
    question: "What is an MRI scan used for in cancer diagnosis?",
    answer: "MRI uses magnetic fields and radio waves to produce detailed images of internal body structures. It may be used to assess tumours, particularly in the brain, spine, soft tissues and other areas.",
  },
  {
    question: "What is a PET/CT scan?",
    answer: "A PET/CT scan combines metabolic information from PET imaging with detailed anatomical images from CT. It may help detect areas of abnormal activity, assess cancer spread and evaluate treatment response in selected cases.",
  },
  {
    question: "What is the role of ultrasound in cancer care?",
    answer: "Ultrasound uses sound waves to create images of internal organs and tissues. It may help assess lumps or abnormalities, examine certain organs and guide biopsy procedures.",
  },
  {
    question: "What is mammography?",
    answer: "Mammography is a specialised breast imaging technique that uses low-dose X-rays to examine breast tissue. It may be used for breast cancer screening or to investigate breast symptoms.",
  },
  {
    question: "What is an image-guided biopsy?",
    answer: "An image-guided biopsy uses imaging techniques such as ultrasound, CT or other suitable methods to guide a needle to an area of concern and collect a tissue sample for examination.",
  },
  {
    question: "What is cancer staging, and why is imaging important?",
    answer: "Cancer staging helps determine the extent of cancer in the body. Imaging tests can help assess tumour size, nearby structures and possible spread to other parts of the body, supporting treatment decisions.",
  },
  {
    question: "What is PSMA PET imaging?",
    answer: "PSMA PET is a specialised molecular imaging technique that targets prostate-specific membrane antigen (PSMA). It may be used in selected patients with prostate cancer to assess the location and extent of disease.",
  },
  {
    question: "What is somatostatin-receptor PET imaging?",
    answer: "Somatostatin-receptor PET is a specialised imaging technique that helps identify tumours expressing somatostatin receptors, particularly certain neuroendocrine tumours. Its use depends on the diagnosis and clinical indication.",
  },
  {
    question: "Can imaging help monitor cancer treatment response?",
    answer: "Yes. Imaging may be used during or after treatment to assess changes in tumour size, activity or extent of disease. The type and timing of scans depend on the cancer and treatment plan.",
  },
  {
    question: "Are imaging tests required for every cancer patient?",
    answer: "No. The imaging tests recommended depend on the suspected or confirmed cancer, symptoms, clinical findings and treatment requirements. The treating specialist determines which investigations are appropriate.",
  },
  {
    question: "How should I prepare for a cancer imaging test?",
    answer: "Preparation varies depending on the imaging test. Some scans may require fasting, contrast administration or specific instructions. Patients should follow the guidance provided by the radiology team and inform them about allergies, pregnancy or relevant medical conditions.",
  },
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
    faqs: [
  {
    question: "What is Nuclear Medicine?",
    answer: "Nuclear Medicine is a speciality that uses small amounts of radioactive materials, known as radiopharmaceuticals, to help diagnose and treat certain diseases, including cancer. It provides information about biological processes and how organs and tissues function.",
  },
  {
    question: "What is Theranostics in cancer treatment?",
    answer: "Theranostics combines targeted imaging with targeted radionuclide therapy. It helps specialists identify specific molecular targets in cancer cells and, in selected patients, use a corresponding treatment directed at those targets.",
  },
  {
    question: "What is the difference between PET/CT and SPECT/CT?",
    answer: "Both are nuclear medicine imaging techniques. PET/CT uses positron-emitting radiopharmaceuticals, while SPECT/CT uses gamma-emitting radiopharmaceuticals. Both combine functional information with anatomical imaging to support diagnosis and treatment planning.",
  },
  {
    question: "What is PSMA-targeted imaging?",
    answer: "PSMA-targeted imaging uses a radiopharmaceutical that binds to prostate-specific membrane antigen (PSMA). It may help identify and assess prostate cancer in selected patients.",
  },
  {
    question: "What is somatostatin-receptor imaging?",
    answer: "Somatostatin-receptor imaging uses specialised radiopharmaceuticals to identify tumours that express somatostatin receptors. It is commonly used in the assessment of selected neuroendocrine tumours.",
  },
  {
    question: "What is Radioiodine Therapy?",
    answer: "Radioiodine therapy uses radioactive iodine to treat selected thyroid conditions, including certain thyroid cancers. The treatment is taken up by thyroid cells, allowing radiation to act on the targeted tissue.",
  },
  {
    question: "What is Lu-177 PSMA Therapy?",
    answer: "Lu-177 PSMA therapy is a targeted radionuclide treatment used for selected patients with prostate cancer. It uses a radioactive medicine that binds to PSMA-expressing cancer cells and delivers radiation to those cells.",
  },
  {
    question: "What is Lu-177 DOTATATE or DOTANOC Therapy?",
    answer: "Lu-177 DOTATATE or DOTANOC therapy is a targeted radionuclide treatment used for selected neuroendocrine tumours that express somatostatin receptors. It delivers radiation to cells that take up the targeted radiopharmaceutical.",
  },
  {
    question: "What is Y-90 Radioembolisation?",
    answer: "Y-90 radioembolisation is a specialised treatment that delivers tiny radioactive particles through blood vessels to selected liver tumours. It may be considered for certain patients following specialist assessment.",
  },
  {
    question: "Who may be suitable for Theranostics treatment?",
    answer: "Suitability depends on the cancer type, disease extent, molecular target expression, previous treatments and overall health. Specialist imaging and clinical assessment help determine whether a patient may benefit.",
  },
  {
    question: "Are nuclear medicine scans safe?",
    answer: "Nuclear medicine scans use carefully selected amounts of radiopharmaceuticals. The benefits and potential risks are assessed before the procedure. Patients should inform the team about pregnancy, breastfeeding, allergies and relevant medical conditions.",
  },
  {
    question: "How should I prepare for a nuclear medicine scan or treatment?",
    answer: "Preparation depends on the specific scan or treatment. Some procedures may require fasting, medication adjustments or other instructions. Patients should follow the guidance provided by the nuclear medicine team.",
  },
  {
    question: "Can Theranostics be used for every type of cancer?",
    answer: "No. Theranostics is suitable only for selected cancers that express the relevant molecular target. Specialist assessment and appropriate imaging are required before treatment is considered.",
  },
  {
    question: "Can I seek a second opinion about Nuclear Medicine or Theranostics treatment?",
    answer: "Yes. A specialist consultation can help you understand your imaging results, review treatment eligibility and discuss whether a targeted radionuclide treatment may be appropriate.",
  },
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
    faqs: [
  {
    question: "What is Interventional Oncology?",
    answer: "Interventional Oncology is a speciality that uses image-guided minimally invasive procedures to diagnose and treat selected tumours. These procedures use imaging techniques to guide needles, catheters or other specialised instruments to the treatment area.",
  },
  {
    question: "What types of cancers can be treated with Interventional Oncology procedures?",
    answer: "Interventional Oncology procedures may be used for selected liver, kidney, lung, bone and other tumours. Suitability depends on the tumour type, size, location, stage and the patient's overall health.",
  },
  {
    question: "What is tumour ablation?",
    answer: "Tumour ablation is a minimally invasive procedure that uses techniques such as heat or cold to destroy selected tumour tissue. It may be considered for certain cancers depending on the tumour's characteristics and location.",
  },
  {
    question: "What is Radiofrequency Ablation (RFA)?",
    answer: "Radiofrequency Ablation uses electrical energy to generate heat and destroy targeted tumour tissue. It is performed under imaging guidance and may be suitable for selected tumours.",
  },
  {
    question: "What is Microwave Ablation?",
    answer: "Microwave Ablation uses microwave energy to produce heat within a tumour and destroy cancer cells. It may be considered for selected liver and other tumours following specialist assessment.",
  },
  {
    question: "What is Cryoablation?",
    answer: "Cryoablation is a minimally invasive treatment that uses extremely cold temperatures to freeze and destroy targeted tumour tissue. Its suitability depends on the tumour type, size and location.",
  },
  {
    question: "What is Transarterial Chemoembolisation (TACE)?",
    answer: "TACE is a procedure in which chemotherapy medicines and embolic material are delivered through blood vessels supplying a tumour. It is commonly considered for selected patients with liver cancer.",
  },
  {
    question: "What is Radioembolisation?",
    answer: "Radioembolisation is a treatment that delivers tiny radioactive particles through blood vessels to selected liver tumours. It may help deliver radiation directly to the treatment area in carefully selected patients.",
  },
  {
    question: "What is tumour embolisation?",
    answer: "Tumour embolisation involves blocking or reducing blood flow to selected tumours by delivering specialised materials through blood vessels. It may be used as part of cancer treatment or to help manage certain tumour-related symptoms.",
  },
  {
    question: "What is an image-guided biopsy?",
    answer: "An image-guided biopsy uses imaging techniques such as ultrasound or CT to guide a needle to an area of concern and collect a tissue sample. The sample is examined to help establish a diagnosis.",
  },
  {
    question: "Are Interventional Oncology procedures minimally invasive?",
    answer: "Many Interventional Oncology procedures are minimally invasive and are performed using small skin punctures rather than large surgical incisions. The approach and recovery depend on the specific procedure and the patient's condition.",
  },
  {
    question: "When should I consult an Interventional Oncologist?",
    answer: "You may consult an Interventional Oncologist when an image-guided biopsy, tumour ablation, embolisation or another minimally invasive cancer procedure is being considered. A specialist consultation can help determine whether a procedure is suitable.",
  },
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
    faqs: [
  {
    question: "What is Preventive Oncology?",
    answer: "Preventive Oncology focuses on reducing cancer risk through awareness, risk assessment, evidence-based prevention strategies and appropriate screening or early-detection guidance.",
  },
  {
    question: "Can cancer be prevented?",
    answer: "Not all cancers can be prevented. However, certain lifestyle changes, vaccinations, avoiding tobacco, reducing exposure to known risk factors and following appropriate screening recommendations may help lower the risk of some cancers.",
  },
  {
    question: "What are the common risk factors for cancer?",
    answer: "Cancer risk factors may include tobacco use, alcohol consumption, certain infections, family history, inherited genetic changes, excess body weight, physical inactivity and exposure to certain environmental factors. Risk varies depending on the cancer type.",
  },
  {
    question: "What is cancer screening?",
    answer: "Cancer screening involves testing people who do not have symptoms to identify certain cancers or precancerous changes at an earlier stage. Recommended screening depends on age, sex, personal health history and individual risk.",
  },
  {
    question: "Which cancer screening tests may be recommended?",
    answer: "Depending on individual risk and eligibility, screening may include mammography for breast cancer, cervical screening tests and colorectal cancer screening. A specialist can help determine which tests are appropriate.",
  },
  {
    question: "When should I start cancer screening?",
    answer: "The recommended age and timing for screening vary according to the cancer type, personal risk factors, family history and applicable clinical guidelines. It is best to discuss an appropriate screening schedule with a healthcare professional.",
  },
  {
    question: "Does a family history of cancer increase my risk?",
    answer: "A family history of certain cancers may increase the likelihood of inherited cancer risk. The significance depends on the type of cancer, the number of affected relatives and their ages at diagnosis. Genetic counselling may be recommended in selected cases.",
  },
  {
    question: "What is genetic counselling for cancer prevention?",
    answer: "Genetic counselling helps individuals understand inherited cancer risks, the possible benefits and limitations of genetic testing and appropriate risk-management options based on their family and personal history.",
  },
  {
    question: "Can vaccination help prevent cancer?",
    answer: "Certain vaccinations can help prevent infections associated with some cancers. HPV vaccination helps protect against HPV-related cancers, while hepatitis B vaccination helps reduce the risk of hepatitis B infection and associated liver cancer.",
  },
  {
    question: "How does tobacco use increase cancer risk?",
    answer: "Tobacco contains harmful substances that can damage cells and increase the risk of several cancers, including cancers of the lung, mouth, throat and other organs. Avoiding tobacco and seeking cessation support can help reduce these risks.",
  },
  {
    question: "Can a healthy lifestyle reduce cancer risk?",
    answer: "Healthy habits such as maintaining a healthy body weight, staying physically active, eating a balanced diet, avoiding tobacco and limiting alcohol may help reduce the risk of certain cancers.",
  },
  {
    question: "When should I consult a Preventive Oncologist?",
    answer: "You may consult a Preventive Oncologist for cancer risk assessment, screening guidance, family history evaluation, genetic counselling referrals, vaccination guidance or advice about reducing cancer risk. Any concerning symptoms should be medically evaluated rather than waiting for a routine screening test.",
  },
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
    faqs: [
  {
    question: "What is Palliative & Supportive Care?",
    answer: "Palliative and supportive care focuses on improving the quality of life of people living with cancer by managing pain, symptoms, treatment-related side effects and emotional or practical challenges.",
  },
  {
    question: "When should a cancer patient receive palliative care?",
    answer: "Palliative care can be introduced at any stage of cancer and may be provided alongside active cancer treatments such as chemotherapy, radiation therapy or surgery. It is not limited to end-of-life care.",
  },
  {
    question: "Does palliative care mean stopping cancer treatment?",
    answer: "No. Palliative care does not mean stopping cancer treatment. It can be provided together with treatments intended to control or treat cancer while helping manage symptoms and improve comfort.",
  },
  {
    question: "What symptoms can palliative care help manage?",
    answer: "Palliative care may help manage pain, nausea, vomiting, fatigue, breathlessness, appetite changes, sleep difficulties and other symptoms associated with cancer or its treatment.",
  },
  {
    question: "How is cancer-related pain managed?",
    answer: "Cancer-related pain may be managed using appropriate medicines, supportive therapies and other interventions depending on its cause and severity. The care team develops an individualised pain-management plan.",
  },
  {
    question: "Can palliative care help with chemotherapy and radiation side effects?",
    answer: "Yes. Supportive care can help manage treatment-related effects such as nausea, fatigue, appetite changes, pain and other symptoms. The approach depends on the treatment and the patient's needs.",
  },
  {
    question: "Is nutritional support part of palliative care?",
    answer: "Yes. Nutritional guidance may help address appetite changes, difficulty eating, weight loss and other nutrition-related concerns. Advice is tailored to the patient's condition, symptoms and treatment requirements.",
  },
  {
    question: "Does palliative care include emotional and psychological support?",
    answer: "Yes. Palliative and supportive care may include emotional support, counselling and guidance to help patients and families cope with stress, anxiety and the challenges associated with cancer.",
  },
  {
    question: "How does palliative care support family members and caregivers?",
    answer: "Palliative care can provide families and caregivers with guidance about symptom management, care needs, communication and emotional challenges. It helps them understand how to support the patient during the cancer journey.",
  },
  {
    question: "Can rehabilitation help cancer patients during treatment?",
    answer: "Yes. Rehabilitation may help patients manage fatigue, weakness, mobility difficulties and functional limitations. The rehabilitation plan depends on the patient's health, treatment and individual goals.",
  },
  {
    question: "What is advance-care planning?",
    answer: "Advance-care planning involves discussing a person's values, preferences and wishes regarding future medical care. These discussions can help patients, families and healthcare professionals make informed decisions when appropriate.",
  },
  {
    question: "When should I consult a Palliative Care Specialist?",
    answer: "You may consult a Palliative Care Specialist if you experience cancer-related pain, difficult symptoms, treatment side effects, emotional distress, nutritional concerns or quality-of-life challenges. Support can be helpful at any stage of cancer care.",
  },
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