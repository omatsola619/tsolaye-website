"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "sol omayoglu",
        role: "Founder, Hatchyverse",
        quote: "Tsolaye is passionate and hard working, does detailed work very effectively, uses his time well and is a value add to the entire team",
        rating: 4,
        image: "/image/client1.svg"
    },
    {
        id: 2,
        name: "Ananya Bhuyan",
        role: "Product Designer, India",
        quote: "I had the pleasure of working with Tsolaye, and he's one of the most dedicated professionals I've encountered.",
        rating: 5,
        image: "/image/client2.svg"
    },
    {
        id: 3,
        name: "Joseph Brendan",
        role: "Founder, Dev&Design",
        quote: "I had the privilege of mentoring and supervising Eyeoyibo Tsolaye during a design project, and I can confidently say he is a rare talent.",
        rating: 5,
        image: "/image/client3.svg"
    },
    {
        id: 4,
        name: "Kosta Corriveau",
        role: "CEO, Mobile App Builders LLC",
        quote: "I had the pleasure of working with Tsolaye who delivered two websites and mobile app designs with exceptional professionalism.",
        rating: 3.5,
        image: "/image/client4.svg"
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

    const renderStars = (rating: number) => {
        return (
            <div className="flex gap-1.5 mb-6 mt-8">
                {[1, 2, 3, 4, 5].map((star) => {
                    const isFull = star <= rating;
                    const isHalf = star - 0.5 === rating;

                    return (
                        <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {isFull ? (
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFC107" />
                            ) : isHalf ? (
                                <>
                                    <defs>
                                        <linearGradient id={`half-star-${star}`}>
                                            <stop offset="50%" stopColor="#FFC107" />
                                            <stop offset="50%" stopColor="#374151" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={`url(#half-star-${star})`} />
                                </>
                            ) : (
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#374151" />
                            )}
                        </svg>
                    );
                })}
            </div>
        );
    };

    return (
        <section className="bg-[#111010] py-20 lg:py-32 overflow-hidden">
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
                            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, pageIndex) => (
                                <div key={pageIndex} className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-1 pt-6">
                                    {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).map((testimonial) => (
                                        <div key={testimonial.id} className="bg-[#050505] border border-white/5 rounded-[24px] p-8 lg:p-10 relative group hover:border-white/10 transition-all">
                                            {/* Quote Icon */}
                                            <div className="absolute top-0 left-8 w-12 h-12 bg-[#111010] rounded-full flex items-center justify-center -translate-y-1/2 border border-white/5 z-10">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 11L8 11C6.89543 11 6 11.8954 6 13L6 17C6 18.1046 6.89543 19 8 19L10 19C11.1046 19 12 18.1046 12 17L12 13C12 11.8954 11.1046 11 10 11Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 13H10V7C10 5.89543 10.8954 5 12 5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M20 11L18 11C16.8954 11 16 11.8954 16 13L16 17C16 18.1046 16.8954 19 18 19L20 19C21.1046 19 22 18.1046 22 17L22 13C22 11.8954 21.1046 11 20 11Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M22 13H20V7C20 5.89543 20.8954 5 22 5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>

                                            {/* Stars */}
                                            {renderStars(testimonial.rating)}

                                            <p className="text-[#888888] text-base lg:text-lg leading-relaxed mb-8 font-light">
                                                "{testimonial.quote}"
                                            </p>

                                            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                    />
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
