import SelectedWorkCard from "./SelectedWorkCard";
import MoreCaseStudies from "./MoreCaseStudies";
import PlaygroundSection from "./PlaygroundSection";
import ContactBlock from "./ContactBlock";
import SiteFooter from "./SiteFooter";
import { selectedWork } from "@/data/homeContent";

export default function HomeRightColumnContent() {
  return (
    <div className="flex flex-col gap-[28px] lg:gap-[64px] items-start w-full">
      <div className="flex flex-col gap-[8px] items-start w-full px-5 lg:px-[32px]">
        <p
          className="font-[family-name:var(--font-dm-sans)] font-medium text-[13px] tracking-[1.04px]"
          style={{ color: "var(--rd-text-muted)" }}
        >
          SELECTED WORK
        </p>
        <p
          className="font-[family-name:var(--font-dm-sans)] font-semibold text-[22px] lg:text-[28px]"
          style={{ color: "var(--rd-text)" }}
        >
          Shipped products first, then case studies.
        </p>
      </div>

      {selectedWork.map((item) => (
        <SelectedWorkCard key={item.title} item={item} />
      ))}

      <MoreCaseStudies />
      <PlaygroundSection />
      <ContactBlock />
      <SiteFooter />
    </div>
  );
}
