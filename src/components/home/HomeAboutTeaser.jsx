

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import breastCare2 from "../../assets/home/breastCare2.jpg";

export default function HomeAboutTeaser() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-[#f7f9f6]">
      <div className="page-container grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <img
            src={breastCare2}
            alt="Healthcare professional supporting a patient"
            loading="lazy"
            className="relative h-[340px] w-full rounded-[2rem] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.015] sm:h-[390px]"
          />

          <div className="absolute -bottom-5 right-3 max-w-[270px] rounded-2xl border border-[#e1e9df] bg-white p-4 shadow-lg sm:-right-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
                <HeartHandshake size={24} />
              </span>

              <div>
                <p className="font-bold text-[#304b3c]">
                  Care with dignity
                </p>
                <p className="mt-1 text-sm text-[#425b4c]">
                  Support for patients and families
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-2 h-16 w-16 rounded-full bg-[#f26322]/10 sm:-left-5" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full pt-4 lg:pl-2 lg:pt-0"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#f26322]">
            WHO WE ARE
          </p>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl">
            Comprehensive Cancer Care, with People at the Heart of Every Step
          </h2>

          <p className="mt-5 text-[17px] leading-7 text-[#425b4c] sm:text-[18px]">
            A cancer diagnosis can bring many questions and uncertainties.
            At RENOVA Cancer Hospital, we believe every patient deserves
            clear information, compassionate guidance and personalised care.
          </p>

          <p className="mt-3 text-[17px] leading-7 text-[#304b3c] sm:text-[18px]">
            From understanding a diagnosis and exploring treatment options
            to recovery and ongoing support, we focus on helping patients
            and their families navigate each stage of the cancer journey
            with confidence.
          </p>

          <div className="mt-4 flex items-start gap-3">
            <ShieldCheck
              className="mt-1 shrink-0 text-[#f26322]"
              size={23}
            />

            <p className="text-[17px] leading-7 text-[#304b3c] sm:text-[18px]">
              Our approach brings together specialist expertise,
              individualised treatment planning and a commitment to treating
              every patient with dignity, respect and compassion.
            </p>
          </div>

          <Link
            to="/about"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#304b3c] px-3 py-2 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D5A47] hover:shadow-md"
          >
            More About Us

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}












// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowUpRight, HeartHandshake, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";
// import SectionTitle from "../SectionTitle";

// import breastCare2 from "../../assets/home/breastCare2.jpg";

// export default function HomeAboutTeaser() {
//   const reduceMotion = useReducedMotion();

//   return (
//     // <section className="section-padding overflow-hidden bg-[#f7f9f6]">
//       <section className="section-padding bg-[#f7f9f6]">
//       <div className="page-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//         <motion.div
//           initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.65 }}
//           className="relative mx-auto w-full max-w-xl"
//         >
//           {/* <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[3rem] border-l-4 border-t-4 border-[#f26322]/70" /> */}

//           <img
//             src={breastCare2}
//             alt="Healthcare professional supporting a patient"
//             loading="lazy"
//             className="relative h-[340px] w-full rounded-[2rem] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.015] sm:h-[390px]"
//           />

//           <div className="absolute -bottom-5 right-3 max-w-[270px] rounded-2xl border border-[#e1e9df] bg-white p-4 shadow-lg sm:-right-4 sm:p-5">
//             <div className="flex items-center gap-3">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
//                 <HeartHandshake size={24} />
//               </span>
//               <div>
//                 <p className="font-bold text-[#304b3c]">
//                   Care with dignity
//                 </p>
//                 <p className="mt-1 text-sm text-[#425b4c]">
//                   Support for patients and families
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="absolute -bottom-7 -left-2 h-16 w-16 rounded-full bg-[#f26322]/10 sm:-left-5" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.6 }}
//           className="pt-4 lg:pt-0"
//         >
//           <SectionTitle
//             center={false}
//             eyebrow="WHO WE ARE"
//             title="Comprehensive Cancer Care, with People at the Heart of Every Step"
//             description="A cancer diagnosis can bring many questions and uncertainties. At RENOVA Cancer Hospital, we believe every patient deserves clear information, compassionate guidance and personalised care."
//           />

//           <p className="mt-2 text-[17px] leading-6 text-[#304b3c]">
//            From understanding a diagnosis and exploring treatment options to recovery and ongoing support, we focus on helping patients and their families navigate each stage of the cancer journey with confidence.
//           </p>

//           <div className="mt-4 flex items-start gap-3">
//             <ShieldCheck className="mt-1 shrink-0 text-[#f26322]" size={23} />
//             <p className="text-[15px] leading-7 text-[#304b3c]">
//               Our approach brings together specialist expertise, individualised treatment planning and a commitment to treating every patient with dignity, respect and compassion
//             </p>
//           </div>

//           <Link
//             to="/about"
//             className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#304b3c] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D5A47] hover:shadow-md"
//           >
//             More About Us
//             <ArrowUpRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




