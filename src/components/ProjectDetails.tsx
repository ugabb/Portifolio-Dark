import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
type Props = {};



const ProjectDetails = ({ }: Props) => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl text-krona-one text-gray-400">Note App</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectDetails;
