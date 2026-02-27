import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
import jobs from "../../data/jobs.json";

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: "Job Not Found" };

  return {
    title: `${job.title} at ${job.company} – ${job.location}`,
    description: job.description,
    alternates: {
      canonical: `https://gs-medtech.com/jobs/${job.slug}`,
    },
    openGraph: {
      title: `${job.title} – ${job.company}`,
      description: job.description,
      type: "website",
      url: `https://gs-medtech.com/jobs/${job.slug}`,
    },
  };
}

export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const relatedJobs = jobs
    .filter((j) => j.category === job.category && j.id !== job.id)
    .slice(0, 3);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Job Listings", href: "/jobs" },
    { label: job.title },
  ];

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.posted,
    validThrough: job.deadline,
    employmentType: job.type === "Full-time" ? "FULL_TIME" : "PART_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
      sameAs: "https://gs-medtech.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.split(",")[0].trim(),
        addressCountry: job.location.split(",")[1]?.trim() || "",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: {
        "@type": "QuantitativeValue",
        unitText: "YEAR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-[#1a3045] to-[#0f2027] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-4 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex px-3 py-1 text-xs font-medium text-primary-light bg-white/10 rounded-full">
                  {job.categoryLabel}
                </span>
                {job.featured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-accent bg-accent/20 rounded-full">
                    ★ Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] tracking-tight">
                {job.title}
              </h1>
              <p className="mt-3 text-lg text-white/70">{job.company}</p>
              <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/60">
                <span className="inline-flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
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
                <span className="inline-flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
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
                <span className="inline-flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
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
            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <span className="text-2xl font-bold font-[var(--font-outfit)] text-primary-light">
                {job.salary}
              </span>
              <span className="text-sm text-white/40">
                Posted:{" "}
                {new Date(job.posted).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <a
                href="#apply"
                className="mt-2 inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Apply Now
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
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-secondary font-[var(--font-outfit)] mb-4">
                  About the Role
                </h2>
                <p className="text-muted leading-relaxed">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-xl font-bold text-secondary font-[var(--font-outfit)] mb-4">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-primary shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="m9 12 2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-xl font-bold text-secondary font-[var(--font-outfit)] mb-4">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-xl font-bold text-secondary font-[var(--font-outfit)] mb-4">
                  Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {job.benefits.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-primary shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-secondary font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply CTA */}
              <div
                id="apply"
                className="p-8 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white text-center"
              >
                <h2 className="text-2xl font-bold font-[var(--font-outfit)]">
                  Ready to Apply?
                </h2>
                <p className="mt-2 text-white/70">
                  Send your application and we&apos;ll get back to you within 48
                  hours.
                </p>
                <a
                  href="mailto:apply@gs-medtech.com"
                  className="mt-6 inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-light to-primary rounded-xl hover:from-primary hover:to-primary-dark transition-all duration-300 shadow-lg shadow-primary/30"
                >
                  Send Application
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Job Overview Card */}
              <div className="p-6 rounded-2xl bg-white border border-border sticky top-24">
                <h3 className="text-lg font-bold text-secondary font-[var(--font-outfit)] mb-4">
                  Job Overview
                </h3>
                <dl className="space-y-4">
                  {[
                    {
                      label: "Location",
                      value: job.location,
                      icon: "location",
                    },
                    { label: "Job Type", value: job.type, icon: "clock" },
                    {
                      label: "Experience",
                      value: job.experience,
                      icon: "badge",
                    },
                    { label: "Salary", value: job.salary, icon: "money" },
                    {
                      label: "Category",
                      value: job.categoryLabel,
                      icon: "folder",
                    },
                    {
                      label: "Deadline",
                      value: new Date(job.deadline).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      ),
                      icon: "calendar",
                    },
                  ].map((detail) => (
                    <div key={detail.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          {detail.icon === "location" && (
                            <>
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </>
                          )}
                          {detail.icon === "clock" && (
                            <>
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 6v6l4 2" />
                            </>
                          )}
                          {detail.icon === "badge" && (
                            <>
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <path
                                d="m9 11 3 3L22 4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </>
                          )}
                          {detail.icon === "money" && (
                            <>
                              <line x1="12" y1="1" x2="12" y2="23" />
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </>
                          )}
                          {detail.icon === "folder" && (
                            <path
                              d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                              strokeLinejoin="round"
                            />
                          )}
                          {detail.icon === "calendar" && (
                            <>
                              <rect
                                x="3"
                                y="4"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                              />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </>
                          )}
                        </svg>
                      </div>
                      <div>
                        <dt className="text-xs text-muted uppercase tracking-wider">
                          {detail.label}
                        </dt>
                        <dd className="text-sm font-medium text-secondary mt-0.5">
                          {detail.value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <a
                  href="#apply"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Apply for This Position
                </a>
              </div>
            </aside>
          </div>

          {/* Related Jobs */}
          {relatedJobs.length > 0 && (
            <div className="mt-16 content-lazy">
              <h2 className="text-2xl font-bold text-secondary font-[var(--font-outfit)] mb-8">
                Similar Positions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedJobs.map((rJob) => (
                  <Link
                    key={rJob.id}
                    href={`/jobs/${rJob.slug}`}
                    className="group p-6 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="inline-flex px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {rJob.categoryLabel}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                      {rJob.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{rJob.company}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                      <span>{rJob.location}</span>
                      <span>•</span>
                      <span>{rJob.salary}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
