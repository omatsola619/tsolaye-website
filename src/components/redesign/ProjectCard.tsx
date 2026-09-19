import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    description,
    descriptionTracking,
    image,
    imageFit,
    tags,
    buttonLabel,
    buttonColor,
    buttonColorMobileLight,
    buttonColorMobileDark,
    cardBg,
    href,
  } = project;

  return (
    <>
      {/* ---------- Mobile (below lg): rebuilt per mobile-audit-brief.md ---------- */}
      <div
        className="lg:hidden rd-card-bg flex flex-col w-full rounded-[20px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-none dark:border dark:border-[color:var(--rd-card-border)]"
        style={{ backgroundColor: cardBg }}
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`relative w-full rounded-[12px] overflow-hidden shrink-0 aspect-[691/470] block ${
            imageFit === "contain" ? "rd-contain-bg bg-white" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={imageFit === "contain" ? "object-contain" : "object-cover object-top"}
          />
        </a>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="w-full font-[family-name:var(--font-genos)] font-bold text-[18px] leading-[1.25] mt-5"
          style={{ color: "var(--rd-text)", textWrap: "balance" }}
        >
          {title}
        </a>

        <p
          className="w-full font-[family-name:var(--font-dm-sans)] text-[14px] leading-[1.55] mt-2"
          style={{ color: "var(--rd-text-muted)" }}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-[8px] items-center mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border-[1.4px] flex items-center justify-center px-[12px] h-[31px] rounded-[45px] shrink-0"
              style={{ borderColor: "var(--rd-chip-border)" }}
            >
              <span
                className="font-[family-name:var(--font-sans)] text-[13px] tracking-[-0.6px] whitespace-nowrap"
                style={{ color: "var(--rd-chip-text)" }}
              >
                {tag}
              </span>
            </span>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="rd-btn-mobile-accent flex gap-[6px] items-center justify-center w-full h-[48px] rounded-[10px] mt-4 transition-opacity hover:opacity-90"
          style={
            {
              backgroundColor: buttonColorMobileLight ?? buttonColor,
              "--btn-color-dark": buttonColorMobileDark ?? buttonColor,
            } as CSSProperties
          }
        >
          <span className="font-[family-name:var(--font-dm-sans)] font-medium text-[15px] leading-[20px] text-white tracking-[-0.084px] whitespace-nowrap">
            {buttonLabel}
          </span>
          <span className="relative shrink-0 size-[18px]">
            <Image
              src="/redesign/icons/arrow-right-s-line.svg"
              alt=""
              fill
              className="object-contain"
            />
          </span>
        </a>
      </div>

      {/* ---------- Desktop (lg and up): unchanged ---------- */}
      <div
        className="hidden lg:flex group rd-card-bg flex-col gap-[17px] items-start p-[32px] rounded-[17px] shrink-0 w-full transition-shadow hover:shadow-lg"
        style={{ backgroundColor: cardBg }}
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`relative w-full rounded-[10px] overflow-hidden shrink-0 aspect-[691/470] block ${
            imageFit === "contain" ? "rd-contain-bg bg-white" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={`transition-transform duration-300 group-hover:scale-[1.03] ${
              imageFit === "contain" ? "object-contain" : "object-cover"
            }`}
          />
        </a>

        <div className="flex flex-col gap-[16px] items-start px-[32px] py-[16px] w-full">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-full font-[family-name:var(--font-genos)] font-bold text-[48px] leading-[56px] hover:opacity-70 transition-opacity"
            style={{ color: "var(--rd-text)" }}
          >
            {title}
          </a>
          <p
            className="w-full font-[family-name:var(--font-dm-sans)] text-[20px] leading-normal opacity-60"
            style={{ letterSpacing: descriptionTracking ?? "-0.3px", color: "var(--rd-text)" }}
          >
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pl-[32px] w-full flex-wrap gap-4">
          <div className="flex gap-[17px] items-center flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-[1.4px] flex items-center justify-center px-[22px] py-[8px] rounded-[45px] shrink-0"
                style={{ borderColor: "var(--rd-chip-border)" }}
              >
                <span
                  className="font-[family-name:var(--font-sans)] text-[16px] tracking-[-0.736px] whitespace-nowrap"
                  style={{ color: "var(--rd-chip-text)" }}
                >
                  {tag}
                </span>
              </span>
            ))}
          </div>

          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex gap-[2px] items-center justify-center p-[6px] rounded-[8px] shrink-0 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: buttonColor }}
          >
            <span className="flex items-center justify-center px-[4px]">
              <span className="font-[family-name:var(--font-dm-sans)] font-medium text-[14px] leading-[20px] text-white tracking-[-0.084px] whitespace-nowrap">
                {buttonLabel}
              </span>
            </span>
            <span className="relative shrink-0 size-[20px]">
              <Image
                src="/redesign/icons/arrow-right-s-line.svg"
                alt=""
                fill
                className="object-contain"
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
