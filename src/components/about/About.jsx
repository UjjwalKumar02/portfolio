import React, {useState} from 'react'
import {motion} from 'framer-motion'

const About = () => {
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
      <div>
        <p className='md:text-[1.5rem] text-[1.25rem] font-semibold text-[#e76231]'>
          About
        </p>
        <p className='mt-4'>
        I'm an undergraduate engineer, and I am learning and developing machine learning models.
        </p>
        <p className='mt-4'>
        I'm passionate about exploring how different machine learning techniques can solve real-world problems.
        </p>
      </div>
    </motion.section>
  )
}

export default About