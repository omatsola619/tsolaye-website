import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "25+", label: "Projects Completed" },
  { num: "10+", label: "Global Clients" },
];

export default function AboutLeftColumn() {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[48px] items-start pb-8 lg:pb-[32px] pt-0 lg:pt-[64px] px-0 lg:px-[20px] w-full">
      <div className="flex flex-col gap-[32px] lg:gap-[48px] items-start w-full">
        <div className="flex flex-col gap-[24px] lg:gap-[32px] items-start w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p
              className="font-[family-name:var(--font-dm-sans)] font-medium text-[15px] lg:text-[18px] leading-[24px] tracking-[-0.09px] whitespace-nowrap"
              style={{ color: "var(--rd-text-muted)" }}
            >
              PRODUCT DESIGNER &amp; DESIGN ENGINEER
            </p>
            <h1
              className="font-[family-name:var(--font-genos)] font-bold text-[34px] sm:text-[40px] lg:text-[51px] leading-[1.1] lg:leading-[1] tracking-[-0.18px] w-full whitespace-nowrap"
              style={{ color: "var(--rd-text)" }}
            >
              EYEOYIBO TSOLAYE
            </h1>
            <p
              className="font-[family-name:var(--font-dm-sans)] text-[15px] lg:text-[16px] leading-[1.55] lg:leading-[22px] tracking-[-0.45px] opacity-80"
              style={{ color: "var(--rd-text)" }}
            >
              I help founders make better product decisions before costly mistakes happen. As a
              Product Designer and Design Engineer, I combine user insight, product strategy,
              design, and AI-powered development to turn ideas into products that are clear,
              useful, and ready to ship.
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

        <div className="flex gap-[8px] lg:gap-[16px] items-start w-full">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-1 gap-[8px] lg:gap-[12px] items-center justify-center">
              {i > 0 && (
                <span
                  className="h-[60px] lg:h-[80px] w-px shrink-0"
                  style={{ backgroundColor: "var(--rd-divider)" }}
                />
              )}
              <div className="flex flex-col items-start justify-center min-h-[60px] lg:min-h-[80px]">
                <p
                  className="font-[family-name:var(--font-genos)] text-[30px] lg:text-[48px] leading-[1]"
                  style={{ color: "var(--rd-text)" }}
                >
                  {stat.num}
                </p>
                <p
                  className="font-[family-name:var(--font-sans)] font-medium text-[11px] lg:text-[12px] tracking-[0.06px] whitespace-nowrap"
                  style={{ color: "var(--rd-text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex items-center gap-2 px-5 lg:px-0">
          <p
            className="font-[family-name:var(--font-genos)] font-bold text-[22px] lg:text-[28px] leading-[1.3] lg:leading-[40px]"
            style={{ color: "var(--rd-text)" }}
          >
            Tsolaye is delighted to meet you.
          </p>
          <span className="text-[20px] lg:text-[24px]">👇</span>
        </div>
        {/* Mobile: full-bleed edge-to-edge 16:9, matching how YouTube stretches its player across the full screen width. Desktop: fixed 493x277 exactly matching the source video's resolution. */}
        <div
          className="w-screen relative left-1/2 -translate-x-1/2 aspect-video lg:w-[493px] lg:h-[277px] lg:aspect-auto lg:static lg:left-auto lg:translate-x-0"
          style={{ backgroundColor: "var(--rd-surface-2)" }}
        />
      </div>
    </div>
  );
}
