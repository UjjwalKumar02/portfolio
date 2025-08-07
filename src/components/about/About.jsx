import React, {useState} from 'react'
import {motion} from 'framer-motion'

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

// d:p-7 px-4 py-8 md:my-10 my-8
  return (
    <motion.section
    id='about' 
    className='w-full bg-white dark:bg-[#171717] dark:text-gray-300'
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
      <div className='md:w-[50%] mx-auto dark:border-gray-700 px-10 py-14 border-x border-t border-gray-300 pt-20'>
        <p className='md:text-[1.7rem] text-[1.5rem]  text-[#004eff]'>
          About
        </p>
        <p className='mt-8'>
          Hi, I'm an undergraduate student passionate about learning technologies like web development and machine learning to solve real-world problems.
        </p>
      </div>
    </motion.section>
  )
}

export default About