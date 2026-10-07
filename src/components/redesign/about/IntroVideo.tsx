import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon } from "@hugeicons/core-free-icons";

export default function IntroVideo() {
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      <p
        className="flex items-center gap-[8px] font-[family-name:var(--font-dm-sans)] font-semibold text-[28px]"
        style={{ color: "var(--rd-text)" }}
      >
        Meet me in 90 seconds <span>👇</span>
      </p>

      <a
        href="https://youtu.be/iBz5lxVmzl8"
        target="_blank"
        rel="noreferrer"
        className="group relative w-full aspect-[691/389] rounded-[20px] overflow-hidden block"
      >
        <Image
          src="/redesign/about/intro-video-thumb.jpg"
          alt="Meet me in 90 seconds"
          fill
          quality={95}
          sizes="691px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center justify-center size-[88px] rounded-full bg-white/90 backdrop-blur-sm transition-transform group-hover:scale-105 text-[#141412]">
            <HugeiconsIcon icon={PlayIcon} size={30} strokeWidth={2} />
          </span>
        </div>
        <div className="hidden lg:block absolute left-[24px] bottom-[36px] text-white font-[family-name:var(--font-dm-sans)] font-semibold text-[20px]">
          Hi, I’m Tsolaye. Here’s how I work
        </div>
        <div className="absolute left-[24px] bottom-[12px] text-[#e5e5e5] font-[family-name:var(--font-dm-sans)] font-medium text-[14px]">
          1:30 · Watch on YouTube
        </div>
      </a>
    </div>
  );
}
