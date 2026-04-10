import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Jean Gomes",
  description: "A showcase of my work and personal projects.",
};

export default function Projects() {
  return <ProjectsContent />;
}
