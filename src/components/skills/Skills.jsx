import React, {useState} from 'react'
import SkillBox from './skillBox'
import {motion} from 'framer-motion'

const Skills = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className='sm:w-[60%] w-[90%] sm:p-7 px-4 py-6 text-[1rem] text-gray-800 mx-auto'
    initial={{opacity:0, y:50}}
    whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
    transition={{duration:0.5, ease:'easeOut'}}
    viewport={{
      once:false, 
      amount:0.1,
      onEnter: ()=>setHasAnimated(true),
      onExit: ()=>setHasAnimated(false)
    }}
    >
      <p className='text-[1.25rem] font-semibold'>
        Technical Skills
      </p>
      <div className='flex flex-wrap gap-2 mt-4'>
        <SkillBox skill={"Python"}/>
        <SkillBox skill={"Supervised Learning"}/>
        <SkillBox skill={"Unsupervised Learning"}/>
        <SkillBox skill={"Tenserflow"}/>
        <SkillBox skill={"Pytorch"}/>
        <SkillBox skill={"Sklearn"}/>
        <SkillBox skill={"Flask"}/>
        <SkillBox skill={"Streamlit"}/>
        <SkillBox skill={"Natural Language Processing"}/>
        <SkillBox skill={"Deep Learning"}/>
      </div>
    </motion.section>
  )
}

export default Skills