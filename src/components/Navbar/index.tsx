"use client";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import Link from "next/link";


const NavLink = [
  {
    id: 1,
    title: <CgGirl />,    
    link: "/",    
  },
  {
    id: 3,
    title: "portfolio",
    link: "/portfolio",
  },
  {
    id: 4,
    title: "about",
    link: "/about",
    
  },
  {
    id: 5,
    title: <FaMoon />,
    link: "#",
  },
];


const Navbar = () => {
  return (
    <>
      <div className="container py-6 bg-white-100">
        <ul className="text-center hidden md:flex justify-center items-center">
          {NavLink.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.link}
                 className="mx-11 text-base font-sans "
              >
                {link.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
