"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect if screen is mobile-sized (< 768px)
    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenWidth(); // Run on mount
        window.addEventListener("resize", checkScreenWidth);
        return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);

    // Handle scroll position
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Handle the navbar visibility based on scroll direction
            if (currentScrollPos > prevScrollPos && visible) {
                setVisible(false); // Hide on scroll down
            } else if (currentScrollPos < prevScrollPos) {
                setVisible(true); // Show on scroll up
            }

            setPrevScrollPos(currentScrollPos);
            setScrolled(currentScrollPos > 50); // Change navbar color after 50px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <motion.nav
            className={`z-50 fixed top-0 w-full min-h-[60px] text-white transition-all duration-300 
            ${isMobile ? (window.pageYOffset === 0 ? "bg-transparent" : "bg-[#011a38]") : scrolled ? "bg-[#011a38]" : "bg-transparent"}`}
            animate={{ y: isMobile || visible ? 0 : "-100%" }} // Only hide on scroll for desktop
            transition={{ type: "tween", duration: 0.15, ease: "easeInOut" }}
        >
            <div className="flex items-center justify-between px-4 py-3 xl:px-48 md:px-10">
                
                {/* Mobile Logo */}
                <div className="xl:hidden flex items-center z-[100]">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/images/mathsoc-logo-longform.svg"
                            alt="MathSoc Logo"
                            width={150}
                            height={50}
                            className="h-10 w-auto invert"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:flex-1 md:justify-end xl:justify-center items-center space-x-6">
                    <div className="flex items-center space-x-6 xl:space-x-12 flex-nowrap">
                        <Link href="/" className="hidden xl:block min-w-[150px]">
                            <Image
                                src="/images/mathsoc-logo-longform.svg"
                                alt="MathSoc Logo"
                                width={150}
                                height={50}
                                className="h-10 w-auto invert"
                                priority
                            />
                        </Link>
                        <Link href="/about-us" className="hover:text-[#2390c6]">About Us</Link>
                        <Link href="/events" className="hover:text-[#2390c6]">Events</Link>
                        <Link href="https://drive.google.com/drive/folders/1v7WrVhAzZxtIhkEXeDMUiaoKF8jHkV96" className="hover:text-[#2390c6]">Resources</Link>
                        <Link href="/sponsors" className="hover:text-[#2390c6]">Sponsors</Link>
                        <Link href="/contact-us" className="text-center hover:text-[#2390c6]">Contact Us</Link>
                        <Link href="https://unswmathsoc.square.site/" className="hover:text-[#2390c6] flex flex-row">
                            Shop
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <Button 
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </Button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 30 }}
                        className="fixed inset-0 w-full h-screen bg-[#011a38] text-white flex flex-col items-center justify-center space-y-8 text-2xl font-semibold z-50"
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-6 right-6 text-gray-300 hover:text-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation Links */}
                        <Link href="/about-us" className="py-2 text-white hover:underline" onClick={() => setIsOpen(false)}>About Us</Link>
                        <Link href="/events" className="py-2 text-white hover:underline" onClick={() => setIsOpen(false)}>Events</Link>
                        <Link href="/resources" className="py-2 text-white hover:underline" onClick={() => setIsOpen(false)}>Resources</Link>
                        <Link href="/sponsors" className="py-2 text-white hover:underline" onClick={() => setIsOpen(false)}>Sponsors</Link>
                        <Link href="/contact-us" className="py-2 text-white hover:underline" onClick={() => setIsOpen(false)}>Contact Us</Link>
                        <Link href="https://unswmathsoc.square.site/" className="hover:text-[#2390c6] flex flex-row">
                            Shop
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
