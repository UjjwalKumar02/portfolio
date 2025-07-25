import React, {useState} from 'react'
import {motion} from 'framer-motion'
import mait from "/public/mait.jpg"


// text-gray-800
const Education = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className='w-full md:py-20 py-16 px-4 md:text-[1.2rem] text-[1rem] text-gray-800 mx-auto bg-[#f5f5f5] dark:bg-[#171717] dark:text-[#a3a3a3]'
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
      <div className='md:w-[60%] w-[90%] mx-auto'>
        <p className='md:text-[1.7rem] text-[1.5rem] font-semibold text-[#fe6a34]'>
          Education
        </p>

        

        <div className='flex md:gap-9 gap-5 mt-5'>
          <img src={mait} alt="" className='mt-2 h-15 rounded-lg border border-gray-200 dark:border-gray-700'/>
          <div className='md:space-y-1 space-y-2.5'>
            <p className='font-semibold md:text-[1.35rem] text-[1.1rem] dark:text-[#f5f5f5]'>
            Maharaja Agrasen Institute of Technology
            </p>
            <p>Bachelor of Technology in Electronics and Communication</p>
            <p>2022 - Present</p>
            <p className='mt-8 italic'>Minor in Artificial Intelligence and Machine Learning</p>
            <p className='itali'>CGPA: 7.8</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Education




{/* <div className='w-full mt-4 flex sm:flex-row flex-col gap-3 justify-between'>
        <div>
          <p className='font-semibold mb-1'>Bachelor of Technology</p>
          <p>Maharaja Agrasen Institute of Technology, Delhi</p>
        </div>
        <p>2022 - ongoing</p>
      </div> */}