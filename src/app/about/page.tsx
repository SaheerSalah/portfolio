import AboutCard from "@/components/AboutCard";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import handWave from "../../../public/assets/images/wave-hello.gif";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

const clientReviews = [
  {
    name: "john",
    review:
      "I have been working with Saheer for a while now and I can say that he is a great developer. He is always eager to learn and is a great problem solver. I highly recommend him for any project.",
    location: "India",
    worksite: "Google",
  },
  {
    name: "john",
    review:
      "I have been working with Saheer for a while now and I can say that he is a great developer. He is always eager to learn and is a great problem solver. I highly recommend him for any project.",
    location: "India",
    worksite: "Google",
  },
  {
    name: "john",
    review:
      "I have been working with Saheer for a while now and I can say that he is a great developer. He is always eager to learn and is a great problem solver. I highly recommend him for any project.",
    location: "India",
    worksite: "Google",
  },
  {
    name: "john",
    review:
      "I have been working with Saheer for a while now and I can say that he is a great developer. He is always eager to learn and is a great problem solver. I highly recommend him for any project.",
    location: "India",
    worksite: "Google",
  },
];

const events = [
  {
    title: "Started Learning Programming",
    date: "January 2020",
    description:
      "I began my programming journey by learning HTML, CSS, and JavaScript.",
  },
  {
    title: "Built My First React Project",
    date: "December 2022",
    description:
      "Developed a simple to-do list app using React and improved my understanding of state and props.",
  },
  {
    title: "Worked on a Large-Scale Project at Talents Valley",
    date: "August 2023",
    description:
      "Collaborated with a team to develop a large-scale web application at Talent Valley, enhancing my skills in React, Next.js, and teamwork.",
  },
  {
    title: "Started My Portfolio",
    date: "January 2025",
    description:
      "Started building my personal portfolio to showcase my projects, skills, and experience as a developer.",
  },
];
export default function About() {
  return (
    <div className="bg-gray-50 ">
      <div className="container md:py-10 py-0 font-[family-name:var(--font-geist-sans)]">
        <div className="pb-10">
          <div className="md:py-20 py-10 px-4 xl:px-24 md:text-start text-center items-center  text-[#0f172a] grid grid-cols-1  md:grid-cols-2  gap-4 ">
            <div className=" space-y-3">
              <div className=" md:text-7xl text-4xl font-medium  flex space-x-2 items-center md:justify-start justify-center">
                <div className="">hello</div>
                <Image
                  className=""
                  src={handWave}
                  alt="personalImage"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-2xl md:block hidden ">
                {" "}
                {`<div>  I'm  software engineer </div>`}{" "}
              </div>
              <button className="md:block hidden bg-purple-400 text-white border rounded-lg p-2">
                <Link href={"/portfolio"}>my portfolio </Link>
              </button>
            </div>
            <AboutCard
              content={
                <>
                  <div className="mb-2">
                    <div className="text-2xl mb-3 ">
                      {"<frontend develober/>"}
                    </div>
                    I am an experienced Front-end developer specializing in
                    building high-performance web applications using React.js,
                    Next.js, and TypeScript. With a deep understanding of
                    server-side rendering and API integration, I create dynamic,
                    efficient, and tailored web solutions that meet diverse
                    client needs.
                  </div>
                </>
              }
              AdditionalClass=" rounded-md shadow-md shadow-purple-500"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 ">
          <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>
          <div className="relative">
            {/* الخط العمودي */}
            <div className="absolute left-1/2 top-0 h-full border-l border-gray-300 transform -translate-x-1/2 "></div>

            {events.map((event, index) => (
              <div
                key={index}
                className={`mb-10 flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* المحتوى */}
                <div
                  className={`w-1/2 flex flex-col items-center rounded-full text-center py-4 px-6 shadow-md ${
                    index % 2 === 0
                      ? "text-left pr-6 bg-gradient-to-r to-fuchsia-50 from-pink-100"
                      : "text-left pl-6 bg-gradient-to-r from-fuchsia-50 to-pink-100"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <time className="block mb-2 text-sm text-gray-500">
                    {event.date}
                  </time>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                {/* النقطة */}
                <div className="absolute left-1/2 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 grid grid-cols-1 gap-16">
          <div className="">
            <h1 className="text-2xl ">Clients Reviews</h1>
            <div className="overflow-x-auto scrollbar-custom scrollbar-firefox p-4">
              <div className="flex  w-max   gap-4 py-4">
                {clientReviews.map((review, index) => (
                  <AboutCard
                    content={
                      <div className="w-[300px]">
                        <div className="flex justify-between mb-3">
                          <div className="div">
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-sm font-light  flex gap-2 items-center text-gray-500">
                            <MdLocationOn />
                            {review.location}
                            </p>
                          </div>
                          <p className="text-sm  text-gray-600 ">
                            {review.worksite}
                          </p>
                        </div>
                        {review.review}
                      </div>
                    }
                    AdditionalClass=" rounded-md shadow-md shadow-purple-500 hover:shadow-purple-500 bg-gradient-to-r hover:from-fuchsia-50 hover:to-pink-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* AdditionalClass={` ${index % 2 === 0 ? "bg-gradient-to-r from-fuchsia-50 to-pink-100" : ""} rounded-md shadow-md shadow-purple-500 hover:shadow-purple-500 bg-gradient-to-r hover:from-fuchsia-50 hover:to-pink-100`} */
}

// const tools = [
//   "react.js",
//   "next.js",
//   "tailwindcss",
//   "framer-motion",
//   "typescript",
//   "html",
//   "css",
//   "javascript",
//   "headlessui",
//   "Git",
//   "Github",
//   "vercel",
// ];

//   <div className="flex flex-wrap gap-2">
//   {tools.map((tool, index) => (
//     <AboutCard
//       key={index}
//       content={tool}
//       AdditionalClass="shadow-md shadow-purple-500 hover:shadow-purple-500 bg-gradient-to-r hover:from-fuchsia-50 hover:to-pink-100 rounded-full text-center inline-block px-4 py-2 shadow-md "
//     />
//   ))}
// </div>
