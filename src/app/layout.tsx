import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Tsolaye - Product Designer",
  description: "Product Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${happyGo.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}

