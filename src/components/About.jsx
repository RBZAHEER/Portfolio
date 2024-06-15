import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-black-100 text-3xl font-bold">About</h1>
      <br />
      <p>
        Hello, I'm Zaheer, a passionate Web developer with a keen eye for &nbsp;
        <b>MERN Stack </b>. With a background in IT, I strive to create
        impactful and visually stunning Software solutions that leave a lasting
        impression.
      </p>
      <div>
        <h1 className="text-green-400 text-2xl font-bold mb-2 mt-5">
          Education & Training
        </h1>
        <p>
          [Degree/Certification], [Institution], [Year] [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year]
        </p>
      </div>
      <div>
        <h1 className="text-green-400 text-2xl font-bold mb-2 mt-5">
          Skills & Expertise
        </h1>
        <p>
          Proficient in [Programming Languages] Experienced with [Software
          Tools/Technologies] Strong grasp of [Design Principles/Concepts]
          Excellent problem-solving skills Effective communicator and
          collaborator
        </p>
      </div>
      <div>
        <h1 className="text-green-400 text-2xl font-bold mb-2 mt-5">
          Professional Experience{" "}
        </h1>
        <p>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </p>
      </div>
      <div>
        <h1 className="text-green-400 text-2xl font-bold mb-2 mt-5">
          Achievements & Awards
        </h1>
        <p>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </p>
      </div>
      <div>
        <h1 className="text-green-400 text-2xl font-bold mb-2 mt-5">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default About;
