import Image from "next/image";
import MobileAppBuildersLogo from "./MobileAppBuildersLogo";

function LogoSet() {
  return (
    <>
      <span className="relative shrink-0 size-[52px]">
        <Image src="/redesign/logos/stgm.png" alt="STGM" fill quality={95} className="object-contain" />
      </span>
      <span className="relative shrink-0 h-[36px] w-[162px]">
        <Image
          src="/redesign/logos/hatchypocket.png"
          alt="Hatchyverse"
          fill
          quality={95}
          className="object-contain"
        />
      </span>
      <MobileAppBuildersLogo />
      <span className="relative shrink-0 h-[36px] w-[127px]">
        <Image src="/redesign/logos/logo.png" alt="Petaverse" fill quality={95} className="object-contain" />
      </span>
      <span className="relative shrink-0 h-[36px] w-[131px]">
        <Image src="/redesign/logos/logo-svg.svg" alt="Perxels" fill className="object-contain" />
      </span>
    </>
  );
}

// Mobile marquee: every logo shares the same 28px box height (contain-fit), so
// the row reads as one consistent set rather than mismatched sizes.
function MobileLogoSet() {
  return (
    <>
      {/* eslint-disable @next/next/no-img-element -- tiny decorative marks, natural aspect ratio via plain img */}
      <img src="/redesign/logos/stgm.png" alt="STGM" className="h-[28px] w-auto object-contain shrink-0" />
      <img
        src="/redesign/logos/hatchypocket.png"
        alt="Hatchyverse"
        className="h-[28px] w-auto object-contain shrink-0"
      />
      <span className="relative shrink-0 h-[28px] w-[74px]">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 origin-left scale-[0.778]">
          <MobileAppBuildersLogo />
        </span>
      </span>
      <img src="/redesign/logos/logo.png" alt="Petaverse" className="h-[28px] w-auto object-contain shrink-0" />
      <img
        src="/redesign/logos/logo-svg.svg"
        alt="Perxels"
        className="h-[28px] w-auto object-contain shrink-0"
      />
      {/* eslint-enable @next/next/no-img-element */}
    </>
  );
}

export default function ClientLogos({
  eyebrow = "",
  title = "Previous companies",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <div className="flex flex-col gap-[24px] lg:gap-[8px] items-center w-full">
      <div className="flex flex-col gap-[8px] lg:gap-0 items-center px-[24px] py-[12px] w-full">
        {eyebrow && (
          <p
            className="font-[family-name:var(--font-dm-sans)] text-[12px] leading-[16px] tracking-[0.048px] text-center whitespace-nowrap"
            style={{ color: "var(--rd-text-faint)" }}
          >
            {eyebrow}
          </p>
        )}
        <p
          className="rd-heading-clamp font-[family-name:var(--font-genos)] font-bold text-[24px] lg:text-[32px] leading-[1.3] lg:leading-[40px] text-center"
          style={{ color: "var(--rd-text)" }}
        >
          {title}
        </p>
      </div>

      {/* ---------- Mobile: full-bleed, faded edges, uniform logo heights ---------- */}
      <div className="rd-marquee-mask lg:hidden overflow-hidden w-screen relative left-1/2 -translate-x-1/2">
        <div className="flex gap-[40px] items-center w-max animate-logo-marquee">
          <MobileLogoSet />
          <MobileLogoSet />
        </div>
      </div>

      {/* ---------- Desktop: unchanged, contained window ---------- */}
      <div className="hidden lg:block overflow-hidden w-full max-w-[337px] pl-[10px]">
        <div className="flex gap-[40px] items-center w-max animate-logo-marquee">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </div>
  );
}
