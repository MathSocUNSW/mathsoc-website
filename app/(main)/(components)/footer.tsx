"use client";

import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"; 
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-[#011a38] text-white py-8 px-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-lg font-bold mb-2">Quick Links</h4>
                    <nav className="flex flex-wrap gap-x-4 gap-y-2">
                        <Link href="/about-us" className="hover:text-[#2390c6]">About Us</Link>
                        <Link href="/events" className="hover:text-[#2390c6]">Events</Link>
                        <Link href="https://drive.google.com/drive/folders/1v7WrVhAzZxtIhkEXeDMUiaoKF8jHkV96" className="hover:text-[#2390c6]">Resources</Link>
                        <Link href="/sponsors" className="hover:text-[#2390c6]">Sponsors</Link>
                        <Link href="/contact-us" className="hover:text-[#2390c6]">Contact Us</Link>
                    </nav>
                </div>
                <div className="md:text-right">
                    <h4 className="text-lg font-bold mb-2">Follow Us</h4>
                    <div className="flex justify-start md:justify-end gap-4">
                        <a href="https://www.facebook.com/unswmathsoc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                        <a href="https://www.instagram.com/unswmathsoc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                        <a href="https://www.tiktok.com/@unswmathsoc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                        <a href="https://discord.gg/Q6qfdJwPm8" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <FaDiscord className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                        <a href="https://au.linkedin.com/company/unsw-mathematics-society" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="h-6 w-6 hover:text-[#2390c6]" />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="pt-6 mt-6 border-t border-white/20 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} UNSW Mathematics Society. All rights reserved.</p>
                <p className="mt-2">Proudly supported by Arc UNSW</p>
            </div>
        </footer>
    );
};
