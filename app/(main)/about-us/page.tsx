"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const About: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Executives");
  // const [year, setYear] = useState(new Date().getFullYear());
  const [year] = useState(new Date().getFullYear());
  

  const portfolios = [
    "Executives", "Academics", "Outreach", "Careers", "Socials", "Human Resources", 
    "Marketing", "Creative", "Information Technology"
  ];

  const teamsData: TeamsData = {
    [year]: {
      "Executives": {
        directors: [
          { name: "Michael Liu", role: "President", photo: "/images/headshots/michael.jpg" },
          { name: "Jia Jie Sheng", role: "Secretary & Grievance Officer", photo: "/images/headshots/michael.jpg" },
          { name: "Jasmine Chong-White", role: "Treasurer & Arc Delegate", photo: "/images/headshots/michael.jpg" },
          { name: "Lori Ieong", role: "Vice President of Activities", photo: "/images/headshots/michael.jpg" },
          { name: "Archit Aggarwal", role: "Vice President of Development", photo: "/images/headshots/michael.jpg" },
          { name: "Yufan Han", role: "Vice President of Education", photo: "/images/headshots/michael.jpg" },
          { name: "Justin Cao", role: "Vice President of Operations", photo: "/images/headshots/michael.jpg" },
        ],
      },
      "Academics": {
        directors: [
          { name: "Jenny Weng", role: "Academics Director", photo: "/images/headshots/jenny.jpg" },
          { name: "Thomas Liao", role: "Academics Director", photo: "/images/headshots/michael.jpg" },
          { name: "Jimmy Sun", role: "Academics Director", photo: "/images/headshots/jimmy.jpg" }
        ],
        subcommittee: ["Angela Wang", "Qiyang Ning", "Justin Gu", "Conrad Liu", "Zayden Hassan", "Alex Xie", "Daniel Seo", "Yue Wing"],
      },
      "Outreach": {
        directors: [
          { name: "Ahmed Alani", role: "Outreach Director", photo: "/images/headshots/ahmed.jpg" },
          { name: "Anvesha Kaleliva", role: "Outreach Director", photo: "/images/headshots/michael.jpg" },
          { name: "Sarah Talsania", role: "Outreach Director", photo: "/images/headshots/sarah.jpg" }
        ],
        subcommittee: ["Maria Keis", "Shruti Lakra", "Orchid Ye", "Owen Wang", "James Law", "Yunwoo Kim"],
      },
      "Careers": {
        directors: [
          { name: "Kerry Mo", role: "Careers Director", photo: "/images/headshots/michael.jpg" },
          { name: "Dhruva Kidambi", role: "Careers Director", photo: "/images/headshots/michael.jpg" },
          { name: "William Chang", role: "Careers Director", photo: "/images/headshots/michael.jpg" }
        ],
        subcommittee: ["Patrick Cassidy", "Cindy Tang", "Brian Zhao", "Henry Wang", "Sophie Chen", "Anaya Limaye"], 
      },
      "Socials": {
        directors: [
          { name: "Lily Yang", role: "Socials Director", photo: "/images/headshots/lily.jpg" },
          { name: "Mina Woo", role: "Socials Director", photo: "/images/headshots/michael.jpg" },
          { name: "Marcel Hambali", role: "Socials Director", photo: "/images/headshots/michael.jpg" }
        ],
        subcommittee: ["Janindu Wijayagunawardana", "Alice Li", "Stephy Wu", "Anthony Law", "Annice Ip", "Kevin Lee"],
      },
      "Human Resources": {
        directors: [
          { name: "Euan Choi", role: "Human Resources Director", photo: "/images/headshots/euan.jpg" },
          { name: "Manhishtha Bucktowar", role: "Human Resources Director", photo: "/images/headshots/michael.jpg" }
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
          { name: "Parsa Shaghaghi", role: "Creative Director", photo: "/images/headshots/rachel.jpg" },
          { name: "Siobhan Thou", role: "Creative Director", photo: "/images/headshots/alan.jpg" },
          { name: "Jasmine So", role: "Creative Director", photo: "/images/headshots/justin.jpg" }
        ],
        subcommittee: ["James Tan", "Bryan Deng", "Matthew Purdon", "Changke Zou", "Parsa Rahmanseresht", "Melanie Sun"],
      },
      "Information Technology": {
        directors: [
          { name: "Regan Benedetti", role: "IT Director", photo: "/images/headshots/regan.jpg" },
          { name: "Khang Nguyen", role: "IT Director", photo: "/images/headshots/michael.jpg" }
        ],
        subcommittee: ["Eric Wong", "Xiayan Ma", "Cheng Hao Li", "Jasmine Hui", "Stella Zhou", "Christine Chen"],
      },
    }
  };

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

      <motion.div className="flex justify-center gap-4 flex-wrap pb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        {portfolios.map((portfolio) => (
          <Button 
            key={portfolio} 
            variant="secondary"
            onClick={() => setSelectedPortfolio(portfolio)}
            className={`px-4 py-2 ${selectedPortfolio === portfolio ? "bg-[#004aad]" : ""}`}
          >
            {portfolio}
          </Button>
        ))}
      </motion.div>

      <motion.div className="flex flex-col items-center px-6 pb-12 gap-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
        {/* Director cards — with headshots */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamsData[String(year)]?.[selectedPortfolio]?.directors?.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>

        {/* Subcommittee — compact cards, names only, hidden for Executives */}
        {selectedPortfolio !== "Executives" && (() => {
          const subcom = teamsData[String(year)]?.[selectedPortfolio]?.subcommittee;
          if (!subcom || subcom.length === 0) return null;
          return (
            <div className="flex flex-wrap justify-center gap-4">
              {subcom.map((name) => (
                <SubcommitteeCard key={name} name={name} portfolio={selectedPortfolio} />
              ))}
            </div>
          );
        })()}
      </motion.div>
    </motion.section>
  );
};

export default About;
