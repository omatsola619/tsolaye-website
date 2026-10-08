import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  Linkedin01Icon,
  Behance01Icon,
  WhatsappIcon,
  Download04Icon,
} from "@hugeicons/core-free-icons";
import { EMAIL, LINKEDIN_URL, BEHANCE_URL, WHATSAPP_URL, CV_PATH } from "@/data/contact";

export default function ContactBlock() {
  return (
    <div className="bg-[#121212] flex flex-col gap-[20px] items-start w-full rounded-[24px] px-6 lg:px-[40px] py-8 lg:py-[48px]">
      <p className="font-[family-name:var(--font-dm-sans)] font-medium text-[13px] text-[#a6a399] tracking-[1.04px]">
        LET’S WORK TOGETHER
      </p>
      <p className="font-[family-name:var(--font-dm-sans)] font-semibold text-[26px] lg:text-[32px] text-white leading-normal">
        Have a product to build or a role to fill? Let’s talk.
      </p>

      <div className="flex flex-wrap gap-[16px] items-center">
        <a
          href={`mailto:${EMAIL}`}
          className="bg-white flex gap-[10px] items-center justify-center px-[24px] py-[16px] rounded-[32px] shrink-0 transition-opacity hover:opacity-90"
        >
          <span className="font-[family-name:var(--font-dm-sans)] font-semibold text-[14px] text-[#121212] tracking-[0.014px] whitespace-nowrap">
            Email me
          </span>
          <span className="relative shrink-0 flex items-center text-[#121212]">
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={22} />
          </span>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="font-[family-name:var(--font-dm-sans)] font-medium text-[16px] text-white whitespace-nowrap hover:opacity-80 transition-opacity"
        >
          {EMAIL}
        </a>
      </div>

      <div className="flex flex-wrap gap-x-[24px] gap-y-[8px] items-center">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[6px] font-[family-name:var(--font-dm-sans)] font-medium text-[15px] text-[#bfbdb2] hover:text-white transition-colors"
        >
          <HugeiconsIcon icon={Linkedin01Icon} size={16} />
          LinkedIn
        </a>
        <a
          href={BEHANCE_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[6px] font-[family-name:var(--font-dm-sans)] font-medium text-[15px] text-[#bfbdb2] hover:text-white transition-colors"
        >
          <HugeiconsIcon icon={Behance01Icon} size={16} />
          Behance
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[6px] font-[family-name:var(--font-dm-sans)] font-medium text-[15px] text-[#bfbdb2] hover:text-white transition-colors"
        >
          <HugeiconsIcon icon={WhatsappIcon} size={16} />
          WhatsApp
        </a>
        <a
          href={CV_PATH}
          download="Tsolaye-Eyeoyibo-CV.pdf"
          className="flex items-center gap-[6px] font-[family-name:var(--font-dm-sans)] font-medium text-[15px] text-[#bfbdb2] hover:text-white transition-colors"
        >
          <HugeiconsIcon icon={Download04Icon} size={16} />
          Download CV
        </a>
      </div>
    </div>
  );
}
