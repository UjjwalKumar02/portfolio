import React from 'react'
import SkillBox from '../skill/SkillBox'
import { PiLineVertical } from 'react-icons/pi'

const ProjectBox = ({name, desc, img, live, github}) => {
  return (
    <div>
      <div className='border border-gray-200 rounded'>
        <img src={img} alt="" className='rounded'/>
      </div>

      <div className='py-2 space-y-2'>
        <h2 className='text-2xl font-medium'>
          {name}
        </h2>

        <p className='text-gray-900'>
          {desc}
        </p>

        <div className='flex gap-1 mt-2 items-center'>
          {/* {links && links.map((e) => (
          <a className='font-medium underline' href=''>{e}</a>
        ))} */}
          <a href={live} className='font-medium underline'>Live link</a>
          <PiLineVertical />
          <a href={github} className='font-medium underline'>github</a>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectBox