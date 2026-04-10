import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jean Gomes",
  description: "A showcase of my work and personal projects.",
};

const projects = [
  {
    title: "Interactive Digital Menu",
    company: "DGuests",
    description:
      "Dynamic and responsive digital menu system accessible via QR Code, enabling online ordering for restaurants. Features real-time customization so establishments can update products, images, and prices instantly.",
    highlights: [
      "QR Code access with real-time product customization",
      "Next.js SSR for fast loading and better Google indexing",
      "Lazy Loading & Core Web Vitals optimization",
    ],
    tags: ["Next.js", "React", "Styled Components", "Node.js", "MySQL", "SSR"],
    featured: true,
  },
  {
    title: "Admin Dashboard",
    company: "DGuests",
    description:
      "Modular admin panel for the restaurant industry with order management, payment monitoring, and analytical reports. Integrated with payment APIs for real-time transaction and cash flow visibility.",
    highlights: [
      "Interactive charts with Recharts & Chart.js",
      "Real-time payment and transaction monitoring",
      "Modular architecture for order, payment, and report management",
    ],
    tags: ["React", "Node.js", "Express", "MySQL", "MongoDB", "Recharts", "Chart.js"],
    featured: true,
  },
  {
    title: "Payment Integration",
    company: "DGuests",
    description:
      "Secure payment system supporting multiple payment methods. Implemented authentication and transaction validation mechanisms to ensure secure and traceable payments.",
    highlights: [
      "Stripe & Mercado Pago integration",
      "Supports credit cards, bank slips (boleto), and Pix",
      "Authentication and transaction validation",
    ],
    tags: ["Stripe", "Mercado Pago", "Node.js", "Express", "AWS Lambda", "Serverless"],
    featured: true,
  },
  {
    title: "Agency Websites & Landing Pages",
    company: "AGO7 Agency",
    description:
      "Built and maintained institutional websites and lead capture pages for agency clients. Focused on performance, responsive layouts, and SEO best practices.",
    highlights: [
      "Responsive landing pages with high conversion focus",
      "SEO optimization and performance improvements",
      "Regular library updates and technical maintenance",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Styled Components", "Vercel", "SEO"],
    featured: false,
  },
  {
    title: "Frontend Team Coordination",
    company: "AGO7 Agency",
    description:
      "Took on technical coordination of the frontend workflow alongside active development. Organized team tasks, aligned with backend, and mentored junior developers.",
    highlights: [
      "Structured task assignment for organized delivery",
      "Aligned technical flows between frontend and backend teams",
      "Code review and mentoring for junior developers",
    ],
    tags: ["Next.js", "TypeScript", "GitHub", "Node.js", "Jest", "Cypress"],
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
            A selection of work from my experience at DGuests and AGO7 Agency —
            from full-stack systems to frontend coordination.
          </p>
        </div>

        {/* Featured projects */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Featured
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
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
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other projects */}
        <section>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Other Work
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
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
