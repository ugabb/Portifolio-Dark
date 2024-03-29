import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#45c7e5]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              className="w-64"
              src="./me.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#45c7e5]/50">
                  Case Study {i + 1} 0f {projects.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                {" "}
                Hi, my name is Gabriel Passionate for Programming and Design.
                Web Development student. Front End - HTML, CSS, React, Tailwind
                and more Back End - NodeJs, Express and MongoDB
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#45c7e5]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
