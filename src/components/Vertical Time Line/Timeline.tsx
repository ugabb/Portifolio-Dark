import { Tooltip, TooltipProvider } from '@radix-ui/react-tooltip';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GoLinkExternal } from 'react-icons/go';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TooltipContent, TooltipTrigger } from '../ui/tooltip';

type Props = {}

const Timeline = (props: Props) => {
    return (
        <VerticalTimeline className='h-screen'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: ' linear-gradient(45deg, #cbeecd 50%, #6af58d 100%)', color: '#e7e7e7' }}
                contentArrowStyle={{ borderRight: '7px solid  #6af58d' }}
                date="2023 - atual"
                iconStyle={{ background: 'rgb(147 197 253)', color: '#fff' }}
                icon={<Image className='rounded-full' src={"/mma.jpg"} fill alt='MMA logo' />}

            >
                <h3 className="vertical-timeline-element-title text-xl text-gradient-greens font-bold">FullStack Web development Internship</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-emerald-800">Ministry of the Environment</h4>
                <p className='text-zinc-700'>Web development with Angular and Spring Boot for the Ministry of the Environment to manage national and international environmental projects.</p>

                <div className="flex gap-3 mt-3">
                    <TooltipProvider>
                        {/* Agular tooltip */}
                        <Tooltip>
                            <TooltipTrigger asChild className='cursor-pointer'>
                                <img width={30} height={30} alt='React' src={'https://www.alura.com.br/artigos/assets/novidades-angular-17/imagem1.gif'} />
                            </TooltipTrigger>
                            <TooltipContent className='text-white bg-blue-500 border-none'>
                                Angular
                            </TooltipContent>
                        </Tooltip>

                        {/* Spring boot tooltip */}
                        <Tooltip>
                            <TooltipTrigger asChild className='cursor-pointer'>
                                <Image width={30} height={30} alt='React' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'} />
                            </TooltipTrigger>
                            <TooltipContent className='text-white bg-blue-500 border-none'>
                                Spring Boot
                            </TooltipContent>
                        </Tooltip>

                        {/* Postgres tooltip */}
                        <Tooltip>
                            <TooltipTrigger asChild className='cursor-pointer'>
                                <Image width={30} height={30} alt='React' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'} />
                            </TooltipTrigger>
                            <TooltipContent className='text-white bg-blue-500 border-none'>
                                PostgresSQL
                            </TooltipContent>
                        </Tooltip>

                        {/* Typescript tooltip */}
                        <Tooltip>
                            <TooltipTrigger asChild className='cursor-pointer'>
                                <Image width={30} height={30} alt='React' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'} />

                            </TooltipTrigger>
                            <TooltipContent className='text-white bg-blue-500 border-none'>
                                Typescript
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <Link className='flex items-center gap-1 text-emerald-400 font-semibold hover:underline mt-3' href={"https://geprod.mma.gov.br/"} target='_blank'>Geprod <GoLinkExternal /></Link>
            </VerticalTimelineElement>

            {/* Creci */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-screen "
                contentStyle={{ background: ' linear-gradient(110deg,#abcdf3  50%, #4e80c2 100%)', color: '#e7e7e7' }}
                contentArrowStyle={{ borderRight: '7px solid  #93c5fd' }}
                date="2023 "
                iconStyle={{ background: 'rgb(147 197 253)', color: '#fff' }}
                icon={<Image className='rounded-full' src={"/wallpaper_creci.jpg"} fill alt='MMA logo' />}

            >
                <h3 className="vertical-timeline-element-title text-xl text-gradient-blues-dark font-bold">React Freelancer</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-blue-100">Creci-DF</h4>
                <p className='text-zinc-900'>Implementation of an intuitive mechanism that allows real estate agents to add details and information about new properties to the system. Listing their respective properties for sale and rent through the platform. Development of personalized profiles for agents, ensuring management and restricted access to their activities and relevant information.</p>
                <div className="flex gap-3 mt-3">
                    <TooltipProvider>
                        {/* React tooltip */}
                        <Tooltip>
                            <TooltipTrigger asChild className='cursor-pointer'>
                                <Image width={30} height={30} alt='React' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} />
                            </TooltipTrigger>
                            <TooltipContent className='text-white bg-blue-500 border-none'>
                                React
                            </TooltipContent>
                        </Tooltip>

                        {/* Tailwind tooltip */}
                        <Tooltip>
                            <TooltipTrigger asChild className='cursor-pointer'>
                                <Image width={30} height={30} alt='React' src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} />
                            </TooltipTrigger>
                            <TooltipContent className='text-white bg-blue-500 border-none'>
                                TailwindCSS
                            </TooltipContent>
                        </Tooltip>

                        {/* Typescript tooltip */}
                        <Tooltip>
                            <TooltipTrigger asChild className='cursor-pointer'>
                                <Image width={30} height={30} alt='React' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'} />

                            </TooltipTrigger>
                            <TooltipContent className='text-white bg-blue-500 border-none'>
                                Typescript
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline