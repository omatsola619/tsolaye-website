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
                                    <path d="M22 7H18V5H22V7ZM15.65 9.07C16.29 9.38 16.79 9.99 16.79 10.97C16.79 11.23 16.75 11.48 16.68 11.72C17.43 12.03 17.84 12.68 17.84 13.52C17.84 15.39 16.32 16.2 14.33 16.2H10.1V7.83H14.19C15.21 7.83 15.65 8.16 15.65 9.07ZM12.19 9.61V11.21H13.88C14.49 11.21 14.73 11 14.73 10.43C14.73 9.87 14.46 9.61 13.9 9.61H12.19ZM12.19 12.79V14.47H14.16C14.9 14.47 15.22 14.28 15.22 13.62C15.22 13.06 14.94 12.79 14.21 12.79H12.19ZM2 19V5H19C20.65 5 22 6.35 22 8V19H2Z" fillRule="evenodd" clipRule="evenodd" opacity="0" />
                                    <path d="M8.57 6.64H2V17.36H4.27V9H8.57V6.64ZM14.92 11.08C15.63 11.42 16.19 12.1 16.19 13.19C16.19 13.48 16.15 13.75 16.07 14.02C16.91 14.37 17.36 15.09 17.36 16.02C17.36 18.1 15.67 19 13.46 19H8.76V9.7H13.3C14.44 9.7 14.92 10.07 14.92 11.08ZM11.08 11.68V13.46H12.96C13.64 13.46 13.9 13.22 13.9 12.59C13.9 11.97 13.6 11.68 12.98 11.68H11.08ZM11.08 15.21V17.08H13.27C14.09 17.08 14.45 16.87 14.45 16.13C14.45 15.51 14.14 15.21 13.33 15.21H11.08ZM22 7.78H17.56V5.56H22V7.78Z" />
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
                        <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
