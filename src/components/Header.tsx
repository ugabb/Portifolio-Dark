import React, { useState } from "react";

import { AiOutlineTwitter, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({ }: Props) {


  return (
    <header className="sticky top-0 flex p-5 items-start justify-between  mx-auto w-full  xl:items-center backdrop-blur-sm border-b border-blue-300 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent z-50">
      <div className="flex justify-between max-w-7xl w-full mx-auto">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          {/* Social Icons */}

          <div className="flex gap-5">
            <Link href="https://www.linkedin.com/in/ugab/" target="_blank">
              <RiLinkedinBoxFill className="icons text-xl lg:text-2xl" />
            </Link>
            <Link href="https://github.com/ugabb" target="_blank">
              <AiFillGithub className="icons text-xl lg:text-2xl" />
            </Link>
            <Link href="https://twitter.com/uGabDev" target="_blank">
              <AiOutlineTwitter className="icons text-xl lg:text-2xl" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center gap-3 text-gray-300 cursor-pointer"
        >
          <Link href={'/Gabriel Silva Barros Desenvolvedor Front End.pdf'} className="hover:text-sky-300 hover:underline transition-all ease-in-out" target="_blank">View Resume</Link>
        </motion.div>
      </div>

    </header>
  );
}

export default Header;
