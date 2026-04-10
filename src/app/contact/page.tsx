"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import t from "@/lib/translations";

const contactInfo = [
  { key: "email" as const, value: "jeangomes.dev@outlook.com", href: "mailto:jeangomes.dev@outlook.com", icon: "✉" },
  { key: "github" as const, value: "github.com/JeanGomesDev", href: "https://github.com/JeanGomesDev", icon: "⌥" },
  { key: "phone" as const, value: "+353 083 450 2762", href: "tel:+3530834502762", icon: "✆" },
  { key: "location" as const, value: "Dublin 8, Ireland", href: null, icon: "◎" },
];

export default function Contact() {
  const { lang } = useLang();
  const c = t[lang].contact;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {c.title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.key} className="flex items-center gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-lg font-bold shrink-0">
                  {info.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {c.info[info.key]}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900">
              <p className="text-white font-semibold text-base mb-1">{c.availableTitle}</p>
              <p className="text-indigo-100 text-sm leading-relaxed">{c.availableText}</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                <span className="text-5xl">✓</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{c.sentTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{c.sentText}</p>
                <button
                  onClick={() => { setForm({ name: "", email: "", message: "" }); setSent(false); }}
                  className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  {c.sentAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {c.form.name}
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder={c.form.namePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {c.form.email}
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder={c.form.emailPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {c.form.message}
                  </label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={form.message} onChange={handleChange}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors shadow-md shadow-indigo-200 dark:shadow-indigo-900 text-sm"
                >
                  {c.form.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
