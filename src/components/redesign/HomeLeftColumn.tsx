import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import PrimaryButton from "./PrimaryButton";
import ClientLogos from "./ClientLogos";
import TestimonialCard from "./TestimonialCard";
import { EMAIL, LINKEDIN_URL } from "@/data/contact";

export default function HomeLeftColumn() {
  return (
    <>
      <div className="flex flex-col gap-[24px] lg:gap-[16px] items-start pb-[40px] lg:pb-[16px] pt-0 lg:pt-[24px] px-0 lg:px-[20px] w-full">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <div className="flex gap-[8px] items-center px-[12px] py-[6px] rounded-full bg-[#e8f7eb] max-w-full">
            <span className="size-[8px] rounded-full bg-[#2fae54] shrink-0" />
            <span className="font-[family-name:var(--font-dm-sans)] text-[13px] tracking-[-1px] text-[#17592e] whitespace-normal lg:whitespace-nowrap">
              Open to Product Design &amp; Design Engineering roles
              <span className="hidden lg:inline"> · Remote or relocation</span>
            </span>
          </div>

          <div className="flex flex-col items-start w-full lg:w-[512px]">
            <h1
              className="font-[family-name:var(--font-genos)] font-bold text-[34px] sm:text-[40px] lg:text-[44px] leading-[1.25] lg:leading-[1.1] tracking-[1px] w-full"
              style={{ color: "var(--rd-text)" }}
            >
              <span style={{ color: "var(--rd-text-muted)" }}>Hi, I’m Tsolaye.</span>
              <br />
              I design products and ship them.
            </h1>
          </div>
          <p
            className="font-[family-name:var(--font-dm-sans)] text-[15px] lg:text-[16px] leading-[1.55] lg:leading-[22px] tracking-[-1px] opacity-80 w-full lg:w-[462px]"
            style={{ color: "var(--rd-text)" }}
          >
            I help founders and product teams make better product decisions before costly
            mistakes happen. Then I turn those decisions into live apps and websites.
          </p>
        </div>

        {/* ---------- Mobile ---------- */}
        <div className="lg:hidden flex flex-col gap-[12px] w-full">
          <a
            href={`mailto:${EMAIL}`}
            className="flex gap-[6px] items-center justify-center h-[48px] px-3 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--rd-btn-bg)" }}
          >
            <span
              className="font-[family-name:var(--font-dm-sans)] font-semibold text-[15px] whitespace-nowrap"
              style={{ color: "var(--rd-btn-text)" }}
            >
              Email me
            </span>
            <span className="relative shrink-0 flex items-center" style={{ color: "var(--rd-btn-text)" }}>
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
            </span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex gap-[6px] items-center justify-center h-[48px] px-3 rounded-full border transition-opacity hover:opacity-70"
            style={{ borderColor: "var(--rd-border)" }}
          >
            <span className="relative shrink-0 flex items-center" style={{ color: "var(--rd-text)" }}>
              <HugeiconsIcon icon={Linkedin01Icon} size={16} />
            </span>
            <span
              className="font-[family-name:var(--font-dm-sans)] font-medium text-[15px] whitespace-nowrap"
              style={{ color: "var(--rd-text)" }}
            >
              LinkedIn
            </span>
          </a>
        </div>

        {/* ---------- Desktop ---------- */}
        <div className="hidden lg:flex gap-[12px] items-center">
          <PrimaryButton label="Email me" icon={ArrowUpRight01Icon} href={`mailto:${EMAIL}`} />
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex gap-[6px] items-center px-[8px] py-[4px] hover:opacity-70 transition-opacity"
          >
            <span className="relative shrink-0 flex items-center" style={{ color: "var(--rd-text)" }}>
              <HugeiconsIcon icon={Linkedin01Icon} size={16} />
            </span>
            <span
              className="font-[family-name:var(--font-dm-sans)] font-medium text-[16px] tracking-[-0.096px] whitespace-nowrap"
              style={{ color: "var(--rd-text)" }}
            >
              LinkedIn
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] lg:gap-[32px] items-start w-full">
        <ClientLogos />
        <TestimonialCard />
      </div>
    </>
  );
}
