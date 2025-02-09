"use client";

import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"; 
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-[#011a38] text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
                <div className="mb-4 md:mb-0 w-full md:w-auto md:flex-1">
                    <h4 className="text-lg font-bold mb-2">Quick Links</h4>
                    <nav className="flex flex-row space-x-4">
                        <Link href="/about-us" className="hover:text-[#2390c6]">About Us</Link>
                        <Link href="/events" className="hover:text-[#2390c6]">Events</Link>
                        <Link href="/resources" className="hover:text-[#2390c6]">Resources</Link>
                        <Link href="/sponsors" className="hover:text-[#2390c6]">Sponsors</Link>
                        <Link href="/contact-us" className="hover:text-[#2390c6]">Contact Us</Link>
                    </nav>
                </div>
                <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-bold mb-2 text-left md:text-right">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/unswmathsoc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                        <a href="https://www.instagram.com/unswmathsoc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                        <a href="https://www.tiktok.com/@unswmathsoc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                        <a href="https://discord.gg/9Cx2JHwY" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <FaDiscord className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                        <a href="https://au.linkedin.com/company/unsw-mathematics-society" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="t-8 pt-4 text-center text-sm">
                &copy; {new Date().getFullYear()} UNSW Mathematics Society. All rights reserved.
            </div>
            <div className="mt-4 text-center text-sm px-4">
                <p>Proudly supported by Arc UNSW</p>
            </div>
        </footer>
    );
};
