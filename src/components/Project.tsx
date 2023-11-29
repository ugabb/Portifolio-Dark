import React from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";
import ProjectsCard from "./ProjectsCard";
import projects from '../projects'

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
      className="flex flex-col gap-5 text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl z-30 text-krona-one">
        Projects
      </h3>

      <motion.div className="w-full lg:max-w-7xl h-2/3 flex flex-col gap-5 xl:grid xl:grid-cols-2 lg:gap-3 justify-center items-center">
        {projects.map((project) => (
          <ProjectsCard photo={project.photo} name={project.name} knowMore={project.more} />
        ))}
        {/* <ProjectList /> */}
      </motion.div>
    </motion.div>
  );
};

export default Project;
