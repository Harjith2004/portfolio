"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32",
          )}
        >
          Projects
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};

// Auto-rotating screenshot card
const Modall = ({ project }: { project: Project }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (project.screenshots.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % project.screenshots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [project.screenshots.length]);

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[400px] h-auto rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            {/* Auto-rotating screenshots */}
            {project.screenshots.map((img, idx) => (
              <Image
                key={img}
                className="absolute w-full h-full top-0 left-0 object-cover transition-opacity duration-700"
                style={{ opacity: idx === currentImg ? 1 : 0 }}
                src={img}
                alt={project.title}
                width={400}
                height={300}
              />
            ))}

            {/* Dot indicators */}
            {project.screenshots.length > 1 && (
              <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-1.5 z-10">
                {project.screenshots.map((_, idx) => (
                  <div
                    key={idx}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      background:
                        idx === currentImg ? "#fff" : "rgba(255,255,255,0.4)",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Gradient overlay with title */}
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>

        {/* Modal with screenshot background */}
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <Link href={project.live} target="_blank">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (project.screenshots.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % project.screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.screenshots.length]);

  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6">
        {project.title}
      </h4>

      {/* Screenshot gallery with background */}
      {project.screenshots.length > 0 && (
        <div
          className="relative w-full rounded-xl overflow-hidden mb-8"
          style={{ height: 240 }}
        >
          {project.screenshots.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`screenshot-${idx}`}
              fill
              className="object-cover transition-opacity duration-700"
              style={{ opacity: idx === activeImg ? 1 : 0 }}
            />
          ))}
          {/* dark overlay so text is readable on top */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Thumbnail row */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {project.screenshots.map((img, idx) => (
              <button
                key={img}
                onClick={() => setActiveImg(idx)}
                className="rounded-md overflow-hidden border-2 transition-all"
                style={{
                  borderColor: idx === activeImg ? "#fff" : "transparent",
                  opacity: idx === activeImg ? 1 : 0.6,
                }}
              >
                <Image
                  src={img}
                  alt={`thumb-${idx}`}
                  width={60}
                  height={40}
                  className="object-cover"
                  style={{ height: 40, width: 60 }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>

      {project.content}
    </>
  );
};
