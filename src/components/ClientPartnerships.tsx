import React from 'react';
import Image from 'next/image';

export default function ClientPartnerships() {
    return (
        <section className="bg-black py-24 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-20 text-center">
                <p className="text-gray-500 text-sm mb-2 font-medium">Client Partnerships</p>
                <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-10 tracking-tight">Trusted by Industry Leaders</h2>

                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 opacity-100 max-w-5xl mx-auto">
                    {/* Hatchyverse */}
                    <div className="flex items-center gap-2 group hover:opacity-80 transition-opacity cursor-pointer">
                        <Image
                            src="/image/brand1.svg"
                            alt="Hatchyverse"
                            width={222}
                            height={61}
                            className="h-8 lg:h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                    </div>

                    {/* Mobile App Builders */}
                    <div className="flex items-center gap-3 group hover:opacity-80 transition-opacity cursor-pointer">
                        <Image
                            src="/image/brand2.jpg.svg"
                            alt="Mobile App Builders"
                            width={222}
                            height={61}
                            className="h-10 lg:h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                    </div>

                    {/* Dialecta */}
                    <div className="flex items-center gap-3 group hover:opacity-80 transition-opacity cursor-pointer">
                        <Image
                            src="/image/brand3.svg"
                            alt="Dialecta"
                            width={222}
                            height={61}
                            className="h-8 lg:h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                    </div>

                    {/* Perxels */}
                    <div className="flex items-center gap-3 group hover:opacity-80 transition-opacity cursor-pointer">
                        <Image
                            src="/image/brand4.svg"
                            alt="Perxels"
                            width={222}
                            height={61}
                            className="h-8 lg:h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
