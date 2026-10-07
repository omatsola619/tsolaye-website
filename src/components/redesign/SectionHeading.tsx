export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      className="font-[family-name:var(--font-genos)] font-bold text-[28px] lg:text-[48px] leading-[1.2] lg:leading-[56.554px] text-center w-full"
      style={{ color: "var(--rd-text)" }}
    >
      {children}
    </h2>
  );
}
