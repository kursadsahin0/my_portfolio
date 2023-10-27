'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    image: '/images/projects/project1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'NFT Website',
    image: '/images/projects/project2.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/kursadsahin0/nft_reactjs',
    previewUrl: 'https://master--beamish-cobbler-01b388.netlify.app/',
  },
  {
    id: 3,
    title: 'Restaurant Website',
    image: '/images/projects/project3.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/kursadsahin0/restaurant-reactjs',
    previewUrl: 'https://dancing-fudge-34a9da.netlify.app/',
  },
  {
    id: 4,
    title: 'Food Rescipe Website',
    image: '/images/projects/project4.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/kursadsahin0/food-recipe-app',
    previewUrl: 'https://elegant-babka-19f03e.netlify.app/',
  },
  {
    id: 5,
    title: 'E-Commerce Website',
    image: '/images/projects/project5.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/kursadsahin0/e-commerce',
    previewUrl: 'https://kursadsahin0.github.io/e-commerce/',
  },
  {
    id: 6,
    title: 'Trivia App',
    image: '/images/projects/project6.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/kursadsahin0/triviaGame',
    previewUrl: 'https://kursadsahin0.github.io/triviaGame/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;