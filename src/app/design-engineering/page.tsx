import RedesignShell from "@/components/redesign/RedesignShell";
import DesignEngineeringLeftColumn from "@/components/redesign/DesignEngineeringLeftColumn";
import DesignEngineeringRightColumnContent from "@/components/redesign/DesignEngineeringRightColumnContent";

export default function DesignEngineering() {
  return (
    <RedesignShell
      activePath="/design-engineering"
      leftColumn={<DesignEngineeringLeftColumn />}
      trailingSection={<DesignEngineeringRightColumnContent />}
    />
  );
}
