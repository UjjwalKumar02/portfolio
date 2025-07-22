import React from 'react'

const Footer = () => {
  return (
    <section 
    id='contact' 
    className='md:py-10 py-8 px-4 text-[1.1rem] dark:text-[#a3a3a3] bg-[#f5f5f5] dark:bg-[#171717] text-gray-500 border-t dark:border-gray-700 border-gray-200'
    >
      <div className='md:w-[60%] w-[90%] mx-auto'>
        <div className='flex items-center justify-center font-medium gap-4'>
          <p className='pr-4 border-r-2 border-[#a3a3a3]'>
            Ujjwal Kumar
          </p>
          <div className='flex gap-2'>
            <a href="mailto:ujjwal.kumar.id@gmail.com">Email</a>
            <a href="https://github.com/ujjwalkumar02">GitHub</a>
            <a href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer