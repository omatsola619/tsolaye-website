import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Download04Icon } from "@hugeicons/core-free-icons";

export default function CaseStudyNav() {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between px-5 lg:px-[100px] py-[16px] border-b border-[#e3e3e6]">
        <Link
          href="/"
          className="font-[family-name:var(--font-genos)] font-extrabold text-[24px] lg:text-[32px] leading-[54px] tracking-[-0.08px] text-[#0b0b0c] hover:opacity-70 transition-opacity"
        >
          TSOLAYE
        </Link>
        <nav className="hidden lg:flex items-center justify-center">
          <Link href="/" className="px-[11px] py-[12px] text-[15px] text-[#5f5f66] hover:text-[#0b0b0c] transition-colors">
            Home
          </Link>
          <Link href="/about" className="px-[11px] py-[12px] text-[15px] text-[#5f5f66] hover:text-[#0b0b0c] transition-colors">
            About
          </Link>
          <Link
            href="/design-engineering"
            className="px-[11px] py-[12px] text-[15px] text-[#5f5f66] hover:text-[#0b0b0c] transition-colors"
          >
            Design Engineering
          </Link>
        </nav>
        <a
          href="/cv/Tsolaye-cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[10px] px-4 lg:px-[24px] py-[12px] lg:py-[16px] rounded-[32px] bg-[#0a0a0a] text-white text-[13px] lg:text-[14px] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          <span className="hidden sm:inline">Download CV</span>
          <HugeiconsIcon icon={Download04Icon} size={18} />
        </a>
      </header>

      <div className="flex items-center gap-[8px] px-5 lg:px-[100px] py-[24px] max-w-[1400px] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-[8px] text-[#5f5f66] hover:text-[#0b0b0c] transition-colors text-[16px]"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
          <span>Back</span>
        </Link>
      </div>
      <div className="h-px bg-[#e3e3e6] max-w-[1400px] mx-5 lg:mx-[100px]" />
    </div>
  );
}
