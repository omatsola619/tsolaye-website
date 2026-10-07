const tools = [
  "Figma",
  "User flows",
  "Wireframing",
  "Interactive prototyping",
  "Design systems",
  "UX writing",
  "UX research",
  "Usability testing",
  "Information architecture",
  "Accessibility",
  "AI-assisted workflow",
  "Claude Code",
  "Google Antigravity",
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
      <div className="flex flex-wrap gap-[10px] items-start w-full">
        {tools.map((tool) => (
          <span
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
          </span>
        ))}
      </div>
    </div>
  );
}
