
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseMedical,
  MapPin,
  Search,
  UserRound,
  X,
} from "lucide-react";

import {
  doctors,
  oncologySpecialities,
} from "../data/doctorsData";

import ContentVideoCarousel from "../components/ContentVideoCarousel";

function getYouTubeId(url = "") {
  const id =
    url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/
    )?.[1] || "";

  return id.startsWith("YOUR_VIDEO_ID") ? "" : id;
}

export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [location, setLocation] = useState("");

  const locations = useMemo(
    () => [
      ...new Set(
        doctors.map((doctor) => doctor.location).filter(Boolean)
      ),
    ],
    []
  );

  const filteredDoctors = useMemo(() => {
    const query = search.trim().toLowerCase();

    return doctors.filter((doctor) => {
      const searchable =
        `${doctor.name} ${doctor.speciality} ${doctor.designation}`.toLowerCase();

      return (
        (!query || searchable.includes(query)) &&
        (!speciality || doctor.speciality === speciality) &&
        (!location || doctor.location === location)
      );
    });
  }, [search, speciality, location]);

  const healthTalkItems = useMemo(
  () =>
    doctors.flatMap((doctor) => {
      const videos = Array.isArray(doctor.healthTalk)
        ? doctor.healthTalk
        : doctor.healthTalk?.youtubeUrl
          ? [doctor.healthTalk]
          : [];

      return videos
        .map((video, index) => {
          const id = getYouTubeId(video.youtubeUrl);

          if (!id) return null;

          return {
            id: `doctor-${doctor.id}-health-talk-${index}`,
            title: `${doctor.name} – ${video.title || "Health Talk"}`,
            category: doctor.speciality,
            href: video.youtubeUrl,
            thumbnail:
              video.thumbnail ||
              `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
          };
        })
        .filter(Boolean);
    }),
  []
);

  const clearFilters = () => {
    setSearch("");
    setSpeciality("");
    setLocation("");
  };

  const hasFilters = Boolean(search || speciality || location);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-ink">

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-line bg-mist"
      >
        <div className="page-container px-5 py-3 sm:px-8 lg:px-12">
          <ol className="flex items-center gap-2 text-base">
            <li>
              <Link
                to="/"
                className="font-medium text-royal transition hover:text-sky"
              >
                Home
              </Link>
            </li>

            <li className="text-[#aab5aa]">/</li>

            <li className="font-semibold text-navy">
              Doctors
            </li>
          </ol>
        </div>
      </nav>

      {/* Page heading - original layout */}
      <section className="page-container px-5 pb-8 pt-10 text-center sm:px-8 sm:pt-14 lg:px-12">

        <span className="text-sm font-bold tracking-[0.18em] text-sky">
          OUR SPECIALISTS
        </span>

        <h1 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold text-navy sm:text-4xl">
          Meet Our Doctors
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#647368] sm:text-lg">
          Experienced specialists offering personalised guidance and
          coordinated breast cancer care.
        </p>

      </section>

      {/* Individual search and filter boxes */}
      <section className="page-container px-5 pb-5 sm:px-8 lg:px-12">

        <div className="flex flex-col flex-wrap items-stretch gap-3 py-3 sm:flex-row sm:items-center sm:gap-4">

          {/* Search box */}
          <label 
          className="flex min-h-[48px] min-w-0 flex-1 items-center gap-3 rounded-xl border border-line bg-white px-4 text-royal shadow-sm transition focus-within:border-sky sm:min-w-[250px]"
          // className="flex min-h-[48px] min-w-0 flex-1 items-center gap-3 rounded-xl border border-line bg-white px-4 text-royal shadow-sm transition hover:border-royal focus-within:border-sky focus-within:ring-2 focus-within:ring-sky/15 sm:min-w-[250px]"
          >

            <Search
              size={19}
              className="shrink-0 text-royal"
            />

            <input
            type="text"
              // type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search doctors by name or speciality"
              aria-label="Search doctors by name or speciality"
              className="w-full min-w-0 border-0 bg-transparent p-0 text-base text-navy outline-none placeholder:text-[#87958a] focus:border-0 focus:outline-none focus:ring-0"
            />

            {search && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearch("")}
                className="shrink-0 text-[#718075] hover:text-royal"
              >
                <X size={17} />
              </button>
            )}
          </label>

          {/* Speciality filter box */}
          <label 
          className="flex min-h-[48px] min-w-0 items-center gap-2 rounded-xl border border-line bg-white px-4 shadow-sm transition focus-within:border-sky sm:flex-none"
          // className="flex min-h-[48px] min-w-0 items-center gap-2 rounded-xl border border-line bg-white px-4 shadow-sm transition hover:border-royal focus-within:border-sky focus-within:ring-2 focus-within:ring-sky/15 sm:flex-none"
          >

            {/* <span className="shrink-0 text-sm font-semibold text-navy">
              Speciality
            </span> */}

            <select
              value={speciality}
              onChange={(event) => setSpeciality(event.target.value)}
              aria-label="Filter by speciality"
              className="min-w-0 flex-1 cursor-pointer border-0 bg-transparent py-2 pl-1 pr-5 text-sm font-semibold text-royal outline-none focus:outline-none focus:ring-0 sm:max-w-[210px]"
              // className="min-w-0 flex-1 cursor-pointer border-0 bg-transparent py-2 pl-1 pr-5 text-sm font-semibold text-royal outline-none focus:ring-0 sm:max-w-[210px]"
            >
              <option value="">All specialities</option>

              {oncologySpecialities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

          </label>

          {/* Location filter box */}
          <label 
          className="flex min-h-[48px] min-w-0 items-center gap-2 rounded-xl border border-line bg-white px-4 shadow-sm transition focus-within:border-sky sm:flex-none"
          // className="flex min-h-[48px] min-w-0 items-center gap-2 rounded-xl border border-line bg-white px-4 shadow-sm transition hover:border-royal focus-within:border-sky focus-within:ring-2 focus-within:ring-sky/15 sm:flex-none"
          >

            {/* <span className="shrink-0 text-sm font-semibold text-navy">
              Location
            </span> */}

            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              aria-label="Filter by location"
              className="min-w-0 flex-1 cursor-pointer border-0 bg-transparent py-2 pl-1 pr-5 text-sm text-royal outline-none focus:outline-none focus:ring-0 sm:max-w-[220px]"
              // className="min-w-0 flex-1 cursor-pointer border-0 bg-transparent py-2 pl-1 pr-5 text-sm  sm:max-w-[220px]"
            >
              <option value="">All locations</option>

              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

          </label>

          {/* Clear filters */}
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#e87744] bg-white px-4 py-2 text-sm font-semibold text-sky transition hover:bg-sky hover:text-white"
            >
              <X size={16} />
              Clear Filters
            </button>
          )}

        </div>

        {/* Results count - original style */}
        <div className="flex items-center justify-between py-4 text-base text-[#718075]">
          <span>
            <strong className="text-navy">
              {filteredDoctors.length}
            </strong>{" "}
            doctors found
          </span>

          <span className="hidden sm:inline">
            Choose a specialist to view their profile
          </span>
        </div>

      </section>

      {/* Doctors cards - original layout */}
      <section className="page-container px-5 pb-14 sm:px-8 lg:px-12">

        {filteredDoctors.length ? (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {filteredDoctors.map((doctor, index) => (
              <article
                key={doctor.id}
                className="group flex h-full animate-[fade-up_.55s_ease_both] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >

                <Link
                  to={`/doctors/${doctor.slug}`}
                  aria-label={`View ${doctor.name} profile`}
                  className="block overflow-hidden bg-ice"
                >
                  <div className="h-[245px] overflow-hidden sm:h-[220px] lg:h-[205px] xl:h-[235px]">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />

                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-4 sm:p-5">

                  <h2 className="font-display text-lg font-bold leading-snug text-navy">
                    {doctor.name}
                  </h2>

                  <p className="mt-1 text-base leading-6 text-[#647368]">
                    {doctor.designation}
                  </p>

                  <p className="mt-1 text-base font-semibold leading-6 text-royal">
                    {doctor.speciality}
                  </p>

                  <div className="mt-3 space-y-2 text-base text-[#647368]">

                    <p className="flex items-start gap-2">
                      <BriefcaseMedical
                        size={16}
                        className="mt-1 shrink-0 text-royal"
                      />
                      <span>
                        {doctor.experience}+ Years Experience
                      </span>
                    </p>

                    <p className="flex items-start gap-2">
                      <MapPin
                        size={16}
                        className="mt-1 shrink-0 text-royal"
                      />
                      <span>{doctor.location}</span>
                    </p>

                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2 pt-5">

                    <Link
                      to={`/doctors/${doctor.slug}`}
                      className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full border border-royal px-2 py-2 text-center text-sm font-bold text-royal transition hover:bg-royal hover:text-white"
                    >
                      View Profile
                      <ArrowRight size={13} />
                    </Link>

                    <Link
                      to={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
                      className="inline-flex min-h-10 items-center justify-center rounded-full border border-royal bg-royal px-2 py-2 text-center text-sm font-bold text-white transition hover:border-navy hover:bg-navy"
                    >
                      Book Appointment
                    </Link>

                  </div>

                </div>
              </article>
            ))}

          </div>

        ) : (

          <div className="py-16 text-center text-[#718075]">

            <UserRound
              size={42}
              className="mx-auto text-royal"
            />

            <h2 className="mt-3 font-display text-xl font-bold text-navy">
              No doctors found
            </h2>

            <p className="mt-2 text-base">
              Try another name, speciality or location.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 font-semibold text-sky hover:underline"
            >
              Clear filters
            </button>

          </div>

        )}

      </section>

      {/* Health Talks */}
      {healthTalkItems.length > 0 && (
        <ContentVideoCarousel
          eyebrow="WATCH & LEARN"
          title="Doctors' Health Talks"
          subtitle="Explore cancer awareness and treatment guidance shared by our specialists."
          items={healthTalkItems}
          slidesPerView={4}
          autoPlay
          interval={4200}
        />
      )}

    </main>
  );
}
