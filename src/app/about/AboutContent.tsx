"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import t from "@/lib/translations";

export default function AboutContent() {
  const { lang } = useLang();
  const a = t[lang].about;

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16 grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              {a.title}
            </h1>
            {a.bio.map((paragraph, i) => (
              <p key={i} className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex justify-center sm:justify-end">
            <div className="relative w-56 h-64 rounded-2xl overflow-hidden shadow-xl shadow-indigo-200 dark:shadow-indigo-900 ring-4 ring-indigo-100 dark:ring-indigo-900">
              <Image
                src="/photo_Jean.jpeg"
                alt="Jean Gomes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Languages */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{a.languagesTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {a.languages.map((lang) => (
              <div key={lang.language} className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{lang.language}</span>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{lang.level}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <div className={`${lang.width} h-1.5 bg-indigo-500 rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{a.skillsTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {a.skills.map((group) => (
              <div key={group.category} className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{a.experienceTitle}</h2>
          <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 space-y-10">
            {a.experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500 border-2 border-white dark:border-gray-950 shadow" />
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{exp.type}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{exp.description}</p>
                <ul className="space-y-1 mb-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{a.educationTitle}</h2>
          <div className="space-y-4">
            {a.education.map((edu, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex flex-wrap justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full h-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{edu.institution}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
