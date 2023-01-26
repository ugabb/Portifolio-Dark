import React from "react";

import { SocialIcon } from "react-social-icons";
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
        <SocialIcon
          url="https://www.linkedin.com/in/ugab/"
          fgColor="gray"
          bgColor="transparent"
         style={{
          color:"white"
         }}
        />
        <SocialIcon
          url="https://github.com/ugabb"
          fgColor="gray"
          bgColor="transparent"
          className="hover:text-white"
        />
        <SocialIcon
          url="https://twitter.com/uGabDev"
          fgColor="gray"
          bgColor="transparent"
          className="hover:text-white"
        />
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
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />

        <Link
          className="uppercase hidden md:inline-flex text-sm text-gray-400 "
          href="#contact"
        >
          Get in Touch
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
