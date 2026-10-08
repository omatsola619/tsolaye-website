import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { moreCaseStudies } from "@/data/homeContent";

export default function MoreCaseStudies() {
  return (
    <div
      className="flex flex-col items-start w-full rounded-[24px] px-5 lg:px-[32px] py-5 lg:py-[24px]"
      style={{ backgroundColor: "var(--rd-surface)" }}
    >
      <p
        className="font-[family-name:var(--font-dm-sans)] font-semibold text-[20px] lg:text-[22px] w-full"
        style={{ color: "var(--rd-text)" }}
      >
        More case studies
      </p>

      {moreCaseStudies.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="flex gap-[16px] items-center w-full py-[14px] border-t transition-opacity hover:opacity-80"
          style={{ borderColor: "var(--rd-divider)" }}
        >
          <span className="relative h-[56px] w-[80px] lg:h-[72px] lg:w-[112px] rounded-[10px] overflow-hidden shrink-0">
            <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 112px, 80px" quality={95} className="object-cover" />
          </span>
          <span className="flex flex-col gap-[2px] items-start min-w-0 flex-1">
            <span
              className="font-[family-name:var(--font-dm-sans)] font-semibold text-[16px] lg:text-[18px] truncate w-full"
              style={{ color: "var(--rd-text)" }}
            >
              {item.title}
            </span>
            <span
              className="font-[family-name:var(--font-dm-sans)] text-[13px] lg:text-[14px] truncate w-full"
              style={{ color: "var(--rd-text-muted)" }}
            >
              {item.tagline}
            </span>
          </span>
          <span
            className="flex items-center gap-[4px] font-[family-name:var(--font-dm-sans)] font-semibold text-[15px] whitespace-nowrap shrink-0"
            style={{ color: "var(--rd-text)" }}
          >
            <span className="hidden lg:inline">View project</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </span>
        </a>
      ))}
    </div>
  );
}
