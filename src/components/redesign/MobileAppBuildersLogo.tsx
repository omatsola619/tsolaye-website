import Image from "next/image";

export default function MobileAppBuildersLogo() {
  return (
    <div className="relative w-[95px] h-[36px] shrink-0">
      <div className="absolute h-[32.236px] left-0 top-[1.29px] w-[24.337px]">
        <Image src="/redesign/logos/mab-vector-1.svg" alt="" fill sizes="32px" className="object-contain" />
      </div>
      <div className="absolute h-[6.073px] left-[4.68px] top-[10.82px] w-[18.156px]">
        <Image src="/redesign/logos/mab-vector-2.svg" alt="" fill sizes="32px" className="object-contain" />
      </div>
      <div className="absolute h-[3.629px] left-[4.68px] top-[16.69px] w-[8.91px]">
        <Image src="/redesign/logos/mab-vector-3.svg" alt="" fill sizes="32px" className="object-contain" />
      </div>
      <div className="absolute h-[3.629px] left-[15.46px] top-[16.69px] w-[4.91px]">
        <Image src="/redesign/logos/mab-vector-4.svg" alt="" fill sizes="32px" className="object-contain" />
      </div>
      <div className="absolute h-[3.629px] left-[4.47px] top-[22.93px] w-[15.691px]">
        <Image src="/redesign/logos/mab-vector-5.svg" alt="" fill sizes="32px" className="object-contain" />
      </div>
      <div className="absolute h-[2.876px] left-[12.12px] top-[12.53px] w-[12.215px]">
        <Image src="/redesign/logos/mab-vector-6.svg" alt="" fill sizes="32px" className="object-contain" />
      </div>
      <div className="absolute left-[32px] top-0 flex flex-col font-[family-name:var(--font-sans)] font-semibold text-[11.685px] leading-[normal] text-[#939190] w-[63px]">
        <p className="mb-[-3px]">MOBILE</p>
        <p className="mb-[-3px]">APP</p>
        <p>BUILDERS</p>
      </div>
    </div>
  );
}
