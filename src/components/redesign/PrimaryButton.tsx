import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

type PrimaryButtonProps = {
  label: string;
  icon: IconSvgElement;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
};

export default function PrimaryButton({
  label,
  icon,
  href,
  onClick,
  target,
}: PrimaryButtonProps) {
  const className =
    "border flex gap-[10px] items-center justify-center px-[24px] py-[16px] rounded-[32px] shrink-0 transition-opacity hover:opacity-80";
  const style = {
    backgroundColor: "var(--rd-btn-bg)",
    borderColor: "var(--rd-btn-border)",
  };

  const content = (
    <>
      <span
        className="font-[family-name:var(--font-dm-sans)] font-semibold text-[14px] text-center tracking-[0.014px] leading-[20px] whitespace-nowrap"
        style={{ color: "var(--rd-btn-text)" }}
      >
        {label}
      </span>
      <span className="relative shrink-0 flex items-center" style={{ color: "var(--rd-btn-text)" }}>
        <HugeiconsIcon icon={icon} size={20} />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} className={className} style={style}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} style={style}>
      {content}
    </button>
  );
}
