"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import t from "@/lib/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const labels = t[lang].nav;

  const navLinks = [
    { href: "/", label: labels.home },
    { href: "/projects", label: labels.projects },
    { href: "/about", label: labels.about },
    { href: "/contact", label: labels.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 dark:text-white tracking-tight shrink-0"
        >
          Jean<span className="text-indigo-600 dark:text-indigo-400">.</span>dev
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "pt" : "en")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            title={lang === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
          >
            <span className={lang === "en" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 cursor-pointer"}>EN</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className={lang === "pt" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 cursor-pointer"}>PT-BR</span>
          </button>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download="Jean-Gomes-CV.pdf"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
            </svg>
            {labels.downloadCV}
          </a>
        </div>
      </nav>
    </header>
  );
}
