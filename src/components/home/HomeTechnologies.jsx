
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import {
  technologyItems,
  mammographyTechnology,
} from "../../data/technologyData";

export default function HomeTechnologies() {
    const technologies = [...technologyItems, mammographyTechnology].slice(0, 4);
//   const technologies = [...technologyItems, mammographyTechnology];

  return (
    <section className="section-padding bg-white">
      <div className="page-container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E87744] sm:text-sm">
            ADVANCED CANCER CARE
          </p>

          <h2 className="display-font mt-3 text-3xl font-bold text-[#263C30] sm:text-4xl">
            Our Technology
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#59695D] sm:text-base">
            Discover technologies that support cancer diagnosis, treatment
            planning and specialised care.
          </p>
        </div>

        {/* Technologies - 4 Cards Per Row */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {technologies.map((item, index) => (
            <motion.article
              key={item.slug || item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
              className="group flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl border border-[#E3EAE0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#263C30]/55 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#476B55]">
                  {item.category || "TECHNOLOGY"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-[#263C30] transition-colors group-hover:text-[#E87744]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-[17px] leading-7 text-[#59695D]">
                  {item.description}
                </p>

                <Link
                  to={item.path || `/technology/${item.slug}`}
                  className="mt-5 inline-flex min-h-10 items-center gap-2 self-start rounded-full bg-[#304B3C] px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#E87744]"
                >
                  Know More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link
            to="/technology"
            className="inline-flex items-center gap-2 rounded-full border border-[#476B55] px-7 py-3 text-sm font-bold text-[#476B55] transition duration-300 hover:border-[#E87744] hover:bg-[#E87744] hover:text-white"
          >
            Explore All Technologies
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
