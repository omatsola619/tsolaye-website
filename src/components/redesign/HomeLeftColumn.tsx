import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import ClientLogos from "./ClientLogos";
import TestimonialCard from "./TestimonialCard";

export default function HomeLeftColumn() {
  return (
    <>
      <div className="flex flex-col gap-[24px] lg:gap-[32px] items-start pb-[40px] lg:pb-[48px] pt-0 lg:pt-[64px] px-0 lg:px-[20px] w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <div className="flex flex-col items-start w-full lg:w-[512px]">
            <h1
              className="font-[family-name:var(--font-genos)] font-bold text-[34px] sm:text-[40px] lg:text-[51px] leading-[1.25] lg:leading-[1.1] tracking-[1px] w-full"
              style={{ color: "var(--rd-text)" }}
            >
              <span style={{ color: "var(--rd-text-muted)" }}>Product design for</span>
              {" "}websites, apps &amp; mobile experiences.
            </h1>
          </div>
          <p
            className="font-[family-name:var(--font-dm-sans)] text-[15px] lg:text-[16px] leading-[1.55] lg:leading-[22px] tracking-[-1px] opacity-80 w-full lg:w-[462px]"
            style={{ color: "var(--rd-text)" }}
          >
            I’ve worked with global brands across nations generating millions in revenue and
            reaching thousands of users.
          </p>
        </div>

        {/* ---------- Mobile: two equal 48px-tall columns ---------- */}
        <div className="lg:hidden flex gap-[12px] items-center w-full">
          <a
            href="mailto:Tsolaye999@gmail.com"
            className="flex-1 flex gap-[6px] items-center justify-center h-[48px] px-3 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--rd-btn-bg)" }}
          >
            <span
              className="font-[family-name:var(--font-dm-sans)] font-semibold text-[15px] whitespace-nowrap"
              style={{ color: "var(--rd-btn-text)" }}
            >
              Send an Email
            </span>
            <span className="relative shrink-0 size-[18px]" style={{ filter: "var(--rd-icon-invert)" }}>
              <Image src="/redesign/icons/arrow-up-right.svg" alt="" fill className="object-contain" />
            </span>
          </a>
          <button
            className="flex-1 flex gap-[6px] items-center justify-center h-[48px] px-3 rounded-full border cursor-pointer transition-opacity hover:opacity-70"
            style={{ borderColor: "var(--rd-border)" }}
          >
            <span
              className="font-[family-name:var(--font-dm-sans)] font-medium text-[15px] whitespace-nowrap"
              style={{ color: "var(--rd-text)" }}
            >
              Message on
            </span>
            <span className="relative shrink-0 size-[16px]">
              <Image src="/redesign/icons/major-brand-logo.svg" alt="" fill className="object-contain" />
            </span>
          </button>
        </div>

        {/* ---------- Desktop: unchanged ---------- */}
        <div className="hidden lg:flex gap-[8px] items-center">
          <PrimaryButton
            label="Send an Email"
            icon="/redesign/icons/arrow-up-right.svg"
            href="mailto:Tsolaye999@gmail.com"
          />
          <button className="flex gap-[8px] items-center px-[8px] py-[4px] cursor-pointer hover:opacity-70 transition-opacity">
            <span
              className="font-[family-name:var(--font-dm-sans)] font-medium text-[16px] tracking-[-0.096px] whitespace-nowrap"
              style={{ color: "var(--rd-text)" }}
            >
              Message on
            </span>
            <span className="relative shrink-0 size-[16px]">
              <Image
                src="/redesign/icons/major-brand-logo.svg"
                alt=""
                fill
                className="object-contain"
              />
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] lg:gap-[32px] items-start w-full">
        <ClientLogos />
        <TestimonialCard />
      </div>
    </>
  );
}
