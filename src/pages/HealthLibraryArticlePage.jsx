
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock3,
  BookOpen,
} from "lucide-react";

import { healthBlogs } from "../data/healthLibraryData";
import appointmentsWave from "../assets/appointments-wave.jpg";

export default function HealthLibraryArticlePage() {
  const { slug } = useParams();

  const blog = healthBlogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-white px-5">
        <div className="text-center">
          <BookOpen
            size={52}
            className="mx-auto text-[#4F7359]"
          />

          <h1 className="display-font mt-5 text-3xl font-extrabold text-[#243528]">
            Article Not Found
          </h1>

          <p className="mt-4 text-base text-[#3D4A40]">
            Sorry, the requested article could not be found.
          </p>

          <Link
            to="/health-library/blogs"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4F7359] px-7 py-3 text-base font-bold text-white transition hover:bg-[#E87744]"
          >
            <ArrowLeft size={18} />
            View All Blogs
          </Link>
        </div>
      </main>
    );
  }

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

      <li>
        <Link
          to="/health-library/blogs"
          className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
        >
          Blogs
        </Link>
      </li>

      <li className="text-white/90 drop-shadow-md" aria-hidden="true">
        /
      </li>

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        Article
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

            <span className="text-[#373636]">/</span>

            <Link
              to="/health-library"
              className="font-semibold text-[#3D4A40] transition hover:text-[#E87744]"
            >
              Health Library
            </Link>

            <span className="text-[#4c4b4a]">/</span>

            <Link
              to="/health-library/blogs"
              className="font-semibold text-[#3D4A40] transition hover:text-[#E87744]"
            >
              Blogs
            </Link>

            <span className="text-[#454444]">/</span>

            <span className="font-bold text-[#4F7359]">
              Article
            </span>
          </nav>
        </div>
      </section> */}

      {/* ARTICLE CONTENT */}
      <article className="page-container px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* BACK TO BLOGS */}
        <div className="mb-10">
          <Link
            to="/health-library/blogs"
            className="inline-flex items-center gap-2 text-base font-bold text-[#4F7359] transition hover:text-[#E87744]"
          >
            <ArrowLeft size={19} />
            Back to All Blogs
          </Link>
        </div>

        {/* CENTERED ARTICLE HEADING */}
        <header className="mx-auto mb-12 max-w-5xl text-center">

          {/* CATEGORY AND READ TIME */}
          <div className="mb-7 flex flex-wrap items-center justify-center gap-4">

            <span className="rounded-full bg-[#E8F0EA] px-5 py-2 text-sm font-bold uppercase tracking-wider text-[#4F7359]">
              {blog.category}
            </span>

            <span className="flex items-center gap-2 text-sm font-semibold text-[#3D4A40]">
              <Clock3
                size={18}
                className="text-[#E87744]"
              />
              {blog.readTime}
            </span>

          </div>

          {/* TITLE */}
          <h1 className="display-font text-3xl font-extrabold leading-tight text-[#243528] sm:text-4xl lg:text-5xl xl:text-[52px]">
            {blog.title}
          </h1>

          {/* EXCERPT */}
          {blog.excerpt && (
            <p className="mx-auto mt-7 max-w-4xl text-lg leading-9 text-[#3D4A40] sm:text-xl sm:leading-10">
              {blog.excerpt}
            </p>
          )}

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#E87744]" />

        </header>

        {/* FEATURE IMAGE */}
        {blog.image && (
          <div className="mx-auto mb-14 max-w-6xl overflow-hidden rounded-2xl bg-[#E8F0EA] shadow-lg">

            <img
              src={blog.image}
              alt={blog.title}
              className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[500px]"
            />

          </div>
        )}

        {/* ARTICLE BODY */}
        <div className="mx-auto max-w-5xl">

          <div className="space-y-8">

            {blog.content?.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-9 text-[#3D4A40] sm:text-xl sm:leading-10"
              >
                {paragraph}
              </p>
            ))}

          </div>

          {/* MEDICAL DISCLAIMER */}
          <div className="mt-16 rounded-2xl border-l-4 border-[#E87744] bg-[#F6F9F6] p-6 sm:p-9">

            <div className="flex items-center gap-3">
              <BookOpen
                size={23}
                className="shrink-0 text-[#4F7359]"
              />

              <h2 className="display-font text-xl font-bold text-[#4F7359] sm:text-2xl">
                Important Medical Information
              </h2>
            </div>

            <p className="mt-4 text-base leading-8 text-[#3D4A40] sm:text-lg">
              This article is intended for general educational purposes
              only. It does not replace professional medical advice,
              diagnosis or treatment. Please consult your oncologist
              or qualified healthcare professional for advice about
              your individual condition.
            </p>

          </div>

          {/* BACK TO BLOGS BUTTON */}
          <div className="mt-12 border-t border-[#D4E0D6] pt-9 text-center">

            <Link
              to="/health-library/blogs"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#4F7359] px-8 py-3 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#E87744] hover:shadow-lg"
            >
              <ArrowLeft size={19} />
              Back to All Blogs
            </Link>

          </div>

        </div>
      </article>
    </main>
  );
}








