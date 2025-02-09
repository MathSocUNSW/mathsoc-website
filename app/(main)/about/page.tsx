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

interface TeamsData {
  [year: string]: {
    [portfolio: string]: Member[];
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

const About: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Executives");
  const [year, setYear] = useState(new Date().getFullYear());
  

  const portfolios = [
    "Executives", "Academics", "Outreach", "Careers", "Socials", "Human Resources", 
    "Marketing", "Creative", "Information Technology"
  ];

  const teamsData : TeamsData = {
    [2025]: {
      "Executives": [
        { name: "Kelly Pan", role: "President", photo: "/images/kelly.jpg" },
        { name: "David Jin", role: "Vice President Education", photo: "/images/david.jpg" },
        { name: "Thao Peli Nghiem Xuan", role: "Vice President Development", photo: "/images/peli.jpg" },
        { name: "Lauren Selby", role: "Vice President Operations", photo: "/images/lauren.jpg" },
        { name: "Neil Nag", role: "Secretary & Grievance Officer", photo: "/images/neil.jpg" },
        { name: "James Hu", role: "Treasurer & Arc Delegate", photo: "/images/james.jpg" }
      ],
      "Academics": [
        { name: "Yufan Han", role: "Academics Director", photo: "/images/yufan.jpg" },
        { name: "Rashid Abuzarov", role: "Academics Director", photo: "/images/rashid.jpg" },
        { name: "Oscar Wellard", role: "Academics Director", photo: "/images/wellard.jpg" }
      ],
      "Outreach": [
        { name: "Isabella Bustos-McNeil", role: "Outreach Director", photo: "/images/isabella.jpg" },
        { name: "Jasmine Chong-White", role: "Outreach Director", photo: "/images/jasmine.jpg" },
        { name: "Eric Chen Hong", role: "Outreach Director", photo: "/images/hong.jpg" }
      ],
      "Careers": [
        { name: "Archit Aggarwal", role: "Careers Director", photo: "/images/archit.jpg" },
        { name: "Sarah Zhong", role: "Careers Director", photo: "/images/sarah.jpg" },
        { name: "Tony Wang", role: "Careers Director", photo: "/images/tony.jpg" }
      ],
      "Socials": [
        { name: "Alina Jin", role: "Socials Director", photo: "/images/alina.jpg" },
        { name: "Aamir Khan", role: "Socials Director", photo: "/images/aamir.jpg" },
        { name: "Michael Liu", role: "Socials Director", photo: "/images/michael.jpg" }
      ],
      "Human Resources": [
        { name: "Nelson Luo", role: "Human Resources Director", photo: "/images/nelson.jpg" },
        { name: "Jess Xu", role: "Human Resources Director", photo: "/images/jess.jpg" }
      ],
      "Marketing": [
        { name: "Shuly Chang", role: "Marketing Director", photo: "/images/shuly.jpg" },
        { name: "Oscar Deng", role: "Marketing Director", photo: "/images/deng.jpg" },
        { name: "Linyi Sun", role: "Marketing Director", photo: "/images/linyi.jpg" }
      ],
      "Creative": [
        { name: "Rachel Zhao", role: "Creative Director", photo: "/images/rachel.jpg" },
        { name: "Alan Feng", role: "Creative Director", photo: "/images/alan.jpg" },
        { name: "Justin Cao", role: "Creative Director", photo: "/images/justin.jpg" }
      ],
      "Information Technology": [
        { name: "Eric Do", role: "IT Director", photo: "/images/do.jpg" },
        { name: "John Wu", role: "IT Director", photo: "/images/john.jpg" }
      ]
    }
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.div className="relative w-full h-[60vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <video 
          src="/videos/event-video.mp4" 
          autoPlay muted loop
          className="w-full h-full object-cover"
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
          content="The UNSW Mathematics Society (MathSoc) is the constituent society of the School of Mathematics and Statistics, open to anyone with an interest in mathematics. We support students by fostering a strong community, providing career insights, and developing academic resources."
          buttonLink="/UNSW-Mathematics-Society-Constitution_2025.pdf"
          buttonText="Our Constitution"
        />
        <BlockColumn
          heading="Our Aims"
          content="We aim to enhance the sense of community among maths students, connecting like-minded individuals and fostering collaboration. Our initiatives inform students about academic and career opportunities while providing support for their studies and a platform to discuss mathematics."
          image="/images/photos/image2.webp"
          imagePosition="left"
        />
        <BlockColumn
          heading="Our Events"
          content="We host academic events like revision seminars, workshops, and competitions to support students in their learning. Our career-focused events include resume and interview workshops, Q&A sessions, and an industry mentoring program. Socially, we bring students together through peer mentoring, BBQs, trivia and games nights, movie nights, formal balls, and pub crawls."
          image="/images/photos/image3.webp"
          imagePosition="right"
        />
        </div>

      </motion.section>
      </div>

      <motion.div className="text-center pt-14 pb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <h1 className="text-4xl font-bold">Meet the Team</h1>
      </motion.div>

      <div className="flex justify-center pb-6">
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
      </div>

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

      <motion.div className="flex flex-wrap justify-center gap-6 px-6 pb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }} viewport={{ once: true }}>
        {teamsData[String(year)]?.[selectedPortfolio]?.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
