import Image from "next/image";
import { playgroundShots } from "@/data/homeContent";

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
          Quick visual explorations, not full case studies.
        </p>
      </div>

      <div className="flex flex-col gap-[28px] lg:gap-[64px] items-start w-full">
        {playgroundShots.map((shot) => (
          <figure key={shot.caption} className="flex flex-col gap-[12px] items-start w-full">
            <div
              className="relative w-full rounded-[20px] lg:rounded-[16px] overflow-hidden shrink-0"
              style={{ aspectRatio: shot.aspect }}
            >
              <Image
                src={shot.image}
                alt={shot.caption}
                fill
                quality={100}
                sizes="(min-width: 1024px) 707px, calc(100vw - 40px)"
                className="object-cover"
              />
            </div>
            <figcaption
              className="font-[family-name:var(--font-dm-sans)] text-[14px]"
              style={{ color: "var(--rd-text-muted)" }}
            >
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
