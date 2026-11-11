
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import BlogCard from "../health-library/BlogCard";
import { healthBlogs } from "../../data/healthLibraryData";

export default function HomeBlogs() {
  return (
    <section className="section-padding bg-mist">
      <div className="page-container">
        <SectionTitle
          eyebrow="HEALTH LIBRARY"
          title="Knowledge for your care journey"
          description="Patient-friendly articles about cancer, diagnosis, treatment options and wellbeing."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {healthBlogs.slice(0, 4).map((blog) => (
            <BlogCard key={blog.id || blog.slug} blog={blog} />
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/health-library/blogs"
            className="inline-flex items-center justify-center rounded-full bg-royal px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E87744] hover:shadow-lg"
          >
            View All Blogs
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
