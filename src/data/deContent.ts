import type { SelectedWorkItem } from "./homeContent";

// Design Engineering's "Client work" section.
export const clientWork: SelectedWorkItem[] = [
  {
    title: "Fitness AI: from idea to App Store",
    statusLabel: "Shipped",
    statusBg: "#e0f5e5",
    statusText: "#176e33",
    context: "Product Designer · Mobile App Builders · 2025–26",
    description:
      "Logging a meal from one photo takes 9 seconds, down from the 2 minutes a typical tracker needs. 6 of 8 testers found what was left for the day at a glance, now live on the App Store and Play Store.",
    image: "/redesign/projects/fitnessai.png",
    imageFit: "cover",
    tags: ["0→1 product", "Data visualisation", "iOS & Android"],
    href: "https://www.behance.net/gallery/256568619/Fitness-AI-Calories-Tracker",
    cardBg: "#f7f7f7",
    buttonLabel: "View project",
  },
  {
    title: "Hatchyverse: onboarding that cut drop-off 14%",
    statusLabel: "Live",
    statusBg: "#e5edff",
    statusText: "#264dcc",
    context: "Product Designer · Hatchyverse · 2024",
    description:
      "Led design for onboarding and airdrop flows on a Web3 gaming platform, explaining each step in plain language. Drop-off fell by 14%.",
    image: "/redesign/projects/hatchyverse.jpg",
    imageFit: "cover",
    imagePosition: "15% center",
    tags: ["Onboarding", "Web3", "Design system"],
    href: "https://www.hatchyverse.com",
    cardBg: "#f7f7f7",
    buttonLabel: "View project",
  },
];

// Design Engineering's "Products I designed and built" section.
export const productsBuilt: SelectedWorkItem[] = [
  {
    title: "Bursa: scholarships, made browsable",
    statusLabel: "Live",
    statusBg: "#e5edff",
    statusText: "#264dcc",
    context: "Designed & built solo · Web app",
    description:
      "African students struggle to find and compare scholarships. I designed and built a free platform that breaks every opportunity into a clear listing students can search, save and apply to.",
    image: "/redesign/projects/bursa.jpg",
    imageFit: "contain",
    tags: ["Design + build", "AI-assisted build", "Claude Code"],
    href: "https://bursa-scholar.vercel.app",
    cardBg: "#f7f7f7",
    buttonLabel: "View project",
  },
  {
    title: "Vantea: track what you’ve built",
    statusLabel: "Live",
    statusBg: "#e5edff",
    statusText: "#264dcc",
    context: "Designed & built solo · Web app",
    description:
      "A free, web-first platform where people record what they own and build (possessions, savings, a business) and see their progress over time. Designed and built end to end.",
    image: "/redesign/projects/vantea.jpg",
    imageFit: "contain",
    tags: ["Design + build", "AI-assisted build", "Claude Code"],
    href: "https://vantea-omega.vercel.app",
    cardBg: "#f7f7f7",
    buttonLabel: "View project",
  },
  {
    title: "Mesxico: an online bakery storefront",
    statusLabel: "Live",
    statusBg: "#e5edff",
    statusText: "#264dcc",
    context: "Designed & built · E-commerce website",
    description:
      "An e-commerce site for a cake and snack brand. I designed and built the storefront so customers can browse treats and order for everyday cravings or special moments.",
    image: "/redesign/projects/mesxico.jpg",
    imageFit: "contain",
    tags: ["Design + build", "E-commerce", "Claude Code"],
    href: "https://www.mesxicofoods.com",
    cardBg: "#f7f7f7",
    buttonLabel: "View project",
  },
];
