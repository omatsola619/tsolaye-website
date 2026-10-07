import type { ReactNode } from "react";
import TopNav from "./TopNav";
import ProjectList from "./ProjectList";
import type { Project, ProjectSection } from "@/data/projects";

export default function RedesignShell({
  activePath,
  leftColumn,
  projects,
  sections,
  trailingSection,
}: {
  activePath: string;
  leftColumn: ReactNode;
  projects?: Project[];
  sections?: ProjectSection[];
  trailingSection?: ReactNode;
}) {
  return (
    <div
      className="min-h-screen font-[family-name:var(--font-dm-sans)] transition-colors"
      style={{ backgroundColor: "var(--rd-bg)" }}
    >
      <TopNav activePath={activePath} />

      {/* Mobile / tablet: one normal stacked page, left content first, then projects */}
      <div className="flex flex-col lg:hidden pt-[91px]">
        <div className="w-full px-5 pt-8 pb-10">{leftColumn}</div>
        <div className="w-full">
          <ProjectList projects={projects} sections={sections} trailingSection={trailingSection} />
        </div>
      </div>

      {/* Desktop: left column pinned via position:sticky within one natural
          page scroll (not a boxed-off scroll pane), so scrolling works no
          matter where the cursor is on the page. */}
      <div className="hidden lg:flex items-start pt-[91px]">
        <div
          className="w-[633px] shrink-0 border-r-[0.5px] pl-[100px] sticky top-[91px] min-h-[calc(100vh-91px)]"
          style={{ borderColor: "var(--rd-border)" }}
        >
          <div className="w-[533px] h-full flex flex-col justify-start relative">
            {leftColumn}
          </div>
        </div>

        <ProjectList projects={projects} sections={sections} trailingSection={trailingSection} />
      </div>
    </div>
  );
}
