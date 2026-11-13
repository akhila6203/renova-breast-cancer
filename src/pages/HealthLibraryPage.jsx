
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { healthCategories } from "../data/healthLibraryData";
import HealthLibraryTabs from "../components/health-library/HealthLibraryTabs";

import appointmentsWave from "../assets/appointments-wave.jpg";

export default function HealthLibraryPage() {
  const [searchParams] = useSearchParams();
  const requestedTab = searchParams.get("tab");

  const initialTab = ["blogs", "videos", "faqs"].includes(requestedTab)
    ? requestedTab
    : "blogs";

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      {/* BREADCRUMB */}
<nav
  aria-label="Breadcrumb"
  className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
  style={{
    backgroundImage: `url(${appointmentsWave})`,
  }}
>
  <div className="page-container relative z-10 mx-auto px-5 py-4 sm:px-8 lg:px-12">
    <ol className="flex items-center gap-2 text-[15px]">
      <li>
        <Link
          to="/"
          className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
        >
          Home
        </Link>
      </li>

      <li
        aria-hidden="true"
        className="text-white/90 drop-shadow-md"
      >
        /
      </li>

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        Health Library
      </li>
    </ol>
  </div>
</nav>
      {/* <section className="border-b border-[#D4E0D6] bg-[#F6F9F6]">
        <div className="page-container px-5 py-4 sm:px-8 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm"
          >
            <Link to="/" className="font-medium text-slate-500 transition hover:text-[#E87744]">
              Home
            </Link>
            <span className="text-[#4a4a4a]">/</span>
            <span className="font-bold text-[#4F7359]">
              Health Library
            </span>
          </nav>
        </div>
      </section> */}


      {/* CANCER EDUCATION CATEGORIES */}
      <section className="bg-white px-5 py-6 sm:px-8 sm:py-14 lg:px-12">
        <div className="page-container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-[3px] w-8 rounded-full bg-[#E87744]" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F7359]">
                EXPLORE & UNDERSTAND
              </span>
              <span className="h-[3px] w-8 rounded-full bg-[#E87744]" />
            </div>

            <h2 className="display-font text-3xl font-extrabold text-[#243528] sm:text-4xl">
            Understand Cancer. Understand Your Options.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#4b4d4c]">
              Explore trusted information about cancer diagnosis, treatment options, prevention and supportive care to help patients and families make informed decisions throughout their cancer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {healthCategories.map((category, index) => (
              <article
                key={category.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4E0D6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#E87744]/60 hover:shadow-xl"
              >
                <Link
                  to={`/health-library/${category.slug}`}
                  className="relative block h-56 overflow-hidden bg-[#E8F0EA]"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-[#4F7359] shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#4F7359]">
                    CANCER EDUCATION
                  </span>

                  <h3 className="display-font mt-3 text-[16px] font-bold text-[#243528] transition-colors group-hover:text-[#4F7359] sm:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-[20px] font-semibold leading-6 text-[#E87744]">
                    {category.subtitle}
                  </p>

                  <p className="mt-3 flex-1 text-[18px] leading-7 text-[#5c5b5b]">
                    {category.description}
                  </p>

                  <Link
                    to={`/health-library/${category.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-[#4F7359] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#E87744]"
                  >
                    Know More
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS / VIDEOS / FAQS */}
      <section
        id="health-library-resources"
        className="scroll-mt-24 bg-[#F6F9F6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="page-container">
          <HealthLibraryTabs initialTab={initialTab} />
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="border-t border-[#D4E0D6] bg-white px-5 py-8 sm:px-8 lg:px-12">
        <div className="page-container">
          <p className="text-[18px] leading-7 text-[#3D4A40]">
            <strong className="text-[#243528]">
              Medical information disclaimer:
            </strong>{" "}
            The information in this Health Library is for general educational
            purposes only. It does not replace medical advice, diagnosis or
            treatment. Please consult your treating doctor for individual advice.
          </p>
        </div>
      </section>
    </main>
  );
}









