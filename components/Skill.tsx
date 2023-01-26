import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  icon: string;
  title: string;
};

const Skill = ({ icon, directionLeft, title }: Props) => {

  return (
    <motion.div className="flex flex-col cursor-pointer w-24 h-24  md:w-28 md:h-28 xl:w-32 xl:h-32">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" object-contain  filter group-hover:bg-white transition duration-300 ease-in-out"
        src={icon}
      />

      <motion.p
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" text-gray-500"
      >
        {title}
      </motion.p>

      {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Skill;
