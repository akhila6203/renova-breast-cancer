
import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  ArrowRight,
  BookOpen,
  SlidersHorizontal,
} from "lucide-react";

import {
  healthBlogs,
  healthCategories,
} from "../data/healthLibraryData";

import BlogCard from "../components/health-library/BlogCard";

import appointmentsWave from "../assets/appointments-wave.jpg";

const INITIAL_BLOGS = 16;
const LOAD_MORE_COUNT = 8;

export default function HealthLibraryBlogsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleBlogs, setVisibleBlogs] = useState(INITIAL_BLOGS);

  const filteredBlogs = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return healthBlogs.filter((blog) => {
      const matchesSearch =
        (blog.title || "").toLowerCase().includes(searchTerm) ||
        (blog.excerpt || "").toLowerCase().includes(searchTerm) ||
        (blog.category || "").toLowerCase().includes(searchTerm);

      const matchesCategory =
        selectedCategory === "all" ||
        blog.categorySlug === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  useEffect(() => {
    setVisibleBlogs(INITIAL_BLOGS);
  }, [search, selectedCategory]);

  const displayedBlogs = filteredBlogs.slice(0, visibleBlogs);

  const handleLoadMore = () => {
    setVisibleBlogs((previous) => previous + LOAD_MORE_COUNT);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setVisibleBlogs(INITIAL_BLOGS);
  };

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

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        Blogs
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

            <span className="text-[#4c4b4a]">/</span>

            <Link
              to="/health-library"
              className="font-semibold text-[#3D4A40] transition hover:text-[#E87744]"
            >
              Health Library
            </Link>

            <span className="text-[#484747]">/</span>

            <span className="font-bold text-[#4F7359]">
              Blogs
            </span>
          </nav>
        </div>
      </section> */}

      {/* BLOGS MAIN CONTENT */}
      <section className="page-container px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* CENTER HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#E87744]" />

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#4F7359]">
              Kaizen Oncology HEALTH LIBRARY
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#E87744]" />
          </div>

          <h1 className="display-font text-3xl font-extrabold text-[#243528] sm:text-4xl lg:text-5xl">
            Health & Wellness Blogs
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#3D4A40] sm:text-lg">
            Discover reliable information and helpful insights about
            cancer awareness, symptoms, diagnosis, treatments,
            prevention and survivorship.
          </p>

          {/* <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#E87744]" /> */}
        </div>

        {/* SEARCH AND FILTER */}
        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-[1fr_280px]">

          {/* SEARCH */}
          <div className="flex min-h-[56px] items-center gap-3 rounded-xl border border-[#D4E0D6] bg-white px-5 shadow-sm transition focus-within:border-[#4F7359] focus-within:ring-2 focus-within:ring-[#4F7359]/10">

            <Search
              size={21}
              className="shrink-0 text-[#4F7359]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search blogs and health articles..."
              aria-label="Search blogs"
              className="w-full bg-transparent text-base text-[#3D4A40] outline-none placeholder:text-slate-400"
            />
          </div>

          {/* CATEGORY FILTER */}
          <div className="relative flex min-h-[56px] items-center rounded-xl border border-[#D4E0D6] bg-white px-5 shadow-sm transition focus-within:border-[#4F7359]">

            <SlidersHorizontal
              size={19}
              className="mr-3 shrink-0 text-[#4F7359]"
            />

            <select
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
              aria-label="Filter blogs by category"
              className="w-full appearance-none bg-transparent pr-7 text-base font-semibold text-[#3D4A40] outline-none"
            >
              <option value="all">All Categories</option>

              {healthCategories.map((category) => (
                <option
                  key={category.slug}
                  value={category.slug}
                >
                  {category.title}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-5 text-[#4F7359]"
            />
          </div>
        </div>

        {/* RESULTS COUNT */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3  pb-4">

          <p className="text-sm font-medium text-[#3D4A40] sm:text-base">
            Showing{" "}
            <span className="font-bold text-[#4F7359]">
              {displayedBlogs.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-[#4F7359]">
              {filteredBlogs.length}
            </span>{" "}
            articles
          </p>

          {(search || selectedCategory !== "all") && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-bold text-[#E87744] transition hover:text-[#4F7359]"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* BLOG CARDS */}
        {displayedBlogs.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {displayedBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
              />
            ))}

          </div>

        ) : (

          /* NO RESULTS */
          <div className="rounded-2xl border border-dashed border-[#D4E0D6] bg-[#F6F9F6] px-5 py-16 text-center">

            <BookOpen
              size={45}
              className="mx-auto text-[#4F7359]"
            />

            <h2 className="display-font mt-5 text-2xl font-bold text-[#243528]">
              No Blogs Found
            </h2>

            <p className="mt-3 text-base text-[#3D4A40]">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#4F7359] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#E87744]"
            >
              View All Blogs
            </button>

          </div>
        )}

        {/* LOAD MORE */}
        {displayedBlogs.length < filteredBlogs.length && (

          <div className="mt-14 text-center">

            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#4F7359] px-9 py-3 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#E87744] hover:shadow-lg"
            >
              Load More Blogs

              <ArrowRight size={19} />
            </button>

            <p className="mt-4 text-sm text-[#3D4A40]">
              Showing {displayedBlogs.length} of {filteredBlogs.length} blogs
            </p>

          </div>
        )}

        {/* ALL BLOGS VIEWED */}
        {filteredBlogs.length > 0 &&
          displayedBlogs.length === filteredBlogs.length && (

            <p className="mt-12 text-center text-sm font-semibold text-[#4F7359]">
              You have viewed all available blogs.
            </p>
          )}

      </section>
    </main>
  );
}





