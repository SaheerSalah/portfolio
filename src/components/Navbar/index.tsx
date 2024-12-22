"use client";
import React from "react";


const NavLink = [
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "Project",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
  {
    id: 5,
    title: "mode",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
        <ul className="hidden lg:flex">
          {NavLink.map((link) => {
            return (
              <a key={link.id} href={link.link} className="mx-4 text-base font-sans font-semibold">
                {link.title}
              </a>
            );
          })}
        </ul>

    </>
  );
};
export default Navbar;
