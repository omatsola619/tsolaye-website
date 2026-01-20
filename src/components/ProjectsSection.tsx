import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: "Fitness AI Mobile App & Website",
        description: "A fintech platform that simplifies card payments while giving you so much flexibility on how to use them.",
        image: "/image/work1.png",
        tags: ["Design system", "UX/UI", "Components"]
    },
    {
        id: 2,
        title: "Hatchyverse Gaming Platform",
        description: "A fintech platform that simplifies card payments while giving you so much flexibility on how to use them.",
        image: "/image/work2.png",
        tags: ["Design system", "UX/UI", "Components"]
    },
    {
        id: 3,
        title: "BuildrHive Startup Website",
        description: "A fintech platform that simplifies card payments while giving you so much flexibility on how to use them.",
        image: "/image/work2.png",
        tags: ["Design system", "UX/UI", "Components"]
    },
    {
        id: 4,
        title: "Pill Pal Mobile App",
        description: "A fintech platform that simplifies card payments while giving you so much flexibility on how to use them.",
        image: "/image/work1.png",
        tags: ["Design system", "UX/UI", "Components"]
    },
    {
        id: 5,
        title: "Swiftcart AI Ecommerce Mobile App",
        description: "A fintech platform that simplifies card payments while giving you so much flexibility on how to use them.",
        image: "/image/work2.png",
        tags: ["Design system", "UX/UI", "Components"]
    },
    {
        id: 6,
        title: "Lagos Guide Mobile App",
        description: "A fintech platform that simplifies card payments while giving you so much flexibility on how to use them.",
        image: "/image/work1.png",
        tags: ["Design system", "UX/UI", "Components"]
    }
];

export default function ProjectsSection() {
    return (
        <section className="bg-black py-20 lg:py-32">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
                <div className="text-center mb-16 lg:mb-24">
                    <p className="text-gray-500 text-sm mb-4 font-medium">Recent Work</p>
                    <h2 className="text-white text-3xl lg:text-5xl font-semibold tracking-tight">Projects I've Worked On</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="bg-[#0A0C10] rounded-[24px] lg:rounded-[32px] overflow-hidden mb-6 lg:mb-8 border border-white/5 relative aspect-[1.4] transition-transform duration-500 group-hover:scale-[1.02]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="pl-2">
                                <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4">{project.title}</h3>
                                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 max-w-md">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-1.5 rounded-full border border-white/10 text-gray-400 text-xs lg:text-sm bg-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-20 lg:mt-32 flex justify-center">
                    <Link
                        href="/projects"
                        className="flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <span className="text-sm font-medium">View all Projects</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
