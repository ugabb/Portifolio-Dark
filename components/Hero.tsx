import React from "react";
import Image from "next/image";
type Props = {};

//react simple typewriter
import { useTypewriter } from "react-simple-typewriter";
import { Cursor } from "react-simple-typewriter";

// components
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, my is Gabriel", "Dev", "Flamengo"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 item-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={"/../public/me.jpg"}
        priority={true}
        width={32}
        height={32}
        alt={"uGabDev picture"}
        className="relative rounded-full h-32 w-32 object-cover mx-auto"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Softwate Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#45c7e5" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>

          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          {/* <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link> */}
          <Link href="#contact">
            <button className="hero-button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
