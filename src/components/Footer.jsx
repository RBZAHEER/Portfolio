import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className=" rounded-lg md:w-1/2 mx-auto p-4">
      <div className="flex justify-center space-x-4 text-2xl mt-2 mb-5">
        <a href="https://www.facebook.com" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-700 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://www.youtube.com" rel="noopener noreferrer">
          <FaYoutube className="hover:text-red-600 transition duration-300" />
        </a>
        <a href="https://www.telegram.org" rel="noopener noreferrer">
          <FaTelegram className="hover:text-blue-400 transition duration-300" />
        </a>
      </div>
      <hr className="border-gray-300" />
      <p className="text-center mt-4">© 2024 Zaheer. All rights reserved.</p>
    </div>
  );
}

export default Footer;
