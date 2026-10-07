import RedesignShell from "@/components/redesign/RedesignShell";
import HomeLeftColumn from "@/components/redesign/HomeLeftColumn";
import HomeRightColumnContent from "@/components/redesign/HomeRightColumnContent";

export default function Home() {
  return (
    <RedesignShell
      activePath="/"
      leftColumn={<HomeLeftColumn />}
      trailingSection={<HomeRightColumnContent />}
    />
  );
}
