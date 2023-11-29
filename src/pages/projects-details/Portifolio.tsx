import ProjectDetails from "@/components/ProjectDetails";
import React from "react";

import HeaderSecondary from "@/components/HeaderSecondary";
import ReactPlayer from "react-player";

import {AiFillGithub} from 'react-icons/ai'
import Link from "next/link";

import { motion } from "framer-motion";

type Props = {};

const TodoApp = (props: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen">
      <HeaderSecondary />
      <div className="flex flex-col  items-center ">
        <h1 className="text-3xl mt-20 uppercase  text-gray-400 tracking-[15px]">
          Portifolio
        </h1>
        <h2 className="text-xl uppercase text-gray-500 tracking-[15px] mt-4">
          Features
        </h2>

        <ul className="text-gray-500 flex flex-col md:flex-row justify-around gap-3 w-1/2 mt-4">
          <li className="hover:text-gray-300 cursor-default underline md:no-underline">
            Framer Motion Animations
          </li>
          <li className="hover:text-gray-300 cursor-default underline md:no-underline">
            Responsive{" "}
          </li>
          <li className="hover:text-gray-300 cursor-default underline md:no-underline">
            Next usage
          </li>
          <li className="hover:text-gray-300 cursor-default underline md:no-underline">NodeJS backend</li>
        </ul>
        <p className="w-1/3 text-gray-500 text-center mt-4">
          {" "}
          "The place where you can know more about me and see my work"
        </p>
        <div className="flex flex-col gap-2 w-2/3 m-5 ">
          <motion.img
            src="../portifolio.png"
            className="w-full h-[200px] md:h-[300px] object-cover"
            whileHover={{
              scale: 1.3,
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center pb-5">
        <Link href="https://github.com/ugabb/Portifolio-Dark" target="_blank">
          <AiFillGithub className="icons" size={60} />
        </Link>
      </div>
    </div>
  );
};

export default TodoApp;
