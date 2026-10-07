import Image from "next/image";
import SectionHeading from "./SectionHeading";

const panels = [
  {
    name: "Voyago travel adventure app",
    image: "/redesign/exploration/voyago.jpg",
    aspect: "755/755",
  },
  {
    name: "REVEN game site",
    image: "/redesign/exploration/reven.jpg",
    aspect: "755/490",
  },
  {
    name: "Glide Cargo app",
    image: "/redesign/exploration/glide-cargo.jpg",
    aspect: "755/755",
  },
  {
    name: "Black Collections ecommerce site",
    image: "/redesign/exploration/black-collections.jpg",
    aspect: "755/544",
  },
];

export default function DesignExplorationSection() {
  return (
    <section className="flex flex-col gap-[24px] lg:gap-[64px] items-center w-full mt-[28px] lg:mt-0">
      <SectionHeading>Design Exploration</SectionHeading>

      <div className="flex flex-col gap-[28px] lg:gap-[100px] items-start w-full">
        {panels.map((panel) => (
          <div
            key={panel.name}
            className="relative w-full rounded-[20px] lg:rounded-[16px] overflow-hidden shrink-0"
            style={{ aspectRatio: panel.aspect }}
          >
            <Image
              src={panel.image}
              alt={panel.name}
              fill
              quality={100}
              sizes="(min-width: 1024px) 707px, calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
