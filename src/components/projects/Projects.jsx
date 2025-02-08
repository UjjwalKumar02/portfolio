import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'

const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className='sm:w-[60%] w-[90%] sm:p-7 px-4 py-6 text-[1rem] text-gray-800 mx-auto'
    initial={{opacity:0, y:50}}
    whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
    transition={{duration:0.5, ease:'easeOut'}}
    viewport={{
      amount:0.5,
      once:false,
      onEnter: ()=>setHasAnimated(true),
      onExit: ()=>setHasAnimated(false)
    }}
    >
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
    </motion.section>
  )
}

export default Projects