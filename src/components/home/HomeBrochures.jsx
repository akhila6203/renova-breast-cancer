
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  Stethoscope,
  HeartHandshake,
  ArrowUpRight,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: Search,
    number: "01",
    tag: "CANCER AWARENESS & PREVENTION",
    title: "Understand cancer and its risk factors",
    description:
      "Learn about different types of cancer, common risk factors, lifestyle choices and the importance of awareness in supporting better health.",
    link: "/services/cancer-types",
    linkText: "Explore cancer types",
  },
  {
    icon: Stethoscope,
    number: "02",
    tag: "EARLY DETECTION & DIAGNOSIS",
    title: "Recognise signs and understand screening",
    description:
      "Understand possible warning signs, recommended screening approaches and diagnostic tests that help healthcare professionals evaluate cancer.",
    link: "/services/screening-diagnostics",
    linkText: "Explore screening & diagnosis",
  },
  {
    icon: HeartHandshake,
    number: "03",
    tag: "TREATMENT & PATIENT SUPPORT",
    title: "Navigate your cancer care journey",
    description:
      "Explore cancer treatment options, personalised care planning, recovery, emotional wellbeing and support for patients and their families.",
    link: "/services/treatments",
    linkText: "Discover cancer treatments",
  },
];

export default function HomeBrochures() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-6 sm:py-10 lg:py-14">

      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-[#dfeae0]/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#fce8dc]/60 blur-3xl"
      />

      <div className="page-container relative">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#b94c1c]">
            CANCER CARE RESOURCES
          </p>

          <h2 className="display-font text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl">
            Knowledge and Support at Every Step of Your Cancer Journey
          </h2>

          <p className="mt-4 text-[16px] leading-7 text-[#425b4c] sm:text-[17px]">
            Explore reliable information about cancer awareness, early
            detection, diagnosis, treatment and supportive care to make
            informed decisions about your health.
          </p>
        </motion.div>

        {/* RESOURCE CARDS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 28,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                whileHover={reduceMotion ? {} : { y: -7 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#dfe8de] bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-[#c8d9c9] hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center justify-between">

                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7eee7] text-[#304b3c] transition-colors duration-300 group-hover:bg-[#304b3c] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </span>

                  <span className="text-3xl font-bold text-[#dce6dc]">
                    {item.number}
                  </span>

                </div>

                <p className="mt-6 text-xs font-bold tracking-[0.15em] text-[#b94c1c]">
                  {item.tag}
                </p>

                <h3 className="display-font mt-2 text-xl font-semibold leading-snug text-[#304b3c]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-[16px] leading-7 text-[#304b3c] sm:text-[18px]">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-[#304b3c] transition-colors hover:text-[#b94c1c]"
                >
                  {item.linkText}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                {/* <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#3D5A47] transition-all duration-500 group-hover:w-full" /> */}

              </motion.article>
            );
          })}
        </div>

        {/* CANCER CARE SUPPORT NOTE */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.2 }}
          className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center justify-center gap-4 rounded-2xl border border-[#dfe8de] bg-white/90 p-5 text-center shadow-sm sm:p-6 lg:flex-row lg:gap-6 lg:text-left"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
            <ShieldCheck size={25} />
          </span>

          <p className="flex-1 text-[15px] leading-7 text-[#304b3c] sm:text-[18px]">
            Cancer awareness and information can help you make informed
            health decisions. This content is for general awareness and
            does not replace professional medical advice. Always consult
            a qualified healthcare professional about health concerns.
          </p>

          <Link
            to="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#304b3c] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D5A47] hover:shadow-md"
          >
            Contact Us
            <Activity size={18} />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}











// import { motion, useReducedMotion } from "framer-motion";
// import {
//   HeartPulse,
//   Search,
//   Stethoscope,
//   HeartHandshake,
//   ArrowUpRight,
//   ShieldCheck,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import SectionTitle from "../SectionTitle";

// const resources = [
//   {
//     icon: Search,
//     number: "01",
//     tag: "EARLY DETECTION",
//     title: "Know the signs",
//     description:
//       "Learn about breast changes to look out for, including lumps, changes in shape, skin changes or unusual nipple discharge.",
//     link: "/services",
//     linkText: "Explore early detection",
//   },
//   {
//     icon: Stethoscope,
//     number: "02",
//     tag: "SCREENING & DIAGNOSIS",
//     title: "Understand your screening",
//     description:
//       "Discover how breast examinations and recommended screening tests can help healthcare professionals assess breast health.",
//     link: "/services",
//     linkText: "Learn about screening",
//   },
//   {
//     icon: HeartHandshake,
//     number: "03",
//     tag: "CARE & SUPPORT",
//     title: "Navigate your care journey",
//     description:
//       "Explore general information about treatment discussions, recovery, emotional wellbeing and support for patients and families.",
//     link: "/about",
//     linkText: "Discover our approach",
//   },
// ];

// export default function HomeBrochures() {
//   const reduceMotion = useReducedMotion();

//   return (
//     // <section className="relative overflow-hidden bg-[#f7f9f6] py-16 sm:py-20 lg:py-24">
//     <section className="relative overflow-hidden  py-16 sm:py-20 lg:py-24">
//       {/* Decorative background elements */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-[#dfeae0]/70 blur-3xl"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#fce8dc]/60 blur-3xl"
//       />

//       <div className="page-container relative">
//         <motion.div
//           initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.55 }}
//         >
//           <SectionTitle
//             eyebrow="BREAST HEALTH RESOURCES"
//             title="Knowledge and support for every step"
//             description="Understand breast health, learn about early detection and explore the care journey with clear, supportive information."
//           />
//         </motion.div>

//         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {resources.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.article
//                 key={item.number}
//                 initial={{
//                   opacity: 0,
//                   y: reduceMotion ? 0 : 28,
//                 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: reduceMotion ? 0 : index * 0.12,
//                 }}
//                 whileHover={reduceMotion ? {} : { y: -7 }}
//                 className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#dfe8de] bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-[#c8d9c9] hover:shadow-xl sm:p-7"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7eee7] text-[#304b3c] transition-colors duration-300 group-hover:bg-[#304b3c] group-hover:text-white">
//                     <Icon size={27} strokeWidth={1.8} />
//                   </span>

//                   <span className="text-3xl font-bold text-[#dce6dc]">
//                     {item.number}
//                   </span>
//                 </div>

//                 <p className="mt-6 text-xs font-bold tracking-[0.15em] text-[#b94c1c]">
//                   {item.tag}
//                 </p>

//                 <h3 className="display-font mt-2 text-xl font-semibold leading-snug text-[#304b3c]">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 flex-1 text-[16px] leading-7 text-[#304b3c]">
//                   {item.description}
//                 </p>

//                 <Link
//                   to={item.link}
//                   className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-[#304b3c] transition-colors hover:text-[#b94c1c]"
//                 >
//                   {item.linkText}
//                   <ArrowUpRight
//                     size={18}
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>

//                 <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#3D5A47] transition-all duration-500 group-hover:w-full" />
//               </motion.article>
//             );
//           })}
//         </div>

//         {/* Support note */}
//         <motion.div
//           initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.2 }}
//           className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center justify-center gap-4 rounded-2xl border border-[#dfe8de] bg-white/90 p-5 text-center shadow-sm sm:p-6 lg:flex-row lg:gap-6 lg:text-left"
//           // className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#dfe8de] bg-white/90 p-5 sm:flex-row sm:items-center sm:p-6"
//         >
//           <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
//             <ShieldCheck size={25} />
//           </span>

//           <p className="flex-1 text-[15px] leading-7 text-[#304b3c]">
//             This information is for general awareness and does not replace
//             professional medical advice.<br/> If you notice a breast change or have
//             concerns, consult a qualified healthcare professional.
//           </p>

//           <Link
//   to="/contact"
//   className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#304b3c] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D5A47] hover:shadow-md"
// >
//   Contact Us
//   <HeartPulse size={18} />
// </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



