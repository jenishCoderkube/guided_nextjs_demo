import Link from "next/link";
import jobs from "./data/jobs.json";
import blogs from "./data/blogs.json";
import categories from "./data/categories.json";

export default function HomePage() {
  const featuredJobs = jobs.filter((job) => job.featured);
  const featuredBlogs = blogs.filter((blog) => blog.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-[#1a3045] to-[#0f2027] text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[200px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-primary-light mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
              {jobs.length} Open Positions Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-outfit)] leading-tight tracking-tight">
              Connecting Top Talent with{" "}
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                MedTech Innovation
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Your career in medical technology starts here. Explore specialized
              roles in R&amp;D, Regulatory Affairs, Quality Systems, and Sales
              across Europe&apos;s leading MedTech companies.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                Explore Jobs
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More
                <svg
                  width="20"
                  height="20"
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
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: "500+", label: "Placements Made" },
              { value: "120+", label: "Partner Companies" },
              { value: "95%", label: "Success Rate" },
              { value: "15+", label: "European Markets" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center lg:items-start p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <span className="text-3xl lg:text-4xl font-bold font-[var(--font-outfit)] text-primary-light">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-outfit)] text-secondary">
              MedTech Verticals
            </h2>
            <p className="mt-4 text-muted text-lg">
              Explore specialized career paths across the medical technology
              industry&apos;s core disciplines.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/jobs?category=${category.slug}`}
                className="group p-6 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    {category.icon === "microscope" && (
                      <path
                        d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {category.icon === "shield" && (
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        strokeLinejoin="round"
                      />
                    )}
                    {category.icon === "check-circle" && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path
                          d="m9 12 2 2 4-4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                    {category.icon === "trending-up" && (
                      <path
                        d="M22 7 13.5 15.5 8.5 10.5 2 17M22 7h-7m7 0v7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {category.fullLabel}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                  {category.jobCount} open roles
                  <svg
                    width="14"
                    height="14"
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
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-outfit)] text-secondary">
                Featured Positions
              </h2>
              <p className="mt-2 text-muted text-lg">
                Hand-picked opportunities from leading MedTech companies
              </p>
            </div>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
            >
              View All Jobs
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
                  d="M5 12h14m-7-7 7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                    <svg
                      width="20"
                      height="20"
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
                  <span className="inline-flex px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                    {job.categoryLabel}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{job.company}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
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
                  <span className="inline-flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
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
                </div>
                <div className="mt-auto pt-4 border-t border-border mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-secondary">
                    {job.salary}
                  </span>
                  <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-outfit)]">
              Why Choose GS MedTech?
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              We specialize exclusively in MedTech recruitment, giving you
              access to the deepest talent pool in the industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              {
                title: "Industry Expertise",
                description:
                  "Deep understanding of MedTech verticals including R&D, Regulatory, Quality, and Commercial roles.",
                icon: "star",
              },
              {
                title: "European Network",
                description:
                  "Access to a vast network of qualified professionals across 15+ European markets.",
                icon: "globe",
              },
              {
                title: "Regulatory Knowledge",
                description:
                  "Expert understanding of EU MDR, FDA, and international regulatory requirements for hiring.",
                icon: "book",
              },
              {
                title: "Tailored Matching",
                description:
                  "AI-enhanced candidate matching combined with deep human expertise for precise placements.",
                icon: "target",
              },
              {
                title: "Speed to Hire",
                description:
                  "Average time-to-fill of just 28 days — 40% faster than the industry average.",
                icon: "zap",
              },
              {
                title: "Post-Placement Support",
                description:
                  "12-month guarantee with dedicated support to ensure successful integration and retention.",
                icon: "heart",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    {feature.icon === "star" && (
                      <path
                        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        strokeLinejoin="round"
                      />
                    )}
                    {feature.icon === "globe" && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </>
                    )}
                    {feature.icon === "book" && (
                      <path
                        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V5a2.5 2.5 0 0 1 2.5-2.5H20v17H6.5A2.5 2.5 0 0 0 4 22V19.5z"
                        strokeLinejoin="round"
                      />
                    )}
                    {feature.icon === "target" && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </>
                    )}
                    {feature.icon === "zap" && (
                      <path
                        d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    )}
                    {feature.icon === "heart" && (
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-outfit)] text-secondary">
                Latest Insights
              </h2>
              <p className="mt-2 text-muted text-lg">
                Stay ahead with expert analysis and career guidance
              </p>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
            >
              View All Articles
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
                  d="M5 12h14m-7-7 7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col rounded-2xl bg-white border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-primary-light/10 to-accent/10 flex items-center justify-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/30"
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
                  <h3 className="mt-3 text-lg font-bold text-secondary group-hover:text-primary transition-colors leading-snug">
                    {blog.title}
                  </h3>
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
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-secondary p-10 lg:p-16 text-white text-center">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full blur-[120px]" />
            </div>
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-outfit)]">
                Let&apos;s Build Your MedTech Team
              </h2>
              <p className="mt-4 text-white/60 text-lg">
                Whether you&apos;re looking for your next career move or seeking
                top talent for your organization, we&apos;re here to help.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-light to-primary rounded-xl hover:from-primary hover:to-primary-dark transition-all duration-300 shadow-lg shadow-primary/30"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Browse Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
