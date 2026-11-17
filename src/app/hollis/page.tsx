import Image from "next/image";
import type { Metadata } from "next";
import CaseStudyNav from "@/components/work/CaseStudyNav";

export const metadata: Metadata = {
  title: "Hollis: Case Study | Tsolaye",
  description:
    "Hollis is a goal-based investing app that shows people their plan before it asks for their paperwork.",
};

const P = "/redesign/work/hollis";

// Case study slides, exported at 4x (5600px wide) from the Behance deck.
// The full deck, including the slides left out here, is on Behance.
const slides = [
  { file: "01-hero.jpg", h: 7880, alt: "Hollis: investing apps lose people at the SSN screen, so this one shows the plan first" },
  { file: "02-problem.jpg", h: 9172, alt: "The problem: people came in with a goal and the apps handed them a form" },
  { file: "03-solution.jpg", h: 7352, alt: "The solution: the plan comes first, paperwork after" },
  { file: "05-goal-to-plan.jpg", h: 8156, alt: "Mobile: from a goal to a plan in three questions" },
  { file: "06-account-identity.jpg", h: 8728, alt: "Mobile: opening the account and confirming identity" },
  { file: "07-first-deposit.jpg", h: 8156, alt: "Mobile: a first deposit that feels safe to send" },
  { file: "08-home-dark-mode.jpg", h: 9420, alt: "Mobile: a home screen that answers am I on track, in light and dark mode" },
  { file: "10-web-welcome.jpg", h: 6316, alt: "Web: the plan still comes before the sign-up" },
  { file: "12-web-dashboard.jpg", h: 9948, alt: "Web dashboard and what testing the sign-up flow showed" },
];

export default function HollisCaseStudy() {
  return (
    <div className="bg-[#f2f5fc] min-h-screen">
      <CaseStudyNav />

      <main className="max-w-[1400px] mx-auto">
        <h1 className="sr-only">Hollis: an investing app that shows the plan first</h1>
        {slides.map((s, i) => (
          <Image
            key={s.file}
            src={`${P}/${s.file}`}
            alt={s.alt}
            width={5600}
            height={s.h}
            quality={95}
            priority={i === 0}
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="block w-full h-auto"
          />
        ))}

        {/* CTA */}
        <section className="bg-[#f9f9fa] flex flex-col items-center py-[48px] px-5">
          <a
            href="https://www.behance.net/gallery/258598439/Hollis-Investing-app-that-shows-the-plan-first"
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
