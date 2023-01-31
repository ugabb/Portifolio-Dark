import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ProjectDetails = ({}: Props) => {
  return (
    <div className="flex flex-col  items-center ">
      <h1 className="text-3xl mt-20 uppercase  text-gray-400 tracking-[15px]">
        Todo
      </h1>
      <h2 className="text-xl uppercase text-gray-500 tracking-[15px] mt-4">
        Features
      </h2>

      <ul className="text-gray-500 flex justify-around w-1/2 mt-4">
        <li className="hover:text-gray-300 cursor-default">Create Task</li>
        <li className="hover:text-gray-300 cursor-default">Delete Task</li>
        <li className="hover:text-gray-300 cursor-default">Set as completed</li>
        <li className="hover:text-gray-300 cursor-default">Filter Tasks</li>
      </ul>
      <p className="w-1/3 text-gray-500 text-center mt-4">
        {" "}
        "Full Stack Todo App. Create list of things to do where you can set as
        completed. Filter between task active or completed. Responsive",
      </p>
      <div className="flex flex-col gap-2 w-2/3 m-5 ">
        <motion.img
          src="../todo-app.png"
          className="w-full h-[200px] md:h-[300px] object-cover"
          whileHover={{
            scale: 1.3,
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
          }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default ProjectDetails;
