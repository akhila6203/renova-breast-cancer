
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import {
  mammographyTechnology,
  technologyItems,
} from "../data/technologyData";

import appointmentsWave from "../assets/appointments-wave.jpg";

import { specialities } from "../data/specialitiesData";

// Editable display metadata.
// Replace sample dates and views with actual CMS/analytics values later.
const technologyMeta = {
  "radixact-x9-synchrony": {
    publishedAt: "2026-11-10",
    views: 980,
  },
  "ai-adaptive-radiotherapy": {
    publishedAt: "2026-11-08",
    views: 1250,
  },
  "mr-guided-adaptive-brachytherapy": {
    publishedAt: "2026-11-06",
    views: 760,
  },
  "dibh-abc": {
    publishedAt: "2026-11-04",
    views: 640,
  },
  "versa-hd": {
    publishedAt: "2026-11-02",
    views: 1100,
  },
  "molecular-oncology": {
    publishedAt: "2026-10-28",
    views: 1450,
  },
  "robotic-surgery": {
    publishedAt: "2026-10-25",
    views: 1680,
  },
  "hipec-pipac": {
    publishedAt: "2026-10-20",
    views: 890,
  },
  "breast-health-initiative": {
    publishedAt: "2026-10-15",
    views: 720,
  },
  "3d-mammography": {
    publishedAt: "2026-10-12",
    views: 1320,
  },
};

function Breadcrumb() {
  return (
    
<nav
  aria-label="Breadcrumb"
  className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
  style={{
    backgroundImage: `url(${appointmentsWave})`,
  }}
>
  <div className="page-container relative z-10 mx-auto px-5 py-3 sm:px-8 lg:px-12">
    <ol className="flex flex-wrap items-center gap-2 text-[15px] sm:text-[16px]">
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
        Our Technology
      </li>
    </ol>
  </div>
</nav>
  );
}

// Technology cards
function TechnologyCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.4,
        delay: (index % 3) * 0.05,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E3EAE0] bg-white shadow-[0_8px_26px_rgba(38,60,48,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt || item.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#263C30]/65 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold tracking-wider text-[#476B55]">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-snug text-[#263C30]">
          {item.title}
        </h3>

        <p className="mt-3 flex-1 text-[16px] leading-7 text-[#59695D] sm:text-[17px]">
          {item.description}
        </p>

        <Link
          to={item.path || `/technology/${item.slug}`}
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-[#304B3C] px-5 py-2.5 text-[14px] font-bold text-white transition hover:bg-[#E87744]"
        >
          Know More
          <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}

// Speciality cards - same icon and name style as SpecialitiesPage
function SpecialityCard({ item, index }) {
  const Icon = item.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.4,
        delay: (index % 5) * 0.05,
      }}
    >
      <Link
        to={`/specialities/${item.slug}`}
        className="
          group relative flex h-[185px] flex-col items-center justify-center
          overflow-hidden rounded-xl border border-[#E5EAE2]
          bg-white px-3 py-5 text-center
          shadow-[0_2px_10px_rgba(52,70,56,0.05)]
          transition-all duration-300
          hover:-translate-y-1 hover:border-[#4F7359]
          hover:shadow-[0_8px_20px_rgba(52,70,56,0.11)]
          sm:h-[200px] sm:px-4 sm:py-6
        "
      >
        <span
          className="
            relative z-10 mb-4 grid h-20 w-20 place-items-center
            rounded-xl bg-[#EDF4EC] text-[#E87744]
            transition-all duration-300
            group-hover:-translate-y-1 group-hover:bg-[#FFF1E9]
          "
        >
          {Icon && (
            <Icon
              size={48}
              strokeWidth={1.6}
              className="text-[#E87744] transition-colors duration-300 group-hover:text-[#4F7359]"
            />
          )}
        </span>

        <h3
          className="
            relative z-10 max-w-full font-display
            text-base font-semibold leading-6 text-[#344638]
            transition-colors duration-300
            group-hover:text-[#4F7359]
            sm:text-lg
          "
        >
          {item.title}
        </h3>

        <span
          className="
            relative z-10 mt-2 flex h-7 items-center gap-2
            text-sm font-semibold text-[#E87744]
            translate-y-1 opacity-0
            transition-all duration-300
            group-hover:translate-y-0 group-hover:opacity-100
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
}

export default function TechnologyPage() {
  const allItems = useMemo(
    () => [...technologyItems, mammographyTechnology],
    []
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const specialityOptions = useMemo(() => {
    return [
      ...new Set(
        allItems.flatMap((item) => item.specialities || [])
      ),
    ].sort((a, b) => a.localeCompare(b));
  }, [allItems]);

  const filteredItems = useMemo(() => {
    let result = [...allItems];

    const search = searchTerm.trim().toLowerCase();

    if (search) {
      result = result.filter((item) => {
        return (
          item.title.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search) ||
          item.category.toLowerCase().includes(search)
        );
      });
    }

    if (selectedSpeciality !== "all") {
      result = result.filter((item) =>
        item.specialities?.includes(selectedSpeciality)
      );
    }

    result.sort((a, b) => {
      const metaA = technologyMeta[a.slug] || {
        views: 0,
        publishedAt: "",
      };

      const metaB = technologyMeta[b.slug] || {
        views: 0,
        publishedAt: "",
      };

      switch (sortBy) {
        case "most-viewed":
          return metaB.views - metaA.views;

        case "least-viewed":
          return metaA.views - metaB.views;

        case "a-z":
          return a.title.localeCompare(b.title);

        case "z-a":
          return b.title.localeCompare(a.title);

        case "latest":
        default:
          return (
            new Date(metaB.publishedAt) -
            new Date(metaA.publishedAt)
          );
      }
    });

    return result;
  }, [
    allItems,
    searchTerm,
    selectedSpeciality,
    sortBy,
  ]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSpeciality("all");
    setSortBy("latest");
  };

  return (
    <main className="min-h-screen bg-[#FFFDFA] text-[#304B3C]">

      {/* BREADCRUMB */}
    <Breadcrumb />
      {/* <div className="border-b border-[#DCE5DA] bg-[#F6F8F4]">
        <div className="page-container px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>
      </div> */}

      {/* TECHNOLOGY INTRODUCTION */}
      
{/* TECHNOLOGY INTRODUCTION */}
<section className="bg-[#FFFDFA] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
  <div className="page-container">

    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

      {/* LEFT CONTENT */}
      <div className="order-2 lg:order-1">

        <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF4EC] px-4 py-2 text-[12px] font-extrabold uppercase tracking-[.15em] text-[#476B55]">
          <Cpu size={16} />
          Advanced Cancer Care
        </span>

        <h1 className="mt-6 text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl lg:text-[46px]">
          Advanced Technology for 
          <span className="block text-[#E87744]">
            Precision Cancer Care
           
          </span>
        </h1>

        <p className="mt-6 text-[16px] leading-8 text-[#536357] sm:text-[17px]">
         At Kaizen Oncology Cancer Hospital, advanced technology plays an important role in cancer diagnosis, treatment planning and patient care.
          We combine specialised clinical expertise with modern treatment technologies to support personalised cancer care.
        </p>

        <p className="mt-4 text-[16px] leading-8 text-[#536357] sm:text-[17px]">
         From precision radiotherapy and molecular oncology to robotic surgery and specialised cancer procedures, our technologies 
         support clinicians in evaluating individual patient needs and planning appropriate treatment approaches.
        </p>
        <p className="mt-4 text-[16px] leading-8 text-[#536357] sm:text-[17px]">
          The choice of technology depends on the cancer type, stage, diagnostic findings and overall health of each patient.
        </p>

        {/* KEY AREAS */}
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

          <div className="flex items-start gap-3 rounded-xl border border-[#E5EAE2] bg-white p-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF4EC] text-[#E87744]">
              <Search size={19} />
            </span>
            <div>
              <h3 className="text-[15px] font-bold text-[#304B3C]">
                Advanced Diagnosis
              </h3>
              <p className="mt-1 text-[13px] leading-6 text-[#647267]">
                Imaging and diagnostic technologies that support clinical evaluation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-[#E5EAE2] bg-white p-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF4EC] text-[#E87744]">
              <Cpu size={19} />
            </span>
            <div>
              <h3 className="text-[15px] font-bold text-[#304B3C]">
                Precision Treatment
              </h3>
              <p className="mt-1 text-[13px] leading-6 text-[#647267]">
                Technology supporting individualised treatment planning.
              </p>
            </div>
          </div>

        </div>

        <Link
          to="#technology-list"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#304B3C] px-7 py-3 text-[15px] font-bold text-white transition hover:bg-[#E87744]"
        >
          Explore Our Technologies
          <ArrowRight size={18} />
        </Link>

      </div>

      {/* RIGHT IMAGE COLLAGE */}
      <div className="order-1 lg:order-2">

        <div className="relative mx-auto max-w-[560px]">

          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            <div className="overflow-hidden rounded-2xl rounded-tl-[55px] shadow-md">
              <img
                src={technologyItems[0].image}
                alt="Advanced radiotherapy technology"
                loading="lazy"
                className="h-[190px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[245px]"
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl rounded-tr-[55px] shadow-md sm:mt-12">
              <img
                src={
                  technologyItems.find(
                    (item) => item.slug === "molecular-oncology"
                  )?.image
                }
                alt="Molecular oncology technology"
                loading="lazy"
                className="h-[190px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[245px]"
              />
            </div>

            <div className="-mt-5 overflow-hidden rounded-2xl rounded-bl-[55px] shadow-md sm:-mt-8">
              <img
                src={
                  technologyItems.find(
                    (item) => item.slug === "robotic-surgery"
                  )?.image
                }
                alt="Robotic-assisted surgery"
                loading="lazy"
                className="h-[190px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[245px]"
              />
            </div>

            <div className="overflow-hidden rounded-2xl rounded-br-[55px] shadow-md">
              <img
                src={mammographyTechnology.image}
                alt="3D mammography imaging"
                loading="lazy"
                className="h-[190px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[245px]"
              />
            </div>

          </div>

          <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-[#E5EAE2] bg-white px-4 py-3 text-center shadow-lg sm:bottom-3">
            <p className="text-sm font-bold text-[#304B3C]">
              Technology guided by clinical expertise
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>


      {/* EXPLORE OUR TECHNOLOGY */}
      <section
        id="technology-list"
        className="page-container scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
      >
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[.18em] text-[#E87744]">
           EXPLORE OUR TECHNOLOGY
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#263C30] sm:text-4xl">
           Advanced Technologies for Precision Cancer Care
          </h2>

          <p className="mt-4 text-[16px] leading-7 text-[#536357]">
            Explore the advanced technologies used in cancer diagnosis, treatment planning and specialised cancer care at Kaizen Oncology.
          </p>
        </div>

        {/* SEARCH AND FILTERS - WITHOUT OUTER BOX */}
        {/* <div className="mb-8"> */}
        <div className="mx-auto mb-8 w-full max-w-5xl">
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_250px_220px] lg:items-end">
       
            {/* SEARCH */}
            {/* <div> */}
            <div className="col-span-1 w-full sm:col-span-2 lg:col-span-1">
              <label
                htmlFor="technology-search"
                className="mb-2 block text-[13px] font-bold text-[#304B3C]"
              >
                Search Technology
              </label>

              <div className="flex min-h-12 items-center gap-3 rounded-xl border border-[#DCE5DA] bg-white px-4">
                <Search
                  size={19}
                  className="shrink-0 text-[#718174]"
                />

                <input
                  id="technology-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Search by technology name..."
                  className="w-full bg-transparent text-[15px] text-[#263C30] outline-none placeholder:text-[#89958A] focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* SPECIALITY FILTER */}
            {/* <div> */}
            <div className="col-span-1 min-w-0 w-full">
              <label
                htmlFor="technology-speciality-filter"
                className="mb-2 block text-[13px] font-bold text-[#304B3C]"
              >
                Filter by Speciality
              </label>

              <select
                id="technology-speciality-filter"
                value={selectedSpeciality}
                onChange={(event) =>
                  setSelectedSpeciality(event.target.value)
                }
                className="min-h-12 w-full min-w-0 rounded-xl border border-[#DCE5DA] bg-white px-2 text-[12px] text-[#304B3C] outline-none focus:border-[#DCE5DA] focus:outline-none focus:ring-0 sm:px-4 sm:text-[14px]"
                // className="min-h-12 w-full rounded-xl border border-[#DCE5DA] bg-white px-4 text-[14px] text-[#304B3C] outline-none focus:border-[#DCE5DA] focus:outline-none focus:ring-0"
              >
                <option value="all">All Specialities</option>

                {specialityOptions.map((speciality) => (
                  <option key={speciality} value={speciality}>
                    {speciality}
                  </option>
                ))}
              </select>
            </div>

            {/* SORT */}
            {/* <div> */}
            <div className="col-span-1 min-w-0 w-full">
              <label
                htmlFor="technology-sort"
                className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[#304B3C]"
              >
                <SlidersHorizontal size={15} />
                Sort Technologies
              </label>

              <select
                id="technology-sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="min-h-12 w-full min-w-0 rounded-xl border border-[#DCE5DA] bg-white px-2 text-[12px] text-[#304B3C] outline-none focus:border-[#DCE5DA] focus:outline-none focus:ring-0 sm:px-4 sm:text-[14px]"
                // className="min-h-12 w-full rounded-xl border border-[#DCE5DA] bg-white px-4 text-[14px] text-[#304B3C] outline-none focus:border-[#DCE5DA] focus:outline-none focus:ring-0"
              >
                <option value="latest">Latest Technology</option>
                <option value="most-viewed">Most Viewed</option>
                <option value="least-viewed">Least Viewed</option>
                <option value="a-z">Name: A to Z</option>
                <option value="z-a">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* RESULT COUNT */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#EDF1EB] pt-4">
            <p className="text-[14px] font-medium text-[#59695D]">
              Showing{" "}
              <span className="font-bold text-[#304B3C]">
                {filteredItems.length}
              </span>{" "}
              of {allItems.length} technologies
            </p>

            {(searchTerm ||
              selectedSpeciality !== "all" ||
              sortBy !== "latest") && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-[13px] font-bold text-[#E87744] transition hover:text-[#304B3C]"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* TECHNOLOGY CARDS */}
        {filteredItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item, index) => (
              <TechnologyCard
                key={item.slug}
                item={item}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#D7E2D4] bg-[#F8FAF7] px-5 py-14 text-center">
            <Cpu
              size={34}
              className="mx-auto text-[#8A9A8B]"
            />

            <h3 className="mt-4 text-xl font-bold text-[#263C30]">
              No technologies found
            </h3>

            <p className="mt-2 text-[15px] text-[#59695D]">
              Try another search term or change the selected speciality.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-full bg-[#304B3C] px-5 py-2.5 text-[14px] font-bold text-white transition hover:bg-[#E87744]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* OUR SPECIALITIES - ICON AND NAME CARDS */}
      
{/* Explore Our Specialities */}
<section className="bg-[#f4f7f2] py-14 md:py-16">
  <div className="page-container">
    <div className="mb-8 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e87744]">
        Our Expertise
      </span>

      <h2 className="mt-3 text-2xl font-bold text-[#263c30] md:text-3xl">
        Explore Our Specialities
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#526258]">
        Discover our specialised cancer care services and expert treatment teams.
      </p>
    </div>

    {/* Exactly 4 Specialities in One Row */}
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5 md:gap-5">
      {specialities.slice(0, 5).map((item) => {
        const Icon = item.Icon;

        return (
          <Link
            key={item.slug}
            to={`/specialities/${item.slug}`}
            className="group flex flex-col items-center rounded-2xl border border-[#e1e9df] bg-white px-4 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#e87744] hover:shadow-lg md:px-5"
          >
            <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#edf4ec] text-[#e87744] transition group-hover:bg-[#304b3c] group-hover:text-white">
              {Icon && <Icon size={42} strokeWidth={1.6} />}
            </span>

            <h3 className="min-h-[48px] text-base font-bold leading-6 text-[#263c30]">
              {item.title}
            </h3>

            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e87744]">
              Explore Speciality
              <ArrowRight size={16} />
            </span>
          </Link>
        );
      })}
    </div>

    {/* Know More Button */}
    <div className="mt-7 text-center">
      <Link
        to="/specialities"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#304b3c] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#476b55]"
      >
        Know More
        <ArrowRight size={18} />
      </Link>
    </div>
  </div>
</section>


      {/* DISCLAIMER */}
      
{/* Contact and Appointment CTA */}
<section className="py-14 md:py-16">
  <div className="page-container">
    <div className="rounded-3xl bg-[#304b3c] px-6 py-10 text-center md:px-12 md:py-14">
      <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#e9b77c]">
        We Are Here To Help
      </span>

      <h2 className="mx-auto max-w-5xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
        Not Sure Which Technology or Treatment Is Right for You?
      </h2>

      <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/85 md:text-lg">
        Our expert team is here to guide you through your cancer care journey.
        Connect with us to understand your options and receive the right support.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#304b3c]"
        >
          Contact Us <ArrowRight size={18} />
        </Link>

        <Link
          to="/appointment"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e87744] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d96837]"
        >
          Book an Appointment <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}






