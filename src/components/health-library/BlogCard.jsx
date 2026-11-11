
import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E98A43]/50 hover:shadow-xl">

      {/* BLOG IMAGE */}
      <Link
        to={`/health-library/blogs/${blog.slug}`}
        className="block h-48 overflow-hidden bg-[#F3F7F4]"
      >
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* BLOG CONTENT */}
      <div className="flex flex-1 flex-col p-5">

        <span className="text-[14px] font-bold uppercase tracking-wider text-[#08614F]">
          {blog.category}
        </span>

        <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-[#173B35]">
          <Link
            to={`/health-library/blogs/${blog.slug}`}
            className="transition-colors duration-200 hover:text-[#E98A43]"
          >
            {blog.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-[16px] leading-6 text-slate-600">
          {blog.excerpt}
        </p>

        {/* FOOTER */}
        <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">

          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock3 size={14} className="text-[#08614F]" />
            {blog.readTime}
          </span>

          <Link
            to={`/health-library/blogs/${blog.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#08614F] transition-colors hover:text-[#E98A43]"
          >
            Read Article
            <ArrowRight size={16} />
          </Link>

        </div>
      </div>
    </article>
  );
}
