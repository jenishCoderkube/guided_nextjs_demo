import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "About Us – GS MedTech Recruitment",
  description:
    "Learn about GS MedTech, the leading MedTech recruitment platform connecting top medical technology professionals with industry-leading companies across Europe.",
  alternates: {
    canonical: "https://gs-medtech.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About Us" }];

  const team = [
    {
      name: "Dr. Anna Schwartz",
      role: "CEO & Founder",
      bio: "20+ years in MedTech executive search",
    },
    {
      name: "Marcus Weber",
      role: "Head of Regulatory Recruitment",
      bio: "Former RA Director at a Fortune 500 MedTech company",
    },
    {
      name: "Lisa Chen",
      role: "Career Development Lead",
      bio: "Specialist in MedTech talent development strategies",
    },
    {
      name: "Dr. Raj Patel",
      role: "Head of R&D Recruitment",
      bio: "PhD in Biomedical Engineering, deep R&D network",
    },
  ];

  const milestones = [
    { year: "2020", event: "GS MedTech founded in Berlin" },
    { year: "2021", event: "Expanded to DACH region, 100+ placements" },
    { year: "2022", event: "Launched digital platform, AI-enhanced matching" },
    { year: "2023", event: "Reached 15 European markets" },
    { year: "2024", event: "500+ successful placements milestone" },
    { year: "2025", event: "Introduced MedTech career development programs" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-[#1a3045] to-[#0f2027] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] mt-4 tracking-tight">
            About GS MedTech
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            We are a specialized MedTech recruitment platform dedicated to
            connecting exceptional talent with transformative opportunities in
            the medical technology industry.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary font-[var(--font-outfit)]">
                Bridging Talent and Innovation in Healthcare
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                At GS MedTech, we believe that the right people in the right
                roles can transform healthcare. Our deep understanding of the
                MedTech industry — from regulatory landscapes to cutting-edge
                R&amp;D — enables us to make placements that drive innovation
                and improve patient outcomes.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Founded in Berlin in 2020, we have grown to serve over 120
                partner companies across 15 European markets, specializing in
                roles across R&amp;D, Regulatory Affairs, Quality Systems, and
                Commercial functions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Placements" },
                  { value: "120+", label: "Partners" },
                  { value: "95%", label: "Success Rate" },
                  { value: "28 days", label: "Avg. Time to Fill" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-primary font-[var(--font-outfit)]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 via-primary-light/10 to-accent/10 flex items-center justify-center border border-border">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/20"
                  aria-hidden="true"
                >
                  <path
                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white shadow-xl border border-border">
                <p className="text-3xl font-bold text-primary font-[var(--font-outfit)]">
                  6+
                </p>
                <p className="text-sm text-muted">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary font-[var(--font-outfit)]">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted text-lg">
              The principles that guide every placement we make
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              {
                title: "Patient-First Mindset",
                description:
                  "Every placement we make ultimately impacts patient care. We never forget that our work contributes to better healthcare outcomes worldwide.",
              },
              {
                title: "Deep Expertise",
                description:
                  "Our consultants bring genuine MedTech industry experience, not just recruitment skills. We speak the language of the industry we serve.",
              },
              {
                title: "Long-Term Partnerships",
                description:
                  "We build lasting relationships with both candidates and companies, providing ongoing support well beyond the initial placement.",
              },
              {
                title: "Ethical Standards",
                description:
                  "Transparency, honesty, and integrity are non-negotiable. We maintain the highest ethical standards in every interaction.",
              },
              {
                title: "Innovation-Driven",
                description:
                  "We leverage the latest technology and data-driven insights to deliver faster, more accurate matching and superior outcomes.",
              },
              {
                title: "Diversity & Inclusion",
                description:
                  "We actively promote diverse teams in MedTech, recognizing that diverse perspectives drive better innovation and decision-making.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-secondary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary font-[var(--font-outfit)]">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-muted text-lg">
              Industry veterans dedicated to your success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center p-6 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center text-primary text-xl font-bold group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-bold text-secondary">{member.name}</h3>
                <p className="text-sm text-primary font-medium">
                  {member.role}
                </p>
                <p className="mt-2 text-xs text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary font-[var(--font-outfit)]">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 hidden lg:block ${index % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <div className="inline-block p-5 rounded-2xl bg-white border border-border">
                      <p className="text-sm text-muted">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-sm shrink-0 shadow-lg shadow-primary/25">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <div className="p-5 rounded-2xl bg-white border border-border lg:hidden">
                      <p className="text-sm text-muted">{milestone.event}</p>
                    </div>
                    <div className="hidden lg:block p-5 rounded-2xl bg-white border border-border">
                      <p className="text-sm text-muted">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary font-[var(--font-outfit)]">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Whether you&apos;re a candidate or a company, let&apos;s start the
            conversation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-secondary bg-surface rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
