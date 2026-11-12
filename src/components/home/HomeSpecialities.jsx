
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { specialities } from "../../data/specialitiesData";

export default function HomeSpecialities() {
  const reduceMotion = useReducedMotion();

  const homeSpecialities = specialities.slice(0, 4);

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="page-container px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="text-sm font-bold tracking-[0.18em] text-[#E87744]">
            OUR SPECIALITIES
          </span>

          <h2 className="display-font mt-3 text-3xl font-bold text-[#344638] sm:text-4xl lg:text-[42px]">
            Expertise Across the Cancer Journey
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#647368]">
            Our specialist departments bring together clinical expertise
            to support different aspects of cancer care.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#E87744]" />
        </motion.div>

        {/* Speciality Cards */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4">

          {homeSpecialities.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.div
                key={item.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="h-full"
              >
                <Link
                  to={`/specialities/${item.slug}`}
                  className="
                    group relative flex h-[185px] flex-col
                    items-center justify-center overflow-hidden
                    rounded-xl border border-[#e5eae2]
                    bg-white px-3 py-5 text-center
                    shadow-[0_2px_10px_rgba(52,70,56,0.05)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#4f7359]
                    hover:shadow-[0_8px_20px_rgba(52,70,56,0.11)]
                    sm:h-[200px] sm:px-4 sm:py-6
                  "
                >

                  {/* Icon */}
                  <span
                    className="
                      relative z-10 mb-4 grid h-16 w-16
                      place-items-center rounded-xl
                      bg-[#edf4ec] text-[#e87744]
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:bg-[#fff1e9]
                      sm:h-20 sm:w-20
                    "
                  >
                    {Icon && (
                      <Icon
                        size={42}
                        strokeWidth={1.6}
                        className="
                          text-[#e87744]
                          transition-colors duration-300
                          group-hover:text-[#4f7359]
                        "
                      />
                    )}
                  </span>

                  {/* Speciality Name */}
                  <h3
                    className="
                      relative z-10 max-w-full
                      font-display text-base font-semibold
                      leading-6 text-[#344638]
                      transition-colors duration-300
                      group-hover:text-[#4f7359]
                      sm:text-lg
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Explore - Visible Only on Hover */}
                  <span
                    className="
                      relative z-10 mt-2 flex h-7 items-center gap-2
                      translate-y-1 text-sm font-semibold
                      text-[#e87744] opacity-0
                      transition-all duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    Explore Speciality
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>

                </Link>
              </motion.div>
            );
          })}

        </div>

        {/* View All Specialities */}
        <div className="mt-10 text-center">
          <Link
            to="/specialities"
            className="
              inline-flex min-h-11 items-center justify-center gap-2
              rounded-full bg-[#4f7359] px-8 py-3
              text-sm font-bold text-white
              shadow-sm transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#e87744] hover:shadow-md
            "
          >
            View All Specialities
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
