import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import '../projects'
import Link from 'next/link'
import projects from '../projects'
import { IProject } from '@/IProjects'


type Props = {
  project: IProject
}


const ProjectsCard = ({ project }: Props) => {
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
          className='project-border center z-20 hidden lg:flex'>
          <div className="flex justify-center items-center gap-3 max-w-sm mx-auto">
            {project.technologies.map(tech => (
              <Image width={1920} height={1080} alt={tech.name} className='h-8 w-8' key={tech.name} src={tech.imageUrl} />
            ))}
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className='text-wild-world text-6xl text-white  text-center uppercase'>{project?.name}</motion.h1>
        </motion.div>
      )}


        <motion.div
          onHoverStart={handleProjectShow}
          onHoverEnd={handleProjectHide}
        >
          <h2 className='lg:hidden text-krona-one text-gray-400 uppercase text-gradient-blues'>{project?.name}</h2>
          <Image className={`rounded-xl transition-all ease-in-out delay-75 h-[350px] object-cover ${projectHover ? 'brightness-50 shadow-white/20 shadow-md' : 'opacity-100'}`} src={project.photo} width={700} height={470} alt='project image' />
        </motion.div>

      <div className="flex justify-center items-center gap-3 max-w-sm mb-5 p-3 mx-auto lg:hidden">
        {project.technologies.map(tech => (
          <Image width={1920} height={1080} alt={tech.name} className='h-8 w-8' key={tech.name} src={tech.imageUrl} />
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectsCard