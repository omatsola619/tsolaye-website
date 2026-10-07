export type Project = {
  title: string;
  description: string;
  descriptionTracking?: string;
  image: string;
  imageFit: "cover" | "contain";
  tags: string[];
  buttonLabel: string;
  buttonColor: string;
  /** Mobile-only override for light theme, when the default buttonColor fails 4.5:1 white-text contrast. Desktop always uses buttonColor. */
  buttonColorMobileLight?: string;
  /** Mobile-only override for dark theme, when the default buttonColor fails 3:1 contrast against the dark card surface. Desktop always uses buttonColor. */
  buttonColorMobileDark?: string;
  cardBg: string;
  href: string;
};

// Shown on Home and About — the "design" project set.
export const designProjects: Project[] = [
  {
    title: "Ravyn Event Finder App",
    description:
      "Ravyn is a location-first event discovery mobile app that helps users find, book and attend events happening near them through a simple, fast, and personalized experience.",
    descriptionTracking: "-1.5px",
    image: "/redesign/projects/ravyn.jpg",
    imageFit: "cover",
    tags: ["Design system", "UX/UI", "Components"],
    buttonLabel: "View Project",
    buttonColor: "#f9761f",
    buttonColorMobileLight: "#c45105",
    cardBg: "#fafafa",
    href: "https://hatchyverse.com",
  },
  {
    title: "Culture Scape Website",
    description:
      "CultureScape offers immersive journeys into global traditions, rituals, food, fashion, and stories giving you a unique way to experience cultures without booking a flight.",
    image: "/redesign/projects/culturescape.jpg",
    imageFit: "cover",
    tags: ["Web Design", "UX/UI", "Components"],
    buttonLabel: "View Project",
    buttonColor: "#0353a4",
    buttonColorMobileDark: "#0466ca",
    cardBg: "#f7f7f7",
    href: "https://hatchyverse.com",
  },
  {
    title: "BitLock Web3 App",
    description:
      "A Web3-powered gaming ecosystem built to merge play, ownership, and community. I worked on designing scalable interfaces that balance visual storytelling with usability.",
    image: "/redesign/projects/bitlock.jpg",
    imageFit: "cover",
    tags: ["Design system", "UX/UI", "Components"],
    buttonLabel: "View Project",
    buttonColor: "#3a276b",
    buttonColorMobileDark: "#7254c1",
    cardBg: "#f7f7f7",
    href: "https://hatchyverse.com",
  },
  {
    title: "Pill Pal Mobile App",
    description:
      "Pill Pal is an intelligent, accessibility-driven healthcare companion that helps users manage their medication schedules with ease and reliability.",
    image: "/redesign/projects/pillpal.jpg",
    imageFit: "cover",
    tags: ["Design system", "UX/UI", "Components"],
    buttonLabel: "View Project",
    buttonColor: "#0157ff",
    cardBg: "#f1f1f1",
    href: "https://fitness-ai.fit",
  },
  {
    title: "Swiftcart Mobile App",
    description:
      "A global e-commerce app that uses artificial intelligence to fix broken search, build trust in products, and personalize shopping for global buyers.",
    image: "/redesign/projects/swiftcart.jpg",
    imageFit: "cover",
    tags: ["Design system", "UX/UI", "Components"],
    buttonLabel: "View Project",
    buttonColor: "#e98208",
    buttonColorMobileLight: "#ae6106",
    cardBg: "#f1f1f1",
    href: "https://fitness-ai.fit",
  },
  {
    title: "Pockit Mobile App",
    description:
      "Pockit is an AI-powered budgeting mobile application designed to help users better manage their money through intelligent automation, behavioral insights, and financial guidance.",
    image: "/redesign/projects/pockit.jpg",
    imageFit: "cover",
    tags: ["Design system", "UX/UI", "Components"],
    buttonLabel: "View Project",
    buttonColor: "#0f766e",
    cardBg: "#f1f1f1",
    href: "https://fitness-ai.fit",
  },
];

// Shown on Design Engineering — the "engineering" project set, grouped below
// into titled sections (see `engineeringSections`).
const engineeringProjects: Project[] = [
  {
    title: "Bursa Scholarship Webapp",
    description:
      "A free platform where African students discover, compare, save, and apply to scholarships, with every opportunity broken down into a clear, structured, browsable listing.",
    image: "/redesign/projects/bursa.jpg",
    imageFit: "contain",
    tags: ["Engineering", "Antigravity", "Claude Code"],
    buttonLabel: "Live Project",
    buttonColor: "#1b1b3c",
    buttonColorMobileDark: "#5f5fb7",
    cardBg: "#f7f7f7",
    href: "https://hatchyverse.com",
  },
  {
    title: "Vantea AI Webapp",
    description:
      "Vantea AI is a free, web-first personal ownership and progress platform. Users manually record the things they have built, including possessions, savings, a business, and other things.",
    image: "/redesign/projects/vantea.jpg",
    imageFit: "contain",
    tags: ["Engineering", "Antigravity", "Claude Code"],
    buttonLabel: "Live Project",
    buttonColor: "#053430",
    buttonColorMobileDark: "#0b756c",
    cardBg: "#f7f7f7",
    href: "https://hatchyverse.com",
  },
  {
    title: "Mesxico Cakes Website",
    description:
      "Mesxico is an ecommerce brand that brings you delicious treats and satisfying snacks made for everyday cravings, special moments, and everything in between.",
    image: "/redesign/projects/mesxico.jpg",
    imageFit: "contain",
    tags: ["Engineering", "Antigravity", "Claude Code"],
    buttonLabel: "View Website",
    buttonColor: "#ba1620",
    buttonColorMobileDark: "#cc1823",
    cardBg: "#f7f7f7",
    href: "https://hatchyverse.com",
  },
  {
    title: "Fitness AI Mobile App",
    description:
      "A data-driven fitness platform that helps users track calories, habits and progress with clarity instead of complexity. I designed the mobile app to turn data into actionable insights.",
    image: "/redesign/projects/fitnessai.png",
    imageFit: "cover",
    tags: ["Design system", "UX/UI", "Components"],
    buttonLabel: "View In App Store",
    buttonColor: "#1a70dd",
    cardBg: "#f7f7f7",
    href: "https://hatchyverse.com",
  },
  {
    title: "Hatchyverse Gaming App",
    description:
      "A Web3-powered gaming ecosystem built to merge play, ownership, and community. I worked on designing scalable interfaces that balance visual storytelling with usability ensuring complex blockchain concepts feel accessible to everyday players.",
    image: "/redesign/projects/hatchyverse.jpg",
    imageFit: "contain",
    tags: ["Design system", "UX/UI", "Components"],
    buttonLabel: "View Website",
    buttonColor: "#21a3db",
    buttonColorMobileLight: "#197da8",
    cardBg: "#f7f7f7",
    href: "https://hatchyverse.com",
  },
];

export type ProjectSection = { title: string; projects: Project[] };

const byTitle = (title: string): Project => {
  const project = engineeringProjects.find((p) => p.title === title);
  if (!project) throw new Error(`Unknown project: ${title}`);
  return project;
};

// Design Engineering page: work classified into two sections, in display order.
export const engineeringSections: ProjectSection[] = [
  {
    title: "Client Work",
    projects: [byTitle("Fitness AI Mobile App"), byTitle("Hatchyverse Gaming App")],
  },
  {
    title: "Products I Built",
    projects: [
      byTitle("Bursa Scholarship Webapp"),
      byTitle("Vantea AI Webapp"),
      byTitle("Mesxico Cakes Website"),
    ],
  },
];
