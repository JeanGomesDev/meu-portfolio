"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import t from "@/lib/translations";

export default function Home() {
  const { lang } = useLang();
  const h = t[lang].home;

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6 pt-24 pb-16 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-950 rounded-full">
          {h.badge}
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          {h.title}{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Jean Gomes</span>
        </h1>
        <p className="max-w-2xl text-xl text-gray-500 dark:text-gray-400 mb-2 leading-relaxed">
          {h.subtitle}
        </p>
        <p className="max-w-2xl text-sm text-gray-400 dark:text-gray-500 mb-4 leading-relaxed">
          {h.tagline}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-10 flex items-center gap-1">
          <span>📍</span> {h.location}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900"
          >
            {h.seeWork}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {h.getInTouch}
          </Link>
          <a
            href="/cv.pdf"
            download="Jean-Gomes-CV.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
            </svg>
            {h.downloadCV}
          </a>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            {h.techTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Styled Components", "Node.js", "Express", "AWS Lambda", "Serverless", "MySQL", "MongoDB", "Jest", "Cypress", "Stripe", "Vercel"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {h.stats.map((stat) => (
            <div key={stat.label} className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
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
