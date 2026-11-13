
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

function usePerView() {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width >= 1024) setCount(3);
      else if (width >= 768) setCount(2);
      else setCount(1);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function CardSlider({
  items = [],
  renderItem,
  ariaLabel = "Carousel",
  dark = false,
}) {
  const visibleCount = usePerView();
  const reduceMotion = useReducedMotion();

  const [index, setIndex] = useState(items.length);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const viewportRef = useRef(null);
  const isAnimating = useRef(false);

  const gap = 12;
  const cloneCount = items.length;
  const slidesVisible = Math.min(visibleCount, items.length);

  const cardWidth =
    viewportWidth > 0 && slidesVisible > 0
      ? (viewportWidth - gap * (slidesVisible - 1)) / slidesVisible
      : 0;

  // Three copies prevent empty space during continuous looping.
  const trackItems = [
    ...items.map((item, i) => ({
      item,
      key: `before-${i}-${item.slug || item.id || i}`,
    })),
    ...items.map((item, i) => ({
      item,
      key: `original-${i}-${item.slug || item.id || i}`,
    })),
    ...items.map((item, i) => ({
      item,
      key: `after-${i}-${item.slug || item.id || i}`,
    })),
  ];

  useLayoutEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const measure = () => setViewportWidth(node.clientWidth);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);

    return () => observer.disconnect();
  }, [slidesVisible]);

  // Reset position when screen size or item count changes.
  useEffect(() => {
    isAnimating.current = false;
    setTransitionEnabled(false);
    setIndex(cloneCount);

    const frame = requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [cloneCount, visibleCount]);

  const moveNext = () => {
    if (items.length <= 1 || isAnimating.current) return;

    isAnimating.current = true;
    setIndex((current) => current + 1);
  };

  const movePrevious = () => {
    if (items.length <= 1 || isAnimating.current) return;

    isAnimating.current = true;
    setIndex((current) => current - 1);
  };

  const handleAnimationComplete = () => {
    if (index >= cloneCount * 2) {
      setTransitionEnabled(false);
      setIndex(cloneCount);

      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        isAnimating.current = false;
      });
    } else if (index < cloneCount) {
      setTransitionEnabled(false);
      setIndex(cloneCount * 2 - 1);

      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        isAnimating.current = false;
      });
    } else {
      isAnimating.current = false;
    }
  };

  // Automatic one-card movement every 3 seconds.
  useEffect(() => {
    if (items.length <= 1 || isPaused || reduceMotion) return;

    const timer = setInterval(() => {
      moveNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [items.length, isPaused, reduceMotion]);

  const activeDot =
    items.length > 0
      ? ((index - cloneCount) % items.length + items.length) % items.length
      : 0;

  const buttonClass = dark
    ? "flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-navy text-white hover:bg-white/20"
    : "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy shadow-sm hover:bg-ice";

  if (!items.length) return null;

  return (
    <div
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative px-12 sm:px-14">
        <div ref={viewportRef} className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap }}
            animate={{
              x: cardWidth ? -index * (cardWidth + gap) : 0,
            }}
            transition={{
              duration: transitionEnabled && !reduceMotion ? 0.45 : 0,
              ease: "easeInOut",
            }}
            onAnimationComplete={handleAnimationComplete}
          >
            {trackItems.map(({ item, key }, itemIndex) => (
              <div
                key={key}
                className="shrink-0"
                style={{ width: cardWidth || "100%" }}
              >
                {renderItem(item, itemIndex)}
              </div>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          onClick={movePrevious}
          aria-label="Previous slide"
          className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 ${buttonClass}`}
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={moveNext}
          aria-label="Next slide"
          className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 ${buttonClass}`}
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div
        className="mt-6 flex justify-center gap-2"
        role="tablist"
        aria-label={`${ariaLabel} pages`}
      >
        {items.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            role="tab"
            aria-selected={dotIndex === activeDot}
            aria-label={`Go to slide ${dotIndex + 1}`}
            onClick={() => {
              if (isAnimating.current) return;

              isAnimating.current = true;
              setIndex(cloneCount + dotIndex);
            }}
            className={`h-2.5 rounded-full transition ${
              dotIndex === activeDot
                ? dark
                  ? "w-8 bg-white"
                  : "w-8 bg-royal"
                : dark
                  ? "w-2.5 bg-white/40"
                  : "w-2.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}













// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// function usePerView() {
//   const [count, setCount] = useState(() => {
//     if (typeof window === "undefined") return 3;
//     if (window.innerWidth >= 1024) return 3;
//     if (window.innerWidth >= 768) return 2;
//     return 1;
//   });

//   useEffect(() => {
//     const update = () => {
//       const width = window.innerWidth;
//       if (width >= 1024) setCount(3);
//       else if (width >= 768) setCount(2);
//       else setCount(1);
//     };

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return count;
// }

// export default function CardSlider({
//   items,
//   renderItem,
//   ariaLabel = "Carousel",
//   dark = false,
// }) {
//   const visibleCount = usePerView();
//   const [index, setIndex] = useState(0);
//   const [viewportWidth, setViewportWidth] = useState(0);
//   const viewportRef = useRef(null);
//   const reduceMotion = useReducedMotion();
//   const maxIndex = Math.max(0, items.length - visibleCount);
//   const gap = 20;
//   const cardWidth =
//     viewportWidth > 0
//       ? (viewportWidth - gap * (visibleCount - 1)) / visibleCount
//       : 0;

//   useLayoutEffect(() => {
//     const node = viewportRef.current;
//     if (!node) return undefined;

//     const measure = () => setViewportWidth(node.clientWidth);
//     measure();

//     const observer = new ResizeObserver(measure);
//     observer.observe(node);
//     return () => observer.disconnect();
//   }, [visibleCount]);

//   useEffect(() => {
//     setIndex((current) => Math.min(current, maxIndex));
//   }, [maxIndex]);

//   const previous = () => setIndex((current) => (current <= 0 ? maxIndex : current - 1));
//   const next = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1));
//   const buttonClass = dark
//     ? "flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-navy text-white hover:bg-white/20"
//     : "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy shadow-sm hover:bg-ice";

//   return (
//     <div aria-label={ariaLabel}>
//       <div className="relative px-12 sm:px-14">
//         <div ref={viewportRef} className="overflow-hidden">
//           <motion.div
//             className="flex"
//             style={{ gap }}
//             animate={{ x: cardWidth ? -index * (cardWidth + gap) : 0 }}
//             transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
//           >
//             {items.map((item, itemIndex) => (
//               <div
//                 key={item.id || item.title || item.name || item.youtubeId || itemIndex}
//                 className="shrink-0"
//                 style={{ width: cardWidth || "100%" }}
//               >
//                 {renderItem(item, itemIndex)}
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <button
//           type="button"
//           onClick={previous}
//           aria-label="Previous slide"
//           className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 ${buttonClass}`}
//         >
//           <ArrowLeft size={18} />
//         </button>
//         <button
//           type="button"
//           onClick={next}
//           aria-label="Next slide"
//           className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 ${buttonClass}`}
//         >
//           <ArrowRight size={18} />
//         </button>
//       </div>

//       <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label={`${ariaLabel} pages`}>
//         {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
//           <button
//             key={dotIndex}
//             type="button"
//             role="tab"
//             aria-selected={dotIndex === index}
//             aria-label={`Go to slide ${dotIndex + 1}`}
//             onClick={() => setIndex(dotIndex)}
//             className={`h-2.5 rounded-full transition ${
//               dotIndex === index
//                 ? dark
//                   ? "w-8 bg-white"
//                   : "w-8 bg-royal"
//                 : dark
//                   ? "w-2.5 bg-white/40"
//                   : "w-2.5 bg-line"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
