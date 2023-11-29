import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import Skill from './Skill'

type Props = {}

const ProjectsCard = (props: Props) => {
  const [projectHover, setProjectHover] = useState(false);

  const handleProjectShow = () => {
    setProjectHover(true)
  }

  const handleProjectHide = () => {
    setProjectHover(false)
  }
  return (
    <div className='w-[600px] flex flex-col justify-center items-center relative cursor-pointer'>

      {projectHover && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='center z-10  pointer-events-none'>
          <div className="flex justify-center items-center gap-3 max-w-sm mx-auto">
            <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
            <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' />
            <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' />
            <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
          </div>

          <h1 className='text-wild-world text-6xl text-white  text-center'>DEV-SPOTLIGHT</h1>
        </motion.div>
      )}

      <motion.div
        onHoverStart={handleProjectShow}
        onHoverEnd={handleProjectHide}
      >
        <Image className={`rounded-xl transition-all ease-in-out delay-75  ${projectHover ? 'brightness-50 shadow-white shadow-md' : 'opacity-100'}`} src={'/dev-spotlight.png'} width={700} height={470} alt='project image' />
      </motion.div>

    </div>
  )
}

export default ProjectsCard