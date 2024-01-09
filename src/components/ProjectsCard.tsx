import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import '../projects'
import Link from 'next/link'


type Props = {
  photo: string;
  name: string;
  knowMore:string;
}


const ProjectsCard = ({ photo, name, knowMore }: Props) => {
  const [projectHover, setProjectHover] = useState(false);

  const handleProjectShow = () => {
    setProjectHover(true)
  }

  const handleProjectHide = () => {
    setProjectHover(false)
  }
  return (
    <motion.div
      className='w-full lg:w-[600px] flex flex-col justify-center items-center relative cursor-pointer transition-all hover:scale-[1.02]'>

      {projectHover && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='project-border center z-20'>
          <div className="flex justify-center items-center gap-3 max-w-sm mx-auto">
            <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
            <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' />
            <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' />
            <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className='text-wild-world text-6xl text-white  text-center uppercase'>{name}</motion.h1>
        </motion.div>
      )}

      <Link href={`/projects-details/${knowMore}`}>

        <motion.div
          onHoverStart={handleProjectShow}
          onHoverEnd={handleProjectHide}
        >
          <h2 className='lg:hidden text-krona-one text-gray-400 uppercase text-gradient-blues'>{name}</h2>
          <Image className={`rounded-xl transition-all ease-in-out delay-75 h-[350px] object-cover ${projectHover ? 'brightness-50 shadow-white/20 shadow-md' : 'opacity-100'}`} src={photo} width={700} height={470} alt='project image' />
        </motion.div>

      </Link >
    </motion.div>
  )
}

export default ProjectsCard