import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import '../projects'
import Link from 'next/link'
import projects from '../projects'
import { IProject } from '@/IProjects'
import { AiFillGithub } from 'react-icons/ai'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { GoLinkExternal } from 'react-icons/go'


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
    <motion.a
      target='_blank'
      href={project.deploy}
      className='w-full lg:w-[450px] xl:w-[600px] flex flex-col justify-center items-center cursor-pointer transition-all hover:scale-[1.02] relative z-30'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {projectHover && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='project-border center z-30 hidden lg:flex relative'>
                <div className="flex justify-center items-center gap-3 max-w-sm mx-auto">
                  {project.technologies.map(tech => (
                    <Image width={1920} height={1080} alt={tech.name} className='h-8 w-8' key={tech.name} src={tech.imageUrl} />
                  ))}
                </div>
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className='text-wild-world md:text-4xl lg:text-6xl text-white  text-center uppercase'>{project?.name}</motion.h1>

              </motion.div>
            )}
            {projectHover && (
              <Link onMouseEnter={handleProjectShow}
                onMouseLeave={handleProjectHide} className={`absolute top-3 right-3 text-6xl hover:text-blue-300 z-50 `} href={project.repo} hidden={!project.repo} target='_blank'>
                <AiFillGithub />
              </Link>
            )}


            <motion.div
              onMouseEnter={handleProjectShow}
              onMouseLeave={handleProjectHide}
            >
              <h2 className='lg:hidden text-krona-one text-gray-400 uppercase text-gradient-blues'>{project?.name}</h2>
              <Image className={`rounded-xl transition-all ease-in-out delay-75 h-[350px] object-cover ${projectHover ? 'brightness-50 shadow-white/20 shadow-md' : 'opacity-100'}`} src={project.photo} width={700} height={470} alt='project image' />
            </motion.div>

            <div className="flex justify-center items-center gap-3 max-w-sm mb-5 p-3 mx-auto lg:hidden">
              {project.technologies.map(tech => (
                <Image width={1920} height={1080} alt={tech.name} className='h-8 w-8' key={tech.name} src={tech.imageUrl} />
              ))}
            </div>
          </TooltipTrigger>

          {project.deploy && (
            <TooltipContent className='bg-gradient-to-b from-blue-400 to-[#27A8CF] text-white border-none font-bold text-xl drop-shadow-md'>
              <GoLinkExternal />
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>


    </motion.a>
  )
}

export default ProjectsCard