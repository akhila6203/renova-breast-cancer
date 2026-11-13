
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
import {
  ArrowRight,
  Phone,
  CalendarDays,
} from "lucide-react";

import appointmentsWave from "../assets/appointments-wave.jpg";

import { motion, useReducedMotion } from "framer-motion";
import { specialities } from "../data/specialitiesData";

export default function SpecialitiesPage() {
    const reduceMotion = useReducedMotion();
  const [columns, setColumns] = useState(5);
  const [visibleCount, setVisibleCount] = useState(20);


  // Responsive columns
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setColumns(4);
      } else if (width >= 768) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Show four rows initially
  useEffect(() => {
    setVisibleCount(columns * 4);
  }, [columns]);

  const visibleSpecialities = specialities.slice(0, visibleCount);

  const hasMore = visibleCount < specialities.length;
  const hasLess = visibleCount > columns * 4;

  const showMore = () => {
    setVisibleCount((current) =>
      Math.min(current + columns * 2, specialities.length)
    );
  };

  const showLess = () => {
    setVisibleCount(columns * 4);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-[#344638]">

      {/* Breadcrumb */}
     {/* BREADCRUMB */}
<nav
  aria-label="Breadcrumb"
  className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
  style={{
    backgroundImage: `url(${appointmentsWave})`,
  }}
>
  <div className="page-container relative z-10 mx-auto px-5 py-3 sm:px-8 lg:px-12">
    <ol className="flex items-center gap-2 text-sm sm:text-base">
      <li>
        <Link
          to="/"
          className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
        >
          Home
        </Link>
      </li>

      <li aria-hidden="true" className="text-white/90 drop-shadow-md">
        /
      </li>

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        Specialities
      </li>
    </ol>
  </div>
</nav>

      {/* Centered heading */}
      <section className="page-container px-5 pb-5 pt-10 text-center sm:px-8 sm:pt-14 lg:px-12">

        <span className="text-sm font-bold tracking-[0.18em] text-[#e87744]">
          OUR SPECIALITIES
        </span>

        <h1 className="mx-auto mt-3 max-w-5xl font-display text-3xl font-bold leading-tight text-[#344638] sm:text-4xl lg:text-5xl">
          Expertise Across the Cancer Journey
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#647368] sm:text-lg">
          The specialty pages explain who provides care and what role each clinical discipline plays.
        </p>

        <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-[#e87744]" />

      </section>

      {/* Speciality Cards */}
      <section className="page-container px-5 pb-14 pt-6 sm:px-8 sm:pb-16 lg:px-12">

        {/* <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3 min-[1440px]:grid-cols-5"> */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3 min-[1440px]:grid-cols-4">
          {visibleSpecialities.map((item, index) => {
            const Icon = item.Icon;

            return (
              <Link
                key={item.slug}
                to={`/specialities/${item.slug}`}
                className="
                  group relative flex h-[185px] flex-col items-center justify-center
                  overflow-hidden rounded-xl
                  border border-[#e5eae2] bg-white
                  px-3 py-5 text-center
                  shadow-[0_2px_10px_rgba(52,70,56,0.05)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#4f7359]
                  hover:shadow-[0_8px_20px_rgba(52,70,56,0.11)]
                  sm:h-[200px] sm:px-4 sm:py-6
                "
                style={{
                  animation: "fade-up 0.6s ease both",
                  animationDelay: `${(index % 10) * 70}ms`,
                }}
              >

                {/* Icon: Orange normally, Green on hover */}
                <span
                  className="
                    relative z-10 mb-4
                    grid h-20 w-20 place-items-center
                    rounded-xl
                    bg-[#edf4ec]
                    text-[#e87744]
                    transition-all duration-300
                    group-hover:-translate-y-1
                    group-hover:bg-[#fff1e9]
                    
                  "
                >
                  {Icon && (
                    <Icon
                      size={48}
                      strokeWidth={1.6}
                      className="
                        text-[#e87744]
                        transition-colors duration-300
                        group-hover:text-[#4f7359]
                      "
                    />
                  )}
                </span>

                {/* Speciality name */}
                <h2
                  className="
                    relative z-10
                    max-w-full font-display
                    text-base font-semibold
                    leading-6 text-[#344638]
                    transition-colors duration-300
                    group-hover:text-[#4f7359]
                    sm:text-lg
                  "
                >
                  {item.title}
                </h2>

                {/* Explore appears only on hover */}
                <span
                  className="
                    relative z-10 mt-2
                    flex h-7 items-center gap-2
                    text-sm font-semibold text-[#e87744]
                    opacity-0 translate-y-1
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
            );
          })}

        </div>

        {/* Show More / Show Less */}
        {specialities.length > columns * 4 && (
          <div className="mt-10 flex justify-center">

            {hasMore && (
              <button
                type="button"
                onClick={showMore}
                className="
                  inline-flex min-h-11 items-center
                  justify-center gap-2 rounded-full
                  bg-[#4f7359] px-8 py-3
                  text-sm font-bold text-white
                  shadow-sm transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#3d6048] hover:shadow-md
                "
              >
                Show More
                <ArrowRight size={17} />
              </button>
            )}

            {!hasMore && hasLess && (
              <button
                type="button"
                onClick={showLess}
                className="
                  inline-flex min-h-11 items-center
                  justify-center rounded-full
                  border border-[#4f7359] bg-white
                  px-8 py-3 text-sm font-bold
                  text-[#4f7359] transition-all duration-300
                  hover:bg-[#4f7359] hover:text-white
                "
              >
                Show Less
              </button>
            )}

          </div>
        )}

      </section>

       {/* Full-width Contact / Appointment CTA */}
      <section 
    //   className="w-full "
    className="w-full px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          whileHover={reduceMotion ? {} : { y: -3 }}
          className="relative w-full overflow-hidden border border-[#b8d2bd] bg-gradient-to-r from-[#2c4c30] via-[#365f38] to-[#4c714a] px-6 py-9 shadow-[0_12px_35px_rgba(48,91,58,0.12)] sm:rounded-[2rem] sm:px-12 sm:py-13 lg:px-24 lg:py-14"
        >
          {/* Decorative background circles */}
          {/* <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#c9dfcb]/60" /> */}
          {/* <div className="pointer-events-none absolute -bottom-20 right-[28%] h-48 w-48 rounded-full bg-white/40" /> */}

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-1xl">
              <span className="text-sm font-bold tracking-[0.16em] text-[#df5f14] sm:text-base">
                WE ARE HERE TO HELP
              </span>

              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-[#f8f6f4] sm:text-3xl lg:text-4xl">
                Need guidance choosing the right speciality?
              </h2>

              <p className="mt-4 text-base leading-8 text-[#b9bdba] sm:text-lg">
                Contact our team or request an appointment to discuss the next
                steps in your care. Our team is here to help guide you through
                your treatment journey.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#477653] bg-white px-7 py-3 text-base font-bold text-[#477653] shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#477653] hover:text-white hover:shadow-lg"
              >
                <Phone size={18} />
                Contact Us
              </Link>

              <Link
                to="/appointments"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#477653] px-7 py-3 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#365e40] hover:shadow-lg"
              >
                <CalendarDays size={18} />
                Book an Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}


