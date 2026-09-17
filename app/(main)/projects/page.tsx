"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FlaskConical, LucideIcon, Puzzle, TrendingUp } from "lucide-react";
import Wave from "../(components)/waves-bg";
import { BlockColumn } from "../(components)/block-column";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

// TODO: replace the "#" placeholders once Quant Minigames and Lab Test Practice are live
const projects: Project[] = [
  {
    title: "MathSoc Weekly Puzzles",
    description: "Sharpen your problem-solving with a fresh maths puzzle every week, hosted on the MathSoc Academics Portal.",
    href: "https://academics.unswmathsoc.org/",
    icon: Puzzle,
  },
  {
    title: "Quant Minigames",
    description: "Quick-fire mental maths and probability games to prepare you for quant trading interviews.",
    href: "#",
    icon: TrendingUp,
    comingSoon: true,
  },
  {
    title: "Lab Test Practice",
    description: "Practise for your course lab tests with questions modelled on the real thing.",
    href: "#",
    icon: FlaskConical,
    comingSoon: true,
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { title, description, href, icon: Icon, comingSoon } = project;
  const isExternal = href.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2390c6]"
      >
        <Card className="h-full flex flex-col bg-[#272F45] border-[#556080] rounded-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#2390c6] group-hover:shadow-lg group-hover:shadow-[#004aad]/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-[#1F2537] rounded-t-lg px-6 py-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#004aad] text-white">
              <Icon className="w-6 h-6" />
            </div>
            {comingSoon ? (
              <Badge variant="secondary" className="bg-[#333e59] text-[#9ca3af] text-xs">
                Coming Soon
              </Badge>
            ) : (
              <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2390c6]" />
            )}
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-3 px-6 pt-5 pb-6">
            <CardTitle className="text-white text-xl group-hover:text-[#2390c6] transition-colors duration-200">
              {title}
            </CardTitle>
            <p className="text-[#cbd5e1] text-base">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-[100vh]">
      <motion.div className="relative w-full h-[60vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Image
          src="/images/photos/image.png"
          alt="MathSoc projects"
          className="w-full h-full object-cover"
          width={5181}
          height={3454}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.h1 className="text-4xl font-bold text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Projects
          </motion.h1>
        </div>
      </motion.div>

      <div className="relative">
        <Wave containerId="projects-wave" rotation={0} />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center pb-20"
        >
          <div className="flex flex-col items-center w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <BlockColumn
              heading="Built by MathSoc"
              content="Interactive tools made by our team to help you practise, compete and have fun with maths. Pick a project below to get started."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.section>
  );
};

export default Projects;
