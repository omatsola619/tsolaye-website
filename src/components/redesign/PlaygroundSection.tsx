import { playgroundShots } from "@/data/homeContent";
import PlaygroundFilms from "./PlaygroundFilms";

export default function PlaygroundSection() {
  return (
    <section className="flex flex-col gap-[16px] lg:gap-[24px] items-center w-full">
      <div className="flex flex-col gap-[8px] items-center w-full px-5 lg:px-[32px]">
        <h2
          className="font-[family-name:var(--font-genos)] font-bold text-[28px] lg:text-[40px] leading-[1.2] text-center"
          style={{ color: "var(--rd-text)" }}
        >
          Playground
        </h2>
        <p
          className="font-[family-name:var(--font-dm-sans)] text-[14px] lg:text-[16px] text-center"
          style={{ color: "var(--rd-text-muted)" }}
        >
          Quick concepts in motion, not full case studies.
        </p>
      </div>

      <PlaygroundFilms shots={playgroundShots} />
    </section>
  );
}
