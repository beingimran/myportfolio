import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TiltCard from './motion/TiltCard'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <TiltCard max={8} lift={30}>
      <article className='group relative overflow-hidden border border-line bg-surface'>
        <Image className='aspect-[16/10] object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100' src={backgroundImg} alt={title} />
        <div className='flex items-center justify-between border-t border-line p-5'>
          <div><h3 className='text-xl'>{title}</h3><p className='mt-1 font-mono text-xs uppercase tracking-widest text-muted'>{tech}</p></div>
          <Link href={projectUrl} className='flex h-10 w-10 items-center justify-center border border-line-strong text-xl text-accent transition duration-300 hover:bg-accent hover:text-accent-ink group-hover:rotate-45' aria-label={`View ${title}`}>↗</Link>
        </div>
      </article>
    </TiltCard>
  )
}

export default ProjectItem
