"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Wave from "../(components)/waves-bg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlockColumn } from "../(components)/block-column";
import Image from "next/image";

interface Member {
  name: string;
  role: string;
  photo: string;
}

interface PortfolioData {
  directors: Member[];
  subcommittee?: string[];
}

interface TeamsData {
  [year: string]: {
    [portfolio: string]: PortfolioData;
  };
}

const TeamMemberCard: React.FC<{ member: Member }> = ({ member }) => {
  const [imageSrc, setImageSrc] = useState(member.photo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Card className="shadow-lg w-[300px]">
        <CardContent className="p-4 flex flex-col items-center">
          <div className="w-32 h-32 relative">
            <Image
              src={imageSrc}
              alt={member.name}
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-full"
              unoptimized // If the images are from an unsupported domain
              onError={() => setImageSrc("/images/placeholder.png")} // Fallback if image fails
            />
          </div>
          <h2 className="text-lg font-semibold mt-4">{member.name}</h2>
          <p className="text-sm text-gray-500">{member.role}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SubcommitteeCard: React.FC<{ name: string; portfolio: string }> = ({ name, portfolio }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <Card className="shadow-lg w-[200px]">
      <CardContent className="p-4 flex flex-col items-center justify-center h-[88px]">
        <h2 className="text-sm font-semibold text-center line-clamp-2 leading-tight">{name}</h2>
        <p className="text-xs text-gray-500 text-center mt-1">{portfolio} Subcommittee Member</p>
      </CardContent>
    </Card>
  </motion.div>
);

const slideVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? -60 : 60,
    opacity: 0,
  }),
};

const About: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Executives");
  // const [year, setYear] = useState(new Date().getFullYear());
  const [year] = useState(new Date().getFullYear());
  
  const portfolios = [
    "Executives", "Academics", "Outreach", "Careers", "Socials", "Human Resources", 
    "Marketing", "Creative", "Information Technology"
  ];

  const [direction, setDirection] = useState(0);
  const currentIndex = portfolios.indexOf(selectedPortfolio);

  const teamsData: TeamsData = {
    [year]: {
      "Executives": {
        directors: [
          { name: "Michael Liu", role: "President", photo: "/images/headshots/michael.jpg" },
          { name: "Jia Jie Sheng", role: "Secretary & Grievance Officer", photo: "/images/headshots/jiajie.jpg" },
          { name: "Jasmine Chong-White", role: "Treasurer & Arc Delegate", photo: "/images/headshots/jasmine_cw.jpg" },
          { name: "Lori Ieong", role: "Vice President of Activities", photo: "/images/headshots/lori.jpg" },
          { name: "Archit Aggarwal", role: "Vice President of Development", photo: "/images/headshots/archit.jpg" },
          { name: "Yufan Han", role: "Vice President of Education", photo: "/images/headshots/yufan.jpg" },
          { name: "Justin Cao", role: "Vice President of Operations", photo: "/images/headshots/justin.jpg" },
        ],
      },
      "Academics": {
        directors: [
          { name: "Jenny Weng", role: "Academics Director", photo: "/images/headshots/jenny.jpg" },
          { name: "Thomas Liao", role: "Academics Director", photo: "/images/headshots/thomas.jpg" },
          { name: "Jimmy Sun", role: "Academics Director", photo: "/images/headshots/jimmy.jpg" }
        ],
        subcommittee: ["Angela Wang", "Qiyang Ning", "Justin Gu", "Conrad Liu", "Zayden Hassan", "Alex Xie", "Daniel Seo", "Yue Wing"],
      },
      "Outreach": {
        directors: [
          { name: "Ahmed Alani", role: "Outreach Director", photo: "/images/headshots/ahmed.jpg" },
          { name: "Anvesha Kaleliva", role: "Outreach Director", photo: "/images/headshots/anvesha.jpg" },
          { name: "Sarah Talsania", role: "Outreach Director", photo: "/images/headshots/sarah.jpg" }
        ],
        subcommittee: ["Maria Keis", "Shruti Lakra", "Orchid Ye", "Owen Wang", "James Law", "Yunwoo Kim"],
      },
      "Careers": {
        directors: [
          { name: "Kerry Mo", role: "Careers Director", photo: "/images/headshots/kerry.jpg" },
          { name: "Dhruva Kidambi", role: "Careers Director", photo: "/images/headshots/dhruva.jpg" },
          { name: "William Chang", role: "Careers Director", photo: "/images/headshots/will.jpg" }
        ],
        subcommittee: ["Patrick Cassidy", "Cindy Tang", "Brian Zhao", "Henry Wang", "Sophie Chen", "Anaya Limaye"], 
      },
      "Socials": {
        directors: [
          { name: "Lily Yang", role: "Socials Director", photo: "/images/headshots/lily.jpg" },
          { name: "Mina Woo", role: "Socials Director", photo: "/images/headshots/mina.jpg" },
          { name: "Marcel Hambali", role: "Socials Director", photo: "/images/headshots/marcel.jpg" }
        ],
        subcommittee: ["Janindu W", "Alice Li", "Stephy Wu", "Anthony Law", "Annice Ip", "Kevin Lee"],
      },
      "Human Resources": {
        directors: [
          { name: "Euan Choi", role: "Human Resources Director", photo: "/images/headshots/euan.jpg" },
          { name: "Manhishtha Bucktowar", role: "Human Resources Director", photo: "/images/headshots/manhishtha.jpg" }
        ],
        subcommittee: ["Scarlett Jang", "Olivia Noga-Piekarska", "Elaine Huang", "Ryan Guo", "Brianna Loiacono", "James Tu Nguyen"],
      },
      "Marketing": {
        directors: [
          { name: "Jade Nguyen", role: "Marketing Director", photo: "/images/headshots/jade.jpg" },
          { name: "Jason Lin", role: "Marketing Director", photo: "/images/headshots/jason.jpg" },
          { name: "Charlie Jiang", role: "Marketing Director", photo: "/images/headshots/charlie.jpg" }
        ],
        subcommittee: ["Gavriana Lianti", "Araf Provat", "Lyra Xi", "Chelsea Chen", "Joseph Kim", "Jireh Choi", "Julia Chia"],
      },
      "Creative": {
        directors: [
          { name: "Parsa Shaghaghi", role: "Creative Director", photo: "/images/headshots/parsa.jpg" },
          { name: "Siobhan Thou", role: "Creative Director", photo: "/images/headshots/siobhan.jpg" },
          { name: "Jasmine So", role: "Creative Director", photo: "/images/headshots/jasmine_s.jpg" }
        ],
        subcommittee: ["James Tan", "Bryan Deng", "Matthew Purdon", "Changke Zou", "Parsa Rahmanseresht", "Melanie Sun"],
      },
      "Information Technology": {
        directors: [
          { name: "Regan Benedetti", role: "IT Director", photo: "/images/headshots/regan.jpg" },
          { name: "Khang Nguyen", role: "IT Director", photo: "/images/headshots/khang.jpg" }
        ],
        subcommittee: ["Eric Wong", "Xiayan Ma", "Cheng Hao Li", "Jasmine Hui", "Stella Zhou", "Christine Chen"],
      },
    }
  };

  const changePortfolio = (portfolio: string) => {
    const newIndex = portfolios.indexOf(portfolio);
    setDirection(newIndex > currentIndex ? 1 : newIndex < currentIndex ? -1 : 0);
    setSelectedPortfolio(portfolio);
  };

  const stepPortfolio = (step: 1 | -1) => {
    const newIndex = (currentIndex + step + portfolios.length) % portfolios.length;
    setDirection(step);
    setSelectedPortfolio(portfolios[newIndex]);
  };

  const activeData = teamsData[String(year)]?.[selectedPortfolio];
  const arrowButtonClasses = "shrink-0 rounded-full p-2 border border-gray-300 hover:bg-[#004aad] hover:text-white hover:border-[#004aad] transition-colors duration-200";

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.div className="relative w-full h-[60vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      {/* <video 
          src="/videos/event-video.mp4" 
          autoPlay muted loop
          className="w-full h-full object-cover"
        /> */}
        <Image
          src="/images/photos/execs_2026.jpg"
          alt="execs"
          className="w-full h-full object-cover"
          width={5181}
          height={3454}
         />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.h1 className="text-4xl font-bold text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>About Us</motion.h1>
        </div>
      </motion.div>

      <div className="relative">
        <Wave containerId="about-wave" rotation={0} />

        <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full py-8 sm:py-12 flex justify-center px-6 sm:px-12 lg:px-16"
      >
        <div className="flex flex-col items-center">
        <BlockColumn
          heading="Who We Are"
          content="The UNSW Mathematics Society (MathSoc) is the constituent society of the School of Mathematics and Statistics, open to anyone with an interest in mathematics. We provide resources, forums and opportunities to help students and create an inclusive community with our flagship events like Camp and Cruise!"
          buttonLink="/UNSW-Mathematics-Society-Constitution_2025.pdf"
          buttonText="Our Constitution"
        />
        {/* need new prop for left/right aligned text */}
        <BlockColumn
          heading="Our Aims"
          content="We aim to platform for undergraduate and postgraduate students to explore their passion in existing and new areas of mathematics. Support students in their mathematics studies and provide a safe environment to understand and cultivate knowledge and to extend our community to all mathematics and math-adjacent degrees across UNSW. To extend our community to all mathematics and math-adjacent degrees across UNSW."
          image="/images/photos/image2.webp"
          imagePosition="left"
        />
        <BlockColumn
          heading="Our Events"
          content="We host academic events like revision seminars, workshops, and competitions to support students in their learning. Our career-focused events include resume and interview workshops, Q&A sessions, and an industry mentoring program. Socially, we bring students together through peer mentoring, BBQs, trivia and games nights, movie nights, end of year ball, and pub crawls."
          image="/images/photos/image3.webp"
          imagePosition="right"
        />
        </div>

      </motion.section>
      </div>

      <motion.div className="text-center pt-14 pb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <h1 className="text-4xl font-bold">Meet the Team</h1>
      </motion.div>

      {/* <div className="flex justify-center pb-6">
        <select 
          value={year} 
          onChange={(e) => setYear(Number(e.target.value))} 
          className="px-4 py-2 border bg-[#1E293B] text-white rounded-md"
        >
          {[...Array(5)].map((_, index) => {
            const pastYear = new Date().getFullYear() - index;
            return <option key={pastYear} value={pastYear}>{pastYear}</option>;
          })}
        </select>
      </div> */}
      
      {/* Portfolio selector: full button row + side arrows on desktop, single current-portfolio button + side arrows on mobile */}
      <motion.div className="flex items-center justify-center gap-3 pb-6 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <button
          onClick={() => stepPortfolio(-1)}
          aria-label="Previous portfolio"
          className={arrowButtonClasses}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Desktop / tablet: show every portfolio as its own button */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {portfolios.map((portfolio) => (
            <Button
              key={portfolio}
              variant="secondary"
              onClick={() => changePortfolio(portfolio)}
              className={`px-4 py-2 ${selectedPortfolio === portfolio ? "bg-[#004aad]" : ""}`}
            >
              {portfolio}
            </Button>
          ))}
        </div>

        {/* Mobile: show only the currently selected portfolio */}
        <div className="flex md:hidden">
          <Button
            variant="secondary"
            className="px-4 py-2 bg-[#004aad] min-w-[180px] text-center"
          >
            {selectedPortfolio}
          </Button>
        </div>

        <button
          onClick={() => stepPortfolio(1)}
          aria-label="Next portfolio"
          className={arrowButtonClasses}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
      
      <div className="relative overflow-hidden px-6 pb-12 min-h-[520px] sm:min-h-[600px] md:min-h-[520px]">
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={selectedPortfolio}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col items-center gap-8" // CHANGED: this element is now top-aligned inside a fixed-height parent, so any leftover space falls to the bottom automatically
          >
            {/* Director cards — with headshots */}
              <div className="flex flex-wrap justify-center gap-6">
                {activeData?.directors?.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
              </div>

            {/* Subcommittee — compact cards, names only, hidden for Executives */}
            {selectedPortfolio !== "Executives" && activeData?.subcommittee && activeData.subcommittee.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4">
                {activeData.subcommittee.map((name) => (
                  <SubcommitteeCard key={name} name={name} portfolio={selectedPortfolio} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default About;
