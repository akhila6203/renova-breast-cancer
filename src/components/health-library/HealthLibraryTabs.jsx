
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  PlayCircle,
  CircleHelp,
  ArrowRight,
  X,
  Maximize2,
} from "lucide-react";

import {
  healthBlogs,
  healthVideos,
  healthFaqs,
} from "../../data/healthLibraryData";

import BlogCard from "./BlogCard";
import FaqAccordion from "./FaqAccordion";

const RESOURCE_TABS = [
  { id: "blogs", label: "Blogs", Icon: BookOpen },
  { id: "videos", label: "Videos", Icon: PlayCircle },
  { id: "faqs", label: "FAQs", Icon: CircleHelp },
];

export default function HealthLibraryTabs({ initialTab = "blogs" }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const visibleBlogs = healthBlogs.slice(0, 4);
  const visibleVideos = healthVideos.slice(0, 4);
  const visibleFaqs = healthFaqs.slice(0, 5);

  return (
    <section>
      {/* CENTER HEADING */}
      <div className="mx-auto mb-9 max-w-3xl text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="h-[3px] w-8 rounded-full bg-[#E87744]" />
          <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F7359]">
            RENOVA HEALTH LIBRARY
          </span>
          <span className="h-[3px] w-8 rounded-full bg-[#E87744]" />
        </div>

        <h2 className="display-font text-3xl font-extrabold text-[#243528] sm:text-4xl">
          Explore Our Resources
        </h2>

        <p className="mt-4 text-base leading-8 text-[#3D4A40]">
          Read informative articles, watch educational videos and find
          answers to common questions about cancer care.
        </p>
      </div>

      {/* CENTER TABS */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {RESOURCE_TABS.map(({ id, label, Icon }) => {
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              aria-pressed={isActive}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 py-3 text-sm font-bold transition duration-300 ${
                isActive
                  ? "border-[#4F7359] bg-[#4F7359] text-white shadow-md"
                  : "border-[#D4E0D6] bg-white text-[#4F7359] hover:border-[#E87744] hover:bg-[#FFF5EF] hover:text-[#E87744]"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          );
        })}
      </div>

      {/* BLOGS */}
      {activeTab === "blogs" && (
        <div>
          {visibleBlogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-white p-8 text-center text-[#3D4A40]">
              Blogs will be available soon.
            </p>
          )}

          <div className="mt-9 text-center">
            <Link
              to="/health-library/blogs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4F7359] px-4 py-2 text-[16px] font-bold text-white transition hover:bg-[#E87744]"
            >
              View All Blogs
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}

      {/* VIDEOS */}
      {activeTab === "videos" && (
        <div>
          {visibleVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visibleVideos.map((video, index) => (
                <article
                  key={video.id || video.youtubeId || video.title || index}
                  className="overflow-hidden rounded-2xl border border-[#D4E0D6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (video.youtubeId) setSelectedVideo(video);
                    }}
                    disabled={!video.youtubeId}
                    aria-label={
                      video.youtubeId
                        ? `Play ${video.title}`
                        : `${video.title} video coming soon`
                    }
                    className={`group relative block aspect-video w-full overflow-hidden bg-[#E8F0EA] ${
                      video.youtubeId ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-2 text-[#4F7359]">
                        <PlayCircle size={42} />
                        <span className="text-xs font-semibold">
                          {video.youtubeId ? "Play Video" : "Video coming soon"}
                        </span>
                      </div>
                    )}

                    {video.youtubeId && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/30">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E87744] text-white shadow-lg transition group-hover:scale-110">
                          <PlayCircle size={30} />
                        </span>
                      </span>
                    )}
                  </button>

                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4F7359]">
                      {video.category || "RENOVA EDUCATION"}
                    </span>

                    <h3 className="mt-2 line-clamp-2 text-base font-bold leading-6 text-[#243528]">
                      {video.title}
                    </h3>

                    {video.youtubeId && (
                      <button
                        type="button"
                        onClick={() => setSelectedVideo(video)}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#4F7359] transition hover:text-[#E87744]"
                      >
                        Watch Video
                        <Maximize2 size={15} />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-white p-8 text-center text-[#3D4A40]">
              Videos will be available soon.
            </p>
          )}

          <div className="mt-9 text-center">
            <Link
              to="/health-library/videos-faqs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4F7359] px-4 py-2 text-[16px] font-bold text-white transition hover:bg-[#E87744]"
            >
              View All Videos
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}

      {/* FAQS */}
      {activeTab === "faqs" && (
        <div className="mx-auto max-w-4xl">
          {visibleFaqs.length > 0 ? (
            <FaqAccordion faqs={visibleFaqs} />
          ) : (
            <p className="rounded-xl bg-white p-8 text-center text-[#3D4A40]">
              FAQs will be available soon.
            </p>
          )}

          <div className="mt-9 text-center">
            <Link
              to="/health-library/videos-faqs?tab=faqs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4F7359] px-4 py-2 text-[16px] font-bold text-white transition hover:bg-[#E87744]"
            >
              View All FAQs
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}

      {/* VIDEO POPUP */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={() => setSelectedVideo(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.title}
          >
            <div className="flex items-center justify-between gap-4 bg-[#4F7359] px-5 py-4 text-white">
              <h3 className="line-clamp-2 text-base font-bold text-white sm:text-lg">
                {selectedVideo.title}
              </h3>

              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 transition hover:bg-[#E87744]"
              >
                <X size={22} />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="inline-flex items-center gap-2 rounded-full bg-[#4F7359] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#E87744]"
              >
                <X size={16} />
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}










