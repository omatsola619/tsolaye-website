"use client";

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Kosta Corriveau",
    role: "CEO Mobile App Builders LLC",
    quote:
      "I had the pleasure of working with Tsolaye who delivered two outstanding websites and mobile app designs with exceptional professionalism. He consistently demonstrated the ability to work independently without supervision, managing tasks efficiently while maintaining high-quality standards.",
    image: "/redesign/avatars/kosta.png",
  },
  {
    name: "Sol Omayoglu",
    role: "Founder Hatchyverse",
    quote:
      "Eyeoyibo is passionate and hard working, does detailed work very effectively, uses his time well and is a value add to the entire team, I would highly recommend Eyeoyibo for UI/UX roles!",
    image: "/redesign/avatars/sol.png",
  },
  {
    name: "Joseph Brendan",
    role: "Founder Hatchyverse",
    quote:
      "I had the privilege of mentoring and supervising Eyeoyibo Tsolaye during a design project, and I can confidently say he is a rare talent. His ability to learn quickly is remarkable and his passion for solving design problems is seen in every task he takes on.",
    image: "/redesign/avatars/joseph.png",
  },
  {
    name: "Oruiribama S",
    role: "Upwork Client",
    quote:
      "Absolutely amazing to work with. Tsolaye was professional, reliable, and delivered a clean, user-friendly design that exceeded our expectations. He was patient, open to feedback, and made sure every detail was just right.",
    image: "/redesign/avatars/oruiribama.png",
  },
];

export default function TestimonialCard() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const isFirst = index === 0;
  const isLast = index === testimonials.length - 1;

  const prev = () => { if (isFirst) return; setIndex((i) => Math.max(0, i - 1)); };
  const next = () => { if (isLast) return; setIndex((i) => Math.min(testimonials.length - 1, i + 1)); };
  const current = testimonials[index];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      {/* ---------- Mobile (below lg): rebuilt per mobile-audit-brief.md ---------- */}
      <div
        className="rd-card-bg lg:hidden flex flex-col w-full rounded-[20px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-none dark:border dark:border-[color:var(--rd-card-border)]"
        style={{ backgroundColor: "var(--rd-card-bg)", touchAction: "pan-y" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`col-start-1 row-start-1 flex flex-col ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== index}
            >
              <div className="flex gap-[8px] items-center w-full">
                <span className="relative shrink-0 size-[40px] rounded-full overflow-hidden">
                  <Image src={t.image} alt={t.name} fill sizes="40px" quality={95} className="object-cover" />
                </span>
                <div className="flex flex-col items-start min-w-0 flex-1">
                  <p
                    className="font-[family-name:var(--font-dm-sans)] font-semibold text-[15px] tracking-[-0.42px] whitespace-nowrap"
                    style={{ color: "var(--rd-text)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-[family-name:var(--font-dm-sans)] text-[13px] tracking-[-0.2px]"
                    style={{ color: "var(--rd-text-muted)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>

              <p
                className="font-[family-name:var(--font-dm-sans)] text-[15px] tracking-[-1px] leading-normal mt-4"
                style={{ color: "var(--rd-text)" }}
              >
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-[8px] items-center mt-4">
          <button
            onClick={prev}
            aria-disabled={isFirst}
            aria-label="Previous testimonial"
            className={`flex items-center justify-center size-[44px] transition-opacity ${
              isFirst ? "opacity-[0.38] cursor-default" : "hover:opacity-80 cursor-pointer"
            }`}
          >
            <span
              className="flex items-center justify-center size-[40px] rounded-full backdrop-blur-[4px] border"
              style={{ backgroundColor: "var(--rd-arrow-bg)", borderColor: "var(--rd-arrow-border)" }}
            >
              <span style={{ color: "var(--rd-text)", opacity: 0.7 }}>
                <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
              </span>
            </span>
          </button>
          <button
            onClick={next}
            aria-disabled={isLast}
            aria-label="Next testimonial"
            className={`flex items-center justify-center size-[44px] transition-opacity ${
              isLast ? "opacity-[0.38] cursor-default" : "hover:opacity-80 cursor-pointer"
            }`}
          >
            <span
              className="flex items-center justify-center size-[40px] rounded-full backdrop-blur-[4px] border"
              style={{ backgroundColor: "var(--rd-arrow-bg)", borderColor: "var(--rd-arrow-border)" }}
            >
              <span style={{ color: "var(--rd-text)", opacity: 0.7 }}>
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* ---------- Desktop (lg and up): unchanged ---------- */}
      <div
        className="hidden lg:flex flex-col items-center justify-center py-[32px] w-full"
        style={{ backgroundColor: "var(--rd-testimonial-bg)" }}
      >
        <div className="flex flex-col gap-[16px] items-start justify-center px-[28px] w-full">
          <div className="flex items-start justify-between w-full">
            <div className="flex gap-[8px] items-center">
              <span
                className="relative shrink-0 size-[48px] rounded-full border-[1.5px] overflow-hidden"
                style={{ borderColor: "var(--rd-avatar-border)" }}
              >
                <Image src={current.image} alt={current.name} fill sizes="48px" quality={95} className="object-cover" />
              </span>
              <div className="flex flex-col items-start">
                <p
                  className="font-[family-name:var(--font-dm-sans)] font-semibold text-[16px] tracking-[-0.42px] whitespace-nowrap"
                  style={{ color: "var(--rd-text)" }}
                >
                  {current.name}
                </p>
                <p
                  className="font-[family-name:var(--font-dm-sans)] text-[14px] tracking-[-0.42px] opacity-60 whitespace-nowrap"
                  style={{ color: "var(--rd-text)" }}
                >
                  {current.role}
                </p>
              </div>
            </div>

            <div className="flex gap-[32px] items-start">
              <button
                onClick={prev}
                aria-disabled={isFirst}
                aria-label="Previous testimonial"
                className={`backdrop-blur-[4px] border flex items-center justify-center rounded-[28px] size-[48px] transition-opacity ${
                  isFirst ? "opacity-50 cursor-default" : "hover:opacity-80 cursor-pointer"
                }`}
                style={{ backgroundColor: "var(--rd-arrow-bg)", borderColor: "var(--rd-arrow-border)" }}
              >
                <span style={{ color: "var(--rd-text)" }}>
                  <HugeiconsIcon icon={ArrowLeft01Icon} size={24} />
                </span>
              </button>
              <button
                onClick={next}
                aria-disabled={isLast}
                aria-label="Next testimonial"
                className={`backdrop-blur-[4px] border flex items-center justify-center rounded-[28px] size-[48px] transition-opacity ${
                  isLast ? "opacity-50 cursor-default" : "hover:opacity-80 cursor-pointer"
                }`}
                style={{ backgroundColor: "var(--rd-arrow-bg)", borderColor: "var(--rd-arrow-border)" }}
              >
                <span style={{ color: "var(--rd-text)" }}>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={24} />
                </span>
              </button>
            </div>
          </div>

          <p
            className="font-[family-name:var(--font-dm-sans)] text-[16px] tracking-[-1px] leading-normal"
            style={{ color: "var(--rd-text)" }}
          >
            {current.quote}
          </p>
        </div>
      </div>
    </>
  );
}
