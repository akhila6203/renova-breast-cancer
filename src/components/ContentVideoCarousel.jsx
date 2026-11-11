import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function ContentVideoCarousel({
  eyebrow = "WATCH & LEARN",
  title,
  subtitle,
  items = [],
  slidesPerView = 4,
  autoPlay = true,
  interval = 4500,
  className = "",
  background = "mist",
}) {
  const [visible, setVisible] = useState(4);
  const [position, setPosition] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  // Prevent multiple arrow clicks from moving beyond the loop boundary.
  const isAnimating = useRef(false);

  const itemCount = items.length;
  const canSlide = itemCount > 1;

  // Responsive visible card count.
  useEffect(() => {
    const updateVisible = () => {
      const requested = Math.max(1, Number(slidesPerView) || 4);
      const width = window.innerWidth;

      if (width >= 1280) {
        setVisible(requested);
      } else if (width >= 1024) {
        setVisible(Math.min(3, requested));
      } else if (width >= 640) {
        setVisible(Math.min(2, requested));
      } else {
        setVisible(1);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, [slidesPerView]);

  // Repeat the original list seven times to keep enough cards on both sides.
  const trackItems = useMemo(() => {
    if (!canSlide) return items;

    return Array.from({ length: 7 }, () => items).flat();
  }, [items, canSlide]);

  // Start at the middle copy, not at the beginning of the track.
  useEffect(() => {
    isAnimating.current = false;
    setTransitionEnabled(false);
    setPosition(canSlide ? itemCount * 3 : 0);

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [itemCount, visible, canSlide]);

  // Next arrow.
  const goNext = useCallback(() => {
    if (!canSlide || isAnimating.current) return;

    isAnimating.current = true;
    setTransitionEnabled(true);
    setPosition((current) => current + 1);
  }, [canSlide]);

  // Previous arrow.
  const goPrevious = useCallback(() => {
    if (!canSlide || isAnimating.current) return;

    isAnimating.current = true;
    setTransitionEnabled(true);
    setPosition((current) => current - 1);
  }, [canSlide]);

  // Auto-play.
  useEffect(() => {
    if (!autoPlay || !canSlide) return undefined;

    const timer = window.setInterval(goNext, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, canSlide, interval, goNext]);

  // Seamlessly jump between identical repeated copies.
  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || !canSlide) return;

    let resetPosition = null;

    // Forward boundary: jump from copy 4 to copy 3.
    if (position >= itemCount * 4) {
      resetPosition = itemCount * 3;
    }

    // Backward boundary: jump from copy 3 to the end of copy 4.
    else if (position < itemCount * 3) {
      resetPosition = itemCount * 4 - 1;
    }

    // Normal slide completed.
    if (resetPosition === null) {
      isAnimating.current = false;
      return;
    }

    // Disable transition for the invisible reset.
    setTransitionEnabled(false);
    setPosition(resetPosition);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        isAnimating.current = false;
      });
    });
  };

  if (!itemCount) return null;

  const trackWidth = canSlide
    ? `${(trackItems.length / visible) * 100}%`
    : "100%";

  const cardWidth = canSlide
    ? `${100 / trackItems.length}%`
    : `${100 / visible}%`;

  const sectionBackground =
    background === "white" ? "bg-white" : "bg-mist";

  return (
    <section
      className={`overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-12 ${sectionBackground} ${className}`}
    >
      <div className="page-container">
        {/* Heading */}
        <div className="mb-9 text-center sm:mb-11">
          {eyebrow && (
            <span className="text-sm font-bold tracking-[0.16em] text-sky">
              {eyebrow}
            </span>
          )}

          {title && (
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#647368] sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          {/* Previous arrow */}
          {canSlide && (
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous videos"
              className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-royal bg-white text-royal shadow-md transition hover:bg-royal hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronLeft size={23} />
            </button>
          )}

          {/* Next arrow */}
          {canSlide && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next videos"
              className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-royal bg-white text-royal shadow-md transition hover:bg-royal hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronRight size={23} />
            </button>
          )}

          {/* Clipped viewport */}
          <div className={canSlide ? "mx-10 overflow-hidden sm:mx-14" : "overflow-hidden"}>
            {/* Moving track */}
            <div
              className={`flex ${!canSlide ? "justify-center" : ""}`}
              onTransitionEnd={handleTransitionEnd}
              style={{
                width: trackWidth,
                transform: `translate3d(-${position * (100 / trackItems.length)}%, 0, 0)`,
                transition: transitionEnabled
                  ? "transform 480ms cubic-bezier(0.22, 0.61, 0.36, 1)"
                  : "none",
                willChange: "transform",
              }}
            >
              {trackItems.map((item, index) => (
                <article
                  key={`${item.href || item.title || "video"}-${index}`}
                  className="box-border min-w-0 shrink-0 p-2"
                  style={{ flex: `0 0 ${cardWidth}` }}
                >
                  <a
                    href={item.href || "#"}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    onClick={
                      !item.href
                        ? (event) => event.preventDefault()
                        : undefined
                    }
                    aria-label={`Watch ${item.title || "video"}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-ice">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.title || "Video thumbnail"}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-royal">
                          <Play size={42} />
                        </div>
                      )}

                      <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-royal text-white shadow-lg transition group-hover:scale-110 group-hover:bg-sky">
                        <Play size={21} fill="currentColor" />
                      </span>
                    </div>

                    {/* Card content */}
                    <div className="flex flex-1 flex-col p-3 sm:p-4">
                      {item.category && (
                        <span className="text-xs font-bold uppercase tracking-wider text-sky">
                          {item.category}
                        </span>
                      )}

                      {item.title && (
                        <h3 className="mt-2 line-clamp-3 text-sm font-bold leading-6 text-navy sm:text-base">
                          {item.title}
                        </h3>
                      )}

                      {item.description && (
                        <p className="mt-2 text-sm leading-6 text-[#647368]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





