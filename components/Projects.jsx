import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';

const projects = [
  { title: 'Property Finder', backgroundImg: propertyImg, projectUrl: '/property', tech: 'React JS' },
  { title: 'Crypto App', backgroundImg: cryptoImg, projectUrl: '/crypto', tech: 'React JS' },
  { title: 'Netflix App', backgroundImg: netflixImg, projectUrl: '/netflix', tech: 'React JS' },
  { title: 'Twitch UI', backgroundImg: twitchImg, projectUrl: '/twitch', tech: 'Next JS' },
];

const Projects = () => {
  return (
    <section id='projects' className='section-shell w-full'>
      <div className='mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16'>
        <Reveal as='p' className='eyebrow'>Selected work</Reveal>
        <div className='flex flex-col justify-between gap-4 pb-12 md:flex-row md:items-end'>
          <Reveal as='h2' delay={0.1} className='max-w-xl pt-4 text-5xl leading-none tracking-[-0.04em] sm:text-6xl'>
            Built to be used, not just admired.
          </Reveal>
          <Reveal as='p' delay={0.2} className='max-w-xs text-sm leading-relaxed text-muted'>
            A small collection of interfaces, products, and experiments across the stack.
          </Reveal>
        </div>
        <RevealGroup className='grid gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <RevealItem key={project.title}>
              <ProjectItem {...project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default Projects;
