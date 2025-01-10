"use client";
import React from "react";
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

  return (
    <>
      <div className="container py-6 bg-white-100">
        <ul className="text-center hidden md:flex justify-center items-center">
          {NavLink.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.link}
                 className={" mx-11 text-base font-medium font-sans " + (pathname === link.link ? "text-purple-600" : "text-gray-700")}
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
