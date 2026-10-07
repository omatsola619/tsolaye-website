const principles = [
  {
    num: "01",
    title: "Decide with evidence",
    body: "I start with user insight and data, so we build the right thing before we build it well.",
  },
  {
    num: "02",
    title: "Design for the build",
    body: "Every screen comes with real components, states and edge cases that developers can ship.",
  },
  {
    num: "03",
    title: "Ship, learn, iterate",
    body: "I prototype fast, test with real people and keep improving after launch.",
  },
];

export default function HowIWork() {
  return (
    <div className="flex flex-col gap-[20px] items-start w-full">
      <h2
        className="font-[family-name:var(--font-dm-sans)] font-semibold text-[28px] w-full"
        style={{ color: "var(--rd-text)" }}
      >
        How I work
      </h2>
      <div className="flex flex-col gap-[12px] items-start w-full">
        {principles.map((p) => (
          <div
            key={p.num}
            className="flex gap-[20px] items-start w-full rounded-[16px] px-[24px] py-[20px]"
            style={{ backgroundColor: "var(--rd-surface)" }}
          >
            <p
              className="font-[family-name:var(--font-dm-sans)] font-semibold text-[14px] shrink-0"
              style={{ color: "var(--rd-text-muted)" }}
            >
              {p.num}
            </p>
            <div className="flex flex-col gap-[6px] items-start">
              <p
                className="font-[family-name:var(--font-dm-sans)] font-semibold text-[18px]"
                style={{ color: "var(--rd-text)" }}
              >
                {p.title}
              </p>
              <p
                className="font-[family-name:var(--font-dm-sans)] text-[16px]"
                style={{ color: "var(--rd-text-muted)" }}
              >
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
