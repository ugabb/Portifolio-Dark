import React, { useState } from "react";

import { AiOutlineTwitter, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {


  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
            <RiLinkedinBoxFill className="icons" size={30} />
          </Link>
          <Link href="https://github.com/ugabb" target="_blank">
            <AiFillGithub className="icons" size={30} />
          </Link>
          <Link href="https://twitter.com/uGabDev" target="_blank">
            <AiOutlineTwitter className="icons" size={30} />
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
        <Link
          className="uppercase md:inline-flex text-sm text-gray-400 "
          href="#contact"
        >
          <AiOutlineMail className="icons" size={20} />
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
