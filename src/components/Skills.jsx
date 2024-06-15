import React from "react";
import Mongo from "/mongodb.jpg";
import Express from "/express.png";
import Reactt from "/reactjs.png";
import Node from "/node.png";
import Java from "/java.png";
import Html from "/html.png";
import Css from "/css.jpg";
import Github from "/github.png";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: Mongo,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: Express,
      name: "Express",
    },
    {
      id: 3,
      logo: Reactt,
      name: "React",
    },
    {
      id: 4,
      logo: Node,
      name: "Node.js",
    },
    {
      id: 5,
      logo: Java,
      name: "Java",
    },
    {
      id: 6,
      logo: Html,
      name: "HTML",
    },
    {
      id: 6,
      logo: Css,
      name: "CSS",
    },
    {
      id: 6,
      logo: Github,
      name: "Git&Github",
    },
  ];
  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      name="Skills"
    >
      <h1 className="text-3xl font-bold">Skills</h1>

      <div id="icons" className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
        {cardItem.map(({ id, logo, name }) => (
          <div
            className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img src={logo} className="w-[150px] rounded-full" alt="" />
            <div>
              <div>{name}</div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Skills;
