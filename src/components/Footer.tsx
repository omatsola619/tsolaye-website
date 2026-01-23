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
                                <Link href="#home" className="text-gray-400 hover:text-white transition-colors text-base">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors text-base">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-base">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-base">
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
                                <svg width="24" height="24" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-auto">
                                    <path d="M5.78793 0.00113793C6.32823 -0.00875263 6.86775 0.0458619 7.39473 0.16379C7.83843 0.259301 8.25969 0.437031 8.63612 0.687531C8.98378 0.936626 9.25886 1.27151 9.43374 1.65857C9.63474 2.13452 9.7317 2.6469 9.71832 3.16229C9.74114 3.7282 9.59455 4.28821 9.29682 4.77255C8.9836 5.22999 8.55065 5.59532 8.04388 5.82979C8.73159 6.01259 9.33059 6.43131 9.73316 7.01065C10.1196 7.6245 10.3139 8.3371 10.2916 9.05925C10.3043 9.63504 10.1836 10.2061 9.93855 10.7289C9.71205 11.1849 9.38041 11.5824 8.97018 11.8894C8.54783 12.1931 8.07254 12.4177 7.56795 12.5522C7.04467 12.6949 6.50408 12.7666 5.96115 12.7653H0V0.00113793H5.78793ZM5.44397 5.16373C5.86849 5.18098 6.28637 5.05568 6.62927 4.80833C6.79349 4.66419 6.92124 4.48417 7.00231 4.28266C7.08337 4.08115 7.1155 3.86374 7.09614 3.64781C7.10712 3.3956 7.05619 3.14451 6.94766 2.91587C6.8556 2.73383 6.71245 2.58169 6.53524 2.47752C6.35575 2.36286 6.15409 2.28616 5.943 2.25225C5.71397 2.2085 5.48091 2.18861 5.24766 2.19288H2.70054V5.17511H5.44397V5.16373ZM5.59244 10.5979C5.84917 10.6014 6.10537 10.5741 6.35543 10.5166C6.58394 10.4669 6.80066 10.3744 6.99385 10.2442C7.18312 10.114 7.33604 9.93894 7.43845 9.73508C7.55719 9.47512 7.61175 9.19112 7.59764 8.90636C7.62339 8.64686 7.58853 8.385 7.49573 8.14084C7.40294 7.89668 7.25468 7.67671 7.06232 7.49779C6.6546 7.20171 6.15494 7.05503 5.64936 7.08303H2.70054V10.5979H5.59244Z" fill="currentColor" />
                                    <path d="M14.1378 10.5508C14.3498 10.7445 14.5995 10.8937 14.8717 10.9893C15.144 11.085 15.4331 11.125 15.7215 11.1071C16.1788 11.1185 16.6272 10.9813 16.9976 10.7167C17.2989 10.5235 17.5271 10.2376 17.6467 9.90345H19.8004C19.5709 10.8548 19.0105 11.6968 18.2167 12.2831C17.4551 12.7814 16.5551 13.0338 15.6415 13.0052C14.9895 13.0137 14.3424 12.8928 13.7386 12.6498C13.1925 12.4253 12.7026 12.0858 12.3034 11.6552C11.9056 11.204 11.6 10.6812 11.4035 10.1157C11.1828 9.48356 11.0748 8.81852 11.0843 8.15005C11.0802 7.49279 11.1919 6.83983 11.4142 6.22018C11.7129 5.34846 12.284 4.59243 13.0455 4.0606C13.8071 3.52876 14.7199 3.24846 15.6531 3.25991C16.342 3.24571 17.0233 3.40468 17.6327 3.72184C18.1836 4.01966 18.6588 4.43675 19.0226 4.94173C19.3947 5.47162 19.6615 6.06634 19.8086 6.69431C19.97 7.36865 20.0276 8.06309 19.9794 8.75431H13.5646C13.5126 9.40373 13.7181 10.0477 14.1378 10.5508ZM16.9522 5.69644C16.7727 5.51941 16.5568 5.38237 16.319 5.29455C16.0813 5.20673 15.8272 5.17017 15.5739 5.18734C15.2378 5.1747 14.9042 5.24811 14.6055 5.40041C14.3687 5.52895 14.1597 5.70189 13.9902 5.90952C13.84 6.10418 13.7281 6.32485 13.6602 6.56013C13.5991 6.75635 13.5609 6.95881 13.5464 7.16357H17.5197C17.4851 6.62978 17.2879 6.11873 16.9539 5.69725L16.9522 5.69644Z" fill="currentColor" />
                                    <path d="M18.013 0.853455H13.0342V2.10832H18.013V0.853455Z" fill="currentColor" />
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
