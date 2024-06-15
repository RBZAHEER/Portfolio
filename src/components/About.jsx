import React from "react";

function About() {
  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
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
                (SPPU), SGPA: 9.43/10, 2021 - 2025
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
              <span className="font-bold">Web Developer Intern:</span> Codsoft,
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
