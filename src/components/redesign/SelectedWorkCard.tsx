import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { SelectedWorkItem } from "@/data/homeContent";
import TagLabel from "./TagLabel";

export default function SelectedWorkCard({ item }: { item: SelectedWorkItem }) {
  const { title, statusLabel, statusBg, statusText, context, description, image, imageFit, tags, href, cardBg } =
    item;
  const buttonLabel = item.buttonLabel ?? "View project";
  const external = /^https?:\/\//.test(href);
  const imagePosition = item.imagePosition ?? "center top";

  return (
    <>
      {/* ---------- Mobile (below lg) ---------- */}
      <div
        className="lg:hidden rd-card-bg flex flex-col w-full rounded-[20px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-none dark:border dark:border-[color:var(--rd-card-border)]"
        style={{ backgroundColor: cardBg }}
      >
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className={`relative w-full rounded-[12px] overflow-hidden shrink-0 aspect-[326/190] block ${
            imageFit === "contain" ? "rd-contain-bg bg-white" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            quality={100}
            sizes="calc(100vw - 72px)"
            className={imageFit === "contain" ? "object-contain" : "object-cover"}
            style={imageFit === "contain" ? undefined : { objectPosition: imagePosition }}
          />
        </a>

        <div className="flex gap-[8px] items-center mt-4">
          <span
            className="flex items-center justify-center px-[10px] py-[4px] rounded-full shrink-0"
            style={{ backgroundColor: statusBg }}
          >
            <span
              className="font-[family-name:var(--font-dm-sans)] font-semibold text-[12px] whitespace-nowrap"
              style={{ color: statusText }}
            >
              {statusLabel}
            </span>
          </span>
          <span
            className="font-[family-name:var(--font-dm-sans)] font-medium text-[13px]"
            style={{ color: "var(--rd-text-muted)" }}
          >
            {context}
          </span>
        </div>

        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="w-full font-[family-name:var(--font-dm-sans)] font-semibold text-[20px] leading-[1.3] mt-3"
          style={{ color: "var(--rd-text)" }}
        >
          {title}
        </a>

        <p
          className="w-full font-[family-name:var(--font-dm-sans)] text-[14px] leading-[1.55] mt-2 opacity-70"
          style={{ color: "var(--rd-text)" }}
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
                <TagLabel>{tag}</TagLabel>
              </span>
            </span>
          ))}
        </div>

        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="flex gap-[6px] items-center justify-center w-full h-[48px] rounded-[10px] bg-[#121212] mt-4 transition-opacity hover:opacity-90"
        >
          <span className="font-[family-name:var(--font-dm-sans)] font-medium text-[15px] leading-[20px] text-white tracking-[-0.084px] whitespace-nowrap">
            {buttonLabel}
          </span>
          <span className="relative shrink-0 flex items-center text-white">
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
          </span>
        </a>
      </div>

      {/* ---------- Desktop (lg and up) ---------- */}
      <div
        className="hidden lg:flex group rd-card-bg flex-col gap-[17px] items-start p-[32px] rounded-[17px] shrink-0 w-full transition-shadow hover:shadow-lg"
        style={{ backgroundColor: cardBg }}
      >
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className={`relative w-full rounded-[12px] overflow-hidden shrink-0 aspect-[687/443] block ${
            imageFit === "contain" ? "rd-contain-bg bg-white" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            quality={100}
            sizes="691px"
            className={`transition-transform duration-300 group-hover:scale-[1.03] ${
              imageFit === "contain" ? "object-contain" : "object-cover"
            }`}
            style={imageFit === "contain" ? undefined : { objectPosition: imagePosition }}
          />
        </a>

        <div className="flex flex-col gap-[12px] items-start px-[32px] py-[16px] w-full">
          <div className="flex flex-wrap gap-x-[12px] gap-y-[6px] items-center max-w-full">
            <span
              className="flex items-center justify-center px-[10px] py-[4px] rounded-full shrink-0"
              style={{ backgroundColor: statusBg }}
            >
              <span
                className="font-[family-name:var(--font-dm-sans)] font-semibold text-[12px] whitespace-nowrap"
                style={{ color: statusText }}
              >
                {statusLabel}
              </span>
            </span>
            <span
              className="font-[family-name:var(--font-dm-sans)] font-medium text-[14px] min-w-0 xl:whitespace-nowrap"
              style={{ color: "var(--rd-text-muted)" }}
            >
              {context}
            </span>
          </div>

          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="w-full font-[family-name:var(--font-dm-sans)] font-semibold text-[32px] leading-normal hover:opacity-70 transition-opacity"
            style={{ color: "var(--rd-text)" }}
          >
            {title}
          </a>
          <p
            className="w-full font-[family-name:var(--font-dm-sans)] text-[18px] leading-normal opacity-60 tracking-[-0.27px]"
            style={{ color: "var(--rd-text)" }}
          >
            {description}
          </p>
        </div>

        <div className="flex items-start justify-between pl-[32px] w-full gap-4">
          <div className="flex gap-[17px] items-center flex-wrap min-w-0 flex-1">
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
                  <TagLabel>{tag}</TagLabel>
                </span>
              </span>
            ))}
          </div>

          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="flex gap-[2px] items-center justify-center p-[6px] rounded-[8px] shrink-0 bg-[#121212] hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center justify-center px-[4px]">
              <span className="font-[family-name:var(--font-dm-sans)] font-medium text-[14px] leading-[20px] text-white tracking-[-0.084px] whitespace-nowrap">
                {buttonLabel}
              </span>
            </span>
            <span className="relative shrink-0 flex items-center text-white">
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
