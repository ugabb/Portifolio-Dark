import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { AiOutlineLoading } from "react-icons/ai";

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
      className="lg:h-screen flex flex-col text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>

      <div className="flex flex-col lg:flex-row gap-5 curved">
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
          className="md:mb-0 flex-shrink-0  w-56 h-56 rounded-full object-cover md:rounded-lg mx-auto md:w-64 md:h-96 xl:w-[500px] xl:h-full"
        />

        <div className="space-y-5 px-0 md:px-10 ">
          <h4 className="text-4xl font-semibold">Here is a little about me!</h4>
          <p className="text-sm md:text-lg">
            Hi, my name is{" "}
            <span className="underline font-bold decoration-[#45c7e5]/50">Gabriel</span>{" "}
            Passionate for Programming and Design. Computer Science and Web.
          </p>

          <ul>
            <li className="text-sm md:text-base list-disc list-inside marker:text-blue-300">More than a year of experience in web development</li>
            <div className="flex gap-1 items-center">
              <li className="text-sm md:text-base list-disc list-inside  marker:text-blue-300">Computer Science Student <span className="text-gradient-blues">7 of 8 semesters </span></li>
              <AiOutlineLoading className="animate-spin text-blue-300" />
            </div>
            <li className="text-sm md:text-base list-disc list-inside  marker:text-blue-300">Web Developer</li>
            <li className="text-sm md:text-base list-disc list-inside  marker:text-blue-300">Current studying <span className="text-gradient-bw font-bold">Next</span>, <span className="text-gradient-reds font-bold">Angular</span> and <span className="text-gradient-greens font-bold">Spring boot 3</span></li>
            <li className="text-sm md:text-base list-disc list-inside  marker:text-blue-300">22 years old</li>
          </ul>

          <Carousel className="lg:w-1/2 mx-auto">
            <CarouselContent >
              <CarouselItem>
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
                  src={"/mma.jpg"}
                  className=" w-full  object-cover rounded-lg"
                />

              </CarouselItem>
              <CarouselItem>
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
                  src={"/image-generator.png"}
                  className="h-full object-cover rounded-lg"
                />

              </CarouselItem>
              <CarouselItem>
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
                  className=" object-cover rounded-lg"
                />

              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>


          {/* <div className="grid grid-cols-2 gap-3 mx-auto w-[350px]">
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
              className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-full md:h-full"
            />
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
              className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-full md:h-full"
            />
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
              className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-full md:h-full"
            />
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
              className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-full md:h-full"
            />
          </div> */}
        </div>
      </div>

    </motion.div>
  );
};

export default About;
