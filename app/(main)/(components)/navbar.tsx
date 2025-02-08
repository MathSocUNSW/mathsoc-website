// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false); // Track if scrolled

    // Handle scrolling behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // If the user is scrolling down, hide the navbar
            if (currentScrollPos > prevScrollPos && visible) {
                setVisible(false);
            } else if (currentScrollPos < prevScrollPos) {
                // If scrolling up, show the navbar
                setVisible(true);
            }

            // Update the previous scroll position
            setPrevScrollPos(currentScrollPos);

            // If scrolled down past 50px, set scrolled to true, else false
            if (currentScrollPos > 50) {
                setScrolled(true); // Add background when scrolled down
            } else {
                setScrolled(false); // Remove background when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <motion.nav
            className={`z-50 fixed top-0 w-full min-h-[60px] text-white transition-all duration-300 ${scrolled && visible ? 'bg-[#011a38]' : 'bg-transparent'}`}
            animate={{ y: visible ? 0 : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="flex items-center justify-between px-4 py-3 xl:px-48 md:px-10">
                
                {/* Mobile Logo (Hidden on Large Screens) */}
                <div className="xl:hidden flex items-center z-[100]">
                    <Link href="/">
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

                {/* Large Screen Nav */}
                <div className="hidden md:flex md:flex-1 md:justify-end xl:justify-center items-center space-x-6">
                    <div className="flex items-center space-x-12 xl:space-x-24">
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
                        <Link href="/about" className="hover:text-[#2390c6]">About</Link>
                        <Link href="/events" className="hover:text-[#2390c6]">Events</Link>
                        <Link href="https://drive.google.com/drive/folders/1v7WrVhAzZxtIhkEXeDMUiaoKF8jHkV96" className="hover:text-[#2390c6]">Resources</Link>
                        <Link href="/sponsors" className="hover:text-[#2390c6]">Sponsors</Link>
                        <Link href="/contact-us" className="text-center hover:text-[#2390c6]">Contact Us</Link>
                        <Link href="https://unswmathsoc.square.site/" className="hover:text-[#2390c6]">
                            <ShoppingBag />
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

            {/* Full-Screen Mobile Dropdown with Proper Height */}
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
                        {["About", "Events", "Resources", "Sponsors", "Careers", "Contact Us"].map((text) => (
                            <Link
                                key={text}
                                className="py-2 text-white hover:underline"
                                href={`/${text.toLowerCase().replace(" ", "-")}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {text}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
