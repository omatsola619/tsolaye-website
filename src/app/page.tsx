import type { Metadata } from "next";
import RedesignShell from "@/components/redesign/RedesignShell";
import HomeLeftColumn from "@/components/redesign/HomeLeftColumn";
import HomeRightColumnContent from "@/components/redesign/HomeRightColumnContent";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <RedesignShell
      activePath="/"
      leftColumn={<HomeLeftColumn />}
      trailingSection={<HomeRightColumnContent />}
    />
  );
}
