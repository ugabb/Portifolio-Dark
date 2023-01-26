import React from 'react'
import { motion } from 'framer-motion'

import ProjectCard from './ExperienceCard'

type Props = {}

const Experience = (props: Props) => {
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
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0 '>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-30'>Projects</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#45c7e5]/80 scrollbar-thin'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </motion.div>
  )
}

export default Experience