import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
import blogs from "../../data/blogs.json";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `https://gs-medtech.com/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      url: `https://gs-medtech.com/blogs/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: blog.title },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: blog.author,
      jobTitle: blog.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "GS MedTech",
      url: "https://gs-medtech.com",
      logo: {
        "@type": "ImageObject",
        url: "https://gs-medtech.com/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gs-medtech.com/blogs/${blog.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-[#1a3045] to-[#0f2027] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex px-3 py-1 text-xs font-medium text-primary-light bg-white/10 rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-white/50">{blog.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] tracking-tight leading-tight">
              {blog.title}
            </h1>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              {blog.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary-light text-sm font-bold">
                {blog.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-medium">{blog.author}</p>
                <p className="text-sm text-white/50">
                  {blog.authorRole} ·{" "}
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-14">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none">
              {blog.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-secondary font-[var(--font-outfit)] mt-10 mb-4"
                    >
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-muted leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              })}

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-bold text-secondary font-[var(--font-outfit)] mb-4">
                  Share This Article
                </h3>
                <div className="flex gap-3">
                  {["LinkedIn", "Twitter", "Email"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface text-muted hover:bg-primary hover:text-white transition-all duration-200 border border-border hover:border-primary"
                      aria-label={`Share on ${platform}`}
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
                        {platform === "LinkedIn" && (
                          <path
                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        )}
                        {platform === "Twitter" && (
                          <path
                            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        )}
                        {platform === "Email" && (
                          <>
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
                          </>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <div className="p-6 rounded-2xl bg-white border border-border">
                  <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {blog.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-secondary">
                        {blog.author}
                      </p>
                      <p className="text-xs text-muted">{blog.authorRole}</p>
                    </div>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="p-6 rounded-2xl bg-white border border-border">
                  <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                    In This Article
                  </h3>
                  <ul className="space-y-2">
                    {blog.content
                      .filter((block) => block.type === "heading")
                      .map((heading, index) => (
                        <li key={index}>
                          <span className="text-sm text-muted hover:text-primary cursor-pointer transition-colors">
                            {heading.text}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white">
                  <h3 className="text-lg font-bold font-[var(--font-outfit)]">
                    Looking for MedTech talent?
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Let us help you find the perfect candidate for your team.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-light to-primary rounded-xl hover:from-primary hover:to-primary-dark transition-all duration-300 shadow-md shadow-primary/20"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-border content-lazy">
            <h2 className="text-2xl font-bold text-secondary font-[var(--font-outfit)] mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((rBlog) => (
                <Link
                  key={rBlog.id}
                  href={`/blogs/${rBlog.slug}`}
                  className="group flex flex-col rounded-2xl bg-white border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
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
                  <div className="p-5">
                    <span className="text-xs text-primary font-medium">
                      {rBlog.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-secondary group-hover:text-primary transition-colors leading-snug">
                      {rBlog.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted">{rBlog.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
