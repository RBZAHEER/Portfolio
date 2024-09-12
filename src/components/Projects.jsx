import React from "react";
import Wanderlust from "/wanderlust.png";
import Simon from "/Simon.png";
import Spotify from "/Spotify.png";
import Weather from "/Weather.png";
import Todo from "/todo.png";
import ImgGen from "/imggen.png";
import Charcounter from "/charcount.png";
import Analog from "/analog.png";
import Paragen from "/paragen.png";
import BgChanger from "/bgchanger.png";
import Icontrail from "/icontrail.png";
import Gsaplanding from "/gsaplanding.png";
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
function Projects() {
  // let projectRef = useRef();

  // useGSAP(() => {
  //   let tl = gsap.timeline();
  //   tl.from(projectRef.current, {
  //     opacity: 0,
  //     x: 200,
  //     delay: 6,
  //     stagger: 0.1,
  //   });
  // });
  const projectInfo = [
    {
      id: 1,
      img: Wanderlust,
      name: "Wanderlust",
      desc: "Developed a full-stack web app for travelers to create, share, and explore listings and reviews. Implemented user authentication, CRUD operations for listings and reviews, and used MongoDB for data storage. Ensured responsive design and incorporated flash messages for feedback.",
      link: "https://journey-ef45.onrender.com/listings",
      sourceCode: "https://github.com/RBZAHEER/Wanderlust",
    },
    {
      id: 2,
      img: Simon,
      name: "Simon Says",
      desc: "Developed a Simon Says game using HTML, CSS, and JavaScript. Implemented game logic to replicate the classic memory game providing interactive and engaging gameplay. Enhanced skills in front-end development and game design.",
      link: "https://rbzaheer.github.io/Simon-Says-Game/",
      sourceCode: "https://github.com/RBZAHEER/Simon-Says-Game.git",
    },
    {
      id: 3,
      img: Spotify,
      name: "Spotify Page Clone",
      desc: "Created a clone of Spotify’s front page using only HTML and CSS. Focused on replicating the layout, design, and responsiveness of the original page. Enhanced skills in front-end development by closely mimicking the visual elements and user experience of Spotify.",
      link: "https://rbzaheer.github.io/Spotify-Page-Clone/",
      sourceCode: "https://github.com/RBZAHEER/Spotify-Page-Clone.git",
    },
    {
      id: 4,
      img: Weather,
      name: "Weather Forecaster",
      desc: "A weather forecasting application built with HTML, CSS, and JavaScript that allows users to get real-time weather updates for any location. It includes features like current weather conditions.",
      link: "https://weatherforcast12.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/Weather-HTML-CSS-JS-.git",
    },
    {
      id: 5,
      img: Todo,
      name: "To Do List",
      desc: "Developed a To-Do List application using HTML, CSS, and JavaScript. Implemented features for adding, editing, and deleting tasks, along with persistent storage using local storage. Enhanced skills in front-end development and user interface design.",
      link: "https://todo95.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/TODO-List.git",
    },
    {
      id: 6,
      img: Gsaplanding,
      name: "Animated Landing Page",
      desc: "Developed a modern, responsive landing page using HTML, CSS, and JavaScript. Utilized GSAP for smooth animations and transitions, enhancing user experience.",
      link: "https://wizardzgsap.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/Animated-landing-using-GSAP.git",
    },

    {
      id: 7,
      img: ImgGen,
      name: "Random Image Generator",
      desc: "Created a Random Image Generator using HTML, CSS, and JavaScript. Implemented functionality to fetch and display random images from an API. Enhanced skills in asynchronous programming and API integration.",
      link: "https://imggenerator12.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/Random-Paragraph-Generator.git",
    },
    {
      id: 8,
      img: Charcounter,
      name: "Real-Time Character Counter",
      desc: "Built a Real-Time Character Counter using HTML, CSS, and JavaScript. Implemented functionality to dynamically count and display the number of characters typed in a text area. Enhanced skills in front-end development and real-time user interaction.",
      link: "https://charcounter12.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/Character-Counter.git",
    },
    {
      id: 9,
      img: Analog,
      name: "Analog Watch",
      desc: "Developed an Analog Watch using HTML, CSS, and JavaScript. Implemented real-time functionality to display the current time with a visually appealing analog clock interface. Enhanced skills in front-end development and working with date and time functions.",
      link: "https://analogtime12.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/Analog-Watch.git",
    },
    {
      id: 10,
      img: Paragen,
      name: "Paragraph Generator",
      desc: "Created a Paragraph Generator using HTML, CSS, and JavaScript. Implemented functionality to generate random paragraphs for use in various applications. Enhanced skills in front-end development and working with text content dynamically.",
      link: "https://paraggenerator.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/Random-Paragraph-Generator.git",
    },
    {
      id: 11,
      img: BgChanger,
      name: "Background Color Changer",
      desc: "Developed a Background Color Changer using HTML, CSS, and JavaScript. Implemented functionality to change the background color of a web page dynamically based on user input or random selection. Enhanced skills in front-end development and user interaction.",
      link: "https://bgchanger12.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/BgChanger.git",
    },
    {
      id: 12,
      img: Icontrail,
      name: "Icon Trail Animation",
      desc: "This project creates an icon trail animation effect using HTML, CSS, and JavaScript. The effect involves an image icon that follows the mouse cursor with a fading animation effect.",
      link: "https://icontrailing.netlify.app/",
      sourceCode: "https://github.com/RBZAHEER/Icon-Trailing.git",
    },
  ];

  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
      name="Projects"
    >
      <h1 className="font-bold text-3xl mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projectInfo.map(({ id, img, name, desc, link, sourceCode }) => (
          <div
            key={id}
            className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
          >
            <img
              src={img}
              alt={name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="font-bold text-xl mb-2">{name}</h2>
              <p className="text-gray-700">{desc}</p>
            </div>
            <div className="mt-4 flex space-x-3">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Link
                </a>
              ) : (
                <button
                  disabled
                  className="bg-gray-400 text-white font-bold px-4 py-2 rounded cursor-not-allowed"
                >
                  Link
                </button>
              )}
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Projects;
