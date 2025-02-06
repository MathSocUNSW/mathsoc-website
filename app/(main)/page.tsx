"use client";

import { motion } from "framer-motion";
import { BlockColumn } from "./(components)/block-column";
import Wave from "./(components)/waves-bg";
import { Button } from "@/components/ui/button"; // Import shadcn button
import Link from "next/link";

export default function Home() {
    return (
        <div className="relative w-full">
            {/* Hero Section - Animated Waves */}
            <div className="relative w-full h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Wave />
                </motion.div>

                {/* Hero Content - Left Heading, Right Buttons */}
                <motion.div 
                    className="relative flex flex-col sm:flex-row items-center max-w-6xl w-full mx-auto px-6 sm:px-12 lg:px-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                >
                    {/* Heading (Left) */}
                    <h1 className="text-white text-5xl sm:text-6xl font-bold max-w-lg text-center sm:text-left">
                        Solving Today. Defining Tomorrow.
                    </h1>

                    {/* Buttons (Right) */}
                    <div className="flex gap-4 mt-6 sm:mt-0 sm:ml-8">
                        <Link href="https://unswmathsoc.org/signup" passHref>
                            <Button variant="default" className="px-6 py-3 rounded-full hover:bg-gray-400 text-lg">
                                Join Us
                            </Button>
                        </Link>
                        <Link href="/learn-more" passHref>
                            <Button variant="secondary" className="px-6 py-3 rounded-full text-lg">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Block Column Section - Removed black background and extended waves */}
            <div className="relative w-full py-16 sm:py-20 flex justify-center px-6 sm:px-12 lg:px-24">
                <BlockColumn
                    heading="Building Community, Careers, and Academic Excellence"
                    content="UNSW Mathematics Society (MathSoc) is the constituent society of the UNSW School of Mathematics and Statistics, with membership open to anyone with an interest in mathematics. We support students by enhancing the sense of community amongst mathematics students, informing students of career opportunities, and providing academic forums and resources for students. With over 3000 members, we are one of the largest societies at UNSW."
                    image="/images/photos/bod.webp"
                    imagePosition="right"
                    buttonText="Join Now"
                    buttonLink="https://unswmathsoc.org/signup"
                />
            </div>

        </div>
    );
}
