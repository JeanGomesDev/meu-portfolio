import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jean Gomes",
  description: "A showcase of my work and personal projects.",
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with authentication, cart management, and payment integration using Next.js and Stripe.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    link: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop boards, and team collaboration features.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    link: "#",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS featuring a modern design, dark mode, and fast performance.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "#",
    featured: false,
  },
  {
    title: "REST API Service",
    description:
      "Scalable REST API with JWT authentication, rate limiting, and full documentation. Deployed on Docker.",
    tags: ["Node.js", "Express", "Docker", "MongoDB"],
    link: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard integrating multiple APIs with charts, geolocation, and 7-day forecasts.",
    tags: ["React", "Chart.js", "OpenWeather API"],
    link: "#",
    featured: false,
  },
  {
    title: "Blog CMS",
    description:
      "Headless CMS-powered blog with MDX support, syntax highlighting, and full-text search.",
    tags: ["Next.js", "MDX", "Contentful"],
    link: "#",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A collection of things I&apos;ve built — from side projects to
            production applications.
          </p>
        </div>

        {/* Featured projects */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Featured
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {featured.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group block p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                    →
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Other projects */}
        <section>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Other Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group block p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
