const items = [
  "Design Engineering, Dev&Design, 2026",
  "Google UX Design, Coursera, 2024",
  "Software Testing, Eureka, 2024",
  "UI/UX Design, Dev&Design, 2023",
];

export default function EducationCertifications() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      <h2
        className="font-[family-name:var(--font-dm-sans)] font-semibold text-[28px] w-full"
        style={{ color: "var(--rd-text)" }}
      >
        Education &amp; certifications
      </h2>
      {items.map((item) => (
        <p
          key={item}
          className="font-[family-name:var(--font-dm-sans)] text-[16px]"
          style={{ color: "var(--rd-text)", opacity: 0.8 }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
