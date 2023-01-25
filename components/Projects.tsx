import React from 'react'
import { motion } from 'framer-motion'

import ProjectCard from './ProjectCard'

type Props = {}

const Projects = (props: Props) => {
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
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </motion.div>
  )
}

export default Projects