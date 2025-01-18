"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import sos from "../../../public/assets/images/soso.png";
import Link from "next/link";

const Projects = [
  {
    id: 1,
    title: "interior design website",
    description:
      "A beautifully animated and responsive landing page built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
    liveDemoLink: "https://interior-design-website-indol.vercel.app/",
    githubLink: "https://github.com/SaheerSalah/interior-design-website",
    sliderData :"Next.js, Tailwind CSS, and Framer Motion "
  },
  {
    id: 2,
    title: "Advanced Table with API",
    description:
      "A feature-rich and professional data table built using React.js, Next.js and Type script integrated with a real API, and styled with Tailwind CSS",
    liveDemoLink: "https://table-sage-gamma.vercel.app/",
    githubLink: "https://github.com/SaheerSalah/table-with-API",
    sliderData :"React.js, Next.js and Type script "

  },
  {
    id: 3,
    title: "Tic Tac Toe Game ",
    description:
      "A React.js project showcasing essential front-end development skills like state management, user interaction, and basic algorithm implementation for winner detection",
    liveDemoLink: "https://tic-tac-toe-game-two-mauve.vercel.app/",
    githubLink: "https://github.com/SaheerSalah/tic-tac-toe-game",
    sliderData :"Next.js, Tailwind CSS "

  },
];

const ProjectCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // const fff = (idd:number)=>{
  //   iddd==
  // }
  return (
    <>
      <div className="container py-6 bg-white-100">
        {Projects.map((project, index) => (
          <div
            key={project.id}
            className="px-4 xl:px-11 md:text-start text-center items-center  text-[#0f172a] grid grid-cols-1 gap-9  md:grid-cols-2 "
          >
            {project.id % 2 === 0 ? (
              <>
                <div
                  className="relative  overflow-hidden flex justify-self-center justify-center items-center   h-80 w-96"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    className=""
                    src={sos}
                    alt="personalImage"
                    width={500}
                    height={500}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-4 transform transition-transform duration-300 ${
                      hoveredIndex === index
                        ? "translate-y-0"
                        : "translate-y-full"
                    }`}
                  >
                    <p className="text-sm">{project.sliderData}</p>
                  </div>
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-medium">{project.title}</h2>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <button className=" bg-purple-500 text-white border rounded-lg p-2">
                      <Link href={project.liveDemoLink || "#"}>Live Demo</Link>
                    </button>
                    <button className="bg-purple-500 text-white border rounded-lg p-2">
                      <Link href={project.githubLink || "#"}>View Code</Link>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="mb-2 text-lg font-medium">{project.title}</h2>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <button className=" bg-purple-500 text-white border rounded-lg p-2">
                      <Link href={project.liveDemoLink || "#"}>Live Demo</Link>
                    </button>
                    <button className="bg-purple-500 text-white border rounded-lg p-2">
                      <Link href={project.githubLink || "#"}>View Code</Link>
                    </button>
                  </div>
                </div>
                <div
                  className="relative  overflow-hidden flex justify-self-center justify-center items-center   h-80 w-96"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    className=""
                    src={sos}
                    alt="personalImage"
                    width={500}
                    height={500}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 transform transition-transform duration-1000 ${
                      hoveredIndex === index? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    <p className="text-sm">{project.sliderData}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;

// editing
