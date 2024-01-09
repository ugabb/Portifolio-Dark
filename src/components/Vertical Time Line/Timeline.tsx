import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GoLinkExternal } from 'react-icons/go';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Props = {}

const Timeline = (props: Props) => {
    return (
        <VerticalTimeline >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#eaf1fa', color: '#e7e7e7' }}
                contentArrowStyle={{ borderRight: '7px solid  #cee1fa' }}
                date="2023 - atual"
                iconStyle={{ background: 'rgb(147 197 253)', color: '#fff' }}
                icon={<Image className='rounded-full' src={"/mma.jpg"} fill alt='MMA logo' />}
            >
                <h3 className="vertical-timeline-element-title text-xl text-gradient-blues font-bold">Estágio Desenvolvimento FullStack</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-emerald-800">Ministério do Meio Ambiente</h4>
                <p className='text-zinc-700'>Desenvolvimento web com Angular e Spring Boot para o Ministério do Meio Ambiente gerenciar projetos ambientais nacionais e internacionais.</p>
                <Link className='flex items-center gap-1 text-emerald-400 font-semibold hover:underline' href={"https://geprod.mma.gov.br/"} target='_blank'>Geprod <GoLinkExternal /></Link>
            </VerticalTimelineElement>



        </VerticalTimeline>
    )
}

export default Timeline