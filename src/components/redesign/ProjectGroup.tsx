import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

// A titled group of project cards (e.g. "Client Work"). On mobile the heading
// gets extra space above and less below so it reads as belonging to the cards
// it introduces; desktop keeps the Figma rhythm (100px above, 64px below).
export default function ProjectGroup({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <section className="flex flex-col gap-[24px] lg:gap-[64px] items-center w-full mt-[28px] lg:mt-0">
      <SectionHeading>{title}</SectionHeading>
      <div className="flex flex-col gap-[28px] lg:gap-[100px] items-start w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
