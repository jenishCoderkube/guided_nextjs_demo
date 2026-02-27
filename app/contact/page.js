import Breadcrumb from "../components/Breadcrumb";

export const metadata = {
  title: "Contact Us – Get in Touch with GS MedTech",
  description:
    "Reach out to the GS MedTech team for recruitment inquiries, partnership opportunities, or career advice. We respond within 24 hours.",
  alternates: {
    canonical: "https://gs-medtech.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Contact" }];

  const contactInfo = [
    {
      title: "Email Us",
      description: "For general inquiries and partnerships",
      value: "office@gs-medtech.com",
      icon: "mail",
    },
    {
      title: "Call Us",
      description: "Mon–Fri, 9:00 AM – 6:00 PM CET",
      value: "+359 892 010 021",
      icon: "phone",
    },
    {
      title: "Visit Us",
      description: "GS MedTech Headquarters",
      value: "Kurfürstendamm 21, 10719 Berlin, Germany",
      icon: "location",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-[#1a3045] to-[#0f2027] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] mt-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Have a question, need recruitment support, or want to explore
            partnership opportunities? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-secondary font-[var(--font-outfit)] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="recruitment">Recruitment Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="career">Career Advice</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
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
                      d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-secondary font-[var(--font-outfit)] mb-6">
                Contact Information
              </h2>
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      {info.icon === "mail" && (
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
                      {info.icon === "phone" && (
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          strokeLinejoin="round"
                        />
                      )}
                      {info.icon === "location" && (
                        <>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">{info.title}</h3>
                    <p className="text-xs text-muted mt-0.5">
                      {info.description}
                    </p>
                    <p className="text-sm font-medium text-primary mt-1">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Office Hours */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white">
                <h3 className="text-lg font-bold font-[var(--font-outfit)]">
                  Office Hours
                </h3>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday – Friday</span>
                    <span className="font-medium">9:00 – 18:00 CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Saturday</span>
                    <span className="font-medium">10:00 – 14:00 CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-white/50">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
