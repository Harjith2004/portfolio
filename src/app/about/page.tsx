"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import {
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPhone,
  FaReact,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiExpress,
  SiPostman,
  SiSpringboot,
  SiTypescript,
  SiFigma,
  SiPlaywright,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "harjithharjith40711@gmail.com",
    href: "mailto:harjithharjith40711@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91 8940039606",
    href: "tel:+918940039606",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/harjith-k-839a55354",
    content: "/harjith-k-839a55354",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Harjith2004",
    content: "/Harjith2004",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Java",
    content: "Object-oriented programming language for scalable applications",
    icon: <FaJava size={"50px"} color={"#f89820"} />,
    color: "#f89820",
  },
  {
    name: "JavaScript",
    content: "High-level, interpreted programming language",
    icon: <RiJavascriptFill size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "Typed superset of JavaScript for safer code",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "Spring Boot",
    content: "Java framework for building production-ready apps",
    icon: <SiSpringboot size={"50px"} color={"#6db33f"} />,
    color: "#6db33f",
  },
  {
    name: "React.js",
    content: "UI library for building interactive interfaces",
    icon: <FaReact size={"50px"} color={"#61dafb"} />,
    color: "#61dafb",
  },
  {
    name: "Node.js",
    content: "JavaScript runtime for backend development",
    icon: <FaNodeJs size={"50px"} color={"#6cc24a"} />,
    color: "#6cc24a",
  },
  {
    name: "Express.js",
    content: "Minimal web framework for Node.js",
    icon: <SiExpress size={"50px"} color={"#fff"} />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "Powerful open-source relational database",
    icon: <DiPostgresql size={"50px"} color={"#336791"} />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "NoSQL document database for flexible data storage",
    icon: <DiMongodb size={"50px"} color={"#4db33d"} />,
    color: "#4db33d",
  },
  {
    name: "Docker",
    content: "Containerization platform for consistent deployments",
    icon: <FaDocker size={"50px"} color={"#2496ed"} />,
    color: "#2496ed",
  },
  {
    name: "Git",
    content: "Version control for tracking code changes",
    icon: <FaGit size={"50px"} color={"#f05032"} />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Platform for hosting and collaborating on code",
    icon: <FaGithub size={"50px"} color={"#fff"} />,
    color: "#000000",
  },
  {
    name: "Postman",
    content: "API testing and development tool",
    icon: <SiPostman size={"50px"} color={"#ff6c37"} />,
    color: "#ff6c37",
  },
  {
    name: "Playwright",
    content: "End-to-end testing framework for web applications",
    icon: <SiPlaywright size={"50px"} color={"#2ead33"} />,
    color: "#2ead33",
  },
  {
    name: "Figma",
    content: "Collaborative design and prototyping tool",
    icon: <SiFigma size={"50px"} color={"#f24e1e"} />,
    color: "#f24e1e",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.png"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Harjith K</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-white font-medium">
              Hey there! I&apos;m Harjith K, an aspiring Software Developer with
              a strong foundation in Java, Spring Boot, React.js, JavaScript,
              and SQL. I&apos;m passionate about building scalable web
              applications, REST APIs, and secure software solutions. My journey
              has been shaped by hands-on academic projects and a Software
              Developer Internship at HOP Technologies, where I developed
              real-world applications using modern tech stacks.
            </p>
            <p className="mb-10 text-white font-medium">
              I&apos;m a Hackathon Winner (1st Place at Nan Mudhalvan Hackathon)
              and love solving complex problems through clean, efficient code.
              When I&apos;m not coding, you&apos;ll find me exploring emerging
              technologies, earning certifications, and pushing the boundaries
              of what software can do.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Tools"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
