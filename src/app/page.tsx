import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6 pt-24 pb-16 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950 rounded-full">
          Available for work
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Jean Gomes</span>
        </h1>
        <p className="max-w-xl text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
          Full-Stack Developer passionate about building beautiful, performant
          web applications with modern technologies.
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
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker", "Git"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "3+", label: "Years of Experience" },
            { number: "5+", label: "Happy Clients" },
          ].map((stat) => (
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
