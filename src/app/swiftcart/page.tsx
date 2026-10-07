import Image from "next/image";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import CaseStudyNav from "@/components/work/CaseStudyNav";

export const metadata: Metadata = {
  title: "SwiftCart: Case Study | Tsolaye",
  description:
    "SwiftCart is an iOS shopping app that makes finding a product as quick as saying it and keeps one honest total from cart to receipt.",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const ASSETS = "/redesign/work/swiftcart";

// Section padding: matches the 120px gutter of the 1400 frame, shrinking on smaller screens.
const PAD = "px-5 md:px-[48px] xl:px-[60px] min-[1400px]:px-[120px]";
const SECTION_Y = "py-[64px] md:py-[96px] xl:py-[120px]";

const GLASS =
  "relative rounded-[32px] border-[1.5px] border-white/80 backdrop-blur-[20px] bg-white/30 shadow-[0_24px_30px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.35)]";
const GLASS_DARK =
  "relative rounded-[32px] border-[1.5px] border-white/[0.32] backdrop-blur-[20px] bg-[rgba(20,22,26,0.28)] shadow-[0_24px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]";

function Label({
  children,
  className = "text-[#8a8d93]",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-medium uppercase text-[13px] md:text-[16px] xl:text-[20px] leading-[1.45] tracking-[1.2px] xl:tracking-[1.6px] whitespace-pre-wrap ${className}`}
    >
      {children}
    </p>
  );
}

function Heading({
  line1,
  line2,
  line1Class = "text-[#16171a]",
  line2Class = "text-[#8a8d93]",
  className = "",
}: {
  line1: string;
  line2: string;
  line1Class?: string;
  line2Class?: string;
  className?: string;
}) {
  return (
    <h2
      className={`font-light text-[32px] sm:text-[40px] md:text-[52px] xl:text-[64px] leading-[1.08] tracking-[-0.48px] max-w-[1160px] ${className}`}
    >
      <span className={`block ${line1Class}`}>{line1}</span>
      <span className={`block ${line2Class}`}>{line2}</span>
    </h2>
  );
}

function Glow({
  w,
  h,
  color,
  opacity,
  blur,
  className = "",
}: {
  w: number;
  h: number;
  color: string;
  opacity: number;
  blur: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-[50%] pointer-events-none ${className}`}
      style={{
        width: w,
        height: h,
        backgroundColor: color,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}

/** Exported phone render, cropped to the device bounds; the drop shadow is applied in CSS. */
function Phone({
  src,
  alt,
  imgW,
  imgH,
  sizes,
  className = "w-full",
}: {
  src: string;
  alt: string;
  imgW: number;
  imgH: number;
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src={`${ASSETS}/${src}`}
      alt={alt}
      width={imgW}
      height={imgH}
      quality={95}
      sizes={sizes}
      className={`h-auto [filter:drop-shadow(0_4px_5px_rgba(0,0,0,0.07))_drop-shadow(0_30px_32px_rgba(0,0,0,0.16))] ${className}`}
    />
  );
}

function Phone250({ src, alt }: { src: string; alt: string }) {
  return (
    <Phone
      src={src}
      alt={alt}
      imgW={250}
      imgH={505}
      sizes="(min-width: 1280px) 250px, (min-width: 768px) 22vw, 45vw"
      className="w-full max-w-[250px]"
    />
  );
}

function Phone290({ src, alt }: { src: string; alt: string }) {
  return (
    <Phone
      src={src}
      alt={alt}
      imgW={290}
      imgH={586}
      sizes="(min-width: 1280px) 290px, (min-width: 768px) 28vw, 240px"
      className="w-full max-w-[290px]"
    />
  );
}

function SpecRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div
      className={`grid grid-cols-[110px_1fr] md:grid-cols-[170px_1fr] items-center gap-x-4 py-[16px] md:py-[17px] border-t border-[#cfcfd3] ${
        last ? "border-b" : ""
      }`}
    >
      <p className="font-semibold uppercase text-[#8a8d93] text-[13px] md:text-[16px] xl:text-[20px] tracking-[1.2px] xl:tracking-[1.6px] leading-[1.45]">
        {label}
      </p>
      <p className="font-medium text-[#16171a] text-[17px] md:text-[20px] xl:text-[22px] leading-[1.45]">{value}</p>
    </div>
  );
}

function DecisionBlock({
  label,
  children,
  labelClass,
  bodyClass = "text-[#5e6168]",
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  labelClass?: string;
  bodyClass?: string;
  className?: string;
}) {
  return (
    <div className={`border-t border-[rgba(22,23,26,0.15)] pt-[24px] flex flex-col gap-[13px] ${className}`}>
      <Label className={labelClass}>{label}</Label>
      <p className={`font-medium text-[18px] md:text-[22px] xl:text-[24px] leading-[1.45] ${bodyClass}`}>{children}</p>
    </div>
  );
}

function TotalCard({ label, caption, className = "" }: { label: string; caption: string; className?: string }) {
  return (
    <div className={`${GLASS} bg-white/[0.32] p-[25px] flex flex-col ${className}`}>
      <Label>{label}</Label>
      <div className="flex items-center gap-[12px] mt-[20px]">
        <Image src={`${ASSETS}/icon-check.svg`} alt="" width={32} height={32} className="shrink-0" />
        <p className="font-light text-[#16171a] text-[40px] md:text-[44px] xl:text-[52px] leading-none tracking-[-1.04px]">
          $96.10
        </p>
      </div>
      <p className="font-medium text-[#5e6168] text-[18px] md:text-[20px] xl:text-[22px] leading-[1.4] mt-[24px]">
        {caption}
      </p>
    </div>
  );
}

function ResultCard({ value, label }: { value: string; label: string }) {
  return (
    <div className={`${GLASS_DARK} p-[28px] flex flex-col gap-[28px] xl:min-h-[230px]`}>
      <p className="font-light text-white text-[52px] md:text-[60px] xl:text-[72px] leading-none tracking-[-2.16px]">
        {value}
      </p>
      <p className="font-medium text-white/80 text-[18px] md:text-[20px] xl:text-[22px] leading-[1.4] xl:max-w-[296px]">
        {label}
      </p>
    </div>
  );
}

function CaptionTitle({ children, className = "text-[#16171a]" }: { children: React.ReactNode; className?: string }) {
  return <p className={`font-semibold text-[20px] xl:text-[24px] leading-[1.45] ${className}`}>{children}</p>;
}

function CaptionBody({ children }: { children: React.ReactNode }) {
  return <p className="font-medium text-[#5e6168] text-[18px] xl:text-[22px] leading-[1.4] mt-[8px]">{children}</p>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${GLASS} !rounded-[24px] bg-white/50 absolute -top-[26px] left-1/2 -translate-x-1/2 z-10 h-[52px] px-[18px] flex items-center gap-[10px] whitespace-nowrap`}
    >
      <span className="size-[10px] rounded-full bg-[#ff7a00] shrink-0" />
      <span className="font-semibold text-[#16171a] text-[17px] xl:text-[20px] leading-[1.45]">{children}</span>
    </div>
  );
}

const STEPS = [
  { label: "Confirmed", state: "done" },
  { label: "Shipped", state: "done" },
  { label: "Out for delivery", state: "current" },
  { label: "Delivered", state: "pending" },
] as const;

function Dot({ state }: { state: "done" | "current" | "pending" }) {
  if (state === "pending") {
    return <span className="size-[16px] rounded-full bg-white border-2 border-[rgba(22,23,26,0.25)] box-border" />;
  }
  return (
    <span
      className={`size-[16px] rounded-full bg-[#ff7a00] ${
        state === "current" ? "shadow-[0_0_0_2px_#ff7a00,0_0_12px_rgba(255,122,0,0.5)]" : ""
      }`}
    />
  );
}

export default function SwiftCartCaseStudy() {
  return (
    <div className={`${urbanist.variable} bg-white min-h-screen font-[family-name:var(--font-urbanist)]`}>
      <CaseStudyNav />

      <main className="max-w-[1400px] mx-auto">
        {/* 01 Hero */}
        <section className={`bg-[#e4e4e6] ${PAD} ${SECTION_Y}`}>
          <div className="flex items-start justify-between gap-4">
            <Label>{"// UX CASE STUDY"}</Label>
            <Label className="text-[#8a8d93] hidden sm:block">{"// IOS APP"}</Label>
            <Label className="text-[#8a8d93] xl:tracking-[2.4px]">{"// 2026"}</Label>
          </div>

          <h1 className="font-light text-[52px] sm:text-[72px] md:text-[96px] lg:text-[112px] xl:text-[128px] leading-none tracking-[-0.64px] mt-[40px] md:mt-[64px] xl:mt-[83px]">
            <span className="block text-[#16171a]">Shop by voice.</span>
            <span className="block text-[#8a8d93]">Pay one honest total.</span>
          </h1>

          <div className="mt-[48px] md:mt-[72px] xl:mt-[88px] grid grid-cols-1 lg:grid-cols-[620fr_460fr] gap-[40px] lg:gap-[80px] items-start">
            <p className="font-medium text-[#16171a] text-[20px] md:text-[24px] xl:text-[26px] leading-[1.48] max-w-[620px]">
              SwiftCart is an iOS shopping app for people with no time to scroll. We set out to make finding a
              product as quick as saying it, and to keep the price the same from cart to receipt.
            </p>
            <div>
              <SpecRow label="Role" value="Product Designer" />
              <SpecRow label="Timeline" value="8 weeks, 2026" />
              <SpecRow label="Platform" value="iOS" />
              <SpecRow label="Focus" value="Voice search, checkout" last />
            </div>
          </div>
        </section>

        {/* 02 The problem */}
        <section className={`relative overflow-hidden bg-[#e4e4e6] ${PAD} ${SECTION_Y}`}>
          <Glow w={520} h={380} color="#ffffff" opacity={0.9} blur={70} className="hidden md:block left-[40px] top-[563px]" />
          <Glow w={480} h={300} color="#bfc0c6" opacity={0.8} blur={75} className="hidden md:block left-[460px] top-[743px]" />

          <div className="relative">
            <Label>{"// 02  THE PROBLEM"}</Label>
            <Heading
              className="mt-[24px] md:mt-[31px]"
              line1="People already knew what they wanted."
              line2="The app made them type it, then changed the price at the end."
            />

            <div className="mt-[40px] md:mt-[72px] xl:mt-[96px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[40px]">
              <div className={`${GLASS} p-[29px] flex flex-col gap-[48px] lg:min-h-[560px]`}>
                <div className="flex flex-col gap-[24px]">
                  <Label>{"// WHERE IT BROKE · FINDING"}</Label>
                  <p className="font-light text-[#16171a] text-[34px] md:text-[40px] xl:text-[44px] leading-[1.04] tracking-[-0.88px]">
                    Typing is
                    <br />
                    the slow part
                  </p>
                </div>
                <p className="font-medium text-[#5e6168] text-[18px] md:text-[20px] xl:text-[22px] leading-[1.4] mt-auto">
                  Shoppers usually know the product they want. Typing it on a phone, one item at a time, is where
                  the time goes.
                </p>
              </div>

              <div className={`${GLASS} p-[29px] flex flex-col gap-[28px] lg:min-h-[560px]`}>
                <Label>{"// WHERE IT BROKE · PAYING"}</Label>
                <p className="font-light text-[#16171a] text-[72px] xl:text-[96px] leading-none tracking-[-2.88px] -mt-[8px]">
                  40%
                </p>
                <div
                  role="img"
                  aria-label="40 of 100 dots filled: 40 percent"
                  className="grid gap-[4.8px] max-w-[312px]"
                  style={{ gridTemplateColumns: "repeat(20, minmax(0, 1fr))" }}
                >
                  {Array.from({ length: 100 }).map((_, i) => (
                    <span
                      key={i}
                      className={`aspect-square rounded-full ${i < 40 ? "bg-[#ff7a00]" : "bg-[#16171a]/[0.12]"}`}
                    />
                  ))}
                </div>
                <p className="font-medium text-[#5e6168] text-[18px] md:text-[20px] xl:text-[22px] leading-[1.4]">
                  of US shoppers who abandoned a checkout said extra costs (shipping, tax, fees) were the reason.
                  It is the top reason in the study.
                </p>
                <p className="font-medium text-[#8a8d93] text-[16px] xl:text-[20px] leading-[1.35] mt-auto">
                  Source: Baymard Institute, cart abandonment research
                </p>
              </div>

              <div className={`${GLASS} bg-white/[0.22] p-[29px] flex flex-col gap-[48px] md:col-span-2 lg:col-span-1 lg:min-h-[560px]`}>
                <div className="flex flex-col gap-[24px]">
                  <Label>{"// WHAT WE SET OUT TO DO"}</Label>
                  <p className="font-light text-[34px] md:text-[40px] xl:text-[44px] leading-[1.04] tracking-[-0.32px]">
                    <span className="block text-[#16171a]">Say it, see it,</span>
                    <span className="block text-[#cc4e00]">then pay it</span>
                  </p>
                </div>
                <p className="font-medium text-[#5e6168] text-[18px] md:text-[20px] xl:text-[22px] leading-[1.4] mt-auto">
                  Make finding a product as quick as saying it, and show the full price before anyone taps pay.
                </p>
              </div>
            </div>

            <figure className="mt-[64px] md:mt-[96px] xl:mt-[120px] flex gap-[20px] md:gap-[36px]">
              <div className="w-[4px] shrink-0 rounded-[2px] bg-[#ff7a00]" aria-hidden />
              <div className="max-w-[1000px]">
                <blockquote className="font-light text-[#16171a] text-[24px] md:text-[34px] xl:text-[44px] leading-[1.2] tracking-[-0.44px]">
                  “Our shoppers are leaving full carts behind because finding items takes too long and the real
                  total only shows up at the very end. We need ordering to feel fast, clear and effortless.”
                </blockquote>
                <figcaption className="font-medium text-[#5e6168] text-[18px] xl:text-[22px] leading-[1.45] mt-[24px] xl:mt-[28px]">
                  Head of Design, SwiftCart
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* 05 Decision · Voice in search */}
        <section className={`relative overflow-hidden bg-[#e4e4e6] ${PAD} ${SECTION_Y}`}>
          <Glow w={520} h={360} color="#ff7a00" opacity={0.08} blur={80} className="hidden xl:block left-[820px] top-[534px]" />

          <div className="relative">
            <Label>{"// 05  KEY DECISION 01"}</Label>
            <Heading
              className="mt-[24px] md:mt-[31px]"
              line1="Voice had to feel like part of shopping,"
              line2="not a separate app."
            />

            <div className="mt-[40px] md:mt-[72px] xl:mt-[96px] grid grid-cols-1 xl:grid-cols-[480px_600px] xl:justify-between gap-[48px] xl:gap-[80px] items-start">
              <div className="flex flex-col gap-[40px] xl:gap-[48px]">
                <div className="flex flex-col gap-[13px]">
                  <Label>{"// THE PROBLEM"}</Label>
                  <p className="font-medium text-[#5e6168] text-[18px] md:text-[22px] xl:text-[24px] leading-[1.45]">
                    People want to say their list, but a voice feature in its own tab is one more place to learn and
                    one more tap to reach.
                  </p>
                </div>
                <div className="flex flex-col gap-[13px]">
                  <Label>{"// THE CONSTRAINT"}</Label>
                  <p className="font-medium text-[#5e6168] text-[18px] md:text-[22px] xl:text-[24px] leading-[1.45]">
                    It had to work on slow mobile data, and never trap someone who can’t or won’t speak out loud.
                  </p>
                </div>
                <div className="flex flex-col gap-[13px]">
                  <Label>{"// HOW WE CHECKED IT"}</Label>
                  <p className="font-medium text-[#16171a] text-[18px] md:text-[22px] xl:text-[24px] leading-[1.45]">
                    7 of 8 testers found voice on their first try, without help.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className={`${GLASS} p-[24px] md:p-[32px]`}>
                  <Label>{"// OPTION A"}</Label>
                  <p className="font-light text-[#8a8d93] text-[26px] md:text-[32px] leading-[1.45] tracking-[-0.32px] mt-[8px]">
                    A separate voice tab
                  </p>
                  <p className="font-medium text-[#8a8d93] text-[18px] md:text-[22px] leading-[1.4] mt-[12px]">
                    Simple to build, but hidden. Voice would feel like a different product inside the app.
                  </p>
                </div>

                <div className={`${GLASS} bg-white/45 p-[24px] md:p-[32px]`}>
                  <div className="flex items-start justify-between gap-4">
                    <Label className="text-[#cc4e00]">{"// OPTION B"}</Label>
                    <span className="-mt-[2px] md:-mt-[8px] rounded-full bg-[#ff7a00] text-white font-bold text-[14px] md:text-[20px] tracking-[1.2px] md:tracking-[1.6px] uppercase px-[16px] h-[32px] md:h-[40px] flex items-center leading-none">
                      Chosen
                    </span>
                  </div>
                  <p className="font-light text-[#16171a] text-[26px] md:text-[32px] leading-[1.45] tracking-[-0.32px] mt-[8px]">
                    Voice built into search
                  </p>
                  <p className="font-medium text-[#5e6168] text-[18px] md:text-[22px] leading-[1.4] mt-[12px]">
                    A mic in the search bar and a raised voice button open the same listening sheet over Home.
                    Typing stays one tap away.
                  </p>
                  <div className="h-px bg-[rgba(22,23,26,0.12)] my-[24px]" />
                  <Label className="text-[#cc4e00]">{"// WHY WE CHOSE OPTION B"}</Label>
                  <p className="font-medium text-[#16171a] text-[18px] md:text-[22px] leading-[1.4] mt-[16px]">
                    Voice inside search means there is nothing new to learn. The sheet keeps Home visible behind it,
                    so people never feel they left the store.
                  </p>
                </div>
              </div>
            </div>

            {/* Three phones */}
            <div className="relative mt-[64px] md:mt-[96px] xl:mt-[120px]">
              <div
                aria-hidden
                className="hidden xl:block absolute left-1/2 top-[0px] -translate-x-1/2 size-[560px] rounded-full border-[1.5px] border-white/60 bg-gradient-to-b from-white/30 to-[#ff7a00]/15 backdrop-blur-[20px]"
                style={{ top: "-27px" }}
              />
              <Glow w={520} h={400} color="#ff7a00" opacity={0.3} blur={80} className="hidden xl:block left-1/2 -translate-x-1/2 top-[53px]" />
              <div className="relative -mx-5 px-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-[20px] md:gap-[24px] xl:gap-[70px] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:justify-items-center xl:flex xl:justify-center">
                <div className="snap-center shrink-0 w-[240px] md:w-full md:max-w-[290px] xl:w-[290px]">
                  <Phone290 src="voice-permission.png" alt="Voice permission sheet explaining why the mic is needed before it opens" />
                  <div className="mt-[28px] xl:mt-[34px] px-[8px]">
                    <CaptionTitle>01&nbsp; Ask once</CaptionTitle>
                    <CaptionBody>Explain why before the mic opens.</CaptionBody>
                  </div>
                </div>
                <div className="snap-center shrink-0 w-[240px] md:w-full md:max-w-[290px] xl:w-[290px] md:-mt-[24px] xl:-mt-[40px]">
                  <Phone290 src="voice-listening.png" alt="Listening sheet showing the spoken request as it is heard" />
                  <div className="mt-[28px] xl:mt-[34px] px-[8px]">
                    <CaptionTitle className="text-[#cc4e00]">02&nbsp; Listen live</CaptionTitle>
                    <CaptionBody>Words appear as they are heard.</CaptionBody>
                  </div>
                </div>
                <div className="snap-center shrink-0 w-[240px] md:w-full md:max-w-[290px] xl:w-[290px]">
                  <Phone290 src="voice-results.png" alt="Search results list sorted for the spoken request" />
                  <div className="mt-[28px] xl:mt-[34px] px-[8px]">
                    <CaptionTitle>03&nbsp; Ready to add</CaptionTitle>
                    <CaptionBody>A normal list, sorted for the request.</CaptionBody>
                  </div>
                </div>
              </div>
            </div>

            {/* Before and after */}
            <div className={`${GLASS} mt-[56px] md:mt-[80px] p-[24px] md:p-[36px] flex flex-col md:flex-row md:items-center gap-[28px] md:gap-[40px]`}>
              <div className="flex items-center gap-[24px] xl:gap-[28px] shrink-0">
                <Phone
                  src="wireframe.png"
                  alt="First wireframe with the voice button in the tab bar"
                  imgW={140}
                  imgH={231}
                  sizes="140px"
                  className="w-[110px] md:w-[140px]"
                />
                <span className="font-light text-[#ff7a00] text-[32px] leading-none">→</span>
                <Phone
                  src="final-home-small.png"
                  alt="Final Home screen with the mic inside the search bar"
                  imgW={122}
                  imgH={246}
                  sizes="122px"
                  className="w-[96px] md:w-[122px]"
                />
              </div>
              <div className="flex flex-col gap-[20px] md:gap-[30px] xl:pl-[16px]">
                <Label>{"// BEFORE  ·  FIRST WIREFRAME   →   AFTER  ·  FINAL DESIGN"}</Label>
                <p className="font-medium text-[#16171a] text-[18px] md:text-[22px] xl:text-[24px] leading-[1.45] max-w-[680px]">
                  Our first wireframe put voice in the tab bar, where it read as a separate feature. The final
                  design moves the mic into search, where shopping already starts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 Decision · One honest total */}
        <section className={`relative overflow-hidden bg-[#e4e4e6] ${PAD} pt-[64px] md:pt-[96px] xl:pt-[120px]`}>
          <Label>{"// 07  KEY DECISION 02"}</Label>
          <Heading
            className="mt-[24px] md:mt-[31px]"
            line1="One honest total,"
            line2="from checkout to the receipt."
          />

          <div className="mt-[40px] md:mt-[72px] xl:mt-[96px] grid grid-cols-1 md:grid-cols-2 gap-x-[40px] xl:gap-x-[80px] gap-y-[32px] md:gap-y-[48px] xl:gap-y-[56px]">
            <DecisionBlock label="// THE PROBLEM">
              Many checkouts show a subtotal, an estimate and a final total on different screens, so the number
              people agree to keeps moving.
            </DecisionBlock>
            <DecisionBlock label="// THE DECISION" labelClass="text-[#cc4e00]" bodyClass="text-[#16171a]">
              Every fee appears before payment. The same total sits on the pay button, the confirmation and the
              receipt.
            </DecisionBlock>
            <DecisionBlock label="// THE TRADE-OFF">
              Splitting cart and checkout adds one screen. We accepted it, because each screen then asks for one
              clear decision.
            </DecisionBlock>
            <DecisionBlock label="// THE RULE WE KEPT">
              If a number changes, the screen says why, right next to it. Savings always show in green.
            </DecisionBlock>
            <DecisionBlock
              label="// HOW WE CHECKED IT"
              bodyClass="text-[#16171a]"
              className="md:col-span-2"
            >
              6 of 8 testers could repeat the final total without scrolling back.
            </DecisionBlock>
          </div>

          <div className="relative -mx-5 md:-mx-[48px] xl:-mx-[60px] min-[1400px]:-mx-[120px] mt-[64px] md:mt-[96px] xl:mt-[120px] flex flex-col xl:block xl:aspect-[1400/916]">
            <div className="relative order-2 aspect-[4/3] sm:aspect-[16/9] xl:aspect-auto xl:absolute xl:inset-0">
              <Image
                src={`${ASSETS}/photo-macro-phone.jpg`}
                alt="Close-up of the SwiftCart checkout screen on a phone, with the Place order button showing the total"
                fill
                quality={95}
                sizes="(min-width: 1400px) 1400px, 100vw"
                className="object-cover object-[60%_center]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[120px] xl:h-[220px] bg-gradient-to-b from-[#e4e4e6] to-[#e4e4e6]/0"
              />
            </div>

            <div
              aria-hidden
              className="hidden xl:block absolute z-0 left-[200px] right-[200px] top-[210px] h-0 border-t-[1.5px] border-dashed border-[#16171a]/35"
            />
            <div className="relative order-1 z-10 px-5 md:px-[48px] xl:absolute xl:inset-x-0 xl:top-[150px] xl:px-[60px] min-[1400px]:px-[120px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[20px] xl:gap-[70px] items-start pb-[32px] xl:pb-0">
                <TotalCard label="// CHECKOUT" caption="Every fee before you pay." />
                <TotalCard label="// ORDER PLACED" caption="Same total, plus an arrival time." />
                <TotalCard label="// RECEIPT" caption="Nothing new after payment." />
              </div>
            </div>
          </div>
        </section>

        {/* 08 Final design · Discover */}
        <section className={`relative overflow-hidden bg-[#e4e4e6] ${PAD} ${SECTION_Y}`}>
          <Glow w={580} h={420} color="#ff7a00" opacity={0.45} blur={85} className="hidden xl:block left-[410px] top-[688px]" />
          <Glow w={420} h={500} color="#ffffff" opacity={0.9} blur={70} className="hidden xl:block left-[60px] top-[528px]" />
          <Glow w={420} h={500} color="#ffffff" opacity={0.9} blur={70} className="hidden xl:block left-[900px] top-[728px]" />

          <div className="relative">
            <Label>{"// 08  FINAL DESIGN  ·  DISCOVER"}</Label>
            <Heading
              className="mt-[24px] md:mt-[31px]"
              line1="The home screen starts with your voice,"
              line2="not your keyboard."
            />

            {/* Home phone with callouts */}
            <div className="mt-[40px] md:mt-[72px] xl:mt-[110px] max-w-[1160px] mx-auto grid grid-cols-1 xl:grid-cols-[330px_420px_330px] gap-[24px] xl:gap-[40px] items-start">
              <div className="order-2 xl:order-1 flex flex-col gap-[16px] xl:gap-[131px] xl:mt-[113px]">
                <div className={`${GLASS} !rounded-[24px] bg-white/40 p-[22px] md:p-[24px] xl:h-[179px]`}>
                  <Label className="text-[#cc4e00]">{"// SEARCH THAT LISTENS"}</Label>
                  <p className="font-medium text-[#16171a] text-[18px] md:text-[20px] xl:text-[22px] leading-[1.4] mt-[14px]">
                    Type, or tap the mic in the same bar. The hint shows what you can say.
                  </p>
                  <span aria-hidden className="hidden xl:block absolute left-full top-1/2 w-[81px] h-[1.5px] bg-[#ff7a00]" />
                  <span aria-hidden className="hidden xl:block absolute left-[calc(100%+75px)] top-1/2 size-[12px] -translate-y-1/2 rounded-full bg-[#ff7a00]" />
                </div>
                <div className={`${GLASS} !rounded-[24px] bg-white/40 p-[22px] md:p-[24px] xl:h-[179px]`}>
                  <Label className="text-[#cc4e00]">{"// PICKED FOR YOU"}</Label>
                  <p className="font-medium text-[#16171a] text-[18px] md:text-[20px] xl:text-[22px] leading-[1.4] mt-[14px]">
                    Based on what you bought last month, so reordering is one tap.
                  </p>
                  <span aria-hidden className="hidden xl:block absolute left-full top-1/2 w-[81px] h-[1.5px] bg-[#ff7a00]" />
                  <span aria-hidden className="hidden xl:block absolute left-[calc(100%+75px)] top-1/2 size-[12px] -translate-y-1/2 rounded-full bg-[#ff7a00]" />
                </div>
              </div>

              <div className="order-1 xl:order-2 relative z-0 mx-auto w-full max-w-[420px]">
                <Phone
                  src="discover-home.png"
                  alt="SwiftCart Home screen with a search bar that accepts voice, a voice deal banner and picked-for-you products"
                  imgW={420}
                  imgH={848}
                  sizes="(min-width: 1280px) 420px, 80vw"
                />
              </div>

              <div className="order-3 xl:mt-[325px]">
                <div className={`${GLASS} !rounded-[24px] bg-white/40 p-[22px] md:p-[24px] xl:h-[179px]`}>
                  <Label className="text-[#cc4e00]">{"// VOICE DEAL"}</Label>
                  <p className="font-medium text-[#16171a] text-[18px] md:text-[20px] xl:text-[22px] leading-[1.4] mt-[14px]">
                    A daily deal you unlock by saying it, so people try voice once and learn it.
                  </p>
                  <span aria-hidden className="hidden xl:block absolute right-full top-1/2 w-[81px] h-[1.5px] bg-[#ff7a00]" />
                  <span aria-hidden className="hidden xl:block absolute right-[calc(100%+75px)] top-1/2 size-[12px] -translate-y-1/2 rounded-full bg-[#ff7a00]" />
                </div>
              </div>
            </div>

            {/* Results + product */}
            <div className="mt-[64px] md:mt-[96px] xl:mt-[140px] grid grid-cols-1 md:grid-cols-2 xl:flex xl:gap-[40px] gap-x-[32px] gap-y-[56px]">
              <div className="flex flex-col md:flex-row md:items-start xl:contents gap-[24px]">
                <div className="w-full max-w-[300px] mx-auto md:mx-0 xl:w-[300px] shrink-0">
                  <Phone
                    src="discover-results.png"
                    alt="Voice search results for a gift request under 50 dollars, with an AI summary line"
                    imgW={300}
                    imgH={606}
                    sizes="(min-width: 1280px) 300px, 70vw"
                  />
                </div>
                <div className="xl:w-[220px] shrink-0 xl:mt-[211px]">
                  <Label className="text-[#cc4e00]">{"// VOICE RESULTS"}</Label>
                  <p className="font-medium text-[#16171a] text-[20px] xl:text-[24px] leading-[1.45] mt-[16px] max-w-[320px]">
                    What you said stays at the top. Every result adds in one tap.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start xl:contents gap-[24px]">
                <div className="w-full max-w-[300px] mx-auto md:mx-0 xl:w-[300px] shrink-0">
                  <Phone
                    src="discover-product.png"
                    alt="Product detail for studio over-ear headphones with price, arrival date and returns"
                    imgW={300}
                    imgH={606}
                    sizes="(min-width: 1280px) 300px, 70vw"
                  />
                </div>
                <div className="xl:w-[220px] shrink-0 xl:mt-[211px]">
                  <Label className="text-[#cc4e00]">{"// PRODUCT"}</Label>
                  <p className="font-medium text-[#16171a] text-[20px] xl:text-[24px] leading-[1.45] mt-[16px] max-w-[320px]">
                    Price, arrival date and returns are clear before you commit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09 On the road */}
        <section className={`relative overflow-hidden bg-[#c9cacc] ${PAD} pt-[64px] md:pt-[96px] xl:pt-[120px] pb-[480px] md:pb-[640px] xl:pb-0 xl:aspect-[1400/1750]`}>
          <Image
            src={`${ASSETS}/photo-courier.jpg`}
            alt="A SwiftCart courier in an orange jacket sitting on a canal wall, checking a phone beside the delivery bag"
            fill
            quality={95}
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-cover object-[62%_bottom] xl:object-center"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[480px] xl:h-[640px] bg-gradient-to-b from-[rgba(227,227,229,0.95)] via-[rgba(227,227,229,0.7)] via-[55%] to-[rgba(227,227,229,0)]"
          />

          <div className="relative">
            <Label className="text-[#16171a]">{"// 09  FINAL DESIGN  ·  TRACK"}</Label>
            <Heading
              className="mt-[24px] md:mt-[31px]"
              line1="After paying, people want one answer:"
              line2="when will it arrive?"
              line2Class="text-[rgba(22,23,26,0.55)]"
            />

            <div className="mt-[32px] md:mt-[64px] xl:mt-[92px] xl:ml-auto xl:max-w-[540px]">
              <div className="relative rounded-[32px] border-[1.5px] border-white/80 backdrop-blur-[25px] bg-white/[0.42] shadow-[0_24px_30px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.35)] p-[22px] md:p-[29px]">
                <div className="flex items-center gap-[14px]">
                  <span className="size-[44px] md:size-[52px] shrink-0 rounded-full bg-[#ff7a00] text-white font-semibold text-[17px] md:text-[20px] flex items-center justify-center">
                    MR
                  </span>
                  <p className="font-semibold text-[#16171a] text-[18px] md:text-[22px] leading-[1.45] flex-1">
                    Mateo R. is on the way
                  </p>
                  <span className="size-[44px] shrink-0 rounded-full bg-white/70 flex items-center justify-center">
                    <Image src={`${ASSETS}/icon-phone.svg`} alt="Call courier" width={22} height={22} />
                  </span>
                </div>

                <p className="font-light text-[#16171a] text-[30px] md:text-[44px] leading-[1.1] tracking-[-0.66px] mt-[32px] md:mt-[40px]">
                  Arriving today, 2–4pm
                </p>

                <div className="mt-[32px] md:mt-[44px]">
                  <div className="relative h-[16px]">
                    <span className="absolute left-0 right-0 top-[6px] h-[4px] rounded-[2px] bg-[rgba(22,23,26,0.12)]" />
                    <span className="absolute left-0 top-[6px] h-[4px] rounded-[2px] bg-[#ff7a00] w-[66.7%]" />
                    <div className="absolute inset-0 flex justify-between">
                      {STEPS.map((s) => (
                        <Dot key={s.label} state={s.state} />
                      ))}
                    </div>
                  </div>
                  <div className="mt-[14px] grid grid-cols-4 gap-[4px] text-[12px] md:text-[16px] xl:text-[20px] leading-[1.25]">
                    {STEPS.map((s, i) => (
                      <p
                        key={s.label}
                        className={`${s.state === "current" ? "font-semibold text-[#16171a]" : "font-medium text-[#5e6168]"} ${
                          i === 0 ? "text-left" : i === STEPS.length - 1 ? "text-right" : "text-center"
                        }`}
                      >
                        {s.label}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-[rgba(22,23,26,0.12)] mt-[28px] md:mt-[40px]" />
                <div className="flex items-center justify-between mt-[24px] md:mt-[20px]">
                  <p className="font-medium text-[#5e6168] text-[16px] md:text-[20px] leading-[1.45]">Delivery code</p>
                  <p className="font-semibold text-[#16171a] text-[28px] md:text-[36px] tracking-[7.2px] leading-[1.45]">
                    4829
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 Track and recover */}
        <section className={`relative overflow-hidden bg-[#e4e4e6] ${PAD} ${SECTION_Y}`}>
          <Label>{"// 10  TRACK AND MANAGE"}</Label>

          <div className="mt-[40px] md:mt-[56px] xl:mt-[51px] grid grid-cols-2 md:grid-cols-4 gap-x-[20px] xl:gap-x-[53px] gap-y-[48px]">
            <div>
              <Phone250 src="track-orders.png" alt="Orders screen listing current orders with status and arrival time" />
              <div className="mt-[28px] xl:mt-[40px] px-[4px] xl:px-[6px]">
                <CaptionTitle>Orders</CaptionTitle>
                <CaptionBody>Status and arrival for every order, at a glance.</CaptionBody>
              </div>
            </div>
            <div>
              <Phone250 src="track-order-details.png" alt="Order details screen with items, delivery and payment" />
              <div className="mt-[28px] xl:mt-[40px] px-[4px] xl:px-[6px]">
                <CaptionTitle>Order details</CaptionTitle>
                <CaptionBody>Actions change with the order’s status.</CaptionBody>
              </div>
            </div>
            <div>
              <Phone250 src="track-live.png" alt="Live tracking screen with a map and arrival window" />
              <div className="mt-[28px] xl:mt-[40px] px-[4px] xl:px-[6px]">
                <CaptionTitle>Live tracking</CaptionTitle>
                <CaptionBody>Map, arrival window, and the rider one tap away.</CaptionBody>
              </div>
            </div>
            <div>
              <Phone250 src="track-account.png" alt="Account screen with orders, addresses and payment grouped" />
              <div className="mt-[28px] xl:mt-[40px] px-[4px] xl:px-[6px]">
                <CaptionTitle>Account</CaptionTitle>
                <CaptionBody>Orders, addresses and payment, grouped.</CaptionBody>
              </div>
            </div>
          </div>

          <div className="mt-[72px] md:mt-[112px] xl:mt-[160px]">
            <Label>{"// WHEN THINGS GO WRONG"}</Label>
            <Heading
              className="mt-[24px] md:mt-[31px] xl:mt-[60px]"
              line1="Real shopping is messy."
              line2="Every failure gets a clear way back."
            />
          </div>

          <div className="mt-[72px] md:mt-[96px] xl:mt-[120px] grid grid-cols-2 md:grid-cols-4 gap-x-[20px] xl:gap-x-[53px] gap-y-[64px]">
            <div>
              <div className="relative max-w-[250px]">
                <Pill>Recoverable</Pill>
                <Phone250 src="recover-didnt-catch.png" alt="Voice sheet saying it did not catch that, with a retry mic and a type-instead option" />
              </div>
              <div className="mt-[28px] xl:mt-[40px] px-[4px] xl:px-[6px]">
                <CaptionTitle>Didn’t catch that</CaptionTitle>
                <CaptionBody>Try again, or type instead. Nothing is lost.</CaptionBody>
              </div>
            </div>
            <div>
              <div className="relative max-w-[250px]">
                <Pill>Nothing charged</Pill>
                <Phone250 src="recover-payment-failed.png" alt="Checkout with a payment failed message offering Try again or Change payment" />
              </div>
              <div className="mt-[28px] xl:mt-[40px] px-[4px] xl:px-[6px]">
                <CaptionTitle>Payment failed</CaptionTitle>
                <CaptionBody>Says nothing was charged, then offers two ways forward.</CaptionBody>
              </div>
            </div>
            <div>
              <div className="relative max-w-[250px]">
                <Pill>No dead ends</Pill>
                <Phone250 src="recover-empty-cart.png" alt="Empty cart screen with Browse deals and Shop by voice actions" />
              </div>
              <div className="mt-[28px] xl:mt-[40px] px-[4px] xl:px-[6px]">
                <CaptionTitle>Empty cart</CaptionTitle>
                <CaptionBody>Browse deals or shop by voice to start again.</CaptionBody>
              </div>
            </div>
            <div>
              <div className="relative max-w-[250px]">
                <Pill>Fixable until shipped</Pill>
                <Phone250 src="recover-change-cancel.png" alt="Order screen with a bottom sheet to change delivery, edit items or cancel the order" />
              </div>
              <div className="mt-[28px] xl:mt-[40px] px-[4px] xl:px-[6px]">
                <CaptionTitle>Change or cancel</CaptionTitle>
                <CaptionBody>Mistakes stay fixable until the order ships.</CaptionBody>
              </div>
            </div>
          </div>
        </section>

        {/* 11 Outcome and looking back */}
        <section className={`relative overflow-hidden bg-[#0e0f11] ${PAD} ${SECTION_Y}`}>
          <Glow w={620} h={420} color="#ff7a00" opacity={0.1} blur={90} className="-left-[140px] top-[420px]" />
          <Glow w={600} h={380} color="#ff7a00" opacity={0.05} blur={90} className="hidden md:block left-[900px] top-[520px]" />

          <div className="relative">
            <Label className="text-white/60">{"// 11  OUTCOME AND LOOKING BACK"}</Label>
            <Heading
              className="mt-[24px] md:mt-[31px]"
              line1="What we delivered,"
              line2="and what I would change."
              line1Class="text-white"
              line2Class="text-white/45"
            />

            <Label className="text-white/60 mt-[48px] md:mt-[72px] xl:mt-[96px]">
              {"// RESULTS  ·  USABILITY TESTS WITH 8 SHOPPERS, WEEK 8"}
            </Label>
            <div className="mt-[16px] md:mt-[19px] grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[20px] xl:gap-[40px]">
              <ResultCard value="6 of 8" label="testers completed checkout" />
              <ResultCard value="~2x" label="faster to add the first item with voice" />
              <ResultCard value="4.2 / 5" label="average ease rating from testers" />
            </div>

            <div className="mt-[56px] md:mt-[80px] xl:mt-[120px] grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[48px]">
              <div>
                <Label className="text-white/60">{"// WHAT WE DELIVERED"}</Label>
                <ul className="mt-[24px] xl:mt-[34px] flex flex-col gap-[16px]">
                  {[
                    "Voice search, 4 screens",
                    "One-total checkout, 4 screens",
                    "Orders, live tracking and account",
                    "Clear ways back for voice, payment, empty cart and order changes",
                    "A shared design system for the team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-[16px]">
                      <Image
                        src={`${ASSETS}/icon-check-sm.svg`}
                        alt=""
                        width={24}
                        height={24}
                        className="shrink-0 mt-[3px]"
                      />
                      <span className="font-medium text-white text-[18px] md:text-[22px] xl:text-[24px] leading-[1.45]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-medium text-white/80 text-[17px] md:text-[20px] xl:text-[22px] leading-[1.4] mt-[28px]">
                  Status: Handed off to engineering after 8 weeks
                </p>
              </div>

              <div>
                <Label className="text-white/60">{"// WHAT WE WILL MEASURE NEXT"}</Label>
                <ul className="mt-[24px] xl:mt-[34px] flex flex-col gap-[16px]">
                  {[
                    "How often voice finds the right item on the first try",
                    "Checkout completion, before and after the one-total rule",
                    "Share of orders that start with voice",
                    "How many people open order tracking more than once",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-[20px]">
                      <span className="font-medium text-[#ff7a00] text-[24px] leading-[1.45] shrink-0" aria-hidden>
                        →
                      </span>
                      <span className="font-medium text-white/85 text-[18px] md:text-[22px] xl:text-[24px] leading-[1.45]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-[64px] md:mt-[96px] xl:mt-[120px]">
              <Label className="text-white/60">{"// LOOKING BACK"}</Label>
              <ol className="mt-[24px] xl:mt-[27px]">
                {[
                  "If I started SwiftCart again, I would add a quick confirm step after voice, because 2 of 8 testers gave up when items were misheard.",
                  "The biggest thing this project taught me was that trust is often one number staying the same from cart to receipt.",
                  "Next, I would measure how often voice adds the right item the first time, to find out if a confirm step pays for itself.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[44px_1fr] md:grid-cols-[160px_1fr] gap-x-[12px] border-t border-white/15 py-[24px] md:py-[28px] xl:pt-[26px] xl:pb-[32px]"
                  >
                    <span className="font-semibold text-[#ff7a00] text-[16px] md:text-[20px] leading-[1.45] pt-[4px] md:pt-[6px]">
                      {`0${i + 1}`}
                    </span>
                    <p className="font-light text-white text-[20px] md:text-[26px] xl:text-[32px] leading-[1.35] tracking-[-0.16px] max-w-[1000px]">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#f9f9fa] flex justify-center py-[48px]">
          <a
            href="https://www.behance.net/gallery/256675029/Swift-Cart-AI-Shopping-Assistant"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-[8px] bg-[#121212] text-white rounded-[8px] px-[20px] py-[12px] text-[14px] font-medium font-[family-name:var(--font-dm-sans)] whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            View full case study
            <span aria-hidden className="font-[family-name:var(--font-inter)]">
              →
            </span>
          </a>
        </div>
      </main>
    </div>
  );
}
