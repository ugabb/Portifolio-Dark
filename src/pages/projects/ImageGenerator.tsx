import ProjectDetails from "components/ProjectDetails";
import React from "react";

import HeaderSecondary from "components/HeaderSecondary";
import ReactPlayer from "react-player";

import {AiFillGithub} from 'react-icons/ai'
import Link from "next/link";

import { motion } from "framer-motion";

type Props = {};

const TodoApp = (props: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] h-full">
      <HeaderSecondary />
      <div className="flex flex-col  items-center ">
        <h1 className="text-3xl mt-20 uppercase  text-gray-400 tracking-[15px]">
          Image Generator
        </h1>
        <h2 className="text-xl uppercase text-gray-500 tracking-[15px] mt-4">
          Features
        </h2>

        <ul className="text-gray-500 flex justify-around w-1/2 mt-4">
          <li className="hover:text-gray-300 cursor-default">
            User input to generate
          </li>
          <li className="hover:text-gray-300 cursor-default">
            Select size of image{" "}
          </li>
          <li className="hover:text-gray-300 cursor-default">
            loading animation
          </li>
          <li className="hover:text-gray-300 cursor-default">NodeJS backend</li>
        </ul>
        <p className="w-1/3 text-gray-500 text-center mt-4">
          {" "}
          "Using artificial intelligence from openAi API to generate any type of
          images from the user input",
        </p>
        <div className="flex flex-col gap-2 w-2/3 m-5 ">
          <motion.img
            src="../image-generator.png"
            className="w-full h-[200px] md:h-[300px] object-cover"
            whileHover={{
              scale: 1.3,
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center pb-5 w-[360px] md:w-2/3 h-[360px] mx-auto">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dYcwrul7-Ko&feature=youtu.be"
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex flex-col items-center pb-5">
        <Link href="https://github.com/ugabb/Image-Generator" target="_blank">
          <AiFillGithub className="icons" size={60} />
        </Link>
      </div>
    </div>
  );
};

export default TodoApp;
