
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Scissors,
  Stethoscope,
  Radiation,
  Dna,
  Sparkles,
  HeartPulse,
  Activity,
  Syringe,
} from "lucide-react";

import { treatmentServices } from "../../data/treatmentServicesData";

const treatmentIcons = [
  Scissors,
  Stethoscope,
  Radiation,
  Dna,
  Sparkles,
  HeartPulse,
  Activity,
  Syringe,
];

export default function HomeTreatments() {
  const shouldReduceMotion = useReducedMotion();

  // Display only the first 4 treatments
  const displayedTreatments = treatmentServices.slice(0, 4);

  return (
    <section className="section-padding overflow-hidden bg-mist">
      <div className="page-container px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E87744] sm:text-sm">
            PERSONALISED TREATMENT
          </p>

          <h2 className="display-font mt-3 text-3xl font-bold text-[#263C30] sm:text-4xl lg:text-[42px]">
            Cancer Treatments
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#59695D] sm:text-base">
            Explore different treatment approaches and understand how
            specialists plan care based on individual needs.
          </p>
        </motion.div>

        {/* Treatments - Only 4 Cards in One Row */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {displayedTreatments.map((service, index) => {
            const Icon = treatmentIcons[index % treatmentIcons.length];

            return (
              <motion.article
                key={service.slug}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 35, scale: 0.97 }
                }
                whileInView={
                  shouldReduceMotion
                    ? {}
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -8, transition: { duration: 0.3 } }
                }
                className="group flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl border border-[#E2EAE0] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Card Image */}
                <div className="relative h-48 shrink-0 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={
                      shouldReduceMotion ? {} : { scale: 1.08 }
                    }
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#263C30]/60 via-transparent to-transparent" />

                  {/* Treatment Icon */}
                  <motion.span
                    className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-white text-[#476B55] shadow-md transition-colors duration-300 group-hover:text-[#E87744]"
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { rotate: 8, scale: 1.08 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </motion.span>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-[#263C30] transition-colors group-hover:text-[#E87744]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[96px] flex-1 text-[17px] leading-7 text-[#59695D]">
                    {service.cardDescription}
                  </p>

                  {/* Know More Button */}
                  <Link
                    to={`/services/treatments/${service.slug}`}
                    className="mt-5 inline-flex min-h-10 items-center gap-2 self-start rounded-full bg-[#304B3C] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E87744] hover:shadow-md"
                  >
                    Know More
                    <motion.span
                      className="inline-flex"
                      whileHover={
                        shouldReduceMotion ? {} : { x: 4 }
                      }
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </Link>
                </div>
              </motion.article>
            );
          })}

        </div>

        {/* Explore All Treatments */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            to="/services/treatments"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#476B55] px-7 py-3 text-sm font-bold text-[#476B55] transition-all duration-300 hover:border-[#E87744] hover:bg-[#E87744] hover:text-white hover:shadow-lg"
          >
            Explore All Treatments

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
