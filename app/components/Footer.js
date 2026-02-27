import Link from "next/link";

const footerLinks = {
  "Job Categories": [
    { href: "/jobs?category=research-development", label: "R&D" },
    { href: "/jobs?category=regulatory", label: "Regulatory Affairs" },
    { href: "/jobs?category=quality-systems", label: "Quality Systems" },
    { href: "/jobs?category=sales-marketing", label: "Sales & Marketing" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "/blogs?category=career-advice", label: "Career Advice" },
    { href: "/blogs?category=industry-insights", label: "Industry Insights" },
    { href: "/blogs?category=regulatory", label: "Regulatory Updates" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold font-[var(--font-outfit)]">
                Ready to find your next{" "}
                <span className="text-primary-light">MedTech role?</span>
              </h2>
              <p className="mt-2 text-white/60 max-w-lg">
                Join thousands of professionals advancing their careers in
                medical technology across Europe.
              </p>
            </div>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-light to-primary rounded-xl hover:from-primary hover:to-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 shrink-0"
            >
              Browse Open Positions
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
      </div>

      {/* Links Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="GS MedTech Home"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L2 7v10l10 5 10-5V7L12 2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8v4m-2-2h4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold font-[var(--font-outfit)]">
                GS <span className="text-primary-light">MedTech</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Connecting top MedTech talent with industry-leading opportunities
              across Europe since 2020.
            </p>
            <div className="flex gap-3 mt-6">
              {["LinkedIn", "Twitter", "Email"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-white/50 hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={`Follow us on ${platform}`}
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

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-primary-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>
              &copy; {new Date().getFullYear()} GS MedTech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white/70 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
