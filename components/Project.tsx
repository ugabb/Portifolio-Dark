import React from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

type Props = {};

const Project = (props: Props) => {
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
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-30">
        Projects
      </h3>

      <motion.div className="w-full h-2/3 flex justify-center items-center space-x-5">
        <ProjectCard />
      </motion.div>
    </motion.div>
  );
};

export default Project;
