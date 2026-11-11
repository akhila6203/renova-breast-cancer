
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BriefcaseMedical, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { doctors } from "../../data/doctorsData";

export default function HomeDoctors() {
  const reduceMotion = useReducedMotion();

  // Home page lo first 4 doctors matrame display avutharu
  const homeDoctors = doctors.slice(0, 4);

  return (
    <section className="section-padding bg-mist">
      <div className="page-container">

        {/* Heading */}
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <span className="text-sm font-bold tracking-[0.18em] text-sky">
            OUR SPECIALISTS
          </span>

          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Meet the Experts Behind Your Care
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#647368] sm:text-lg">
            Meet our experienced oncology specialists, dedicated to
            providing personalised guidance and compassionate cancer care.
          </p>
        </div>

        {/* Doctors Cards - Same design as Doctors Page */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeDoctors.map((doctor, index) => (
            <motion.article
              key={doctor.id}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 22,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              whileHover={reduceMotion ? {} : { y: -5 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:shadow-premium"
            >
              {/* Doctor Image */}
              <Link
                to={`/doctors/${doctor.slug}`}
                aria-label={`View ${doctor.name} profile`}
                className="block overflow-hidden bg-ice"
              >
                <div className="h-[245px] overflow-hidden sm:h-[220px] lg:h-[205px] xl:h-[235px]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Doctor Details */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-display text-lg font-bold leading-snug text-navy">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-base leading-6 text-[#647368]">
                  {doctor.designation}
                </p>

                <p className="mt-1 text-base font-semibold leading-6 text-royal">
                  {doctor.speciality}
                </p>

                <div className="mt-3 space-y-2 text-base text-[#647368]">
                  <p className="flex items-start gap-2">
                    <BriefcaseMedical
                      size={16}
                      className="mt-1 shrink-0 text-royal"
                    />
                    <span>{doctor.experience}+ Years Experience</span>
                  </p>

                  <p className="flex items-start gap-2">
                    <MapPin
                      size={16}
                      className="mt-1 shrink-0 text-royal"
                    />
                    <span>{doctor.location}</span>
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                  <Link
                    to={`/doctors/${doctor.slug}`}
                    className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full border border-royal px-2 py-2 text-center text-sm font-bold text-royal transition hover:bg-royal hover:text-white"
                  >
                    View Profile
                    <ArrowRight size={13} />
                  </Link>

                  <Link
                    to={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-royal bg-royal px-2 py-2 text-center text-sm font-bold text-white transition hover:border-navy hover:bg-navy"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Specialists Button */}
        <div className="mt-9 flex justify-center">
          <Link
            to="/doctors"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Specialists
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}



// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import SectionTitle from "../SectionTitle";
// import { doctors } from "../../data/siteData";

// export default function HomeDoctors() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section className="section-padding bg-mist">
//       <div className="page-container">
//         <SectionTitle
//           eyebrow="MEET THE TEAM"
//           title="Guidance from people who care"
//           description="Specialist profiles shown here come from the website data. Confirm names, qualifications and clinic times with the hospital before publishing."
//         />
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {doctors.map((doctor, index) => (
//             <motion.article
//               key={doctor.name}
//               initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: reduceMotion ? 0 : index * 0.1 }}
//               whileHover={reduceMotion ? {} : { y: -6 }}
//               className="overflow-hidden rounded-3xl bg-white shadow-premium"
//             >
//               <img
//                 src={doctor.image}
//                 alt={`${doctor.name}, ${doctor.role}`}
//                 loading="lazy"
//                 className="h-[260px] w-full object-cover object-top sm:h-[300px]"
//               />
//               <div className="p-6">
//                 <h3 className="display-font text-xl font-semibold text-heading">{doctor.name}</h3>
//                 <p className="mt-2 text-[16px] text-ink">{doctor.role}</p>
//                 <Link
//                   to="/appointments"
//                   className="mt-5 inline-flex items-center gap-2 text-[16px] font-bold text-royal"
//                 >
//                   Request an appointment <ArrowUpRight size={16} />
//                 </Link>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//         <div className="mt-8 text-center">
//           <Link to="/our-team" className="btn-secondary">
//             View our team <ArrowUpRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
