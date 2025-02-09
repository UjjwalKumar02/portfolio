import React from 'react'
import {motion} from 'framer-motion'

const SkillBoxOr = ({skill}) => {
  return (
    <motion.div 
    className='bg-[#e76231] text-gray-300 px-5 py-1 border border-gray-800 rounded-lg'
    whileHover={{
      y: -5,
      boxShadow:"0px 4px 15px rgba(0, 0, 0, 0.15)",
    }}
    initial={{y:0}}
    transition={{duration:0.3}}
    >
      {skill}
    </motion.div>
  )
}

export default SkillBoxOr