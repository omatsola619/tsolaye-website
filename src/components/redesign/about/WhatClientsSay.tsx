import TestimonialCard from "../TestimonialCard";

export default function WhatClientsSay() {
  return (
    <div className="flex flex-col gap-[20px] items-start w-full">
      <h2
        className="font-[family-name:var(--font-dm-sans)] font-semibold text-[28px] w-full"
        style={{ color: "var(--rd-text)" }}
      >
        What clients say
      </h2>
      <TestimonialCard />
    </div>
  );
}
