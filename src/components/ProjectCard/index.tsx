"use client";
import React from "react";
import Image from "next/image";
import sos from "../../../public/assets/images/soso.png";

const Projects = [
  {
    id: 1,
    title: "interior design website",
    description:
      "A beautifully animated and responsive landing page built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
  },
  {
    id: 2,
    title: "Advanced Table with API",
    description:
      "A feature-rich and professional data table built using React.js, Next.js and Type script integrated with a real API, and styled with Tailwind CSS",
  },
  {
    id: 3,
    title: "Tic Tac Toe Game ",
    description:
      "A React.js project showcasing essential front-end development skills like state management, user interaction, and basic algorithm implementation for winner detection",
  },
];

const ProjectCard = () => {
  return (
    <>
      <div className="container py-6 bg-white-100">
        {Projects.map((project) => (
          <div
            key={project.id}
            className="px-4 xl:px-11 md:text-start text-center items-center  text-[#0f172a] grid grid-cols-1 gap-9  md:grid-cols-2 "
          >
            {project.id % 2 === 0 ? (
              <>
                <div className="  flex justify-self-center justify-center items-center   h-80 w-96">
                  <Image
                    className=""
                    src={sos}
                    alt="personalImage"
                    width={500}
                    height={500}
                  />
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-medium">{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="mb-2 text-lg font-medium">{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <div className="  flex justify-self-center justify-center items-center    h-80 w-96">
                <Image
                    className=""
                    src={sos}
                    alt="personalImage"
                    width={500}
                    height={500}
                  />
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