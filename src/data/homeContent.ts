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
    title: "Swiftcart: search that finds the right product",
    statusLabel: "Case study",
    statusBg: "#edede8",
    statusText: "#4d4a45",
    context: "Product Designer · E-commerce · iOS",
    description:
      "Voice search got the first item into the cart about 2x faster, and 6 of 8 testers completed checkout end to end, for a 4.2/5 average ease rating.",
    image: "/redesign/projects/swiftcart.jpg",
    imageFit: "cover",
    imagePosition: "55% top",
    tags: ["AI search", "E-commerce", "Trust"],
    href: "/swiftcart",
    cardBg: "#f1f1f1",
  },
  {
    title: "Pockit: a calmer way to budget",
    statusLabel: "Case study",
    statusBg: "#edede8",
    statusText: "#4d4a45",
    context: "Product Designer · Finance · 2026",
    description:
      "In moderated testing, 4 of 5 people set up a first budget unaided, 4 of 5 found today's safe-to-spend number without help, and 5 of 5 logged an expense by voice.",
    image: "/redesign/projects/pockit.jpg",
    imageFit: "cover",
    tags: ["0→1 product", "Budgeting", "Voice input"],
    href: "/pockit",
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
    title: "Culture Scape",
    tagline: "Cultural travel · Website",
    image: "/redesign/projects/culturescape.jpg",
    href: "https://www.behance.net/gallery/240623047/Culture-Scape",
  },
  {
    title: "Hatchyverse",
    tagline: "Gaming · Website",
    image: "/redesign/projects/hatchyverse.jpg",
    href: "https://www.hatchyverse.com",
  },
  {
    title: "Ravyn",
    tagline: "Event discovery · iOS",
    image: "/redesign/projects/ravyn.jpg",
    href: "https://www.behance.net/gallery/252298719/Ravyn-Your-Local-Event-Finder",
  },
  {
    title: "BitLock",
    tagline: "Digital finance wallet · iOS",
    image: "/redesign/projects/bitlock.jpg",
    href: "https://www.behance.net/gallery/212266943/BitLock-Web3-Mobile-App",
  },
];

export type PlaygroundShot = {
  caption: string;
  image: string;
  aspect: string;
};

// Home's "Playground" — quick visual explorations, not full case studies.
export const playgroundShots: PlaygroundShot[] = [
  {
    caption: "Voyago · travel app concept",
    image: "/redesign/exploration/voyago.jpg",
    aspect: "755/755",
  },
  {
    caption: "Glide Cargo · delivery app concept",
    image: "/redesign/exploration/glide-cargo.jpg",
    aspect: "755/755",
  },
  {
    caption: "Reven · game landing page",
    image: "/redesign/exploration/reven.jpg",
    aspect: "755/490",
  },
];
