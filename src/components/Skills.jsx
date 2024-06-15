import React from "react";
import Mongo from "/mongodb.jpg";
import Express from "/express.png";
import Reactt from "/reactjs.png";
import Node from "/node.png";
import Java from "/java.png";
import Html from "/html.png";
import Css from "/css.jpg";
import Github from "/github.png";
import Bootstrap from "/bootstrap.png";
import Tailwind from "/tailwind.png";
import Js from "/js.png";

function Skills() {
  const cardItem = [
    // Frontend Technologies
    {
      id: 1,
      logo: Reactt,
      name: "React",
      category: "Frontend Technologies",
    },
    {
      id: 2,
      logo: Html,
      name: "HTML",
      category: "Frontend Technologies",
    },
    {
      id: 3,
      logo: Css,
      name: "CSS",
      category: "Frontend Technologies",
    },
    {
      id: 4,
      logo: Bootstrap,
      name: "Bootstrap",
      category: "Frontend Technologies",
    },
    {
      id: 5,
      logo: Tailwind,
      name: "Tailwind CSS (Basic)",
      category: "Frontend Technologies",
    },
    {
      id: 6,
      logo: Js,
      name: "JavaScript",
      category: "Frontend Technologies",
    },

    // Backend Technologies
    {
      id: 7,
      logo: Node,
      name: "Node.js",
      category: "Backend Technologies",
    },
    {
      id: 8,
      logo: Express,
      name: "Express",
      category: "Backend Technologies",
    },

    // Databases
    {
      id: 9,
      logo: Mongo,
      name: "MongoDB",
      category: "Databases",
    },

    // Other Skills
    {
      id: 10,
      logo: Java,
      name: "Java",
      category: "Other Skills",
    },
    {
      id: 11,
      logo: Github,
      name: "Git & Github",
      category: "Other Skills",
    },
  ];

  // Function to render skills based on category
  const renderSkills = (category) => {
    return cardItem
      .filter((item) => item.category === category)
      .map(({ id, logo, name }) => (
        <div
          className="relative flex flex-col items-center justify-center bg-white border-2 border-gray-200 rounded-full p-3 shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
          key={id}
        >
          <img
            src={logo}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4"
            alt={name}
          />
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          </div>
        </div>
      ));
  };

  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      name="Skills"
    >
      <h1 className="text-3xl font-bold mb-8">Skills</h1>

      {/* Frontend Technologies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Frontend Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {renderSkills("Frontend Technologies")}
        </div>
      </div>

      {/* Backend Technologies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Backend Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {renderSkills("Backend Technologies")}
        </div>
      </div>

      {/* Databases */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Databases</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {renderSkills("Databases")}
        </div>
      </div>

      {/* Other Skills */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Other Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {renderSkills("Other Skills")}
        </div>
      </div>

      <br />
      <hr />
    </div>
  );
}

export default Skills;
