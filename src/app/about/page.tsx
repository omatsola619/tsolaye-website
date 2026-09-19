import RedesignShell from "@/components/redesign/RedesignShell";
import AboutLeftColumn from "@/components/redesign/AboutLeftColumn";
import { designProjects } from "@/data/projects";

export default function About() {
  return (
    <RedesignShell
      activePath="/about"
      leftColumn={<AboutLeftColumn />}
      projects={designProjects}
    />
  );
}
