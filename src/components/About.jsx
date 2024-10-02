import React from "react";
//GSAP
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function About() {
  // useGSAP(() => {
  //   let tl = gsap.timeline();
  //   tl.from(".about", {
  //     opacity: 0,
  //     x: 200,
  //     delay: 5,
  //     stagger: 0.1,
  //   });
  // });
  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 about"
      name="About"
    >
      <h1 className="text-black text-4xl font-bold mb-8 text-center">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="md:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Education & Training
            </h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                <span className="font-bold">
                  Bachelor in Information Technology:
                </span>{" "}
                Trinity College Of Engineering and Research, Pune University
                (SPPU), SGPA: 9.52/10, 2021 - 2025
              </li>
              <li className="mb-2">
                <span className="font-bold">HSC:</span> Kondiram Sadashiv
                Kshirsagar Junior College, India, Percentage: 90%, 2020 - 2021
              </li>
              <li className="mb-2">
                <span className="font-bold">SSC:</span> Bhairavnath Vidyalaya
                Bhigwan, India, Percentage: 86.80%, 2019 - 2020
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Skills & Expertise
            </h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">Proficient in Java, JavaScript</li>
              <li className="mb-2">
                Experienced with HTML5, CSS3, JavaScript, Node.js, Express.js,
                MongoDB, MySQL
              </li>
              <li className="mb-2">Excellent problem-solving skills</li>
              <li className="mb-2">Effective communicator and collaborator</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Professional Experience
          </h2>
          <ul className="list-disc ml-6">
            <li className="mb-4">
              <span className="font-bold text-blue-400">
                Backend Developer Intern:
              </span>{" "}
              <span className="font-semibold text-black font-style: italic">
                {" "}
                Jarurat Care Foundation,
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              Dec’23 - Jan’24
              <ul className="list-disc ml-6">
                <br />
                <li className="mb-2">
                  Developed and maintained server-side logic, databases, and
                  RESTful APIs to support NGO website and web applications.
                </li>
                <li className="mb-2">
                  Collaborated closely with frontend developers to ensure
                  seamless integration between server-side and client-side
                  components
                </li>
                <li className="mb-2">
                  Optimized website backend for performance, security, and
                  scalability, enhancing user experience and operational
                  efficiency.
                </li>
                <li>
                  Utilized best practices in backend technologies, staying
                  current with trends and advancements to improve system
                  functionality.
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <span className="font-bold text-blue-400">
                Web Developer Intern:
              </span>
              <span className="font-semibold text-black font-style: italic">
                {" "}
                Codsoft,
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              Dec’23 - Jan’24
              <ul className="list-disc ml-6">
                <li className="mb-2">
                  Developed a portfolio website using HTML & CSS, showcasing a
                  collection of projects, skills, and experiences
                </li>
                <li className="mb-2">
                  Designed and implemented a landing page using HTML and CSS
                </li>
                <li className="mb-2">
                  Created an interactive calculator application using HTML, CSS,
                  and JavaScript
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Achievements & Awards
          </h2>
          <ul className="list-disc ml-6">
            <li className="mb-2">MERN Stack Developer, Apna College, 2024</li>
            <li className="mb-2">
              Data Structures & Algorithms (DSA), Algoprep, 2024
            </li>
          </ul>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default About;
