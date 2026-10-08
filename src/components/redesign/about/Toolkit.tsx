const groups: { label: string; tools: string[] }[] = [
  {
    label: "Design",
    tools: [
      "Figma",
      "FigJam",
      "Design systems",
      "Interactive prototyping",
      "Interaction design",
      "UX writing",
      "Accessibility",
    ],
  },
  {
    label: "Research",
    tools: ["UX research", "Usability testing", "User flows", "Information architecture", "Mobbin"],
  },
  {
    label: "AI",
    tools: ["ChatGPT", "Claude", "Claude Code", "Google Antigravity", "Figma Make", "Midjourney"],
  },
  {
    label: "Build",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
  },
  {
    label: "Working style",
    tools: ["Agile collaboration", "Cross-functional delivery"],
  },
];

export default function Toolkit() {
  return (
    <div className="flex flex-col gap-[20px] items-start w-full">
      <h2
        className="font-[family-name:var(--font-dm-sans)] font-semibold text-[28px] w-full"
        style={{ color: "var(--rd-text)" }}
      >
        Toolkit
      </h2>
      <div className="flex flex-col gap-[20px] w-full">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-[10px] items-start w-full">
            <h3
              className="font-[family-name:var(--font-dm-sans)] font-medium text-[13px] tracking-[1.04px] uppercase"
              style={{ color: "var(--rd-text-muted)" }}
            >
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-[10px] items-start w-full list-none p-0 m-0">
              {group.tools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-center rounded-full border px-[14px] py-[8px]"
                  style={{ borderColor: "var(--rd-chip-border)" }}
                >
                  <span
                    className="font-[family-name:var(--font-dm-sans)] font-medium text-[15px]"
                    style={{ color: "var(--rd-text)" }}
                  >
                    {tool}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
