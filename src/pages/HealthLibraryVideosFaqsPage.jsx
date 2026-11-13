
import { useEffect, useState } from "react";
import {
  PlayCircle,
  ChevronDown,
  X,
  ArrowRight,
  Video,
  CircleHelp,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  healthVideos,
  healthFaqs,
} from "../data/healthLibraryData";

import appointmentsWave from "../assets/appointments-wave.jpg";

const INITIAL_VIDEOS = 16;
const LOAD_MORE_VIDEOS = 8;

const INITIAL_FAQS = 10;
const LOAD_MORE_FAQS = 5;

export default function HealthLibraryVideosFaqsPage() {
  const [tab, setTab] = useState("videos");

  const [visibleVideos, setVisibleVideos] = useState(INITIAL_VIDEOS);
  const [visibleFaqs, setVisibleFaqs] = useState(INITIAL_FAQS);

  const [openFaq, setOpenFaq] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Close video popup with Escape key
  useEffect(() => {
    if (!selectedVideo) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  const displayedVideos = healthVideos.slice(0, visibleVideos);
  const displayedFaqs = healthFaqs.slice(0, visibleFaqs);

  const handleLoadMoreVideos = () => {
    setVisibleVideos((current) =>
      Math.min(current + LOAD_MORE_VIDEOS, healthVideos.length)
    );
  };

  const handleLoadMoreFaqs = () => {
    setVisibleFaqs((current) =>
      Math.min(current + LOAD_MORE_FAQS, healthFaqs.length)
    );
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

 // Extract YouTube video ID from either a full URL or an ID
const getYouTubeVideoId = (value) => {
  if (!value) return "";

  // Already a video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return value;
  }

  try {
    const url = new URL(value);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (url.pathname.includes("/shorts/")) {
      return url.pathname.split("/shorts/")[1]?.split("/")[0] || "";
    }

    if (url.pathname.includes("/embed/")) {
      return url.pathname.split("/embed/")[1]?.split("/")[0] || "";
    }

    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
};

// Generate YouTube thumbnail automatically
const getVideoThumbnail = (video) => {
  const videoId = getYouTubeVideoId(video?.youtubeId);

  if (!videoId) return "";

  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

// Generate YouTube embed URL
const getVideoEmbedUrl = (video) => {
  const videoId = getYouTubeVideoId(video?.youtubeId);

  if (!videoId) return "";

  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
};

  return (
    <main className="min-h-screen bg-white">

      {/* BREADCRUMB STRIP */}
      {/* BREADCRUMB */}
<nav
  aria-label="Breadcrumb"
  className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
  style={{
    backgroundImage: `url(${appointmentsWave})`,
  }}
>
  <div className="page-container relative z-10 mx-auto px-5 py-4 sm:px-8 lg:px-12">
    <ol className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-sm">
      <li>
        <Link
          to="/"
          className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
        >
          Home
        </Link>
      </li>

      <li className="text-white/90 drop-shadow-md" aria-hidden="true">
        /
      </li>

      <li>
        <Link
          to="/health-library"
          className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
        >
          Health Library
        </Link>
      </li>

      <li className="text-white/90 drop-shadow-md" aria-hidden="true">
        /
      </li>

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        Videos & FAQs
      </li>
    </ol>
  </div>
</nav>
      {/* <section className="border-b border-[#D4E0D6] bg-[#F6F9F6]">
        <div className="page-container px-5 py-4 sm:px-8 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-sm"
          >
            <Link
              to="/"
              className="font-semibold text-[#3D4A40] transition hover:text-[#E87744]"
            >
              Home
            </Link>

            <span className="text-[#383837]">/</span>

            <Link
              to="/health-library"
              className="font-semibold text-[#3D4A40] transition hover:text-[#E87744]"
            >
              Health Library
            </Link>

            <span className="text-[#353534]">/</span>

            <span className="font-bold text-[#4F7359]">
              Videos & FAQs
            </span>
          </nav>
        </div>
      </section> */}

      {/* MAIN CONTENT */}
      <section className="page-container px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

        {/* CENTERED TABS */}
        <div className="mb-10 flex justify-center">
          <div
            className="inline-flex flex-wrap justify-center gap-2 p-2"
            role="tablist"
            aria-label="Health library content"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "videos"}
              onClick={() => setTab("videos")}
              className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-300 sm:px-10 ${
                tab === "videos"
                  ? "bg-[#4F7359] text-white shadow-md"
                  : "bg-transparent text-[#3D4A40] hover:bg-[#E8F0EA] hover:text-[#4F7359]"
              }`}
            >
              <PlayCircle size={19} />
              Videos
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  tab === "videos"
                    ? "bg-white/20 text-white"
                    : "bg-[#E8F0EA] text-[#4F7359]"
                }`}
              >
                {healthVideos.length}
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={tab === "faqs"}
              onClick={() => setTab("faqs")}
              className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-300 sm:px-10 ${
                tab === "faqs"
                  ? "bg-[#4F7359] text-white shadow-md"
                  : "bg-transparent text-[#3D4A40] hover:bg-[#E8F0EA] hover:text-[#4F7359]"
              }`}
            >
              <CircleHelp size={19} />
              FAQs
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  tab === "faqs"
                    ? "bg-white/20 text-white"
                    : "bg-[#E8F0EA] text-[#4F7359]"
                }`}
              >
                {healthFaqs.length}
              </span>
            </button>
          </div>
        </div>

        {/* ================= VIDEOS TAB ================= */}
        {tab === "videos" && (
          <section role="tabpanel">

            {/* VIDEO COUNT */}
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3  pb-4">
              <div className="flex items-center gap-3">
                <Video
                  size={21}
                  className="text-[#4F7359]"
                />

                <p className="text-sm font-semibold text-[#3D4A40] sm:text-base">
                  Showing{" "}
                  <span className="font-bold text-[#4F7359]">
                    {displayedVideos.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-bold text-[#4F7359]">
                    {healthVideos.length}
                  </span>{" "}
                  videos
                </p>
              </div>
            </div>

            {/* VIDEO GRID */}
            {displayedVideos.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {displayedVideos.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    aria-label={`Play ${video.title}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4E0D6] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#E87744]/60 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F7359]"
                  >
                    {/* VIDEO THUMBNAIL */}
                    {/* VIDEO THUMBNAIL */}
<div className="relative aspect-video w-full overflow-hidden bg-[#E8F0EA]">

  {getVideoThumbnail(video) ? (
    <img
      src={getVideoThumbnail(video)}
      alt={video.title}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#E8F0EA] to-[#F6F9F6]">
      <Video
        size={45}
        className="text-[#4F7359]/50"
      />
    </div>
  )}

  {/* PLAY BUTTON */}
  <div className="absolute inset-0 flex items-center justify-center bg-[#243528]/10 transition duration-300 group-hover:bg-[#243528]/30">

    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#4F7359] shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-[#E87744] group-hover:text-white">
      <PlayCircle size={32} />
    </span>

  </div>

  <span className="absolute bottom-3 left-3 rounded-full bg-[#243528]/75 px-3 py-1 text-xs font-semibold text-white">
    {getYouTubeVideoId(video.youtubeId) ? "Watch Video" : "Coming Soon"}
  </span>

</div>

                    {/* VIDEO TITLE */}
                    <div className="flex flex-1 flex-col p-5">

                      <h2 className="line-clamp-3 text-base font-bold leading-7 text-[#243528] transition-colors group-hover:text-[#4F7359]">
                        {video.title}
                      </h2>

                      {/* <div className="mt-4 flex items-center justify-between border-t border-[#D4E0D6] pt-4">
                        <span className="text-xs font-semibold text-[#4F7359]">
                          RENOVA Health Library
                        </span>

                        <PlayCircle
                          size={19}
                          className="text-[#E87744] transition-transform group-hover:scale-110"
                        />
                      </div> */}

                    </div>
                  </button>
                ))}

              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#D4E0D6] bg-[#F6F9F6] px-5 py-16 text-center">
                <Video
                  size={45}
                  className="mx-auto text-[#4F7359]"
                />

                <h2 className="mt-5 text-xl font-bold text-[#243528]">
                  Videos Coming Soon
                </h2>

                <p className="mt-3 text-base text-[#3D4A40]">
                  RENOVA educational videos will be available here soon.
                </p>
              </div>
            )}

            {/* LOAD MORE VIDEOS */}
            {visibleVideos < healthVideos.length && (
              <div className="mt-12 text-center">

                <button
                  type="button"
                  onClick={handleLoadMoreVideos}
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#4F7359] px-9 py-3 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#E87744] hover:shadow-lg"
                >
                  Load More Videos
                  <ArrowRight size={19} />
                </button>

                <p className="mt-4 text-sm text-[#3D4A40]">
                  Showing {displayedVideos.length} of {healthVideos.length} videos
                </p>

              </div>
            )}

          </section>
        )}

        {/* ================= FAQ TAB ================= */}
        {tab === "faqs" && (
          <section
            role="tabpanel"
            className="mx-auto max-w-5xl"
          >

            {/* FAQ HEADING */}
            <div className="mb-8 text-center">

              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-[#E87744]" />

                <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F7359]">
                  PATIENT INFORMATION
                </span>

                <span className="h-[2px] w-9 rounded-full bg-[#E87744]" />
              </div>

              <h2 className="display-font text-2xl font-extrabold text-[#243528] sm:text-3xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#3D4A40]">
                Find answers to common questions about cancer awareness,
                diagnosis, treatment and patient care.
              </p>

            </div>

            {/* FAQ COUNT */}
            <div className="mb-5 flex items-center justify-between pb-4">
              <p className="text-sm font-semibold text-[#3D4A40]">
                Showing{" "}
                <span className="font-bold text-[#4F7359]">
                  {displayedFaqs.length}
                </span>{" "}
                of{" "}
                <span className="font-bold text-[#4F7359]">
                  {healthFaqs.length}
                </span>{" "}
                questions
              </p>
            </div>

            {/* FAQ ACCORDION */}
            {displayedFaqs.length > 0 ? (
              <div className="divide-y divide-[#D4E0D6] overflow-hidden rounded-2xl border border-[#D4E0D6] bg-white">

                {displayedFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <article
                      key={faq.id || faq.question || index}
                      className="bg-white transition-colors hover:bg-[#F6F9F6]/70"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                      >

                        <span className="flex min-w-0 items-start gap-4">

                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F0EA] text-sm font-bold text-[#4F7359]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={`text-base font-bold leading-7 transition-colors sm:text-lg ${
                              isOpen
                                ? "text-[#4F7359]"
                                : "text-[#243528]"
                            }`}
                          >
                            {faq.question}
                          </span>

                        </span>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 bg-[#4F7359] text-white"
                              : "bg-[#E8F0EA] text-[#4F7359]"
                          }`}
                        >
                          <ChevronDown size={20} />
                        </span>

                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 pl-[68px] sm:px-7 sm:pb-7 sm:pl-[76px]">

                          <p className="text-base leading-8 text-[#3D4A40] sm:text-lg">
                            {faq.answer}
                          </p>

                        </div>
                      )}
                    </article>
                  );
                })}

              </div>
            ) : (
              <div className="rounded-xl bg-[#F6F9F6] p-8 text-center">
                <p className="text-base text-[#3D4A40]">
                  FAQs will be available soon.
                </p>
              </div>
            )}

            {/* LOAD MORE FAQS */}
            {visibleFaqs < healthFaqs.length && (
              <div className="mt-10 text-center">

                <button
                  type="button"
                  onClick={handleLoadMoreFaqs}
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#4F7359] px-9 py-3 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#E87744] hover:shadow-lg"
                >
                  Load More FAQs
                  <ArrowRight size={19} />
                </button>

                <p className="mt-4 text-sm text-[#3D4A40]">
                  Showing {displayedFaqs.length} of {healthFaqs.length} questions
                </p>

              </div>
            )}

          </section>
        )}

      </section>

      {/* ================= VIDEO POPUP MODAL ================= */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#14251D]/90 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeVideo();
            }
          }}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.title}
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between gap-4 border-b border-[#D4E0D6] bg-[#F6F9F6] px-4 py-4 sm:px-6">

              <div className="flex min-w-0 items-center gap-3">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F0EA] text-[#4F7359]">
                  <PlayCircle size={23} />
                </span>

                <h2 className="line-clamp-2 text-sm font-bold text-[#243528] sm:text-lg">
                  {selectedVideo.title}
                </h2>

              </div>

              <button
                type="button"
                onClick={closeVideo}
                aria-label="Close video"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#4F7359] shadow-sm transition hover:bg-[#E87744] hover:text-white"
              >
                <X size={23} />
              </button>

            </div>

            {/* VIDEO PLAYER */}
            <div className="aspect-video w-full bg-black">

              {selectedVideo.youtubeId ? (
                <iframe
                  key={selectedVideo.youtubeId}
                  className="h-full w-full"
                  src={getVideoEmbedUrl(selectedVideo)}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-[#243528] px-5 text-center">

                  <PlayCircle
                    size={65}
                    className="text-[#E87744]"
                  />

                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Video Coming Soon
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-white/70">
                    The video player will be available once the YouTube
                    video ID is added to the RENOVA Health Library data.
                  </p>

                </div>
              )}

            </div>

            {/* MODAL FOOTER */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">

              <p className="text-xs font-semibold text-[#4F7359] sm:text-sm">
                RENOVA Health Library
              </p>

              <button
                type="button"
                onClick={closeVideo}
                className="inline-flex items-center gap-2 rounded-full bg-[#E87744] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#4F7359]"
              >
                <X size={17} />
                Close Video
              </button>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}




