"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GetInTouchSection() {
    return (
        <section id="contact" className="bg-[#111010] py-20 lg:py-32">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-20 text-center">

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-500 text-[11px] lg:text-[13px] tracking-[0.2em] uppercase font-normal mb-4"
                >
                    Get In Touch
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white text-3xl lg:text-5xl font-semibold tracking-tight mb-6 font-[family-name:var(--font-happy-go)]"
                >
                    Ready to build
                    <br />
                    something great?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-sm lg:text-base mb-16 max-w-2xl mx-auto leading-relaxed"
                >
                    Let's collaborate and bring your vision to life. I'm always open to discussing new projects, creative ideas, or opportunities.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
                    {/* Email Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a href="mailto:Suntsola924@gmail.com" className="group h-full block">
                            <div className="border border-white/10 rounded-2xl p-10 lg:p-12 hover:border-white/20 transition-all bg-[#0A0C10] flex flex-col items-center justify-center h-full">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-gray-400 group-hover:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 6L12 13L2 6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-white text-xl font-semibold mb-2 text-[#1a1f35]">Email</h3>
                                <p className="text-gray-500 text-sm">Get In Touch Via Email</p>
                            </div>
                        </a>
                    </motion.div>

                    {/* Schedule Call Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a href="https://calendly.com/suntsola924/30min" target="_blank" rel="noopener noreferrer" className="group h-full block">
                            <div className="border border-white/10 rounded-2xl p-10 lg:p-12 hover:border-white/20 transition-all bg-[#0A0C10] flex flex-col items-center justify-center h-full">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-gray-400 group-hover:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1468 21.5901 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9449 19.82 21.919C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.2436 6.72159 15.161 5.15 12.72C3.49656 10.1695 2.46889 7.26623 2.15 4.22997C2.12412 3.95294 2.15693 3.67385 2.24614 3.41031C2.33535 3.14677 2.4789 2.90453 2.66698 2.69954C2.85507 2.49454 3.08331 2.33132 3.33758 2.22019C3.59186 2.10907 3.8665 2.05249 4.144 2.05997H7.13C7.63222 2.05608 8.11794 2.23594 8.502 2.56816C8.88607 2.90038 9.14418 3.36402 9.232 3.87997C9.39517 4.88785 9.64553 5.88145 9.98 6.84997C10.0863 7.15573 10.1092 7.48529 10.0463 7.80336C9.98336 8.12142 9.83707 8.416 9.623 8.65497L8.353 9.92497C9.7739 12.4485 11.8488 14.5003 14.39 15.9L15.66 14.63C15.9015 14.4178 16.1983 14.2729 16.5181 14.2097C16.838 14.1464 17.1691 14.1673 17.476 14.27C18.4526 14.5985 19.4533 14.8436 20.468 15.002C20.9881 15.0872 21.4568 15.3456 21.7915 15.7329C22.1262 16.1202 22.3061 16.6119 22.3 17.13V16.92Z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-white text-xl font-semibold mb-2">Schedule a Call</h3>
                                <p className="text-gray-500 text-sm">Let's discuss your projects</p>
                            </div>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href="mailto:Suntsola924@gmail.com"
                        className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                        Get Started
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M1 11L11 1M11 1H3M11 1V9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
