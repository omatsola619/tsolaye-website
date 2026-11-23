export type SelectedWorkItem = {
  title: string;
  statusLabel: string;
  statusBg: string;
  statusText: string;
  context: string;
  description: string;
  image: string;
  imageFit: "cover" | "contain";
  tags: string[];
  href: string;
  cardBg: string;
  /** Defaults to "Read case study" when omitted. */
  buttonLabel?: string;
  /** CSS object-position for the cover image. Defaults to "center top". */
  imagePosition?: string;
};

// Home's "Selected work" — the 4 flagship case-study cards. Order and copy
// follow the Figma source: each description leads with the tested metric
// from that project's case study, not a generic summary.
export const selectedWork: SelectedWorkItem[] = [
  {
    title: "Fitness AI: from idea to App Store",
    statusLabel: "Shipped",
    statusBg: "#e0f5e5",
    statusText: "#176e33",
    context: "Product Designer · Mobile App Builders · 2025–26",
    description:
      "Logging a meal from one photo takes 9 seconds, down from the 2 minutes a typical tracker needs. In testing, 6 of 8 people found what was left for the day at a glance, and the AI estimates earned a 4.1/5 trust score.",
    image: "/redesign/projects/fitnessai.png",
    imageFit: "cover",
    tags: ["0→1 product", "Data visualisation", "iOS"],
    href: "/fitness-ai",
    cardBg: "#f7f7f7",
  },
  {
    title: "Hollis: the plan before the paperwork",
    statusLabel: "Case study",
    statusBg: "#edede8",
    statusText: "#4d4a45",
    context: "Product Designer · Fintech · iOS and web · 2026",
    description:
      "In testing, 6 of 8 people reached their monthly plan without help, and only 2 of 8 stopped at the SSN step, down from 4 of 6 in the investing apps they already used.",
    image: "/redesign/projects/hollis.jpg",
    imageFit: "cover",
    tags: ["Onboarding", "Fintech", "iOS and web"],
    href: "/hollis",
    cardBg: "#f1f1f1",
  },
  {
    title: "Pill Pal: never miss a dose",
    statusLabel: "Case study",
    statusBg: "#edede8",
    statusText: "#4d4a45",
    context: "Product Designer · Healthcare · iOS",
    description:
      "In usability testing, 5 of 5 people confirmed a dose without help and 4 of 5 added a new medicine unaided, built around large type and confirm-to-dismiss reminders.",
    image: "/redesign/projects/pillpal.jpg",
    imageFit: "cover",
    tags: ["Accessibility", "Health", "Research"],
    href: "/pill-pal",
    cardBg: "#f1f1f1",
  },
  {
    title: "Culture Scape: cultures without a flight",
    statusLabel: "Case study",
    statusBg: "#edede8",
    statusText: "#4d4a45",
    context: "Product Designer · Cultural travel · Website",
    description:
      "CultureScape offers immersive journeys into global traditions, rituals, food, fashion, and stories, giving you a unique way to experience cultures without booking a flight.",
    image: "/redesign/projects/culturescape.jpg",
    imageFit: "cover",
    tags: ["Web Design", "UX/UI", "Components"],
    href: "https://www.behance.net/gallery/240623047/Culture-Scape",
    cardBg: "#f7f7f7",
  },
];

export type MoreCaseStudyItem = {
  title: string;
  tagline: string;
  image: string;
  href: string;
};

// Home's "More case studies" — condensed rows below the 4 flagship cards.
export const moreCaseStudies: MoreCaseStudyItem[] = [
  {
    title: "Hatchyverse",
    tagline: "Gaming · Website",
    image: "/redesign/projects/hatchyverse.jpg",
    href: "https://www.hatchyverse.com",
  },
  {
    title: "Swiftcart",
    tagline: "AI shopping · iOS",
    image: "/redesign/projects/swiftcart.jpg",
    href: "https://www.behance.net/gallery/256675029/Swift-Cart-AI-Shopping-Assistant",
  },
  {
    title: "Ravyn",
    tagline: "Event discovery · iOS",
    image: "/redesign/projects/ravyn.jpg",
    href: "https://www.behance.net/gallery/252298719/Ravyn-Your-Local-Event-Finder",
  },
];

export type PlaygroundShot = {
  caption: string;
  /** Still image; for a video it is the poster shown before playback. */
  image: string;
  aspect: string;
  /** Optional silent prototype film (MP4, H.264), played muted on a loop. */
  video?: string;
};

// Home's "Playground" — quick concepts in motion, not full case studies.
// Films are the original 1440x1800 exports, unchanged (Axial Open with the
// music track removed, picture copied as is).
export const playgroundShots: PlaygroundShot[] = [
  {
    caption: "Axial Open · watch website concept",
    image: "/redesign/exploration/axial-open-poster.jpg",
    video: "/redesign/exploration/axial-open.mp4",
    aspect: "1440/1800",
  },
  {
    caption: "Moko · kids' money app concept",
    image: "/redesign/exploration/moko-poster.jpg",
    video: "/redesign/exploration/moko.mp4",
    aspect: "1440/1800",
  },
  {
    caption: "Plus Ones · group ticketing app concept",
    image: "/redesign/exploration/plus-ones-poster.jpg",
    video: "/redesign/exploration/plus-ones.mp4",
    aspect: "1440/1800",
  },
  {
    caption: "Still · recovery app concept",
    image: "/redesign/exploration/still-poster.jpg",
    video: "/redesign/exploration/still.mp4",
    aspect: "1440/1800",
  },
];
