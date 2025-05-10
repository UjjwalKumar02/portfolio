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
    className='md:w-[60%] w-[90%] px-4 md:py-20 py-16 md:text-[1.2rem] text-[1rem] mx-auto border-b border-gray-200'
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
      <p className='md:text-[1.7rem] text-[1.5rem] font-semibold text-[#e76231]'>
        Projects
      </p>

      <div className='flex md:flex-row flex-col flex-wrap gap-10 mt-6'>
        <ProjectCard 
          projectName={"Spam email classifier"} 
          desc={"Built a spam email classifier using NLP techniques, optimized a Multinomial Naive Bayes model, and deployed it using Flask."}
          pfp={pf1}
          github={"https://github.com/UjjwalKumar02/Spam-Email-Classifier"}
        />
        <ProjectCard 
          projectName={"Pokémon Image Predictor"} 
          desc={"Built a CNN-based image classifier to identify Pokémons from user-uploaded images. Developed a full-stack web app with ReactJS and FastAPI for real-time predictions."}
          pfp={pf2}
          github={"https://github.com/UjjwalKumar02/CNN-Based-Pokemon-Image-Predictor"}
        />
      </div>
    </motion.section>
  )
}

export default Projects