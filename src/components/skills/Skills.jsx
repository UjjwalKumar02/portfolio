import React from 'react'
import SkillBox from './skillBox'

const Skills = () => {
  return (
    <section className='sm:w-[60%] w-90% sm:p-6 px-4 py-6 text-[1rem] text-gray-800 mx-auto'>
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
    </section>
  )
}

export default Skills