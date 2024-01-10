import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
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
      className="h-screen flex flex-col text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>

      <div className="flex flex-col lg:flex-row gap-5">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{
            once: true,
          }}
          src={"/me.png"}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10 ">
          <h4 className="text-4xl font-semibold">Here is a little about me!</h4>
          <p className="text-sm md:text-base lg:w-1/2">
            Hi, my name is{" "}
            <span className="underline decoration-[#45c7e5]/50">Gabriel</span>{" "}
            Passionate for Programming and Design. Computer Science and Web.
          </p>
          <li className="text-sm md:text-base lg:w-1/2">22 years old</li>

        </div>
      </div>

    </motion.div>
  );
};

export default About;
