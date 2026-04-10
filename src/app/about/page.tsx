import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Jean Gomes",
  description: "Full Stack Developer focused on Front-End based in Dublin, Ireland.",
};

export default function About() {
  return <AboutContent />;
}
