import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import blogs from "../data/blogs.json";

export const metadata = {
  title: "MedTech Blog – Industry Insights & Career Advice",
  description:
    "Stay informed with the latest MedTech industry insights, regulatory updates, career advice, and technology trends from our expert team.",
  alternates: {
    canonical: "https://gs-medtech.com/blogs",
  },
};

const blogCategories = [
  { label: "All", slug: null },
  { label: "Industry Insights", slug: "industry-insights" },
  { label: "Regulatory", slug: "regulatory" },
  { label: "Career Advice", slug: "career-advice" },
  { label: "Technology", slug: "technology" },
];

export default async function BlogsPage({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params?.category || null;

  // Filter blogs by category
  const filteredBlogs = activeCategory
    ? blogs.filter((blog) => blog.categorySlug === activeCategory)
    : blogs;

  // Featured blog (only show if no category filter or it matches)
  const featuredBlog = filteredBlogs.find((blog) => blog.featured);
  const restBlogs = featuredBlog
    ? filteredBlogs.filter((blog) => blog.id !== featuredBlog.id)
    : filteredBlogs;

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-[#1a3045] to-[#0f2027] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] mt-4 tracking-tight">
            MedTech Insights &amp; Resources
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Expert analysis, career guidance, and industry trends from the world
            of medical technology.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {blogCategories.map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <Link
                  key={cat.label}
                  href={cat.slug ? `/blogs?category=${cat.slug}` : "/blogs"}
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-surface text-muted border border-border hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted mb-6">
            Showing {filteredBlogs.length} article
            {filteredBlogs.length !== 1 ? "s" : ""}
            {activeCategory && (
              <>
                {" "}
                in{" "}
                <span className="font-medium text-primary">
                  {blogCategories.find((c) => c.slug === activeCategory)
                    ?.label || activeCategory}
                </span>
              </>
            )}
          </p>

          {/* Featured Blog */}
          {featuredBlog && (
            <Link
              href={`/blogs/${featuredBlog.slug}`}
              className="group flex flex-col lg:flex-row gap-0 rounded-2xl bg-white border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 mb-10"
            >
              <div className="lg:w-1/2 aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-primary/10 via-primary-light/10 to-accent/10 flex items-center justify-center min-h-[240px]">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/20"
                  aria-hidden="true"
                >
                  <path
                    d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V5a2.5 2.5 0 0 1 2.5-2.5H20v17H6.5A2.5 2.5 0 0 0 4 22V19.5z"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="inline-flex px-2.5 py-0.5 bg-accent/10 text-accent font-semibold rounded-full">
                    Featured
                  </span>
                  <span className="inline-flex px-2.5 py-0.5 bg-primary/5 text-primary font-medium rounded-full">
                    {featuredBlog.category}
                  </span>
                  <span>{featuredBlog.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-secondary group-hover:text-primary transition-colors font-[var(--font-outfit)] leading-snug">
                  {featuredBlog.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    {featuredBlog.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary">
                      {featuredBlog.author}
                    </p>
                    <p className="text-xs text-muted">
                      {featuredBlog.authorRole} · {featuredBlog.date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {restBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col rounded-2xl bg-white border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5 flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/20"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V5a2.5 2.5 0 0 1 2.5-2.5H20v17H6.5A2.5 2.5 0 0 0 4 22V19.5z"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="inline-flex px-2.5 py-0.5 bg-primary/5 text-primary font-medium rounded-full">
                      {blog.category}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-secondary group-hover:text-primary transition-colors leading-snug">
                    {blog.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-3 border-t border-border mt-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                      {blog.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        {blog.author}
                      </p>
                      <p className="text-xs text-muted">{blog.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted">
                No articles found in this category.
              </p>
              <Link
                href="/blogs"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
              >
                View All Articles
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
