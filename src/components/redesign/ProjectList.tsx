import type { ReactNode } from "react";
import type { Project, ProjectSection } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectGroup from "./ProjectGroup";

export default function ProjectList({
  projects = [],
  sections = [],
  trailingSection,
}: {
  projects?: Project[];
  sections?: ProjectSection[];
  trailingSection?: ReactNode;
}) {
  return (
    <div className="w-full lg:flex-1 lg:min-w-0">
      <div className="flex flex-col gap-[28px] lg:gap-[100px] items-start max-w-[755px] mx-auto px-5 lg:px-6 pt-10 lg:py-[64px] rd-safe-bottom">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        {sections.map((section) => (
          <ProjectGroup key={section.title} title={section.title} projects={section.projects} />
        ))}
        {trailingSection}
      </div>
    </div>
  );
}
