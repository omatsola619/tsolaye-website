import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Nunito_Sans, Newsreader } from "next/font/google";
import CaseStudyNav from "@/components/work/CaseStudyNav";
import BlockReveal from "@/components/work/BlockReveal";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Pill Pal: Case Study | Tsolaye",
  description:
    "Pill Pal is an accessibility-first medication companion that helps people take the right medicine at the right time.",
};

const P = "/redesign/work/pill-pal";

/* ------------------------------------------------------------------ */
/* Layout helpers                                                      */
/* The Figma frame is 1400 wide. From 1400px up, groups are positioned */
/* with the frame coordinates; below that they stack in normal flow.   */
/* ------------------------------------------------------------------ */

type Vars = CSSProperties & Record<`--${string}`, string>;

function Frame({
  h,
  className = "",
  children,
}: {
  h: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`relative w-full max-w-[1400px] mx-auto px-5 md:px-10 min-[1400px]:px-0 py-[56px] md:py-[72px] min-[1400px]:py-0 flex flex-col gap-[32px] md:gap-[40px] min-[1400px]:block min-[1400px]:h-[var(--h)] ${className}`}
      style={{ "--h": `${h}px` } as Vars}
    >
      {children}
    </section>
  );
}

function Abs({
  x,
  y,
  w,
  h,
  className = "",
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const style: Vars = { "--x": `${x}px`, "--y": `${y}px` };
  if (w !== undefined) style["--w"] = `${w}px`;
  if (h !== undefined) style["--h"] = `${h}px`;
  return (
    <div
      className={`min-[1400px]:absolute min-[1400px]:left-[var(--x)] min-[1400px]:top-[var(--y)] ${
        w !== undefined ? "min-[1400px]:w-[var(--w)]" : ""
      } ${h !== undefined ? "min-[1400px]:h-[var(--h)]" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

const DOT = { blue: "#0057ff", teal: "#1fe8c9", orange: "#f5a524", grey: "#c9cdd6", navy: "#00308c" } as const;

function Tag({
  children,
  dot,
  variant = "default",
}: {
  children: React.ReactNode;
  dot?: keyof typeof DOT;
  variant?: "default" | "muted" | "dark";
}) {
  const base =
    "inline-flex items-center gap-[10px] rounded-full border px-5 py-[9px] text-[16px] md:text-[20px] leading-[1.3] whitespace-normal text-center min-[1400px]:whitespace-pre";
  const look =
    variant === "dark"
      ? "bg-[#00308c] border-[#00308c] text-white"
      : variant === "muted"
        ? "bg-[#f3f4f7] border-[#eceef2] text-[#1e2433]"
        : "bg-white border-[#eceef2] text-[#1e2433]";
  return (
    <span className={`${base} ${look}`}>
      {dot && <span className="size-[8px] rounded-full shrink-0" style={{ background: DOT[dot] }} />}
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-[#9aa0ae] text-[16px] md:text-[20px] leading-[1.5] tracking-[1.6px] uppercase">
      {children}
    </p>
  );
}

function Body({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-[19px] md:text-[24px] leading-[1.5] ${dark ? "text-[#1e2433]" : "text-[#6b7287]"} ${className}`}
    >
      {children}
    </p>
  );
}

function Serif({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`font-[family-name:var(--font-newsreader)] font-semibold italic text-[#00308c] ${className}`}
    >
      {children}
    </span>
  );
}

function SectionHead({
  tag,
  line1,
  line2,
  para,
  paraY,
  paraW = 440,
  paraX = 880,
  reveal = false,
}: {
  tag: string;
  line1: React.ReactNode;
  line2: React.ReactNode;
  para: string;
  paraY: number;
  paraW?: number;
  paraX?: number;
  reveal?: boolean;
}) {
  const headingClass =
    "font-light text-[#5a6380] text-[40px] md:text-[52px] min-[1400px]:text-[60px] leading-[1.12] tracking-[-1.2px] min-[1400px]:whitespace-nowrap";
  const lines = (
    <>
      <span className="block">{line1}</span>
      <span className="block">{line2}</span>
    </>
  );
  return (
    <>
      <Abs x={80} y={140}>
        <Tag>{tag}</Tag>
      </Abs>
      <Abs x={77} y={238}>
        {reveal ? (
          <BlockReveal as="h2" trigger="scroll" className={headingClass}>
            {lines}
          </BlockReveal>
        ) : (
          <h2 className={headingClass}>{lines}</h2>
        )}
      </Abs>
      <Abs x={paraX} y={paraY} w={paraW}>
        <Body>{para}</Body>
      </Abs>
    </>
  );
}

function Italic({ children }: { children: React.ReactNode }) {
  return <Serif className="text-[1.0833em] tracking-[-0.02em]">{children}</Serif>;
}

function Glow({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <Abs x={x} y={y} w={w} h={h} className="hidden min-[1400px]:block pointer-events-none">
      <div
        className="size-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(70,110,255,0.16) 0%, rgba(70,110,255,0.07) 50%, rgba(70,110,255,0) 100%)",
          transform: "scale(1.4)",
        }}
      />
    </Abs>
  );
}

/* A phone export. Exports include the drop shadow, so the image is larger than the device. */
function Phone({
  src,
  alt,
  x,
  y,
  nw,
  nh,
  iw,
  ih,
  priority,
}: {
  src: string;
  alt: string;
  x: number;
  y: number;
  nw: number;
  nh: number;
  iw: number;
  ih: number;
  priority?: boolean;
}) {
  const bx = (iw - nw) / 2;
  const by = (ih - nh) / 2;
  return (
    <Abs x={x - bx} y={y - by} w={iw} h={ih}>
      <Image
        src={src}
        alt={alt}
        width={iw}
        height={ih}
        quality={95}
        priority={priority}
        sizes={`${iw}px`}
        className="w-full max-w-[340px] min-[1400px]:max-w-none h-auto mx-auto"
      />
    </Abs>
  );
}

/* Phone with a caption centred underneath (sections 10 and 11) */
function Fig({
  src,
  alt,
  x,
  y,
  nw,
  nh,
  iw,
  ih,
  caption,
  dot,
}: {
  src: string;
  alt: string;
  x: number;
  y: number;
  nw: number;
  nh: number;
  iw: number;
  ih: number;
  caption: string;
  dot: keyof typeof DOT;
}) {
  const bx = (iw - nw) / 2;
  const by = (ih - nh) / 2;
  return (
    <Abs x={x} y={y} w={nw} h={nh} className="flex flex-col items-center gap-[16px] min-[1400px]:block">
      <div
        className="w-full max-w-[340px] min-[1400px]:max-w-none min-[1400px]:w-[var(--iw)] min-[1400px]:ml-[calc(var(--bx)*-1)] min-[1400px]:mt-[calc(var(--by)*-1)]"
        style={{ "--iw": `${iw}px`, "--bx": `${bx}px`, "--by": `${by}px` } as Vars}
      >
        <Image
          src={src}
          alt={alt}
          width={iw}
          height={ih}
          quality={95}
          sizes={`${iw}px`}
          className="w-full h-auto"
        />
      </div>
      <div
        className="min-[1400px]:absolute min-[1400px]:left-1/2 min-[1400px]:-translate-x-1/2 max-w-full min-[1400px]:top-[calc(var(--nh)+28px)] min-[1400px]:whitespace-nowrap"
        style={{ "--nh": `${nh}px` } as Vars}
      >
        <Tag dot={dot}>{caption}</Tag>
      </div>
    </Abs>
  );
}

function Option({
  chosen,
  label,
  title,
  desc,
  height,
}: {
  chosen?: boolean;
  label: string;
  title: string;
  desc: string;
  height: number;
}) {
  return (
    <div
      className={`rounded-[20px] border border-[#eceef2] p-[23px] flex flex-col gap-[20px] min-[1400px]:w-[272px] min-[1400px]:h-[var(--oh)] ${
        chosen ? "bg-white shadow-[0_12px_16px_rgba(10,26,51,0.04)]" : "bg-[#f3f4f7]"
      }`}
      style={{ "--oh": `${height}px` } as Vars}
    >
      <div>
        {chosen ? (
          <Tag dot="teal" variant="dark">
            {label}
          </Tag>
        ) : (
          <Tag dot="grey" variant="muted">
            {label}
          </Tag>
        )}
      </div>
      <p
        className={`text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.26px] ${chosen ? "text-[#1e2433]" : "text-[#6b7287]"}`}
      >
        {title}
      </p>
      <p className={`text-[18px] md:text-[20px] leading-[1.5] ${chosen ? "text-[#6b7287]" : "text-[#9aa0ae]"}`}>
        {desc}
      </p>
    </div>
  );
}

function FloatCard({ label, value, dot }: { label: string; value: string; dot: keyof typeof DOT }) {
  return (
    <div className="relative bg-white border border-[#eceef2] rounded-[20px] shadow-[0_12px_16px_rgba(10,26,51,0.04)] px-[21px] py-[19px] w-full sm:w-[280px] min-[1400px]:h-[101px]">
      <p className="text-[#6b7287] text-[17px] md:text-[20px] leading-[1.3]">{label}</p>
      <p className="mt-[6px] font-semibold text-[#1e2433] text-[20px] md:text-[24px] leading-[1.2]">{value}</p>
      <span className="absolute right-[23px] top-[25px] size-[10px] rounded-full" style={{ background: DOT[dot] }} />
    </div>
  );
}

function ResultCard({
  n,
  title,
  value,
  pct,
}: {
  n: string;
  title: string;
  value: string;
  pct: number;
}) {
  return (
    <div className="bg-white border border-[#eceef2] rounded-[20px] shadow-[0_12px_16px_rgba(10,26,51,0.04)] p-[23px] flex flex-col gap-[20px] min-[1400px]:h-[327px]">
      <div>
        <Tag dot="blue">{`Result ${n}`}</Tag>
      </div>
      <p className="text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.26px] text-[#1e2433]">{title}</p>
      <p className="font-light text-[#00308c] text-[56px] md:text-[72px] leading-none tracking-[-1.44px]">{value}</p>
      <div className="h-[8px] rounded-[4px] bg-[#eef1f5]">
        <div
          className="h-full rounded-[4px] bg-gradient-to-r from-[#0057ff] to-[#1fe8c9]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-[#6b7287] text-[18px] md:text-[20px] leading-[1.5] -mt-[8px]">completed without help</p>
    </div>
  );
}

function Takeaway({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border-t border-[#eceef2] pt-[24px] flex flex-col">
      <p className="font-semibold text-[#0057ff] text-[18px] md:text-[20px] leading-[1.5]">{n}</p>
      <p className="mt-[20px] font-light text-[#1e2433] text-[26px] md:text-[30px] leading-[1.15] tracking-[-0.3px]">
        {title}
      </p>
      <p className="mt-[12px] text-[#6b7287] text-[18px] md:text-[22px] leading-[1.5]">{body}</p>
    </div>
  );
}

function ProblemCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="bg-white border border-[#eceef2] rounded-[20px] shadow-[0_12px_16px_rgba(10,26,51,0.04)] p-[27px] flex flex-col min-[1400px]:w-[360px] min-[1400px]:h-[263px]">
      <div>
        <Tag dot="orange">{`Problem ${n}`}</Tag>
      </div>
      <p className="mt-[24px] text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.26px] text-[#1e2433]">{title}</p>
      <p className="mt-[16px] text-[18px] md:text-[20px] leading-[1.5] text-[#6b7287]">{body}</p>
    </div>
  );
}

function SolutionItem({ title, body, first }: { title: string; body: string; first?: boolean }) {
  return (
    <div className={`${first ? "" : "border-t border-[#eceef2]"} pt-[22px] pb-[22px]`}>
      <div className="flex items-center gap-[14px]">
        <span className="size-[12px] rounded-full bg-[#1fe8c9] shrink-0" />
        <p className="font-semibold text-[#1e2433] text-[19px] md:text-[22px] leading-[1.25]">{title}</p>
      </div>
      <p className="mt-[8px] pl-[26px] text-[18px] md:text-[20px] leading-[1.5] text-[#6b7287]">{body}</p>
    </div>
  );
}

/* Dashed connector line used in the problem-to-solution diagram */
function Dashed({ x, y, len, dir }: { x: number; y: number; len: number; dir: "v" | "h" }) {
  return (
    <div
      className="hidden min-[1400px]:block absolute"
      style={{
        left: x,
        top: y,
        width: dir === "h" ? len : 1.5,
        height: dir === "v" ? len : 1.5,
        backgroundImage:
          dir === "v"
            ? "repeating-linear-gradient(to bottom, #c3c8d4 0 3px, transparent 3px 6px)"
            : "repeating-linear-gradient(to right, #c3c8d4 0 3px, transparent 3px 6px)",
      }}
    />
  );
}

function Node({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="hidden min-[1400px]:block absolute size-[8px] rounded-[2px] bg-[#9aa0ae]"
      style={{ left: x, top: y }}
    />
  );
}

export default function PillPalCaseStudy() {
  return (
    <div
      className={`${nunito.variable} ${newsreader.variable} bg-[#fafafa] min-h-screen overflow-x-clip font-[family-name:var(--font-nunito)]`}
    >
      <CaseStudyNav />

      <main>
        {/* 01 Hero */}
        <Frame h={1590}>
          <Abs x={200} y={140} w={1000} className="text-center">
            <BlockReveal
              as="h1"
              trigger="load"
              className="font-light text-[#5a6380] text-[40px] md:text-[56px] min-[1400px]:text-[68px] leading-[1.1] tracking-[-1.36px]"
            >
              <span className="block">Pill Pal Simplifies</span>
              <span className="block">
                <Serif className="text-[1.0735em] tracking-[-0.02em]">Every Daily Dose.</Serif>
              </span>
            </BlockReveal>
          </Abs>
          <Abs x={390} y={331} w={620} className="text-center">
            <Body className="text-[18px] md:text-[24px]">
              An accessibility-first companion that helps people take the right medicine at the right time.
            </Body>
          </Abs>

          {/* Arcs and glow (desktop only) */}
          <div
            className="hidden min-[1400px]:block absolute rounded-full border border-[#e3e6ec]"
            style={{ left: 370, top: 546.49, width: 660, height: 660 }}
          />
          <div
            className="hidden min-[1400px]:block absolute rounded-full border border-[#edeff3]"
            style={{ left: 250, top: 426.49, width: 900, height: 900 }}
          />
          <Glow x={440} y={693} w={520} h={420} />

          <Phone
            src={`${P}/hero-phone.avif`}
            alt="Pill Pal home screen showing the next dose, daily progress and today's medications"
            x={520}
            y={513}
            nw={360}
            nh={727}
            iw={519}
            ih={886}
            priority
          />

          <Abs x={240} y={663}>
            <FloatCard label="Next dose in 45 mins" value="Amoxicillin · 8:00 PM" dot="teal" />
          </Abs>
          <Abs x={880} y={980}>
            <FloatCard label="Daily progress" value="3 of 5 doses taken" dot="blue" />
          </Abs>

          <Abs x={1080} y={573} w={240} className="min-[1400px]:text-right">
            <Label>Researched</Label>
            <p className="mt-[4px] text-[#1e2433] text-[18px] md:text-[22px] leading-[1.35]">
              A holistic approach to medication care
            </p>
          </Abs>
          <Abs x={80} y={1130} w={240}>
            <Label>Explored</Label>
            <p className="mt-[4px] text-[#1e2433] text-[18px] md:text-[22px] leading-[1.35]">
              How Pill Pal makes every dose easier
            </p>
          </Abs>

          <Abs x={80} y={1360} w={1240}>
            <div className="h-px bg-[#eceef2] w-full" />
          </Abs>
          <Abs x={80} y={1400}>
            <p className="text-[#6b7287] text-[18px] md:text-[20px] leading-[1.35]">
              Unpacking the
              <br />
              entire Pill Pal project
            </p>
          </Abs>
          <Abs x={369} y={1404} className="flex flex-wrap gap-[12px]">
            <Tag dot="blue">
              <span className="text-[#9aa0ae]">Project</span>
              {"   Pill Pal"}
            </Tag>
            <Tag dot="blue">
              <span className="text-[#9aa0ae]">Category</span>
              {"   Healthcare"}
            </Tag>
            <Tag dot="blue">
              <span className="text-[#9aa0ae]">Role</span>
              {"   Product Designer"}
            </Tag>
            <Tag dot="blue">
              <span className="text-[#9aa0ae]">Platform</span>
              {"   iOS"}
            </Tag>
          </Abs>
        </Frame>

        {/* 03 Problem to solution */}
        <Frame h={1525}>
          <SectionHead
            reveal
            tag="Problem and Solution"
            line1="Turning Missed Doses"
            line2={
              <>
                Into <Italic>Daily Confidence.</Italic>
              </>
            }
            para="These gaps lead to medication errors, health complications and stress for patients and the people who care for them."
            paraY={231}
          />

          {/* Ruler (desktop) */}
          <div
            className="hidden min-[1400px]:block absolute h-px bg-[#e6e9ef]"
            style={{ left: 80, top: 541, width: 1240 }}
          />
          <div
            className="hidden min-[1400px]:block absolute"
            style={{
              left: 80,
              top: 549,
              width: 1240,
              height: 14,
              backgroundImage:
                "repeating-linear-gradient(to right, #d9dde5 0 1px, transparent 1px 16px), repeating-linear-gradient(to right, #d9dde5 0 1px, transparent 1px 128px)",
              backgroundSize: "100% 8px, 100% 14px",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="hidden min-[1400px]:block absolute"
            style={{
              left: 80,
              top: 549,
              width: 113,
              height: 14,
              backgroundImage:
                "repeating-linear-gradient(to right, #9aa0ae 0 1px, transparent 1px 16px), repeating-linear-gradient(to right, #9aa0ae 0 1px, transparent 1px 128px)",
              backgroundSize: "100% 8px, 100% 14px",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="hidden min-[1400px]:block absolute rounded-full border border-[#eceef2]"
            style={{ left: 370, top: 771, width: 660, height: 660 }}
          />
          <Dashed x={260} y={563} len={128} dir="v" />
          <Node x={256} y={559} />
          <Dashed x={1140} y={563} len={128} dir="v" />
          <Node x={1136} y={559} />
          <Dashed x={700} y={665} len={96} dir="v" />
          <Node x={696} y={757} />
          <Dashed x={440} y={822} len={50} dir="h" />
          <Node x={486} y={818} />
          <Dashed x={440} y={1117} len={50} dir="h" />
          <Node x={486} y={1113} />
          <Dashed x={910} y={822} len={50} dir="h" />
          <Node x={906} y={818} />
          <Dashed x={910} y={1117} len={50} dir="h" />
          <Node x={906} y={1113} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] min-[1400px]:contents">
            <Abs x={80} y={691}>
              <ProblemCard
                n="01"
                title="Doses slip from memory"
                body="Cognitive decline and busy schedules make it easy to forget a dose, or forget one was taken."
              />
            </Abs>
            <Abs x={80} y={986}>
              <ProblemCard
                n="02"
                title="Apps that are hard to use"
                body="Small text, cluttered screens and alerts that vanish shut out the people who need help most."
              />
            </Abs>
            <Abs x={960} y={691}>
              <ProblemCard
                n="03"
                title="Caregivers left out"
                body="Family and providers cannot see whether a dose was taken, so they find out too late."
              />
            </Abs>
            <Abs x={960} y={986}>
              <ProblemCard
                n="04"
                title="Errors with real costs"
                body="Missed or doubled doses lead to complications and daily worry for patients and families."
              />
            </Abs>
          </div>

          <Abs x={632} y={601} className="flex justify-center min-[1400px]:block">
            <div className="flex -space-x-[16px]">
              {[
                ["avatar-grace.avif", "Grace, a patient"],
                ["avatar-daniel.avif", "Daniel, a busy professional"],
                ["avatar-florence.avif", "Florence, an older adult"],
              ].map(([f, a]) => (
                <Image
                  key={f}
                  src={`${P}/${f}`}
                  alt={a}
                  width={56}
                  height={56}
                  className="size-[56px] rounded-full"
                />
              ))}
            </div>
          </Abs>

          <Abs x={490} y={761} w={420}>
            <div className="bg-white border border-[#eceef2] rounded-[24px] shadow-[0_12px_16px_rgba(10,26,51,0.04)] p-[31px] min-[1400px]:h-[624px]">
              <Tag dot="blue">Solution</Tag>
              <p className="mt-[24px] text-[26px] md:text-[30px] leading-[1.18] tracking-[-0.3px] text-[#1e2433]">
                One adaptive, inclusive app
              </p>
              <div className="mt-[28px] border-t border-[#eceef2] pt-0">
                <SolutionItem
                  first
                  title="Personal reminders"
                  body="Shaped by each person’s routine and health condition."
                />
                <SolutionItem
                  title="Accessible by default"
                  body="Large fonts, pill photos, audio prompts and haptic feedback."
                />
                <SolutionItem
                  title="Shared care"
                  body="Caregivers and providers can follow adherence securely, in real time."
                />
              </div>
            </div>
          </Abs>
        </Frame>

        {/* 07 User flow */}
        <Frame h={1662}>
          <SectionHead
            tag="User Flow"
            line1="One Flow for"
            line2={<Italic>Every Dose.</Italic>}
            para="Three paths start from Home: adding a medicine, asking the assistant, and answering a reminder. Every path ends in a clear record."
            paraY={236}
          />
          <Abs x={20} y={520} w={1360} h={1050}>
            <div className="overflow-x-auto -mx-5 px-5 md:-mx-10 md:px-10 min-[1400px]:mx-0 min-[1400px]:px-0 min-[1400px]:overflow-visible">
              <Image
                src={`${P}/user-flow-diagram.avif`}
                alt="User flow from Home: add a medicine, ask the Smart Assistant, or answer a reminder with Taken, Snooze or Missed outcomes"
                width={1360}
                height={1050}
                quality={95}
                sizes="(min-width: 1400px) 1360px, 900px"
                className="w-[900px] max-w-none min-[1400px]:w-full min-[1400px]:h-auto h-auto"
              />
            </div>
          </Abs>
        </Frame>

        {/* 08 Decision · Reminders */}
        <Frame h={2377}>
          <SectionHead
            reveal
            tag="Key Decision 01"
            line1="Reminders That"
            line2={<Italic>Wait for You.</Italic>}
            para="84% of the people we surveyed missed doses because reminders vanished too fast, were too quiet, or were easy to dismiss."
            paraY={236}
          />

          <Abs x={80} y={546} className="flex flex-wrap gap-[10px]">
            <Tag dot="blue">{"Insight 03  ·  84%"}</Tag>
            <Tag dot="blue">{"Insight 02  ·  90%"}</Tag>
          </Abs>

          <Abs x={80} y={632} w={560}>
            <Label>The problem</Label>
            <Body className="mt-[10px]">
              A reminder that disappears in a few seconds does not help someone who is outside, distracted or hard of
              hearing. Alerts alone were not enough.
            </Body>
          </Abs>

          <Abs x={80} y={820} className="flex flex-col sm:flex-row gap-[16px]">
            <Option
              label="Option A"
              title="A standard notification"
              desc="Simple to build, but it fades in seconds and one swipe dismisses it."
              height={308}
            />
            <Option
              chosen
              label={"Option B  ·  Chosen"}
              title="A reminder that waits"
              desc="Stays on screen until someone confirms, snoozes or marks the dose as missed."
              height={308}
            />
          </Abs>

          <Abs x={80} y={1144} w={560}>
            <Label>The trade-off</Label>
            <Body className="mt-[10px]">
              A reminder that waits can feel pushy to busy people like Daniel. Snooze moves it 5 to 20 minutes later
              instead of dismissing it, and logs the delay.
            </Body>
          </Abs>

          <Abs x={80} y={1332} w={560}>
            <Label>Why it was right</Label>
            <Body dark className="mt-[10px]">
              It answers both needs at once: the alert cannot slip by unseen, and every dose ends as Taken, Snoozed or
              Missed, with a time stamp. When a dose is missed, the caregiver is told.
            </Body>
          </Abs>

          <Glow x={780} y={747} w={520} h={520} />
          <div className="flex flex-col items-center gap-[24px] min-[1400px]:contents">
            <Phone
              src={`${P}/reminders-notifications.avif`}
              alt="Notifications list showing missed, upcoming and taken dose alerts"
              x={720}
              y={777.3}
              nw={270}
              nh={545.2}
              iw={389}
              ih={665}
            />
            <Phone
              src={`${P}/reminders-home-modal.avif`}
              alt="Time for your Medication reminder with Confirm intake, Snooze and Mark as missed actions"
              x={920}
              y={647.3}
              nw={380}
              nh={767.4}
              iw={547}
              ih={935}
            />
            <Abs x={720} y={1346.5}>
              <Tag dot="teal">Stays until you act</Tag>
            </Abs>
            <Abs x={992} y={1438.7}>
              <Tag dot="orange">Caregiver notified on a miss</Tag>
            </Abs>
          </div>

          <Abs x={80} y={1636}>
            <Label>From wireframe to final</Label>
          </Abs>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[24px] min-[1400px]:contents">
            <Phone
              src={`${P}/reminders-wireframe-home.avif`}
              alt="Wireframe of the home screen with Confirm and Snooze inside the medication list"
              x={80}
              y={1692}
              nw={270}
              nh={545.2}
              iw={389}
              ih={665}
            />
            <Abs x={385} y={1935} w={40} className="text-center">
              <span className="block text-[#9aa0ae] text-[40px] leading-[60px] rotate-90 sm:rotate-0">→</span>
            </Abs>
            <Phone
              src={`${P}/reminders-final-home.avif`}
              alt="Final home screen with the reminder that waits for an answer"
              x={440}
              y={1692}
              nw={270}
              nh={545.2}
              iw={389}
              ih={665}
            />
          </div>
          <Abs x={800} y={1893} w={520}>
            <Body>
              The wireframe put Confirm and Snooze inside the medication list, where they were easy to miss. The
              final design moves them into a reminder that waits for an answer.
            </Body>
          </Abs>
        </Frame>

        {/* 09 Decision · Accessibility */}
        <Frame h={1624}>
          <SectionHead
            reveal
            tag="Key Decision 02"
            line1="One App,"
            line2={<Italic>Every Ability.</Italic>}
            para="87% struggled with complicated screens, whatever their age, health or comfort with technology."
            paraY={272}
          />

          <Abs x={760} y={546}>
            <Tag dot="blue">{"Insight 01  ·  87%"}</Tag>
          </Abs>
          <Abs x={760} y={632} w={560}>
            <Label>The problem</Label>
            <Body className="mt-[10px]">
              Simplicity was not a senior feature. People of every age wanted clear, calm screens that need little
              thought.
            </Body>
          </Abs>
          <Abs x={760} y={820} className="flex flex-col sm:flex-row gap-[16px]">
            <Option
              label="Option A"
              title="A separate senior version"
              desc="Easy to scope, but it splits the product and labels people by age."
              height={278}
            />
            <Option
              chosen
              label={"Option B  ·  Chosen"}
              title="Settings inside one app"
              desc="Text size, high contrast and Simple Mode, all in one place."
              height={278}
            />
          </Abs>
          <Abs x={760} y={1114} w={560}>
            <Label>The trade-off</Label>
            <Body className="mt-[10px]">
              More settings to design and test. Every option had to work on every screen, not just a few.
            </Body>
          </Abs>
          <Abs x={760} y={1266} w={560}>
            <Label>Why it was right</Label>
            <Body dark className="mt-[10px]">
              Everyone gets the same app and the same updates. People choose what they need, and nobody is singled
              out.
            </Body>
          </Abs>

          <Glow x={230} y={701} w={520} h={520} />
          <div className="flex flex-col items-center gap-[24px] min-[1400px]:contents">
            <Phone
              src={`${P}/accessibility-font-size.avif`}
              alt="Accessibility Settings screen with font size options from small to extra large"
              x={80}
              y={621.3}
              nw={320}
              nh={646.2}
              iw={461}
              ih={787}
            />
            <Phone
              src={`${P}/accessibility-simple-mode.avif`}
              alt="Accessibility Settings screen with high contrast mode and Simple Mode"
              x={428}
              y={761.3}
              nw={280}
              nh={565.4}
              iw={403}
              ih={689}
            />
            <Abs x={80} y={1291.5}>
              <Tag dot="blue">Small to Extra Large text</Tag>
            </Abs>
            <Abs x={530} y={1350.7}>
              <Tag dot="teal">Simple Mode</Tag>
            </Abs>
          </div>
        </Frame>

        {/* 10 Final screens · Start and Home */}
        <Frame h={2476}>
          <SectionHead
            tag="Final Design"
            line1="A Gentle Start to"
            line2={<Italic>Your Daily Care.</Italic>}
            para="From the first screen to the daily view, every step asks for one clear action."
            paraX={900}
            paraW={420}
            paraY={308}
          />

          <Abs x={80} y={546}>
            <Label>Get started</Label>
          </Abs>
          <Glow x={350} y={746} w={700} h={420} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[16px] min-[1400px]:contents">
            <Fig
              src={`${P}/onboarding-welcome.avif`}
              alt="Welcome to Pill Pal screen with a Get Started button"
              x={120}
              y={696}
              nw={300}
              nh={605.8}
              iw={432}
              ih={738}
              caption="A calm first step"
              dot="teal"
            />
            <Fig
              src={`${P}/onboarding-login.avif`}
              alt="Log in or Sign Up sheet with email, Google, Apple and phone options"
              x={550}
              y={606}
              nw={300}
              nh={605.8}
              iw={432}
              ih={738}
              caption="Email, Google, Apple or phone"
              dot="blue"
            />
            <Fig
              src={`${P}/onboarding-add-medication.avif`}
              alt="Add Medication form with dose, time and frequency fields"
              x={980}
              y={706}
              nw={300}
              nh={605.8}
              iw={432}
              ih={738}
              caption="Dose, time and alert in one form"
              dot="blue"
            />
          </div>

          <Abs x={80} y={1506}>
            <Label>Every dose in view</Label>
          </Abs>
          <Glow x={350} y={1706} w={700} h={420} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[16px] min-[1400px]:contents">
            <Fig
              src={`${P}/home-today.avif`}
              alt="Home screen with the next dose, daily progress and today's medications"
              x={120}
              y={1565.8}
              nw={300}
              nh={605.8}
              iw={432}
              ih={738}
              caption="Today at a glance"
              dot="blue"
            />
            <Fig
              src={`${P}/medications-list.avif`}
              alt="Medications list with on and off toggles for each medicine"
              x={550}
              y={1655.8}
              nw={300}
              nh={605.8}
              iw={432}
              ih={738}
              caption="Turn a medicine on or off"
              dot="teal"
            />
            <Fig
              src={`${P}/medication-detail.avif`}
              alt="Amoxicillin detail screen with taken, missed and skipped history"
              x={980}
              y={1605.8}
              nw={300}
              nh={605.8}
              iw={432}
              ih={738}
              caption="Taken, missed and skipped history"
              dot="blue"
            />
          </div>
        </Frame>

        {/* 11 Final screens · Assistant and Care */}
        <Frame h={1476}>
          <SectionHead
            tag="Final Design"
            line1="Help Is"
            line2={<Italic>One Question Away.</Italic>}
            para="Ask by text or voice, follow your week, and let the people who care for you know when a dose is missed."
            paraY={272}
          />
          <Glow x={320} y={726} w={760} h={440} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[16px] min-[1400px]:contents">
            <Fig
              src={`${P}/assistant-chat.avif`}
              alt="Smart Assistant chat with suggested actions and a message field"
              x={110}
              y={626}
              nw={300}
              nh={605.8}
              iw={432}
              ih={738}
              caption="Ask in your own words"
              dot="blue"
            />
            <Fig
              src={`${P}/assistant-voice.avif`}
              alt="Voice assistant sheet listening for a question about medication"
              x={530}
              y={546}
              nw={340}
              nh={686.6}
              iw={490}
              ih={837}
              caption="Speak instead of typing"
              dot="teal"
            />
            <Fig
              src={`${P}/assistant-reports.avif`}
              alt="Reports screen with adherence overview, weekly trends and missed dose analysis"
              x={990}
              y={621.4}
              nw={300}
              nh={605.8}
              iw={432}
              ih={738}
              caption="Weekly adherence and missed doses"
              dot="blue"
            />
          </div>
        </Frame>

        {/* 13 Testing and takeaways */}
        <Frame h={1757}>
          <SectionHead
            reveal
            tag="Testing and Takeaways"
            line1="Testing for a"
            line2={<Italic>Calmer Daily Routine.</Italic>}
            para="We tested the core flows in 5 moderated remote sessions on a Figma prototype, October 2025."
            paraY={272}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] min-[1400px]:contents">
            <Abs x={80} y={546} w={397.3}>
              <ResultCard n="01" title="Add a medicine" value="4 of 5" pct={80} />
            </Abs>
            <Abs x={501.3} y={546} w={397.3}>
              <ResultCard n="02" title="Confirm a dose" value="5 of 5" pct={100} />
            </Abs>
            <Abs x={922.7} y={546} w={397.3}>
              <ResultCard n="03" title="Change text size" value="3 of 5" pct={60} />
            </Abs>
          </div>

          <Abs x={80} y={897} w={1240} h={254}>
            <div className="relative size-full bg-white border border-[#eceef2] rounded-[24px] shadow-[0_12px_16px_rgba(10,26,51,0.04)] p-[24px] md:p-[39px] overflow-hidden">
              <span
                aria-hidden
                className="absolute right-[24px] md:right-[60px] top-[7px] font-bold text-[#e6e9f0] text-[64px] md:text-[100px] min-[1400px]:text-[160px] leading-none tracking-[-3.2px]"
              >
                “
              </span>
              <Tag>Tester voice</Tag>
              <p className="mt-[28px] md:mt-[40px] font-light text-[#1e2433] text-[24px] md:text-[34px] leading-[1.3] tracking-[-0.34px] max-w-[900px]">
                “I like that it waits for me. I tap Taken and I know it is done.”
              </p>
              <p className="mt-[16px] text-[#6b7287] text-[16px] md:text-[20px] leading-[1.5] whitespace-pre-wrap">
                {"Tester, 68  ·  Takes three daily medicines"}
              </p>
            </div>
          </Abs>

          <Abs x={80} y={1311} w={1240}>
            <Label>Key takeaways</Label>
            <div className="mt-[28px] grid grid-cols-1 md:grid-cols-3 gap-x-[24px] gap-y-[32px]">
              <Takeaway
                n="01"
                title="Accessibility is the product"
                body="Clear type, strong contrast and voice support are not extras in health apps. They decide whether the app works at all."
              />
              <Takeaway
                n="02"
                title="Simple is powerful"
                body="Fewer steps, larger controls and plain language lower the load for older users, and help everyone else too."
              />
              <Takeaway
                n="03"
                title="Progress motivates"
                body="Simple daily and weekly summaries turned a routine task into something people could see and celebrate."
              />
            </div>
          </Abs>
        </Frame>

        {/* CTA */}
        <section className="bg-[#f9f9fa] flex flex-col items-center py-[48px] px-5">
          <a
            href="https://www.behance.net/gallery/256673689/Pill-Pal"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-[8px] bg-[#121212] text-white rounded-[8px] px-[20px] py-[12px] text-[14px] font-medium leading-normal whitespace-nowrap font-[family-name:var(--font-dm-sans)] hover:opacity-90 transition-opacity"
          >
            <span>View full case study</span>
            <span className="font-[family-name:var(--font-inter)]">→</span>
          </a>
        </section>
      </main>
    </div>
  );
}
