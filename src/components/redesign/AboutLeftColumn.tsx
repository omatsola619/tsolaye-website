import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import PrimaryButton from "./PrimaryButton";
import WhatClientsSay from "./about/WhatClientsSay";
import { EMAIL, LINKEDIN_URL } from "@/data/contact";

const stats = [
  { num: "25+", label: "Projects delivered" },
  { num: "28%", label: "Less onboarding drop-off" },
  { num: "5", label: "Live products" },
];

export default function AboutLeftColumn() {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[32px] items-start pb-8 lg:pb-[24px] pt-0 lg:pt-[32px] px-0 lg:px-[20px] w-full">
      <div className="flex flex-col gap-[32px] lg:gap-[32px] items-start w-full">
        <div className="flex flex-col gap-[24px] lg:gap-[24px] items-start w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex gap-[8px] items-center px-[12px] py-[6px] rounded-full bg-[#e8f7eb] max-w-full mb-[8px]">
              <span className="size-[8px] rounded-full bg-[#2fae54] shrink-0" />
              <span className="font-[family-name:var(--font-dm-sans)] text-[13px] tracking-[-1px] text-[#17592e] whitespace-normal lg:whitespace-nowrap">
                Open to Product Design &amp; Design Engineering roles
                <span className="hidden lg:inline"> · Remote or relocation</span>
              </span>
            </div>
            <h1
              className="font-[family-name:var(--font-genos)] font-bold text-[34px] sm:text-[40px] lg:text-[51px] leading-[1.1] lg:leading-[1] tracking-[-0.18px] w-full whitespace-nowrap"
              style={{ color: "var(--rd-text)" }}
            >
              TSOLAYE EYEOYIBO
            </h1>
            <p
              className="font-[family-name:var(--font-dm-sans)] text-[15px] lg:text-[16px] leading-[1.55] lg:leading-[22px] tracking-[-0.45px] opacity-80"
              style={{ color: "var(--rd-text)" }}
            >
              I’m a product designer who also builds. I help founders make better product
              decisions before costly mistakes happen, combining user insight, product strategy
              and AI-assisted development to ship products that are clear and useful.
            </p>
          </div>

          {/* ---------- Mobile: three stacked actions ---------- */}
          <div className="lg:hidden flex flex-col gap-[12px] w-full">
            <a
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noreferrer"
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

        <div className="flex gap-[8px] lg:gap-[16px] items-start w-full">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-1 min-w-0 gap-[8px] lg:gap-[12px] items-center justify-center">
              {i > 0 && (
                <span
                  className="h-[60px] lg:h-[80px] w-px shrink-0"
                  style={{ backgroundColor: "var(--rd-divider)" }}
                />
              )}
              <div className="flex flex-col items-start justify-center min-w-0 min-h-[60px] lg:min-h-[80px]">
                <p
                  className="font-[family-name:var(--font-genos)] text-[30px] lg:text-[48px] leading-[1]"
                  style={{ color: "var(--rd-text)" }}
                >
                  {stat.num}
                </p>
                <p
                  className="font-[family-name:var(--font-sans)] font-medium text-[11px] lg:text-[12px] tracking-[0.06px] lg:whitespace-nowrap"
                  style={{ color: "var(--rd-text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <WhatClientsSay />
      </div>
    </div>
  );
}
