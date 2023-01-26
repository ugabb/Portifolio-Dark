import React from "react";
import { motion } from "framer-motion";

import projects from "../src/projects";

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <div className="flex gap-5 h-full w-full md:max-w-[900px] md:overflow-hidden">
      <motion.div
        drag='x'
      className="flex gap-3">
        {projects.map((project) => (
          <div className="flex flex-col w-[300px]  items-start bg-slate-600 gap-5 p-3 rounded-xl">
            <h2 className="text-2xl uppercase tracking-[5px]">
              {project.name}
            </h2>

            <div className="w-full h-40 md:h-60 ">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
                }}
                className="h-full w-full object-cover rounded-xl cursor-pointer"
                src={project.photo}
                alt=""
              />
            </div>

            <div className="flex flex-col">
              <p className="font-bold">Tecnhologies Used:</p>
              <div className="flex gap-3">
                <img
                  className="w-10 h-10"
                  src={project.technology1}
                />
                <img
                  className="w-10 h-10"
                  src={project.technology2}
                />
                <img
                  className="w-10 h-10"
                  src={project.technology3}
                />
              </div>
            </div>

            <div>
              <p>{project.description}</p>
            </div>

            <div className="flex justify-around w-full">
              <div className="flex flex-col ">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  className="h-12 cursor-pointer"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="px-5 border border-[#45c7e5] text-[#45c7e5] hover:text-white hover:bg-[#45c7e5] rounded-xl text-xl"
              >
                Know More
              </motion.button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
