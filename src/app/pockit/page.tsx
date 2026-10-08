import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CaseStudyNav from "@/components/work/CaseStudyNav";
import BlockReveal from "@/components/work/BlockReveal";

// The Figma frame is set in Inter. layout.tsx only loads 400-900, so load 300 (Light) too.
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Pockit: Case Study | Tsolaye",
  description:
    "Pockit is an AI budgeting app for students, young workers and freelancers that helps people decide what they can spend before they spend it, through a calm coach they can simply talk to.",
};

const IMG = "/redesign/work/pockit";

/* ---------- shared bits ---------- */

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[72px] xl:px-[120px] ${className}`}>
      {children}
    </div>
  );
}

function Chip({
  children,
  className = "bg-[#f3f4f2] text-[#111716]",
  pre = false,
}: {
  children: React.ReactNode;
  className?: string;
  pre?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-[14px] py-[8px] md:px-[18px] md:py-[10px] text-[16px] md:text-[20px] leading-[1.3] tracking-[-0.1px] font-medium ${
        pre ? "whitespace-pre-wrap md:whitespace-pre max-w-full" : "whitespace-nowrap"
      } ${className}`}
    >
      {children}
    </span>
  );
}

function DotChip({
  children,
  dot,
  className,
  pre = false,
}: {
  children: React.ReactNode;
  dot: string;
  className: string;
  pre?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-[10px] rounded-full px-[14px] py-[8px] md:px-[18px] md:py-[10px] text-[16px] md:text-[20px] leading-[1.3] tracking-[-0.1px] font-medium ${
        pre ? "whitespace-pre-wrap md:whitespace-pre max-w-full" : "whitespace-nowrap"
      } ${className}`}
    >
      <span aria-hidden className={`size-[8px] shrink-0 rounded-full ${dot}`} />
      {children}
    </span>
  );
}

/**
 * Phone mockup exported from Figma at 2x with a uniform shadow bleed of 19.4% of the
 * phone width on every side. The wrapper is sized to the real phone; the image bleeds out.
 */
function Phone({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes: string;
}) {
  return (
    <div className={className}>
      <Image
        src={`${IMG}/${src}`}
        alt={alt}
        width={width}
        height={height}
        quality={95}
        sizes={sizes}
        className="block max-w-none w-[138.8%] h-auto -ml-[19.4%] -mt-[19.4%] -mb-[19.4%]"
      />
    </div>
  );
}

type Tone = "light" | "dark";

function SectionHeader({
  tone = "light",
  label,
  index,
  headline,
  paragraph,
  extra,
  reveal = false,
}: {
  tone?: Tone;
  label: React.ReactNode;
  index: string;
  headline: [string, string];
  paragraph: string;
  extra?: React.ReactNode;
  reveal?: boolean;
}) {
  const dark = tone === "dark";
  const headingClass = "font-normal text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.06] tracking-[-0.56px]";
  const headlineLines = (
    <>
      <span className={`block ${dark ? "text-white" : "text-[#111716]"}`}>{headline[0]}</span>
      <span className={`block ${dark ? "text-[#7e9c98]" : "text-[#98a2a0]"}`}>{headline[1]}</span>
    </>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[317px_1fr] gap-x-[24px] gap-y-[20px]">
      <div>
        <p className={`font-medium text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.1px] ${dark ? "text-[#5eead4]" : "text-[#0f766e]"}`}>
          {label}
        </p>
        <p className={`mt-[6px] text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] ${dark ? "text-[#5e7a76]" : "text-[#98a2a0]"}`}>
          {index}
        </p>
      </div>
      <div>
        {reveal ? (
          <BlockReveal as="h2" trigger="scroll" tone={dark ? "dark" : "light"} className={headingClass}>
            {headlineLines}
          </BlockReveal>
        ) : (
          <h2 className={headingClass}>{headlineLines}</h2>
        )}
        <p
          className={`mt-[24px] lg:mt-[28px] max-w-[620px] text-[20px] md:text-[24px] leading-[1.5] tracking-[-0.12px] ${
            dark ? "text-[#a9bdba]" : "text-[#5f6b69]"
          }`}
        >
          {paragraph}
        </p>
        {extra}
      </div>
    </div>
  );
}

function SubHeader({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[317px_1fr] gap-x-[24px] gap-y-[12px] items-start">
      <p className="font-medium text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#0f766e] md:pt-[8px]">
        {label}
      </p>
      <h3 className="font-normal text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.06] tracking-[-0.56px]">
        {children}
      </h3>
    </div>
  );
}

function FoodCard({ className = "", suffix = " used" }: { className?: string; suffix?: string }) {
  return (
    <div className={`bg-white rounded-[20px] p-[22px] shadow-[0_24px_25px_rgba(5,26,23,0.1)] ${className}`}>
      <p className="font-medium text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#5f6b69]">
        Food this month
      </p>
      <p className="mt-[2px] font-semibold text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.8px] text-[#0f766e]">
        ₦10,000
      </p>
      <div className="mt-[14px] h-[6px] rounded-[3px] bg-[#ddefec]">
        <div className="h-full w-[63%] rounded-[3px] bg-[#0f766e]" />
      </div>
      <p className="mt-[12px] text-[16px] md:text-[20px] leading-[1.4] tracking-[-0.1px] text-[#98a2a0] whitespace-nowrap">
        63% of ₦16,000{suffix}
      </p>
    </div>
  );
}

function TripleCols({ items, dark = false }: { items: { title: string; body: string }[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[24px] gap-y-[32px]">
      {items.map((it) => (
        <div key={it.title} className={`border-t pt-[24px] ${dark ? "border-white/15" : "border-[#e2e6e4]"}`}>
          <h3
            className={`font-normal text-[24px] md:text-[26px] leading-[1.15] tracking-[-0.26px] ${
              dark ? "text-white" : "text-[#111716]"
            }`}
          >
            {it.title}
          </h3>
          <p
            className={`mt-[10px] text-[18px] md:text-[22px] leading-[1.5] tracking-[-0.11px] ${
              dark ? "text-[#a9bdba]" : "text-[#5f6b69]"
            }`}
          >
            {it.body}
          </p>
        </div>
      ))}
    </div>
  );
}

function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        background: "radial-gradient(closest-side, rgba(15,118,110,0.38) 0%, rgba(15,118,110,0.14) 55%, rgba(7,25,23,0) 100%)",
      }}
    />
  );
}

/* ---------- page ---------- */

export default function PockitCaseStudy() {
  return (
    <>
      <CaseStudyNav />
      <main className={`bg-[#f3f4f2] min-h-screen overflow-x-clip ${inter.className}`}>

      {/* 01 Hero */}
      <section className="bg-[#f3f4f2]">
        <div className="relative w-full h-[620px] sm:h-[780px] lg:h-[1060px] overflow-hidden bg-[#071917]">
          <Image
            src={`${IMG}/hero-night.jpg`}
            alt="A man standing in a city at night, looking down at his phone"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[62%_center] lg:object-[45%_center]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[rgba(7,25,23,0.2)] via-[rgba(7,25,23,0.05)] to-[rgba(7,25,23,0.95)]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[rgba(7,25,23,0.8)] via-[rgba(7,25,23,0)_55%] to-[rgba(7,25,23,0)]" />

          <Container className="relative h-full flex flex-col justify-between py-[28px] lg:pt-[64px] lg:pb-[100px]">
            <div className="flex items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-[8px] text-white shrink-0">
                <Image
                  src={`${IMG}/pockit-logo-mark.svg`}
                  alt=""
                  width={39}
                  height={40}
                  className="h-[28px] lg:h-[40px] w-auto"
                />
                <span className="text-[18px] lg:text-[24px] leading-none tracking-[-0.24px]">POCkit</span>
              </div>
              <div className="flex flex-wrap justify-end gap-[6px] lg:gap-[10px]">
                {["Fintech", "iOS app", "2026"].map((c) => (
                  <Chip key={c} className="bg-white/[0.12] border border-white/25 text-white !px-[12px] !py-[6px] lg:!px-[18px] lg:!py-[10px] !text-[13px] lg:!text-[20px]">
                    {c}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[28px] lg:gap-[48px]">
              <div className="w-[260px] lg:w-[320px] rounded-[20px] border border-white/[0.28] bg-white/[0.14] backdrop-blur-[15px] shadow-[0_20px_20px_rgba(0,0,0,0.25)] px-[18px] py-[16px] lg:px-[21px] lg:py-[19px] text-white">
                <p className="font-medium text-[16px] lg:text-[20px] leading-[1.5] tracking-[-0.1px] opacity-80">Ask Pockit</p>
                <p className="mt-[8px] lg:mt-[12px] text-[15px] lg:text-[20px] leading-[1.4] tracking-[-0.1px] opacity-70">
                  “Can I afford new headphones for ₦8,000?”
                </p>
              </div>
              <BlockReveal
                as="h1"
                trigger="load"
                tone="dark"
                className="font-normal text-[48px] sm:text-[76px] lg:text-[104px] leading-none tracking-[-0.64px] text-white"
              >
                <span className="block">Spend with</span>
                <span className="block">
                  confidence, <span className="text-white/55">not guilt.</span>
                </span>
              </BlockReveal>
            </div>
          </Container>
        </div>

        <Container className="pt-[64px] lg:pt-[140px] pb-[72px] lg:pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[317px_1fr] gap-x-[24px] gap-y-[24px]">
            <div>
              <p className="font-medium text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#0f766e]">Introduction</p>
              <p className="mt-[6px] text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#98a2a0]">01 / 15</p>
            </div>
            <div className="max-w-[840px]">
              <p className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.3] tracking-[-0.32px] text-[#111716]">
                <span className="font-semibold">Pockit </span>
                is an AI budgeting app for students, young workers and freelancers. It helps people{" "}
                <span className="text-[#98a2a0]">decide what they can spend before they spend it, </span>
                through a calm coach they can simply talk to.
              </p>

              <div className="mt-[40px] lg:mt-[72px] grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
                {[
                  ["4 of 5", "set up a first budget without help"],
                  ["4 of 5", "found their safe spend for the day"],
                  ["5 of 5", "logged an expense by voice"],
                ].map(([v, l]) => (
                  <div key={l} className="bg-white rounded-[20px] px-[22px] py-[20px] min-h-[148px]">
                    <p className="font-medium text-[34px] lg:text-[40px] leading-[1.05] tracking-[-0.8px] text-[#0f766e]">{v}</p>
                    <p className="mt-[10px] text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.1px] text-[#5f6b69] max-w-[226px]">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-[14px] text-[16px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#98a2a0]">
                In 5 moderated usability sessions, 2026
              </p>

              <dl className="mt-[48px] lg:mt-[84px] border-t border-[#e2e6e4]">
                {[
                  ["Timeline", "4 weeks"],
                  ["Platform", "iOS mobile app"],
                  ["Role", "Product Designer"],
                  ["Scope", "Research, UX, UI, prototype, testing"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-6 border-b border-[#e2e6e4] py-[18px] lg:py-[19px]"
                  >
                    <dt className="font-medium text-[16px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#98a2a0]">{k}</dt>
                    <dd className="font-medium text-[17px] md:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#111716] text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 Problem */}
      <section className="bg-[#f3f4f2]">
        <Container className="py-[72px] lg:py-[148px]">
          <SectionHeader
            reveal
            label="The problem"
            index="02 / 15"
            headline={["People have the data.", "They lack the guidance."]}
            paragraph="Most budgeting tools only record what already happened. Very few help people decide what to do next, so budgeting ends up feeling like a report card."
          />

          <div className="mt-[56px] lg:mt-[96px] grid grid-cols-1 lg:grid-cols-[560fr_576fr] gap-[24px]">
            <div className="relative overflow-hidden rounded-[28px] bg-white aspect-[4/5] sm:aspect-[560/600] w-full">
              <Image
                src={`${IMG}/problem-portrait.jpg`}
                alt="Close-up of a man looking down at his phone, thinking about his spending"
                fill
                quality={95}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-[52%_50%] scale-[1.2]"
              />
              <FoodCard className="absolute right-[16px] bottom-[16px] lg:right-[24px] lg:bottom-[24px] w-[220px] md:w-[260px]" />
            </div>

            <div className="bg-white rounded-[28px] p-[24px] md:p-[40px] flex flex-col lg:min-h-[600px]">
              <p className="font-medium text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#0f766e]">
                What app reviews said
              </p>
              <p className="mt-[28px] lg:mt-[44px] text-[28px] md:text-[36px] leading-[1.28] tracking-[-0.256px] text-[#111716]">
                “Budgeting apps feel <span className="text-[#0f766e]">made for accountants</span>, not for people like me.”
              </p>
              <div className="mt-[32px] lg:mt-auto flex flex-wrap gap-[10px]">
                {["“too serious”", "“confusing”", "“overwhelming”", "“judgmental”"].map((c) => (
                  <Chip key={c} className="bg-[#f3f4f2] text-[#5f6b69]">
                    {c}
                  </Chip>
                ))}
              </div>
              <p className="mt-[20px] lg:mt-[26px] text-[16px] md:text-[20px] leading-[1.4] tracking-[-0.1px] text-[#98a2a0]">
                Paraphrased from app store reviews and finance community threads
              </p>
            </div>
          </div>

          <div className="mt-[72px] lg:mt-[148px]">
            <SubHeader label="What Pockit does instead">
              <span className="text-[#111716]">A coach, </span>
              <span className="text-[#98a2a0]">not a spreadsheet.</span>
            </SubHeader>
            <div className="mt-[36px] lg:mt-[56px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px]">
              {[
                ["From Insight 01", "Plain-language answers", "The coach explains spending in simple words and always ends with a next step."],
                ["From Insight 02", "Automatic tracking", "Linked accounts sort every expense into a category, so nobody logs by hand."],
                ["From Insight 03", "A calmer interface", "Encouraging words, no red alarms, fewer charts to read."],
                ["From Insight 04", "Fewer choices", "Pockit drafts the first budget, so people only adjust it."],
              ].map(([c, t, b]) => (
                <div key={c} className="bg-white rounded-[24px] p-[24px] lg:min-h-[318px]">
                  <Chip className="bg-[#ddefec] text-[#0f766e]">{c}</Chip>
                  <h3 className="mt-[28px] lg:mt-[50px] font-medium text-[24px] lg:text-[26px] leading-[1.2] tracking-[-0.26px] text-[#111716] max-w-[224px]">
                    {t}
                  </h3>
                  <p className="mt-[16px] text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#5f6b69]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 06 Principles and flow */}
      <section className="bg-[#f3f4f2]">
        <Container className="py-[72px] lg:py-[148px]">
          <SectionHeader
            label="Product direction"
            index="06 / 15"
            headline={["From insight", "to structure."]}
            paragraph="The research became four principles. Every screen had to pass all four before it moved to high fidelity."
          />

          <div className="mt-[48px] lg:mt-[96px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px]">
            {[
              ["01", "Reduce money anxiety", "Calm colours and encouraging words. No red alarms for overspending.", "From Insight 03"],
              ["02", "Cut manual effort", "Linked accounts and AI drafts, so people only confirm.", "From Insight 02"],
              ["03", "Explain in plain words", "Every number comes with what it means and what to do next.", "From Insights 01, 04"],
              ["04", "Reward consistency", "Small wins stay visible, so the habit feels worth keeping.", "From persona goals"],
            ].map(([n, t, b, c]) => (
              <div key={n} className="bg-white rounded-[24px] p-[28px] flex flex-col lg:min-h-[384px]">
                <p className="font-light text-[40px] lg:text-[48px] leading-none tracking-[-0.96px] text-[#0f766e]">{n}</p>
                <h3 className="mt-[28px] lg:mt-[40px] font-medium text-[22px] lg:text-[24px] leading-[1.25] tracking-[-0.24px] text-[#111716] max-w-[216px]">
                  {t}
                </h3>
                <p className="mt-[16px] text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#5f6b69]">{b}</p>
                <div className="mt-[28px] lg:mt-auto pt-[16px]">
                  <Chip className="bg-[#ddefec] text-[#0f766e]">{c}</Chip>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[72px] lg:mt-[148px]">
            <SubHeader label="User flow">
              <span className="text-[#111716]">Two flows, </span>
              <span className="text-[#98a2a0]">one calm path.</span>
            </SubHeader>

            <p className="mt-[40px] lg:mt-[71px] font-semibold text-[20px] md:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#111716]">
              Onboarding
            </p>
            <div className="mt-[16px] flex flex-col lg:flex-row lg:items-stretch gap-[8px] lg:gap-0">
              {[
                { t: "Start", chips: ["Splash", "Get started", "Create account"] },
                { t: "Income", chips: ["Add monthly income"] },
                { t: "Bank, optional", chips: ["Connect a bank", "Select bank", "Account details", "Analysing"] },
                { t: "Ready", chips: ["Bank insights", "Dashboard"], hl: true },
              ].map((s, i, arr) => (
                <div key={s.t} className="contents">
                  <div
                    className={`rounded-[24px] p-[24px] lg:flex-1 lg:min-w-0 ${s.hl ? "bg-[#0f766e]" : "bg-white"}`}
                  >
                    <p className={`font-semibold text-[20px] md:text-[22px] leading-[1.5] tracking-[-0.11px] ${s.hl ? "text-white" : "text-[#111716]"}`}>
                      {s.t}
                    </p>
                    <div className="mt-[18px] flex flex-wrap lg:flex-col lg:items-start gap-[10px]">
                      {s.chips.map((c) => (
                        <Chip key={c} className={s.hl ? "bg-white/[0.14] text-white" : "bg-[#f3f4f2] text-[#111716]"}>
                          {c}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden
                      className="self-center text-[28px] leading-[1.5] tracking-[-0.42px] text-[#98a2a0] lg:w-[40px] lg:text-center rotate-90 lg:rotate-0"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-[20px] text-[16px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#98a2a0]">
              Bank linking can be skipped. People can add income and budgets by hand instead.
            </p>

            <div className="mt-[56px] lg:mt-[84px] flex flex-col md:flex-row md:items-baseline gap-x-[24px] gap-y-[8px]">
              <p className="font-semibold text-[20px] md:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#111716] shrink-0">
                Everyday use
              </p>
              <p className="text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#5f6b69]">
                Home is the hub. Every everyday task starts there and returns there, so nobody gets lost.
              </p>
            </div>

            <div className="mt-[28px] flex flex-col md:flex-row md:items-center">
              <Phone
                src="phone-flow-home.png"
                alt="Pockit home screen with total monthly income, create budget and log expense actions"
                width={333}
                height={578}
                sizes="334px"
                className="w-[200px] md:w-[240px] shrink-0 self-start md:self-center"
              />
              <div aria-hidden className="hidden md:block h-px w-[44px] bg-[#98a2a0]/70 shrink-0 ml-[16px]" />
              <span className="mt-[20px] md:mt-0 self-start md:self-center inline-flex items-center rounded-full bg-[#0f766e] px-[18px] py-[10px] text-[16px] md:text-[20px] leading-[1.3] tracking-[-0.1px] font-medium text-white shrink-0">
                Home
              </span>
              <div aria-hidden className="hidden md:block h-px w-[50px] bg-[#98a2a0]/70 shrink-0" />
              <div className="relative mt-[16px] md:mt-0 flex flex-col gap-[16px] pl-[20px] md:pl-[127px] border-l md:border-l-0 border-[#98a2a0]/70">
                <div aria-hidden className="hidden md:block absolute left-0 top-[24px] bottom-[24px] w-px bg-[#98a2a0]/70" />
                {[
                  "Create a budget",
                  "Log an expense, by hand or voice",
                  "Ask the AI coach",
                  "See weekly insights",
                  "Track savings goals",
                ].map((c) => (
                  <div key={c} className="relative">
                    <div aria-hidden className="hidden md:block absolute right-full top-1/2 w-[127px] h-px bg-[#98a2a0]/70" style={{ marginRight: 0 }} />
                    <span className="inline-flex items-center rounded-full border border-[#e2e6e4] bg-white px-[14px] py-[8px] md:px-[18px] md:py-[10px] text-[16px] md:text-[20px] leading-[1.3] tracking-[-0.1px] font-medium text-[#111716]">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 10 Decision · Automation */}
      <section className="relative bg-[#071917] overflow-hidden">
        <Glow className="left-1/2 -translate-x-1/2 top-[30%] w-[min(1500px,160vw)] h-[900px]" />
        <Container className="relative py-[72px] lg:py-[148px]">
          <SectionHeader
            reveal
            tone="dark"
            label="Key decision 02"
            index="10 / 15"
            headline={["Less logging,", "more living."]}
            paragraph="People like Temi forgot to log, so their budgets went stale within days. Linked accounts sort spending automatically, and voice covers cash."
            extra={
              <div className="mt-[28px]">
                <Chip className="bg-white/10 text-[#5eead4]" pre>
                  {"From Insight 02  ·  74%"}
                </Chip>
              </div>
            }
          />

          <div className="mt-[56px] lg:mt-[96px] grid grid-cols-1 md:grid-cols-3 gap-x-[16px] lg:gap-x-[60px] gap-y-[48px] justify-items-center">
            {[
              { src: "phone-bank-explain.png", alt: "Why connect your bank? screen listing automatic income detection, real-time insights and safe-to-spend", c: "1  Explain first" },
              { src: "phone-bank-select.png", alt: "Select your bank screen with a list of popular Nigerian banks", c: "2  Pick a bank" },
              { src: "phone-bank-connect.png", alt: "Connect to First Bank screen with a Connect Securely button", c: "3  Connect securely" },
            ].map((p) => (
              <div key={p.src} className="flex flex-col items-center w-full">
                <Phone
                  src={p.src}
                  alt={p.alt}
                  width={389}
                  height={674}
                  sizes="(min-width: 1024px) 389px, 334px"
                  className="w-[240px] lg:w-[280px] max-w-[70%] md:max-w-full"
                />
                <div className="mt-[28px] lg:mt-[36px]">
                  <DotChip dot="bg-[#5eead4]" className="bg-white/10 text-white" pre>
                    {p.c}
                  </DotChip>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[40px] flex justify-center">
            <Chip className="bg-[#5eead4] text-[#071917] text-center !whitespace-pre-wrap max-w-full" pre>
              {"Skip and add income by hand  →  always available"}
            </Chip>
          </div>

          <div className="mt-[48px] lg:mt-[56px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.04] p-[24px] lg:p-[27px] lg:min-h-[278px]">
              <Chip className="bg-white/[0.08] text-white">Option A</Chip>
              <p className="mt-[28px] lg:mt-[44px] text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.45px] text-white opacity-60">
                Manual logging only
              </p>
              <p className="mt-[16px] text-[18px] lg:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#a9bdba]">
                Full control and no bank data, but people forget, and a budget with gaps stops being useful.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#5eead4]/60 bg-white/10 p-[24px] lg:p-[27px] lg:min-h-[278px]">
              <Chip className="bg-[#5eead4] text-[#071917]" pre>
                {"Option B  ·  Chosen"}
              </Chip>
              <p className="mt-[28px] lg:mt-[44px] text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.45px] text-white">
                Link a bank, log by voice when needed
              </p>
              <p className="mt-[16px] text-[18px] lg:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#a9bdba]">
                Spending sorts itself into categories. Voice and manual logging cover cash and anything missed.
              </p>
            </div>
          </div>

          <div className="mt-[56px] lg:mt-[72px] grid grid-cols-1 md:grid-cols-3 gap-x-[24px] gap-y-[32px]">
            {[
              ["Constraint", "Some people will not share bank data, so linking had to stay optional and explain itself before asking."],
              ["Trade-off", "Linking adds steps to onboarding. I kept it skippable and put every reason on one screen."],
              ["Outcome", "In testing, 4 of 5 people set up their first budget without help."],
            ].map(([h, b]) => (
              <div key={h} className="border-t border-white/15 pt-[24px]">
                <p className="font-medium text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#5eead4]">{h}</p>
                <p className="mt-[16px] text-[18px] md:text-[22px] leading-[1.45] tracking-[-0.11px] text-white/85">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 12 Final · A calm start */}
      <section className="bg-[#f3f4f2]">
        <Container className="py-[72px] lg:py-[148px]">
          <SectionHeader
            label={
              <>
                Final design
                <br />
                Onboarding
              </>
            }
            index="12 / 15"
            headline={["A calm start", "to your money."]}
            paragraph="Sign up in a minute, add income, and link a bank only if you want to. Pockit then drafts a first budget to confirm."
          />

          <div className="mt-[48px] lg:mt-[96px] grid grid-cols-1 lg:grid-cols-[400fr_736fr] gap-[24px]">
            <div className="relative overflow-hidden rounded-[28px] bg-white aspect-[4/5] lg:aspect-auto lg:min-h-[700px]">
              <Image
                src={`${IMG}/temi-portrait.jpg`}
                alt="Temi, a young woman in a beanie and headphones, smiling at her phone"
                fill
                quality={95}
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover object-[50%_20%] scale-[1.05]"
              />
              <div className="absolute left-[16px] bottom-[16px] lg:left-[24px] lg:bottom-[24px] rounded-[20px] border border-white/[0.28] bg-white/[0.14] backdrop-blur-[15px] shadow-[0_20px_20px_rgba(0,0,0,0.25)] px-[18px] py-[16px] lg:px-[21px] lg:py-[19px] text-white">
                <p className="font-medium text-[16px] lg:text-[20px] leading-[1.5] tracking-[-0.1px] opacity-80 whitespace-nowrap">
                  Temi’s monthly income
                </p>
                <p className="mt-[6px] lg:mt-[10px] font-semibold text-[34px] lg:text-[40px] leading-[1.1] tracking-[-0.8px]">
                  ₦60,000
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[28px] overflow-hidden px-[24px] py-[32px] lg:px-[32px] lg:py-[64px] grid grid-cols-1 sm:grid-cols-3 gap-x-[16px] gap-y-[40px] items-start content-center">
              {[
                { src: "phone-onboarding-start.webp", w: 278, h: 481, alt: "Welcome screen: Take Charge of your Finances, with Get Started and Log in buttons", c: "Get started" },
                { src: "phone-onboarding-welcome.png", w: 278, h: 481, alt: "Welcome to Pockit screen with Continue and Add Income Manually", c: "Choose a path" },
                { src: "phone-onboarding-income-field.png", w: 278, h: 481, alt: "Add your monthly income screen with an income field and Confirm button", c: "Add income" },
              ].map((p) => (
                <div key={p.src} className="flex flex-col items-center">
                  <Phone
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    sizes="278px"
                    className="w-[200px] max-w-[70%] sm:max-w-full"
                  />
                  <div className="mt-[28px]">
                    <DotChip dot="bg-[#0f766e]" className="bg-[#f3f4f2] text-[#111716]">
                      {p.c}
                    </DotChip>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-[24px] overflow-hidden rounded-[28px] bg-[#071917]">
            <Glow className="right-[-120px] top-1/2 -translate-y-1/2 w-[900px] h-[760px] max-w-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-[40px] gap-y-[40px] px-[24px] py-[40px] lg:px-[56px] lg:py-[72px] lg:min-h-[660px]">
              <div className="flex flex-col justify-between gap-[40px]">
                <div>
                  <h3 className="font-normal text-[34px] sm:text-[44px] leading-[1.08] tracking-[-1.1px] text-white">
                    <span className="block">Your first budget,</span>
                    <span className="block">drafted for you.</span>
                  </h3>
                  <p className="mt-[24px] max-w-[420px] text-[18px] lg:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#a9bdba]">
                    After linking, Pockit reads recent activity and suggests a monthly budget by category. Temi edits or confirms it in one step.
                  </p>
                </div>
                <div>
                  <DotChip dot="bg-[#5eead4]" className="bg-white/10 text-white" pre>
                    {"₦50,000 planned  ·  ₦10,000 saved"}
                  </DotChip>
                </div>
              </div>
              <div className="flex items-end justify-center gap-[24px] lg:gap-[24px] min-[1200px]:gap-[40px] lg:pr-0 min-[1200px]:pr-[20px] lg:pt-0">
                <Phone
                  src="phone-first-budget.png"
                  alt="Bank Account Insights screen with a suggested monthly budget by category"
                  width={347}
                  height={601}
                  sizes="348px"
                  className="w-[44%] max-w-[250px] lg:w-[190px] min-[1200px]:w-[250px]"
                />
                <Phone
                  src="phone-income-accounts.png"
                  alt="Income screen listing linked bank accounts and manual income totalling ₦60,000"
                  width={347}
                  height={601}
                  sizes="348px"
                  className="w-[44%] max-w-[250px] lg:w-[190px] min-[1200px]:w-[250px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 13 Final · Every naira in view */}
      <section className="bg-[#f3f4f2]">
        <Container className="pt-[24px] pb-[72px] lg:pb-[148px]">
          <SectionHeader
            label={
              <>
                Final design
                <br />
                Home and budgets
              </>
            }
            index="13 / 15"
            headline={["Every naira", "in view."]}
            paragraph="Home answers one question first: how much can Temi safely spend today? Budgets and reminders sit one tap away."
          />

          <div className="relative mt-[48px] lg:mt-[96px] overflow-hidden rounded-[32px] lg:rounded-[40px] bg-[#e6ecea] xl:aspect-[1160/986]">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[19.8%] top-[20%] w-[60%] h-[50%] rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.7), rgba(255,255,255,0))" }}
            />

            {/* narrow: stacked composition */}
            <div className="relative xl:hidden px-[20px] py-[28px] md:p-[40px]">
              <div className="flex flex-wrap gap-[16px] justify-between">
                <div className="bg-white rounded-[20px] px-[22px] py-[20px] shadow-[0_24px_25px_rgba(5,26,23,0.08)]">
                  <p className="font-medium text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#5f6b69]">Safe to spend today</p>
                  <p className="mt-[4px] font-semibold text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.8px] text-[#0f766e]">₦1,200</p>
                </div>
              </div>
              <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-3 gap-x-[8px] gap-y-[32px] items-end justify-items-center">
                <Phone src="phone-budgets.png" alt="My Budgets screen with category limits and progress bars" width={347} height={602} sizes="348px" className="w-[220px] sm:w-full max-w-[250px]" />
                <Phone src="phone-home.png" alt="Pockit home screen with total monthly income and active budgets" width={416} height={722} sizes="417px" className="w-[260px] sm:w-full max-w-[300px]" />
                <Phone src="phone-reminders.png" alt="Reminders screen with upcoming bills and an AI insight" width={347} height={602} sizes="348px" className="w-[220px] sm:w-full max-w-[250px]" />
              </div>
              <div className="mt-[28px] flex justify-end">
                <FoodCard suffix="" className="w-[236px] max-w-full" />
              </div>
            </div>

            {/* xl: absolute composition matching the frame */}
            <div className="hidden xl:block">
              <div className="absolute left-[3.45%] top-[6.08%] w-[236px] bg-white rounded-[20px] px-[22px] py-[20px] shadow-[0_24px_25px_rgba(5,26,23,0.08)]">
                <p className="font-medium text-[20px] leading-[1.5] tracking-[-0.1px] text-[#5f6b69] whitespace-nowrap">Safe to spend today</p>
                <p className="mt-[4px] font-semibold text-[40px] leading-[1.1] tracking-[-0.8px] text-[#0f766e]">₦1,200</p>
              </div>
              <Phone src="phone-budgets.png" alt="My Budgets screen with category limits and progress bars" width={347} height={602} sizes="348px" className="absolute left-[12.07%] top-[24.09%] w-[21.55%]" />
              <Phone src="phone-home.png" alt="Pockit home screen with total monthly income and active budgets" width={416} height={722} sizes="417px" className="absolute left-[37.07%] top-[13.9%] w-[25.86%]" />
              <Phone src="phone-reminders.png" alt="Reminders screen with upcoming bills and an AI insight" width={347} height={602} sizes="348px" className="absolute left-[66.38%] top-[24.09%] w-[21.55%]" />
              <FoodCard suffix="" className="absolute left-[76.2%] top-[78.1%] w-[236px]" />
            </div>
          </div>

          <div className="mt-[40px] lg:mt-[48px]">
            <TripleCols
              items={[
                { title: "Budgets", body: "Category limits with calm progress bars. Edit any limit in place." },
                { title: "Home", body: "Income, active budgets, safe to spend and one weekly insight." },
                { title: "Reminders", body: "Bills and subscriptions, with a nudge before each one is due." },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* 14 Final · Coach and insights */}
      <section className="relative bg-[#071917] overflow-hidden">
        <Glow className="left-1/2 -translate-x-1/2 top-[28%] w-[min(1500px,160vw)] h-[1000px]" />
        <Container className="relative py-[72px] lg:py-[148px]">
          <SectionHeader
            tone="dark"
            label={
              <>
                Final design
                <br />
                AI coach and insights
              </>
            }
            index="14 / 15"
            headline={["A coach", "in your pocket."]}
            paragraph="Log an expense by saying it. Ask what you can afford. Get weekly insights in plain words, each with a next step."
          />

          <div className="mt-[56px] lg:mt-[96px] grid grid-cols-1 md:grid-cols-3 gap-x-[16px] lg:gap-x-[56px] gap-y-[48px] justify-items-center">
            {[
              { src: "phone-coach-say-it.png", alt: "Pockit AI chat: the user says they spent ₦1,500 on food and the coach drafts an expense", c: "1  Say it" },
              { src: "phone-coach-confirm.png", alt: "Pockit AI chat after the expense draft is saved: Your expense has been logged", c: "2  Confirm the draft" },
              { src: "phone-insights.png", alt: "Insights screen with total spent, weekend splurge insight and a spending trend chart", c: "3  See the pattern" },
            ].map((p) => (
              <div key={p.src} className="flex flex-col items-center w-full">
                <Phone
                  src={p.src}
                  alt={p.alt}
                  width={375}
                  height={650}
                  sizes="(min-width: 1024px) 375px, 334px"
                  className="w-[240px] lg:w-[270px] max-w-[70%] md:max-w-full"
                />
                <div className="mt-[28px] lg:mt-[36px]">
                  <DotChip dot="bg-[#5eead4]" className="bg-white/10 text-white" pre>
                    {p.c}
                  </DotChip>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[56px] lg:mt-[96px]">
            <TripleCols
              dark
              items={[
                { title: "Voice logging", body: "Speak naturally. The coach drafts the expense with amount, budget and category." },
                { title: "One-tap confirm", body: "Nothing is saved until Temi confirms, so a misheard number never sneaks in." },
                { title: "Plain-language insights", body: "Patterns come with a reason and a suggestion, never a red warning." },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* 15 Outcome and thanks */}
      <section className="bg-[#f3f4f2]">
        <Container className="py-[72px] lg:py-[148px]">
          <SectionHeader
            reveal
            label="Testing and outcome"
            index="15 / 15"
            headline={["Designed to make", "money feel human."]}
            paragraph="I tested the prototype in 5 moderated sessions with students and young earners. These were the core tasks."
          />

          <div className="mt-[48px] lg:mt-[96px] grid grid-cols-1 md:grid-cols-3 gap-[16px] lg:gap-[24px]">
            {[
              ["4 of 5", 4, "Set up a first budget"],
              ["4 of 5", 4, "Find today’s safe spend"],
              ["5 of 5", 5, "Log an expense by voice"],
            ].map(([v, n, t], i) => (
              <div key={i} className="bg-white rounded-[28px] p-[28px] lg:p-[32px] lg:min-h-[278px]">
                <p className="font-light text-[56px] lg:text-[80px] leading-none tracking-[-3.2px] text-[#111716]">{v}</p>
                <div className="mt-[28px] lg:mt-[44px] flex gap-[10px]" role="img" aria-label={`${n} of 5 completed`}>
                  {[0, 1, 2, 3, 4].map((d) => (
                    <span
                      key={d}
                      className={`size-[20px] rounded-full ${d < (n as number) ? "bg-[#0f766e]" : "bg-[#ddefec]"}`}
                    />
                  ))}
                </div>
                <p className="mt-[24px] font-medium text-[22px] lg:text-[24px] leading-[1.25] tracking-[-0.24px] text-[#111716]">{t as string}</p>
                <p className="mt-[8px] text-[18px] lg:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#98a2a0]">completed without help</p>
              </div>
            ))}
          </div>

          <div className="mt-[24px] bg-white rounded-[28px] p-[24px] lg:p-[32px]">
            <p className="font-medium text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#0f766e]">
              Two paths to a first budget
            </p>
            <div className="mt-[24px]">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold text-[20px] md:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#111716]">By hand</p>
                <p className="font-medium text-[20px] md:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#0f766e]">4 steps</p>
              </div>
              <div className="mt-[12px] flex flex-wrap gap-[10px]">
                {["Get started", "Create account", "Choose a path", "Add income"].map((c) => (
                  <Chip key={c} className="bg-[#ddefec] text-[#0f766e]">
                    {c}
                  </Chip>
                ))}
              </div>
            </div>
            <div className="mt-[28px] lg:mt-[32px]">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold text-[20px] md:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#111716]">With a bank</p>
                <p className="font-medium text-[20px] md:text-[22px] leading-[1.5] tracking-[-0.11px] text-[#98a2a0]">9 steps</p>
              </div>
              <div className="mt-[12px] flex flex-wrap gap-[10px]">
                {[
                  "Get started",
                  "Create account",
                  "Choose a path",
                  "Why connect",
                  "Select bank",
                  "Account details",
                  "Connect securely",
                  "Analysing",
                  "Confirm budget",
                ].map((c) => (
                  <Chip key={c} className="bg-[#f3f4f2] text-[#5f6b69]">
                    {c}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[72px] lg:mt-[148px] grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[317px_1fr] gap-x-[24px] gap-y-[24px]">
            <p className="font-medium text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#0f766e] md:pt-[8px]">
              What I learned
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[16px] gap-y-[32px]">
              {[
                ["Guidance beats data", "People did not need more charts. They needed one clear answer at the moment of spending."],
                ["Tone is a feature", "Swapping red warnings for calm words changed how the whole product felt."],
                ["Next, I would test", "Whether a weekly money check-in keeps people coming back after the first month."],
              ].map(([t, b]) => (
                <div key={t} className="border-t border-[#e2e6e4] pt-[20px]">
                  <h3 className="font-medium text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.24px] text-[#111716]">{t}</h3>
                  <p className="mt-[14px] text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.1px] text-[#5f6b69]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9fa] flex justify-center py-[48px]">
        <a
          href="https://www.behance.net/gallery/256674261/Pockit-AI-Budgetting-Assistant"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[8px] rounded-[8px] bg-[#121212] px-[20px] py-[12px] text-[14px] font-medium leading-[normal] text-white whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          <span className="font-[family-name:var(--font-dm-sans)]">View full case study</span>
          <span aria-hidden>→</span>
        </a>
      </section>
      </main>
    </>
  );
}
