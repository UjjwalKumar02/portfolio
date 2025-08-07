import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'
import pf1 from '/public/spamClass.png'
import pf2 from '/public/pokemon.png'

const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section
    id='project' 
    className='w-full md:text-[1.2rem] text-[1rem] bg-white dark:bg-[#171717] dark:text-[#a3a3a3]'
    initial={{opacity:0, y:50}}
    whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
    transition={{duration:0.5, ease:'easeOut'}}
    viewport={{
      amount:0.1,
      once:true,
      onEnter: ()=>setHasAnimated(true),
      onExit: ()=>setHasAnimated(false)
    }}
    >
      <div className='md:w-[50%]  mx-auto px-10 py-14 border-x border-t border-gray-300 pt-20'>
        <p className='md:text-[1.7rem] text-[1.5rem]  text-[#004eff] '>
          Projects
        </p>

        <div className='flex flex-wrap gap-4 mt-8 justify-center'>
          <ProjectCard 
            projectName={"Authify"} 
            desc={"A Next.js app that implements JWT authentication for secure user login."}
            pfp={pf1}
            github={"https://github.com/UjjwalKumar02/Authify"}
          />
          <ProjectCard 
            projectName={"MailSense"} 
            desc={"A NLP-based ML model to classify messages as spam or ham in real time."}
            pfp={pf2}
            github={"https://github.com/UjjwalKumar02/MailSense"}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Projects