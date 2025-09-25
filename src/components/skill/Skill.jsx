import React from 'react'
import SkillBox from './SkillBox'

const Skill = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl'>
        Tech
      </h1>

      <div className='mt-6 space-y-6 '>
        <div className='flex gap-6 items-center'>
          <p>
            Languages :
          </p>
          <div className='flex gap-2 items-center'>
            <SkillBox skillName={"C++"}/>
            <SkillBox skillName={"TypeScript"}/>
            <SkillBox skillName={"JavaScript"}/>
            <SkillBox skillName={"Python"}/>
          </div>
        </div>

        <div className='flex gap-6 items-center'>
          <p>
            Frontend :
          </p>
          <div className='flex gap-2 items-center'>
            <SkillBox skillName={"Next.js"}/>
            <SkillBox skillName={"React.js"}/>
            <SkillBox skillName={"Tailwind CSS"}/>
            <SkillBox skillName={"HTML"}/>
            <SkillBox skillName={"CSS"}/>
          </div>
        </div>
        
        <div className='flex gap-6 items-center'>
          <p>
            Backend :
          </p>
          <div className='flex gap-2 items-center'>
            <SkillBox skillName={"Node.js"}/>
            <SkillBox skillName={"Express.js"}/>
            <SkillBox skillName={"FastAPI"}/>
            <SkillBox skillName={"REST API"}/>
          </div>
        </div>

        <div className='flex gap-6 items-center'>
          <p>
            Database :
          </p>
          <div className='flex gap-2 items-center'>
            <SkillBox skillName={"MongoDB"}/>
            <SkillBox skillName={"PostgreSQL"}/>
          </div>
        </div>

        <div className='flex gap-6 items-center'>
          <p>
            Machine <br /> Learning :
          </p>
          <div className='flex gap-2 items-center'>
            <SkillBox skillName={"Supervised"}/>
            <SkillBox skillName={"Unsupervised"}/>
            <SkillBox skillName={"NLP"}/>
            <SkillBox skillName={"scikit-learn"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill