import type { Metadata } from "next";
import RedesignShell from "@/components/redesign/RedesignShell";
import AboutLeftColumn from "@/components/redesign/AboutLeftColumn";
import AboutRightColumnContent from "@/components/redesign/AboutRightColumnContent";

const description =
  "About Tsolaye: his story, experience, toolkit, how he works and what clients say, after 3+ years designing products for teams in the Bahamas, the US, Australia and Nigeria.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Tsolaye",
    description,
    url: "/about",
    type: "website",
    siteName: "Tsolaye Eyeoyibo",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Tsolaye",
    description,
  },
};

export default function About() {
  return (
    <RedesignShell
      activePath="/about"
      leftColumn={<AboutLeftColumn />}
      trailingSection={<AboutRightColumnContent />}
    />
  );
}
