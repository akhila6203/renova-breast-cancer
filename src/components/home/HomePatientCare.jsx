
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Apple,
  Activity,
  Accessibility,
  UsersRound,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import patientCare from "../../assets/home/patientCare.jpg";

const supportItems = [
  {
    icon: HeartHandshake,
    title: "Emotional & Psychological Support",
    text: "Support for patients and families in managing the emotional challenges of cancer.",
  },
  {
    icon: Apple,
    title: "Nutrition & Dietary Guidance",
    text: "Guidance on nutritional needs during cancer treatment and recovery.",
  },
  {
    icon: Activity,
    title: "Pain & Symptom Management",
    text: "Personalised support to improve comfort and quality of life.",
  },
  {
    icon: Accessibility,
    title: "Rehabilitation & Recovery",
    text: "Support for strength, mobility and everyday activities.",
  },
  {
    icon: UsersRound,
    title: "Family & Caregiver Support",
    text: "Guidance and practical support for families and caregivers.",
  },
  {
    icon: ShieldCheck,
    title: "Survivorship Care",
    text: "Ongoing support and follow-up after cancer treatment.",
  },
];

export default function HomePatientCare() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding overflow-hidden bg-[#fffdf9]">
      <div className="page-container px-5 sm:px-8 lg:px-12">

        {/* CENTERED SECTION HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 w-full text-center"
        >
          {/* SECTION LABEL */}
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em] text-[#f26322]">
            <span className="h-px w-10 bg-[#f26322]" />
            PATIENT CARE
            <span className="h-px w-10 bg-[#f26322]" />
          </p>

          {/* MAIN HEADING */}
          <h2 className="mx-auto max-w-6xl text-center text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
            Compassionate Support Throughout Your Cancer Journey
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-2 max-w-5xl text-center text-[16px] leading-7 text-[#526457]">
            At Kaizen Oncology Cancer Hospital, we understand that cancer care
            involves more than medical treatment. We support patients
            and their families with guidance, comfort and care throughout
            every stage of their cancer journey.
          </p>
        </motion.div>

        {/* LEFT CARDS - RIGHT IMAGE */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT SIDE - PATIENT SUPPORT CARDS */}
          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 12,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-center text-base font-bold text-[#304b3c] sm:text-left"
            >
              Supporting you at every stage
            </motion.p>

            <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
              {supportItems.map(({ icon: Icon, title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 20,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  whileHover={reduceMotion ? {} : { y: -4 }}
                  className="group flex items-start gap-3 rounded-2xl border border-[#e8eee7] bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#f4c7ae] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f26322] transition-all duration-300 group-hover:bg-[#f26322] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold leading-5 text-[#304b3c] sm:text-base">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-[16px] leading-6 text-[#526457]">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* EXPLORE BUTTON */}
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 12,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-center sm:text-left"
            >
              <Link
                to="/patient-care"
                className="group inline-flex items-center gap-3 rounded-full bg-[#304b3c] px-4 py-1.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f26322] hover:shadow-lg"
              >
                Explore Patient Care

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 25,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* <div className="absolute -right-5 top-8 h-40 w-40 rounded-full bg-[#fff0e7]" /> */}

            {/* <div className="absolute -bottom-4 -left-5 h-28 w-28 rounded-full bg-[#e7eee7]" /> */}

            <div className="relative overflow-hidden rounded-[24px] shadow-lg">
              <img
                src={patientCare}
                alt="Doctor talking with a patient during a consultation"
                loading="lazy"
                className="h-[290px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[390px] lg:h-[460px]"
              />
            </div>

            {/* IMAGE BOTTOM CONTENT - LIMITED WIDTH */}
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 15,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="absolute -bottom-5 left-8 right-8 rounded-2xl border border-[#e5e9e3] bg-white p-4 shadow-lg sm:left-20 sm:right-40 sm:p-5"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-[#f26322]">
                Care beyond treatment
              </p>

              <p className="mt-2 text-lg font-bold text-[#304b3c] sm:text-xl">
                Compassion <span className="text-[#f26322]">·</span> Comfort{" "}
                <span className="text-[#f26322]">·</span> Recovery
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



// import { Link } from "react-router-dom";
// import { ArrowRight, CalendarDays, Heart, UsersRound } from "lucide-react";
// import SectionTitle from "../SectionTitle";

// import patientCare from "../../assets/home/patientCare.jpg";

// const supportItems = [
//   {
//     icon: CalendarDays,
//     title: "Prepare for appointments",
//     text: "Know what to expect and what to bring.",
//   },
//   {
//     icon: UsersRound,
//     title: "Understand treatment options",
//     text: "Get clear information from your care team.",
//   },
//   {
//     icon: Heart,
//     title: "Access ongoing support",
//     text: "Support through recovery and beyond.",
//   },
// ];

// export default function HomePatientCare() {
//   return (
//     <section className="section-padding overflow-hidden bg-[#fffdf9]">
//       <div className="page-container grid items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12">
//         <div className="order-2 lg:order-1">
//           <p className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#f26322]">
//             PATIENT CARE
//             <span className="h-px w-12 bg-[#f26322]" />
//           </p>

//           <div className="mt-4">
//             <SectionTitle
//               center={false}
//               eyebrow="BREAST HEALTH INITIATIVE"
//               title="You don't have to navigate it alone"
//               description="We provide practical guidance throughout appointments, treatment discussions, recovery and ongoing care."
//             />
//           </div>

//           <div className="mt-7 grid gap-5 sm:grid-cols-3 lg:gap-4">
//             {supportItems.map(({ icon: Icon, title, text }) => (
//               <div
//                 key={title}
//                 className="group rounded-2xl p-2 transition duration-300 hover:-translate-y-1"
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0e7] text-[#f26322] transition duration-300 group-hover:bg-[#f26322] group-hover:text-white">
//                   <Icon size={29} strokeWidth={1.7} />
//                 </div>
//                 <h3 className="mt-3 text-[16px] font-semibold leading-6 text-[#304b3c]">
//                   {title}
//                 </h3>
//                 <p className="mt-2 text-[15px] leading-6 text-[#425b4c]">
//                   {text}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <Link
//             to="/patient-care"
//             className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#304b3c] px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D5A47] hover:shadow-lg"
//             // className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#f26322] px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d95116] hover:shadow-lg"
//           >
//             Explore Patient Care
//             <ArrowRight
//               size={19}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </Link>
//         </div>

//         <div className="relative order-1 lg:order-2">
//           <div className="absolute -right-5 top-8 h-40 w-40 rounded-full bg-[#fff0e7]" />
//           <div className="absolute -bottom-4 -left-5 h-28 w-28 rounded-full bg-[#e7eee7]" />

//           <img
//            src={patientCare}
//             // src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
//             alt="Doctor talking with a patient during a consultation"
//             loading="lazy"
//             className="relative h-[290px] w-full rounded-[24px] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.01] sm:h-[390px] lg:h-[460px]"
//           />

//           <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-[#e5e9e3] bg-white p-4 shadow-lg sm:left-8 sm:right-8 sm:p-5">
//             <p className="text-sm font-bold uppercase tracking-wider text-[#f26322]">
//               Care at every stage
//             </p>
//             <p className="mt-2 text-lg font-bold text-[#304b3c] sm:text-xl">
//               B-READY <span className="text-[#f26322]">·</span> B-AHEAD{" "}
//               <span className="text-[#f26322]">·</span> B-YOU
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

