import React from "react";

import HeaderSecondary from "components/HeaderSecondary";
import ReactPlayer from "react-player";

import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

import { motion } from "framer-motion";
type Props = {};

const TodoApp = (props: Props) => {
  return (
    <div className="h-full">
      <HeaderSecondary />
      <div className="flex flex-col  items-center">
        <h1 className="text-3xl mt-20 uppercase  text-gray-400 tracking-[15px]">
          Todo
        </h1>
        <h2 className="text-xl uppercase text-gray-500 tracking-[15px] mt-4">
          Features
        </h2>

        <ul className="text-gray-500 flex flex-col md:flex-row justify-around gap-3 w-1/2 mt-4">
          <li className="hover:text-gray-300 cursor-default underline md:no-underline">
            Create Task
          </li>
          <li className="hover:text-gray-300 cursor-default underline md:no-underline">
            Delete Task
          </li>
          <li className="hover:text-gray-300 cursor-default underline md:no-underline">
            Set as completed
          </li>
          <li className="hover:text-gray-300 cursor-default underline md:no-underline">
            Filter Tasks
          </li>
        </ul>
        <p className="w-1/3 text-gray-500 mt-4">
          "Full Stack Todo App. Create list of things to do where you can set as
          completed. Filter between task active or completed. Responsive",
        </p>
        <div className="flex flex-col justify-center items-center gap-2 w-2/3 m-5 ">
          <motion.img
            src="../todo-app.png"
            className="w-full max-w-3xl h-[200px] md:h-[300px] object-cover"
            whileHover={{
              scale: 1.01,
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
      {/* <div className="flex flex-col items-center pb-5 w-[360px] md:w-2/3 h-[360px] mx-auto">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=oyVwsQpc1pY"
          width="100%"
          height="100%"
        />
      </div> */}
      <div className="flex flex-col items-center pb-5">
        <Link href="https://github.com/ugabb/Todo-App" target="_blank">
          <AiFillGithub className="icons" size={60} />
        </Link>
      </div>
    </div>
  );
};

export default TodoApp;
