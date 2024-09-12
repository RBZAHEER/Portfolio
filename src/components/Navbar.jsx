import React, { useState, useEffect, useRef } from "react";
import pic from "/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Contact" },
  ];

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(".navname , .navitems , .navbar", {
      y: -200,
      // duration: 10,
      stagger: 1,
    });
  });
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md navbar">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
        <div className="flex space-x-2 items-center navname">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile Pic" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Zaheer
            <p className="text-sm ">Web Developer</p>
          </h1>
        </div>

        {/* Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <IoCloseSharp size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 navitems">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-105 duration-200 cursor-pointer"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0">
          <ul className="flex flex-col items-center justify-center space-y-3 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
