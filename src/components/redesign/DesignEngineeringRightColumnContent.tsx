import SelectedWorkCard from "./SelectedWorkCard";
import ContactBlock from "./ContactBlock";
import SiteFooter from "./SiteFooter";
import { clientWork, productsBuilt } from "@/data/deContent";

export default function DesignEngineeringRightColumnContent() {
  return (
    <div className="flex flex-col gap-[28px] lg:gap-[64px] items-start w-full">
      <div className="flex flex-col gap-[28px] lg:gap-[48px] items-start w-full">
        <p
          className="font-[family-name:var(--font-dm-sans)] font-semibold text-[22px] lg:text-[28px] px-5 lg:px-[32px]"
          style={{ color: "var(--rd-text)" }}
        >
          Client work
        </p>
        {clientWork.map((item) => (
          <SelectedWorkCard key={item.title} item={item} />
        ))}
      </div>

      <div className="flex flex-col gap-[28px] lg:gap-[48px] items-start w-full">
        <p
          className="font-[family-name:var(--font-dm-sans)] font-semibold text-[22px] lg:text-[28px] px-5 lg:px-[32px]"
          style={{ color: "var(--rd-text)" }}
        >
          Products I designed and built
        </p>
        {productsBuilt.map((item) => (
          <SelectedWorkCard key={item.title} item={item} />
        ))}
      </div>

      <ContactBlock />
      <SiteFooter />
    </div>
  );
}
