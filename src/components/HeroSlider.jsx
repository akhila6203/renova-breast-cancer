
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { slides } from "../data/siteData";

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const previous = () => {
    setActive(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (paused || reduceMotion || slides.length <= 1) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [paused, reduceMotion]);

  const slide = slides[active];
  const duration = reduceMotion ? 0 : 0.7;

  return (
    <section
      className="hero-slider relative isolate overflow-hidden bg-[#2F4638]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{
            opacity: 0,
            scale: reduceMotion ? 1 : 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
          role="img"
          aria-label="RENOVA breast care"
        />
      </AnimatePresence>

      {/* Green Brand Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#243528]/95 via-[#3D5A47]/75 to-[#4F7359]/25" />

      {/* Decorative Circles */}
      {/* <span className="decor-circle -right-24 top-10 h-56 w-56 bg-white/10" /> */}
      {/* <span className="decor-circle bottom-[-5rem] left-[18%] h-48 w-48 bg-[#E87744]/20" /> */}

      {/* Hero Content */}
      <div className="page-container relative flex min-h-[400px] items-center px-6 py-12 sm:min-h-[460px] sm:px-12 sm:py-14 lg:min-h-[520px] lg:px-16 lg:py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : -10,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
            }}
            className="max-w-4xl pb-8 text-white"
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.14em] backdrop-blur-sm sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E87744]" />
              {slide.eyebrow}
            </span>

            {/* Heading */}
            <h1 className="display-font mt-6 max-w-4xl text-[1.9rem] font-bold leading-[1.15] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.3rem]">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/95 sm:text-lg sm:leading-8">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to={slide.primaryPath}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#E87744] px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d86635] hover:shadow-lg sm:text-base"
              >
                {slide.primary}
                <ChevronRight size={19} />
              </Link>

              <Link
                to={slide.secondaryPath}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#3D5A47] sm:text-base"
              >
                {slide.secondary}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={previous}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-[#243528]/50 p-2.5 text-white transition hover:border-[#E87744] hover:bg-[#E87744] sm:left-6 sm:p-3"
      >
        <ArrowLeft size={19} />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-[#243528]/50 p-2.5 text-white transition hover:border-[#E87744] hover:bg-[#E87744] sm:right-6 sm:p-3"
      >
        <ArrowRight size={19} />
      </button>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2 sm:bottom-8"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === active
                ? "w-8 bg-[#E87744]"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}











// import { useEffect, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { slides } from "../data/siteData";


// export default function HeroSlider() {
//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const reduceMotion = useReducedMotion();

//   const next = () => setActive((current) => (current + 1) % slides.length);
//   const previous = () =>
//     setActive((current) => (current - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     if (paused || reduceMotion) return undefined;
//     const timer = setInterval(next, 7000);
//     return () => clearInterval(timer);
//   }, [paused, reduceMotion, active]);

//   const slide = slides[active];
//   const duration = reduceMotion ? 0 : 0.7;

//   return (
//     <section
//       className="hero-slider relative isolate overflow-hidden bg-navy"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       onFocusCapture={() => setPaused(true)}
//       onBlurCapture={(event) => {
//         if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
//       }}
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slide.image}
//           initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration }}
//           className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
//           // className="absolute inset-0 -z-20 bg-cover bg-center"
//           style={{ backgroundImage: `url("${slide.image}")` }}
//           role="img"
//           aria-label="Breast care consultation imagery"
//         />
//       </AnimatePresence>


// <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
//       {/* <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2F4638]/96 via-[#3D5A47]/82 to-[#4F7359]/35" /> */}
//       <span className="decor-circle -right-24 top-10 h-56 w-56 bg-white/10" />
//       <span className="decor-circle bottom-[-5rem] left-[18%] h-48 w-48 bg-sky/20" />

// <div className="page-container relative flex min-h-[500px] items-center px-6 py-12 sm:min-h-[580px] sm:px-12 sm:py-14 lg:min-h-[680px] lg:px-16 lg:py-16 xl:min-h-[720px]">
//       {/* <div className="page-container relative flex min-h-[480px] items-center px-6 py-12 sm:min-h-[540px] sm:px-12 sm:py-14 lg:min-h-[660px] lg:px-16 lg:py-16 xl:min-h-[680px]"> */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.title}
//             initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
//             transition={{ duration: reduceMotion ? 0 : 0.45 }}
//             className="max-w-4xl pb-12 text-white lg:pb-16"
//           >
//             <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[13px] font-bold tracking-[0.14em] backdrop-blur-sm sm:text-[15px]">
//               <span className="h-2.5 w-2.5 rounded-full bg-sky" />
//               {slide.eyebrow}
//             </span>
//             <h1
//               className="display-font mt-7 text-[2rem] font-bold leading-[1.12] text-white sm:text-[2.65rem] lg:text-[3.35rem] xl:text-[3.75rem]"
//               style={{ color: "#ffffff" }}
//             >
//               {slide.title}
//             </h1>
//             <p 
//             className="mt-6 max-w-2xl text-[17px] leading-8 text-white/95 sm:text-[19px] sm:leading-9 lg:text-[20px]"
//             // className="mt-6 max-w-2xl text-[17px] leading-8 text-white/92 sm:text-[19px] sm:leading-9 lg:text-[20px]"
//             >
//               {slide.description}
//             </p>
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
//               <Link to={slide.primaryPath} className="btn-light min-h-[30px] px-7 text-[16px]">
//                 {slide.primary}
//                 <ChevronRight size={18} />
//               </Link>
//               <Link
//                 to={slide.secondaryPath}
//                 className="inline-flex min-h-[32px] items-center justify-center rounded-full border border-white/50 px-6 py-2 text-center text-[16px] font-semibold text-white hover:bg-white/10 sm:text-[17px]"
//               >
//                 {slide.secondary}
//               </Link>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <button
//         type="button"
//         onClick={() => {
//           previous();
//           setPaused(true);
//         }}
//         aria-label="Previous slide"
//         className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-navy/40 p-2.5 text-white hover:bg-white/20 sm:left-6 sm:p-3"
//       >
//         <ArrowLeft size={18} />
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           next();
//           setPaused(true);
//         }}
//         aria-label="Next slide"
//         className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-navy/40 p-2.5 text-white hover:bg-white/20 sm:right-6 sm:p-3"
//       >
//         <ArrowRight size={18} />
//       </button>

//       {/* <svg
//         className="pointer-events-none absolute bottom-0 left-0 z-[1] h-14 w-full text-white sm:h-20"
//         viewBox="0 0 1440 80"
//         preserveAspectRatio="none"
//         aria-hidden
//       >
//         <path
//           fill="currentColor"
//           d="M0,48 C360,96 720,0 1080,48 C1260,72 1380,64 1440,56 L1440,80 L0,80 Z"
//         />
//       </svg> */}

//       <div
//         className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-2 sm:bottom-10"
//         role="tablist"
//         aria-label="Hero slides"
//       >
//         {slides.map((item, index) => (
//           <button
//             key={item.title}
//             type="button"
//             role="tab"
//             aria-selected={index === active}
//             aria-label={`Show slide ${index + 1}`}
//             onClick={() => {
//               setActive(index);
//               setPaused(true);
//             }}
//             className={`h-2.5 rounded-full transition ${
//               index === active ? "w-8 bg-white" : "w-2.5 bg-white/45"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
