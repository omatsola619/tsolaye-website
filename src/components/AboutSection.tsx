import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="bg-[#111010] py-10 lg:py-22">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
                    {/* Profile Image */}
                    <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-8 border-2 border-white/10">
                        <Image
                            src="/image/idesign.svg"
                            alt="Eyeoyibo Tsolaye"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Label */}
                    <p className="text-gray-500 text-[11px] lg:text-[13px] tracking-[0.2em] uppercase font-normal mb-6">
                        ABOUT ME
                    </p>

                    {/* Heading */}
                    <h2 className="text-white text-3xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-8 font-[family-name:var(--font-happy-go)]">
                        I Design for Teams That Can’t
                        <br className="hidden lg:block" />
                        Afford Mistakes
                    </h2>

                    {/* Description */}
                    <div className="space-y-6 text-gray-400 text-sm lg:text-base leading-relaxed max-w-3xl">
                        <p>
                            I’m Eyeoyibo Tsolaye, a Product Designer with over 3 years of experience helping founders and product teams navigate complex product decisions with clarity.
                        </p>
                        <p>
                            I’ve worked with 10+ global clients across different industries, contributing to 25+ projects where the real challenge wasn’t UI, but unclear assumptions and rushed decisions showing up on screens. My focus is designing products that don’t just look good, but reduce risk and solve real problems for real people.
                        </p>
                        <p>
                            I believe strong products are built at the intersection of human intuition, clear thinking, and the right tools, including AI where it meaningfully improves decision-making. Whether it’s a mobile app, web platform, or design system, I approach every project holistically, starting with the decision before the design.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Feature 1 */}
                    <div className="border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-colors bg-[#0A0C10]">
                        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="4" />
                            </svg>
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">User-centered Design</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I believe in putting users first, creating intuitive experiences that solve real problems.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-colors bg-[#0A0C10]">
                        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">Fast Execution</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Speed matters. I deliver high-quality work quickly without compromising on excellence.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-colors bg-[#0A0C10]">
                        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                                <path d="M19.4 15C20.6 15 21.6 14 21.6 12.8C21.6 11.6 20.6 10.6 19.4 10.6C18.2 10.6 17.2 11.6 17.2 12.8C17.2 14 18.2 15 19.4 15Z" />
                                <path d="M4.6 15C5.8 15 6.8 14 6.8 12.8C6.8 11.6 5.8 10.6 4.6 10.6C3.4 10.6 2.4 11.6 2.4 12.8C2.4 14 3.4 15 4.6 15Z" />
                                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
                                <path d="M12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22Z" />
                            </svg>
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">AI-Powered Decisions</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leveraging cutting-edge AI tools to make smarter, data-driven design decisions.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-colors bg-[#0A0C10]">
                        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.64169 1.54871 7.04096 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3094 9.93791 22.4518 9.22248 22.4518 8.5C22.4518 7.77751 22.3094 7.06208 22.0329 6.39464C21.7563 5.72719 21.351 5.12075 20.84 4.61V4.61Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">Passionate Collaboration</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I thrive working with teams, bringing creative ideas to life through partnership.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
