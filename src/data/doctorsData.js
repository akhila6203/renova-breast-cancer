import dr1 from "../assets/dr1.jpg";
import dr2 from "../assets/dr2.jpg";
import dr3 from "../assets/dr3.jpg";
import dr4 from "../assets/dr4.jpg";
import dr5 from "../assets/dr5.jpg";

export const oncologySpecialities = [
  "Medical Oncology",
  "Surgical Oncology",
  "Radiation Oncology",
  "Haemato-Oncology",
  "Gynaecological Oncology",
  "Paediatric Oncology",
  "Neuro-Oncology",
  "Interventional Oncology",
];

const sharedVideos = [
  { title: "Understanding cancer: questions to ask your doctor", query: "cancer awareness questions to ask your doctor" },
  { title: "Cancer treatment and supportive care", query: "cancer treatment supportive care patient education" },
  { title: "Healthy living during cancer care", query: "healthy living during cancer treatment" },
];

export const doctors = [
  {
    id: 1, slug: "dr-arjun-mehta", name: "Dr. Arjun Mehta",
    designation: "Senior Consultant – Medical Oncology", speciality: "Medical Oncology",
    experience: 15, gender: "Male", location: "Renova Cancer Centre, Hyderabad",
    image: dr2,
    qualifications: ["MBBS", "MD – General Medicine", "DM – Medical Oncology"],
    about: "Dr. Arjun Mehta focuses on evidence-based cancer care, clear communication and individualised treatment planning. This sample profile is dummy content for UI demonstration only.",
    expertise: ["Chemotherapy planning", "Immunotherapy", "Targeted therapy", "Multidisciplinary cancer care"],
    cancerSpecialties: ["Breast cancer", "Lung cancer", "Gastrointestinal cancers"],
    procedures: ["Systemic therapy assessment", "Treatment response monitoring", "Supportive care planning"],
    education: ["MBBS – Osmania Medical College, Hyderabad (2006)", "MD – General Medicine, Gandhi Medical College (2010)", "DM – Medical Oncology, AIIMS (2014)"],
    professionalExperience: ["Senior Consultant, Renova Cancer Centre (2020–Present)", "Consultant Medical Oncologist (2014–2020)"],
    awards: ["Excellence in Oncology Care – Sample Award (2022)", "Academic Merit Recognition (2014)"],
    memberships: ["Indian Society of Medical and Paediatric Oncology (ISMPO)", "Association of Physicians of India (API)"],
    research: ["Supportive care in systemic cancer treatment – Sample publication", "Patient-centred oncology pathways – Sample presentation"],
    languages: ["English", "Telugu", "Hindi"],
    videos: sharedVideos,
    testimonials: [
      { quote: "The doctor explained every step clearly and helped our family understand the treatment plan.", name: "Patient A", detail: "Patient feedback – sample" },
      { quote: "The team was kind, patient and supportive throughout the appointments.", name: "Patient B", detail: "Patient feedback – sample" },
      { quote: "I appreciated the clear answers and the time taken to discuss my questions.", name: "Patient C", detail: "Patient feedback – sample" },
    ],
  },
  {
    id: 2, slug: "dr-priya-nair", name: "Dr. Priya Nair",
    designation: "Consultant – Surgical Oncology", speciality: "Surgical Oncology",
    experience: 12, gender: "Female", location: "Renova Cancer Centre, Hyderabad",
    image: dr1,
    qualifications: ["MBBS", "MS – General Surgery", "MCh – Surgical Oncology"],
    about: "Dr. Priya Nair's sample profile highlights surgical oncology, shared decision-making and coordinated recovery support.",
    expertise: ["Breast surgery", "Minimally invasive procedures", "Oncoplastic planning", "Post-operative care"],
    cancerSpecialties: ["Breast cancer", "Thyroid cancer", "Head and neck cancers"],
    procedures: ["Breast-conserving surgery", "Mastectomy", "Sentinel lymph node biopsy"],
    education: ["MBBS – Kasturba Medical College (2008)", "MS – General Surgery, Manipal (2012)", "MCh – Surgical Oncology, Tata Memorial Centre (2015)"],
    professionalExperience: ["Consultant Surgical Oncologist, Renova (2021–Present)", "Surgical Oncology Specialist (2015–2021)"],
    awards: ["Young Surgeon Recognition – Sample (2019)", "Best Clinical Presentation – Sample (2017)"],
    memberships: ["Association of Surgeons of India (ASI)", "Indian Association of Surgical Oncology (IASO)"],
    research: ["Breast-conserving approaches – Sample paper", "Surgical recovery pathways – Sample poster"],
    languages: ["English", "Telugu", "Malayalam", "Hindi"],
    videos: sharedVideos,
    testimonials: [
      { quote: "The procedure and recovery expectations were explained in a reassuring way.", name: "Patient D", detail: "Patient feedback – sample" },
      { quote: "I felt included in every discussion about my care.", name: "Patient E", detail: "Patient feedback – sample" },
      { quote: "The follow-up team made the recovery process easier to understand.", name: "Patient F", detail: "Patient feedback – sample" },
    ],
  },
  {
    id: 3, slug: "dr-rohan-kapoor", name: "Dr. Rohan Kapoor",
    designation: "Consultant – Radiation Oncology", speciality: "Radiation Oncology",
    experience: 10, gender: "Male", location: "Renova Cancer Centre, Secunderabad",
    image: dr3,
    qualifications: ["MBBS", "MD – Radiotherapy"],
    about: "Dr. Rohan Kapoor's sample profile focuses on precision radiation treatment, patient education and supportive care.",
    expertise: ["IMRT", "IGRT", "Stereotactic radiotherapy", "Radiation planning"],
    cancerSpecialties: ["Breast cancer", "Prostate cancer", "Head and neck cancers"],
    procedures: ["Radiation simulation", "Treatment planning", "Image-guided radiation therapy"],
    education: ["MBBS – JIPMER (2010)", "MD – Radiotherapy, PGIMER (2014)", "Advanced Radiation Techniques – Sample Fellowship (2015)"],
    professionalExperience: ["Consultant Radiation Oncologist, Renova (2022–Present)", "Radiation Oncologist (2015–2022)"],
    awards: ["Radiation Oncology Academic Award – Sample (2020)"],
    memberships: ["Association of Radiation Oncologists of India (AROI)", "European Society for Radiotherapy and Oncology (ESTRO)"],
    research: ["Precision radiotherapy outcomes – Sample publication", "Image-guided treatment review – Sample abstract"],
    languages: ["English", "Hindi", "Telugu"],
    videos: sharedVideos,
    testimonials: [
      { quote: "The radiation schedule and each visit were explained in simple language.", name: "Patient G", detail: "Patient feedback – sample" },
      { quote: "The care team was organised and approachable.", name: "Patient H", detail: "Patient feedback – sample" },
      { quote: "My questions were answered patiently at every stage.", name: "Patient I", detail: "Patient feedback – sample" },
    ],
  },
  {
    id: 4, slug: "dr-sana-farooqui", name: "Dr. Sana Farooqui",
    designation: "Consultant – Haemato-Oncology", speciality: "Haemato-Oncology",
    experience: 9, gender: "Female", location: "Renova Cancer Centre, Hyderabad",
    image: dr5,
    qualifications: ["MBBS", "MD – General Medicine", "DM – Clinical Haematology"],
    about: "Dr. Sana Farooqui's sample profile demonstrates a specialist page for blood cancers and comprehensive haematology care.",
    expertise: ["Leukaemia care", "Lymphoma", "Myeloma", "Transfusion support"],
    cancerSpecialties: ["Leukaemia", "Lymphoma", "Multiple myeloma"],
    procedures: ["Bone marrow evaluation", "Systemic therapy planning", "Long-term monitoring"],
    education: ["MBBS – Deccan College of Medical Sciences (2011)", "MD – General Medicine, NIMS (2015)", "DM – Clinical Haematology, CMC Vellore (2018)"],
    professionalExperience: ["Consultant Haemato-Oncologist, Renova (2022–Present)", "Clinical Haematology Specialist (2018–2022)"],
    awards: ["Clinical Excellence – Sample Recognition (2021)"],
    memberships: ["Indian Society of Haematology and Blood Transfusion (ISHBT)", "American Society of Hematology (ASH)"],
    research: ["Supportive care in haematological malignancies – Sample paper"],
    languages: ["English", "Urdu", "Hindi", "Telugu"],
    videos: sharedVideos,
    testimonials: [
      { quote: "The treatment options were discussed carefully and clearly.", name: "Patient J", detail: "Patient feedback – sample" },
      { quote: "The staff helped us understand the tests and next steps.", name: "Patient K", detail: "Patient feedback – sample" },
      { quote: "We felt supported during a difficult time.", name: "Patient L", detail: "Patient feedback – sample" },
    ],
  },
  {
    id: 5, slug: "dr-kavya-reddy", name: "Dr. Kavya Reddy",
    designation: "Consultant – Gynaecological Oncology", speciality: "Gynaecological Oncology",
    experience: 11, gender: "Female", location: "Renova Cancer Centre, Hyderabad",
    image: dr4,
    qualifications: ["MBBS", "MS – Obstetrics & Gynaecology", "MCh – Gynaecological Oncology"],
    about: "Dr. Kavya Reddy's sample profile presents a gynaecological oncology specialist with a focus on compassionate, coordinated care.",
    expertise: ["Gynaecological cancer surgery", "Ovarian cancer care", "Cervical cancer care", "Preventive counselling"],
    cancerSpecialties: ["Ovarian cancer", "Cervical cancer", "Endometrial cancer"],
    procedures: ["Staging surgery", "Minimally invasive surgery", "Treatment planning"],
    education: ["MBBS – Andhra Medical College (2007)", "MS – Obstetrics & Gynaecology, KIMS (2011)", "MCh – Gynaecological Oncology, AIIMS (2015)"],
    professionalExperience: ["Consultant Gynaecological Oncologist, Renova (2021–Present)", "Specialist Consultant (2015–2021)"],
    awards: ["Women in Oncology – Sample Recognition (2022)"],
    memberships: ["Federation of Obstetric and Gynaecological Societies of India (FOGSI)", "Indian Association of Gynaecological Oncologists (IAGO)"],
    research: ["Ovarian cancer care pathways – Sample paper", "Cervical cancer awareness – Sample presentation"],
    languages: ["English", "Telugu", "Hindi"],
    videos: sharedVideos,
    testimonials: [
      { quote: "The doctor made sure I understood the diagnosis and available options.", name: "Patient M", detail: "Patient feedback – sample" },
      { quote: "The consultation felt respectful and unhurried.", name: "Patient N", detail: "Patient feedback – sample" },
      { quote: "The team guided us through each appointment.", name: "Patient O", detail: "Patient feedback – sample" },
    ],
  },
];

// Demo media links: replace each YOUR_VIDEO_ID with the ID from an approved YouTube video.
// Example: https://www.youtube.com/watch?v=AbCdEf12345 -> video ID is AbCdEf12345.

const doctorMedia = {
  1: {
    healthTalk: [
      {
        title: "Breast cancer treatment and medical oncology",
        youtubeUrl: "https://youtu.be/dJMSCfV71m4"
      },
      {
        title: "Breast cancer awareness",
        youtubeUrl: "https://youtube.com/shorts/TbMAy4C9jjM?si=f23eLDQ4Es7CEVnV"
      },
      {
        title: "Cancer treatment and supportive care",
        youtubeUrl: "https://youtube.com/shorts/xJhbafsiVd8?si=6L1i3epy_SeOKmFn"
      }
    ],
    testimonialVideos: [
      { title: "Patient story – medical oncology", youtubeUrl: "https://youtube.com/shorts/_DEO7Mbq2nY?si=Hju6p_fFX2nzjMKx" },
      { title: "Patient experience – treatment journey", youtubeUrl: "https://youtube.com/shorts/lxUmjeu-03Q?si=qAjrj9PmdC4B_R-c" },
      { title: "Patient experience – supportive care", youtubeUrl: "https://youtube.com/shorts/KYYc-mrorr8?si=3xPxuhfgqF9t_s6e" }
    ]
  },

  2: {
    healthTalk: [
      {
        title: "Breast cancer surgery and recovery",
        youtubeUrl: "https://youtube.com/shorts/Oew9c2GSRHY?si=pY_ZEotKLEH5pV7G"
      }
    ],
    testimonialVideos: [
      { title: "Patient story – surgical oncology", youtubeUrl: "https://youtube.com/shorts/_DEO7Mbq2nY?si=Hju6p_fFX2nzjMKx" },
      { title: "Patient experience – recovery journey", youtubeUrl: "https://youtube.com/shorts/Idy0B4hQuIg?si=z3NfOmEVM9ZBFHz1" },
      { title: "Patient experience – follow-up care", youtubeUrl: "https://youtube.com/shorts/KYYc-mrorr8?si=3xPxuhfgqF9t_s6e" }
    ]
  },

  3: {
    healthTalk: [
      {
        title: "Radiation therapy awareness and care",
        youtubeUrl: "https://youtu.be/3Wzk5nR1sPY?si=pB9YmjEsq34Mo6oh"
      }
    ],
    testimonialVideos: [
      { title: "Patient story – radiation oncology", youtubeUrl: "https://youtu.be/q8j_vZRZKx0?si=lb-jGjGUvZpgWcbZ" },
      { title: "Patient experience – treatment support", youtubeUrl: "https://youtube.com/shorts/Idy0B4hQuIg?si=z3NfOmEVM9ZBFHz1" },
      { title: "Patient experience – care team", youtubeUrl: "https://youtube.com/shorts/KYYc-mrorr8?si=3xPxuhfgqF9t_s6e" }
    ]
  },

  4: {
    healthTalk: [
      {
        title: "Blood cancer awareness and treatment",
        youtubeUrl: "https://youtube.com/shorts/04_D9Xm8oM0?si=hn2NQ4_xZgpvtRQX"
      },
      {
        title: "Gynaecological cancer awareness",
        youtubeUrl: "https://youtube.com/shorts/QAN4sItChTw?si=wM_0D5Suq-D6bDcv"
      }
    ],
    testimonialVideos: [
      { title: "Patient story – haemato-oncology", youtubeUrl: "https://youtu.be/q8j_vZRZKx0?si=lb-jGjGUvZpgWcbZ" },
      { title: "Patient experience – treatment guidance", youtubeUrl: "https://youtube.com/shorts/t9d5uf9OHS4?si=r4BomgtG-Qoz_N8Y" },
      { title: "Patient experience – supportive care", youtubeUrl: "https://youtube.com/shorts/KYYc-mrorr8?si=3xPxuhfgqF9t_s6e" }
    ]
  },

  5: {
    healthTalk: [
      {
        title: "Gynaecological cancer awareness",
        youtubeUrl: "https://youtube.com/shorts/QAN4sItChTw?si=wM_0D5Suq-D6bDcv"
      }
    ],
    testimonialVideos: [
      { title: "Patient story – gynaecological oncology", youtubeUrl: "https://youtube.com/shorts/t9d5uf9OHS4?si=r4BomgtG-Qoz_N8Y" },
      { title: "Patient experience – care journey", youtubeUrl: "https://youtube.com/shorts/KYYc-mrorr8?si=3xPxuhfgqF9t_s6e" },
      { title: "Patient experience – follow-up support", youtubeUrl: "https://youtube.com/shorts/fDcGb83jRQA?si=eMguQ-WdV0zcwAAR" }
    ]
  }
};


doctors.forEach((doctor) => {
  const media = doctorMedia[doctor.id];
  doctor.healthTalk = media.healthTalk;
  doctor.testimonialVideos = media.testimonialVideos;
  doctor.conferences = [
    "National Oncology Conference – Sample (2024)",
    "Breast Cancer Awareness Workshop – Sample (2023)",
    "International Cancer Care Conference – Sample (2022)",
  ];
});
