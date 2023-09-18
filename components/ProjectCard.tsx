import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import projects from "../src/projects";

type Props = {};

const ProjectCard = (props: Props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth);
    if (carousel.current?.scrollWidth && carousel.current?.offsetWidth) {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="flex gap-5 h-full w-full md:max-w-[900px] md:overflow-hidden cursor-grab"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-3"
        whileDrag={{ cursor: "grabbing" }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col min-w-[300px]  items-start bg-slate-600 gap-5 p-3 rounded-xl relative"
          >
            <h2 className="text-xl uppercase tracking-[5px]">{project.name}</h2>

            <div className="w-full h-40 md:h-60 ">
              <motion.img
                whileHover={{
                  scale: 1.01,
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
                <img className="w-10 h-10" src={project.technology1} />
                <img className="w-10 h-10" src={project.technology2} />
                {project.technology3 && (
                  <img className="w-10 h-10" src={project.technology3} />
                )}
                {project.technology4 && (
                  <img className="w-10 h-10" src={project.technology4} />
                )}
              </div>
            </div>

            <div>
              <p>{project.description}</p>
            </div>

            <div className="flex justify-around w-full">
              <div className="flex flex-col ">
                <a href={project.repo} target="_blank">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    className="h-12 cursor-pointer"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  />
                </a>
              </div>
              <Link href={project.more} className="">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 border border-[#45c7e5] text-[#45c7e5] hover:text-white hover:bg-[#45c7e5] rounded-xl text-xl"
                >
                  Know More
                </motion.button>
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
