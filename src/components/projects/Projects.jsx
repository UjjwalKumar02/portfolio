import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='sm:w-[60%] w-90% sm:p-6 px-4 py-6 text-[1rem] text-gray-800 mx-auto'>
      <p className='text-[1.25rem] font-semibold'>
        Projects
      </p>

      <div className='flex sm:flex-row flex-col flex-wrap gap-5 mt-4'>
        <ProjectCard 
        projectName={"Project 1"} 
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem at. Delectus, aperiam, vitae facilis placeat voluptates quis "}
        />
        <ProjectCard 
        projectName={"Project 2"} 
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem at. Delectus, aperiam, vitae facilis placeat voluptates quis "}
        />
        <ProjectCard 
        projectName={"Project 3"} 
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem at. Delectus, aperiam, vitae facilis placeat voluptates quis "}
        />
      </div>
    </section>
  )
}

export default Projects