import type { Metadata } from "next";
import RedesignShell from "@/components/redesign/RedesignShell";
import DesignEngineeringLeftColumn from "@/components/redesign/DesignEngineeringLeftColumn";
import DesignEngineeringRightColumnContent from "@/components/redesign/DesignEngineeringRightColumnContent";

const description =
  "Client work and products Tsolaye designed and built himself, from catching costly product decisions before they ship to building the fix with no handoff required.";

export const metadata: Metadata = {
  title: "Design Engineering",
  description,
  alternates: { canonical: "/design-engineering" },
  openGraph: {
    title: "Design Engineering | Tsolaye",
    description,
    url: "/design-engineering",
    type: "website",
    siteName: "Tsolaye Eyeoyibo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Engineering | Tsolaye",
    description,
  },
};

export default function DesignEngineering() {
  return (
    <RedesignShell
      activePath="/design-engineering"
      leftColumn={<DesignEngineeringLeftColumn />}
      trailingSection={<DesignEngineeringRightColumnContent />}
    />
  );
}
