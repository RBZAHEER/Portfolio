import React, { useState } from "react";
import { ReactTyped } from "react-typed";

//Social Media Icons
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//Working on Icons
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

//main Image
import Pic from "/photo2.jpeg";

//GSAP
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Home() {
  // useGSAP(() => {
  //   let tl = gsap.timeline();
  //   tl.from(".pside", { opacity: 0, duration: 1, delay: 2 });
  //   tl.from(".iside", { opacity: 0, duration: 1, x: 200 });
  // });
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20 "
      >
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2  mt:12 md:mt-24 space-y-2 order-2 md:order-1 pside">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello , I'm a &nbsp; </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="  md:text-md text-sm  text-justify">
              Hello, welcome to my portfolio! I'm Zaheer, a passionate web
              developer specializing in the MERN stack. With a strong background
              in Information Technology, I create impactful and visually
              stunning software solutions that aim to leave a lasting
              impression. Feel free to explore my projects and skills to learn
              more about what I can do.
            </p>
            <br />
            <br />
            <div className="flex md:flex-row flex-col items-center md:space-y-0">
              <div id="social" className="">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="font-bold ">Available on</span>
                <div className="flex space-x-4 text-2xl mt-2">
                  <a
                    href="https://www.linkedin.com/in/zaheer95/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin className="hover:text-blue-500 transition duration-300" />
                  </a>
                  <a
                    href="https://github.com/RBZAHEER"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub className="hover:text-purple-500 transition duration-300" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    rel="noopener noreferrer  "
                    target="_blank"
                  >
                    <FaFacebook className="hover:text-blue-700 transition duration-300" />
                  </a>

                  <a
                    href="https://www.telegram.org"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaTelegram className="hover:text-blue-400 transition duration-300" />
                  </a>
                </div>
              </div>

              <div id="working" className="md:ml-80 mt-4">
                <h1 className="font-bold text=">Currently working on</h1>
                <div className="flex space-x-6 text-2xl cursor-pointer">
                  <SiMongodb className="hover:scale-110 duration-200 hover:text-green-400" />
                  <SiExpress className="hover:scale-110 duration-200 hover:text-black-400" />
                  <FaReact className="hover:scale-110 duration-200 hover:text-blue-400" />
                  <FaNodeJs className="hover:scale-110 duration-200 hover:text-green-400" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className=" md:ml-52 ml-20">
              <div className="flex">
                <a
                  href="https://drive.google.com/file/d/1mrenb9_oHFbiQgMrhO8Hg3JLk1jbqOK9/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-black-500 text-black-500 font-bold px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110"
                >
                  View My Resume
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  md:ml-48 md:mt-20 mt-8 order-1 iside">
            <img
              src={Pic}
              alt="Main Image"
              className="rounded-full md:w[450px] md:h[350px]"
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}

export default Home;
