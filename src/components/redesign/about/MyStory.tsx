export default function MyStory() {
  return (
    <div className="flex flex-col gap-[20px] items-start w-full">
      <h2
        className="font-[family-name:var(--font-dm-sans)] font-semibold text-[28px] w-full"
        style={{ color: "var(--rd-text)" }}
      >
        My story
      </h2>
      <p
        className="font-[family-name:var(--font-dm-sans)] text-[18px] leading-[1.55] w-full"
        style={{ color: "var(--rd-text)", opacity: 0.85 }}
      >
        I’ve spent 3+ years designing products for teams in the Bahamas, the US, Australia and
        Nigeria, from a stock brokerage to a Web3 game. Studying computer science and building my
        own products taught me what breaks between design and code, so today I design with
        engineering in mind and ship what I design.
      </p>
    </div>
  );
}
