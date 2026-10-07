const roles = [
  {
    company: "ST Holding Stock Brokerage",
    meta: "Product Designer · Jan–Aug 2026 · Remote (Bahamas)",
    body: "Led the end-to-end redesign of a brokerage web app, from onboarding to dashboard. Streamlined sign-up cut onboarding drop-off by 28%; built and documented the design system.",
  },
  {
    company: "Mobile App Builders LLC",
    meta: "Product Designer · Jul 2025–Aug 2026 · Remote (Texas, USA)",
    body: "Took a mobile app from an ambiguous idea to testable flows and a shipped product, now live on the App Store and Play Store.",
  },
  {
    company: "Petaverse",
    meta: "Product Designer · Apr–Jun 2025 · Remote (Lagos)",
    body: "Led product discovery and execution across features: UX research, interaction design and interface refinement with distributed teams.",
  },
  {
    company: "Hatchyverse",
    meta: "Product Designer · Jun–Dec 2024 · Remote (Australia)",
    body: "Designed a Web3 gaming platform; led onboarding and airdrop flows that reduced drop-off by 14%.",
  },
  {
    company: "Design mentor",
    meta: "Volunteer · 2023–present",
    body: "Mentoring early-career designers on product thinking, portfolio structure and career growth.",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-[20px] items-start w-full">
      <h2
        className="font-[family-name:var(--font-dm-sans)] font-semibold text-[28px] w-full"
        style={{ color: "var(--rd-text)" }}
      >
        Experience
      </h2>
      <div className="flex flex-col items-start w-full">
        {roles.map((role) => (
          <div
            key={role.company}
            className="flex flex-col gap-[4px] items-start w-full py-[16px] border-t"
            style={{ borderColor: "var(--rd-divider)" }}
          >
            <p
              className="font-[family-name:var(--font-dm-sans)] font-semibold text-[18px]"
              style={{ color: "var(--rd-text)" }}
            >
              {role.company}
            </p>
            <p
              className="font-[family-name:var(--font-dm-sans)] font-medium text-[15px]"
              style={{ color: "var(--rd-text-muted)" }}
            >
              {role.meta}
            </p>
            <p
              className="font-[family-name:var(--font-dm-sans)] text-[16px]"
              style={{ color: "var(--rd-text)", opacity: 0.8 }}
            >
              {role.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
