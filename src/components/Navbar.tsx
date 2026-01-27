"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#0d0d0d] border-b border-white/10 relative z-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
          <div className="flex items-center justify-between h-[72px] lg:h-[88px]">
            {/* Logo Section */}
            <Link href="/" className="flex flex-col gap-0.5">
              <span className="text-white text-[16px] lg:text-[22px] font-black tracking-[0.05em] leading-none uppercase">
                TSOLAYE
              </span>
              <span className="text-gray-400 text-[11px] lg:text-[13px] font-normal tracking-normal leading-none">
                Product Designer
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-12">
              <Link
                href="#home"
                className="text-white text-[14px] lg:text-[15px] font-normal hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#projects"
                className="text-gray-400 text-[14px] lg:text-[15px] font-normal hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#about"
                className="text-gray-400 text-[14px] lg:text-[15px] font-normal hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 text-[14px] lg:text-[15px] font-normal hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Download CV Button */}
            <a
              href="/cv/Tsolaye-cv.pdf"
              download
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-all group"
            >
              <span className="text-white text-[13px] lg:text-[14px] font-normal">
                Download Cv
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              >
                <path
                  d="M1 1L13 13M13 13V1M13 13H1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col h-full px-6 py-8">
          {/* Close Button */}
          <div className="flex justify-end mb-12">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-8">
            <Link
              href="#home"
              className="text-white text-[32px] font-normal hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 text-[32px] font-normal hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-gray-400 text-[32px] font-normal hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 text-[32px] font-normal hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          {/* Download CV Button */}
          <div className="mt-auto">
            <a
              href="/cv/Tsolaye-cv.pdf"
              download
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all group w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-white text-[15px] lg:text-[16px] font-normal">
                Download Cv
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              >
                <path
                  d="M1 1L13 13M13 13V1M13 13H1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
