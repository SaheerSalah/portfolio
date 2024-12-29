"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import personalImage from "../../../public/assets/images/personal.jpeg";

const Hero = () => {
  return (
    <>
      <div className="container mt-11">
        <div className="px-32 items-center text-[#0f172a] grid grid-cols-1 gap-10  md:grid-cols-2 md:min-h-[500px] ">
          <div className=" relative flex items-center justify-center  rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-96 h-96">
            <Image
              className=" absolute rounded-full text-center"
              src={personalImage}
              alt="personalImage"
              width={375}
              height={375}
            />
          </div>
          {/* <Image className=" absolute rounded-full text-center" src={personalImage} alt="personalImage" width={350} height={350} />     */}
          <div>
            <h1 className=" text-5xl font-medium">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Saheer
              </span>
            </h1>
            <h2 className=" text-4xl font-base">I'm a frontend developer.</h2>
            <ul className="text-xl leading-relaxed mt-4">
              {/* <li>I love programming !</li> */}
              <li className="">
                <Link href="/" className="flex items-center">
                  {/* <MdContactMail /> */}
                   let's get in touch !
                </Link>
              </li>
              <li className="flex items-center">
                {" "}
                {/* <MdOutlineFileDownload />  */}
                download my resume.
              </li>
              <li className=" mt-3 flex space-x-4 text-3xl">
                <Link href="https://github.com/SaheerSalah">
                  <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/saheer-salah-148325253/">
                  <FaLinkedin />
                </Link>
                <Link href="/"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
