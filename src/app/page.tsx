import Link from "next/link";

const techStack = [
  "React.js", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "Styled Components", "Node.js", "Express",
  "AWS Lambda", "Serverless", "MySQL", "MongoDB",
  "Jest", "Cypress", "Stripe", "Vercel",
];

const stats = [
  { number: "4+", label: "Years of Experience" },
  { number: "2", label: "Companies" },
  { number: "10+", label: "Projects Delivered" },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6 pt-24 pb-16 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-950 rounded-full">
          Available · Immediate Start
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Jean Gomes</span>
        </h1>
        <p className="max-w-2xl text-xl text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
          Full Stack Developer focused on Front-End
        </p>
        <p className="max-w-2xl text-base text-gray-400 dark:text-gray-500 mb-4 leading-relaxed">
          React.js · Next.js · Node.js · Serverless · Performance · SEO & Integrations
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-10 flex items-center gap-1">
          <span>📍</span> Dublin 8, Ireland
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900"
          >
            See My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm"
            >
              <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                {stat.number}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
