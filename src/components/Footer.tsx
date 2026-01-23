import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 lg:mb-32">
                    {/* Branding */}
                    <div className="lg:col-span-6">
                        <h3 className="text-white text-xl font-medium tracking-widest uppercase mb-6 font-[family-name:var(--font-happy-go)]">EYEOYIBO TSOLAYE</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Product Designer crafting exceptional digital experiences with a focus on user-centered design and innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white text-sm tracking-widest uppercase mb-8">QUICK LINKS</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-base">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-base">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-base">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-base">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white text-sm tracking-widest uppercase mb-8">CONNECT</h4>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/eyeoyibo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13.44 10.374 13.44 13.396V19H10.604V8H13.441V9.558C14.754 7.056 20 6.628 20 12.28V19Z" />
                                </svg>
                            </a>
                            <a href="mailto:Suntsola924@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 6L12 13L2 6" />
                                </svg>
                            </a>
                            <a href="https://www.behance.net/sundaysola" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 7h-4v-2h4v2zm1.8 2.9h-8.8v1.6h5.3c-.2 2-.9 2.5-3.3 2.5-.9 0-3.3-.2-3.3-3.1 0-2.6 2-3.5 3.5-3.5 1.7 0 3 .6 3.4 2.5h3.2c-.3-3.6-3.2-5-6.6-5-4 0-6.9 2.4-6.9 6.2 0 3.7 2.7 6.1 7.1 6.1 3.5 0 6.1-1.6 6.5-5.3V9.9zM7.5 7h-5v10h5c2.9 0 4.6-1.5 4.6-5s-1.7-5-4.6-5zm-.1 7.7h-2.5v-5.4h2.5c1.1 0 1.9.5 1.9 2.7 0 2.2-.8 2.7-1.9 2.7z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Eyeoyibo Tsolaye. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-gray-500 text-sm cursor-default">
                            Privacy Policy
                        </span>
                        <span className="text-gray-500 text-sm cursor-default">
                            Terms of Service
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
