"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen lg:h-[calc(100vh-88px)] overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1f35] to-[#0a0a0a]" />

            <div className="relative max-w-[1400px] mx-auto px-5 lg:px-20 py-8 lg:py-16 min-h-[calc(100vh-88px)] lg:h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center lg:h-full">
                    {/* Left Content */}
                    <div className="space-y-5 lg:space-y-7">
                        {/* Label */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-gray-400 text-[11px] lg:text-[13px] tracking-[0.2em] uppercase font-normal"
                        >
                            PRODUCT DESIGNER
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-white text-[32px] lg:text-[72px] xl:text-[80px] font-black leading-[1.1] lg:leading-[1.05] tracking-[0.02em] uppercase font-[family-name:var(--font-happy-go)]"
                        >
                            EYEOYIBO
                            <br />
                            TSOLAYE
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-gray-300 text-[13px] lg:text-[15px] leading-[1.6] lg:leading-[1.7] max-w-[480px] font-normal"
                        >
                            I help founders make the right product decisions before wrong ones
                            get expensive. By combining real user insight with AI where it
                            sharpens clarity, I turn uncertainty into products that ship faster
                            and work better.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="flex flex-col lg:flex-row gap-3 lg:gap-4"
                        >
                            <Link
                                href="/book"
                                className="flex items-center justify-center gap-2 px-6 py-3.5 lg:px-7 lg:py-4 rounded-full border border-white/20 hover:border-white/40 transition-all group bg-black/40"
                            >
                                <span className="text-white text-[13px] lg:text-[15px] font-normal">
                                    Book a call
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
                            </Link>

                            <Link
                                href="/contact"
                                className="flex items-center justify-center px-6 py-3.5 lg:px-7 lg:py-4 rounded-full bg-white hover:bg-gray-100 transition-colors"
                            >
                                <span className="text-black text-[13px] lg:text-[15px] font-normal">
                                    Send Email
                                </span>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                            className="flex gap-6 lg:gap-12 pt-6 lg:pt-6 pb-8 lg:pb-0"
                        >
                            <div className="flex items-start gap-2 lg:gap-3">
                                <div className="w-[1px] h-12 lg:h-14 bg-white/20" />
                                <div>
                                    <p className="text-white text-[28px] lg:text-[48px] font-black leading-none font-[family-name:var(--font-happy-go)]">
                                        3+
                                    </p>
                                    <p className="text-gray-400 text-[10px] lg:text-[12px] mt-1.5 lg:mt-2 font-normal">
                                        Years Experience
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 lg:gap-3">
                                <div className="w-[1px] h-12 lg:h-14 bg-white/20" />
                                <div>
                                    <p className="text-white text-[28px] lg:text-[48px] font-black leading-none font-[family-name:var(--font-happy-go)]">
                                        25+
                                    </p>
                                    <p className="text-gray-400 text-[10px] lg:text-[12px] mt-1.5 lg:mt-2 font-normal">
                                        Projects Completed
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 lg:gap-3">
                                <div className="w-[1px] h-12 lg:h-14 bg-white/20" />
                                <div>
                                    <p className="text-white text-[28px] lg:text-[48px] font-black leading-none font-[family-name:var(--font-happy-go)]">
                                        10+
                                    </p>
                                    <p className="text-gray-400 text-[10px] lg:text-[12px] mt-1.5 lg:mt-2 font-normal">
                                        Global Clients
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end mt-0 lg:mt-0"
                    >
                        <div className="relative w-full max-w-[340px] lg:max-w-[600px] aspect-[3/4] lg:aspect-[3/4] rounded-[32px] lg:rounded-[40px] overflow-hidden">
                            <Image
                                src="/image/hero-img.png"
                                alt="Tsolaye - Product Designer"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
