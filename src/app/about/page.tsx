import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Jean Gomes",
  description: "Full Stack Developer focused on Front-End based in Dublin, Ireland.",
};

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Styled Components", "Bootstrap", "Storybook"],
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Express", "AWS Lambda", "Serverless Framework", "REST APIs"],
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "MongoDB", "GitHub", "Vercel", "Hostinger"],
  },
  {
    category: "Testing",
    items: ["Jest", "Cypress"],
  },
  {
    category: "Integrations & SEO",
    items: ["Stripe", "Mercado Pago", "SSR", "Lazy Loading", "Core Web Vitals", "SEO"],
  },
  {
    category: "Currently Learning",
    items: ["Flutter", "Software Architecture", "English (B1 → B2)"],
  },
];

const experience = [
  {
    role: "Front-End Developer · Technical Coordination",
    company: "AGO7 Agency",
    type: "Part-time · Remote",
    period: "November 2025 – Present",
    description:
      "Took on the responsibility of coordinating the frontend workflow while still developing actively. Helped organize team tasks, supported backend integration, and assisted in mentoring junior developers.",
    highlights: [
      "Structured and assigned tasks to the frontend team for organized delivery.",
      "Worked closely with the backend team to align technical flows and deadlines.",
      "Supported and guided new developers with best practices and code review.",
      "Continued building and updating websites for agency clients.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "Serverless", "MySQL", "Vercel", "TypeScript", "Jest", "Cypress"],
  },
  {
    role: "Front-End Developer",
    company: "AGO7 Agency",
    type: "Part-time · Remote",
    period: "May 2025 – November 2025",
    description:
      "Created and maintained institutional websites and landing pages for agency clients. Focused on performance, responsive layouts, SEO best practices, and continuous updates of the codebase.",
    highlights: [
      "Built and maintained websites and lead capture pages.",
      "Improved performance and SEO for faster loading and better indexing.",
      "Updated project libraries and frontend tools regularly.",
      "Fixed bugs and delivered technical improvements based on project needs.",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Styled Components", "Node.js", "Serverless", "MySQL", "Vercel"],
  },
  {
    role: "Full Stack Developer",
    company: "DGuests",
    type: "Full-time · On-site",
    period: "August 2023 – April 2025",
    description:
      "Developed web solutions for the restaurant industry, creating modern, responsive, and scalable interfaces — from interactive digital menus to admin dashboards with payment integrations.",
    highlights: [
      "Built a dynamic QR Code menu system with real-time customization using Next.js SSR.",
      "Developed a modular admin dashboard with interactive charts (Recharts & Chart.js).",
      "Integrated Stripe and Mercado Pago supporting credit cards, bank slips, and Pix.",
      "Applied Lazy Loading and Core Web Vitals optimization for maximum performance.",
    ],
    tags: ["React", "Next.js", "Styled Components", "Node.js", "Express", "AWS Lambda", "MySQL", "MongoDB", "Jest", "Cypress", "Stripe"],
  },
  {
    role: "Front-End Developer Intern",
    company: "DGuests",
    type: "Internship · On-site",
    period: "April 2022 – August 2023",
    description:
      "Started with an onboarding and learning period to understand the company's system, technologies, and workflows. Progressively contributed with technical tasks and feature fixes.",
    highlights: [
      "Studied the project stack (React, Node.js, AWS) and existing systems.",
      "Modified forms and reusable components across the codebase.",
      "Assisted with site maintenance and initial database integration tests.",
      "Developed small visual and functional improvements under senior guidance.",
    ],
    tags: ["React", "Node.js", "AWS"],
  },
];

const education = [
  {
    degree: "Exchange · Teaching English as a Second Language",
    institution: "Future Learning Language School",
    period: "June 2025 – September 2026",
    location: "Dublin, Ireland",
  },
  {
    degree: "Bachelor's, Information Systems",
    institution: "Universidade Anhembi Morumbi",
    period: "January 2021 – June 2025",
    location: "São Paulo, Brazil",
  },
  {
    degree: "Administration Technician · Business Administration",
    institution: "Senac Brasil",
    period: "January 2016 – December 2017",
    location: "Brazil",
  },
];

const languages = [
  { language: "Portuguese", level: "Native", width: "w-full" },
  { language: "English", level: "B1 – Intermediate", width: "w-3/5" },
];

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16 grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              I&apos;m a Full Stack Developer focused on Front-End, passionate
              about building modern, fast, and scalable interfaces. I have
              experience in full projects — from responsive landing pages to
              admin systems with payment integrations — always focused on
              performance, clean code, and user experience.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Currently working remotely for AGO7, a digital agency, and looking
              for new on-site or remote opportunities in Ireland to grow
              professionally and culturally.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Always learning — currently studying mobile development with
              Flutter and software architecture best practices.
            </p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <div className="relative w-56 h-64 rounded-2xl overflow-hidden shadow-xl shadow-indigo-200 dark:shadow-indigo-900 ring-4 ring-indigo-100 dark:ring-indigo-900">
              <Image
                src="/photo_Jean.jpeg"
                alt="Jean Gomes"
                fill
                className="object-cover "
                priority
              />
            </div>
          </div>
        </div>

        {/* Languages */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Languages</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {languages.map((lang) => (
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
              >
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
          <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 space-y-10">
            {experience.map((exp, idx) => (
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
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
