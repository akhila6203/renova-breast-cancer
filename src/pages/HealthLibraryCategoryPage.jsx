
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

import {
  healthCategories,
  healthBlogs,
} from "../data/healthLibraryData";

import BlogCard from "../components/health-library/BlogCard";

export default function HealthLibraryCategoryPage() {
  const { slug } = useParams();

  const category = healthCategories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-5">
        <div className="text-center">
          <BookOpen size={46} className="mx-auto text-[#4F7359]" />
          <h1 className="mt-5 text-3xl font-bold text-[#243528]">
            Category Not Found
          </h1>
          <Link
            to="/health-library"
            className="mt-6 inline-flex items-center gap-2 font-bold text-[#4F7359] hover:text-[#E87744]"
          >
            <ArrowLeft size={17} />
            Back to Health Library
          </Link>
        </div>
      </main>
    );
  }

  const relatedBlogs = healthBlogs.filter(
    (blog) => blog.categorySlug === category.slug
  );

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <section className="border-b border-[#D4E0D6] bg-[#F6F9F6]">
        <div className="page-container px-5 py-4 sm:px-8 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm"
          >
            <Link to="/" className="font-medium text-slate-500 hover:text-[#E87744]">
              Home
            </Link>
            <span className="text-[#464544]">/</span>
            <Link
              to="/health-library"
              className="font-medium text-slate-500 hover:text-[#E87744]"
            >
              Health Library
            </Link>
            <span className="text-[#393838]">/</span>
            <span className="font-bold text-[#4F7359]">
              {category.title}
            </span>
          </nav>
        </div>
      </section>

      {/* CATEGORY HERO */}
      <section className="bg-gradient-to-br from-[#E8F0EA] via-[#F6F9F6] to-[#FFF5EF] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="page-container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-[3px] w-8 rounded-full bg-[#E87744]" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F7359]">
                RENOVA HEALTH LIBRARY
              </span>
              <span className="h-[3px] w-8 rounded-full bg-[#E87744]" />
            </div>

            <h1 className="display-font text-3xl font-extrabold text-[#243528] sm:text-4xl lg:text-5xl">
              {category.title}
            </h1>

            <p className="mt-5 text-base font-semibold leading-7 text-[#E87744] sm:text-lg">
              {category.subtitle}
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#3D4A40]">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY INTRODUCTION */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="page-container">
          <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F7359]">
                UNDERSTANDING THE TOPIC
              </span>

              <h2 className="display-font mt-3 text-2xl font-extrabold leading-tight text-[#243528] sm:text-3xl">
                What Is {category.title}?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#3D4A40]">
                {category.introduction}
              </p>

              <p className="mt-4 text-base leading-8 text-[#3D4A40]">
                {category.whyItMatters}
              </p>

              <Link
                to="/health-library"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#4F7359] transition hover:text-[#E87744]"
              >
                <ArrowLeft size={17} />
                Back to Health Library
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-[#E8F0EA] shadow-lg">
              <img
                src={category.image}
                alt={category.title}
                className="h-72 w-full object-cover sm:h-[400px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-6">
                <p className="text-lg font-bold text-white">
                  {category.title}
                </p>
                <p className="mt-1 text-sm text-white/90">
                  Patient education guide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED INFORMATION */}
      <section className="bg-[#F6F9F6] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="page-container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F7359]">
              LEARN MORE
            </span>

            <h2 className="display-font mt-3 text-3xl font-extrabold text-[#243528] sm:text-4xl">
              A Closer Look at {category.title}
            </h2>

            <p className="mt-4 text-base leading-8 text-[#3D4A40]">
              Explore the important information, explanations and key points
              related to this topic.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {(category.detailSections || []).map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-[#D4E0D6] bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F0EA] text-sm font-extrabold text-[#4F7359]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="display-font text-lg font-bold text-[#243528] sm:text-xl">
                    {section.title}
                  </h3>
                </div>

                <p className="text-sm leading-8 text-[#3D4A40]">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS COVERED */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="page-container">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F7359]">
              KEY AREAS
            </span>

            <h2 className="display-font mt-3 text-3xl font-extrabold text-[#243528] sm:text-4xl">
              Important Topics to Understand
            </h2>

            <p className="mt-4 text-base leading-8 text-[#3D4A40]">
              These are the main subjects covered in this section of the
              RENOVA Health Library.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(category.topics || []).map((topic, index) => (
              <div
                key={topic}
                className="flex items-start gap-3 rounded-xl border border-[#D4E0D6] bg-white p-5 transition hover:border-[#E87744]/60 hover:shadow-md"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#4F7359]"
                />
                <div>
                  <span className="text-xs font-bold text-[#E87744]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#243528]">
                    {topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED BLOGS */}
      {relatedBlogs.length > 0 && (
        <section className="bg-[#F6F9F6] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="page-container">
            <div className="mb-9 text-center">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F7359]">
                CONTINUE READING
              </span>

              <h2 className="display-font mt-3 text-3xl font-extrabold text-[#243528] sm:text-4xl">
                Related Articles
              </h2>

              <p className="mt-4 text-base leading-7 text-[#3D4A40]">
                Read more patient-friendly articles related to {category.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedBlogs.slice(0, 4).map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>

            <div className="mt-9 text-center">
              <Link
                to="/health-library/blogs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4F7359] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#E87744]"
              >
                View All Blogs
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* MEDICAL DISCLAIMER */}
      <section className="border-t border-[#D4E0D6] px-5 py-7 sm:px-8 lg:px-12">
        <div className="page-container">
          <p className="text-sm leading-7 text-[#3D4A40]">
            <strong className="text-[#243528]">
              Medical information disclaimer:
            </strong>{" "}
            This content is intended for general education. It does not
            replace an individual medical consultation, diagnosis or
            treatment plan. Please discuss your questions with your
            qualified healthcare professional.
          </p>
        </div>
      </section>
    </main>
  );
}










