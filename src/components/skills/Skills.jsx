import React, {useState} from 'react'
import {motion} from 'framer-motion'


const Skills = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className=' text-gray-800 bg-white dark:bg-[#171717] dark:text-[#a3a3a3]'
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
      <div className='md:w-[50%] mx-auto border-x border-t border-gray-300 px-10 py-14'>
        <p className='md:text-[1.7rem] text-[1.5rem]  text-[#004eff] '>
          Technical Skills
        </p>
        
        <div className='flex flex-col gap-4 mt-8 '>
          <div className='flex gap-2 md:items-center'>
            <p className='font-semibold md:text-[1.35rem] text-[1.1rem] dark:text-[#f5f5f5]'>Languages:</p>
            <p>C++, Python, Javascript</p>
          </div>
          <div className='flex  gap-2 md:items-center '>
            <p className='font-semibold md:text-[1.35rem] text-[1.1rem] dark:text-[#f5f5f5]'>Frontend:</p>
            <p>Next.js, React.js, Tailwind CSS, HTML, CSS</p>
          </div>
          <div className='flex gap-2 md:items-center'>
            <p className='font-semibold md:text-[1.35rem] text-[1.1rem] dark:text-[#f5f5f5]'>Backend:</p>
            <p>Node.js, Express.js, RESTful APIs</p>
          </div>
          <div className='flex gap-2 md:items-center'>
            <p className='font-semibold md:text-[1.35rem] text-[1.1rem] dark:text-[#f5f5f5]'>Machine learning:</p>
            <p>Supervised & Unsupervised Algorithms, NLP</p>
          </div>
          <div className='flex gap-2 md:items-center'>
            <p className='font-semibold md:text-[1.35rem] text-[1.1rem] dark:text-[#f5f5f5]'>Others:</p>
            <p>SQL, Flask, Streamlit, Git</p>
          </div>
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