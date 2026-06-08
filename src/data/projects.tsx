import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <FaNodeJs />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <SiSpringboot />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "voice-auth",
    category: "Security / Healthcare",
    title: "Voice-Based Authentication System",
    src: `${BASE_PATH}/voice-auth/landing.png`,
    screenshots: [`${BASE_PATH}/voice-auth/landing.png`],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    github: "https://github.com/Harjith2004",
    live: "https://github.com/Harjith2004",
    content: (
      <div>
        <TypographyP>
          A secure voice-based authentication system built for healthcare applications
          to control user access and protect patient data privacy. This project won
          1st Place at the Nan Mudhalvan Hackathon.
        </TypographyP>
        <ProjectsLinks
          live="https://github.com/Harjith2004"
          repo="https://github.com/Harjith2004"
        />
        <TypographyH3>Features</TypographyH3>
        <TypographyP>
          Voice-based identity verification to enhance system security, protecting
          sensitive patient records from unauthorized access. Built with a focus
          on healthcare protocol compliance and data privacy.
        </TypographyP>
        <TypographyH3>Tech Stack</TypographyH3>
        <TypographyP>
          React.js frontend with Node.js and Express.js backend, MongoDB for data
          storage, and integrated voice recognition APIs for biometric authentication.
        </TypographyP>
      </div>
    ),
  },
  {
    id: "urban-complaint",
    category: "AI / NLP System",
    title: "Automated Urban Complaint Classification",
    src: `${BASE_PATH}/urban-complaint/landing.png`,
    screenshots: [`${BASE_PATH}/urban-complaint/landing.png`],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.postgres],
    },
    github: "https://github.com/Harjith2004",
    live: "https://github.com/Harjith2004",
    content: (
      <div>
        <TypographyP>
          A BERT-based NLP system for automated urban complaint classification and
          priority prediction. Built using React, FastAPI, and PostgreSQL to improve
          municipal complaint management efficiency.
        </TypographyP>
        <ProjectsLinks
          live="https://github.com/Harjith2004"
          repo="https://github.com/Harjith2004"
        />
        <TypographyH3>Features</TypographyH3>
        <TypographyP>
          Automated complaint routing with text preprocessing, analytics dashboards,
          and priority detection. The system uses BERT-based NLP to intelligently
          categorize and route complaints to the right municipal departments.
        </TypographyP>
        <TypographyH3>Tech Stack</TypographyH3>
        <TypographyP>
          React.js for the frontend dashboard, FastAPI (Python) for the NLP backend,
          PostgreSQL for structured data storage, and BERT for natural language
          understanding and classification.
        </TypographyP>
      </div>
    ),
  },
];

export default projects;
