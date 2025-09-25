import React from 'react'

const SkillBox = ({skillName}) => {
  return (
    <div className='w-fit bg-gray/80 text-gray-800 -md px-5 shadow border border-gray-300'>
      {skillName}
    </div>
  )
}

export default SkillBox