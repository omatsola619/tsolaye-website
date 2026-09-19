import RedesignShell from "@/components/redesign/RedesignShell";
import HomeLeftColumn from "@/components/redesign/HomeLeftColumn";
import { engineeringProjects } from "@/data/projects";

export default function DesignEngineering() {
  return (
    <RedesignShell
      activePath="/design-engineering"
      leftColumn={<HomeLeftColumn />}
      projects={engineeringProjects}
    />
  );
}
