"use client";

import { motion } from "framer-motion";
import Wave from "../(components)/waves-bg";
import { BlockColumn } from "../(components)/block-column";
import Image from "next/image";
import Link from "next/link";


const Sponsors: React.FC = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      {/* Hero Section */}
      <motion.div className="relative w-full h-[50vh] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        {/* <video 
          src="/videos/event-video.mp4" 
          autoPlay muted loop
          className="w-full h-full object-cover"
        /> */}
        <Image
          src="/images/photos/sponsors.jpg"
          alt="sponsors"
          className="w-full h-full object-cover"
          width={5181}
          height={3454}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.h1 className="text-4xl p-2 font-bold text-white text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Sponsorships That Count
          </motion.h1>
        </div>
      </motion.div>
      
      <div className="relative">
        <Wave containerId="sponsors-wave" rotation={0} />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full py-8 flex justify-center px-6 sm:px-12 lg:px-16"
        >
          <div className="flex flex-col items-center">
            <BlockColumn
              heading="Helping us multiply opportunities, divide costs, and add value to our community."
              content="At MathSoc, we’re passionate about empowering the next generation of problem solvers, analysts, and innovators. Mathematics is at the core of countless industries, from finance and technology to engineering and data science. Our goals wouldn’t be possible without the support of our industry partners who help us provide opportunities for our members to explore their future pathways. Interested in partnering with us? Get in touch at sponsorships.unswmathsoc@gmail.com"
              buttonLink="mailto:sponsorships.unswmathsoc@gmail.com"
              buttonText="Contact Us"
            />
          </div>
        </motion.section>
      </div>
      
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
            mb-20
          "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {[
            {
              name: "UNSW School of Mathematics and Statistics",
              src: "/images/logos/unswmaths_white.png",
              tier: "principal",
              link: "https://www.unsw.edu.au/science/our-schools/maths",
            },
            {
              name: "Jane Street",
              src: "/images/logos/jane_street_white.png",
              tier: "principal",
              link: "https://www.janestreet.com/",
            },
            {
              name: "IMC",
              src: "/images/logos/imc_logo.png",
              tier: "major",
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
              tier: "affiliate",
              link: "https://www.flowtraders.com/",
            },
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
              case "affiliate":
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
    </motion.section>
  );
};

export default Sponsors;
