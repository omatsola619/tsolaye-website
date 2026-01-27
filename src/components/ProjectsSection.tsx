"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Fitness AI Mobile App & Website",
        description: "A data-driven fitness platform that helps users track calories, habits, and progress with clarity instead of complexity. I designed the mobile app and web experience to turn raw health data into actionable insights, using AI to reduce friction and improve daily adherence.",
        image: "/image/project1.png",
        tags: ["Design system", "UX/UI", "Components"],
        link: "https://fitness-ai.fit"
    },
    {
        id: 2,
        title: "Hatchyverse Gaming \n Platform",
        description: "A Web3-powered gaming ecosystem built to merge play, ownership, and community. I worked on designing scalable interfaces that balance visual storytelling with usability ensuring complex blockchain concepts feel accessible to everyday players, prioritizing engagement and progression.",
        image: "/image/project2.png",
        tags: ["Design system", "UX/UI", "Components"],
        link: "https://hatchyverse.com"
    },
    {
        id: 3,
        title: "BuildrHive Startup Website",
        description: "A startup platform designed to help founders build products with zero upfront cost, exchanging early execution for future equity. I designed the website to clearly communicate trust, value, and process helping non-technical founders understand how ideas move from concept to product.",
        image: "/image/project3.png",
        tags: ["Design system", "UX/UI", "Components"],
        link: "https://www.buildrhive.com"
    },
    {
        id: 4,
        title: "Bitlock Web3 Mobile App",
        description: "A secure digital finance app focused on trust, simplicity, and usability in Web3. I designed the mobile experience to make complex financial actions feel safe, intuitive, and predictable reducing cognitive load while increasing user confidence. The interface prioritizes clarity, hierarchy, and seamless interaction.",
        image: "/image/project4.png",
        tags: ["Design system", "UX/UI", "Components"],
        link: "https://www.behance.net/gallery/212266943/BitLock-Web3-Mobile-App"
    },
    {
        id: 5,
        title: "Swiftcart AI Ecommerce Mobile App",
        description: "An AI-powered e-commerce voice shopping assistant mobile app built to help users discover products faster and shop smarter. I designed the experience to reduce search friction, personalize discovery, and guide users from browsing to checkout with clarity.",
        image: "/image/project5.png",
        tags: ["Design system", "UX/UI", "Components"],
        link: "https://www.behance.net/gallery/240484695/SwiftCart-AI"
    },
    {
        id: 6,
        title: "Pill Pal Med Reminder Mobile App",
        description: "A health-focused mobile app designed to help users manage medications, routines, and adherence with ease. I crafted a calm, intuitive interface that simplifies reminders, progress tracking, and daily health check-ins, reducing anxiety around missed doses.",
        image: "/image/project6.png",
        tags: ["Design system", "UX/UI", "Components"],
        link: "https://www.behance.net/gallery/240883165/PILL-PAL"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="bg-[#111010] py-20 lg:py-32">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
                <div className="text-center mb-16 lg:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-500 text-[11px] lg:text-[13px] mb-4 font-medium uppercase tracking-[0.2em]"
                    >
                        Recent Work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white text-3xl lg:text-5xl font-black tracking-tight font-[family-name:var(--font-happy-go)]"
                    >
                        Projects I've Worked On
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer block bg-[#050505] rounded-[32px] p-6 lg:p-8 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            {/* Image Container */}
                            <div className="rounded-[20px] lg:rounded-[24px] overflow-hidden mb-8 relative aspect-[1.4] w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-white text-2xl lg:text-3xl font-black leading-tight font-[family-name:var(--font-happy-go)]">
                                    {project.title}
                                </h3>
                                <p className="text-[#888888] text-sm lg:text-base leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-2 rounded-full border border-white/10 text-[#888888] text-xs font-medium bg-transparent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-20 lg:mt-32 flex justify-center"
                >
                    <Link
                        href="https://www.behance.net/sundaysola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/5 transition-colors bg-[#050505]"
                    >
                        <span className="text-sm font-medium">View all Projects</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
