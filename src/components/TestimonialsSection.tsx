"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        quote: "Working with Eyeoyibo was an absolute game-changer. The design system they created transformed our entire product line.",
        rating: 5,
        image: "/image/idesign.svg" // Using placeholder or existing image for now
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Lead, InnovateCorp",
        quote: "Exceptional attention to detail and a deep understanding of user needs. The new mobile app designs exceeded our expectations.",
        rating: 5,
        image: "/image/idesign.svg"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Founder, CreativeSpace",
        quote: "A true partner in the design process. They didn't just design screens; they helped us refine our product strategy.",
        rating: 5,
        image: "/image/idesign.svg"
    },
    {
        id: 4,
        name: "David Kim",
        role: "CTO, FutureStream",
        quote: "Fast, professional, and incredibly talented. The turnaround time was impressive without sacrificing quality.",
        rating: 5,
        image: "/image/idesign.svg"
    }
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-black py-20 lg:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-gray-500 text-[11px] lg:text-[13px] tracking-[0.2em] uppercase font-normal mb-4">
                        Client Testimonials
                    </p>
                    <h2 className="text-white text-3xl lg:text-5xl font-semibold tracking-tight font-[family-name:var(--font-happy-go)]">
                        What People Say About Me
                    </h2>
                </motion.div>

                {/* Desktop View (Grid) & Mobile View (Slider support structure) */}
                {/* For this specific design, it looks like a 2-column grid that might slide. 
            Let's implement a simple grid for now that responds to the slider controls if we are treating pages of 2. */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {/* chunking into pairs for desktop slide effect if needed, or just list them. 
                        The design shows 2 cards visible. Let's group them. */}
                            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, pageIndex) => (
                                <div key={pageIndex} className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-1">
                                    {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).map((testimonial) => (
                                        <div key={testimonial.id} className="bg-[#0A0C10] border border-white/10 rounded-[24px] p-8 lg:p-10 relative group hover:border-white/20 transition-all">
                                            {/* Quote Icon */}
                                            <div className="absolute top-8 left-8 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center -translate-y-1/2 -translate-x-1/4">
                                                <span className="text-gray-500 text-4xl font-serif leading-none opacity-50">“</span>
                                            </div>

                                            {/* Stars */}
                                            <div className="flex gap-1 mb-6 mt-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" className="text-[#FFC107]">
                                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                                    </svg>
                                                ))}
                                            </div>

                                            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                                                "{testimonial.quote}"
                                            </p>

                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 relative">
                                                    {/* Using a placeholder or the uploaded image as a generic user avatar for now since we have dummy data */}
                                                    <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-xs text-white">
                                                        IMG
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination / Navigation */}
                    <div className="flex justify-center mt-12 gap-3">
                        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`transition-all duration-300 rounded-full ${activeIndex === idx ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section >
    );
}
