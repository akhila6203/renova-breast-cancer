
import { motion, useReducedMotion } from "framer-motion";
import {
  UserRoundCheck,
  UsersRound,
  BookOpenCheck,
  Microscope,
  HeartHandshake,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";

const items = [
  {
    icon: UserRoundCheck,
    number: "01",
    title: "Personalised Treatment Planning",
    text: "Care plans based on each patient's diagnosis, clinical needs and treatment goals.",
  },
  {
    icon: UsersRound,
    number: "02",
    title: "Multidisciplinary Expertise",
    text: "Relevant specialists collaborate to support informed treatment decisions.",
  },
  {
    icon: BookOpenCheck,
    number: "03",
    title: "Evidence-Based Treatment",
    text: "Treatment options are considered according to clinical requirements and established medical evidence.",
  },
  {
    icon: Microscope,
    number: "04",
    title: "Advanced Cancer Care",
    text: "Modern diagnostic and treatment approaches can be incorporated where appropriate and available.",
  },
  {
    icon: HeartHandshake,
    number: "05",
    title: "Patient & Family Support",
    text: "Clear information, guidance and compassionate support throughout the cancer journey.",
  },
  {
    icon: Activity,
    number: "06",
    title: "Continuity of Care",
    text: "Support from assessment and diagnosis through treatment, recovery and follow-up.",
  },
];

export default function HomeWhy() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding overflow-hidden bg-[#f6f9f6]">
      <div className="page-container px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <SectionTitle
          eyebrow="WHY RENOVA"
          title="Why Choose RENOVA?"
          description="A connected approach to cancer care, bringing together clinical expertise, personalised treatment and compassionate support for patients and families."
        />

        {/* WHY RENOVA CARDS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {items.map(({ icon: Icon, number, title, text }, index) => (
            <motion.article
              key={number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 24,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              whileHover={reduceMotion ? {} : { y: -5 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#dce6dc] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#e87744]/60 hover:shadow-lg sm:p-7"
            >

              {/* CARD NUMBER */}
              <span className="absolute right-6 top-5 text-5xl font-extrabold text-[#476b55]/[0.08] transition-colors duration-300 group-hover:text-[#e87744]/15">
                {number}
              </span>

              {/* ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f0ea] text-[#476b55] transition-all duration-300 group-hover:bg-[#476b55] group-hover:text-white">
                <Icon size={27} strokeWidth={1.8} />
              </div>

              {/* TITLE */}
              <h3 className="display-font mt-6 max-w-[90%] text-xl font-bold leading-snug text-[#263c30] transition-colors duration-300 group-hover:text-[#476b55]">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 flex-1 text-[16px] leading-7 text-[#536458] sm:text-[18px]">
                {text}
              </p>

              {/* BOTTOM ACCENT */}
              {/* <div className="mt-6 h-1 w-12 rounded-full bg-[#e87744] transition-all duration-300 group-hover:w-20" /> */}

            </motion.article>
          ))}

        </div>

        {/* DISCOVER BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/about"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#476b55] px-7 py-3 text-[15px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#e87744] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#476b55] focus:ring-offset-2"
          >
            Discover Our Approach

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}



