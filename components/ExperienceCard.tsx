import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-300 overflow-hidden">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover"
        src="./signIn.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Sign Form</h4>
        <p className="text-2xl font-bold mt-1">Tailwnid and Javascript</p>

        {/* Technologies */}
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">Started: Ended:</p>

        <ul className="list-disc space-y-4 text-lg">
          <li>
            Hi, my name is Gabriel Passionate for Programming and Design. Web
            Development student. Front End - HTML, CSS, React, Tailwind and more
            Back End - NodeJs, Express and MongoDB
          </li>
          <li>
            Hi, my name is Gabriel Passionate for Programming and Design. Web
            Development student. Front End - HTML, CSS, React, Tailwind and more
            Back End - NodeJs, Express and MongoDB
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
