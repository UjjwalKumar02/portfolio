import React, {useState} from 'react'
import {motion} from 'framer-motion'

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

// d:p-7 px-4 py-8 md:my-10 my-8
  return (
    <motion.section
    id='about' 
    className='w-full md:text-[1.2rem] text-[1rem] text-gray-800 md:py-20 py-16 px-4 bg-[#f5f5f5] dark:bg-[#171717] dark:text-[#a3a3a3]'
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
      <div className='md:w-[60%] w-[90%] mx-auto dark:border-gray-700 '>
        <p className='md:text-[1.7rem] text-[1.5rem] font-semibold text-[#fe6a34]'>
          About
        </p>
        <p className='mt-4'>
          Hi, I'm an undergraduate student passionate about learning technologies like web development and machine learning to solve real-world problems.
        </p>
      </div>
    </motion.section>
  )
}

export default About