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
    className='w-full px-4 md:py-20 py-16 md:text-[1.2rem] text-[1rem] bg-[#f5f5f5] dark:bg-[#171717] dark:text-[#a3a3a3]'
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
      <div className='md:w-[60%] w-[90%] mx-auto'>
        <p className='md:text-[1.7rem] text-[1.5rem] font-semibold text-[#fe6a34]'>
          Projects
        </p>

        <div className='flex md:flex-row flex-col flex-wrap gap-10 mt-6'>
          <ProjectCard 
            projectName={"Authify"} 
            desc={"A web app built with Next.js that implements JWT authentication for secure user login."}
            pfp={pf1}
            github={"https://github.com/UjjwalKumar02/Authify"}
          />
          <ProjectCard 
            projectName={"MailSense"} 
            desc={"A web app that uses NLP-based machine learning model to classify messages as spam or ham in real time."}
            pfp={pf2}
            github={"https://github.com/UjjwalKumar02/MailSense"}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Projects