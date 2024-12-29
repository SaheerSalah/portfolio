"use client";
import React from "react";

const NavLink = [
  {
    id: 1,
    title: "home",
    link: "#",
  },
  {
    id: 3,
    title: "project",
    link: "#",
  },
  {
    id: 4,
    title: "contact",
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
      <div className="container pt-16">
        <ul className="hidden md:block text-center">
          {NavLink.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                className="mx-7 text-base font-sans "
              >
                {link.title}
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Navbar;
