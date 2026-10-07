import RedesignShell from "@/components/redesign/RedesignShell";
import AboutLeftColumn from "@/components/redesign/AboutLeftColumn";
import AboutRightColumnContent from "@/components/redesign/AboutRightColumnContent";

export default function About() {
  return (
    <RedesignShell
      activePath="/about"
      leftColumn={<AboutLeftColumn />}
      trailingSection={<AboutRightColumnContent />}
    />
  );
}
