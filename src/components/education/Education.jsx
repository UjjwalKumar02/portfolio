import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Education = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className='sm:w-[60%] w-[90%] sm:p-7 px-4 py-6 sm:text-[1.25rem] text-[1rem] text-gray-800 mx-auto'
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
      <p className='sm:text-[1.5rem] text-[1.25rem] font-semibold'>
        Education
      </p>
      <div className='w-full mt-4 flex sm:flex-row flex-col gap-2 justify-between'>
        <div>
          <p className='font-semibold'>Bachelor of Technology</p>
          <p>Maharaja Agrasen Institute of Technology, Delhi</p>
        </div>
        <p>2022 - ongoing</p>
      </div>
    </motion.section>
  )
}

export default Education