import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 text-center">
      <div className="max-w-lg">
        <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-primary/10 text-primary mb-8">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6M9 9l6 6" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold text-secondary font-[var(--font-outfit)]">
          404
        </h1>
        <p className="mt-4 text-xl text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <p className="mt-2 text-sm text-muted">
          If you followed a job listing link, the position may have been filled.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
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
                d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                strokeLinejoin="round"
              />
              <path d="M9 22V12h6v10" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-secondary bg-surface rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
