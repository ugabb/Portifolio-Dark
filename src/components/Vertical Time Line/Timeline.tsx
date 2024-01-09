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
                contentStyle={{ background: '#c2d9f8', color: '#e7e7e7' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(147 197 253)' }}
                date="2023 - atual"
                iconStyle={{ background: 'rgb(147 197 253)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-xl text-gradient font-bold">Estágio Desenvolvimento FullStack</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-blue-400">Ministério do Meio Ambiente</h4>
                <p className='text-zinc-700'>Desenvolvimento web com Angular e Spring Boot para o Ministério do Meio Ambiente gerenciar projetos ambientais nacionais e internacionais.</p>
                <Link className='flex items-center gap-1 text-blue-500 font-semibold hover:underline' href={"https://geprod.mma.gov.br/"} target='_blank'>Geprod <GoLinkExternal /></Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#c2d9f8', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(147 197 253)' }}
                date="2023 - atual"
                iconStyle={{ background: 'rgb(147 197 253)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-xl text-gradient font-bold">Estágio Desenvolvimento FullStack</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-blue-400">Ministério do Meio Ambiente</h4>
                <p className='text-zinc-700'>Desenvolvimento web com Angular e Spring Boot para o Ministério do Meio Ambiente gerenciar projetos ambientais nacionais e internacionais.</p>
                <Link className='flex items-center gap-1 text-blue-500 font-semibold hover:underline' href={"https://geprod.mma.gov.br/"} target='_blank'>Geprod <GoLinkExternal /></Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#c2d9f8', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(147 197 253)' }}
                date="2023 - atual"
                iconStyle={{ background: 'rgb(147 197 253)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-xl text-gradient font-bold">Estágio Desenvolvimento FullStack</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-blue-400">Ministério do Meio Ambiente</h4>
                <p className='text-zinc-700'>Desenvolvimento web com Angular e Spring Boot para o Ministério do Meio Ambiente gerenciar projetos ambientais nacionais e internacionais.</p>
                <Link className='flex items-center gap-1 text-blue-500 font-semibold hover:underline' href={"https://geprod.mma.gov.br/"} target='_blank'>Geprod <GoLinkExternal /></Link>
            </VerticalTimelineElement>

        </VerticalTimeline>
    )
}

export default Timeline