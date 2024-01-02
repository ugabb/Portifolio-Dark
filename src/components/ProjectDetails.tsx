import React from "react";
import { motion } from "framer-motion";

import 'swiper/css';
import Image from "next/image";
import Carousel from "./Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import Header from "./Header";
import TextIcon from "./TextIcon";

// icons
import { FaReact } from 'react-icons/fa'
import { IoShareSocialOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
import { BsCopy } from "react-icons/bs";

import Link from "next/link";
import ButtonWide from "./ButtonWide";
import { IProject } from "@/IProjects";

type Props = {
  projectName: string | string[] | undefined;
  project: IProject | undefined;
};

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500
};

const ProjectDetails = ({ projectName, project }: Props) => {
  console.log({ project })
  return (
    <div className=" space-y-3">
      <div className="flex flex-col max-w-7xl w-full mx-auto px-5 gap-10">
        <h1 className="text-4xl  text-left text-krona-one text-gray-400 mt-10">{projectName}</h1>
        <Carousel settings={settings}>
          <SwiperSlide >
            <Image className='object-cover' src={'/dev-spotlight.png'} width={640} height={640} alt='' />
          </SwiperSlide>
          <SwiperSlide >
            <Image className='object-cover' src={'/image-generator.png'} width={640} height={640} alt='' />
          </SwiperSlide>
          <SwiperSlide >
            <Image className='object-cover' src={'/todo-app.png'} width={640} height={640} alt='' />
          </SwiperSlide>
        </Carousel>

        <div className="flex flex-col">
          <h2 className="text-2xl  text-left text-krona-one text-gray-400">About</h2>
          <p className="text-gray-400">{project?.description}</p>
        </div>

        <section className=''>
          <h1 className='text-2xl text-gray-400 font-bold tracking-widest uppercase font-georgeTown '>Technologies</h1>
          <div className="flex gap-3">
            {project?.technologies.map((tech) => (
              <div className="flex items-center gap-3">
                <Image width={30} height={30} alt="technology" src={tech.imageUrl} />
                <p className="text-gray-400">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-2 gap-3">
            <Link href={'/'}>
              <ButtonWide icon={<GoLinkExternal className="text-blue-400" />} text='Live Demo' />
            </Link>
            <Link href={'/'}>
              <ButtonWide icon={<GoLinkExternal className="text-blue-400" />} text='Repository' />
            </Link>
            <Link href={'/'}>
              <ButtonWide icon={<BsCopy className="text-blue-400" />} text='Clone Project' />
            </Link>
            <Link href={'/'}>
              <ButtonWide icon={<IoShareSocialOutline className="text-blue-400" size={15} />} text='Share' />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
