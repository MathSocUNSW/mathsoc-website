"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Facebook, Calendar } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Additional imports:
import SymbolExplosion from "./(components)/symbol-explode"; 
import Wave from "./(components)/waves-bg";
import { BlockColumn } from "./(components)/block-column";
import EventCarousel from "./(components)/event-carousel";

const stats = [
  { icon: Users, value: 5000, label: "members" },
  { icon: Facebook, value: 6800, label: "Facebook followers" },
  { icon: Calendar, value: 75, label: "events held last year" },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startCount = 0;
    const endCount = target;
    const duration = 2000;
    const step = Math.ceil(endCount / (duration / 50));

    const timer = setInterval(() => {
      startCount += step;
      if (startCount > endCount) startCount = endCount;
      setCount(startCount);
      if (startCount >= endCount) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, [start, target]);

  return <span ref={counterRef}>{count.toLocaleString()}+</span>;
};

export default function Home() {
  return (
    <div className="relative w-full">
      {/* HERO SECTION */}
      <motion.section
        // Fade + slide up as it enters the viewport
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full h-screen flex items-center justify-center px-6 sm:px-12 lg:px-16"
      >
        {/* First Wave */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Wave containerId="holder1" rotation={45} />
        </motion.div>

        {/* Hero Content (e.g., Title and Buttons) */}
        <motion.div
          className="relative flex flex-col sm:flex-row items-center max-w-6xl w-full mx-auto px-6 sm:px-12 lg:px-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="text-white text-5xl sm:text-6xl font-bold max-w-lg text-center sm:text-left">
            Solving Today. Defining Tomorrow.
          </h1>
          <div className="flex gap-4 mt-6 sm:mt-0 sm:ml-8">
            <SymbolExplosion>
              <Link
                href="https://member.arc.unsw.edu.au/members/s/clubdetail?clubid=0016F0000371VyZQAU"
                passHref
              >
                <Button
                  variant="default"
                  className="
                    px-6 py-3 rounded-full text-lg 
                    hover:bg-gray-400 
                    transition-transform hover:scale-105 active:scale-95
                  "
                >
                  Join Us
                </Button>
              </Link>
            </SymbolExplosion>
            <Link href="/about" passHref>
              <Button
                variant="secondary"
                className="
                  px-6 py-3 rounded-full text-lg
                  transition-transform hover:scale-105 active:scale-95
                "
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* COMMUNITY SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full py-8 sm:py-12 flex justify-center px-6 sm:px-12 lg:px-16"
      >
        <BlockColumn
          heading="Building Community, Careers, and Academic Excellence"
          content="UNSW Mathematics Society (MathSoc) is the constituent society of the UNSW School of Mathematics and Statistics, with membership open to anyone with an interest in mathematics. We support students by enhancing the sense of community amongst mathematics students, informing students of career opportunities, and providing academic forums and resources for students. With over 5000 members, we are one of the largest societies at UNSW."
          image="/images/photos/bod.webp"
          imagePosition="right"
        />
      </motion.section>

      {/* EVENTS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full min-h-[500px] py-16 sm:py-20 flex flex-col items-center px-6 sm:px-12 lg:px-16"
      >
        <div className="w-full flex justify-center py-12 z-10">
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl w-full">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div key={index} className="flex flex-col items-center">
                <Icon size={40} className="text-blue-600" />
                <p className="text-3xl font-bold mt-2">
                  <Counter target={value} />
                </p>
                <p className="text-gray-700 text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center mt-32 mb-8 z-10">Upcoming Events</h2>
        <Wave containerId="holder2" rotation={135} />
        <EventCarousel />
      </motion.section>

      {/* SPONSORED BY SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full flex flex-col items-center justify-center px-6 sm:px-12 lg:px-16 py-16"
      >
        <h2 className="text-3xl font-bold text-center">Sponsored By</h2>
        <motion.div
          className="
            mt-8 
            flex
            flex-wrap
            gap-8
            justify-center
            items-center
          "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {[
            {
              name: "Jane Street",
              src: "/images/logos/jane_street_white.png",
              tier: "principal",
              link: "https://www.janestreet.com/",
            },
            {
              name: "IMC",
              src: "/images/logos/imc_logo.png",
              tier: "principal",
              link: "https://www.imc.com/",
            },
            {
              name: "Optiver",
              src: "/images/logos/optiver_white.png",
              tier: "major",
              link: "https://www.optiver.com/",
            },
            {
              name: "Quantium",
              src: "/images/logos/quantium_white.png",
              tier: "major",
              link: "https://www.quantium.com/",
            },
            {
              name: "Citadel Securities",
              src: "/images/logos/citadel_securities_white.png",
              tier: "major",
              link: "https://www.citadelsecurities.com/",
            },
            {
              name: "Aurora Energy Research",
              src: "/images/logos/aurora_white.png",
              tier: "minor",
              link: "https://auroraer.com/",
            },
            {
              name: "Flow Traders",
              src: "/images/logos/flow_traders_white.png",
              tier: "minor",
              link: "https://www.flowtraders.com/",
            },
            {
              name: "UNSW School of Mathematics and Statistics",
              src: "/images/logos/unswmaths_white.png",
              tier: "minor",
              link: "https://www.unsw.edu.au/science/our-schools/maths",
            }
          ].map((sponsor, index) => {
            let width, height;
            switch (sponsor.tier) {
              case "principal":
                width = 500; 
                height = 150;
                break;
              case "major":
                width = 350;
                height = 120;
                break;
              case "minor":
                width = 280;
                height = 100;
                break;
              default:
                width = 280;
                height = 100;
            }

            return (
              <div
                key={index}
                className="flex justify-center transition-transform hover:scale-105 active:scale-95"
              >
                <Link href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    width={width}
                    height={height}
                    className="object-contain p-1 cursor-pointer"
                  />
                </Link>
              </div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full min-h-[400px] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-16 py-20"
      >
        <Wave containerId="holder3" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-white">Partner with Us</h2>
          <p className="text-lg text-gray-200 mt-12 text-center">
            Interact with a community of students passionate about mathematics and problem-solving through career, social, and academic events.
          </p>
          <SymbolExplosion>
            <Link href="/contact" passHref>
              <Button
                variant="default"
                className="
                  mt-12 px-8 py-3 rounded-full text-lg
                  transition-transform hover:scale-105 active:scale-95
                "
              >
                Get in Touch
              </Button>
            </Link>
          </SymbolExplosion>
        </motion.div>
      </motion.section>
    </div>
  );
}
