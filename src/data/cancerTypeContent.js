import breastImage from "../assets/services1.jpg";
import lungImage from "../assets/home/diagnostic-imaging1.jpg";
import headNeckImage from "../assets/home/assessment.jpg";

export const cancerTypes = [
  {
    slug: "breast-cancer",
relatedTechnologySlugs: [
  "3d-mammography",
  "deep-inspiration-breath-hold",
  "breast-health-initiative",
],
    title: "Breast Cancer",
    category: "CANCER TYPE",
    image: breastImage,
    imageAlt: "Breast cancer care and awareness",
    cardDescription:
      "Learn about breast cancer, possible warning signs, diagnostic tests and individual treatment options.",
    overview:
      "No one should have to face breast cancer alone. At RENOVA Cancer Hospital, we believe every patient deserves compassionate care, clear guidance and support throughout their journey. You may be reading this because you or someone you care about has been diagnosed with breast cancer. Understanding possible signs, risk factors and available treatment options can help you feel better prepared to speak with your healthcare team.",
    overviewSecond:
  "Breast cancer can develop in one or both breasts and may affect people differently. Some breast cancers grow slowly, while others may grow more quickly. The specific type, grade and stage help doctors understand how the cancer may behave and which treatment options may be appropriate. A specialist may also consider hormone receptor and HER2 test results when planning treatment.",

overviewThird:
  "A diagnosis can bring many questions and concerns. Understanding your test results, discussing available options and receiving guidance from an experienced cancer care team can help you take the next steps with greater confidence. Your care plan should be based on your individual diagnosis, health and preferences.",
      whatIs:
      "Breast cancer develops when abnormal cells in the breast grow uncontrollably. These cells can form a tumour and may begin in the milk ducts or milk-producing lobules. Different types of breast cancer are identified according to the cells where the cancer begins. Although breast cancer mainly affects women, it can also occur in men, although this is uncommon.",
    types: [
      "Ductal cancers begin in the cells lining the milk ducts.",
      "Lobular cancers begin in the milk-producing lobules.",
    ],
    symptomsIntro:
      "A breast lump, swelling or changes in the skin or nipple can be possible signs of breast cancer. Symptoms may vary from person to person, and some people may not notice symptoms in the early stages.",
    symptoms: [
      "A new lump or thickening in the breast or underarm.",
      "A change in the size or shape of one breast.",
      "Swelling or redness in the breast.",
      "Skin changes such as dimpling, scaling or thickening.",
      "Unusual nipple discharge that is not breast milk.",
      "A nipple that turns inward or develops redness, scaling or thickening.",
    ],
    diagnosisIntro:
      "Breast cancer diagnosis involves examining breast changes and using imaging tests to identify abnormalities. Tests such as mammograms, ultrasound scans and breast MRI may help doctors examine breast tissue. If an abnormal area is found, a biopsy may be recommended to check for cancer cells.",
    diagnosisSteps: [
      {
        title: "Physical Examination",
        description:
          "A doctor examines the breasts and nearby lymph nodes to check for lumps, swelling or other unusual changes.",
      },
      {
        title: "Imaging Tests",
        description:
          "Imaging tests help doctors examine breast tissue and identify abnormal areas.",
        points: [
          "Mammogram: Uses X-rays to examine breast tissue.",
          "Breast ultrasound: Uses sound waves to examine breast lumps or other changes.",
          "Breast MRI: Provides detailed images of breast tissue in selected cases.",
        ],
      },
      {
        title: "Breast Biopsy",
        description:
          "If imaging tests show an area of concern, a small sample of breast tissue may be collected and examined in a laboratory to determine whether cancer cells are present.",
      },
      {
        title: "Further Assessment",
        description:
          "If breast cancer is confirmed, additional tests may be recommended to understand the type and extent of the cancer and help guide treatment planning.",
      },
    ],
    diagnosisClosing:
      "Accurate diagnosis is an important step in choosing appropriate breast cancer treatment. Your specialist will explain the test results and discuss the next steps based on your individual condition.",
    treatmentIntro:
      "Breast cancer treatment depends on the type and stage of cancer, test results and the patient's overall health. Treatment may involve surgery, chemotherapy, radiotherapy, hormone therapy or targeted therapy. Some patients may require a combination of treatments.",
    treatments: [
      {
        title: "Breast Cancer Surgery",
        description:
          "Surgery may be recommended to remove cancerous tissue from the breast. Common procedures include:",
        points: [
          "Lumpectomy: Removes the tumour along with a small margin of surrounding tissue while preserving most of the breast.",
          "Mastectomy: Involves removing the entire breast when clinically appropriate.",
          "Lymph node surgery: May involve examining or removing nearby lymph nodes to check whether cancer has spread.",
        ],
      },
      {
        title: "Chemotherapy",
        description:
          "Chemotherapy uses medicines to destroy cancer cells or slow their growth. It may be recommended before or after surgery, depending on the patient's condition.",
      },
      {
        title: "Radiotherapy",
        description:
          "Radiotherapy uses high-energy radiation to destroy cancer cells. It may be recommended after surgery or in other clinical situations.",
      },
      {
        title: "Hormone Therapy",
        description:
          "Hormone therapy helps treat breast cancers that use hormones such as oestrogen or progesterone to grow.",
      },
      {
        title: "Targeted Therapy",
        description:
          "Targeted therapy uses medicines that act on specific features of cancer cells. It may be suitable for certain types of breast cancer.",
      },
    ],
    treatmentFactors: [
      "Type and stage of breast cancer.",
      "Size and location of the tumour.",
      "Whether cancer has spread.",
      "Hormone receptor and HER2 test results.",
      "The patient's overall health and treatment preferences.",
    ],
    riskFactors: [
      "Age: Risk generally increases with age.",
      "Family history: Breast cancer in close relatives may increase risk.",
      "Genetic factors: Inherited changes in genes such as BRCA1 and BRCA2.",
      "Personal history: Previous breast cancer or certain breast conditions.",
      "Hormonal and lifestyle factors: Certain hormonal influences, alcohol consumption and excess body weight after menopause.",
    ],
    prevention:
      "Not all breast cancers can be prevented. However, maintaining a healthy lifestyle, understanding your risk and discussing appropriate screening with a healthcare professional can help support breast health.",
    faqs: [
      {
        question: "What is the first sign of breast cancer?",
        answer:
          "A new lump or thickening in the breast or underarm can be an early sign. However, symptoms may vary between individuals.",
      },
      {
        question: "Can men develop breast cancer?",
        answer: "Yes. Although uncommon, breast cancer can also affect men.",
      },
      {
        question: "Is every breast lump cancerous?",
        answer:
          "No. Many breast lumps are benign (non-cancerous). A medical examination and appropriate tests can help identify the cause.",
      },
      {
        question: "How is breast cancer diagnosed?",
        answer:
          "Diagnosis may involve a physical examination, mammogram, ultrasound, MRI and breast biopsy.",
      },
      {
        question: "Is breast cancer treatable?",
        answer:
          "Many breast cancers can be treated successfully. Treatment options depend on the type, stage and individual clinical circumstances.",
      },
      {
        question: "Does breast cancer always require surgery?",
        answer:
          "No. Treatment varies depending on the diagnosis. Some patients may receive other treatments, while others may require a combination of approaches.",
      },
      {
        question: "Can breast cancer return after treatment?",
        answer:
          "Breast cancer can sometimes return after treatment. Follow-up appointments help monitor a patient's health and identify any concerns.",
      },
    ],
    closing:
      "At RENOVA Cancer Hospital, our aim is to help patients understand their diagnosis and explore appropriate treatment options through specialist assessment and personalised care planning.",
  },

  {
    slug: "lung-cancer",
relatedTechnologySlugs: [
  "radixact-x9-tomotherapy",
  "ai-assisted-adaptive-radiotherapy",
  "versa-hd",
  "molecular-oncology",
],
    title: "Lung Cancer",
    category: "CANCER TYPE",
    image: lungImage,
    imageAlt: "Diagnostic imaging equipment used in medical assessment",
    cardDescription:
      "Understand lung cancer types, possible symptoms, diagnostic procedures and available treatment approaches.",
    overview:
      "Lung cancer can affect smokers and non-smokers. Learning about possible symptoms, risk factors and diagnostic tests can help patients seek medical advice and understand the next steps in their care.",
    overviewSecond:
  "Lung cancer does not affect everyone in the same way. Its behaviour and treatment depend on the type of cells involved, the location of the tumour and whether the disease has spread. The two main groups are non-small cell lung cancer and small cell lung cancer. Further pathology and molecular tests may help doctors understand the cancer more clearly.",

overviewThird:
  "Some people may experience symptoms such as a persistent cough or breathlessness, while others may have no noticeable symptoms in the early stages. If you notice persistent or unusual changes in your health, seek medical advice. A specialist can review your symptoms, recommend appropriate investigations and explain the next steps in your care.",
      whatIs:
      "Lung cancer develops when abnormal cells in the lungs grow uncontrollably and form a tumour. These cells can affect normal lung function and may spread to other parts of the body.",
    types: [
      "Non-Small Cell Lung Cancer (NSCLC): The most common type, which includes several subtypes.",
      "Small Cell Lung Cancer (SCLC): A less common type that often grows and spreads more quickly.",
    ],
    symptomsIntro:
      "Lung cancer may cause different symptoms depending on its location and stage. Some people may not experience noticeable symptoms in the early stages.",
    symptoms: [
      "A persistent or worsening cough.",
      "Coughing up blood or blood-stained mucus.",
      "Chest pain or discomfort.",
      "Shortness of breath.",
      "Unexplained weight loss.",
      "Persistent tiredness or weakness.",
      "Repeated chest infections.",
    ],
    diagnosisIntro:
      "Lung cancer diagnosis involves examining symptoms and using different tests to identify abnormal areas in the lungs. Doctors may recommend tests depending on the patient's symptoms, medical history and examination findings.",
    diagnosisSteps: [
      {
        title: "Physical Examination",
        description:
          "A doctor reviews the patient's symptoms, medical history and overall health.",
      },
      {
        title: "Imaging Tests",
        description:
          "Imaging tests help identify abnormal areas in the lungs and assess the extent of the disease.",
        points: [
          "Chest X-ray: Helps identify unusual changes in the lungs.",
          "CT scan: Provides detailed images of the lungs and surrounding structures.",
          "PET-CT scan: Helps assess areas of increased metabolic activity and evaluate possible cancer spread.",
          "MRI scan: May be used to examine selected areas, including the brain, when needed.",
        ],
      },
      {
        title: "Bronchoscopy",
        description:
          "A procedure that allows doctors to examine the airways and collect tissue or cell samples when required.",
      },
      {
        title: "Lung Biopsy",
        description:
          "A small tissue sample is collected and examined in a laboratory to determine whether cancer cells are present.",
      },
      {
        title: "Further Assessment",
        description:
          "Additional tests may help identify the type and stage of lung cancer and specific molecular changes that can guide treatment planning.",
      },
    ],
    diagnosisClosing:
      "Accurate diagnosis helps specialists understand the type and extent of lung cancer and plan appropriate treatment. Your doctor will explain the test results and discuss the next steps based on your individual condition.",
    treatmentIntro:
      "Lung cancer treatment depends on the type and stage of cancer, test results and the patient's overall health. Treatment may involve surgery, chemotherapy, radiotherapy, targeted therapy or immunotherapy. Some patients may require a combination of treatments.",
    treatments: [
      {
        title: "Surgery",
        description:
          "Surgery may be recommended for selected patients to remove cancerous lung tissue. The type of surgery depends on the tumour's location and extent.",
      },
      {
        title: "Chemotherapy",
        description:
          "Chemotherapy uses medicines to destroy cancer cells or slow their growth. It may be used alone or alongside other treatments.",
      },
      {
        title: "Radiotherapy",
        description:
          "Radiotherapy uses high-energy radiation to destroy cancer cells or control tumour growth.",
      },
      {
        title: "Targeted Therapy",
        description:
          "Targeted therapy uses medicines that act on specific molecular changes or features of cancer cells. It may be suitable for certain types of lung cancer.",
      },
      {
        title: "Immunotherapy",
        description:
          "Immunotherapy helps the immune system recognise and fight cancer cells. It may be recommended for selected patients.",
      },
    ],
    treatmentFactors: [
      "The type and stage of lung cancer.",
      "The size and location of the tumour.",
      "Whether cancer has spread.",
      "Molecular and biomarker test results.",
      "The patient's overall health and treatment preferences.",
    ],
    riskFactors: [
      "Smoking: Cigarette smoking is a major risk factor.",
      "Second-hand smoke: Exposure to other people's tobacco smoke.",
      "Environmental exposure: Contact with substances such as asbestos and radon.",
      "Air pollution: Long-term exposure to polluted air may increase risk.",
      "Family history: Having close relatives with lung cancer may contribute to risk.",
      "Workplace exposure: Exposure to certain harmful chemicals and substances.",
    ],
    prevention:
      "Not all lung cancers can be prevented. However, avoiding smoking and tobacco products, avoiding second-hand smoke, reducing exposure to harmful workplace substances and following appropriate safety precautions may help reduce risk. Discuss individual risk factors with a healthcare professional.",
    faqs: [
      {
        question: "What is the main cause of lung cancer?",
        answer:
          "Smoking is the leading risk factor for lung cancer. However, lung cancer can also develop in people who have never smoked.",
      },
      {
        question: "Can non-smokers develop lung cancer?",
        answer:
          "Yes. Lung cancer can affect non-smokers due to factors such as air pollution, second-hand smoke, environmental exposure and genetic factors.",
      },
      {
        question: "What are the early signs of lung cancer?",
        answer:
          "A persistent cough, chest discomfort, shortness of breath and unexplained weight loss may be possible symptoms. Some people may not experience early symptoms.",
      },
      {
        question: "How is lung cancer diagnosed?",
        answer:
          "Diagnosis may involve imaging tests such as chest X-rays and CT scans, followed by a biopsy when required.",
      },
      {
        question: "Is lung cancer treatable?",
        answer:
          "Treatment options depend on the type, stage and individual clinical circumstances. Treatment may help control the disease and, in some cases, achieve a cure.",
      },
      {
        question: "Does every lung cancer patient need surgery?",
        answer:
          "No. Surgery is suitable for selected patients. Other treatment options include chemotherapy, radiotherapy, targeted therapy and immunotherapy.",
      },
      {
        question: "Can lung cancer spread to other parts of the body?",
        answer:
          "Yes. Lung cancer can spread to other organs, including the brain, bones, liver and adrenal glands.",
      },
    ],
    closing:
      "At RENOVA Cancer Hospital, our aim is to support patients with clear guidance, personalised care planning and compassionate support throughout their cancer journey.",
  },

  {
    slug: "head-neck-cancers",
relatedTechnologySlugs: [
  "radixact-x9-tomotherapy",
  "ai-assisted-adaptive-radiotherapy",
  "versa-hd",
  "molecular-oncology",
  "robotic-surgery",
],
    title: "Head and Neck Cancers",
    category: "CANCER TYPE",
    image: headNeckImage,
    imageAlt: "Doctor discussing a patient's assessment and care",
    cardDescription:
      "Explore cancers affecting areas such as the mouth, throat, voice box, nose, sinuses and salivary glands.",
    overview:
      "Understanding head and neck cancers is an important step towards informed care. At RENOVA Cancer Hospital, we believe every patient deserves compassionate care, clear guidance and support throughout their cancer journey. Learning about possible symptoms, risk factors and available treatment options can help patients recognise unusual changes, seek timely medical advice and make informed decisions.",
    overviewSecond:
  "Head and neck cancers include several different conditions, and the symptoms and treatment approach depend on the area where the cancer begins. These cancers may affect important functions such as speaking, swallowing, breathing and eating. Identifying the exact location and type of cancer helps the healthcare team plan suitable treatment.",

overviewThird:
  "A persistent mouth ulcer, voice change, neck swelling or difficulty swallowing should be assessed by a healthcare professional, especially when it does not improve. Early medical evaluation can help identify the cause and determine whether further tests are needed. Patients may receive care from a multidisciplinary team based on their individual diagnosis.",
      whatIs:
      "Head and neck cancers are a group of cancers that develop in different areas of the head and neck. They commonly begin in the cells lining the mouth, throat, voice box, nose and sinuses.",
    types: [
      "Oral cancer.",
      "Throat cancer.",
      "Laryngeal (voice box) cancer.",
      "Nasal and sinus cancer.",
      "Salivary gland cancer.",
    ],
    symptomsIntro:
      "Symptoms may vary depending on the affected area. Common signs and symptoms include:",
    symptoms: [
      "A persistent sore throat.",
      "A lump or swelling in the neck.",
      "Mouth ulcers that do not heal.",
      "Difficulty or pain while swallowing.",
      "Persistent hoarseness or voice changes.",
      "Unexplained bleeding in the mouth or nose.",
      "Persistent ear pain.",
      "A white or red patch inside the mouth.",
    ],
    diagnosisIntro:
      "Diagnosis involves examining the affected area and identifying abnormal changes through appropriate tests.",
    diagnosisSteps: [
      {
        title: "Physical Examination",
        description:
          "A doctor examines the mouth, throat, neck and other affected areas for unusual changes or swelling.",
      },
      {
        title: "Imaging Tests",
        description: "Imaging tests may include:",
        points: [
          "CT scan: Provides detailed images of the affected area.",
          "MRI scan: Helps examine soft tissues and surrounding structures.",
          "PET-CT scan: May help assess the extent of cancer.",
        ],
      },
      {
        title: "Endoscopy",
        description:
          "A specialised instrument with a camera may be used to examine areas such as the throat, voice box or nasal passages.",
      },
      {
        title: "Biopsy",
        description:
          "A tissue sample is collected and examined in a laboratory to determine whether cancer cells are present.",
      },
      {
        title: "Further Assessment",
        description:
          "Additional tests may help determine the type, stage and extent of cancer to guide treatment planning.",
      },
    ],
    diagnosisClosing:
      "Accurate diagnosis helps specialists understand the condition and plan appropriate treatment based on individual clinical needs.",
    treatmentIntro:
      "Treatment depends on the cancer type, location, stage and the patient's overall health. Treatment may involve surgery, radiotherapy, chemotherapy, targeted therapy or immunotherapy.",
    treatments: [
      {
        title: "Surgery",
        description:
          "Surgery may be recommended to remove cancerous tissue from the affected area.",
      },
      {
        title: "Radiotherapy",
        description:
          "Radiotherapy uses high-energy radiation to destroy cancer cells or control tumour growth.",
      },
      {
        title: "Chemotherapy",
        description:
          "Chemotherapy uses medicines to destroy cancer cells or slow their growth.",
      },
      {
        title: "Targeted Therapy",
        description:
          "Targeted therapy uses medicines that act on specific features of certain cancer cells.",
      },
      {
        title: "Immunotherapy",
        description:
          "Immunotherapy helps the immune system recognise and fight certain cancers.",
      },
    ],
    treatmentFactors: [
      "The cancer type and location.",
      "The stage and extent of the cancer.",
      "The patient's overall health.",
      "Pathology and biomarker findings, where relevant.",
      "The patient's individual clinical needs and preferences.",
    ],
    riskFactors: [
      "Tobacco use: Smoking and chewing tobacco are major risk factors.",
      "Alcohol consumption: Regular heavy alcohol consumption can increase risk.",
      "HPV infection: Certain types of human papillomavirus are associated with some throat cancers.",
      "Betel quid and areca nut: Chewing these products can increase the risk of oral cancer.",
      "Sun exposure: Prolonged exposure to sunlight can increase the risk of lip cancer.",
    ],
    prevention:
      "Not all head and neck cancers can be prevented. Avoiding tobacco products, limiting or avoiding alcohol, avoiding betel quid and areca nut products, discussing HPV vaccination with a healthcare professional, protecting the lips from excessive sun exposure and seeking advice for persistent mouth or throat changes may help reduce risk.",
    faqs: [
      {
        question: "What are head and neck cancers?",
        answer:
          "They are cancers that develop in areas such as the mouth, throat, voice box, nose and salivary glands.",
      },
      {
        question: "What is the most common sign of head and neck cancer?",
        answer:
          "A persistent mouth ulcer, neck lump, sore throat or difficulty swallowing may be a possible warning sign.",
      },
      {
        question: "Can tobacco cause head and neck cancers?",
        answer:
          "Yes. Smoking and chewing tobacco significantly increase the risk of several head and neck cancers.",
      },
      {
        question: "Are head and neck cancers treatable?",
        answer:
          "Treatment options depend on the cancer type, location and stage. Some cases can be treated successfully, particularly when diagnosed early.",
      },
      {
        question: "How are head and neck cancers diagnosed?",
        answer:
          "Diagnosis may involve physical examination, imaging tests, endoscopy and biopsy.",
      },
      {
        question: "Which specialists treat head and neck cancers?",
        answer:
          "Treatment may involve surgical oncologists, medical oncologists and radiation oncologists, depending on the patient's needs.",
      },
    ],
    closing:
      "At RENOVA Cancer Hospital, our aim is to support patients with clear guidance, personalised care planning and compassionate support throughout their cancer journey.",
  },
];

export const cancerOverview = {
  title: "What Is Cancer?",
  description:
    "Cancer is a broad group of diseases in which abnormal cells grow in an uncontrolled way. These cells may form a tumour, invade nearby tissues or spread to other parts of the body. Different cancers behave differently, so they may need different tests and treatments.",
  secondParagraph:
    "Understanding the type of cancer, where it began and whether it has spread helps the healthcare team plan the next steps. Diagnosis may involve clinical assessment, imaging, biopsy, pathology and molecular testing, depending on the suspected cancer.",
  image: lungImage,
  imageAlt: "Diagnostic imaging equipment in a clinical setting",
};