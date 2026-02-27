import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import jobs from "../data/jobs.json";
import categories from "../data/categories.json";

export const metadata = {
  title: "MedTech Jobs – Browse Open Positions",
  description:
    "Explore medical technology career opportunities across Europe. Find specialized roles in R&D, Regulatory Affairs, Quality Systems, and Sales & Marketing.",
  alternates: {
    canonical: "https://gs-medtech.com/jobs",
  },
};

const JOBS_PER_PAGE = 4;

export default async function JobsPage({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params?.category || null;
  const currentPage = parseInt(params?.page || "1", 10);

  // Filter jobs by category
  const filteredJobs = activeCategory
    ? jobs.filter((job) => job.category === activeCategory)
    : jobs;

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredJobs.length / JOBS_PER_PAGE),
  );
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const paginatedJobs = filteredJobs.slice(
    (safePage - 1) * JOBS_PER_PAGE,
    safePage * JOBS_PER_PAGE,
  );

  // Build page href helper (preserves category when paginating)
  const buildHref = (page, category) => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (page && page > 1) params.set("page", String(page));
    const qs = params.toString();
    return `/jobs${qs ? `?${qs}` : ""}`;
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Job Listings" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-[#1a3045] to-[#0f2027] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] mt-4 tracking-tight">
            MedTech Job Listings
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Discover your next career opportunity in the medical technology
            industry. Filter by category to find roles matching your expertise.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/jobs"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                !activeCategory
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface text-muted border border-border hover:border-primary/30 hover:text-primary"
              }`}
            >
              All Positions ({jobs.length})
            </Link>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <Link
                  key={cat.slug}
                  href={buildHref(1, cat.slug)}
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-surface text-muted border border-border hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat.label} ({cat.jobCount})
                </Link>
              );
            })}
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted mb-6">
            Showing {paginatedJobs.length} of {filteredJobs.length} positions
            {activeCategory && (
              <>
                {" "}
                in{" "}
                <span className="font-medium text-primary">
                  {categories.find((c) => c.slug === activeCategory)
                    ?.fullLabel || activeCategory}
                </span>
              </>
            )}
          </p>

          {/* Job Cards */}
          <div className="grid gap-6 stagger-children">
            {paginatedJobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="group flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 p-6 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path
                      d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                      {job.title}
                    </h2>
                    {job.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted">{job.company}</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path
                          d="m9 11 3 3L22 4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {job.experience}
                    </span>
                  </div>
                </div>

                {/* Category & Salary */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 lg:gap-2 shrink-0">
                  <span className="inline-flex px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                    {job.categoryLabel}
                  </span>
                  <span className="text-sm font-bold text-secondary">
                    {job.salary}
                  </span>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl bg-surface text-muted group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14m-7-7 7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {paginatedJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted">
                No positions found in this category.
              </p>
              <Link
                href="/jobs"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
              >
                View All Positions
              </Link>
            </div>
          )}

          {/* Pagination (SEO-compliant with Link components for client-side nav) */}
          {totalPages > 1 && (
            <nav
              className="mt-12 flex items-center justify-center gap-2"
              aria-label="Job listings pagination"
            >
              {/* Previous */}
              {safePage > 1 ? (
                <Link
                  href={buildHref(safePage - 1, activeCategory)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-surface text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Previous page"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="m15 18-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ) : (
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-surface text-muted/40 cursor-not-allowed"
                  aria-disabled="true"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="m15 18-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={buildHref(page, activeCategory)}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-medium text-sm transition-all duration-200 ${
                      page === safePage
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "bg-surface text-muted hover:bg-primary/10 hover:text-primary"
                    }`}
                    {...(page === safePage ? { "aria-current": "page" } : {})}
                  >
                    {page}
                  </Link>
                ),
              )}

              {/* Next */}
              {safePage < totalPages ? (
                <Link
                  href={buildHref(safePage + 1, activeCategory)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-surface text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Next page"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ) : (
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-surface text-muted/40 cursor-not-allowed"
                  aria-disabled="true"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
