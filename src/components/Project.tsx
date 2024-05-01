import React from "react";
import { motion } from "framer-motion";

import ProjectsCard from "./ProjectsCard";
import projects from '../projects'
import { CardBody, CardContainer, CardItem } from "./aceternity/3d-card";

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
      className="flex flex-col gap-5 text-left max-w-full px-10 mb-20 justify-center mx-auto items-center lg:h-full "
    >
      <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl z-30 ">
        Projects
      </h3>

      <motion.div className="w-full lg:max-w-7xl  flex flex-col mx-auto gap-32 md:grid md:grid-cols-2 lg:gap-20 justify-center items-center">
        {projects.map((project) => (
          <CardContainer>
            <CardBody className="w-full">
              <ProjectsCard project={project} />
            </CardBody>
          </CardContainer>
        ))}
        {/* <ProjectList /> */}
      </motion.div>



    </motion.div>
  );
};

export default Project;
