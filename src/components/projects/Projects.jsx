import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'

const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className='md:w-[60%] w-[90%] md:p-7 px-4 py-6 md:text-[1.25rem] text-[1rem] text-gray-300 mx-auto md:mt-10 mt-8'
    initial={{opacity:0, y:50}}
    whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
    transition={{duration:0.5, ease:'easeOut'}}
    viewport={{
      amount:0.1,
      once:false,
      onEnter: ()=>setHasAnimated(true),
      onExit: ()=>setHasAnimated(false)
    }}
    >
      <p className='md:text-[1.5rem] text-[1.25rem] font-semibold text-[#e76231]'>
        Projects
      </p>

      <div className='flex md:flex-row flex-col flex-wrap gap-5 mt-4'>
        <ProjectCard 
        projectName={"Project"} 
        desc={"coming soon..."}
        />
      </div>
    </motion.section>
  )
}

export default Projects