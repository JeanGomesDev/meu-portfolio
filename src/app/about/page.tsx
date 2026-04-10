import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jean Gomes",
  description: "Learn more about me, my skills, and my experience.",
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "DevOps & Tools", items: ["Docker", "Git", "GitHub Actions", "Linux", "Vercel"] },
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Tech Company",
    period: "2023 – Present",
    description:
      "Building scalable web applications using Next.js, TypeScript, and PostgreSQL. Leading frontend architecture and mentoring junior developers.",
  },
  {
    role: "Frontend Developer",
    company: "Startup XYZ",
    period: "2022 – 2023",
    description:
      "Developed responsive UIs with React and collaborated closely with design and backend teams to ship features quickly.",
  },
  {
    role: "Junior Developer",
    company: "Agency ABC",
    period: "2021 – 2022",
    description:
      "Worked on client websites and internal tools. Gained hands-on experience with modern JavaScript and CSS frameworks.",
  },
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
              Hi! I&apos;m Jean, a Full-Stack Developer based in Brazil. I&apos;m
              passionate about crafting great user experiences and writing clean,
              maintainable code.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or enjoying a good cup
              of coffee.
            </p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-xl shadow-indigo-200 dark:shadow-indigo-900">
              <span className="text-7xl font-extrabold text-white select-none">JG</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
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
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 space-y-10">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500 border-2 border-white dark:border-gray-950 shadow" />
                <span className="inline-block mb-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
