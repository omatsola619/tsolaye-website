import Image from "next/image";
import type { Metadata } from "next";
import CaseStudyNav from "@/components/work/CaseStudyNav";
import BlockReveal from "@/components/work/BlockReveal";

export const metadata: Metadata = {
  title: "Fitness AI: Case Study | Tsolaye",
  description:
    "Fitness AI is a calorie tracker that turns one photo of your plate into numbers people can trust.",
};

function Rule() {
  return <div className="h-px bg-[#e3e3e6] w-full" />;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-medium text-[#a3a3a8] text-[20px] md:text-[22px]">{children}</p>;
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-medium text-[#a3a3a8] text-[18px] md:text-[20px]">{label}</p>
      <p className="font-semibold text-[#0b0b0c] text-[20px] md:text-[24px] tracking-[-0.24px]">{value}</p>
    </div>
  );
}

function BigStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="font-normal text-[#0b0b0c] text-[48px] md:text-[64px] leading-[1.08] tracking-[-1.6px]">
        {value}
      </p>
      <p className="font-medium text-[#5f5f66] text-[20px] md:text-[24px] max-w-[320px]">{label}</p>
    </div>
  );
}

export default function FitnessAICaseStudy() {
  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-manrope)]">
      <CaseStudyNav />

      <main className="max-w-[1400px] mx-auto px-5 lg:px-[56px] py-[16px]">
        <div className="max-w-[1160px] mx-auto">
          {/* 01 About project */}
          <section className="flex flex-col gap-[48px] pb-[120px]">
            <div className="flex flex-col gap-[24px]">
              <Eyebrow>About project</Eyebrow>
              <BlockReveal as="h1" trigger="load" className="font-normal text-[40px] md:text-[64px] lg:text-[76px] leading-[1.08] tracking-[-0.4px]">
                <span className="text-[#0b0b0c]">Fitness AI is a calorie tracker that </span>
                <span className="text-[#a3a3a8]">turns one photo of your plate </span>
                <span className="text-[#0b0b0c]">into numbers people can trust.</span>
              </BlockReveal>
            </div>

            <div className="flex flex-wrap gap-x-[60px] gap-y-[24px]">
              <MetaItem label="Product" value="Fitness AI" />
              <MetaItem label="Category" value="Health and nutrition" />
              <MetaItem label="Platform" value="iOS, light and dark" />
              <MetaItem label="My role" value="Sole product designer" />
              <MetaItem label="Timeline" value="6 weeks" />
            </div>

            <Rule />

            <div className="relative w-full aspect-[1160/1000] rounded-[44px] overflow-hidden">
              <Image
                src="/redesign/work/fitness-ai/about-hero.jpg"
                alt="Fitness AI Today screen"
                fill
                priority
                quality={95}
                sizes="(min-width:1280px) 1160px, 100vw"
                className="object-cover"
              />
            </div>

            <p className="text-[20px] md:text-[28px] leading-[1.35] tracking-[-0.14px] text-[#5f5f66]">
              <span className="font-semibold text-[#0b0b0c]">The challenge: </span>
              people quit trackers because logging is slow and AI numbers feel made up.
            </p>

            <div className="flex flex-col gap-[24px]">
              <Eyebrow>The result</Eyebrow>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px]">
                <BigStat value="9 s" label="to log a meal with one photo" />
                <BigStat value="4.1 / 5" label="trust in the AI estimates" />
                <BigStat value="6 of 8" label="found what was left today at a glance" />
              </div>
            </div>
          </section>

          {/* 02 The problem */}
          <section className="flex flex-col gap-[40px] pb-[120px]">
            <div className="flex flex-col md:flex-row gap-[40px]">
              <div className="flex-1">
                <Eyebrow>The problem</Eyebrow>
                <BlockReveal as="h2" trigger="scroll" className="font-normal text-[36px] md:text-[56px] lg:text-[72px] leading-[1.08] tracking-[-1.8px] mt-[12px]">
                  <span className="text-[#0b0b0c]">Calorie tracking works. </span>
                  <span className="text-[#a3a3a8]">Most people just quit too early.</span>
                </BlockReveal>
              </div>
              <p className="flex-1 max-w-[640px] text-[22px] md:text-[26px] leading-[1.4] tracking-[-0.13px] text-[#5f5f66] md:pt-[40px]">
                I started with one question: why do people give up? The same 3 answers kept
                coming back.
              </p>
            </div>

            <div className="flex flex-col gap-[16px]">
              <Eyebrow>Client request</Eyebrow>
              <div className="flex flex-col sm:flex-row gap-[24px] items-start">
                <p className="text-[32px] md:text-[44px] leading-[1.2] tracking-[-0.66px] text-[#0b0b0c] max-w-[720px]">
                  “If logging takes longer than eating, people stop.”
                </p>
                <div className="flex items-center gap-[16px] bg-[#f2f2f4] rounded-[20px] p-[16px] w-full sm:w-auto sm:shrink-0">
                  <span className="relative size-[56px] md:size-[80px] rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/redesign/work/fitness-ai/sofia-avatar.png"
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-[#0b0b0c] text-[18px] md:text-[24px] tracking-[-0.24px] sm:whitespace-nowrap">
                      Sofia Martinez
                    </p>
                    <p className="font-medium text-[#5f5f66] text-[16px] md:text-[20px] sm:whitespace-nowrap">
                      Product Manager, Fitness AI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Rule />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
              <div className="flex flex-col gap-[16px] md:border-l md:border-[#e3e3e6] md:pl-[32px] md:first:border-l-0 md:first:pl-0">
                <p className="font-medium text-[#1e88e5] text-[18px] md:text-[20px]">Problem 1 · Slow logging</p>
                <p className="font-medium text-[#0b0b0c] text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.51px]">
                  Logging took too long
                </p>
                <p className="text-[#5f5f66] text-[20px] md:text-[24px] leading-[1.4]">
                  Typing every ingredient and guessing portions turned each meal into a form.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] md:border-l md:border-[#e3e3e6] md:pl-[32px]">
                <p className="font-medium text-[#1e88e5] text-[18px] md:text-[20px]">Problem 2 · Untrusted numbers</p>
                <p className="font-medium text-[#0b0b0c] text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.51px]">
                  AI numbers felt like a guess
                </p>
                <p className="text-[#5f5f66] text-[20px] md:text-[24px] leading-[1.4]">
                  Photo trackers showed one number with no working, so people did not believe it.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] md:border-l md:border-[#e3e3e6] md:pl-[32px]">
                <p className="font-medium text-[#1e88e5] text-[18px] md:text-[20px]">Problem 3 · Wrong home screen</p>
                <p className="font-medium text-[#0b0b0c] text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.51px]">
                  Home answered the wrong question
                </p>
                <p className="text-[#5f5f66] text-[20px] md:text-[24px] leading-[1.4]">
                  Weekly charts led the home screen. At lunch, people only need what is left today.
                </p>
              </div>
            </div>

            <div className="flex items-baseline gap-[24px] flex-wrap">
              <p className="font-normal text-[#0b0b0c] text-[56px] md:text-[72px] leading-[1.08] tracking-[-1.8px]">
                50%
              </p>
              <p className="text-[#5f5f66] text-[20px] md:text-[24px] max-w-[560px]">
                of new users stop logging within the first week
              </p>
            </div>
            <p className="font-medium text-[#a3a3a8] text-[18px] md:text-[20px]">
              Source: Fitness AI user research, 2026
            </p>

            <Rule />

            <div className="flex flex-col gap-[16px]">
              <Eyebrow>Business task</Eyebrow>
              <p className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.32px] max-w-[720px]">
                <span className="text-[#0b0b0c]">Make logging </span>
                <span className="text-[#a3a3a8]">fast enough to become a habit </span>
                <span className="text-[#0b0b0c]">and honest enough to trust.</span>
              </p>
            </div>
          </section>

          {/* 06 Decision 01 */}
          <section className="flex flex-col gap-[40px] pb-[120px]">
            <div>
              <Eyebrow>Decision 1 · Fixes slow logging</Eyebrow>
              <BlockReveal as="h2" trigger="scroll" className="font-normal text-[36px] md:text-[56px] lg:text-[72px] leading-[1.08] tracking-[-1.8px] mt-[12px]">
                <span className="text-[#0b0b0c]">Photo first, </span>
                <span className="text-[#a3a3a8]">typing as the fallback.</span>
              </BlockReveal>
            </div>
            <div tabIndex={0} role="region" aria-label="Photo-first logging flow: Snap, Read, Review, Log, See, scrollable" className="-mx-5 px-5 lg:mx-0 lg:w-full lg:px-0 overflow-x-auto">
              <Image
                src="/redesign/work/fitness-ai/decision-01.jpg"
                alt="Snap, Read, Review, Log, See flow"
                width={2000}
                height={1477}
                quality={95}
                sizes="1160px"
                className="w-[900px] max-w-none rounded-[32px] lg:w-full lg:h-auto"
              />
            </div>
          </section>

          {/* 07 Decision 02 */}
          <section className="flex flex-col gap-[40px] pb-[120px]">
            <div>
              <Eyebrow>Decision 2 · Fixes untrusted numbers</Eyebrow>
              <BlockReveal as="h2" trigger="scroll" className="font-normal text-[36px] md:text-[56px] lg:text-[72px] leading-[1.08] tracking-[-1.8px] mt-[12px]">
                <span className="text-[#0b0b0c]">AI is only useful </span>
                <span className="text-[#a3a3a8]">when people can check its work.</span>
              </BlockReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              <div className="bg-[#f2f2f4] rounded-[32px] p-[28px] flex flex-col gap-[12px]">
                <p className="font-medium text-[#a3a3a8] text-[18px] md:text-[20px]">Option A</p>
                <p className="font-medium text-[#0b0b0c] text-[28px] md:text-[32px] tracking-[-0.48px]">One number</p>
                <p className="text-[#5f5f66] text-[20px] md:text-[24px]">Fast, but there is no way to check it.</p>
              </div>
              <div className="bg-[#f2f2f4] rounded-[32px] p-[28px] flex flex-col gap-[12px]">
                <p className="font-medium text-[#a3a3a8] text-[18px] md:text-[20px]">Option B</p>
                <p className="font-medium text-[#0b0b0c] text-[28px] md:text-[32px] tracking-[-0.48px]">Manual entry</p>
                <p className="text-[#5f5f66] text-[20px] md:text-[24px]">Accurate, but slow enough to make people quit.</p>
              </div>
              <div className="bg-white border-2 border-[#1e88e5] rounded-[32px] p-[28px] flex flex-col gap-[12px] relative">
                <span className="absolute top-[24px] right-[24px] bg-[#1e88e5] text-white text-[16px] md:text-[18px] font-semibold rounded-full px-[16px] py-[6px]">
                  Chosen
                </span>
                <p className="font-medium text-[#1e88e5] text-[18px] md:text-[20px]">Option C</p>
                <p className="font-medium text-[#0b0b0c] text-[28px] md:text-[32px] tracking-[-0.48px] max-w-[260px]">
                  Estimate with its working
                </p>
                <p className="text-[#5f5f66] text-[20px] md:text-[24px]">
                  Ingredients, grams and a confidence level, all editable.
                </p>
              </div>
            </div>

            <p className="text-[20px] md:text-[24px] leading-[1.4] text-[#5f5f66]">
              <span className="font-semibold text-[#0b0b0c]">Trade-off: </span>
              the result takes more space than one number, so the total comes first and the
              ingredients sit below it.
            </p>

            <div tabIndex={0} role="region" aria-label="Reading your plate and Nutrition facts screens, scrollable" className="-mx-5 px-5 lg:mx-0 flex lg:justify-center lg:w-full lg:px-0 overflow-x-auto">
              <Image
                src="/redesign/work/fitness-ai/decision-02.jpg"
                alt="Reading your plate and Nutrition facts screens"
                width={1152}
                height={1600}
                quality={95}
                sizes="576px"
                className="w-[480px] max-w-none rounded-[44px] lg:w-full lg:max-w-[576px] lg:h-auto"
              />
            </div>
          </section>

          {/* 11 Start in 2 minutes */}
          <section className="flex flex-col gap-[40px] pb-[120px]">
            <div>
              <Eyebrow>Final design · Onboarding</Eyebrow>
              <h2 className="font-normal text-[36px] md:text-[56px] lg:text-[72px] leading-[1.08] tracking-[-1.8px] mt-[12px] text-[#0b0b0c]">
                10 questions, about 2 minutes, one personal plan.
              </h2>
            </div>
            <div tabIndex={0} role="region" aria-label="Onboarding flow screens, scrollable" className="-mx-5 px-5 lg:mx-0 lg:w-full lg:px-0 overflow-x-auto">
              <Image
                src="/redesign/work/fitness-ai/start-2-min.jpg"
                alt="Onboarding flow: plan intro, goal, projection, plan ready"
                width={2000}
                height={1150}
                quality={95}
                sizes="1160px"
                className="w-[800px] max-w-none rounded-[44px] lg:w-full lg:h-auto"
              />
            </div>
          </section>

          {/* 12 Log a meal */}
          <section className="flex flex-col gap-[40px] pb-[120px]">
            <div>
              <Eyebrow>Final design · Logging</Eyebrow>
              <h2 className="font-normal text-[36px] md:text-[56px] lg:text-[72px] leading-[1.08] tracking-[-1.8px] mt-[12px] text-[#0b0b0c]">
                6 ways to log, one sheet to choose from.
              </h2>
            </div>
            <div tabIndex={0} role="region" aria-label="Log food sheet screens, scrollable" className="-mx-5 px-5 lg:mx-0 lg:w-full lg:px-0 overflow-x-auto">
              <Image
                src="/redesign/work/fitness-ai/log-a-meal.jpg"
                alt="Log food sheet: scan, barcode, search, portions"
                width={2000}
                height={1069}
                quality={95}
                sizes="1160px"
                className="w-[800px] max-w-none rounded-[44px] lg:w-full lg:h-auto"
              />
            </div>
          </section>

          {/* 14 Track your day */}
          <section className="flex flex-col gap-[40px] pb-[120px]">
            <div>
              <Eyebrow>Final design · Tracking</Eyebrow>
              <h2 className="font-normal text-[36px] md:text-[56px] lg:text-[72px] leading-[1.08] tracking-[-1.8px] mt-[12px] text-[#0b0b0c]">
                3 tabs, 3 questions people ask every day.
              </h2>
            </div>
            <div tabIndex={0} role="region" aria-label="Today, Diary and Progress tab screens, scrollable" className="-mx-5 px-5 lg:mx-0 lg:w-full lg:px-0 overflow-x-auto">
              <Image
                src="/redesign/work/fitness-ai/track-your-day.jpg"
                alt="Today, Diary and Progress tabs"
                width={2000}
                height={1283}
                quality={95}
                sizes="1160px"
                className="w-[700px] max-w-none rounded-[44px] lg:w-full lg:h-auto"
              />
            </div>
          </section>

          {/* 17 Results */}
          <section className="flex flex-col gap-[48px] pb-[160px]">
            <div>
              <Eyebrow>Results</Eyebrow>
              <BlockReveal as="h2" trigger="scroll" className="font-normal text-[36px] md:text-[56px] lg:text-[72px] leading-[1.08] tracking-[-1.8px] mt-[12px] text-[#0b0b0c]">
                Logging became something you do between bites.
              </BlockReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[560fr_600fr] gap-[40px] items-start">
              <div className="relative w-full aspect-[560/1040] rounded-[44px] overflow-hidden">
                <Image
                  src="/redesign/work/fitness-ai/results-hero.jpg"
                  alt="Reading your plate screen"
                  fill
                  quality={95}
                  sizes="560px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[12px]">
                  <p className="font-normal text-[40px] md:text-[48px] leading-[1] text-[#0b0b0c]">9 s</p>
                  <p className="text-[#0b0b0c] text-[20px]">to log a meal with one photo</p>
                  <p className="text-[#a3a3a8] text-[16px]">Fixes slow logging · 8 moderated sessions</p>
                </div>
                <Rule />
                <div className="flex flex-col gap-[12px]">
                  <p className="font-normal text-[40px] md:text-[48px] leading-[1] text-[#0b0b0c]">4.1 / 5</p>
                  <p className="text-[#0b0b0c] text-[20px]">trust in the AI estimates</p>
                  <p className="text-[#a3a3a8] text-[16px]">Fixes untrusted numbers · post-test survey, 8 people</p>
                </div>
                <Rule />
                <div className="flex flex-col gap-[12px]">
                  <p className="font-normal text-[40px] md:text-[48px] leading-[1] text-[#0b0b0c]">6 of 8</p>
                  <p className="text-[#0b0b0c] text-[20px]">found what was left today at a glance</p>
                  <p className="text-[#a3a3a8] text-[16px]">
                    Fixes the wrong home screen · 5-second test, 8 people
                  </p>
                </div>
              </div>
            </div>

            <Rule />

            <div className="grid grid-cols-1 md:grid-cols-[200fr_720fr] gap-[32px]">
              <Eyebrow>Benchmark</Eyebrow>
              <div className="flex flex-col gap-[32px]">
                <p className="font-semibold text-[#0b0b0c] text-[22px] md:text-[28px]">
                  Time to log one meal, same test
                </p>
                <div className="flex flex-col gap-[12px]">
                  <p className="font-semibold text-[#0b0b0c] text-[22px] md:text-[28px]">A leading manual tracker</p>
                  <div className="flex items-center gap-[16px]">
                    <div className="h-[48px] rounded-[10px] bg-[#e3e3e6] w-full" />
                    <span className="font-semibold text-[#0b0b0c] text-[22px] md:text-[28px] shrink-0">2 min</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p className="font-semibold text-[#0b0b0c] text-[22px] md:text-[28px]">Fitness AI</p>
                  <div className="flex items-center gap-[16px]">
                    <div className="h-[48px] rounded-[10px] bg-[#1e88e5]" style={{ width: "64px" }} />
                    <span className="font-semibold text-[#0b0b0c] text-[22px] md:text-[28px] shrink-0">9 s</span>
                  </div>
                </div>
                <p className="text-[#5f5f66] text-[20px] md:text-[24px]">
                  11 fewer taps from photo to logged meal.
                </p>
              </div>
            </div>

            <Rule />

            <div className="grid grid-cols-1 md:grid-cols-[200fr_720fr] gap-[32px]">
              <Eyebrow>What I learned</Eyebrow>
              <p className="text-[28px] md:text-[36px] leading-[1.3] text-[#0b0b0c] max-w-[720px]">
                People trust AI when it shows its working. I now design every AI feature that way.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="flex justify-center py-[48px] pb-[120px]">
            <a
              href="https://www.behance.net/gallery/256568619/Fitness-AI-Calories-Tracker"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[8px] rounded-[8px] bg-[#121212] px-[20px] py-[12px] text-[14px] font-medium leading-[normal] text-white whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              <span className="font-[family-name:var(--font-dm-sans)]">View full case study</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
