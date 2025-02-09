"use client";
import React from "react";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = [
  {
    id: 1,
    title: "saheer",
    link: "/",
    // <CgGirl />
  },
  {
    id: 2,
    title: "portfolio",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "about",
    link: "/about",
  },
  {
    id: 4,
    title: <FaMoon />,
    link: "#",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="relative  py-6  bg-gray-50 md:px-0 px-4">
        <div className="md:hidden flex justify-between">
          <div className="div">
            <button onClick={toggleMenu} className="text-xl">
              ☰
            </button>
            <ul
              className={`text-start absolute top-14 left-8 min-w-32 bg-white border rounded-md shadow-md duration-300 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              {NavLink.map((link) => (
                <li
                  key={link.id}
                  className="text-start my-4 px-3  hover:bg-white"
                >
                  <Link
                    href={link.link}
                    className={
                      "text-base font-medium font-sans text-gray-700 hover:text-purple-600" 
                    }
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" text-xl font-medium font-sans text-purple-600">Saheer</div>
        </div>
        <ul className="text-center hidden md:flex justify-center items-center">
          {NavLink.map((link) => {
            return (
              <li key={link.id} className="mx-11">
                <Link
                  href={link.link}
                  className={
                    "text-base font-medium font-sans " +
                    (pathname === link.link
                      ? "text-purple-600"
                      : "text-gray-700")
                  }
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
