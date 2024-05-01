import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import '../projects'
import Link from 'next/link'
import { IProject } from '@/IProjects'
import { AiFillGithub } from 'react-icons/ai'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { GoLinkExternal } from 'react-icons/go'
import { Button } from './ui/button'
import { PiArrowSquareOut } from 'react-icons/pi'
import { FaGithub } from 'react-icons/fa'


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
      className='w-full lg:w-[450px] xl:w-[600px] flex flex-col justify-center items-center transition-all hover:scale-[1.02] relative z-30 rounded-b-lg cursos-zoon-in-important'>

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
        <Image className={`rounded-t-lgtransition-all ease-in-out delay-75 h-[350px] object-cover ${projectHover ? 'brightness-50 ' : 'opacity-100'}`} src={project.photo} width={700} height={470} alt='project image' onClick={() => (document.getElementById(project.name) as HTMLDialogElement).showModal()} />
      </motion.div>

      <dialog id={project.name} className="modal">
        <div className="modal-box w-11/12 max-w-full bg-zinc-900">
          <form method="dialog" className=''>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className='flex flex-col lg:flex-row gap-3 w-full '>
            <Image className={`rounded-lg transition-all ease-in-out delay-75 w-full lg:w-2/3 object-cover ${projectHover ? 'brightness-50 ' : 'opacity-100'}`} src={project.photo} width={2000} height={2000} alt='project image' />
            <div className="lg:flex flex-col gap-3 relative w-full hidden">
              <h1 className='text-4xl font-bold text-neutral-400'>{project.name}</h1>
              <p className='text-neutral-400'>{project?.description}</p>


              <div className="flex items-center justify-between  absolute bottom-0 w-full">
                <Link href={project.deploy ? project.deploy : ""} target='_blank' className='w-full'>
                  <Button className={` w-full bg-transparent text-neutral-400 hover:bg-gradient-to-r from-sky-400 to-cyan-200 hover:text-neutral-100 rounded-none ${project.repo ? 'rounded-l-lg' : 'rounded-lg'} flex items-center gap-1`}>
                    Deploy
                    <PiArrowSquareOut size={15} />
                  </Button>
                </Link>
                {project.repo && (

                  <Link href={project.repo} target='_blank' className='w-full'>
                    <Button className=' w-full bg-transparent text-neutral-400 hover:bg-gradient-to-r from-sky-400 to-cyan-200 hover:text-neutral-100 rounded-none rounded-r-lg flex items-center gap-1'>
                      GitHub
                      <FaGithub size={15} />
                    </Button>
                  </Link>
                )}


              </div>
            </div>
          </div>
        </div>
      </dialog>


      <div className="flex items-center justify-between w-full">
        <Link href={project.deploy ? project.deploy : ""} target='_blank' className='w-full'>
          <Button className={` w-full bg-transparent text-neutral-400 hover:bg-gradient-to-r from-sky-400 to-cyan-200 hover:text-neutral-100 rounded-none ${project.repo ? 'rounded-bl-lg' : 'rounded-b-lg'} flex items-center gap-1`}>
            Deploy
            <PiArrowSquareOut size={15} />
          </Button>
        </Link>
        {project.repo && (

          <Link href={project.repo} target='_blank' className='w-full'>
            <Button className=' w-full bg-transparent text-neutral-400 hover:bg-gradient-to-r from-sky-400 to-cyan-200 hover:text-neutral-100 rounded-none rounded-br-lg flex items-center gap-1'>
              GitHub
              <FaGithub size={15} />
            </Button>
          </Link>
        )}


      </div>

      <div className="flex justify-center items-center gap-3 max-w-sm mb-5 p-3 mx-auto lg:hidden">
        {project.technologies.map(tech => (
          <Image width={1920} height={1080} alt={tech.name} className='h-8 w-8' key={tech.name} src={tech.imageUrl} />
        ))}
      </div>

    </motion.div>
  )
}

export default ProjectsCard