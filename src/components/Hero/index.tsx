"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import personalImage from "../../../public/assets/images/personal.png";

const Hero = () => {
  return (
    <>
      <div className="container md:py-10 pt-0 ">
        <div className="px-4 xl:px-24 md:text-start text-center items-center  text-[#0f172a] grid grid-cols-1 gap-9  md:grid-cols-2 ">
          <div className=" border-4 border-blue-100 flex justify-self-center justify-center items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500  max-h-96 max-w-96">
            <Image
              className="rounded-full "
              src={personalImage}
              alt="personalImage"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className=" text-5xl font-medium">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Saheer
              </span>
            </h1>
            <h2 className=" text-4xl font-base">I'm a frontend developer.</h2>
            {/* <h3 className="text-xl mt-2 ">
              Passionate about building modern and user-friendly web
              experiences.
            </h3> */}
            <ul className="text-base leading-loose mt-4">
              <li>
                {" "}
                Passionate about building modern and user-friendly web
                experiences.
              </li>
              <li>
                Bringing creativity to life through interactive web design.
              </li>
              <li className="">
                <Link href="/" className="flex items-center">
                  Feel free to explore my projects and Let’s build something
                  amazing together !
                </Link>
              </li>
              <li className=" mt-3 flex space-x-4 text-3xl justify-center md:justify-start">
                <Link href="https://github.com/SaheerSalah">
                  <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/saheer-salah-148325253/">
                  <FaLinkedin />
                </Link>
                <Link href="/">
                  <SiGmail />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
