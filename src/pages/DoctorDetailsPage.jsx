
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  MapPin,
  GraduationCap,
  BriefcaseMedical,
  Award,
  BookOpen,
  Languages,
  ArrowRight,
  UserRound,
  Stethoscope,
  Users,
  Microscope,
  BadgeCheck,
} from "lucide-react";

import { doctors } from "../data/doctorsData";
import ContentVideoCarousel from "../components/ContentVideoCarousel";

const tabs = [
  { id: "about", label: "About Doctor", icon: UserRound },
  { id: "education", label: "Education & Training", icon: GraduationCap, field: "education" },
  { id: "experience", label: "Professional Experience", icon: BriefcaseMedical, field: "professionalExperience" },
  { id: "conferences", label: "Conferences & Workshops", icon: Users, field: "conferences" },
  { id: "awards", label: "Awards & Recognition", icon: Award, field: "awards" },
  { id: "membership", label: "Fellow Membership", icon: BadgeCheck, field: "memberships" },
  { id: "expertise", label: "Areas of Expertise", icon: Stethoscope, field: "expertise" },
  { id: "research", label: "Research & Publications", icon: BookOpen, field: "research" },
  { id: "procedures", label: "Procedures & Treatments", icon: Microscope, field: "procedures" },
  { id: "languages", label: "Languages", icon: Languages, field: "languages" },
];

// Extract YouTube video ID correctly.

function getYouTubeId(url = "") {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");

    let videoId = "";

    if (host === "youtu.be") {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] || "";
    } else if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      videoId =
        parsedUrl.searchParams.get("v") ||
        parsedUrl.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1] ||
        "";
    }

    if (!videoId || videoId.startsWith("YOUR_VIDEO_ID")) {
      return "";
    }

    return videoId;
  } catch {
    return "";
  }
}


export default function DoctorDetailsPage() {
  const { slug } = useParams();

  const [activeTab, setActiveTab] = useState("about");

  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    return (
      <main className="page-container min-h-[60vh] px-5 py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-navy">
          Doctor profile not found
        </h1>

        <Link
          to="/doctors"
          className="mt-5 inline-flex rounded-full bg-royal px-6 py-3 font-semibold text-white hover:bg-royaldeep"
        >
          Back to Doctors
        </Link>
      </main>
    );
  }

  const active = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const ActiveIcon = active.icon;

  const list = active.field ? doctor[active.field] || [] : [];

  // ---------------------------------------
  // HEALTH TALK VIDEO DATA
  // ---------------------------------------

 
  // HEALTH TALK VIDEOS
  const healthTalkItems = (Array.isArray(doctor.healthTalk)
    ? doctor.healthTalk
    : doctor.healthTalk?.youtubeUrl
      ? [doctor.healthTalk]
      : []
  )
    .map((video) => {
      const videoId = getYouTubeId(video.youtubeUrl);

      if (!videoId) return null;

      return {
        title: video.title || "Doctor Health Talk",
        category: doctor.speciality,
        href: video.youtubeUrl,
        thumbnail:
          video.thumbnail ||
          `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      };
    })
    .filter(Boolean);

  // PATIENT TESTIMONIAL VIDEOS
  const testimonialItems = (doctor.testimonialVideos || [])
    .map((video) => {
      const videoId = getYouTubeId(video.youtubeUrl);

      if (!videoId) return null;

      return {
        title: video.title || "Patient Testimonial",
        category: "Patient story",
        href: video.youtubeUrl,
        thumbnail:
          video.thumbnail ||
          `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      };
    })
    .filter(Boolean);


  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-ink">

      {/* BREADCRUMB - ORIGINAL DESIGN */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-line bg-mist"
      >
        <div className="page-container px-5 py-3 sm:px-8 lg:px-12">

          <ol className="flex flex-wrap items-center gap-2 text-base">

            <li>
              <Link
                to="/"
                className="font-medium text-royal hover:text-sky"
              >
                Home
              </Link>
            </li>

            <li className="text-[#aab5aa]">/</li>

            <li>
              <Link
                to="/doctors"
                className="font-medium text-royal hover:text-sky"
              >
                Doctors
              </Link>
            </li>

            <li className="text-[#aab5aa]">/</li>

            <li className="font-semibold text-navy">
              {doctor.name}
            </li>

          </ol>
        </div>
      </nav>

      {/* DOCTOR HERO SECTION - ORIGINAL DESIGN */}
      <section className="bg-ice">

        <div className="page-container grid items-center gap-7 px-5 py-7 sm:px-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-10 lg:px-12 lg:py-8">

          {/* DOCTOR IMAGE */}
          <div className="flex h-[320px] items-end justify-center overflow-hidden sm:h-[380px] lg:h-[430px]">
          {/* <div className="flex h-[270px] items-end justify-center overflow-hidden sm:h-[320px] lg:h-[340px]"> */}

            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-contain object-bottom"
            />

          </div>

          {/* DOCTOR INFORMATION */}
          <div className="py-2 lg:py-5">

            <span className="text-sm font-bold tracking-[0.18em] text-sky">
              RENOVA SPECIALIST
            </span>

            <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {doctor.name}
            </h1>

            <p className="mt-3 text-lg font-semibold text-royal">
              {doctor.designation}
            </p>

            <p className="mt-2 text-base leading-7 text-[#526357]">
              {(doctor.qualifications || []).join(", ")}
            </p>

            <div className="mt-5 flex flex-col gap-3">

              <div>
                <h2 className="text-lg font-bold text-navy">
                  Speciality
                </h2>

                <p className="mt-1 text-base text-[#405247]">
                  {doctor.speciality}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-navy">
                  Location
                </h2>

                <p className="mt-1 flex items-start gap-2 text-base text-[#405247]">
                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-royal"
                  />

                  {doctor.location}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-navy">
                  Experience
                </h2>

                <p className="mt-1 text-base text-[#405247]">
                  {doctor.experience}+ Years
                </p>
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                to={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-base font-bold text-white transition hover:bg-royaldeep"
              >
                Book Appointment
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/doctors"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-royal px-6 py-3 text-base font-bold text-royal transition hover:bg-white"
              >
                All Doctors
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR DETAILS AND TABS - ORIGINAL DESIGN */}
      <section className="page-container grid gap-7 px-5 py-9 sm:px-8 lg:grid-cols-[290px_1fr] lg:gap-8 lg:px-12 lg:py-12">

        {/* LEFT SIDE TABS */}
        <aside
          aria-label="Doctor profile sections"
          className="flex gap-1 overflow-x-auto border-b border-line pb-1 lg:flex-col lg:self-start lg:overflow-visible lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4"
        >

          {tabs.map((tab) => {
            const Icon = tab.icon;

            const selected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-current={selected ? "page" : undefined}
                className={`flex shrink-0 items-center gap-3 whitespace-nowrap border-b-[3px] px-3 py-3 text-left text-sm transition sm:text-base lg:w-full lg:border-b-0 lg:border-l-4 lg:py-3 ${
                  selected
                    ? "border-sky bg-ice font-bold text-navy lg:border-royal"
                    : "border-transparent text-[#405247] hover:bg-mist hover:text-royal"
                }`}
              >

                <Icon
                  size={19}
                  className="shrink-0 text-royal"
                />

                <span>{tab.label}</span>

              </button>
            );
          })}

        </aside>

        {/* RIGHT SIDE CONTENT */}
        <div
          key={activeTab}
          className="min-h-[300px] animate-[fade-up_.3s_ease_both] px-1 py-1 sm:px-3"
        >

          <div className="flex items-center gap-3">

            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ice text-royal">
              <ActiveIcon size={22} />
            </span>

            <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
              {active.label}
            </h2>

          </div>

          {/* ABOUT DOCTOR */}
          {activeTab === "about" ? (

            <div className="mt-5 space-y-4 text-base leading-8 text-[#526357]">

              <p>
                {doctor.about}
              </p>

              <p>
                {doctor.name} has {doctor.experience} years of sample
                professional experience in {doctor.speciality.toLowerCase()}.
                This profile contains demonstration content and must be
                verified before publication.
              </p>

              <div>

                <h3 className="font-display text-lg font-bold text-navy">
                  Cancer specialties
                </h3>

                <p className="mt-2">
                  {(doctor.cancerSpecialties || []).join(" • ")}
                </p>

              </div>

            </div>

          ) : list.length ? (

            /* OTHER DETAILS */
            <ul className="mt-5 divide-y divide-[#edf1ed]">

              {list.map((item, index) => (

                <li
                  key={`${activeTab}-${index}`}
                  className="flex items-start gap-3 py-3 text-base leading-7 text-[#526357]"
                >

                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky" />

                  {item}

                </li>

              ))}

            </ul>

          ) : (

            <p className="mt-5 text-base text-[#718075]">
              Details will be updated soon.
            </p>

          )}

        </div>
      </section>

      {/* ---------------------------------
          DOCTOR HEALTH TALKS
      ---------------------------------- */}

      {healthTalkItems.length > 0 && (
        <ContentVideoCarousel
          eyebrow="WATCH & LEARN"
          title="Doctor Health Talk"
          subtitle={`Cancer awareness and treatment guidance from ${doctor.name}.`}
          items={healthTalkItems}
          slidesPerView={4}
          autoPlay={false}
        />
      )}

      {/* ---------------------------------
          PATIENT TESTIMONIALS
      ---------------------------------- */}

      {testimonialItems.length > 0 && (
        <ContentVideoCarousel
          eyebrow="PATIENT STORIES"
          title="Patient Testimonials"
          subtitle={`Patient experiences and stories related to ${doctor.name}.`}
          items={testimonialItems}
          slidesPerView={4}
          autoPlay
          interval={4500}
          background="white"
        />
      )}

    </main>
  );
}



