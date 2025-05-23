import React, {useState} from 'react'
import {motion} from 'framer-motion'


const Skills = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className='md:w-[60%] w-[90%] md:py-20 py-16 px-4  md:text-[1.2rem] text-[1rem] text-gray-800 mx-auto border-b border-gray-200'
    initial={{opacity:0, y:50}}
    whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
    transition={{duration:0.5, ease:'easeOut'}}
    viewport={{
      once:true, 
      amount:0.1,
      onEnter: ()=>setHasAnimated(true),
      onExit: ()=>setHasAnimated(false)
    }}
    >
      <p className='md:text-[1.7rem] text-[1.5rem] font-semibold text-black'>
        Technical Skills
      </p>
      
      <div className='flex flex-col gap-4 mt-6'>
        <div className='flex md:flex-row flex-col gap-2 md:items-center'>
          <p className='font-semibold md:text-[1.35rem] text-[1.1rem]'>Languages:</p>
          <p>Python, C++, Javascript, SQL</p>
        </div>
        <div className='flex md:flex-row flex-col gap-2 md:items-center'>
          <p className='font-semibold md:text-[1.35rem] text-[1.1rem]'>Frontend:</p>
          <p>ReactJS, Tailwind CSS, HTML, CSS</p>
        </div>
        <div className='flex md:flex-row flex-col gap-2 md:items-center'>
          <p className='font-semibold md:text-[1.35rem] text-[1.1rem]'>Machine learning:</p>
          <p>Supervised & Unsupervised Algorithms, NLP, Neural Networks</p>
        </div>
        <div className='flex md:flex-row flex-col gap-2 md:items-center'>
          <p className='font-semibold md:text-[1.35rem] text-[1.1rem]'>Others:</p>
          <p>FastAPI, Flask, Streamlit, Git</p>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills


{/* <div className='flex flex-wrap gap-1 mt-4'>
        <SkillBoxOr skill={"Python"}/>
        <SkillBox skill={"Supervised Learning"}/>
        <SkillBox skill={"Unsupervised Learning"}/>
        <SkillBox skill={"Tenserflow"}/>
        <SkillBox skill={"Pytorch"}/>
        <SkillBox skill={"Sklearn"}/>
        <SkillBox skill={"Flask"}/>
        <SkillBox skill={"Streamlit"}/>
        <SkillBox skill={"Natural Language Processing"}/>
        <SkillBox skill={"Deep Learning"}/>
      </div> */}