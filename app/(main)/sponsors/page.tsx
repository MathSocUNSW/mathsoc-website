"use client";

import gsap from "gsap";
import { motion } from "framer-motion";
import Wave from "../(components)/waves-bg";
import { BlockColumn } from "../(components)/block-column";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Sponsors: React.FC = () => {
  const sponsorDescRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sponsorLogoRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  //effect for sponsor card descriptions
  useEffect(() => {
    sponsorDescRefs.current.forEach((sponsor, index) => {
      if (!sponsor) {
        return;
      }
      
      gsap.fromTo(sponsor, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sponsor,
          start: "top bottom",
          toggleActions: "play none none reverse",
        }
      })
    }) 
  },[])

  //effect for sponsor logo 
  useEffect(() => {
    sponsorLogoRefs.current.forEach((sponsor, index) => {
      if (!sponsor) {
        return;
      }
      const isReversed = index % 2 === 1;

      gsap.fromTo(sponsor, { opacity: 0, y: 0, x: isReversed ? 100: -100 }, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sponsor,
          start: "top bottom",
          toggleActions: "play none none reverse",
        }
      })
    }) 
  },[])
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      {/* Hero Section */}
      <motion.div className="relative w-full h-[50vh] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
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
        <h2 className="text-3xl font-bold text-center pb-4">Sponsored By</h2>
        <div className = "flex flex-col items-center gap-8 w-full max-w-5xl">
          {sponsors.map((sponsor, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div 
                key={index}
                className = {`flex flex-col sm:flex-row ${isReversed ? 'sm:flex-row-reverse' : ''} w-full rounded-xl shadow-lg overflow-hidden bg-[#0b1d38]`}
              >
                <div 
                ref = {(sponsor) => {sponsorLogoRefs.current[index] = sponsor}}
                className = "flex sm:basis-[35%] p-6 pb-px pt-px bg-[#0a2540] justify-center items-center"
                >
                  <Link href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <div className = "relative w-[250px] h-[90px]">
                      <Image
                        src={sponsor.src}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>

                <div className = "flex-1 bg-[#0b1d38] p-6 text-sm text-white-200 text-">
                  <p 
                  ref = {(sponsor) => {sponsorDescRefs.current[index] = sponsor}}
                  className = "text-sm sm:text-base">
                    {sponsor.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </motion.section>
  );
};

export default Sponsors;

const sponsors = [
  {
    name: "UNSW School of Mathematics and Statistics",
    src: "/images/logos/unswmaths_white.png",
    tier: "principal",
    link: "https://www.unsw.edu.au/science/our-schools/maths",
    desc: "UNSW is one of Australia's largest universities, with an enrolment of more than 50,000 students, and offers a full range of programs. The School of Mathematics and Statistics has more than 90 academic staff and postdoctoral fellows."
  },
  {
    name: "Jane Street",
    src: "/images/logos/jane_street_white.png",
    tier: "principal",
    link: "https://www.janestreet.com/",
    desc: "A proprietary trading firm that operates around the clock and around the globe. We bring a deep understanding of markets, a scientific approach, and innovative technology to trade in the world’s highly competitive financial markets, focusing primarily on equities and equity derivatives. Founded in 2000, Jane Street employs over 700 people in offices in New York, London and Hong Kong. Our entrepreneurial culture is driven by our talented team of traders and programmers."
  },
  {
    name: "IMC",
    src: "/images/logos/imc_logo.png",
    tier: "major",
    link: "https://www.imc.com/",
    desc: "IMC is a global trading firm powered by a cutting-edge research environment and a world-class technology backbone. This is where the brightest minds in quant research, tech, and trading come together to solve the industry’s greatest challenges."
  },
  {
    name: "Optiver",
    src: "/images/logos/optiver_white.png",
    tier: "major",
    link: "https://www.optiver.com/",
    desc: "As a leading proprietary trading firm, Optiver works to make markets more efficient, transparent and stable for all. We have close to 2,000 employees in offices around the world, united in their commitment to providing liquidity, competitive pricing and reliable risk management."
  },
  {
    name: "Quantium",
    src: "/images/logos/quantium_white.png",
    tier: "major",
    link: "https://www.quantium.com/",
    desc: "Founded in 2002, Quantium is a global leader in Data Science and Artificial Intelligence. With over 1,100 team members across 14 locations worldwide, we help organisations maximise the potential of their data and solve some of their most pressing challenges."
  },
  {
    name: "Citadel Securities",
    src: "/images/logos/citadel_securities_white.png",
    tier: "major",
    link: "https://www.citadelsecurities.com/",
    desc: "We provide liquidity to ensure institutions and retail investors can trade what they want, when they want—in all market conditions around the world. We constantly look to improve how markets work. Determined to drive change, we envision and execute a range of ambitious initiatives that could only happen here."
  },
  {
    name: "Aurora Energy Research",
    src: "/images/logos/aurora_white.png",
    tier: "minor",
    link: "https://auroraer.com/",
    desc: "Aurora partners with leading finance, energy, utility, and development organisations to deliver critical insights that drive investment, strategy, and policy decisions across global energy markets."
  },
  {
    name: "Flow Traders",
    src: "/images/logos/flow_traders_white.png",
    tier: "affiliate",
    link: "https://www.flowtraders.com/",
    desc: "We strive to bring greater transparency and efficiency to financial markets. We operate in highly competitive industry, as a global liquidity provider and market maker. We continuously provide stable liquidity, actively invest in the financial ecosystem, develop innovative technologies, and foster both our team and strategic partnerships."
  },
]
