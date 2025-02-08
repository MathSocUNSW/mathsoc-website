"use client";

import { useState } from "react";
import Wave from "../(components)/waves-bg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Executives");
  const [year, setYear] = useState(new Date().getFullYear());

  const portfolios = [
    "Executives", "Academics", "Outreach", "Careers", "Socials", "Human Resources", 
    "Marketing", "Creative", "Information Technology"
  ];

  // Updated team members data
  const teamsData = {
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
        { name: "Rashid Abuzarov", role: "Acadmics Director", photo: "/images/rashid.jpg" },
        { name: "Oscar Wellard", role: "Acadmics Director", photo: "/images/wellard.jpg" }
      ],
      "Outreach": [
        { name: "Isabella Bustos-McNeil", role: "Outreach Director", photo: "/images/isabella.jpg" },
        { name: "Jasmine Chong-White", role: "Outreach Director", photo: "/images/jasmine.jpg" },
        { name: "Eric Chen Hong", role: "Outreach Director", photo: "/images/hong.jpg" }
      ],
      "Careers": [
        { name: "Archit Aggarwal", role: "Careers Director", photo: "/images/archit.jpg" },
        { name: "Sarah Zhong", role: "Careeres Director", photo: "/images/sarah.jpg" },
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
    <section>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <video 
          src="/videos/event-video.mp4" 
          autoPlay muted loop
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Background Wave Effect */}
      <div className="relative">
        <Wave containerId="about-wave" rotation={0} />

        {/* Section Title */}
        <div className="text-center pt-14 pb-6 relative z-10">
          <h1 className="text-4xl font-bold">Who We Are</h1>
          <p className="text-xl mt-2 max-w-3xl mx-auto">
            We are a passionate community dedicated to fostering knowledge, 
            collaboration, and innovation. Our goal is to bring people together 
            through impactful experiences and meaningful engagements.
          </p>
        </div>

        {/* Mission Section */}
        <div className="text-center pt-10 pb-12 relative z-10">
          <h1 className="text-4xl font-bold">Our Mission</h1>
          <p className="text-xl mt-2 max-w-3xl mx-auto">
            Our mission is to create opportunities for learning, growth, and 
            connection. Through events, projects, and initiatives, we strive 
            to empower individuals and drive progress in our field.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="text-center pt-14 pb-6">
        <h1 className="text-4xl font-bold">Meet the Team</h1>
      </div>

      {/* Year Selector Dropdown */}
      <div className="flex justify-center pb-6">
        <select 
          value={year} 
          onChange={(e) => setYear(Number(e.target.value))} 
          className="px-4 py-2 border bg-[#1E293B] text-white rounded-md"
        >
          {[...Array(5)].map((_, index) => {
            const pastYear = new Date().getFullYear() - index;
            return (
              <option key={pastYear} value={pastYear}>
                {pastYear}
              </option>
            );
          })}
        </select>
      </div>

      {/* Portfolio Filters */}
      <div className="flex justify-center gap-4 flex-wrap pb-6">
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
      </div>

      {/* Team Members Grid */}
        {/* Team Members Grid */}
        <div className="flex flex-wrap justify-center gap-6 px-6 pb-12">
        {teamsData[year]?.[selectedPortfolio]?.map((member) => (
            <Card key={member.name} className="shadow-lg w-[300px]">
            <CardContent className="p-4 flex flex-col items-center">
                {member.photo ? (
                <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full"
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
                />
                ) : (
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                    {member.name}
                </div>
                )}
                <h2 className="text-lg font-semibold mt-4">{member.name}</h2>
                <p className="text-sm text-gray-500">{member.role}</p>
            </CardContent>
            </Card>
        ))}
        </div>

    </section>
  );
};

export default About;