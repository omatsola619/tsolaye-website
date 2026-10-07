import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Genos, DM_Sans, Manrope } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const happyGo = localFont({
  src: "../../public/font/HAPPY GO REGULAR/happy go.ttf",
  variable: "--font-happy-go",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const genos = Genos({
  subsets: ["latin"],
  variable: "--font-genos",
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyeoyibotsolaye.com"),
  title: "Tsolaye - Product Designer",
  description:
    "Product designer building clear, accessible mobile and web products. Case studies: Fitness AI, Pill Pal, SwiftCart and Pockit.",
  openGraph: {
    title: "Tsolaye - Product Designer",
    description:
      "Product designer building clear, accessible mobile and web products. Case studies: Fitness AI, Pill Pal, SwiftCart and Pockit.",
    type: "website",
    siteName: "Tsolaye Eyeoyibo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsolaye - Product Designer",
    description:
      "Product designer building clear, accessible mobile and web products. Case studies: Fitness AI, Pill Pal, SwiftCart and Pockit.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${happyGo.variable} ${genos.variable} ${dmSans.variable} ${manrope.variable} antialiased font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

