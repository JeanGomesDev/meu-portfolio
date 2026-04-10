"use client";

import { useLang } from "@/context/LanguageContext";
import t from "@/lib/translations";

export default function ProjectsContent() {
  const { lang } = useLang();
  const p = t[lang].projects;

  const featured = p.items.filter((item) => item.featured);
  const rest = p.items.filter((item) => !item.featured);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {p.title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {p.subtitle}
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            {p.featuredLabel}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project) => (
              <div
                key={project.title}
                className="flex flex-col p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all"
              >
                <div className="mb-3">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full">
                    {project.company}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <ul className="space-y-1 mb-5 flex-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            {p.otherLabel}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((project) => (
              <div
                key={project.title}
                className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all"
              >
                <div className="mb-2">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full">
                    {project.company}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
