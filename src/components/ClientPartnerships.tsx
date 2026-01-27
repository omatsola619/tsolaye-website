"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function ClientPartnerships() {
    return (
        <section className="bg-[#111010] py-24 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-20 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-500 text-sm mb-2 font-medium"
                >
                    Client Partnerships
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white text-3xl lg:text-4xl font-semibold mb-10 tracking-tight font-[family-name:var(--font-happy-go)]"
                >
                    Trusted by Industry Leaders
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 opacity-100 max-w-5xl mx-auto"
                >
                    {/* Hatchyverse */}
                    <motion.div variants={itemVariants} className="flex items-center gap-2 group hover:opacity-80 transition-opacity cursor-pointer">
                        <Image
                            src="/image/brand1.svg"
                            alt="Hatchyverse"
                            width={222}
                            height={61}
                            className="h-8 lg:h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                    </motion.div>

                    {/* Mobile App Builders */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 group hover:opacity-80 transition-opacity cursor-pointer">
                        <Image
                            src="/image/brand2.jpg.svg"
                            alt="Mobile App Builders"
                            width={222}
                            height={61}
                            className="h-10 lg:h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                    </motion.div>

                    {/* Dialecta */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 group hover:opacity-80 transition-opacity cursor-pointer">
                        <Image
                            src="/image/brand3.svg"
                            alt="Dialecta"
                            width={222}
                            height={61}
                            className="h-8 lg:h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                    </motion.div>

                    {/* Perxels */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 group hover:opacity-80 transition-opacity cursor-pointer">
                        <Image
                            src="/image/brand4.svg"
                            alt="Perxels"
                            width={222}
                            height={61}
                            className="h-8 lg:h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
