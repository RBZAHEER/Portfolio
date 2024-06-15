import React from "react";
import Wanderlust from "/wanderlust.png";
import Simon from "/Simon.png";
import Spotify from "/Spotify.png";
import Weather from "/Weather.png";

function Projects() {
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
      desc: "A weather forecasting application built with React that allows users to get real-time weather updates for any location. It includes features like current weather conditions.",
      link: null,
      sourceCode: "https://github.com/RBZAHEER/Weather-Forecast.git",
    },
  ];

  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
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
